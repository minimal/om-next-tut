// Compiled by ClojureScript 1.7.122 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('om.next.impl.refs');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_root_class_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
om.next.node__GT_key = (function om$next$node__GT_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
var node_SINGLEQUOTE_ = cljs.core.first.call(null,node);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,node_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;

}
}
});
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__62989_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__62989_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__62989_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__62989_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__62998 = clojure.zip.down.call(null,loc);
var G__62999 = path__$1;
loc = G__62998;
path__$1 = G__62999;
continue;
} else {
var vec__62997 = path__$1;
var k = cljs.core.nth.call(null,vec__62997,(0),null);
var ks = cljs.core.nthnext.call(null,vec__62997,(1));
var k_SINGLEQUOTE_ = om.next.node__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_.call(null,node)){
var G__63000 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc)));
var G__63001 = ks;
loc = G__63000;
path__$1 = G__63001;
continue;
} else {
var G__63002 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__63003 = ks;
loc = G__63002;
path__$1 = G__63003;
continue;
}
} else {
var G__63004 = clojure.zip.right.call(null,loc);
var G__63005 = path__$1;
loc = G__63004;
path__$1 = G__63005;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__63007 = path;
var k = cljs.core.nth.call(null,vec__63007,(0),null);
var ks = cljs.core.nthnext.call(null,vec__63007,(1));
var match = ((function (vec__63007,k,ks){
return (function om$next$focus_query_$_match(x){
var k_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,x))?cljs.core.ffirst.call(null,x):x);
return cljs.core._EQ_.call(null,k,k_SINGLEQUOTE_);
});})(vec__63007,k,ks))
;
var value = ((function (vec__63007,k,ks){
return (function om$next$focus_query_$_value(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,x),om$next$focus_query.call(null,cljs.core.second.call(null,cljs.core.first.call(null,x)),ks)], true, false);
} else {
return x;
}
});})(vec__63007,k,ks))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value)),query);
}
});
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args63008 = [];
var len__17390__auto___63012 = arguments.length;
var i__17391__auto___63013 = (0);
while(true){
if((i__17391__auto___63013 < len__17390__auto___63012)){
args63008.push((arguments[i__17391__auto___63013]));

var G__63014 = (i__17391__auto___63013 + (1));
i__17391__auto___63013 = G__63014;
continue;
} else {
}
break;
}

var G__63010 = args63008.length;
switch (G__63010) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63008.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,path){
while(true){
if(cljs.core.vector_QMARK_.call(null,focus)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null))))].join('')));
}

if(cljs.core.truth_((function (){var and__16320__auto__ = cljs.core.some.call(null,cljs.core.map_QMARK_,focus);
if(cljs.core.truth_(and__16320__auto__)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__16320__auto__;
}
})())){
var vec__63011 = cljs.core.ffirst.call(null,focus);
var k = cljs.core.nth.call(null,vec__63011,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63011,(1),null);
var G__63016 = focus_SINGLEQUOTE_;
var G__63017 = cljs.core.conj.call(null,path,k);
focus = G__63016;
path = G__63017;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ref for this component
 */
om.next.ident = (function om$next$ident(this$){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$1 == null)))){
return this$.om$next$Ident$ident$arity$1(this$);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (om.next.ident[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$);
} else {
var m__16988__auto____$1 = (om.next.ident["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});

(om.next.Ident["_"] = true);

(om.next.ident["_"] = (function (this$){
return this$;
}));

/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (om.next.params[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$);
} else {
var m__16988__auto____$1 = (om.next.params["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (om.next.query[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$);
} else {
var m__16988__auto____$1 = (om.next.query["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$,new_state);
} else {
var m__16988__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (om.next._get_state[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$);
} else {
var m__16988__auto____$1 = (om.next._get_state["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (om.next._get_rendered_state[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$);
} else {
var m__16988__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$);
} else {
var m__16988__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__16320__auto__ = (x instanceof cljs.core.Symbol);
if(and__16320__auto__){
return goog.string.startsWith(cljs.core.name.call(null,x),"?");
} else {
return and__16320__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,cljs.core.name.call(null,x).substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,node))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,node),node);
} else {
return node;
}
});
return clojure.walk.prewalk.call(null,replace_var,query);
});
om.next.component_QMARK_;

om.next.get_reconciler;
om.next.get_component_query = (function om$next$get_component_query(c){
var r = om.next.get_reconciler.call(null,c);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = (((r == null))?null:cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ref = om.next.ident.call(null,c);
var qps = cljs.core.get.call(null,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(st),c);
return cljs.core.with_meta.call(null,om.next.bind_query.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(qps,om.next.query.call(null,c)),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(qps,om.next.params.call(null,c))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),c], null));
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x))){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
return cljs.core.with_meta.call(null,om.next.bind_query.call(null,om.next.query.call(null,x),om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
} else {
return null;
}
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
}
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4423__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return rk;
} else {
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"om-index","om-index",546499419).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(class$){
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"class","class",-390430469,null))))].join('')));
}

return (function() { 
var G__63022__delegate = function (props,children){
if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return cljs.core.apply.call(null,om.next._STAR_instrument_STAR_,props,children);
} else {
return React.createElement(class$,{"omcljs$value": props, "omcljs$index": new cljs.core.Keyword(null,"om-index","om-index",546499419).cljs$core$IFn$_invoke$arity$1(props), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": om.next.compute_react_key.call(null,class$,props), "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$rootClass": om.next._STAR_root_class_STAR_, "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_, "omcljs$t": (cljs.core.truth_(om.next._STAR_reconciler_STAR_)?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0))},children);
}
};
var G__63022 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__63023__i = 0, G__63023__a = new Array(arguments.length -  1);
while (G__63023__i < G__63023__a.length) {G__63023__a[G__63023__i] = arguments[G__63023__i + 1]; ++G__63023__i;}
  children = new cljs.core.IndexedSeq(G__63023__a,0);
} 
return G__63022__delegate.call(this,props,children);};
G__63022.cljs$lang$maxFixedArity = 1;
G__63022.cljs$lang$applyTo = (function (arglist__63024){
var props = cljs.core.first(arglist__63024);
var children = cljs.core.rest(arglist__63024);
return G__63022__delegate(props,children);
});
G__63022.cljs$core$IFn$_invoke$arity$variadic = G__63022__delegate;
return G__63022;
})()
;
});
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
return x.om$isComponent;
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
var cst = c.state;
var cps = c.props;
if((cst == null)){
return goog.object.get(cps,"omcljs$t");
} else {
var t0 = goog.object.get(cst,"omcljs$t");
var t1 = goog.object.get(cps,"omcljs$t");
var x__16663__auto__ = t0;
var y__16664__auto__ = t1;
return ((x__16663__auto__ > y__16664__auto__) ? x__16663__auto__ : y__16664__auto__);
}
});
om.next.root_class = (function om$next$root_class(component){
return om.next.get_prop.call(null,component,"omcljs$rootClass");
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
return om.next.get_prop.call(null,component,"omcljs$depth");
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__16332__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om index.
 */
om.next.index = (function om$next$index(c){
return om.next.get_prop.call(null,c,"omcljs$index");
});
om.next.shared = (function om$next$shared(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$shared");
});
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

goog.object.set(c.state,"omcljs$t",om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c)));

