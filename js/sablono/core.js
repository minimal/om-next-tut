// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__44588__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__44587 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__44587,(0),null);
var body = cljs.core.nthnext.call(null,vec__44587,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__44588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44589__i = 0, G__44589__a = new Array(arguments.length -  0);
while (G__44589__i < G__44589__a.length) {G__44589__a[G__44589__i] = arguments[G__44589__i + 0]; ++G__44589__i;}
  args = new cljs.core.IndexedSeq(G__44589__a,0);
} 
return G__44588__delegate.call(this,args);};
G__44588.cljs$lang$maxFixedArity = 0;
G__44588.cljs$lang$applyTo = (function (arglist__44590){
var args = cljs.core.seq(arglist__44590);
return G__44588__delegate(args);
});
G__44588.cljs$core$IFn$_invoke$arity$variadic = G__44588__delegate;
return G__44588;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17104__auto__ = (function sablono$core$update_arglists_$_iter__44595(s__44596){
return (new cljs.core.LazySeq(null,(function (){
var s__44596__$1 = s__44596;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44596__$1);
if(temp__4425__auto__){
var s__44596__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44596__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__44596__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__44598 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__44597 = (0);
while(true){
if((i__44597 < size__17103__auto__)){
var args = cljs.core._nth.call(null,c__17102__auto__,i__44597);
cljs.core.chunk_append.call(null,b__44598,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__44599 = (i__44597 + (1));
i__44597 = G__44599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44598),sablono$core$update_arglists_$_iter__44595.call(null,cljs.core.chunk_rest.call(null,s__44596__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44598),null);
}
} else {
var args = cljs.core.first.call(null,s__44596__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__44595.call(null,cljs.core.rest.call(null,s__44596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17104__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17397__auto__ = [];
var len__17390__auto___44605 = arguments.length;
var i__17391__auto___44606 = (0);
while(true){
if((i__17391__auto___44606 < len__17390__auto___44605)){
args__17397__auto__.push((arguments[i__17391__auto___44606]));

var G__44607 = (i__17391__auto___44606 + (1));
i__17391__auto___44606 = G__44607;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((0) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17398__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17104__auto__ = (function sablono$core$iter__44601(s__44602){
return (new cljs.core.LazySeq(null,(function (){
var s__44602__$1 = s__44602;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44602__$1);
if(temp__4425__auto__){
var s__44602__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44602__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__44602__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__44604 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__44603 = (0);
while(true){
if((i__44603 < size__17103__auto__)){
var style = cljs.core._nth.call(null,c__17102__auto__,i__44603);
cljs.core.chunk_append.call(null,b__44604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__44608 = (i__44603 + (1));
i__44603 = G__44608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44604),sablono$core$iter__44601.call(null,cljs.core.chunk_rest.call(null,s__44602__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44604),null);
}
} else {
var style = cljs.core.first.call(null,s__44602__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__44601.call(null,cljs.core.rest.call(null,s__44602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17104__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq44600){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44600));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to44609 = (function sablono$core$link_to44609(var_args){
var args__17397__auto__ = [];
var len__17390__auto___44612 = arguments.length;
var i__17391__auto___44613 = (0);
while(true){
if((i__17391__auto___44613 < len__17390__auto___44612)){
args__17397__auto__.push((arguments[i__17391__auto___44613]));

var G__44614 = (i__17391__auto___44613 + (1));
i__17391__auto___44613 = G__44614;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return sablono.core.link_to44609.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

sablono.core.link_to44609.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to44609.cljs$lang$maxFixedArity = (1);

sablono.core.link_to44609.cljs$lang$applyTo = (function (seq44610){
var G__44611 = cljs.core.first.call(null,seq44610);
var seq44610__$1 = cljs.core.next.call(null,seq44610);
return sablono.core.link_to44609.cljs$core$IFn$_invoke$arity$variadic(G__44611,seq44610__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to44609);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to44615 = (function sablono$core$mail_to44615(var_args){
var args__17397__auto__ = [];
var len__17390__auto___44620 = arguments.length;
var i__17391__auto___44621 = (0);
while(true){
if((i__17391__auto___44621 < len__17390__auto___44620)){
args__17397__auto__.push((arguments[i__17391__auto___44621]));

var G__44622 = (i__17391__auto___44621 + (1));
i__17391__auto___44621 = G__44622;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return sablono.core.mail_to44615.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

sablono.core.mail_to44615.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__44618){
var vec__44619 = p__44618;
var content = cljs.core.nth.call(null,vec__44619,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16332__auto__ = content;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to44615.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to44615.cljs$lang$applyTo = (function (seq44616){
var G__44617 = cljs.core.first.call(null,seq44616);
var seq44616__$1 = cljs.core.next.call(null,seq44616);
return sablono.core.mail_to44615.cljs$core$IFn$_invoke$arity$variadic(G__44617,seq44616__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to44615);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list44623 = (function sablono$core$unordered_list44623(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17104__auto__ = (function sablono$core$unordered_list44623_$_iter__44628(s__44629){
return (new cljs.core.LazySeq(null,(function (){
var s__44629__$1 = s__44629;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44629__$1);
if(temp__4425__auto__){
var s__44629__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44629__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__44629__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__44631 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__44630 = (0);
while(true){
if((i__44630 < size__17103__auto__)){
var x = cljs.core._nth.call(null,c__17102__auto__,i__44630);
cljs.core.chunk_append.call(null,b__44631,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__44632 = (i__44630 + (1));
i__44630 = G__44632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44631),sablono$core$unordered_list44623_$_iter__44628.call(null,cljs.core.chunk_rest.call(null,s__44629__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44631),null);
}
} else {
var x = cljs.core.first.call(null,s__44629__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list44623_$_iter__44628.call(null,cljs.core.rest.call(null,s__44629__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17104__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list44623);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list44633 = (function sablono$core$ordered_list44633(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17104__auto__ = (function sablono$core$ordered_list44633_$_iter__44638(s__44639){
return (new cljs.core.LazySeq(null,(function (){
var s__44639__$1 = s__44639;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44639__$1);
if(temp__4425__auto__){
var s__44639__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44639__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__44639__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__44641 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__44640 = (0);
while(true){
if((i__44640 < size__17103__auto__)){
var x = cljs.core._nth.call(null,c__17102__auto__,i__44640);
cljs.core.chunk_append.call(null,b__44641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__44642 = (i__44640 + (1));
i__44640 = G__44642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44641),sablono$core$ordered_list44633_$_iter__44638.call(null,cljs.core.chunk_rest.call(null,s__44639__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44641),null);
}
} else {
var x = cljs.core.first.call(null,s__44639__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list44633_$_iter__44638.call(null,cljs.core.rest.call(null,s__44639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17104__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list44633);
/**
 * Create an image element.
 */
sablono.core.image44643 = (function sablono$core$image44643(var_args){
var args44644 = [];
var len__17390__auto___44647 = arguments.length;
var i__17391__auto___44648 = (0);
while(true){
if((i__17391__auto___44648 < len__17390__auto___44647)){
args44644.push((arguments[i__17391__auto___44648]));

var G__44649 = (i__17391__auto___44648 + (1));
i__17391__auto___44648 = G__44649;
continue;
} else {
}
break;
}

var G__44646 = args44644.length;
switch (G__44646) {
case 1:
return sablono.core.image44643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image44643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44644.length)].join('')));

}
});

sablono.core.image44643.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image44643.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image44643.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image44643);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__44651_SHARP_,p2__44652_SHARP_){
return [cljs.core.str(p1__44651_SHARP_),cljs.core.str("["),cljs.core.str(p2__44652_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__44653_SHARP_,p2__44654_SHARP_){
return [cljs.core.str(p1__44653_SHARP_),cljs.core.str("-"),cljs.core.str(p2__44654_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field44655 = (function sablono$core$color_field44655(var_args){
var args44656 = [];
var len__17390__auto___44723 = arguments.length;
var i__17391__auto___44724 = (0);
while(true){
if((i__17391__auto___44724 < len__17390__auto___44723)){
args44656.push((arguments[i__17391__auto___44724]));

var G__44725 = (i__17391__auto___44724 + (1));
i__17391__auto___44724 = G__44725;
continue;
} else {
}
break;
}

var G__44658 = args44656.length;
switch (G__44658) {
case 1:
return sablono.core.color_field44655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field44655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44656.length)].join('')));

}
});

sablono.core.color_field44655.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.color_field44655.call(null,name__22893__auto__,null);
});

sablono.core.color_field44655.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.color_field44655.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field44655);

/**
 * Creates a date input field.
 */
sablono.core.date_field44659 = (function sablono$core$date_field44659(var_args){
var args44660 = [];
var len__17390__auto___44727 = arguments.length;
var i__17391__auto___44728 = (0);
while(true){
if((i__17391__auto___44728 < len__17390__auto___44727)){
args44660.push((arguments[i__17391__auto___44728]));

var G__44729 = (i__17391__auto___44728 + (1));
i__17391__auto___44728 = G__44729;
continue;
} else {
}
break;
}

var G__44662 = args44660.length;
switch (G__44662) {
case 1:
return sablono.core.date_field44659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field44659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44660.length)].join('')));

}
});

sablono.core.date_field44659.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.date_field44659.call(null,name__22893__auto__,null);
});

sablono.core.date_field44659.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.date_field44659.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field44659);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field44663 = (function sablono$core$datetime_field44663(var_args){
var args44664 = [];
var len__17390__auto___44731 = arguments.length;
var i__17391__auto___44732 = (0);
while(true){
if((i__17391__auto___44732 < len__17390__auto___44731)){
args44664.push((arguments[i__17391__auto___44732]));

var G__44733 = (i__17391__auto___44732 + (1));
i__17391__auto___44732 = G__44733;
continue;
} else {
}
break;
}

var G__44666 = args44664.length;
switch (G__44666) {
case 1:
return sablono.core.datetime_field44663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field44663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44664.length)].join('')));

}
});

sablono.core.datetime_field44663.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.datetime_field44663.call(null,name__22893__auto__,null);
});

sablono.core.datetime_field44663.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.datetime_field44663.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field44663);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field44667 = (function sablono$core$datetime_local_field44667(var_args){
var args44668 = [];
var len__17390__auto___44735 = arguments.length;
var i__17391__auto___44736 = (0);
while(true){
if((i__17391__auto___44736 < len__17390__auto___44735)){
args44668.push((arguments[i__17391__auto___44736]));

var G__44737 = (i__17391__auto___44736 + (1));
i__17391__auto___44736 = G__44737;
continue;
} else {
}
break;
}

var G__44670 = args44668.length;
switch (G__44670) {
case 1:
return sablono.core.datetime_local_field44667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field44667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44668.length)].join('')));

}
});

sablono.core.datetime_local_field44667.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.datetime_local_field44667.call(null,name__22893__auto__,null);
});

sablono.core.datetime_local_field44667.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.datetime_local_field44667.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field44667);

/**
 * Creates a email input field.
 */
sablono.core.email_field44671 = (function sablono$core$email_field44671(var_args){
var args44672 = [];
var len__17390__auto___44739 = arguments.length;
var i__17391__auto___44740 = (0);
while(true){
if((i__17391__auto___44740 < len__17390__auto___44739)){
args44672.push((arguments[i__17391__auto___44740]));

var G__44741 = (i__17391__auto___44740 + (1));
i__17391__auto___44740 = G__44741;
continue;
} else {
}
break;
}

var G__44674 = args44672.length;
switch (G__44674) {
case 1:
return sablono.core.email_field44671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field44671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44672.length)].join('')));

}
});

sablono.core.email_field44671.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.email_field44671.call(null,name__22893__auto__,null);
});

sablono.core.email_field44671.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.email_field44671.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field44671);

/**
 * Creates a file input field.
 */
sablono.core.file_field44675 = (function sablono$core$file_field44675(var_args){
var args44676 = [];
var len__17390__auto___44743 = arguments.length;
var i__17391__auto___44744 = (0);
while(true){
if((i__17391__auto___44744 < len__17390__auto___44743)){
args44676.push((arguments[i__17391__auto___44744]));

var G__44745 = (i__17391__auto___44744 + (1));
i__17391__auto___44744 = G__44745;
continue;
} else {
}
break;
}

var G__44678 = args44676.length;
switch (G__44678) {
case 1:
return sablono.core.file_field44675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field44675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44676.length)].join('')));

}
});

sablono.core.file_field44675.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.file_field44675.call(null,name__22893__auto__,null);
});

sablono.core.file_field44675.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.file_field44675.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field44675);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field44679 = (function sablono$core$hidden_field44679(var_args){
var args44680 = [];
var len__17390__auto___44747 = arguments.length;
var i__17391__auto___44748 = (0);
while(true){
if((i__17391__auto___44748 < len__17390__auto___44747)){
args44680.push((arguments[i__17391__auto___44748]));

var G__44749 = (i__17391__auto___44748 + (1));
i__17391__auto___44748 = G__44749;
continue;
} else {
}
break;
}

var G__44682 = args44680.length;
switch (G__44682) {
case 1:
return sablono.core.hidden_field44679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field44679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44680.length)].join('')));

}
});

sablono.core.hidden_field44679.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.hidden_field44679.call(null,name__22893__auto__,null);
});

sablono.core.hidden_field44679.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.hidden_field44679.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field44679);

/**
 * Creates a month input field.
 */
sablono.core.month_field44683 = (function sablono$core$month_field44683(var_args){
var args44684 = [];
var len__17390__auto___44751 = arguments.length;
var i__17391__auto___44752 = (0);
while(true){
if((i__17391__auto___44752 < len__17390__auto___44751)){
args44684.push((arguments[i__17391__auto___44752]));

var G__44753 = (i__17391__auto___44752 + (1));
i__17391__auto___44752 = G__44753;
continue;
} else {
}
break;
}

var G__44686 = args44684.length;
switch (G__44686) {
case 1:
return sablono.core.month_field44683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field44683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44684.length)].join('')));

}
});

sablono.core.month_field44683.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.month_field44683.call(null,name__22893__auto__,null);
});

