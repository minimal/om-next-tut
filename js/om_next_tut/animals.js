// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_next_tut.animals');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('cljs.test');
goog.require('sablono.core');
goog.require('om.dom');
if(typeof om_next_tut.animals.app_state !== 'undefined'){
} else {
om_next_tut.animals.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
}
if(typeof om_next_tut.animals.read !== 'undefined'){
} else {
om_next_tut.animals.read = (function (){var method_table__17245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17247__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17249__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-tut.animals","read"),((function (method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__,hierarchy__17249__auto__){
return (function (env,key,params){
return key;
});})(method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__,hierarchy__17249__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17249__auto__,method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__));
})();
}
cljs.core._add_method.call(null,om_next_tut.animals.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__51907,key,params){
var map__51908 = p__51907;
var map__51908__$1 = ((((!((map__51908 == null)))?((((map__51908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51908):map__51908);
var env = map__51908__$1;
var state = cljs.core.get.call(null,map__51908__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__51910 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__51910,(0),null);
var value = cljs.core.nth.call(null,vec__51910,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_next_tut.animals.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__51911,key,p__51912){
var map__51913 = p__51911;
var map__51913__$1 = ((((!((map__51913 == null)))?((((map__51913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51913):map__51913);
var env = map__51913__$1;
var state = cljs.core.get.call(null,map__51913__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__51914 = p__51912;
var map__51914__$1 = ((((!((map__51914 == null)))?((((map__51914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51914):map__51914);
var start = cljs.core.get.call(null,map__51914__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__51914__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
om_next_tut.animals.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_next_tut.animals.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_next_tut.animals.read], null))], null));
om_next_tut.animals.change_params;
om_next_tut.animals.AnimalsList = (function om_next_tut$animals$AnimalsList(){
var this__25013__auto__ = this;
React.Component.apply(this__25013__auto__,arguments);

if(!((this__25013__auto__.getInitialState == null))){
this__25013__auto__.state = this__25013__auto__.getInitialState();
} else {
this__25013__auto__.state = {};
}

return this__25013__auto__;
});

om_next_tut.animals.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x51921_51943 = om_next_tut.animals.AnimalsList.prototype;
x51921_51943.componentWillUpdate = ((function (x51921_51943){
return (function (prev_props__24958__auto__,prev_state__24959__auto__){
var this__24955__auto__ = this;
return om.next.merge_pending_state_BANG_.call(null,this__24955__auto__);
});})(x51921_51943))
;

x51921_51943.shouldComponentUpdate = ((function (x51921_51943){
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
});})(x51921_51943))
;

x51921_51943.componentWillUnmount = ((function (x51921_51943){
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
});})(x51921_51943))
;

x51921_51943.isMounted = ((function (x51921_51943){
return (function (){
var this__24955__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24955__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51921_51943))
;

x51921_51943.componentWillMount = ((function (x51921_51943){
return (function (){
var this__24955__auto__ = this;
var indexer__24960__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24955__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24960__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24960__auto__,this__24955__auto__);
}
});})(x51921_51943))
;

x51921_51943.render = ((function (x51921_51943){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_51922 = om.next._STAR_reconciler_STAR_;
var _STAR_root_class_STAR_51923 = om.next._STAR_root_class_STAR_;
var _STAR_depth_STAR_51924 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51925 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51926 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51927 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_root_class_STAR_ = om.next.root_class.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__51928 = om.next.props.call(null,this$);
var map__51928__$1 = ((((!((map__51928 == null)))?((((map__51928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51928):map__51928);
var title = cljs.core.get.call(null,map__51928__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__51928__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.createElement("div",null,(function (){var attrs51930 = title;
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs51930))?sablono.interpreter.attributes.call(null,attrs51930):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51930))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51930)], null))));
})(),React.createElement("button",{"onClick": ((function (map__51928,map__51928__$1,title,list,_STAR_reconciler_STAR_51922,_STAR_root_class_STAR_51923,_STAR_depth_STAR_51924,_STAR_shared_STAR_51925,_STAR_instrument_STAR_51926,_STAR_parent_STAR_51927,this$,x51921_51943){
return (function (e){
return om_next_tut.animals.change_params.call(null);
});})(map__51928,map__51928__$1,title,list,_STAR_reconciler_STAR_51922,_STAR_root_class_STAR_51923,_STAR_depth_STAR_51924,_STAR_shared_STAR_51925,_STAR_instrument_STAR_51926,_STAR_parent_STAR_51927,this$,x51921_51943))
},"Change query params"),(function (){var attrs51931 = [cljs.core.str("Query: "),cljs.core.str(om.next.get_query.call(null,om.next.class__GT_any.call(null,om_next_tut.animals.reconciler,om_next_tut.animals.AnimalsList)))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs51931))?sablono.interpreter.attributes.call(null,attrs51931):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51931))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51931)], null))));
})(),React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__17104__auto__ = ((function (map__51928,map__51928__$1,title,list,_STAR_reconciler_STAR_51922,_STAR_root_class_STAR_51923,_STAR_depth_STAR_51924,_STAR_shared_STAR_51925,_STAR_instrument_STAR_51926,_STAR_parent_STAR_51927,this$,x51921_51943){
return (function om_next_tut$animals$iter__51933(s__51934){
return (new cljs.core.LazySeq(null,((function (map__51928,map__51928__$1,title,list,_STAR_reconciler_STAR_51922,_STAR_root_class_STAR_51923,_STAR_depth_STAR_51924,_STAR_shared_STAR_51925,_STAR_instrument_STAR_51926,_STAR_parent_STAR_51927,this$,x51921_51943){
return (function (){
var s__51934__$1 = s__51934;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__51934__$1);
if(temp__4425__auto__){
var s__51934__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51934__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__51934__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__51936 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__51935 = (0);
while(true){
if((i__51935 < size__17103__auto__)){
var vec__51939 = cljs.core._nth.call(null,c__17102__auto__,i__51935);
var i = cljs.core.nth.call(null,vec__51939,(0),null);
var name = cljs.core.nth.call(null,vec__51939,(1),null);
cljs.core.chunk_append.call(null,b__51936,(function (){var attrs51932 = [cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('');
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs51932))?sablono.interpreter.attributes.call(null,attrs51932):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51932))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51932)], null))));
})());

var G__51944 = (i__51935 + (1));
i__51935 = G__51944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51936),om_next_tut$animals$iter__51933.call(null,cljs.core.chunk_rest.call(null,s__51934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51936),null);
}
} else {
var vec__51940 = cljs.core.first.call(null,s__51934__$2);
var i = cljs.core.nth.call(null,vec__51940,(0),null);
var name = cljs.core.nth.call(null,vec__51940,(1),null);
return cljs.core.cons.call(null,(function (){var attrs51932 = [cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('');
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs51932))?sablono.interpreter.attributes.call(null,attrs51932):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51932))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51932)], null))));
})(),om_next_tut$animals$iter__51933.call(null,cljs.core.rest.call(null,s__51934__$2)));
}
} else {
return null;
}
break;
}
});})(map__51928,map__51928__$1,title,list,_STAR_reconciler_STAR_51922,_STAR_root_class_STAR_51923,_STAR_depth_STAR_51924,_STAR_shared_STAR_51925,_STAR_instrument_STAR_51926,_STAR_parent_STAR_51927,this$,x51921_51943))
,null,null));
});})(map__51928,map__51928__$1,title,list,_STAR_reconciler_STAR_51922,_STAR_root_class_STAR_51923,_STAR_depth_STAR_51924,_STAR_shared_STAR_51925,_STAR_instrument_STAR_51926,_STAR_parent_STAR_51927,this$,x51921_51943))
;
return iter__17104__auto__.call(null,list);
})())));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51927;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51926;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51925;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51924;