return goog.object.set(c.state,"omcljs$value",next_props);
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var cst = component.state;
var cps = component.props;
if((cst == null)){
return goog.object.get(cps,"omcljs$value");
} else {
var t0 = goog.object.get(cst,"omcljs$t");
var t1 = goog.object.get(cps,"omcljs$t");
if((t0 > t1)){
return goog.object.get(cst,"omcljs$value");
} else {
return goog.object.get(cps,"omcljs$value");
}
}
});
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__4423__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
return om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args63027 = [];
var len__17390__auto___63031 = arguments.length;
var i__17391__auto___63032 = (0);
while(true){
if((i__17391__auto___63032 < len__17390__auto___63031)){
args63027.push((arguments[i__17391__auto___63032]));

var G__63033 = (i__17391__auto___63032 + (1));
i__17391__auto___63032 = G__63033;
continue;
} else {
}
break;
}

var G__63029 = args63027.length;
switch (G__63029) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63027.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component)))?om.next._get_state.call(null,component):(function (){var temp__4425__auto__ = component.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
var or__16332__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s update-in.
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args63035 = [];
var len__17390__auto___63045 = arguments.length;
var i__17391__auto___63046 = (0);
while(true){
if((i__17391__auto___63046 < len__17390__auto___63045)){
args63035.push((arguments[i__17391__auto___63046]));

var G__63047 = (i__17391__auto___63046 + (1));
i__17391__auto___63046 = G__63047;
continue;
} else {
}
break;
}

var G__63044 = args63035.length;
switch (G__63044) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__17409__auto__ = (new cljs.core.IndexedSeq(args63035.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__17409__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq63036){
var G__63037 = cljs.core.first.call(null,seq63036);
var seq63036__$1 = cljs.core.next.call(null,seq63036);
var G__63038 = cljs.core.first.call(null,seq63036__$1);
var seq63036__$2 = cljs.core.next.call(null,seq63036__$1);
var G__63039 = cljs.core.first.call(null,seq63036__$2);
var seq63036__$3 = cljs.core.next.call(null,seq63036__$2);
var G__63040 = cljs.core.first.call(null,seq63036__$3);
var seq63036__$4 = cljs.core.next.call(null,seq63036__$3);
var G__63041 = cljs.core.first.call(null,seq63036__$4);
var seq63036__$5 = cljs.core.next.call(null,seq63036__$4);
var G__63042 = cljs.core.first.call(null,seq63036__$5);
var seq63036__$6 = cljs.core.next.call(null,seq63036__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63037,G__63038,G__63039,G__63040,G__63041,G__63042,seq63036__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
return om.next._get_rendered_state.call(null,component);
} else {
var G__63052 = component;
var G__63052__$1 = (((G__63052 == null))?null:G__63052.state);
var G__63052__$2 = (((G__63052__$1 == null))?null:goog.object.get(G__63052__$1,"omcljs$state"));
return G__63052__$2;
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c))){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__4425__auto__ = (function (){var G__63056 = c;
var G__63056__$1 = (((G__63056 == null))?null:G__63056.state);
var G__63056__$2 = (((G__63056__$1 == null))?null:goog.object.get(G__63056__$1,"omcljs$pendingState"));
return G__63056__$2;
})();
if(cljs.core.truth_(temp__4425__auto__)){
var pending = temp__4425__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args63057 = [];
var len__17390__auto___63060 = arguments.length;
var i__17391__auto___63061 = (0);
while(true){
if((i__17391__auto___63061 < len__17390__auto___63060)){
args63057.push((arguments[i__17391__auto___63061]));

var G__63062 = (i__17391__auto___63061 + (1));
i__17391__auto___63061 = G__63062;
continue;
} else {
}
break;
}

var G__63059 = args63057.length;
switch (G__63059) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63057.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Change the query of a component. Will schedule a re-render.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(component,new_query){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
if((om.next._STAR_logger_STAR_ == null)){
} else {
goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((function (){var temp__4425__auto__ = om.next.ident.call(null,component);
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query '"),cljs.core.str(new_query),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new_query], null));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return null;
});
/**
 * Change the query parameters of a component. Will schedule a re-render.
 */
om.next.set_params_BANG_ = (function om$next$set_params_BANG_(component,new_params){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
if((om.next._STAR_logger_STAR_ == null)){
} else {
goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((function (){var temp__4425__auto__ = om.next.ident.call(null,component);
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query params "),cljs.core.str(new_params),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new_params], null));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return null;
});
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return component.isMounted();
});
/**
 * Returns the dom node associated with a component's React ref.
 */
om.next.dom_node = (function om$next$dom_node(var_args){
var args63064 = [];
var len__17390__auto___63068 = arguments.length;
var i__17391__auto___63069 = (0);
while(true){
if((i__17391__auto___63069 < len__17390__auto___63068)){
args63064.push((arguments[i__17391__auto___63069]));

var G__63070 = (i__17391__auto___63069 + (1));
i__17391__auto___63069 = G__63070;
continue;
} else {
}
break;
}

var G__63066 = args63064.length;
switch (G__63066) {
case 1:
return om.next.dom_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.dom_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63064.length)].join('')));

}
});

om.next.dom_node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return component.getDOMNode();
});

om.next.dom_node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__63067 = component.refs;
var G__63067__$1 = (((G__63067 == null))?null:goog.object.get(G__63067,name));
var G__63067__$2 = (((G__63067__$1 == null))?null:G__63067__$1.getDOMNode());
return G__63067__$2;
});

om.next.dom_node.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__63073 = component.refs;
var G__63073__$1 = (((G__63073 == null))?null:goog.object.get(G__63073,name));
return G__63073__$1;
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args63074 = [];
var len__17390__auto___63077 = arguments.length;
var i__17391__auto___63078 = (0);
while(true){
if((i__17391__auto___63078 < len__17390__auto___63077)){
args63074.push((arguments[i__17391__auto___63078]));

var G__63079 = (i__17391__auto___63078 + (1));
i__17391__auto___63078 = G__63079;
continue;
} else {
}
break;
}

var G__63076 = args63074.length;
switch (G__63076) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63074.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var c__$1 = c;
var ret = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,c__$1));
while(true){
var temp__4423__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(cljs.core.truth_(om.next.iquery_QMARK_.call(null,p))){
var G__63081 = p;
var G__63082 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__63081;
ret = G__63082;
continue;
} else {
var G__63083 = p;
var G__63084 = ret;
c__$1 = G__63083;
ret = G__63084;
continue;
}
} else {
return ret;
}
break;
}
});
om.next.data_path = (function om$next$data_path(var_args){
var args63085 = [];
var len__17390__auto___63088 = arguments.length;
var i__17391__auto___63089 = (0);
while(true){
if((i__17391__auto___63089 < len__17390__auto___63088)){
args63085.push((arguments[i__17391__auto___63089]));

var G__63090 = (i__17391__auto___63089 + (1));
i__17391__auto___63089 = G__63090;
continue;
} else {
}
break;
}

var G__63087 = args63085.length;
switch (G__63087) {
case 1:
return om.next.data_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.data_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63085.length)].join('')));

}
});