sablono.core.month_field44683.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.month_field44683.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field44683);

/**
 * Creates a number input field.
 */
sablono.core.number_field44687 = (function sablono$core$number_field44687(var_args){
var args44688 = [];
var len__17390__auto___44755 = arguments.length;
var i__17391__auto___44756 = (0);
while(true){
if((i__17391__auto___44756 < len__17390__auto___44755)){
args44688.push((arguments[i__17391__auto___44756]));

var G__44757 = (i__17391__auto___44756 + (1));
i__17391__auto___44756 = G__44757;
continue;
} else {
}
break;
}

var G__44690 = args44688.length;
switch (G__44690) {
case 1:
return sablono.core.number_field44687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field44687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44688.length)].join('')));

}
});

sablono.core.number_field44687.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.number_field44687.call(null,name__22893__auto__,null);
});

sablono.core.number_field44687.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.number_field44687.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field44687);

/**
 * Creates a password input field.
 */
sablono.core.password_field44691 = (function sablono$core$password_field44691(var_args){
var args44692 = [];
var len__17390__auto___44759 = arguments.length;
var i__17391__auto___44760 = (0);
while(true){
if((i__17391__auto___44760 < len__17390__auto___44759)){
args44692.push((arguments[i__17391__auto___44760]));

var G__44761 = (i__17391__auto___44760 + (1));
i__17391__auto___44760 = G__44761;
continue;
} else {
}
break;
}

var G__44694 = args44692.length;
switch (G__44694) {
case 1:
return sablono.core.password_field44691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field44691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44692.length)].join('')));

}
});

