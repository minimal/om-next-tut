// Compiled by ClojureScript 1.7.122 {}
goog.provide('om.next.impl.refs');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ILookup}
*/
om.next.impl.refs.Ref = (function (path){
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162172184;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om.next.impl.refs.Ref.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#object[om.next.Ref "),cljs.core.str(self__.path),cljs.core.str("]")].join(''));
});

om.next.impl.refs.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._hash.call(null,self__.path);
});

om.next.impl.refs.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((other instanceof om.next.impl.refs.Ref)) && (cljs.core._EQ_.call(null,self__.path,other.path));
});

om.next.impl.refs.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,self__.path);
});

om.next.impl.refs.Ref.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.next.impl.refs.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__44342 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__44342) {
case "root":
return cljs.core.nth.call(null,self__.path,(0));

break;
case "id":
return cljs.core.nth.call(null,self__.path,(1));

break;
default:
return not_found;

}
});

om.next.impl.refs.Ref.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,i,null);
});

om.next.impl.refs.Ref.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
var G__44343 = i;
switch (G__44343) {
case (0):
return cljs.core.nth.call(null,self__.path,(0));

break;
case (1):
return cljs.core.nth.call(null,self__.path,(1));

break;
default:
return not_found;

}
});

om.next.impl.refs.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (new om.next.impl.refs.Ref(cljs.core.conj.call(null,self__.path,x)));
});

om.next.impl.refs.Ref.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek.call(null,self__.path);
});

om.next.impl.refs.Ref.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new om.next.impl.refs.Ref(cljs.core.pop.call(null,self__.path)));
});

om.next.impl.refs.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.next.impl.refs.Ref.cljs$lang$type = true;

om.next.impl.refs.Ref.cljs$lang$ctorStr = "om.next.impl.refs/Ref";

om.next.impl.refs.Ref.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"om.next.impl.refs/Ref");
});

om.next.impl.refs.__GT_Ref = (function om$next$impl$refs$__GT_Ref(path){
return (new om.next.impl.refs.Ref(path));
});

om.next.impl.refs.ref = (function om$next$impl$refs$ref(var_args){
var args__17397__auto__ = [];
var len__17390__auto___44349 = arguments.length;
var i__17391__auto___44350 = (0);
while(true){
if((i__17391__auto___44350 < len__17390__auto___44349)){
args__17397__auto__.push((arguments[i__17391__auto___44350]));

var G__44351 = (i__17391__auto___44350 + (1));
i__17391__auto___44350 = G__44351;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((2) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((2)),(0))):null);
return om.next.impl.refs.ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17398__auto__);
});

om.next.impl.refs.ref.cljs$core$IFn$_invoke$arity$variadic = (function (root,id,more){
return (new om.next.impl.refs.Ref(cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,id], null),more)));
});

om.next.impl.refs.ref.cljs$lang$maxFixedArity = (2);

om.next.impl.refs.ref.cljs$lang$applyTo = (function (seq44346){
var G__44347 = cljs.core.first.call(null,seq44346);
var seq44346__$1 = cljs.core.next.call(null,seq44346);
var G__44348 = cljs.core.first.call(null,seq44346__$1);
var seq44346__$2 = cljs.core.next.call(null,seq44346__$1);
return om.next.impl.refs.ref.cljs$core$IFn$_invoke$arity$variadic(G__44347,G__44348,seq44346__$2);
});
om.next.impl.refs.ref_QMARK_ = (function om$next$impl$refs$ref_QMARK_(x){
return (x instanceof om.next.impl.refs.Ref);
});

//# sourceMappingURL=refs.js.map