// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_next_tut.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om_next_tut.animals');
goog.require('om.dom');
goog.require('cljs.test');
goog.require('sablono.core');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello nooworld!");
om_next_tut.core.HelloWorld = (function om_next_tut$core$HelloWorld(){
var this__25013__auto__ = this;
React.Component.apply(this__25013__auto__,arguments);

if(!((this__25013__auto__.getInitialState == null))){
this__25013__auto__.state = this__25013__auto__.getInitialState();
} else {
this__25013__auto__.state = {};
}

return this__25013__auto__;
});

om_next_tut.core.HelloWorld.prototype = goog.object.clone(React.Component.prototype);

var x51953_51962 = om_next_tut.core.HelloWorld.prototype;
x51953_51962.componentWillUpdate = ((function (x51953_51962){
return (function (prev_props__24958__auto__,prev_state__24959__auto__){
var this__24955__auto__ = this;
return om.next.merge_pending_state_BANG_.call(null,this__24955__auto__);
});})(x51953_51962))
;

x51953_51962.shouldComponentUpdate = ((function (x51953_51962){
return (function (next_props__24956__auto__,next_state__24957__auto__){
var this__24955__auto__ = this;
var or__16332__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24955__auto__),goog.object.get(next_props__24956__auto__,"omcljs$value"));
if(or__16332__auto__){
return or__16332__auto__;
} else {
var and__16320__auto__ = this__24955__auto__.state;
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24955__auto__.state,"omcljs$state"),goog.object.get(next_state__24957__auto__,"omcljs$state"));
} else {
return and__16320__auto__;
}
}
});})(x51953_51962))
;

x51953_51962.componentWillUnmount = ((function (x51953_51962){
return (function (){
var this__24955__auto__ = this;
var r__24961__auto__ = om.next.get_reconciler.call(null,this__24955__auto__);
var cfg__24962__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24961__auto__);
var st__24963__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24962__auto__);
var indexer__24960__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24962__auto__);
if((st__24963__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__24963__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24955__auto__);
}

if((indexer__24960__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24960__auto__,this__24955__auto__);
}
});})(x51953_51962))
;

x51953_51962.isMounted = ((function (x51953_51962){
return (function (){
var this__24955__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24955__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51953_51962))
;

x51953_51962.componentWillMount = ((function (x51953_51962){
return (function (){
var this__24955__auto__ = this;
var indexer__24960__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24955__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24960__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24960__auto__,this__24955__auto__);
}
});})(x51953_51962))
;

x51953_51962.render = ((function (x51953_51962){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_51954 = om.next._STAR_reconciler_STAR_;
var _STAR_root_class_STAR_51955 = om.next._STAR_root_class_STAR_;
var _STAR_depth_STAR_51956 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51957 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51958 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51959 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_root_class_STAR_ = om.next.root_class.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div(null,cljs.core.get.call(null,om.next.props.call(null,this$),new cljs.core.Keyword(null,"text","text",-1790561697),"No param supplied"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51959;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51958;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51957;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51956;

om.next._STAR_root_class_STAR_ = _STAR_root_class_STAR_51955;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51954;
}});})(x51953_51962))
;


om_next_tut.core.HelloWorld.prototype.constructor = om_next_tut.core.HelloWorld;

om_next_tut.core.HelloWorld.prototype.om$isComponent = true;

var x51960_51963 = om_next_tut.core.HelloWorld;


var x51961_51964 = om_next_tut.core.HelloWorld.prototype;


om_next_tut.core.HelloWorld.cljs$lang$type = true;

om_next_tut.core.HelloWorld.cljs$lang$ctorStr = "om-next-tut.core/HelloWorld";