om.next.data_path.cljs$core$IFn$_invoke$arity$1 = (function (c){
var f = (function (c__$1){
return om.next.index.call(null,c__$1);
});
return om.next.data_path.call(null,c,f);
});

om.next.data_path.cljs$core$IFn$_invoke$arity$2 = (function (c,f){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var c__$1 = c;
var ret = cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var or__16332__auto__ = f.call(null,c__$1);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return new cljs.core.Symbol(null,"*","*",345799209,null);
}
})());
while(true){
var temp__4423__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
var temp__4423__auto____$1 = f.call(null,p);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
var G__63092 = p;
var G__63093 = cljs.core.cons.call(null,idx,ret);
c__$1 = G__63092;
ret = G__63093;
continue;
} else {
if(cljs.core.truth_(om.next.iquery_QMARK_.call(null,p))){
var G__63094 = p;
var G__63095 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"*","*",345799209,null),ret);
c__$1 = G__63094;
ret = G__63095;
continue;
} else {
var G__63096 = p;
var G__63097 = ret;
c__$1 = G__63096;
ret = G__63097;
continue;
}
}
} else {
return ret;
}
break;
}
});

om.next.data_path.cljs$lang$maxFixedArity = 2;
om.next.focused_QMARK_ = (function om$next$focused_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (((1) === cljs.core.count.call(null,x))) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,x)));
});
om.next.state_query = (function om$next$state_query(focus,data_path){
var state_query_STAR_ = (function om$next$state_query_$_state_query_STAR_(focus__$1,data_path__$1){
if(cljs.core.truth_((function (){var and__16320__auto__ = cljs.core.seq.call(null,data_path__$1);
if(and__16320__auto__){
return om.next.focused_QMARK_.call(null,focus__$1);
} else {
return and__16320__auto__;
}
})())){
var node = cljs.core.first.call(null,focus__$1);
var vec__63105 = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.ffirst.call(null,node):cljs.core.first.call(null,node));
var k = cljs.core.nth.call(null,vec__63105,(0),null);
var v = cljs.core.nth.call(null,vec__63105,(1),null);
var index = cljs.core.first.call(null,data_path__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"*","*",345799209,null),index))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null)),cljs.core.PersistentArrayMap.fromArray([k,om$next$state_query_$_state_query_STAR_.call(null,v,cljs.core.rest.call(null,data_path__$1))], true, false))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([k,om$next$state_query_$_state_query_STAR_.call(null,v,cljs.core.rest.call(null,data_path__$1))], true, false)], null);
}
} else {
return focus__$1;
}
});
return state_query_STAR_.call(null,focus,cljs.core.rest.call(null,data_path));
});
om.next.state_path_STAR_ = (function om$next$state_path_STAR_(focus,data_path){
var focus__$1 = focus;
var data_path__$1 = cljs.core.rest.call(null,data_path);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var and__16320__auto__ = cljs.core.seq.call(null,data_path__$1);
if(and__16320__auto__){
return om.next.focused_QMARK_.call(null,focus__$1);
} else {
return and__16320__auto__;
}
})())){
var node = cljs.core.first.call(null,focus__$1);
var vec__63108 = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.ffirst.call(null,node):cljs.core.first.call(null,node));
var k = cljs.core.nth.call(null,vec__63108,(0),null);
var v = cljs.core.nth.call(null,vec__63108,(1),null);
var index = cljs.core.first.call(null,data_path__$1);
var G__63110 = v;
var G__63111 = cljs.core.rest.call(null,data_path__$1);
var G__63112 = (function (){var G__63109 = cljs.core.conj.call(null,ret,k);
var G__63109__$1 = ((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"*","*",345799209,null),index))?cljs.core.conj.call(null,G__63109,index):G__63109);
return G__63109__$1;
})();
focus__$1 = G__63110;
data_path__$1 = G__63111;
ret = G__63112;
continue;
} else {
return ret;
}
break;
}
});
om.next.state_path = (function om$next$state_path(indexer,c){
var idxs = cljs.core.deref.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(indexer));
var focus = clojure.zip.root.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,idxs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,c)], null))));
return om.next.state_path_STAR_.call(null,focus,om.next.data_path.call(null,c));
});
om.next.reconciler_QMARK_;
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
});
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_send_BANG_ = (function om$next$schedule_send_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_send_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(300));
} else {
return null;
}
});
om.next.remove_root_BANG_;
/**
 * Given a a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe state changes to the :state and keep the components
 * in sync.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args63113 = [];
var len__17390__auto___63116 = arguments.length;
var i__17391__auto___63117 = (0);
while(true){
if((i__17391__auto___63117 < len__17390__auto___63116)){
args63113.push((arguments[i__17391__auto___63117]));

var G__63118 = (i__17391__auto___63117 + (1));
i__17391__auto___63117 = G__63118;
continue;
} else {
}
break;
}

var G__63115 = args63113.length;
switch (G__63115) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63113.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
var temp__4425__auto___63120 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__4425__auto___63120)){
var old_reconciler_63121 = temp__4425__auto___63120;
om.next.remove_root_BANG_.call(null,old_reconciler_63121,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))))].join('')));
}

if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM elment) from a reconciler. The reconciler will no
 * longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});
om.next.ref = (function om$next$ref(var_args){
var args__17397__auto__ = [];
var len__17390__auto___63125 = arguments.length;
var i__17391__auto___63126 = (0);
while(true){
if((i__17391__auto___63126 < len__17390__auto___63125)){
args__17397__auto__.push((arguments[i__17391__auto___63126]));

var G__63127 = (i__17391__auto___63126 + (1));
i__17391__auto___63126 = G__63127;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((2) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((2)),(0))):null);
return om.next.ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17398__auto__);
});

om.next.ref.cljs$core$IFn$_invoke$arity$variadic = (function (root,id,more){
return (new om.next.impl.refs.Ref(cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,id], null),more)));
});

om.next.ref.cljs$lang$maxFixedArity = (2);

om.next.ref.cljs$lang$applyTo = (function (seq63122){
var G__63123 = cljs.core.first.call(null,seq63122);
var seq63122__$1 = cljs.core.next.call(null,seq63122);
var G__63124 = cljs.core.first.call(null,seq63122__$1);
var seq63122__$2 = cljs.core.next.call(null,seq63122__$1);
return om.next.ref.cljs$core$IFn$_invoke$arity$variadic(G__63123,G__63124,seq63122__$2);
});
om.next.ref_QMARK_ = (function om$next$ref_QMARK_(x){
return (x instanceof om.next.impl.refs.Ref);
});
om.next.refs = (function om$next$refs(var_args){
var args__17397__auto__ = [];
var len__17390__auto___63131 = arguments.length;
var i__17391__auto___63132 = (0);
while(true){
if((i__17391__auto___63132 < len__17390__auto___63131)){
args__17397__auto__.push((arguments[i__17391__auto___63132]));

var G__63133 = (i__17391__auto___63132 + (1));
i__17391__auto___63132 = G__63133;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return om.next.refs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

om.next.refs.cljs$core$IFn$_invoke$arity$variadic = (function (root,ids){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__63128_SHARP_){
return om.next.ref.call(null,root,p1__63128_SHARP_);
})),ids);
});

om.next.refs.cljs$lang$maxFixedArity = (1);

om.next.refs.cljs$lang$applyTo = (function (seq63129){
var G__63130 = cljs.core.first.call(null,seq63129);
var seq63129__$1 = cljs.core.next.call(null,seq63129);
return om.next.refs.cljs$core$IFn$_invoke$arity$variadic(G__63130,seq63129__$1);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__16987__auto__ = (((c == null))?null:c);
var m__16988__auto__ = (om.next.tx_intercept[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,c,tx);
} else {
var m__16988__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->ref","ui->ref",-702529751)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__16320__auto__ = c;
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.not.call(null,ref);
} else {
return and__16320__auto__;
}
})())?om.next.ident.call(null,c):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (((om.next._STAR_logger_STAR_ == null))?null:goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join('')));
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var v_SINGLEQUOTE_ = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx,true);
if(cljs.core.empty_QMARK_.call(null,v)){
} else {
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,(cljs.core.truth_(ref__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null):cljs.core.PersistentVector.EMPTY),cljs.core.remove.call(null,cljs.core.symbol_QMARK_,cljs.core.keys.call(null,v))));
}

if(cljs.core.empty_QMARK_.call(null,v_SINGLEQUOTE_)){
return null;
} else {
om.next.protocols.queue_send_BANG_.call(null,r,v_SINGLEQUOTE_);

return om.next.schedule_send_BANG_.call(null,r);
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering. If given a reconciler can be
 * optionally passed a ref as the second argument.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args63134 = [];
var len__17390__auto___63138 = arguments.length;
var i__17391__auto___63139 = (0);
while(true){
if((i__17391__auto___63139 < len__17390__auto___63138)){
args63134.push((arguments[i__17391__auto___63139]));

var G__63140 = (i__17391__auto___63139 + (1));
i__17391__auto___63139 = G__63140;
continue;
} else {
}
break;
}

var G__63136 = args63134.length;
switch (G__63136) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63134.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null))))].join('')));
}

if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx);
} else {
var p = om.next.parent.call(null,x);
var tx__$1 = tx;
while(true){
if((p == null)){
return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),x,null,tx__$1);
} else {
var tx__$2 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p)))?om.next.tx_intercept.call(null,p,tx__$1):tx__$1);
var G__63142 = om.next.parent.call(null,p);
var G__63143 = tx__$2;
p = G__63142;
tx__$1 = G__63143;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Given a component a symbol identifying a mutation run a transaction. May
 * supply a parse expression of reads that will be used to trigger re-renders
 * that depend on the provided keys. Does not return a meaningful value.
 * 
 * Example:
 * 
 *   (om/call widget 'do/it! [:changed/key])
 */
