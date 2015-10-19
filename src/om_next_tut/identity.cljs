(ns om-next-tut.identity
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [cljs.test :refer-macros [is async]]
            [sablono.core :as sab :include-macros true]
            [devcards.core :as dc]
            ;;            om-next-tut.datascript
            [om.dom :as dom])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest dom-node defcard-doc]]))


(enable-console-print!)


(def init-data
  {:list/one [{:name "John" :points 0}
              {:name "Mary" :points 0}
              {:name "Bob"  :points 0}]
   :list/two [{:name "Mary" :points 0 :age 27}
              {:name "Gwen" :points 0}
              {:name "Jeff" :points 0}]})

(defcard-doc
  "We use om/dispatch for help withmultimethods"
  (dc/mkdn-pprint-source om/dispatch)
  )

(defmulti read om/dispatch)

(defn get-people [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(defmethod read :list/one
  [{:keys [state] :as env} key params]
  {:value (get-people state key)})

(defmethod read :list/two
  [{:keys [state] :as env} key params]
  {:value (get-people state key)})

(defui Person
  static om/Ident
  (ident [this {:keys [name]}]
    [:person/by-name name])
  static om/IQuery
  (query [this]
    '[:name :points :age])
  Object
  (render [this]
    (println "Render Person" (-> this om/props :name))
    (let [{:keys [points name foo] :as props} (om/props this)]
      (sab/html
       [:dom/li
        [:dom/label (str name ", points: " points)]
        [:dom/button
         {:onClick
          (fn [e]
            (om/transact! this
                          `[(points/increment ~props)]))}
         "+"]
        [:dom/button
         {:onClick
          (fn [e]
            (om/transact! this
                          `[(points/decrement ~props)]))}
         "-"]]))))

(def person (om/factory Person {:keyfn :name}))

(defui ListView
  Object
  (render [this]
    (println "Render ListView" (-> this om/path first))
    (let [list (om/props this)]
      (apply dom/ul nil
             (map person list)))))

(def list-view (om/factory ListView))

(defui RootView
  static om/IQuery
  (query [this]
    (let [subquery (om/get-query Person)]
      `[{:list/one ~subquery} {:list/two ~subquery}]))
  Object
  (render [this]
    (println "Render RootView")
    (let [{:keys [list/one list/two]} (om/props this)]
      (apply dom/div nil
             [(dom/h2 nil "List A")
              (list-view one)
              (dom/h2 nil "List B")
              (list-view two)]))))

(def norm-data (om/normalize RootView init-data true))


(defcard "Some initial data" init-data)
(defcard-doc "Some components" (dc/mkdn-pprint-source Person))
(defcard-doc (dc/mkdn-pprint-source RootView))
(defcard-doc "Lets normalise the data" (dc/mkdn-pprint-source norm-data))
(defcard "Normalised data" norm-data)

;; Adding mutations

(defmulti mutate om/dispatch)

(defmethod mutate 'points/increment
  [{:keys [state]} _ {:keys [name]}]
  {:action
   (fn []
     (swap! state update-in
            [:person/by-name name :points]
            inc))})

(defmethod mutate 'points/decrement
  [{:keys [state]} _ {:keys [name]}]
  {:action
   (fn []
     (swap! state update-in
            [:person/by-name name :points]
            #(let [n (dec %)] (if (neg? n) 0 n))))})


(def parser (om/parser {:read read :mutate mutate}))
(def st (atom norm-data))
(defn do-inc []
  (parser {:state st} '[(points/increment {:name "Mary"})]))
(do-inc)

(def query-state
  [(parser {:state st} '[:list/one])
   (parser {:state st} '[:list/two])])
(defcard-doc "# Mutation"
  (dc/mkdn-pprint-source parser)
  (dc/mkdn-pprint-source st)
  (dc/mkdn-pprint-source do-inc)
  (dc/mkdn-pprint-code '(do-inc))
  (dc/mkdn-pprint-source query-state)
  query-state

  )


(def reconciler
  (om/reconciler
   {:state  init-data
    :parser (om/parser {:read read :mutate mutate})}))

(defcard animals-lis
  (dom-node
   (fn [data-atom node]
     (om/add-root! reconciler RootView node)))
  st
  {:inspect-data true :history true})
