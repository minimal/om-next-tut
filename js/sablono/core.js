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
var G__63609__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__63608 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__63608,(0),null);
var body = cljs.core.nthnext.call(null,vec__63608,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__63609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63610__i = 0, G__63610__a = new Array(arguments.length -  0);
while (G__63610__i < G__63610__a.length) {G__63610__a[G__63610__i] = arguments[G__63610__i + 0]; ++G__63610__i;}
  args = new cljs.core.IndexedSeq(G__63610__a,0);
} 
return G__63609__delegate.call(this,args);};
G__63609.cljs$lang$maxFixedArity = 0;
G__63609.cljs$lang$applyTo = (function (arglist__63611){
var args = cljs.core.seq(arglist__63611);
return G__63609__delegate(args);
});
G__63609.cljs$core$IFn$_invoke$arity$variadic = G__63609__delegate;
return G__63609;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17104__auto__ = (function sablono$core$update_arglists_$_iter__63616(s__63617){
return (new cljs.core.LazySeq(null,(function (){
var s__63617__$1 = s__63617;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__63617__$1);
if(temp__4425__auto__){
var s__63617__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__63617__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__63617__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__63619 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__63618 = (0);
while(true){
if((i__63618 < size__17103__auto__)){
var args = cljs.core._nth.call(null,c__17102__auto__,i__63618);
cljs.core.chunk_append.call(null,b__63619,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__63620 = (i__63618 + (1));
i__63618 = G__63620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63619),sablono$core$update_arglists_$_iter__63616.call(null,cljs.core.chunk_rest.call(null,s__63617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63619),null);
}
} else {
var args = cljs.core.first.call(null,s__63617__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__63616.call(null,cljs.core.rest.call(null,s__63617__$2)));
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
var len__17390__auto___63626 = arguments.length;
var i__17391__auto___63627 = (0);
while(true){
if((i__17391__auto___63627 < len__17390__auto___63626)){
args__17397__auto__.push((arguments[i__17391__auto___63627]));

var G__63628 = (i__17391__auto___63627 + (1));
i__17391__auto___63627 = G__63628;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((0) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17398__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17104__auto__ = (function sablono$core$iter__63622(s__63623){
return (new cljs.core.LazySeq(null,(function (){
var s__63623__$1 = s__63623;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__63623__$1);
if(temp__4425__auto__){
var s__63623__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__63623__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__63623__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__63625 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__63624 = (0);
while(true){
if((i__63624 < size__17103__auto__)){
var style = cljs.core._nth.call(null,c__17102__auto__,i__63624);
cljs.core.chunk_append.call(null,b__63625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__63629 = (i__63624 + (1));
i__63624 = G__63629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63625),sablono$core$iter__63622.call(null,cljs.core.chunk_rest.call(null,s__63623__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63625),null);
}
} else {
var style = cljs.core.first.call(null,s__63623__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__63622.call(null,cljs.core.rest.call(null,s__63623__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq63621){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63621));
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
sablono.core.link_to63630 = (function sablono$core$link_to63630(var_args){
var args__17397__auto__ = [];
var len__17390__auto___63633 = arguments.length;
var i__17391__auto___63634 = (0);
while(true){
if((i__17391__auto___63634 < len__17390__auto___63633)){
args__17397__auto__.push((arguments[i__17391__auto___63634]));

var G__63635 = (i__17391__auto___63634 + (1));
i__17391__auto___63634 = G__63635;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return sablono.core.link_to63630.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

sablono.core.link_to63630.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to63630.cljs$lang$maxFixedArity = (1);

sablono.core.link_to63630.cljs$lang$applyTo = (function (seq63631){
var G__63632 = cljs.core.first.call(null,seq63631);
var seq63631__$1 = cljs.core.next.call(null,seq63631);
return sablono.core.link_to63630.cljs$core$IFn$_invoke$arity$variadic(G__63632,seq63631__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to63630);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to63636 = (function sablono$core$mail_to63636(var_args){
var args__17397__auto__ = [];
var len__17390__auto___63641 = arguments.length;
var i__17391__auto___63642 = (0);
while(true){
if((i__17391__auto___63642 < len__17390__auto___63641)){
args__17397__auto__.push((arguments[i__17391__auto___63642]));

var G__63643 = (i__17391__auto___63642 + (1));
i__17391__auto___63642 = G__63643;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return sablono.core.mail_to63636.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

sablono.core.mail_to63636.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__63639){
var vec__63640 = p__63639;
var content = cljs.core.nth.call(null,vec__63640,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16332__auto__ = content;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to63636.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to63636.cljs$lang$applyTo = (function (seq63637){
var G__63638 = cljs.core.first.call(null,seq63637);
var seq63637__$1 = cljs.core.next.call(null,seq63637);
return sablono.core.mail_to63636.cljs$core$IFn$_invoke$arity$variadic(G__63638,seq63637__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to63636);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list63644 = (function sablono$core$unordered_list63644(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17104__auto__ = (function sablono$core$unordered_list63644_$_iter__63649(s__63650){
return (new cljs.core.LazySeq(null,(function (){
var s__63650__$1 = s__63650;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__63650__$1);
if(temp__4425__auto__){
var s__63650__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__63650__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__63650__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__63652 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__63651 = (0);
while(true){
if((i__63651 < size__17103__auto__)){
var x = cljs.core._nth.call(null,c__17102__auto__,i__63651);
cljs.core.chunk_append.call(null,b__63652,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__63653 = (i__63651 + (1));
i__63651 = G__63653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63652),sablono$core$unordered_list63644_$_iter__63649.call(null,cljs.core.chunk_rest.call(null,s__63650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63652),null);
}
} else {
var x = cljs.core.first.call(null,s__63650__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list63644_$_iter__63649.call(null,cljs.core.rest.call(null,s__63650__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list63644);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list63654 = (function sablono$core$ordered_list63654(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17104__auto__ = (function sablono$core$ordered_list63654_$_iter__63659(s__63660){
return (new cljs.core.LazySeq(null,(function (){
var s__63660__$1 = s__63660;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__63660__$1);
if(temp__4425__auto__){
var s__63660__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__63660__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__63660__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__63662 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__63661 = (0);
while(true){
if((i__63661 < size__17103__auto__)){
var x = cljs.core._nth.call(null,c__17102__auto__,i__63661);
cljs.core.chunk_append.call(null,b__63662,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__63663 = (i__63661 + (1));
i__63661 = G__63663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63662),sablono$core$ordered_list63654_$_iter__63659.call(null,cljs.core.chunk_rest.call(null,s__63660__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63662),null);
}
} else {
var x = cljs.core.first.call(null,s__63660__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list63654_$_iter__63659.call(null,cljs.core.rest.call(null,s__63660__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list63654);
/**
 * Create an image element.
 */
sablono.core.image63664 = (function sablono$core$image63664(var_args){
var args63665 = [];
var len__17390__auto___63668 = arguments.length;
var i__17391__auto___63669 = (0);
while(true){
if((i__17391__auto___63669 < len__17390__auto___63668)){
args63665.push((arguments[i__17391__auto___63669]));

var G__63670 = (i__17391__auto___63669 + (1));
i__17391__auto___63669 = G__63670;
continue;
} else {
}
break;
}

var G__63667 = args63665.length;
switch (G__63667) {
case 1:
return sablono.core.image63664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image63664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63665.length)].join('')));

}
});

sablono.core.image63664.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image63664.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image63664.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image63664);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__63672_SHARP_,p2__63673_SHARP_){
return [cljs.core.str(p1__63672_SHARP_),cljs.core.str("["),cljs.core.str(p2__63673_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__63674_SHARP_,p2__63675_SHARP_){
return [cljs.core.str(p1__63674_SHARP_),cljs.core.str("-"),cljs.core.str(p2__63675_SHARP_)].join('');
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
sablono.core.color_field63676 = (function sablono$core$color_field63676(var_args){
var args63677 = [];
var len__17390__auto___63744 = arguments.length;
var i__17391__auto___63745 = (0);
while(true){
if((i__17391__auto___63745 < len__17390__auto___63744)){
args63677.push((arguments[i__17391__auto___63745]));

var G__63746 = (i__17391__auto___63745 + (1));
i__17391__auto___63745 = G__63746;
continue;
} else {
}
break;
}

var G__63679 = args63677.length;
switch (G__63679) {
case 1:
return sablono.core.color_field63676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field63676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63677.length)].join('')));

}
});

sablono.core.color_field63676.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.color_field63676.call(null,name__22893__auto__,null);
});

sablono.core.color_field63676.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.color_field63676.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field63676);

/**
 * Creates a date input field.
 */
sablono.core.date_field63680 = (function sablono$core$date_field63680(var_args){
var args63681 = [];
var len__17390__auto___63748 = arguments.length;
var i__17391__auto___63749 = (0);
while(true){
if((i__17391__auto___63749 < len__17390__auto___63748)){
args63681.push((arguments[i__17391__auto___63749]));

var G__63750 = (i__17391__auto___63749 + (1));
i__17391__auto___63749 = G__63750;
continue;
} else {
}
break;
}

var G__63683 = args63681.length;
switch (G__63683) {
case 1:
return sablono.core.date_field63680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field63680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63681.length)].join('')));

}
});

sablono.core.date_field63680.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.date_field63680.call(null,name__22893__auto__,null);
});

sablono.core.date_field63680.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.date_field63680.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field63680);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field63684 = (function sablono$core$datetime_field63684(var_args){
var args63685 = [];
var len__17390__auto___63752 = arguments.length;
var i__17391__auto___63753 = (0);
while(true){
if((i__17391__auto___63753 < len__17390__auto___63752)){
args63685.push((arguments[i__17391__auto___63753]));

var G__63754 = (i__17391__auto___63753 + (1));
i__17391__auto___63753 = G__63754;
continue;
} else {
}
break;
}

var G__63687 = args63685.length;
switch (G__63687) {
case 1:
return sablono.core.datetime_field63684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field63684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63685.length)].join('')));

}
});

sablono.core.datetime_field63684.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.datetime_field63684.call(null,name__22893__auto__,null);
});

sablono.core.datetime_field63684.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.datetime_field63684.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field63684);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field63688 = (function sablono$core$datetime_local_field63688(var_args){
var args63689 = [];
var len__17390__auto___63756 = arguments.length;
var i__17391__auto___63757 = (0);
while(true){
if((i__17391__auto___63757 < len__17390__auto___63756)){
args63689.push((arguments[i__17391__auto___63757]));

var G__63758 = (i__17391__auto___63757 + (1));
i__17391__auto___63757 = G__63758;
continue;
} else {
}
break;
}

var G__63691 = args63689.length;
switch (G__63691) {
case 1:
return sablono.core.datetime_local_field63688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field63688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63689.length)].join('')));

}
});

sablono.core.datetime_local_field63688.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.datetime_local_field63688.call(null,name__22893__auto__,null);
});

sablono.core.datetime_local_field63688.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.datetime_local_field63688.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field63688);

/**
 * Creates a email input field.
 */
sablono.core.email_field63692 = (function sablono$core$email_field63692(var_args){
var args63693 = [];
var len__17390__auto___63760 = arguments.length;
var i__17391__auto___63761 = (0);
while(true){
if((i__17391__auto___63761 < len__17390__auto___63760)){
args63693.push((arguments[i__17391__auto___63761]));

var G__63762 = (i__17391__auto___63761 + (1));
i__17391__auto___63761 = G__63762;
continue;
} else {
}
break;
}

var G__63695 = args63693.length;
switch (G__63695) {
case 1:
return sablono.core.email_field63692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field63692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63693.length)].join('')));

}
});

sablono.core.email_field63692.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.email_field63692.call(null,name__22893__auto__,null);
});

sablono.core.email_field63692.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.email_field63692.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field63692);

/**
 * Creates a file input field.
 */
sablono.core.file_field63696 = (function sablono$core$file_field63696(var_args){
var args63697 = [];
var len__17390__auto___63764 = arguments.length;
var i__17391__auto___63765 = (0);
while(true){
if((i__17391__auto___63765 < len__17390__auto___63764)){
args63697.push((arguments[i__17391__auto___63765]));

var G__63766 = (i__17391__auto___63765 + (1));
i__17391__auto___63765 = G__63766;
continue;
} else {
}
break;
}

var G__63699 = args63697.length;
switch (G__63699) {
case 1:
return sablono.core.file_field63696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field63696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63697.length)].join('')));

}
});

sablono.core.file_field63696.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.file_field63696.call(null,name__22893__auto__,null);
});

sablono.core.file_field63696.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.file_field63696.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field63696);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field63700 = (function sablono$core$hidden_field63700(var_args){
var args63701 = [];
var len__17390__auto___63768 = arguments.length;
var i__17391__auto___63769 = (0);
while(true){
if((i__17391__auto___63769 < len__17390__auto___63768)){
args63701.push((arguments[i__17391__auto___63769]));

var G__63770 = (i__17391__auto___63769 + (1));
i__17391__auto___63769 = G__63770;
continue;
} else {
}
break;
}

var G__63703 = args63701.length;
switch (G__63703) {
case 1:
return sablono.core.hidden_field63700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field63700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63701.length)].join('')));

}
});

sablono.core.hidden_field63700.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.hidden_field63700.call(null,name__22893__auto__,null);
});

sablono.core.hidden_field63700.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.hidden_field63700.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field63700);

/**
 * Creates a month input field.
 */
sablono.core.month_field63704 = (function sablono$core$month_field63704(var_args){
var args63705 = [];
var len__17390__auto___63772 = arguments.length;
var i__17391__auto___63773 = (0);
while(true){
if((i__17391__auto___63773 < len__17390__auto___63772)){
args63705.push((arguments[i__17391__auto___63773]));

var G__63774 = (i__17391__auto___63773 + (1));
i__17391__auto___63773 = G__63774;
continue;
} else {
}
break;
}

var G__63707 = args63705.length;
switch (G__63707) {
case 1:
return sablono.core.month_field63704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field63704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63705.length)].join('')));

}
});

