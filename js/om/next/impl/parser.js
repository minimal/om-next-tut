// Compiled by ClojureScript 1.7.122 {}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.__GT_ast;
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__63375){
var vec__63378 = p__63375;
var f = cljs.core.nth.call(null,vec__63378,(0),null);
var args = cljs.core.nth.call(null,vec__63378,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"remote","remote",-1593576576)], null);
} else {
var ast = cljs.core.update_in.call(null,om.next.impl.parser.__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__16332__auto__ = args;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__63379 = ast;
var G__63379__$1 = (((new cljs.core.Keyword(null,"dkey","dkey",-352222233).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.call(null,G__63379,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866)):G__63379);
return G__63379__$1;
}
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__63381 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__63381,(0),null);
var v = cljs.core.nth.call(null,vec__63381,(1),null);
var ast = om.next.impl.parser.__GT_ast.call(null,k);
var ref_QMARK_ = cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"sel","sel",-1686154807),v);
});
om.next.impl.parser.ref__GT_ast = (function om$next$impl$parser$ref__GT_ast(p__63382){
var vec__63384 = p__63382;
var k = cljs.core.nth.call(null,vec__63384,(0),null);
var id = cljs.core.nth.call(null,vec__63384,(1),null);
var ref = vec__63384;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
});
om.next.impl.parser.__GT_ast = (function om$next$impl$parser$__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return om.next.impl.parser.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return om.next.impl.parser.ref__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return om.next.impl.parser.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__63385){
var map__63446 = p__63385;
var map__63446__$1 = ((((!((map__63446 == null)))?((((map__63446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63446):map__63446);
var read = cljs.core.get.call(null,map__63446__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__63446__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__63446,map__63446__$1,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,sel){
return om$next$impl$parser$parser_$_self.call(null,env,sel,false);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,sel,remote_QMARK_){
var env__$1 = (function (){var G__63477 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parse","parse",-1162164619),om$next$impl$parser$parser_$_self);
var G__63477__$1 = ((!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168))))?cljs.core.assoc.call(null,G__63477,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY):G__63477);
var G__63477__$2 = ((remote_QMARK_)?cljs.core.assoc.call(null,G__63477__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),true):G__63477__$1);
return G__63477__$2;
})();
var step = ((function (env__$1,map__63446,map__63446__$1,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__63499 = om.next.impl.parser.__GT_ast.call(null,expr);
var map__63499__$1 = ((((!((map__63499 == null)))?((((map__63499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63499):map__63499);
var ast = map__63499__$1;
var key = cljs.core.get.call(null,map__63499__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dkey = cljs.core.get.call(null,map__63499__$1,new cljs.core.Keyword(null,"dkey","dkey",-352222233));
var params = cljs.core.get.call(null,map__63499__$1,new cljs.core.Keyword(null,"params","params",710516235));
var sel__$1 = cljs.core.get.call(null,map__63499__$1,new cljs.core.Keyword(null,"sel","sel",-1686154807));
var env__$2 = (function (){var G__63501 = env__$1;
var G__63501__$1 = ((!((sel__$1 == null)))?cljs.core.assoc.call(null,G__63501,new cljs.core.Keyword(null,"selector","selector",762528866),sel__$1):G__63501);
return G__63501__$1;
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (function (){var G__63502 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__63502) {
case "call":
return mutate.call(null,env__$2,dkey,params);

break;
case "prop":
return read.call(null,env__$2,dkey,params);

break;
case "remote":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if(remote_QMARK_){
var G__63503 = ret;
var G__63503__$1 = ((new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(res) === true)?cljs.core.conj.call(null,G__63503,expr):G__63503);
var G__63503__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),type))?cljs.core.conj.call(null,G__63503__$1,cljs.core.second.call(null,expr)):G__63503__$1);
return G__63503__$2;
} else {
if(!((call_QMARK_) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),type)) || (cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",305978217))))){
return ret;
} else {
var error = cljs.core.atom.call(null,null);
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res).call(null);
}catch (e63504){var e_63507 = e63504;
cljs.core.reset_BANG_.call(null,error,e_63507);
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var G__63505 = ret;
var G__63505__$1 = (cljs.core.truth_(cljs.core.deref.call(null,error))?cljs.core.assoc.call(null,G__63505,key,cljs.core.deref.call(null,error)):G__63505);
var G__63505__$2 = ((!((value == null)))?cljs.core.assoc.call(null,G__63505__$1,key,value):G__63505__$1);
return G__63505__$2;
}
}
});})(env__$1,map__63446,map__63446__$1,read,mutate))
;
return cljs.core.reduce.call(null,step,((!(remote_QMARK_))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),sel);
});
om$next$impl$parser$parser_$_self = function(env,sel,remote_QMARK_){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,sel);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,sel,remote_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__63446,map__63446__$1,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

//# sourceMappingURL=parser.js.map