om.next.call = (function om$next$call(var_args){
var args63144 = [];
var len__17390__auto___63147 = arguments.length;
var i__17391__auto___63148 = (0);
while(true){
if((i__17391__auto___63148 < len__17390__auto___63147)){
args63144.push((arguments[i__17391__auto___63148]));

var G__63149 = (i__17391__auto___63148 + (1));
i__17391__auto___63148 = G__63149;
continue;
} else {
}
break;
}

var G__63146 = args63144.length;
switch (G__63146) {
case 2:
return om.next.call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63144.length)].join('')));

}
});

om.next.call.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
return om.next.call.call(null,component,name,null);
});

om.next.call.cljs$core$IFn$_invoke$arity$3 = (function (component,name,param_map){
return om.next.call.call(null,component,name,param_map,cljs.core.PersistentVector.EMPTY);
});

om.next.call.cljs$core$IFn$_invoke$arity$4 = (function (component,name,param_map,reads){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

if(om.next.nil_or_map_QMARK_.call(null,param_map)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil-or-map?","nil-or-map?",808981051,null),new cljs.core.Symbol(null,"param-map","param-map",1125761768,null))))].join('')));
}

if(cljs.core.vector_QMARK_.call(null,reads)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"reads","reads",425464166,null))))].join('')));
}

return om.next.transact_BANG_.call(null,component,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,param_map))))))))),reads));
});