sablono.core.month_field63704.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.month_field63704.call(null,name__22893__auto__,null);
});

sablono.core.month_field63704.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.month_field63704.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field63704);

/**
 * Creates a number input field.
 */
sablono.core.number_field63708 = (function sablono$core$number_field63708(var_args){
var args63709 = [];
var len__17390__auto___63776 = arguments.length;
var i__17391__auto___63777 = (0);
while(true){
if((i__17391__auto___63777 < len__17390__auto___63776)){
args63709.push((arguments[i__17391__auto___63777]));

var G__63778 = (i__17391__auto___63777 + (1));
i__17391__auto___63777 = G__63778;
continue;
} else {
}
break;
}

var G__63711 = args63709.length;
switch (G__63711) {
case 1:
return sablono.core.number_field63708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field63708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63709.length)].join('')));

}
});

sablono.core.number_field63708.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.number_field63708.call(null,name__22893__auto__,null);
});

sablono.core.number_field63708.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.number_field63708.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field63708);

/**
 * Creates a password input field.
 */
sablono.core.password_field63712 = (function sablono$core$password_field63712(var_args){
var args63713 = [];
var len__17390__auto___63780 = arguments.length;
var i__17391__auto___63781 = (0);
while(true){
if((i__17391__auto___63781 < len__17390__auto___63780)){
args63713.push((arguments[i__17391__auto___63781]));

var G__63782 = (i__17391__auto___63781 + (1));
i__17391__auto___63781 = G__63782;
continue;
} else {
}
break;
}

var G__63715 = args63713.length;
switch (G__63715) {
case 1:
return sablono.core.password_field63712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field63712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63713.length)].join('')));

}
});