sablono.core.password_field44691.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.password_field44691.call(null,name__22893__auto__,null);
});

sablono.core.password_field44691.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.password_field44691.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field44691);

/**
 * Creates a range input field.
 */
sablono.core.range_field44695 = (function sablono$core$range_field44695(var_args){
var args44696 = [];
var len__17390__auto___44763 = arguments.length;
var i__17391__auto___44764 = (0);
while(true){
if((i__17391__auto___44764 < len__17390__auto___44763)){
args44696.push((arguments[i__17391__auto___44764]));

var G__44765 = (i__17391__auto___44764 + (1));
i__17391__auto___44764 = G__44765;
continue;
} else {
}
break;
}

var G__44698 = args44696.length;
switch (G__44698) {
case 1:
return sablono.core.range_field44695.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field44695.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44696.length)].join('')));

}
});

sablono.core.range_field44695.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.range_field44695.call(null,name__22893__auto__,null);
});

sablono.core.range_field44695.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.range_field44695.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field44695);

/**
 * Creates a search input field.
 */
sablono.core.search_field44699 = (function sablono$core$search_field44699(var_args){
var args44700 = [];
var len__17390__auto___44767 = arguments.length;
var i__17391__auto___44768 = (0);
while(true){
if((i__17391__auto___44768 < len__17390__auto___44767)){
args44700.push((arguments[i__17391__auto___44768]));

var G__44769 = (i__17391__auto___44768 + (1));
i__17391__auto___44768 = G__44769;
continue;
} else {
}
break;
}

var G__44702 = args44700.length;
switch (G__44702) {
case 1:
return sablono.core.search_field44699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field44699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44700.length)].join('')));

}
});