om.next._STAR_root_class_STAR_ = _STAR_root_class_STAR_51923;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51922;
}});})(x51921_51943))
;


om_next_tut.animals.AnimalsList.prototype.constructor = om_next_tut.animals.AnimalsList;

om_next_tut.animals.AnimalsList.prototype.om$isComponent = true;

var x51941_51945 = om_next_tut.animals.AnimalsList;
x51941_51945.om$next$IQueryParams$ = true;

x51941_51945.om$next$IQueryParams$params$arity$1 = ((function (x51941_51945){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x51941_51945))
;

x51941_51945.om$next$IQuery$ = true;

x51941_51945.om$next$IQuery$query$arity$1 = ((function (x51941_51945){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x51941_51945))
;


var x51942_51946 = om_next_tut.animals.AnimalsList.prototype;
x51942_51946.om$next$IQueryParams$ = true;

x51942_51946.om$next$IQueryParams$params$arity$1 = ((function (x51942_51946){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x51942_51946))
;

x51942_51946.om$next$IQuery$ = true;

x51942_51946.om$next$IQuery$query$arity$1 = ((function (x51942_51946){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x51942_51946))
;


om_next_tut.animals.AnimalsList.cljs$lang$type = true;

om_next_tut.animals.AnimalsList.cljs$lang$ctorStr = "om-next-tut.animals/AnimalsList";

om_next_tut.animals.AnimalsList.cljs$lang$ctorPrWriter = (function (this__25015__auto__,writer__25016__auto__,opt__25017__auto__){
return cljs.core._write.call(null,writer__25016__auto__,"om-next-tut.animals/AnimalsList");
});
om_next_tut.animals.change_params = (function om_next_tut$animals$change_params(){

return om.next.set_params_BANG_.call(null,om.next.class__GT_any.call(null,om_next_tut.animals.reconciler,om_next_tut.animals.AnimalsList),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.rand_int.call(null,(10))], null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.animals","om_next_tut.animals",1118279646),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Changing queries over time\n   [Tutorial](https://github.com/omcljs/om/wiki/Quick-Start-%28om.next%29#changing-queries-over-time)",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defonce app-state\n  (atom\n   {:app/title \"Animals\"\n    :animals/list\n    [[1 \"Ant\"] [2 \"Antelope\"] [3 \"Bird\"] [4 \"Cat\"] [5 \"Dog\"]\n     [6 \"Lion\"] [7 \"Mouse\"] [8 \"Monkey\"] [9 \"Snake\"] [10 \"Zebra\"]]}))"),cljs.core.str("\n```\n")].join(''),"See the [tutorial](https://github.com/omcljs/om/wiki/Quick-Start-%28om.next%29#changing-queries-over-time) for the full multimethods source",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defmulti read (fn [env key params] key))"),cljs.core.str("\n```\n")].join(''),"`defui` with params and query:",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defui AnimalsList\n  static om/IQueryParams\n  (params [this]\n    {:start 0 :end 10})\n  static om/IQuery\n  (query [this]\n    '[:app/title (:animals/list {:start ?start :end ?end})])\n  Object\n  (render [this]\n    (let [{:keys [app/title animals/list]} (om/props this)]\n      (sab/html\n       [:div\n        [:h3 title]\n        [:button\n         {:onClick (fn [e] (change-params))}\n         \"Change query params\"]\n        [:div (str \"Query: \" (om/get-query (om/class->any reconciler AnimalsList)))]\n        [:ul\n         (for [[i name] list]\n           [:li (str i \". \" name)])]]))))"),cljs.core.str("\n```\n")].join(''),[cljs.core.str("\n```clojure\n"),cljs.core.str("(def reconciler\n  (om/reconciler\n   {:state app-state\n    :parser (om/parser {:read read})}))"),cljs.core.str("\n```\n")].join(''),"A function to change the query dynamically:",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn change-params []\n  \"Change end index to random int \"\n  (om/set-params! (om/class->any reconciler AnimalsList)\n                  {:start 0 :end (rand-int 10)}))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_next_tut.animals","om_next_tut.animals",1118279646),new cljs.core.Keyword(null,"animals-list","animals-list",-1457550609)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"animals-list",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (data_atom,node){
return om.next.add_root_BANG_.call(null,om_next_tut.animals.reconciler,om_next_tut.animals.AnimalsList,node);
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),om_next_tut.animals.app_state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)], null));
})], null));

//# sourceMappingURL=animals.js.map