sablono.core.password_field63712.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.password_field63712.call(null,name__22893__auto__,null);
});

sablono.core.password_field63712.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.password_field63712.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field63712);

/**
 * Creates a range input field.
 */
sablono.core.range_field63716 = (function sablono$core$range_field63716(var_args){
var args63717 = [];
var len__17390__auto___63784 = arguments.length;
var i__17391__auto___63785 = (0);
while(true){
if((i__17391__auto___63785 < len__17390__auto___63784)){
args63717.push((arguments[i__17391__auto___63785]));

var G__63786 = (i__17391__auto___63785 + (1));
i__17391__auto___63785 = G__63786;
continue;
} else {
}
break;
}

var G__63719 = args63717.length;
switch (G__63719) {
case 1:
return sablono.core.range_field63716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field63716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63717.length)].join('')));

}
});

sablono.core.range_field63716.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.range_field63716.call(null,name__22893__auto__,null);
});

sablono.core.range_field63716.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.range_field63716.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field63716);

/**
 * Creates a search input field.
 */
sablono.core.search_field63720 = (function sablono$core$search_field63720(var_args){
var args63721 = [];
var len__17390__auto___63788 = arguments.length;
var i__17391__auto___63789 = (0);
while(true){
if((i__17391__auto___63789 < len__17390__auto___63788)){
args63721.push((arguments[i__17391__auto___63789]));

var G__63790 = (i__17391__auto___63789 + (1));
i__17391__auto___63789 = G__63790;
continue;
} else {
}
break;
}

var G__63723 = args63721.length;
switch (G__63723) {
case 1:
return sablono.core.search_field63720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field63720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63721.length)].join('')));

}
});

