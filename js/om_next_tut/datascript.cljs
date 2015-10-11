(ns om-next-tut.datascript
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [cljs.test :refer-macros [is async]]
            [sablono.core :as sab :include-macros true]
            [datascript.core :as d]
            [om.dom :as dom])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest dom-node defcard-doc]]))

(enable-console-print!)

(def conn (d/create-conn {}))

(def m ;; <- ignore def and do hack for devcards source display
  (do
    (d/transact! conn
                 [{:db/id -1
                   :app/title "Hello DataScript!"
                   :app/count 0}])

    (defmulti read om/dispatch)

    (defmethod read :app/counter
      [{:keys [state selector]} _ _]
      {:value (d/q '[:find [(pull ?e ?selector) ...]
                     :in $ ?selector
                     :where [?e :app/title]]
                   (d/db state) selector)})

    (defmulti mutate om/dispatch)

    (defmethod mutate 'app/increment
      [{:keys [state]} _ entity]
      {:value [:app/counter]
       :action (fn [] (d/transact! state
                                   [(update-in entity [:app/count] inc)]))})
    ))

(defui Counter
  static om/IQuery
  (query [this]
    [{:app/counter [:db/id :app/title :app/count]}])
  Object
  (render [this]
    (let [{:keys [app/title app/count] :as entity}
          (get-in (om/props this) [:app/counter 0])]
      (sab/html
       [:div
        [:h2 title]
        [:span (str "Count: " count)]
        [:button {:onClick
                  (fn [e]
                    (om/transact! this
                                  `[(app/increment ~entity)]))}
         "Click me!"]]))))

(def reconciler
  (om/reconciler
   {:state conn
    :parser (om/parser {:read read :mutate mutate})}))

(dc/defcard-doc
  "## Counter with datascript"
  "[Tutorial](https://github.com/omcljs/om/wiki/DataScript-Integration-Tutorial)"
  (dc/mkdn-pprint-source conn)
  (dc/mkdn-pprint-source m)
  (dc/mkdn-pprint-source Counter)
  (dc/mkdn-pprint-source reconciler)
  )

(defcard datascript-card
  (dom-node
   (fn [data-atom node]
     (om/add-root! reconciler Counter node))))