om.next.call.cljs$lang$maxFixedArity = 4;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__63151){
var map__63154 = p__63151;
var map__63154__$1 = ((((!((map__63154 == null)))?((((map__63154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63154):map__63154);
var opts = map__63154__$1;
var read = cljs.core.get.call(null,map__63154__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__63154__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.first.call(null,x):x);
return cljs.core.map_QMARK_.call(null,x__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,class$){
var self__ = this;
var ___$1 = this;
var class__GT_paths = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,class$);
var build_index_STAR_ = ((function (class__GT_paths,prop__GT_classes,class_path__GT_query,rootq,___$1){
return (function om$next$build_index_STAR_(class$__$1,selector,path,classpath){
cljs.core.swap_BANG_.call(null,class__GT_paths,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);

cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path));

var map__63186 = cljs.core.group_by.call(null,om.next.join_QMARK_,selector);
var map__63186__$1 = ((((!((map__63186 == null)))?((((map__63186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63186):map__63186);
var props = cljs.core.get.call(null,map__63186__$1,false);
var joins = cljs.core.get.call(null,map__63186__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__63186,map__63186__$1,props,joins,class__GT_paths,prop__GT_classes,class_path__GT_query,rootq,___$1){
return (function (p1__63156_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__63156_SHARP_,cljs.core.zipmap.call(null,props,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__63186,map__63186__$1,props,joins,class__GT_paths,prop__GT_classes,class_path__GT_query,rootq,___$1))
);

var seq__63188 = cljs.core.seq.call(null,joins);
var chunk__63189 = null;
var count__63190 = (0);
var i__63191 = (0);
while(true){
if((i__63191 < count__63190)){
var join = cljs.core._nth.call(null,chunk__63189,i__63191);
var vec__63192_63200 = ((cljs.core.map_QMARK_.call(null,join))?cljs.core.first.call(null,join):cljs.core.ffirst.call(null,join));
var prop_63201 = cljs.core.nth.call(null,vec__63192_63200,(0),null);
var selector_SINGLEQUOTE__63202 = cljs.core.nth.call(null,vec__63192_63200,(1),null);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__63188,chunk__63189,count__63190,i__63191,vec__63192_63200,prop_63201,selector_SINGLEQUOTE__63202,join,map__63186,map__63186__$1,props,joins,class__GT_paths,prop__GT_classes,class_path__GT_query,rootq,___$1){
return (function (p1__63157_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__63157_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_63201,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__63188,chunk__63189,count__63190,i__63191,vec__63192_63200,prop_63201,selector_SINGLEQUOTE__63202,join,map__63186,map__63186__$1,props,joins,class__GT_paths,prop__GT_classes,class_path__GT_query,rootq,___$1))
);

var class_SINGLEQUOTE__63203 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE__63202));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__63203,selector_SINGLEQUOTE__63202,cljs.core.conj.call(null,path,prop_63201),cljs.core.conj.call(null,classpath,class_SINGLEQUOTE__63203));

var G__63204 = seq__63188;
var G__63205 = chunk__63189;
var G__63206 = count__63190;
var G__63207 = (i__63191 + (1));
seq__63188 = G__63204;
chunk__63189 = G__63205;
count__63190 = G__63206;
i__63191 = G__63207;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__63188);
if(temp__4425__auto__){
var seq__63188__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63188__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__63188__$1);
var G__63208 = cljs.core.chunk_rest.call(null,seq__63188__$1);
var G__63209 = c__17135__auto__;
var G__63210 = cljs.core.count.call(null,c__17135__auto__);
var G__63211 = (0);
seq__63188 = G__63208;
chunk__63189 = G__63209;
count__63190 = G__63210;
i__63191 = G__63211;
continue;
} else {
var join = cljs.core.first.call(null,seq__63188__$1);
var vec__63193_63212 = ((cljs.core.map_QMARK_.call(null,join))?cljs.core.first.call(null,join):cljs.core.ffirst.call(null,join));
var prop_63213 = cljs.core.nth.call(null,vec__63193_63212,(0),null);
var selector_SINGLEQUOTE__63214 = cljs.core.nth.call(null,vec__63193_63212,(1),null);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__63188,chunk__63189,count__63190,i__63191,vec__63193_63212,prop_63213,selector_SINGLEQUOTE__63214,join,seq__63188__$1,temp__4425__auto__,map__63186,map__63186__$1,props,joins,class__GT_paths,prop__GT_classes,class_path__GT_query,rootq,___$1){
return (function (p1__63157_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__63157_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_63213,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__63188,chunk__63189,count__63190,i__63191,vec__63193_63212,prop_63213,selector_SINGLEQUOTE__63214,join,seq__63188__$1,temp__4425__auto__,map__63186,map__63186__$1,props,joins,class__GT_paths,prop__GT_classes,class_path__GT_query,rootq,___$1))
);

var class_SINGLEQUOTE__63215 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE__63214));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__63215,selector_SINGLEQUOTE__63214,cljs.core.conj.call(null,path,prop_63213),cljs.core.conj.call(null,classpath,class_SINGLEQUOTE__63215));

var G__63216 = cljs.core.next.call(null,seq__63188__$1);
var G__63217 = null;
var G__63218 = (0);
var G__63219 = (0);
seq__63188 = G__63216;
chunk__63189 = G__63217;
count__63190 = G__63218;
i__63191 = G__63219;
continue;
}
} else {
return null;
}
}
break;
}
});})(class__GT_paths,prop__GT_classes,class_path__GT_query,rootq,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null));