om_next_tut.core.HelloWorld.cljs$lang$ctorPrWriter = (function (this__25015__auto__,writer__25016__auto__,opt__25017__auto__){
return cljs.core._write.call(null,writer__25016__auto__,"om-next-tut.core/HelloWorld");
});
om_next_tut.core.hello = om.next.factory.call(null,om_next_tut.core.HelloWorld);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.core","om_next_tut.core",819285937),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Simple om next ",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defui HelloWorld\n  Object\n  (render [this]\n    (dom/div nil\n        (get (om/props this) :text \"No param supplied\"))))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(def hello (om/factory HelloWorld))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.core","om_next_tut.core",819285937),new cljs.core.Keyword(null,"simple-component","simple-component",-990785005)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simple-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Test that Om Next works",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om_next_tut.core.hello.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"hello"], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if(typeof om_next_tut.core.app_state !== 'undefined'){
} else {
om_next_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
}
om_next_tut.core.Counter = (function om_next_tut$core$Counter(){
var this__25013__auto__ = this;
React.Component.apply(this__25013__auto__,arguments);

if(!((this__25013__auto__.getInitialState == null))){
this__25013__auto__.state = this__25013__auto__.getInitialState();
} else {
this__25013__auto__.state = {};
}

return this__25013__auto__;
});

om_next_tut.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x51969_51981 = om_next_tut.core.Counter.prototype;
x51969_51981.componentWillUpdate = ((function (x51969_51981){
return (function (prev_props__24958__auto__,prev_state__24959__auto__){
var this__24955__auto__ = this;
return om.next.merge_pending_state_BANG_.call(null,this__24955__auto__);
});})(x51969_51981))
;

x51969_51981.shouldComponentUpdate = ((function (x51969_51981){
return (function (next_props__24956__auto__,next_state__24957__auto__){
var this__24955__auto__ = this;
var or__16332__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24955__auto__),goog.object.get(next_props__24956__auto__,"omcljs$value"));
if(or__16332__auto__){
return or__16332__auto__;
} else {
var and__16320__auto__ = this__24955__auto__.state;
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24955__auto__.state,"omcljs$state"),goog.object.get(next_state__24957__auto__,"omcljs$state"));
} else {
return and__16320__auto__;
}
}
});})(x51969_51981))
;

x51969_51981.componentWillUnmount = ((function (x51969_51981){
return (function (){
var this__24955__auto__ = this;
var r__24961__auto__ = om.next.get_reconciler.call(null,this__24955__auto__);
var cfg__24962__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24961__auto__);
var st__24963__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24962__auto__);
var indexer__24960__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24962__auto__);
if((st__24963__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__24963__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24955__auto__);
}

if((indexer__24960__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24960__auto__,this__24955__auto__);
}
});})(x51969_51981))
;

x51969_51981.isMounted = ((function (x51969_51981){
return (function (){
var this__24955__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24955__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51969_51981))
;

x51969_51981.componentWillMount = ((function (x51969_51981){
return (function (){
var this__24955__auto__ = this;
var indexer__24960__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24955__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24960__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24960__auto__,this__24955__auto__);
}
});})(x51969_51981))
;

x51969_51981.render = ((function (x51969_51981){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_51970 = om.next._STAR_reconciler_STAR_;
var _STAR_root_class_STAR_51971 = om.next._STAR_root_class_STAR_;
var _STAR_depth_STAR_51972 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51973 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51974 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51975 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_root_class_STAR_ = om.next.root_class.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__51976 = om.next.props.call(null,this$);
var map__51976__$1 = ((((!((map__51976 == null)))?((((map__51976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51976):map__51976);
var props = map__51976__$1;
var count = cljs.core.get.call(null,map__51976__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.createElement("div",null,(function (){var attrs51978 = [cljs.core.str("Count: "),cljs.core.str(count)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs51978))?sablono.interpreter.attributes.call(null,attrs51978):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51978))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51978)], null))));
})(),React.createElement("button",{"onClick": ((function (map__51976,map__51976__$1,props,count,_STAR_reconciler_STAR_51970,_STAR_root_class_STAR_51971,_STAR_depth_STAR_51972,_STAR_shared_STAR_51973,_STAR_instrument_STAR_51974,_STAR_parent_STAR_51975,this$,x51969_51981){
return (function (e){
return cljs.core.swap_BANG_.call(null,om_next_tut.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
});})(map__51976,map__51976__$1,props,count,_STAR_reconciler_STAR_51970,_STAR_root_class_STAR_51971,_STAR_depth_STAR_51972,_STAR_shared_STAR_51973,_STAR_instrument_STAR_51974,_STAR_parent_STAR_51975,this$,x51969_51981))
},"Click me"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51975;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51974;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51973;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51972;

om.next._STAR_root_class_STAR_ = _STAR_root_class_STAR_51971;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51970;
}});})(x51969_51981))
;


om_next_tut.core.Counter.prototype.constructor = om_next_tut.core.Counter;

om_next_tut.core.Counter.prototype.om$isComponent = true;

var x51979_51982 = om_next_tut.core.Counter;


var x51980_51983 = om_next_tut.core.Counter.prototype;


om_next_tut.core.Counter.cljs$lang$type = true;

om_next_tut.core.Counter.cljs$lang$ctorStr = "om-next-tut.core/Counter";