sablono.core.search_field44699.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.search_field44699.call(null,name__22893__auto__,null);
});

sablono.core.search_field44699.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.search_field44699.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field44699);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field44703 = (function sablono$core$tel_field44703(var_args){
var args44704 = [];
var len__17390__auto___44771 = arguments.length;
var i__17391__auto___44772 = (0);
while(true){
if((i__17391__auto___44772 < len__17390__auto___44771)){
args44704.push((arguments[i__17391__auto___44772]));

var G__44773 = (i__17391__auto___44772 + (1));
i__17391__auto___44772 = G__44773;
continue;
} else {
}
break;
}

var G__44706 = args44704.length;
switch (G__44706) {
case 1:
return sablono.core.tel_field44703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field44703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44704.length)].join('')));

}
});

sablono.core.tel_field44703.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.tel_field44703.call(null,name__22893__auto__,null);
});

sablono.core.tel_field44703.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.tel_field44703.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field44703);

/**
 * Creates a text input field.
 */
sablono.core.text_field44707 = (function sablono$core$text_field44707(var_args){
var args44708 = [];
var len__17390__auto___44775 = arguments.length;
var i__17391__auto___44776 = (0);
while(true){
if((i__17391__auto___44776 < len__17390__auto___44775)){
args44708.push((arguments[i__17391__auto___44776]));

var G__44777 = (i__17391__auto___44776 + (1));
i__17391__auto___44776 = G__44777;
continue;
} else {
}
break;
}

var G__44710 = args44708.length;
switch (G__44710) {
case 1:
return sablono.core.text_field44707.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field44707.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44708.length)].join('')));

}
});