return cljs.core.reset_BANG_.call(null,self__.indexes,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class->paths","class->paths",-368829394),cljs.core.deref.call(null,class__GT_paths),new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ref = om.next.ident.call(null,c);
if(!(om.next.component_QMARK_.call(null,ref))){
var G__63194 = indexes__$2;
var G__63194__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.call(null,G__63194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__63194);
return G__63194__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var ref = om.next.ident.call(null,c);
if(!(om.next.component_QMARK_.call(null,ref))){
var G__63195 = indexes__$2;
var G__63195__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.call(null,G__63195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.disj,c):G__63195);
return G__63195__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,indexes__$1,___$1){
return (function (p1__63158_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__63158_SHARP_], null));
});})(cs__$1,cs,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
throw (new Error([cljs.core.str("Invalid key "),cljs.core.str(k),cljs.core.str(", key must be ref or keyword")].join('')));
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k63160,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__63196 = (((k63160 instanceof cljs.core.Keyword))?k63160.fqn:null);
switch (G__63196) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63160,else__16949__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#om.next.Indexer{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63159){
var self__ = this;
var G__63159__$1 = this;
return (new cljs.core.RecordIter((0),G__63159__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
var self__ = this;
var this__16941__auto____$1 = this;
var h__16767__auto__ = self__.__hash;
if(!((h__16767__auto__ == null))){
return h__16767__auto__;
} else {
var h__16767__auto____$1 = cljs.core.hash_imap.call(null,this__16941__auto____$1);
self__.__hash = h__16767__auto____$1;

return h__16767__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16320__auto__ = other__16943__auto__;
if(cljs.core.truth_(and__16320__auto__)){
var and__16320__auto____$1 = (this__16942__auto____$1.constructor === other__16943__auto__.constructor);
if(and__16320__auto____$1){
return cljs.core.equiv_map.call(null,this__16942__auto____$1,other__16943__auto__);
} else {
return and__16320__auto____$1;
}
} else {
return and__16320__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__63159){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__63197 = cljs.core.keyword_identical_QMARK_;
var expr__63198 = k__16954__auto__;
if(cljs.core.truth_(pred__63197.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__63198))){
return (new om.next.Indexer(G__63159,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__63159),null));
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__63159){
var self__ = this;
var this__16945__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,G__63159,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes){
return (new om.next.Indexer(indexes,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__63161){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__63161),null,cljs.core.dissoc.call(null,G__63161,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(){
return (new om.next.Indexer(cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),null,null,null));
});
/**
 * Returns true if x is an indexer.
 */
om.next.indexer_QMARK_ = (function om$next$indexer_QMARK_(x){
return (x instanceof om.next.Indexer);
});
om.next.build_index = (function om$next$build_index(class$){
var idxr = om.next.indexer.call(null);
return om.next.protocols.index_root.call(null,idxr,class$);
});
/**
 * Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
om.next.class_path__GT_query = (function om$next$class_path__GT_query(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Return all paths for a given ref.
 */
om.next.ref__GT_paths = (function om$next$ref__GT_paths(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.reduce.call(null,((function (indexer){
return (function (p1__63221_SHARP_,p2__63222_SHARP_){
return cljs.core.conj.call(null,p1__63221_SHARP_,om.next.state_path.call(null,indexer,p2__63222_SHARP_));
});})(indexer))
,cljs.core.PersistentHashSet.EMPTY,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any path from the indexer that matches the given ref. See also
 * om.next/ref->paths.
 */
om.next.ref__GT_any_path = (function om$next$ref__GT_any_path(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.state_path.call(null,indexer,cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref)));
});
/**
 * Given a key path into the application state return the path after the
 * given key
 */
om.next.subpath = (function om$next$subpath(path,key){
return cljs.core.rest.call(null,cljs.core.drop_while.call(null,(function (p1__63223_SHARP_){
return cljs.core.not_EQ_.call(null,key,p1__63223_SHARP_);
}),path));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(component){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
});
/**
 * Given a component return the nearest parent (including the component itself)
 * for which there is a known data path.
 */
om.next.to_resolveable = (function om$next$to_resolveable(x){
var c = x;
while(true){
if((om.next.parent.call(null,c) == null)){
return c;
} else {
var cp = om.next.class_path.call(null,c);
var dp = om.next.data_path.call(null,c);
if(!((cljs.core.count.call(null,cp) === cljs.core.count.call(null,dp)))){
var G__63224 = om.next.parent.call(null,c);
c = G__63224;
continue;
} else {
var qs = om.next.class_path__GT_query.call(null,om.next.get_reconciler.call(null,c),c);
if(((1) < cljs.core.count.call(null,qs))){
var G__63225 = om.next.parent.call(null,c);
c = G__63225;
continue;
} else {
return c;
}
}
}
break;
}
});
om.next.sift_refs = (function om$next$sift_refs(res){
var map__63229 = cljs.core.group_by.call(null,(function (p1__63226_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__63226_SHARP_));
}),res);
var map__63229__$1 = ((((!((map__63229 == null)))?((((map__63229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63229):map__63229);
var refs = cljs.core.get.call(null,map__63229__$1,true);
var rest = cljs.core.get.call(null,map__63229__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,refs),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
om.next.queue_calls_BANG_ = (function om$next$queue_calls_BANG_(r,res){
return om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)));
});
om.next.merge_refs = (function om$next$merge_refs(tree,p__63231,refs){
var map__63240 = p__63231;
var map__63240__$1 = ((((!((map__63240 == null)))?((((map__63240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63240):map__63240);
var config = map__63240__$1;
var merge_ref = cljs.core.get.call(null,map__63240__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403));
var step = ((function (map__63240,map__63240__$1,config,merge_ref){
return (function om$next$merge_refs_$_step(tree_SINGLEQUOTE_,p__63245){
var vec__63247 = p__63245;
var ref = cljs.core.nth.call(null,vec__63247,(0),null);
var props = cljs.core.nth.call(null,vec__63247,(1),null);
return merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props);
});})(map__63240,map__63240__$1,config,merge_ref))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(r,res){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var vec__63250 = om.next.sift_refs.call(null,res);
var refs = cljs.core.nth.call(null,vec__63250,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63250,(1),null);
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config),((function (config,vec__63250,refs,res_SINGLEQUOTE_){
return (function (p1__63248_SHARP_){
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_refs.call(null,p1__63248_SHARP_,config,refs),res_SINGLEQUOTE_);
});})(config,vec__63250,refs,res_SINGLEQUOTE_))
);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(reconciler,delta){
om.next.queue_calls_BANG_.call(null,reconciler,delta);

return om.next.merge_novelty_BANG_.call(null,reconciler,delta);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k63255,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__63257 = (((k63255 instanceof cljs.core.Keyword))?k63255.fqn:null);
switch (G__63257) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63255,else__16949__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_send_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"send-queued","send-queued",878884618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-queued","send-queued",878884618)], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1){
return (function (state__$1){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});})(___$1))
);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var expr = new cljs.core.Keyword(null,"queued-send","queued-send",-418418089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(expr)){
cljs.core.swap_BANG_.call(null,self__.state,((function (expr,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-send","queued-send",-418418089),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"send-queued","send-queued",878884618),false);
});})(expr,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,expr,((function (expr,this$__$1){
return (function (p1__63253_SHARP_){
om.next.queue_calls_BANG_.call(null,this$__$1,p1__63253_SHARP_);

return om.next.merge_novelty_BANG_.call(null,this$__$1,p1__63253_SHARP_);
});})(expr,this$__$1))
);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = cljs.core.deref.call(null,self__.state);
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st))){
var seq__63258_63277 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"roots","roots",-1088919250).cljs$core$IFn$_invoke$arity$1(st));
var chunk__63259_63278 = null;
var count__63260_63279 = (0);
var i__63261_63280 = (0);
while(true){
if((i__63261_63280 < count__63260_63279)){
var vec__63262_63281 = cljs.core._nth.call(null,chunk__63259_63278,i__63261_63280);
var __63282__$2 = cljs.core.nth.call(null,vec__63262_63281,(0),null);
var parsef_63283 = cljs.core.nth.call(null,vec__63262_63281,(1),null);
parsef_63283.call(null);

var G__63284 = seq__63258_63277;
var G__63285 = chunk__63259_63278;
var G__63286 = count__63260_63279;
var G__63287 = (i__63261_63280 + (1));
seq__63258_63277 = G__63284;
chunk__63259_63278 = G__63285;
count__63260_63279 = G__63286;
i__63261_63280 = G__63287;
continue;
} else {
var temp__4425__auto___63288 = cljs.core.seq.call(null,seq__63258_63277);
if(temp__4425__auto___63288){
var seq__63258_63289__$1 = temp__4425__auto___63288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63258_63289__$1)){
var c__17135__auto___63290 = cljs.core.chunk_first.call(null,seq__63258_63289__$1);
var G__63291 = cljs.core.chunk_rest.call(null,seq__63258_63289__$1);
var G__63292 = c__17135__auto___63290;
var G__63293 = cljs.core.count.call(null,c__17135__auto___63290);
var G__63294 = (0);
seq__63258_63277 = G__63291;
chunk__63259_63278 = G__63292;
count__63260_63279 = G__63293;
i__63261_63280 = G__63294;
continue;
} else {
var vec__63263_63295 = cljs.core.first.call(null,seq__63258_63289__$1);
var __63296__$2 = cljs.core.nth.call(null,vec__63263_63295,(0),null);
var parsef_63297 = cljs.core.nth.call(null,vec__63263_63295,(1),null);
parsef_63297.call(null);

var G__63298 = cljs.core.next.call(null,seq__63258_63289__$1);
var G__63299 = null;
var G__63300 = (0);
var G__63301 = (0);
seq__63258_63277 = G__63298;
chunk__63259_63278 = G__63299;
count__63260_63279 = G__63300;
i__63261_63280 = G__63301;
continue;
}
} else {
}
}
break;
}
} else {
var cs_63302 = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,___$1){
return (function (p1__63252_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__63252_SHARP_);
});})(st,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st));
var map__63264_63303 = self__.config;
var map__63264_63304__$1 = ((((!((map__63264_63303 == null)))?((((map__63264_63303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63264_63303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63264_63303):map__63264_63303);
var ui__GT_props_63305 = cljs.core.get.call(null,map__63264_63304__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env_63306 = om.next.to_env.call(null,self__.config);
var seq__63266_63307 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs_63302));
var chunk__63267_63308 = null;
var count__63268_63309 = (0);
var i__63269_63310 = (0);
while(true){
if((i__63269_63310 < count__63268_63309)){
var c_63311 = cljs.core._nth.call(null,chunk__63267_63308,i__63269_63310);
var next_props_63312 = ui__GT_props_63305.call(null,env_63306,c_63311);
if(cljs.core.truth_((function (){var and__16320__auto__ = om.next.should_update_QMARK_.call(null,c_63311,next_props_63312,om.next.get_state.call(null,c_63311));
if(cljs.core.truth_(and__16320__auto__)){
return om.next.mounted_QMARK_.call(null,c_63311);
} else {
return and__16320__auto__;
}
})())){
om.next.update_component_BANG_.call(null,c_63311,next_props_63312);
} else {
}

var G__63313 = seq__63266_63307;
var G__63314 = chunk__63267_63308;
var G__63315 = count__63268_63309;
var G__63316 = (i__63269_63310 + (1));
seq__63266_63307 = G__63313;
chunk__63267_63308 = G__63314;
count__63268_63309 = G__63315;
i__63269_63310 = G__63316;
continue;
} else {
var temp__4425__auto___63317 = cljs.core.seq.call(null,seq__63266_63307);
if(temp__4425__auto___63317){
var seq__63266_63318__$1 = temp__4425__auto___63317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63266_63318__$1)){
var c__17135__auto___63319 = cljs.core.chunk_first.call(null,seq__63266_63318__$1);
var G__63320 = cljs.core.chunk_rest.call(null,seq__63266_63318__$1);
var G__63321 = c__17135__auto___63319;
var G__63322 = cljs.core.count.call(null,c__17135__auto___63319);
var G__63323 = (0);
seq__63266_63307 = G__63320;
chunk__63267_63308 = G__63321;
count__63268_63309 = G__63322;
i__63269_63310 = G__63323;
continue;
} else {
var c_63324 = cljs.core.first.call(null,seq__63266_63318__$1);
var next_props_63325 = ui__GT_props_63305.call(null,env_63306,c_63324);
if(cljs.core.truth_((function (){var and__16320__auto__ = om.next.should_update_QMARK_.call(null,c_63324,next_props_63325,om.next.get_state.call(null,c_63324));
if(cljs.core.truth_(and__16320__auto__)){
return om.next.mounted_QMARK_.call(null,c_63324);
} else {
return and__16320__auto__;
}
})())){
om.next.update_component_BANG_.call(null,c_63324,next_props_63325);
} else {
}

var G__63326 = cljs.core.next.call(null,seq__63266_63318__$1);
var G__63327 = null;
var G__63328 = (0);
var G__63329 = (0);
seq__63266_63307 = G__63326;
chunk__63267_63308 = G__63327;
count__63268_63309 = G__63328;
i__63269_63310 = G__63329;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);
}

return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);

var renderf = ((function (ret,rctor,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_63270 = om.next._STAR_reconciler_STAR_;
var _STAR_root_class_STAR_63271 = om.next._STAR_root_class_STAR_;
var _STAR_shared_STAR_63272 = om.next._STAR_shared_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_root_class_STAR_ = root_class;

om.next._STAR_shared_STAR_ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = React.render(rctor.call(null,data),target);
if((cljs.core.deref.call(null,ret) == null)){
return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63272;

om.next._STAR_root_class_STAR_ = _STAR_root_class_STAR_63271;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63270;
}});})(ret,rctor,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__16332__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return root_class;
}
})());
if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
var v_SINGLEQUOTE_ = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel,true);
if(cljs.core.empty_QMARK_.call(null,v)){
} else {
renderf.call(null,v);
}