sablono.core.search_field63720.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.search_field63720.call(null,name__22893__auto__,null);
});

sablono.core.search_field63720.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.search_field63720.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field63720);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field63724 = (function sablono$core$tel_field63724(var_args){
var args63725 = [];
var len__17390__auto___63792 = arguments.length;
var i__17391__auto___63793 = (0);
while(true){
if((i__17391__auto___63793 < len__17390__auto___63792)){
args63725.push((arguments[i__17391__auto___63793]));

var G__63794 = (i__17391__auto___63793 + (1));
i__17391__auto___63793 = G__63794;
continue;
} else {
}
break;
}

var G__63727 = args63725.length;
switch (G__63727) {
case 1:
return sablono.core.tel_field63724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field63724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63725.length)].join('')));

}
});

sablono.core.tel_field63724.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.tel_field63724.call(null,name__22893__auto__,null);
});

sablono.core.tel_field63724.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.tel_field63724.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field63724);

/**
 * Creates a text input field.
 */
sablono.core.text_field63728 = (function sablono$core$text_field63728(var_args){
var args63729 = [];
var len__17390__auto___63796 = arguments.length;
var i__17391__auto___63797 = (0);
while(true){
if((i__17391__auto___63797 < len__17390__auto___63796)){
args63729.push((arguments[i__17391__auto___63797]));

var G__63798 = (i__17391__auto___63797 + (1));
i__17391__auto___63797 = G__63798;
continue;
} else {
}
break;
}

var G__63731 = args63729.length;
switch (G__63731) {
case 1:
return sablono.core.text_field63728.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field63728.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63729.length)].join('')));

}
});