om_next_tut.core.Counter.cljs$lang$ctorPrWriter = (function (this__25015__auto__,writer__25016__auto__,opt__25017__auto__){
return cljs.core._write.call(null,writer__25016__auto__,"om-next-tut.core/Counter");
});
om_next_tut.core.counter = om.next.factory.call(null,om_next_tut.core.Counter);
om_next_tut.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om_next_tut.core.app_state], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.core","om_next_tut.core",819285937),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Counter with naive state",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defonce app-state (atom {:count 0}))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defui Counter\n  Object\n  (render [this]\n    (let [{:keys [count] :as props} (om/props this)]\n      (sab/html\n       [:div\n        [:span (str \"Count: \" count)]\n        [:button {:onClick (fn [e] (swap! app-state update :count inc))}\n         \"Click me\"]]))))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(def reconciler (om/reconciler {:state app-state}))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(def counter (om/factory Counter))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.core","om_next_tut.core",819285937),new cljs.core.Keyword(null,"countercard","countercard",-1094719371)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"countercard",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Counter with naive state",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (data_atom,node){
return om.next.add_root_BANG_.call(null,om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),data_atom], null)),om_next_tut.core.Counter,node);
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),om_next_tut.core.app_state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
if(typeof om_next_tut.core.app_state2 !== 'undefined'){
} else {
om_next_tut.core.app_state2 = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
}
om_next_tut.core.read = (function om_next_tut$core$read(p__51984,key,params){
var map__51988 = p__51984;
var map__51988__$1 = ((((!((map__51988 == null)))?((((map__51988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51988):map__51988);
var env = map__51988__$1;
var state = cljs.core.get.call(null,map__51988__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__51990 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__51990,(0),null);
var value = cljs.core.nth.call(null,vec__51990,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_next_tut.core.mutate = (function om_next_tut$core$mutate(p__51991,key,params){
var map__51994 = p__51991;
var map__51994__$1 = ((((!((map__51994 == null)))?((((map__51994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51994):map__51994);
var env = map__51994__$1;
var state = cljs.core.get.call(null,map__51994__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51994,map__51994__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__51994,map__51994__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_next_tut.core.Counter2 = (function om_next_tut$core$Counter2(){
var this__25013__auto__ = this;
React.Component.apply(this__25013__auto__,arguments);

if(!((this__25013__auto__.getInitialState == null))){
this__25013__auto__.state = this__25013__auto__.getInitialState();
} else {
this__25013__auto__.state = {};
}

return this__25013__auto__;
});

om_next_tut.core.Counter2.prototype = goog.object.clone(React.Component.prototype);

var x52000_52012 = om_next_tut.core.Counter2.prototype;
x52000_52012.componentWillUpdate = ((function (x52000_52012){
return (function (prev_props__24958__auto__,prev_state__24959__auto__){
var this__24955__auto__ = this;
return om.next.merge_pending_state_BANG_.call(null,this__24955__auto__);
});})(x52000_52012))
;

x52000_52012.shouldComponentUpdate = ((function (x52000_52012){
return (function (next_props__24956__auto__,next_state__24957__auto__){
var this__24955__auto__ = this;
var or__16332__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24955__auto__),goog.object.get(next_props__24956__auto__,"omcljs$value"));
if(or__16332__auto__){
return or__16332__auto__;
} else {
var and__16320__auto__ = this__24955__auto__.state;
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24955__auto__.state,"omcljs$state"),goog.object.get(next_state__24957__auto__,"omcljs$state"));
} else {
return and__16320__auto__;
}
}
});})(x52000_52012))
;

x52000_52012.componentWillUnmount = ((function (x52000_52012){
return (function (){
var this__24955__auto__ = this;
var r__24961__auto__ = om.next.get_reconciler.call(null,this__24955__auto__);
var cfg__24962__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24961__auto__);
var st__24963__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24962__auto__);
var indexer__24960__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24962__auto__);
if((st__24963__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__24963__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24955__auto__);
}

if((indexer__24960__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24960__auto__,this__24955__auto__);
}
});})(x52000_52012))
;

x52000_52012.isMounted = ((function (x52000_52012){
return (function (){
var this__24955__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24955__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52000_52012))
;

x52000_52012.componentWillMount = ((function (x52000_52012){
return (function (){
var this__24955__auto__ = this;
var indexer__24960__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24955__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24960__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24960__auto__,this__24955__auto__);
}
});})(x52000_52012))
;

x52000_52012.render = ((function (x52000_52012){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_52001 = om.next._STAR_reconciler_STAR_;
var _STAR_root_class_STAR_52002 = om.next._STAR_root_class_STAR_;
var _STAR_depth_STAR_52003 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52004 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52005 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52006 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_root_class_STAR_ = om.next.root_class.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__52007 = om.next.props.call(null,this$);
var map__52007__$1 = ((((!((map__52007 == null)))?((((map__52007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52007):map__52007);
var count = cljs.core.get.call(null,map__52007__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.createElement("div",null,(function (){var attrs52009 = [cljs.core.str("Count: "),cljs.core.str(count)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs52009))?sablono.interpreter.attributes.call(null,attrs52009):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52009))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52009)], null))));
})(),React.createElement("button",{"onClick": ((function (map__52007,map__52007__$1,count,_STAR_reconciler_STAR_52001,_STAR_root_class_STAR_52002,_STAR_depth_STAR_52003,_STAR_shared_STAR_52004,_STAR_instrument_STAR_52005,_STAR_parent_STAR_52006,this$,x52000_52012){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__52007,map__52007__$1,count,_STAR_reconciler_STAR_52001,_STAR_root_class_STAR_52002,_STAR_depth_STAR_52003,_STAR_shared_STAR_52004,_STAR_instrument_STAR_52005,_STAR_parent_STAR_52006,this$,x52000_52012))
},"Click me more!"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52006;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52005;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52004;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52003;

om.next._STAR_root_class_STAR_ = _STAR_root_class_STAR_52002;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52001;
}});})(x52000_52012))
;


om_next_tut.core.Counter2.prototype.constructor = om_next_tut.core.Counter2;

om_next_tut.core.Counter2.prototype.om$isComponent = true;

var x52010_52013 = om_next_tut.core.Counter2;
x52010_52013.om$next$IQuery$ = true;

x52010_52013.om$next$IQuery$query$arity$1 = ((function (x52010_52013){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x52010_52013))
;


var x52011_52014 = om_next_tut.core.Counter2.prototype;
x52011_52014.om$next$IQuery$ = true;

x52011_52014.om$next$IQuery$query$arity$1 = ((function (x52011_52014){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x52011_52014))
;


om_next_tut.core.Counter2.cljs$lang$type = true;

om_next_tut.core.Counter2.cljs$lang$ctorStr = "om-next-tut.core/Counter2";

om_next_tut.core.Counter2.cljs$lang$ctorPrWriter = (function (this__25015__auto__,writer__25016__auto__,opt__25017__auto__){
return cljs.core._write.call(null,writer__25016__auto__,"om-next-tut.core/Counter2");
});
om_next_tut.core.reconciler2 = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_next_tut.core.app_state2,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_next_tut.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_next_tut.core.mutate], null))], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.core","om_next_tut.core",819285937),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Counter with mutation",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defonce app-state2 (atom {:count 0}))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn read [{:keys [state] :as env} key params]\n  (let [st @state]\n    (if-let [[_ value] (find st key)]\n      {:value value}\n      {:value :not-found})))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn mutate [{:keys [state] :as env} key params]\n  (if (= 'increment key)\n    {:value [:count]\n     :action #(swap! state update-in [:count] inc)}\n    {:value :not-found}))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(def reconciler2\n  (om/reconciler\n   {:state app-state2\n    :parser (om/parser {:read read :mutate mutate})}))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defui Counter2\n  static om/IQuery\n  (query [this]\n    [:count])\n  Object\n  (render [this]\n    (let [{:keys [count]} (om/props this)]\n      (sab/html\n       [:div\n        [:span (str \"Count: \" count)]\n        [:button {:onClick (fn [e] (om/transact! this '[(increment)]))}\n         \"Click me more!\"]]))))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.core","om_next_tut.core",819285937),new cljs.core.Keyword(null,"countercard2","countercard2",1295018820)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"countercard2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Counter using queries and mutations\n\n   Try getting a previous state from a uuid logged in the console:\n   ```\n    (om/from-history reconciler2 #uuid \"bac246b8-5cd1-40e8-8a40-7cc409ee1bd4\")\n    > {:count 4}\n    ```\n    Also try `(om.next/transact! reconciler2 '[(increment)])` in the repl",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (data_atom,node){
return om.next.add_root_BANG_.call(null,om_next_tut.core.reconciler2,om_next_tut.core.Counter2,node);
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),om_next_tut.core.app_state2,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=core.js.map