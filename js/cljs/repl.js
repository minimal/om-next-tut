// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46059_46073 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46060_46074 = null;
var count__46061_46075 = (0);
var i__46062_46076 = (0);
while(true){
if((i__46062_46076 < count__46061_46075)){
var f_46077 = cljs.core._nth.call(null,chunk__46060_46074,i__46062_46076);
cljs.core.println.call(null,"  ",f_46077);

var G__46078 = seq__46059_46073;
var G__46079 = chunk__46060_46074;
var G__46080 = count__46061_46075;
var G__46081 = (i__46062_46076 + (1));
seq__46059_46073 = G__46078;
chunk__46060_46074 = G__46079;
count__46061_46075 = G__46080;
i__46062_46076 = G__46081;
continue;
} else {
var temp__4425__auto___46082 = cljs.core.seq.call(null,seq__46059_46073);
if(temp__4425__auto___46082){
var seq__46059_46083__$1 = temp__4425__auto___46082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46059_46083__$1)){
var c__17135__auto___46084 = cljs.core.chunk_first.call(null,seq__46059_46083__$1);
var G__46085 = cljs.core.chunk_rest.call(null,seq__46059_46083__$1);
var G__46086 = c__17135__auto___46084;
var G__46087 = cljs.core.count.call(null,c__17135__auto___46084);
var G__46088 = (0);
seq__46059_46073 = G__46085;
chunk__46060_46074 = G__46086;
count__46061_46075 = G__46087;
i__46062_46076 = G__46088;
continue;
} else {
var f_46089 = cljs.core.first.call(null,seq__46059_46083__$1);
cljs.core.println.call(null,"  ",f_46089);

var G__46090 = cljs.core.next.call(null,seq__46059_46083__$1);
var G__46091 = null;
var G__46092 = (0);
var G__46093 = (0);
seq__46059_46073 = G__46090;
chunk__46060_46074 = G__46091;
count__46061_46075 = G__46092;
i__46062_46076 = G__46093;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46094 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16332__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46094);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46094)))?cljs.core.second.call(null,arglists_46094):arglists_46094));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46063 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46064 = null;
var count__46065 = (0);
var i__46066 = (0);
while(true){
if((i__46066 < count__46065)){
var vec__46067 = cljs.core._nth.call(null,chunk__46064,i__46066);
var name = cljs.core.nth.call(null,vec__46067,(0),null);
var map__46068 = cljs.core.nth.call(null,vec__46067,(1),null);
var map__46068__$1 = ((((!((map__46068 == null)))?((((map__46068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46068):map__46068);
var doc = cljs.core.get.call(null,map__46068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__46068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__46095 = seq__46063;
var G__46096 = chunk__46064;
var G__46097 = count__46065;
var G__46098 = (i__46066 + (1));
seq__46063 = G__46095;
chunk__46064 = G__46096;
count__46065 = G__46097;
i__46066 = G__46098;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__46063);
if(temp__4425__auto__){
var seq__46063__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46063__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__46063__$1);
var G__46099 = cljs.core.chunk_rest.call(null,seq__46063__$1);
var G__46100 = c__17135__auto__;
var G__46101 = cljs.core.count.call(null,c__17135__auto__);
var G__46102 = (0);
seq__46063 = G__46099;
chunk__46064 = G__46100;
count__46065 = G__46101;
i__46066 = G__46102;
continue;
} else {
var vec__46070 = cljs.core.first.call(null,seq__46063__$1);
var name = cljs.core.nth.call(null,vec__46070,(0),null);
var map__46071 = cljs.core.nth.call(null,vec__46070,(1),null);
var map__46071__$1 = ((((!((map__46071 == null)))?((((map__46071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46071):map__46071);
var doc = cljs.core.get.call(null,map__46071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__46071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__46103 = cljs.core.next.call(null,seq__46063__$1);
var G__46104 = null;
var G__46105 = (0);
var G__46106 = (0);
seq__46063 = G__46103;
chunk__46064 = G__46104;
count__46065 = G__46105;
i__46066 = G__46106;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map