sablono.core.text_field44707.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.text_field44707.call(null,name__22893__auto__,null);
});

sablono.core.text_field44707.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.text_field44707.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field44707);

/**
 * Creates a time input field.
 */
sablono.core.time_field44711 = (function sablono$core$time_field44711(var_args){
var args44712 = [];
var len__17390__auto___44779 = arguments.length;
var i__17391__auto___44780 = (0);
while(true){
if((i__17391__auto___44780 < len__17390__auto___44779)){
args44712.push((arguments[i__17391__auto___44780]));

var G__44781 = (i__17391__auto___44780 + (1));
i__17391__auto___44780 = G__44781;
continue;
} else {
}
break;
}

var G__44714 = args44712.length;
switch (G__44714) {
case 1:
return sablono.core.time_field44711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field44711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44712.length)].join('')));

}
});

sablono.core.time_field44711.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.time_field44711.call(null,name__22893__auto__,null);
});

sablono.core.time_field44711.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.time_field44711.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field44711);

/**
 * Creates a url input field.
 */
sablono.core.url_field44715 = (function sablono$core$url_field44715(var_args){
var args44716 = [];
var len__17390__auto___44783 = arguments.length;
var i__17391__auto___44784 = (0);
while(true){
if((i__17391__auto___44784 < len__17390__auto___44783)){
args44716.push((arguments[i__17391__auto___44784]));

var G__44785 = (i__17391__auto___44784 + (1));
i__17391__auto___44784 = G__44785;
continue;
} else {
}
break;
}

var G__44718 = args44716.length;
switch (G__44718) {
case 1:
return sablono.core.url_field44715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field44715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44716.length)].join('')));

}
});