sablono.core.text_field63728.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.text_field63728.call(null,name__22893__auto__,null);
});

sablono.core.text_field63728.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.text_field63728.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field63728);

/**
 * Creates a time input field.
 */
sablono.core.time_field63732 = (function sablono$core$time_field63732(var_args){
var args63733 = [];
var len__17390__auto___63800 = arguments.length;
var i__17391__auto___63801 = (0);
while(true){
if((i__17391__auto___63801 < len__17390__auto___63800)){
args63733.push((arguments[i__17391__auto___63801]));

var G__63802 = (i__17391__auto___63801 + (1));
i__17391__auto___63801 = G__63802;
continue;
} else {
}
break;
}

var G__63735 = args63733.length;
switch (G__63735) {
case 1:
return sablono.core.time_field63732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field63732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63733.length)].join('')));

}
});

sablono.core.time_field63732.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.time_field63732.call(null,name__22893__auto__,null);
});

sablono.core.time_field63732.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.time_field63732.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field63732);

/**
 * Creates a url input field.
 */
sablono.core.url_field63736 = (function sablono$core$url_field63736(var_args){
var args63737 = [];
var len__17390__auto___63804 = arguments.length;
var i__17391__auto___63805 = (0);
while(true){
if((i__17391__auto___63805 < len__17390__auto___63804)){
args63737.push((arguments[i__17391__auto___63805]));

var G__63806 = (i__17391__auto___63805 + (1));
i__17391__auto___63805 = G__63806;
continue;
} else {
}
break;
}

var G__63739 = args63737.length;
switch (G__63739) {
case 1:
return sablono.core.url_field63736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field63736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63737.length)].join('')));

}
});