if(cljs.core.empty_QMARK_.call(null,v_SINGLEQUOTE_)){
return null;
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4425__auto__)){
var send = temp__4425__auto__;
return send.call(null,v_SINGLEQUOTE_,((function (send,temp__4425__auto__,env,v,v_SINGLEQUOTE_,sel,renderf,ret,rctor,this$__$1){
return (function (p1__63251_SHARP_){
om.next.merge_novelty_BANG_.call(null,this$__$1,p1__63251_SHARP_);

return renderf.call(null,p1__63251_SHARP_);
});})(send,temp__4425__auto__,env,v,v_SINGLEQUOTE_,sel,renderf,ret,rctor,this$__$1))
);
} else {
return null;
}
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roots","roots",-1088919250)], null),cljs.core.assoc,target,parsef);

parsef.call(null);

return cljs.core.deref.call(null,ret);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roots","roots",-1088919250)], null),cljs.core.dissoc,target);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_send_BANG_$arity$2 = (function (_,expr){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-send","queued-send",-418418089)], null),new cljs.core.Keyword(null,"merge-send","merge-send",36698142).cljs$core$IFn$_invoke$arity$1(self__.config),expr);
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#om.next.Reconciler{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63254){
var self__ = this;
var G__63254__$1 = this;
return (new cljs.core.RecordIter((0),G__63254__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
var self__ = this;
var this__16941__auto____$1 = this;
var h__16767__auto__ = self__.__hash;
if(!((h__16767__auto__ == null))){
return h__16767__auto__;
} else {
var h__16767__auto____$1 = cljs.core.hash_imap.call(null,this__16941__auto____$1);
self__.__hash = h__16767__auto____$1;

return h__16767__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
var self__ = this;
var this__16942__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16320__auto__ = other__16943__auto__;
if(cljs.core.truth_(and__16320__auto__)){
var and__16320__auto____$1 = (this__16942__auto____$1.constructor === other__16943__auto__.constructor);
if(and__16320__auto____$1){
return cljs.core.equiv_map.call(null,this__16942__auto____$1,other__16943__auto__);
} else {
return and__16320__auto____$1;
}
} else {
return and__16320__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__63254){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__63273 = cljs.core.keyword_identical_QMARK_;
var expr__63274 = k__16954__auto__;
if(cljs.core.truth_(pred__63273.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__63274))){
return (new om.next.Reconciler(G__63254,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63273.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__63274))){
return (new om.next.Reconciler(self__.config,G__63254,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__63254),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__63254){
var self__ = this;
var this__16945__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__63254,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__63256){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__63256),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__63256),null,cljs.core.dissoc.call(null,G__63256,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__63330,c){
var map__63335 = p__63330;
var map__63335__$1 = ((((!((map__63335 == null)))?((((map__63335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63335):map__63335);
var env = map__63335__$1;
var state = cljs.core.get.call(null,map__63335__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var indexer = cljs.core.get.call(null,map__63335__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var parser = cljs.core.get.call(null,map__63335__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var st = cljs.core.deref.call(null,state);
var fq = om.next.full_query.call(null,c);
var props = cljs.core.get_in.call(null,parser.call(null,env,fq),om.next.state_path_STAR_.call(null,fq,om.next.data_path.call(null,c)));
if(om.next.ref_QMARK_.call(null,props)){
var map__63337 = props;
var map__63337__$1 = ((((!((map__63337 == null)))?((((map__63337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63337):map__63337);
var root = cljs.core.get.call(null,map__63337__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var id = cljs.core.get.call(null,map__63337__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,id], null));
} else {
return props;
}
});
om.next.default_merge_ref = (function om$next$default_merge_ref(p__63339,tree,ref,props){
var map__63342 = p__63339;
var map__63342__$1 = ((((!((map__63342 == null)))?((((map__63342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63342):map__63342);
var config = map__63342__$1;
var indexer = cljs.core.get.call(null,map__63342__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var merge_ref_step = ((function (map__63342,map__63342__$1,config,indexer){
return (function om$next$default_merge_ref_$_merge_ref_step(tree__$1,c){
return cljs.core.update_in.call(null,tree__$1,om.next.state_path.call(null,indexer,c),cljs.core.merge,props);
});})(map__63342,map__63342__$1,config,indexer))
;
return cljs.core.reduce.call(null,merge_ref_step,tree,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Construct a reconciler from a configuration map, the following options
 * are required:
 * 
 * :state  - the application state, must be IAtom.
 * :parser - the parser to be used
 * :send   - required only if the parser will return a non-empty value when
 *           run in remote mode. send is a function of two arguments, the
 *           remote expression and a callback which should be invoked with
 *           the resolved expression.
 */
om.next.reconciler = (function om$next$reconciler(p__63344){
var map__63347 = p__63344;
var map__63347__$1 = ((((!((map__63347 == null)))?((((map__63347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63347):map__63347);
var config = map__63347__$1;
var merge_send = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"merge-send","merge-send",36698142),cljs.core.into);
var history = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var merge_ref = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),om.next.default_merge_ref);
var state = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ui__GT_props = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var send = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),cljs.core.merge);
var shared = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__63347,map__63347__$1,config,merge_send,history,merge_ref,state,ui__GT_props,parser,indexer,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__63347,map__63347__$1,config,merge_send,history,merge_ref,state,ui__GT_props,parser,indexer,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"config","config",-1659574354,null))))].join('')));
}

var idxr = indexer.call(null);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"merge-send","merge-send",36698142)],[om.next.cache.cache.call(null,history),merge_ref,state,parser,ui__GT_props,idxr,send,shared,merge_tree,optimize,merge_send]),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"queued","queued",1701634607),false,new cljs.core.Keyword(null,"queued-send","queued-send",-418418089),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"send-queued","send-queued",878884618),false,new cljs.core.Keyword(null,"roots","roots",-1088919250),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"t","t",-1397832519),(0)], null)),null,null,null));
if(cljs.core.truth_(state)){
cljs.core.add_watch.call(null,state,new cljs.core.Keyword("om","reconciler","om/reconciler",-1832825524),((function (idxr,ret,map__63347,map__63347__$1,config,merge_send,history,merge_ref,state,ui__GT_props,parser,indexer,send,merge_tree,shared,optimize){
return (function (_,___$1,___$2,___$3){
return om.next.schedule_render_BANG_.call(null,ret);
});})(idxr,ret,map__63347,map__63347__$1,config,merge_send,history,merge_ref,state,ui__GT_props,parser,indexer,send,merge_tree,shared,optimize))
);
} else {
}

return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
om.next.from_history = (function om$next$from_history(reconciler,uuid){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});

//# sourceMappingURL=next.js.map