sablono.core.url_field44715.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.url_field44715.call(null,name__22893__auto__,null);
});

sablono.core.url_field44715.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.url_field44715.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field44715);

/**
 * Creates a week input field.
 */
sablono.core.week_field44719 = (function sablono$core$week_field44719(var_args){
var args44720 = [];
var len__17390__auto___44787 = arguments.length;
var i__17391__auto___44788 = (0);
while(true){
if((i__17391__auto___44788 < len__17390__auto___44787)){
args44720.push((arguments[i__17391__auto___44788]));

var G__44789 = (i__17391__auto___44788 + (1));
i__17391__auto___44788 = G__44789;
continue;
} else {
}
break;
}

var G__44722 = args44720.length;
switch (G__44722) {
case 1:
return sablono.core.week_field44719.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field44719.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44720.length)].join('')));

}
});

sablono.core.week_field44719.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.week_field44719.call(null,name__22893__auto__,null);
});

sablono.core.week_field44719.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.week_field44719.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field44719);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box44791 = (function sablono$core$check_box44791(var_args){
var args44792 = [];
var len__17390__auto___44795 = arguments.length;
var i__17391__auto___44796 = (0);
while(true){
if((i__17391__auto___44796 < len__17390__auto___44795)){
args44792.push((arguments[i__17391__auto___44796]));

var G__44797 = (i__17391__auto___44796 + (1));
i__17391__auto___44796 = G__44797;
continue;
} else {
}
break;
}

var G__44794 = args44792.length;
switch (G__44794) {
case 1:
return sablono.core.check_box44791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box44791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box44791.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44792.length)].join('')));

}
});

sablono.core.check_box44791.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box44791.call(null,name,null);
});

sablono.core.check_box44791.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box44791.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box44791.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box44791.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box44791);
/**
 * Creates a radio button.
 */
sablono.core.radio_button44799 = (function sablono$core$radio_button44799(var_args){
var args44800 = [];
var len__17390__auto___44803 = arguments.length;
var i__17391__auto___44804 = (0);
while(true){
if((i__17391__auto___44804 < len__17390__auto___44803)){
args44800.push((arguments[i__17391__auto___44804]));

var G__44805 = (i__17391__auto___44804 + (1));
i__17391__auto___44804 = G__44805;
continue;
} else {
}
break;
}

var G__44802 = args44800.length;
switch (G__44802) {
case 1:
return sablono.core.radio_button44799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button44799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button44799.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44800.length)].join('')));

}
});

sablono.core.radio_button44799.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button44799.call(null,group,null);
});