sablono.core.url_field63736.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.url_field63736.call(null,name__22893__auto__,null);
});

sablono.core.url_field63736.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.url_field63736.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field63736);

/**
 * Creates a week input field.
 */
sablono.core.week_field63740 = (function sablono$core$week_field63740(var_args){
var args63741 = [];
var len__17390__auto___63808 = arguments.length;
var i__17391__auto___63809 = (0);
while(true){
if((i__17391__auto___63809 < len__17390__auto___63808)){
args63741.push((arguments[i__17391__auto___63809]));

var G__63810 = (i__17391__auto___63809 + (1));
i__17391__auto___63809 = G__63810;
continue;
} else {
}
break;
}

var G__63743 = args63741.length;
switch (G__63743) {
case 1:
return sablono.core.week_field63740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field63740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63741.length)].join('')));

}
});

sablono.core.week_field63740.cljs$core$IFn$_invoke$arity$1 = (function (name__22893__auto__){
return sablono.core.week_field63740.call(null,name__22893__auto__,null);
});

sablono.core.week_field63740.cljs$core$IFn$_invoke$arity$2 = (function (name__22893__auto__,value__22894__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22893__auto__,value__22894__auto__);
});

sablono.core.week_field63740.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field63740);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box63812 = (function sablono$core$check_box63812(var_args){
var args63813 = [];
var len__17390__auto___63816 = arguments.length;
var i__17391__auto___63817 = (0);
while(true){
if((i__17391__auto___63817 < len__17390__auto___63816)){
args63813.push((arguments[i__17391__auto___63817]));

var G__63818 = (i__17391__auto___63817 + (1));
i__17391__auto___63817 = G__63818;
continue;
} else {
}
break;
}

var G__63815 = args63813.length;
switch (G__63815) {
case 1:
return sablono.core.check_box63812.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box63812.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box63812.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63813.length)].join('')));

}
});

sablono.core.check_box63812.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box63812.call(null,name,null);
});

sablono.core.check_box63812.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box63812.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box63812.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box63812.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box63812);
/**
 * Creates a radio button.
 */
sablono.core.radio_button63820 = (function sablono$core$radio_button63820(var_args){
var args63821 = [];
var len__17390__auto___63824 = arguments.length;
var i__17391__auto___63825 = (0);
while(true){
if((i__17391__auto___63825 < len__17390__auto___63824)){
args63821.push((arguments[i__17391__auto___63825]));

var G__63826 = (i__17391__auto___63825 + (1));
i__17391__auto___63825 = G__63826;
continue;
} else {
}
break;
}

var G__63823 = args63821.length;
switch (G__63823) {
case 1:
return sablono.core.radio_button63820.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button63820.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button63820.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63821.length)].join('')));

}
});

sablono.core.radio_button63820.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button63820.call(null,group,null);
});

