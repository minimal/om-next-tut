// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_next_tut.datascript');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljs.test');
goog.require('datascript.core');
goog.require('sablono.core');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
om_next_tut.datascript.conn = datascript.core.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);
om_next_tut.datascript.m = (function (){
datascript.core.transact_BANG_.call(null,om_next_tut.datascript.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","title","app/title",636408784),"Hello DataScript!",new cljs.core.Keyword("app","count","app/count",2145591446),(0)], null)], null));

if(typeof om_next_tut.datascript.read !== 'undefined'){
} else {
om_next_tut.datascript.read = (function (){var method_table__17245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17247__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17249__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-tut.datascript","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17249__auto__,method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__));
})();
}

cljs.core._add_method.call(null,om_next_tut.datascript.read,new cljs.core.Keyword("app","counter","app/counter",804038354),(function (p__70245,_,___$1){
var map__70246 = p__70245;
var map__70246__$1 = ((((!((map__70246 == null)))?((((map__70246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70246):map__70246);
var state = cljs.core.get.call(null,map__70246__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var selector = cljs.core.get.call(null,map__70246__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","title","app/title",636408784)], null)], null),datascript.core.db.call(null,state),selector)], null);
}));

if(typeof om_next_tut.datascript.mutate !== 'undefined'){
} else {
om_next_tut.datascript.mutate = (function (){var method_table__17245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17247__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17249__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-tut.datascript","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17249__auto__,method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__));
})();
}

return cljs.core._add_method.call(null,om_next_tut.datascript.mutate,new cljs.core.Symbol("app","increment","app/increment",81538792,null),(function (p__70248,_,entity){
var map__70249 = p__70248;
var map__70249__$1 = ((((!((map__70249 == null)))?((((map__70249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70249):map__70249);
var state = cljs.core.get.call(null,map__70249__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__70249,map__70249__$1,state){
return (function (){
return datascript.core.transact_BANG_.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","count","app/count",2145591446)], null),cljs.core.inc)], null));
});})(map__70249,map__70249__$1,state))
], null);
}));
})()
;
om_next_tut.datascript.Counter = (function om_next_tut$datascript$Counter(){
var this__25013__auto__ = this;
React.Component.apply(this__25013__auto__,arguments);

if(!((this__25013__auto__.getInitialState == null))){
this__25013__auto__.state = this__25013__auto__.getInitialState();
} else {
this__25013__auto__.state = {};
}

return this__25013__auto__;
});

om_next_tut.datascript.Counter.prototype = goog.object.clone(React.Component.prototype);

var x70255_70268 = om_next_tut.datascript.Counter.prototype;
x70255_70268.componentWillUpdate = ((function (x70255_70268){
return (function (prev_props__24958__auto__,prev_state__24959__auto__){
var this__24955__auto__ = this;
return om.next.merge_pending_state_BANG_.call(null,this__24955__auto__);
});})(x70255_70268))
;

x70255_70268.shouldComponentUpdate = ((function (x70255_70268){
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
});})(x70255_70268))
;

x70255_70268.componentWillUnmount = ((function (x70255_70268){
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
});})(x70255_70268))
;

x70255_70268.isMounted = ((function (x70255_70268){
return (function (){
var this__24955__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24955__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x70255_70268))
;

x70255_70268.componentWillMount = ((function (x70255_70268){
return (function (){
var this__24955__auto__ = this;
var indexer__24960__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24955__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24960__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24960__auto__,this__24955__auto__);
}
});})(x70255_70268))
;

x70255_70268.render = ((function (x70255_70268){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_70256 = om.next._STAR_reconciler_STAR_;
var _STAR_root_class_STAR_70257 = om.next._STAR_root_class_STAR_;
var _STAR_depth_STAR_70258 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_70259 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_70260 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_70261 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_root_class_STAR_ = om.next.root_class.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__70262 = cljs.core.get_in.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354),(0)], null));
var map__70262__$1 = ((((!((map__70262 == null)))?((((map__70262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70262):map__70262);
var entity = map__70262__$1;
var title = cljs.core.get.call(null,map__70262__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var count = cljs.core.get.call(null,map__70262__$1,new cljs.core.Keyword("app","count","app/count",2145591446));
return React.createElement("div",null,(function (){var attrs70264 = title;
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs70264))?sablono.interpreter.attributes.call(null,attrs70264):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs70264))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70264)], null))));
})(),(function (){var attrs70265 = [cljs.core.str("Count: "),cljs.core.str(count)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs70265))?sablono.interpreter.attributes.call(null,attrs70265):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs70265))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70265)], null))));
})(),React.createElement("button",{"onClick": ((function (map__70262,map__70262__$1,entity,title,count,_STAR_reconciler_STAR_70256,_STAR_root_class_STAR_70257,_STAR_depth_STAR_70258,_STAR_shared_STAR_70259,_STAR_instrument_STAR_70260,_STAR_parent_STAR_70261,this$,x70255_70268){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","increment","app/increment",81538792,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,entity))))))))));
});})(map__70262,map__70262__$1,entity,title,count,_STAR_reconciler_STAR_70256,_STAR_root_class_STAR_70257,_STAR_depth_STAR_70258,_STAR_shared_STAR_70259,_STAR_instrument_STAR_70260,_STAR_parent_STAR_70261,this$,x70255_70268))
},"Click me!"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_70261;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_70260;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_70259;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_70258;

