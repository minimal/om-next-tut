(defproject om-next-tut "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.omcljs/om "1.0.0-alpha3"]
                 [sablono "0.3.6"]
                 [datascript "0.13.1"]
                 [devcards "0.2.0-5-SNAPSHOT" :exclusions [cljsjs/react]]
                 [figwheel-sidecar "0.4.1" :scope "provided"]]
  :plugins [[lein-figwheel "0.4.1"]]
  :cljsbuild {:builds [{:id "dev"
                        :figwheel {:devcards true}
                        :source-paths ["src"]
                        :compiler {:main "om-next-tut.core"
                                   :asset-path "js"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js"
                                   :verbose true}}]}
  )
