(ns om-next-tut.animals
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [cljs.test :refer-macros [is async]]
            [sablono.core :as sab :include-macros true]
            [om.dom :as dom])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest dom-node defcard-doc]]))

(defonce app-state
  (atom
   {:app/title "Animals"
    :animals/list
    [[1 "Ant"] [2 "Antelope"] [3 "Bird"] [4 "Cat"] [5 "Dog"]
     [6 "Lion"] [7 "Mouse"] [8 "Monkey"] [9 "Snake"] [10 "Zebra"]]}))

(def m ;; <- ignore def and do hack for devcards source display
  (do
    (defmulti read (fn [env key params] key))

    (defmethod read :default
      [{:keys [state] :as env} key params]
      (let [st @state]
        (if-let [[_ value] (find st key)]
          {:value value}
          {:value :not-found})))

    (defmethod read :animals/list
      [{:keys [state] :as env} key {:keys [start end]}]
      {:value (subvec (:animals/list @state) start end)})
    ))

(def reconciler
  (om/reconciler
   {:state app-state
    :parser (om/parser {:read read})}))

(declare change-params)
(defui AnimalsList
  static om/IQueryParams
  (params [this]
    {:start 0 :end 10})
  static om/IQuery
  (query [this]
    '[:app/title (:animals/list {:start ?start :end ?end})])
  Object
  (render [this]
    (let [{:keys [app/title animals/list]} (om/props this)]
      (sab/html
       [:div
        [:button
         {:onClick (fn [e] (change-params))}
         "Change query params"]
        [:div (str "Query: " (om/get-query (om/class->any reconciler AnimalsList)))]
        [:h3 title]
        [:ul
         (for [[i name] list]
           [:li (str i ". " name)])]]))))

(defn change-params []
  "Change end index to random int "
  (om/set-params! (om/class->any reconciler AnimalsList)
                  {:start 0 :end (rand-int 10)}))


(dc/defcard-doc
  "## Changing queries over time
   [Tutorial](https://github.com/omcljs/om/wiki/Quick-Start-%28om.next%29#changing-queries-over-time)"
  (dc/mkdn-pprint-source app-state)
  "See the [tutorial](https://github.com/omcljs/om/wiki/Quick-Start-%28om.next%29#changing-queries-over-time) for the full multimethods source"
  (dc/mkdn-pprint-source m)
  "`defui` with params and query:"
  (dc/mkdn-pprint-source AnimalsList)
  (dc/mkdn-pprint-source reconciler)
  "A function to change the query dynamically:"
  (dc/mkdn-pprint-source change-params)
  )

(defcard animals-list
  (dom-node
   (fn [data-atom node]
     (om/add-root! reconciler AnimalsList node)))
  app-state
  {:inspect-data true :history true})
