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
var seq__65080_65094 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65081_65095 = null;
var count__65082_65096 = (0);
var i__65083_65097 = (0);
while(true){
if((i__65083_65097 < count__65082_65096)){
var f_65098 = cljs.core._nth.call(null,chunk__65081_65095,i__65083_65097);
cljs.core.println.call(null,"  ",f_65098);

var G__65099 = seq__65080_65094;
var G__65100 = chunk__65081_65095;
var G__65101 = count__65082_65096;
var G__65102 = (i__65083_65097 + (1));
seq__65080_65094 = G__65099;
chunk__65081_65095 = G__65100;
count__65082_65096 = G__65101;
i__65083_65097 = G__65102;
continue;
} else {
var temp__4425__auto___65103 = cljs.core.seq.call(null,seq__65080_65094);
if(temp__4425__auto___65103){
var seq__65080_65104__$1 = temp__4425__auto___65103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65080_65104__$1)){
var c__17135__auto___65105 = cljs.core.chunk_first.call(null,seq__65080_65104__$1);
var G__65106 = cljs.core.chunk_rest.call(null,seq__65080_65104__$1);
var G__65107 = c__17135__auto___65105;
var G__65108 = cljs.core.count.call(null,c__17135__auto___65105);
var G__65109 = (0);
seq__65080_65094 = G__65106;
chunk__65081_65095 = G__65107;
count__65082_65096 = G__65108;
i__65083_65097 = G__65109;
continue;
} else {
var f_65110 = cljs.core.first.call(null,seq__65080_65104__$1);
cljs.core.println.call(null,"  ",f_65110);

var G__65111 = cljs.core.next.call(null,seq__65080_65104__$1);
var G__65112 = null;
var G__65113 = (0);
var G__65114 = (0);
seq__65080_65094 = G__65111;
chunk__65081_65095 = G__65112;
count__65082_65096 = G__65113;
i__65083_65097 = G__65114;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_65115 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16332__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_65115);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_65115)))?cljs.core.second.call(null,arglists_65115):arglists_65115));
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
var seq__65084 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65085 = null;
var count__65086 = (0);
var i__65087 = (0);
while(true){
if((i__65087 < count__65086)){
var vec__65088 = cljs.core._nth.call(null,chunk__65085,i__65087);
var name = cljs.core.nth.call(null,vec__65088,(0),null);
var map__65089 = cljs.core.nth.call(null,vec__65088,(1),null);
var map__65089__$1 = ((((!((map__65089 == null)))?((((map__65089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65089):map__65089);
var doc = cljs.core.get.call(null,map__65089__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__65089__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__65116 = seq__65084;
var G__65117 = chunk__65085;
var G__65118 = count__65086;
var G__65119 = (i__65087 + (1));
seq__65084 = G__65116;
chunk__65085 = G__65117;
count__65086 = G__65118;
i__65087 = G__65119;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__65084);
if(temp__4425__auto__){
var seq__65084__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65084__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__65084__$1);
var G__65120 = cljs.core.chunk_rest.call(null,seq__65084__$1);
var G__65121 = c__17135__auto__;
var G__65122 = cljs.core.count.call(null,c__17135__auto__);
var G__65123 = (0);
seq__65084 = G__65120;
chunk__65085 = G__65121;
count__65086 = G__65122;
i__65087 = G__65123;
continue;
} else {
var vec__65091 = cljs.core.first.call(null,seq__65084__$1);
var name = cljs.core.nth.call(null,vec__65091,(0),null);
var map__65092 = cljs.core.nth.call(null,vec__65091,(1),null);
var map__65092__$1 = ((((!((map__65092 == null)))?((((map__65092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65092):map__65092);
var doc = cljs.core.get.call(null,map__65092__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__65092__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__65124 = cljs.core.next.call(null,seq__65084__$1);
var G__65125 = null;
var G__65126 = (0);
var G__65127 = (0);
seq__65084 = G__65124;
chunk__65085 = G__65125;
count__65086 = G__65126;
i__65087 = G__65127;
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