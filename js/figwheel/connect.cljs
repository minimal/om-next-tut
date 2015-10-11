(ns figwheel.connect (:require [devcards.core :include-macros true] [om-next-tut.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:devcards true, :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})
(devcards.core/start-devcard-ui!)