om.next._STAR_root_class_STAR_ = _STAR_root_class_STAR_70257;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_70256;
}});})(x70255_70268))
;


om_next_tut.datascript.Counter.prototype.constructor = om_next_tut.datascript.Counter;

om_next_tut.datascript.Counter.prototype.om$isComponent = true;

var x70266_70269 = om_next_tut.datascript.Counter;
x70266_70269.om$next$IQuery$ = true;

x70266_70269.om$next$IQuery$query$arity$1 = ((function (x70266_70269){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","counter","app/counter",804038354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword("app","count","app/count",2145591446)], null)], null)], null);
});})(x70266_70269))
;


var x70267_70270 = om_next_tut.datascript.Counter.prototype;
x70267_70270.om$next$IQuery$ = true;

x70267_70270.om$next$IQuery$query$arity$1 = ((function (x70267_70270){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","counter","app/counter",804038354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword("app","count","app/count",2145591446)], null)], null)], null);
});})(x70267_70270))
;


om_next_tut.datascript.Counter.cljs$lang$type = true;

om_next_tut.datascript.Counter.cljs$lang$ctorStr = "om-next-tut.datascript/Counter";

om_next_tut.datascript.Counter.cljs$lang$ctorPrWriter = (function (this__25015__auto__,writer__25016__auto__,opt__25017__auto__){
return cljs.core._write.call(null,writer__25016__auto__,"om-next-tut.datascript/Counter");
});
om_next_tut.datascript.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_next_tut.datascript.conn,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_next_tut.datascript.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_next_tut.datascript.mutate], null))], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.datascript","om_next_tut.datascript",-1191452105),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Counter with datascript","[Tutorial](https://github.com/omcljs/om/wiki/DataScript-Integration-Tutorial)",[cljs.core.str("\n```clojure\n"),cljs.core.str("(def conn (d/create-conn {}))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(def m ;; <- ignore def and do hack for devcards source display\n  (do\n    (d/transact! conn\n                 [{:db/id -1\n                   :app/title \"Hello DataScript!\"\n                   :app/count 0}])\n\n    (defmulti read om/dispatch)\n\n    (defmethod read :app/counter\n      [{:keys [state selector]} _ _]\n      {:value (d/q '[:find [(pull ?e ?selector) ...]\n                     :in $ ?selector\n                     :where [?e :app/title]]\n                   (d/db state) selector)})\n\n    (defmulti mutate om/dispatch)\n\n    (defmethod mutate 'app/increment\n      [{:keys [state]} _ entity]\n      {:value [:app/counter]\n       :action (fn [] (d/transact! state\n                                   [(update-in entity [:app/count] inc)]))})\n    ))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(defui Counter\n  static om/IQuery\n  (query [this]\n    [{:app/counter [:db/id :app/title :app/count]}])\n  Object\n  (render [this]\n    (let [{:keys [app/title app/count] :as entity}\n          (get-in (om/props this) [:app/counter 0])]\n      (sab/html\n       [:div\n        [:h2 title]\n        [:span (str \"Count: \" count)]\n        [:button {:onClick\n                  (fn [e]\n                    (om/transact! this\n                                  `[(app/increment ~entity)]))}\n         \"Click me!\"]]))))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(def reconciler\n  (om/reconciler\n   {:state conn\n    :parser (om/parser {:read read :mutate mutate})}))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.datascript","om_next_tut.datascript",-1191452105),new cljs.core.Keyword(null,"datascript-card","datascript-card",960889730)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"datascript-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (data_atom,node){
return om.next.add_root_BANG_.call(null,om_next_tut.datascript.reconciler,om_next_tut.datascript.Counter,node);
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=datascript.js.map