sablono.core.radio_button44799.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button44799.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button44799.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button44799.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button44799);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options44807 = (function sablono$core$select_options44807(coll){
var iter__17104__auto__ = (function sablono$core$select_options44807_$_iter__44816(s__44817){
return (new cljs.core.LazySeq(null,(function (){
var s__44817__$1 = s__44817;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44817__$1);
if(temp__4425__auto__){
var s__44817__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44817__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__44817__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__44819 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__44818 = (0);
while(true){
if((i__44818 < size__17103__auto__)){
var x = cljs.core._nth.call(null,c__17102__auto__,i__44818);
cljs.core.chunk_append.call(null,b__44819,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__44822 = x;
var text = cljs.core.nth.call(null,vec__44822,(0),null);
var val = cljs.core.nth.call(null,vec__44822,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__44822,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options44807.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__44824 = (i__44818 + (1));
i__44818 = G__44824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44819),sablono$core$select_options44807_$_iter__44816.call(null,cljs.core.chunk_rest.call(null,s__44817__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44819),null);
}
} else {
var x = cljs.core.first.call(null,s__44817__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__44823 = x;
var text = cljs.core.nth.call(null,vec__44823,(0),null);
var val = cljs.core.nth.call(null,vec__44823,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__44823,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options44807.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options44807_$_iter__44816.call(null,cljs.core.rest.call(null,s__44817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17104__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options44807);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down44825 = (function sablono$core$drop_down44825(var_args){
var args44826 = [];
var len__17390__auto___44829 = arguments.length;
var i__17391__auto___44830 = (0);
while(true){
if((i__17391__auto___44830 < len__17390__auto___44829)){
args44826.push((arguments[i__17391__auto___44830]));

var G__44831 = (i__17391__auto___44830 + (1));
i__17391__auto___44830 = G__44831;
continue;
} else {
}
break;
}

var G__44828 = args44826.length;
switch (G__44828) {
case 2:
return sablono.core.drop_down44825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down44825.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44826.length)].join('')));

}
});

sablono.core.drop_down44825.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down44825.call(null,name,options,null);
});

sablono.core.drop_down44825.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down44825.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down44825);
/**
 * Creates a text area element.
 */
sablono.core.text_area44833 = (function sablono$core$text_area44833(var_args){
var args44834 = [];
var len__17390__auto___44837 = arguments.length;
var i__17391__auto___44838 = (0);
while(true){
if((i__17391__auto___44838 < len__17390__auto___44837)){
args44834.push((arguments[i__17391__auto___44838]));

var G__44839 = (i__17391__auto___44838 + (1));
i__17391__auto___44838 = G__44839;
continue;
} else {
}
break;
}

var G__44836 = args44834.length;
switch (G__44836) {
case 1:
return sablono.core.text_area44833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area44833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44834.length)].join('')));

}
});

sablono.core.text_area44833.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area44833.call(null,name,null);
});

sablono.core.text_area44833.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area44833.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area44833);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label44841 = (function sablono$core$label44841(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label44841);
/**
 * Creates a submit button.
 */
sablono.core.submit_button44842 = (function sablono$core$submit_button44842(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button44842);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button44843 = (function sablono$core$reset_button44843(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button44843);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to44844 = (function sablono$core$form_to44844(var_args){
var args__17397__auto__ = [];
var len__17390__auto___44849 = arguments.length;
var i__17391__auto___44850 = (0);
while(true){
if((i__17391__auto___44850 < len__17390__auto___44849)){
args__17397__auto__.push((arguments[i__17391__auto___44850]));

var G__44851 = (i__17391__auto___44850 + (1));
i__17391__auto___44850 = G__44851;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return sablono.core.form_to44844.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

sablono.core.form_to44844.cljs$core$IFn$_invoke$arity$variadic = (function (p__44847,body){
var vec__44848 = p__44847;
var method = cljs.core.nth.call(null,vec__44848,(0),null);
var action = cljs.core.nth.call(null,vec__44848,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to44844.cljs$lang$maxFixedArity = (1);

sablono.core.form_to44844.cljs$lang$applyTo = (function (seq44845){
var G__44846 = cljs.core.first.call(null,seq44845);
var seq44845__$1 = cljs.core.next.call(null,seq44845);
return sablono.core.form_to44844.cljs$core$IFn$_invoke$arity$variadic(G__44846,seq44845__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to44844);

//# sourceMappingURL=core.js.map