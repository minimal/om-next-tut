(ns om-next-tut.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [cljs.test :refer-macros [is async]]
            [sablono.core :as sab :include-macros true]
            om-next-tut.animals
            om-next-tut.datascript
            [om.dom :as dom])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest dom-node defcard-doc]]))

(enable-console-print!)
(println "Hello nooworld!")


(defcard-doc
  "A [devcards](https://github.com/bhauman/devcards) interpretation of the [Om Next Quick-Start](https://github.com/omcljs/om/wiki/Quick-Start-(om.next))— go there first")


(defui HelloWorld
  Object
  (render [this]
    (dom/div nil
        (get (om/props this) :text "No param supplied"))))


(def hello (om/factory HelloWorld))

(dc/defcard-doc
  "## Simple om next "
  (dc/mkdn-pprint-source HelloWorld)
  (dc/mkdn-pprint-source hello)
  )

(defcard simple-component
  "Test that Om Next works"
  (hello {:text "hello"}))

;; #_(js/React.render
;;    (hello {:text "Hello, world!"})
;;    (gdom/getElement "app"))

;; (js/React.render
;;  (apply dom/div nil
;;         (map #(hello {:text (str "Hello there no. " % )})
;;              (range 6)))
;;  (gdom/getElement "app"))


(defonce app-state (atom {:count 0}))

(defui Counter
  Object
  (render [this]
    (let [{:keys [count] :as props} (om/props this)]
      (sab/html
       [:div
        [:span (str "Count: " count)]
        [:button {:onClick (fn [e] (swap! app-state update :count inc))}
         "Click me"]]))))

(def counter (om/factory Counter))
(def reconciler (om/reconciler {:state app-state}))

(dc/defcard-doc
  "## Counter with naive state"
  (dc/mkdn-pprint-source app-state)
  (dc/mkdn-pprint-source Counter)
  (dc/mkdn-pprint-source reconciler)
  (dc/mkdn-pprint-source counter)
  )

(defcard countercard
  "Counter with naive state"
  (dom-node
   (fn [data-atom node]
     (om/add-root! (om/reconciler {:state data-atom}) Counter node)))
  app-state
  {:inspect-data true})


;; queries and mutations

(defonce app-state2 (atom {:count 0}))

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate [{:keys [state] :as env} key params]
  (if (= 'increment key)
    {:value [:count]
     :action #(swap! state update-in [:count] inc)}
    {:value :not-found}))

(defui Counter2
  static om/IQuery
  (query [this]
    [:count])
  Object
  (render [this]
    (let [{:keys [count]} (om/props this)]
      (sab/html
       [:div
        [:span (str "Count: " count)]
        [:button {:onClick (fn [e] (om/transact! this '[(increment)]))}
         "Click me more!"]]))))

(def reconciler2
  (om/reconciler
   {:state app-state2
    :parser (om/parser {:read read :mutate mutate})}))

(dc/defcard-doc
  "## Counter with mutation"
  (dc/mkdn-pprint-source app-state2)
  (dc/mkdn-pprint-source read )
  (dc/mkdn-pprint-source mutate)
  (dc/mkdn-pprint-source reconciler2)
  (dc/mkdn-pprint-source Counter2)
  )

(defcard countercard2
  "Counter using queries and mutations

   Try getting a previous state from a uuid logged in the console:
   ```
    (om/from-history reconciler2 #uuid \"bac246b8-5cd1-40e8-8a40-7cc409ee1bd4\")
    > {:count 4}
    ```
    Also try `(om.next/transact! reconciler2 '[(increment)])` in the repl"
  (dom-node
   (fn [data-atom node]
     (om/add-root! reconciler2 Counter2 node)))
  app-state2
  {:inspect-data true})