sablono.core.radio_button63820.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button63820.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button63820.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button63820.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button63820);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options63828 = (function sablono$core$select_options63828(coll){
var iter__17104__auto__ = (function sablono$core$select_options63828_$_iter__63837(s__63838){
return (new cljs.core.LazySeq(null,(function (){
var s__63838__$1 = s__63838;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__63838__$1);
if(temp__4425__auto__){
var s__63838__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__63838__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__63838__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__63840 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__63839 = (0);
while(true){
if((i__63839 < size__17103__auto__)){
var x = cljs.core._nth.call(null,c__17102__auto__,i__63839);
cljs.core.chunk_append.call(null,b__63840,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__63843 = x;
var text = cljs.core.nth.call(null,vec__63843,(0),null);
var val = cljs.core.nth.call(null,vec__63843,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__63843,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options63828.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__63845 = (i__63839 + (1));
i__63839 = G__63845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63840),sablono$core$select_options63828_$_iter__63837.call(null,cljs.core.chunk_rest.call(null,s__63838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63840),null);
}
} else {
var x = cljs.core.first.call(null,s__63838__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__63844 = x;
var text = cljs.core.nth.call(null,vec__63844,(0),null);
var val = cljs.core.nth.call(null,vec__63844,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__63844,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options63828.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options63828_$_iter__63837.call(null,cljs.core.rest.call(null,s__63838__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options63828);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down63846 = (function sablono$core$drop_down63846(var_args){
var args63847 = [];
var len__17390__auto___63850 = arguments.length;
var i__17391__auto___63851 = (0);
while(true){
if((i__17391__auto___63851 < len__17390__auto___63850)){
args63847.push((arguments[i__17391__auto___63851]));

var G__63852 = (i__17391__auto___63851 + (1));
i__17391__auto___63851 = G__63852;
continue;
} else {
}
break;
}

var G__63849 = args63847.length;
switch (G__63849) {
case 2:
return sablono.core.drop_down63846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down63846.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63847.length)].join('')));

}
});

sablono.core.drop_down63846.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down63846.call(null,name,options,null);
});

sablono.core.drop_down63846.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down63846.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down63846);
/**
 * Creates a text area element.
 */
sablono.core.text_area63854 = (function sablono$core$text_area63854(var_args){
var args63855 = [];
var len__17390__auto___63858 = arguments.length;
var i__17391__auto___63859 = (0);
while(true){
if((i__17391__auto___63859 < len__17390__auto___63858)){
args63855.push((arguments[i__17391__auto___63859]));

var G__63860 = (i__17391__auto___63859 + (1));
i__17391__auto___63859 = G__63860;
continue;
} else {
}
break;
}

var G__63857 = args63855.length;
switch (G__63857) {
case 1:
return sablono.core.text_area63854.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area63854.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63855.length)].join('')));

}
});

sablono.core.text_area63854.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area63854.call(null,name,null);
});

sablono.core.text_area63854.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area63854.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area63854);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label63862 = (function sablono$core$label63862(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label63862);
/**
 * Creates a submit button.
 */
sablono.core.submit_button63863 = (function sablono$core$submit_button63863(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button63863);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button63864 = (function sablono$core$reset_button63864(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button63864);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to63865 = (function sablono$core$form_to63865(var_args){
var args__17397__auto__ = [];
var len__17390__auto___63870 = arguments.length;
var i__17391__auto___63871 = (0);
while(true){
if((i__17391__auto___63871 < len__17390__auto___63870)){
args__17397__auto__.push((arguments[i__17391__auto___63871]));

var G__63872 = (i__17391__auto___63871 + (1));
i__17391__auto___63871 = G__63872;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return sablono.core.form_to63865.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

sablono.core.form_to63865.cljs$core$IFn$_invoke$arity$variadic = (function (p__63868,body){
var vec__63869 = p__63868;
var method = cljs.core.nth.call(null,vec__63869,(0),null);
var action = cljs.core.nth.call(null,vec__63869,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to63865.cljs$lang$maxFixedArity = (1);

sablono.core.form_to63865.cljs$lang$applyTo = (function (seq63866){
var G__63867 = cljs.core.first.call(null,seq63866);
var seq63866__$1 = cljs.core.next.call(null,seq63866);
return sablono.core.form_to63865.cljs$core$IFn$_invoke$arity$variadic(G__63867,seq63866__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to63865);

//# sourceMappingURL=core.js.map