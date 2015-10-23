(defproject om-next-tut "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.omcljs/om "1.0.0-alpha4"]
                 [sablono "0.3.6"]
                 [datascript "0.13.2"]
                 ;;[binaryage/devtools "0.3.0"]
                 [devcards "0.2.0-8" :exclusions [cljsjs/react]]
                 [figwheel-sidecar "0.4.1" :scope "provided"]]
  :plugins [[lein-figwheel "0.4.1"]
            [lein-cljsbuild "1.1.0"]]
  :cljsbuild {:builds [{:id "dev"
                        :figwheel {:devcards true}
                        :source-paths ["src"]
                        :compiler {:main "om-next-tut.core"
                                   :asset-path "js"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js"
                                   :verbose true}}]}
  )
