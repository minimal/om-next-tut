// Compiled by ClojureScript 1.7.122 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc;

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__16987__auto__ = (((_ == null))?null:_);
var m__16988__auto__ = (datascript.parser._collect[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,_,pred,acc);
} else {
var m__16988__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__16987__auto__ = (((_ == null))?null:_);
var m__16988__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,_,acc);
} else {
var m__16988__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__16987__auto__ = (((_ == null))?null:_);
var m__16988__auto__ = (datascript.parser._postwalk[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,_,f);
} else {
var m__16988__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__67269_SHARP_,p2__67268_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__67268_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__67269_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__17397__auto__ = [];
var len__17390__auto___67276 = arguments.length;
var i__17391__auto___67277 = (0);
while(true){
if((i__17391__auto___67277 < len__17390__auto___67276)){
args__17397__auto__.push((arguments[i__17391__auto___67277]));

var G__67278 = (i__17391__auto___67277 + (1));
i__17391__auto___67277 = G__67278;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((2) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17398__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__67273){
var vec__67274 = p__67273;
var acc = cljs.core.nth.call(null,vec__67274,(0),null);
var acc__$1 = (function (){var or__16332__auto__ = acc;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__67274,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__67274,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq67270){
var G__67271 = cljs.core.first.call(null,seq67270);
var seq67270__$1 = cljs.core.next.call(null,seq67270);
var G__67272 = cljs.core.first.call(null,seq67270__$1);
var seq67270__$2 = cljs.core.next.call(null,seq67270__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__67271,G__67272,seq67270__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__16332__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__16332__auto__){
return or__16332__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__67285){
var vec__67286 = p__67285;
var k = cljs.core.nth.call(null,vec__67286,(0),null);
var v = cljs.core.nth.call(null,vec__67286,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__67279_SHARP_){
return datascript$parser$postwalk.call(null,p1__67279_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__67280_SHARP_){
return datascript$parser$postwalk.call(null,p1__67280_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__16332__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67291,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67293 = k67291;
switch (G__67293) {
default:
return cljs.core.get.call(null,self__.__extmap,k67291,else__16949__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Placeholder{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67290){
var self__ = this;
var G__67290__$1 = this;
return (new cljs.core.RecordIter((0),G__67290__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67290){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67294 = cljs.core.keyword_identical_QMARK_;
var expr__67295 = k__16954__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67290),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67290){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Placeholder(G__67290,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67287){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67288,acc67289){
var self__ = this;
var ___53450__auto____$1 = this;
return acc67289;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67289){
var self__ = this;
var ___53450__auto____$1 = this;
return acc67289;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__67292){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__67292),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67302,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67304 = (((k67302 instanceof cljs.core.Keyword))?k67302.fqn:null);
switch (G__67304) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67302,else__16949__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Variable{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67301){
var self__ = this;
var G__67301__$1 = this;
return (new cljs.core.RecordIter((0),G__67301__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67301){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67305 = cljs.core.keyword_identical_QMARK_;
var expr__67306 = k__16954__auto__;
if(cljs.core.truth_(pred__67305.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__67306))){
return (new datascript.parser.Variable(G__67301,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67301),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67301){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__67301,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67298){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f67298),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67299,acc67300){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67299,self__.symbol,acc67300);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67300){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67300,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__67303){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__67303),null,cljs.core.dissoc.call(null,G__67303,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67313,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67315 = (((k67313 instanceof cljs.core.Keyword))?k67313.fqn:null);
switch (G__67315) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67313,else__16949__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.SrcVar{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67312){
var self__ = this;
var G__67312__$1 = this;
return (new cljs.core.RecordIter((0),G__67312__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67312){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67316 = cljs.core.keyword_identical_QMARK_;
var expr__67317 = k__16954__auto__;
if(cljs.core.truth_(pred__67316.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__67317))){
return (new datascript.parser.SrcVar(G__67312,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67312),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67312){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__67312,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67309){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f67309),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67310,acc67311){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67310,self__.symbol,acc67311);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67311){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67311,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__67314){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__67314),null,cljs.core.dissoc.call(null,G__67314,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67324,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67326 = k67324;
switch (G__67326) {
default:
return cljs.core.get.call(null,self__.__extmap,k67324,else__16949__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67323){
var self__ = this;
var G__67323__$1 = this;
return (new cljs.core.RecordIter((0),G__67323__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67323){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67327 = cljs.core.keyword_identical_QMARK_;
var expr__67328 = k__16954__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67323),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67323){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__67323,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67320){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67321,acc67322){
var self__ = this;
var ___53450__auto____$1 = this;
return acc67322;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67322){
var self__ = this;
var ___53450__auto____$1 = this;
return acc67322;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__67325){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__67325),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67335,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67337 = k67335;
switch (G__67337) {
default:
return cljs.core.get.call(null,self__.__extmap,k67335,else__16949__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.RulesVar{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67334){
var self__ = this;
var G__67334__$1 = this;
return (new cljs.core.RecordIter((0),G__67334__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67334){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67338 = cljs.core.keyword_identical_QMARK_;
var expr__67339 = k__16954__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67334),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67334){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.RulesVar(G__67334,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67331){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67332,acc67333){
var self__ = this;
var ___53450__auto____$1 = this;
return acc67333;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67333){
var self__ = this;
var ___53450__auto____$1 = this;
return acc67333;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__67336){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__67336),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67346,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67348 = (((k67346 instanceof cljs.core.Keyword))?k67346.fqn:null);
switch (G__67348) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67346,else__16949__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Constant{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67345){
var self__ = this;
var G__67345__$1 = this;
return (new cljs.core.RecordIter((0),G__67345__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67345){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67349 = cljs.core.keyword_identical_QMARK_;
var expr__67350 = k__16954__auto__;
if(cljs.core.truth_(pred__67349.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__67350))){
return (new datascript.parser.Constant(G__67345,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67345),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67345){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__67345,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67342){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f67342),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67343,acc67344){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67343,self__.value,acc67344);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67344){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67344,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__67347){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__67347),null,cljs.core.dissoc.call(null,G__67347,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67357,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67359 = (((k67357 instanceof cljs.core.Keyword))?k67357.fqn:null);
switch (G__67359) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67357,else__16949__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67356){
var self__ = this;
var G__67356__$1 = this;
return (new cljs.core.RecordIter((0),G__67356__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67356){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67360 = cljs.core.keyword_identical_QMARK_;
var expr__67361 = k__16954__auto__;
if(cljs.core.truth_(pred__67360.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__67361))){
return (new datascript.parser.PlainSymbol(G__67356,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67356),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67356){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__67356,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67353){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f67353),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67354,acc67355){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67354,self__.symbol,acc67355);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67355){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67355,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__67358){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__67358),null,cljs.core.dissoc.call(null,G__67358,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__16332__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var or__16332__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__16332__auto____$1)){
return or__16332__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67368,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67370 = (((k67368 instanceof cljs.core.Keyword))?k67368.fqn:null);
switch (G__67370) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67368,else__16949__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.RuleVars{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67367){
var self__ = this;
var G__67367__$1 = this;
return (new cljs.core.RecordIter((0),G__67367__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67367){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67371 = cljs.core.keyword_identical_QMARK_;
var expr__67372 = k__16954__auto__;
if(cljs.core.truth_(pred__67371.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__67372))){
return (new datascript.parser.RuleVars(G__67367,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67371.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__67372))){
return (new datascript.parser.RuleVars(self__.required,G__67367,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67367),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67367){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__67367,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67364){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f67364),datascript.parser.postwalk.call(null,self__.free,f67364),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67365,acc67366){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67365,self__.free,datascript.parser.collect.call(null,pred67365,self__.required,acc67366));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67366){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67366,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__67369){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__67369),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__67369),null,cljs.core.dissoc.call(null,G__67369,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__67376 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__67376,(0),null);
var rest = cljs.core.nth.call(null,vec__67376,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67381,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67383 = k67381;
switch (G__67383) {
default:
return cljs.core.get.call(null,self__.__extmap,k67381,else__16949__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67380){
var self__ = this;
var G__67380__$1 = this;
return (new cljs.core.RecordIter((0),G__67380__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67380){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67384 = cljs.core.keyword_identical_QMARK_;
var expr__67385 = k__16954__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67380),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67380){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__67380,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67377){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67378,acc67379){
var self__ = this;
var ___53450__auto____$1 = this;
return acc67379;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67379){
var self__ = this;
var ___53450__auto____$1 = this;
return acc67379;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__67382){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__67382),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67392,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67394 = (((k67392 instanceof cljs.core.Keyword))?k67392.fqn:null);
switch (G__67394) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67392,else__16949__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.BindScalar{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67391){
var self__ = this;
var G__67391__$1 = this;
return (new cljs.core.RecordIter((0),G__67391__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67391){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67395 = cljs.core.keyword_identical_QMARK_;
var expr__67396 = k__16954__auto__;
if(cljs.core.truth_(pred__67395.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__67396))){
return (new datascript.parser.BindScalar(G__67391,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67391),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67391){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__67391,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67388){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f67388),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67389,acc67390){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67389,self__.variable,acc67390);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67390){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67390,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__67393){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__67393),null,cljs.core.dissoc.call(null,G__67393,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67403,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67405 = (((k67403 instanceof cljs.core.Keyword))?k67403.fqn:null);
switch (G__67405) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67403,else__16949__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.BindTuple{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67402){
var self__ = this;
var G__67402__$1 = this;
return (new cljs.core.RecordIter((0),G__67402__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67402){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67406 = cljs.core.keyword_identical_QMARK_;
var expr__67407 = k__16954__auto__;
if(cljs.core.truth_(pred__67406.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__67407))){
return (new datascript.parser.BindTuple(G__67402,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67402),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67402){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__67402,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67399){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f67399),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67400,acc67401){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67400,self__.bindings,acc67401);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67401){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67401,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__67404){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__67404),null,cljs.core.dissoc.call(null,G__67404,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67414,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67416 = (((k67414 instanceof cljs.core.Keyword))?k67414.fqn:null);
switch (G__67416) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67414,else__16949__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.BindColl{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67413){
var self__ = this;
var G__67413__$1 = this;
return (new cljs.core.RecordIter((0),G__67413__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67413){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67417 = cljs.core.keyword_identical_QMARK_;
var expr__67418 = k__16954__auto__;
if(cljs.core.truth_(pred__67417.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__67418))){
return (new datascript.parser.BindColl(G__67413,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67413),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67413){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__67413,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67410){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f67410),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67411,acc67412){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67411,self__.binding,acc67412);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67412){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67412,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__67415){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__67415),null,cljs.core.dissoc.call(null,G__67415,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_binding;
datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__16320__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__16320__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__16332__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__16320__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__16320__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__16332__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var or__16332__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__16332__auto____$1)){
return or__16332__auto____$1;
} else {
var or__16332__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__16332__auto____$2)){
return or__16332__auto____$2;
} else {
var or__16332__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16332__auto____$3)){
return or__16332__auto____$3;
} else {
var or__16332__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__16332__auto____$4)){
return or__16332__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (datascript.parser._find_vars[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$);
} else {
var m__16988__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67425,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67427 = (((k67425 instanceof cljs.core.Keyword))?k67425.fqn:null);
switch (G__67427) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67425,else__16949__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Aggregate{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67424){
var self__ = this;
var G__67424__$1 = this;
return (new cljs.core.RecordIter((0),G__67424__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67424){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67428 = cljs.core.keyword_identical_QMARK_;
var expr__67429 = k__16954__auto__;
if(cljs.core.truth_(pred__67428.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__67429))){
return (new datascript.parser.Aggregate(G__67424,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67428.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__67429))){
return (new datascript.parser.Aggregate(self__.fn,G__67424,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67424),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67424){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__67424,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67421){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f67421),datascript.parser.postwalk.call(null,self__.args,f67421),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67422,acc67423){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67422,self__.args,datascript.parser.collect.call(null,pred67422,self__.fn,acc67423));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67423){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67423,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__67426){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__67426),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__67426),null,cljs.core.dissoc.call(null,G__67426,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67436,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67438 = (((k67436 instanceof cljs.core.Keyword))?k67436.fqn:null);
switch (G__67438) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67436,else__16949__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Pull{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67435){
var self__ = this;
var G__67435__$1 = this;
return (new cljs.core.RecordIter((0),G__67435__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67435){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67439 = cljs.core.keyword_identical_QMARK_;
var expr__67440 = k__16954__auto__;
if(cljs.core.truth_(pred__67439.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__67440))){
return (new datascript.parser.Pull(G__67435,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67439.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__67440))){
return (new datascript.parser.Pull(self__.source,G__67435,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67439.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__67440))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__67435,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67435),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67435){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__67435,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67432){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f67432),datascript.parser.postwalk.call(null,self__.variable,f67432),datascript.parser.postwalk.call(null,self__.pattern,f67432),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67433,acc67434){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67433,self__.pattern,datascript.parser.collect.call(null,pred67433,self__.variable,datascript.parser.collect.call(null,pred67433,self__.source,acc67434)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67434){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67434,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__67437){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__67437),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__67437),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__67437),null,cljs.core.dissoc.call(null,G__67437,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__16987__auto__ = (((this$ == null))?null:this$);
var m__16988__auto__ = (datascript.parser.find_elements[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,this$);
} else {
var m__16988__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67447,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67449 = (((k67447 instanceof cljs.core.Keyword))?k67447.fqn:null);
switch (G__67449) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67447,else__16949__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.FindRel{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67446){
var self__ = this;
var G__67446__$1 = this;
return (new cljs.core.RecordIter((0),G__67446__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67446){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67450 = cljs.core.keyword_identical_QMARK_;
var expr__67451 = k__16954__auto__;
if(cljs.core.truth_(pred__67450.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__67451))){
return (new datascript.parser.FindRel(G__67446,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67446),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67446){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__67446,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67443){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f67443),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67444,acc67445){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67444,self__.elements,acc67445);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67445){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67445,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__67448){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__67448),null,cljs.core.dissoc.call(null,G__67448,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67458,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67460 = (((k67458 instanceof cljs.core.Keyword))?k67458.fqn:null);
switch (G__67460) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67458,else__16949__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.FindColl{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67457){
var self__ = this;
var G__67457__$1 = this;
return (new cljs.core.RecordIter((0),G__67457__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67457){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67461 = cljs.core.keyword_identical_QMARK_;
var expr__67462 = k__16954__auto__;
if(cljs.core.truth_(pred__67461.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__67462))){
return (new datascript.parser.FindColl(G__67457,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67457),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67457){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__67457,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67454){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f67454),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67455,acc67456){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67455,self__.element,acc67456);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67456){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67456,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__67459){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__67459),null,cljs.core.dissoc.call(null,G__67459,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67469,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67471 = (((k67469 instanceof cljs.core.Keyword))?k67469.fqn:null);
switch (G__67471) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67469,else__16949__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.FindScalar{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67468){
var self__ = this;
var G__67468__$1 = this;
return (new cljs.core.RecordIter((0),G__67468__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67468){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67472 = cljs.core.keyword_identical_QMARK_;
var expr__67473 = k__16954__auto__;
if(cljs.core.truth_(pred__67472.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__67473))){
return (new datascript.parser.FindScalar(G__67468,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67468),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67468){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__67468,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67465){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f67465),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67466,acc67467){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67466,self__.element,acc67467);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67467){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67467,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__67470){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__67470),null,cljs.core.dissoc.call(null,G__67470,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67480,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67482 = (((k67480 instanceof cljs.core.Keyword))?k67480.fqn:null);
switch (G__67482) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67480,else__16949__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.FindTuple{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67479){
var self__ = this;
var G__67479__$1 = this;
return (new cljs.core.RecordIter((0),G__67479__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67479){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67483 = cljs.core.keyword_identical_QMARK_;
var expr__67484 = k__16954__auto__;
if(cljs.core.truth_(pred__67483.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__67484))){
return (new datascript.parser.FindTuple(G__67479,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67479),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67479){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__67479,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67476){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f67476),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67477,acc67478){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67477,self__.elements,acc67478);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67478){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67478,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__67481){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__67481),null,cljs.core.dissoc.call(null,G__67481,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__67488 = form;
var fn = cljs.core.nth.call(null,vec__67488,(0),null);
var args = cljs.core.nthnext.call(null,vec__67488,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16320__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16320__auto__)){
return args_STAR_;
} else {
return and__16320__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__67490 = form;
var _ = cljs.core.nth.call(null,vec__67490,(0),null);
var fn = cljs.core.nth.call(null,vec__67490,(1),null);
var args = cljs.core.nthnext.call(null,vec__67490,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16320__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16320__auto__)){
return args_STAR_;
} else {
return and__16320__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__67492 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__67492,(0),null);
var pattern = cljs.core.nth.call(null,vec__67492,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__16332__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
})();
if(cljs.core.truth_((function (){var and__16320__auto__ = src_STAR_;
if(cljs.core.truth_(and__16320__auto__)){
var and__16320__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__16320__auto____$1)){
return pattern_STAR_;
} else {
return and__16320__auto____$1;
}
} else {
return and__16320__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__16332__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var or__16332__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__16332__auto____$1)){
return or__16332__auto____$1;
} else {
var or__16332__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__16332__auto____$2)){
return or__16332__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__67494 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__67494__$1 = (((G__67494 == null))?null:(new datascript.parser.FindRel(G__67494,null,null,null)));
return G__67494__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__67496 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__67496__$1 = (((G__67496 == null))?null:(new datascript.parser.FindColl(G__67496,null,null,null)));
return G__67496__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__67498 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__67498__$1 = (((G__67498 == null))?null:(new datascript.parser.FindScalar(G__67498,null,null,null)));
return G__67498__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__67500 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__67500__$1 = (((G__67500 == null))?null:(new datascript.parser.FindTuple(G__67500,null,null,null)));
return G__67500__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__16332__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var or__16332__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__16332__auto____$1)){
return or__16332__auto____$1;
} else {
var or__16332__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__16332__auto____$2)){
return or__16332__auto____$2;
} else {
var or__16332__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__16332__auto____$3)){
return or__16332__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__16332__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__16332__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return datascript.parser.parse_rules_var.call(null,form);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__16332__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67505,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67507 = (((k67505 instanceof cljs.core.Keyword))?k67505.fqn:null);
switch (G__67507) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67505,else__16949__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Pattern{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67504){
var self__ = this;
var G__67504__$1 = this;
return (new cljs.core.RecordIter((0),G__67504__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67504){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67508 = cljs.core.keyword_identical_QMARK_;
var expr__67509 = k__16954__auto__;
if(cljs.core.truth_(pred__67508.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__67509))){
return (new datascript.parser.Pattern(G__67504,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67508.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__67509))){
return (new datascript.parser.Pattern(self__.source,G__67504,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67504),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67504){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__67504,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67501){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f67501),datascript.parser.postwalk.call(null,self__.pattern,f67501),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67502,acc67503){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67502,self__.pattern,datascript.parser.collect.call(null,pred67502,self__.source,acc67503));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67503){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67503,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__67506){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__67506),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__67506),null,cljs.core.dissoc.call(null,G__67506,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67516,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67518 = (((k67516 instanceof cljs.core.Keyword))?k67516.fqn:null);
switch (G__67518) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67516,else__16949__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Predicate{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67515){
var self__ = this;
var G__67515__$1 = this;
return (new cljs.core.RecordIter((0),G__67515__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67515){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67519 = cljs.core.keyword_identical_QMARK_;
var expr__67520 = k__16954__auto__;
if(cljs.core.truth_(pred__67519.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__67520))){
return (new datascript.parser.Predicate(G__67515,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67519.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__67520))){
return (new datascript.parser.Predicate(self__.fn,G__67515,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67515),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67515){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__67515,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67512){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f67512),datascript.parser.postwalk.call(null,self__.args,f67512),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67513,acc67514){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67513,self__.args,datascript.parser.collect.call(null,pred67513,self__.fn,acc67514));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67514){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67514,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__67517){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__67517),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__67517),null,cljs.core.dissoc.call(null,G__67517,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67527,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67529 = (((k67527 instanceof cljs.core.Keyword))?k67527.fqn:null);
switch (G__67529) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67527,else__16949__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Function{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67526){
var self__ = this;
var G__67526__$1 = this;
return (new cljs.core.RecordIter((0),G__67526__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67526){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67530 = cljs.core.keyword_identical_QMARK_;
var expr__67531 = k__16954__auto__;
if(cljs.core.truth_(pred__67530.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__67531))){
return (new datascript.parser.Function(G__67526,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67530.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__67531))){
return (new datascript.parser.Function(self__.fn,G__67526,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67530.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__67531))){
return (new datascript.parser.Function(self__.fn,self__.args,G__67526,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67526),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67526){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__67526,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67523){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f67523),datascript.parser.postwalk.call(null,self__.args,f67523),datascript.parser.postwalk.call(null,self__.binding,f67523),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67524,acc67525){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67524,self__.binding,datascript.parser.collect.call(null,pred67524,self__.args,datascript.parser.collect.call(null,pred67524,self__.fn,acc67525)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67525){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67525,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__67528){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__67528),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__67528),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__67528),null,cljs.core.dissoc.call(null,G__67528,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67538,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67540 = (((k67538 instanceof cljs.core.Keyword))?k67538.fqn:null);
switch (G__67540) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67538,else__16949__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67537){
var self__ = this;
var G__67537__$1 = this;
return (new cljs.core.RecordIter((0),G__67537__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67537){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67541 = cljs.core.keyword_identical_QMARK_;
var expr__67542 = k__16954__auto__;
if(cljs.core.truth_(pred__67541.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__67542))){
return (new datascript.parser.RuleExpr(G__67537,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67541.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__67542))){
return (new datascript.parser.RuleExpr(self__.source,G__67537,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67541.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__67542))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__67537,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67537),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67537){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__67537,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67534){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f67534),datascript.parser.postwalk.call(null,self__.name,f67534),datascript.parser.postwalk.call(null,self__.args,f67534),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67535,acc67536){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67535,self__.args,datascript.parser.collect.call(null,pred67535,self__.name,datascript.parser.collect.call(null,pred67535,self__.source,acc67536)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67536){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67536,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__67539){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__67539),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__67539),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__67539),null,cljs.core.dissoc.call(null,G__67539,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67549,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67551 = (((k67549 instanceof cljs.core.Keyword))?k67549.fqn:null);
switch (G__67551) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67549,else__16949__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Not{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67548){
var self__ = this;
var G__67548__$1 = this;
return (new cljs.core.RecordIter((0),G__67548__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67548){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67552 = cljs.core.keyword_identical_QMARK_;
var expr__67553 = k__16954__auto__;
if(cljs.core.truth_(pred__67552.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__67553))){
return (new datascript.parser.Not(G__67548,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67552.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__67553))){
return (new datascript.parser.Not(self__.source,G__67548,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67552.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__67553))){
return (new datascript.parser.Not(self__.source,self__.vars,G__67548,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67548),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67548){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__67548,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67545){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f67545),datascript.parser.postwalk.call(null,self__.vars,f67545),datascript.parser.postwalk.call(null,self__.clauses,f67545),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67546,acc67547){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67546,self__.clauses,datascript.parser.collect.call(null,pred67546,self__.vars,datascript.parser.collect.call(null,pred67546,self__.source,acc67547)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67547){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67547,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__67550){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__67550),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__67550),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__67550),null,cljs.core.dissoc.call(null,G__67550,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67560,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67562 = (((k67560 instanceof cljs.core.Keyword))?k67560.fqn:null);
switch (G__67562) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67560,else__16949__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Or{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67559){
var self__ = this;
var G__67559__$1 = this;
return (new cljs.core.RecordIter((0),G__67559__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67559){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67563 = cljs.core.keyword_identical_QMARK_;
var expr__67564 = k__16954__auto__;
if(cljs.core.truth_(pred__67563.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__67564))){
return (new datascript.parser.Or(G__67559,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67563.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__67564))){
return (new datascript.parser.Or(self__.source,G__67559,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67563.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__67564))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__67559,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67559),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67559){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__67559,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67556){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f67556),datascript.parser.postwalk.call(null,self__.rule_vars,f67556),datascript.parser.postwalk.call(null,self__.clauses,f67556),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67557,acc67558){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67557,self__.clauses,datascript.parser.collect.call(null,pred67557,self__.rule_vars,datascript.parser.collect.call(null,pred67557,self__.source,acc67558)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67558){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67558,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__67561){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__67561),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__67561),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__67561),null,cljs.core.dissoc.call(null,G__67561,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67571,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67573 = (((k67571 instanceof cljs.core.Keyword))?k67571.fqn:null);
switch (G__67573) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67571,else__16949__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.And{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67570){
var self__ = this;
var G__67570__$1 = this;
return (new cljs.core.RecordIter((0),G__67570__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67570){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67574 = cljs.core.keyword_identical_QMARK_;
var expr__67575 = k__16954__auto__;
if(cljs.core.truth_(pred__67574.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__67575))){
return (new datascript.parser.And(G__67570,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67570),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67570){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__67570,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67567){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f67567),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67568,acc67569){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67568,self__.clauses,acc67569);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67569){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc67569,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__67572){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__67572),null,cljs.core.dissoc.call(null,G__67572,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_clause;

datascript.parser.parse_clauses;
datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__16332__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var or__16332__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16332__auto____$1)){
return or__16332__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__67579 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__67579,(0),null);
var next_form = cljs.core.nth.call(null,vec__67579,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__67581 = form;
var fn = cljs.core.nth.call(null,vec__67581,(0),null);
var args = cljs.core.nthnext.call(null,vec__67581,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__16332__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__16320__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16320__auto__)){
return args_STAR_;
} else {
return and__16320__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__67583 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__67583,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__67583,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__67586 = form;
var call = cljs.core.nth.call(null,vec__67586,(0),null);
var binding = cljs.core.nth.call(null,vec__67586,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__67587 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__67587,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__67587,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__67590 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__67590,(0),null);
var next_form = cljs.core.nth.call(null,vec__67590,(1),null);
var vec__67591 = next_form;
var name = cljs.core.nth.call(null,vec__67591,(0),null);
var args = cljs.core.nthnext.call(null,vec__67591,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_67594 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_67594)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_67594)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__67597 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__67597,(0),null);
var next_form = cljs.core.nth.call(null,vec__67597,(1),null);
var vec__67598 = next_form;
var sym = cljs.core.nth.call(null,vec__67598,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__67598,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__67601 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__67601,(0),null);
var next_form = cljs.core.nth.call(null,vec__67601,(1),null);
var vec__67602 = next_form;
var sym = cljs.core.nth.call(null,vec__67602,(0),null);
var vars = cljs.core.nth.call(null,vec__67602,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__67602,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__16320__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16320__auto__)){
return clauses_STAR_;
} else {
return and__16320__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__67611 = clause;
var map__67611__$1 = ((((!((map__67611 == null)))?((((map__67611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67611):map__67611);
var map__67612 = cljs.core.get.call(null,map__67611__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__67612__$1 = ((((!((map__67612 == null)))?((((map__67612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67612):map__67612);
var required = cljs.core.get.call(null,map__67612__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__67612__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__67611__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__67615_67619 = cljs.core.seq.call(null,clauses);
var chunk__67616_67620 = null;
var count__67617_67621 = (0);
var i__67618_67622 = (0);
while(true){
if((i__67618_67622 < count__67617_67621)){
var clause_67623__$1 = cljs.core._nth.call(null,chunk__67616_67620,i__67618_67622);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_67623__$1], null),form);

var G__67624 = seq__67615_67619;
var G__67625 = chunk__67616_67620;
var G__67626 = count__67617_67621;
var G__67627 = (i__67618_67622 + (1));
seq__67615_67619 = G__67624;
chunk__67616_67620 = G__67625;
count__67617_67621 = G__67626;
i__67618_67622 = G__67627;
continue;
} else {
var temp__4425__auto___67628 = cljs.core.seq.call(null,seq__67615_67619);
if(temp__4425__auto___67628){
var seq__67615_67629__$1 = temp__4425__auto___67628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67615_67629__$1)){
var c__17135__auto___67630 = cljs.core.chunk_first.call(null,seq__67615_67629__$1);
var G__67631 = cljs.core.chunk_rest.call(null,seq__67615_67629__$1);
var G__67632 = c__17135__auto___67630;
var G__67633 = cljs.core.count.call(null,c__17135__auto___67630);
var G__67634 = (0);
seq__67615_67619 = G__67631;
chunk__67616_67620 = G__67632;
count__67617_67621 = G__67633;
i__67618_67622 = G__67634;
continue;
} else {
var clause_67635__$1 = cljs.core.first.call(null,seq__67615_67629__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_67635__$1], null),form);

var G__67636 = cljs.core.next.call(null,seq__67615_67629__$1);
var G__67637 = null;
var G__67638 = (0);
var G__67639 = (0);
seq__67615_67619 = G__67636;
chunk__67616_67620 = G__67637;
count__67617_67621 = G__67638;
i__67618_67622 = G__67639;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__67642 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__67642,(0),null);
var next_form = cljs.core.nth.call(null,vec__67642,(1),null);
var vec__67643 = next_form;
var sym = cljs.core.nth.call(null,vec__67643,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__67643,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__67646 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__67646,(0),null);
var next_form = cljs.core.nth.call(null,vec__67646,(1),null);
var vec__67647 = next_form;
var sym = cljs.core.nth.call(null,vec__67647,(0),null);
var vars = cljs.core.nth.call(null,vec__67647,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__67647,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__16320__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16320__auto__)){
return clauses_STAR_;
} else {
return and__16320__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__16332__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var or__16332__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__16332__auto____$1)){
return or__16332__auto____$1;
} else {
var or__16332__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__16332__auto____$2)){
return or__16332__auto____$2;
} else {
var or__16332__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__16332__auto____$3)){
return or__16332__auto____$3;
} else {
var or__16332__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__16332__auto____$4)){
return or__16332__auto____$4;
} else {
var or__16332__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__16332__auto____$5)){
return or__16332__auto____$5;
} else {
var or__16332__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__16332__auto____$6)){
return or__16332__auto____$6;
} else {
var or__16332__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__16332__auto____$7)){
return or__16332__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__16332__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67653,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67655 = (((k67653 instanceof cljs.core.Keyword))?k67653.fqn:null);
switch (G__67655) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67653,else__16949__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67652){
var self__ = this;
var G__67652__$1 = this;
return (new cljs.core.RecordIter((0),G__67652__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67652){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67656 = cljs.core.keyword_identical_QMARK_;
var expr__67657 = k__16954__auto__;
if(cljs.core.truth_(pred__67656.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__67657))){
return (new datascript.parser.RuleBranch(G__67652,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67656.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__67657))){
return (new datascript.parser.RuleBranch(self__.vars,G__67652,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67652),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67652){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__67652,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67649){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f67649),datascript.parser.postwalk.call(null,self__.clauses,f67649),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67650,acc67651){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67650,self__.clauses,datascript.parser.collect.call(null,pred67650,self__.vars,acc67651));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67651){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67651,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__67654){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__67654),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__67654),null,cljs.core.dissoc.call(null,G__67654,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67664,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67666 = (((k67664 instanceof cljs.core.Keyword))?k67664.fqn:null);
switch (G__67666) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67664,else__16949__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Rule{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67663){
var self__ = this;
var G__67663__$1 = this;
return (new cljs.core.RecordIter((0),G__67663__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67663){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67667 = cljs.core.keyword_identical_QMARK_;
var expr__67668 = k__16954__auto__;
if(cljs.core.truth_(pred__67667.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__67668))){
return (new datascript.parser.Rule(G__67663,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67667.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__67668))){
return (new datascript.parser.Rule(self__.name,G__67663,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67663),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67663){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__67663,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67660){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f67660),datascript.parser.postwalk.call(null,self__.branches,f67660),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67661,acc67662){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67661,self__.branches,datascript.parser.collect.call(null,pred67661,self__.name,acc67662));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67662){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67662,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__67665){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__67665),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__67665),null,cljs.core.dissoc.call(null,G__67665,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__67671_SHARP_){
return (p1__67671_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__67672_SHARP_){
return (p1__67672_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__67675 = form;
var head = cljs.core.nth.call(null,vec__67675,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__67675,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__67676 = head;
var name = cljs.core.nth.call(null,vec__67676,(0),null);
var vars = cljs.core.nthnext.call(null,vec__67676,(1));
var name_STAR_ = (function (){var or__16332__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__16332__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__67683 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__67685 = null;
var count__67686 = (0);
var i__67687 = (0);
while(true){
if((i__67687 < count__67686)){
var b = cljs.core._nth.call(null,chunk__67685,i__67687);
var vars_67689 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_67689))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_67689)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__67690 = seq__67683;
var G__67691 = chunk__67685;
var G__67692 = count__67686;
var G__67693 = (i__67687 + (1));
seq__67683 = G__67690;
chunk__67685 = G__67691;
count__67686 = G__67692;
i__67687 = G__67693;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__67683);
if(temp__4425__auto__){
var seq__67683__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67683__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__67683__$1);
var G__67694 = cljs.core.chunk_rest.call(null,seq__67683__$1);
var G__67695 = c__17135__auto__;
var G__67696 = cljs.core.count.call(null,c__17135__auto__);
var G__67697 = (0);
seq__67683 = G__67694;
chunk__67685 = G__67695;
count__67686 = G__67696;
i__67687 = G__67697;
continue;
} else {
var b = cljs.core.first.call(null,seq__67683__$1);
var vars_67698 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_67698))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_67698)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__67699 = cljs.core.next.call(null,seq__67683__$1);
var G__67700 = null;
var G__67701 = (0);
var G__67702 = (0);
seq__67683 = G__67699;
chunk__67685 = G__67700;
count__67686 = G__67701;
i__67687 = G__67702;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__17104__auto__ = (function datascript$parser$parse_rules_$_iter__67712(s__67713){
return (new cljs.core.LazySeq(null,(function (){
var s__67713__$1 = s__67713;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__67713__$1);
if(temp__4425__auto__){
var s__67713__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67713__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__67713__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__67715 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__67714 = (0);
while(true){
if((i__67714 < size__17103__auto__)){
var vec__67718 = cljs.core._nth.call(null,c__17102__auto__,i__67714);
var name = cljs.core.nth.call(null,vec__67718,(0),null);
var branches = cljs.core.nth.call(null,vec__67718,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__67714,vec__67718,name,branches,c__17102__auto__,size__17103__auto__,b__67715,s__67713__$2,temp__4425__auto__){
return (function (p1__67703_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__67703_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__67703_SHARP_),null,null,null));
});})(i__67714,vec__67718,name,branches,c__17102__auto__,size__17103__auto__,b__67715,s__67713__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__67715,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__67720 = (i__67714 + (1));
i__67714 = G__67720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67715),datascript$parser$parse_rules_$_iter__67712.call(null,cljs.core.chunk_rest.call(null,s__67713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67715),null);
}
} else {
var vec__67719 = cljs.core.first.call(null,s__67713__$2);
var name = cljs.core.nth.call(null,vec__67719,(0),null);
var branches = cljs.core.nth.call(null,vec__67719,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__67719,name,branches,s__67713__$2,temp__4425__auto__){
return (function (p1__67703_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__67703_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__67703_SHARP_),null,null,null));
});})(vec__67719,name,branches,s__67713__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__67712.call(null,cljs.core.rest.call(null,s__67713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17104__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16946__auto__,k__16947__auto__){
var self__ = this;
var this__16946__auto____$1 = this;
return cljs.core._lookup.call(null,this__16946__auto____$1,k__16947__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16948__auto__,k67725,else__16949__auto__){
var self__ = this;
var this__16948__auto____$1 = this;
var G__67727 = (((k67725 instanceof cljs.core.Keyword))?k67725.fqn:null);
switch (G__67727) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67725,else__16949__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16960__auto__,writer__16961__auto__,opts__16962__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var pr_pair__16963__auto__ = ((function (this__16960__auto____$1){
return (function (keyval__16964__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,cljs.core.pr_writer,""," ","",opts__16962__auto__,keyval__16964__auto__);
});})(this__16960__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16961__auto__,pr_pair__16963__auto__,"#datascript.parser.Query{",", ","}",opts__16962__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67724){
var self__ = this;
var G__67724__$1 = this;
return (new cljs.core.RecordIter((0),G__67724__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16944__auto__){
var self__ = this;
var this__16944__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16940__auto__){
var self__ = this;
var this__16940__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16950__auto__){
var self__ = this;
var this__16950__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16941__auto__){
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

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16942__auto__,other__16943__auto__){
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

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16955__auto__,k__16956__auto__){
var self__ = this;
var this__16955__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__16956__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16955__auto____$1),self__.__meta),k__16956__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16956__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16953__auto__,k__16954__auto__,G__67724){
var self__ = this;
var this__16953__auto____$1 = this;
var pred__67728 = cljs.core.keyword_identical_QMARK_;
var expr__67729 = k__16954__auto__;
if(cljs.core.truth_(pred__67728.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__67729))){
return (new datascript.parser.Query(G__67724,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67728.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__67729))){
return (new datascript.parser.Query(self__.find,G__67724,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67728.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__67729))){
return (new datascript.parser.Query(self__.find,self__.with$,G__67724,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67728.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__67729))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__67724,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16954__auto__,G__67724),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16958__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16945__auto__,G__67724){
var self__ = this;
var this__16945__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__67724,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16951__auto__,entry__16952__auto__){
var self__ = this;
var this__16951__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16952__auto__)){
return cljs.core._assoc.call(null,this__16951__auto____$1,cljs.core._nth.call(null,entry__16952__auto__,(0)),cljs.core._nth.call(null,entry__16952__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16951__auto____$1,entry__16952__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__53447__auto__,f67721){
var self__ = this;
var this__53447__auto____$1 = this;
var new__53448__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f67721),datascript.parser.postwalk.call(null,self__.with$,f67721),datascript.parser.postwalk.call(null,self__.in$,f67721),datascript.parser.postwalk.call(null,self__.where,f67721),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__53447__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__53449__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__53448__auto__,meta__53449__auto__);
} else {
return new__53448__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___53450__auto__,pred67722,acc67723){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect.call(null,pred67722,self__.where,datascript.parser.collect.call(null,pred67722,self__.in$,datascript.parser.collect.call(null,pred67722,self__.with$,datascript.parser.collect.call(null,pred67722,self__.find,acc67723))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___53450__auto__,acc67723){
var self__ = this;
var ___53450__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc67723,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__16980__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__16980__auto__,writer__16981__auto__){
return cljs.core._write.call(null,writer__16981__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__67726){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__67726),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__67726),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__67726),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__67726),null,cljs.core.dissoc.call(null,G__67726,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__67732 = parsed;
var G__67733 = q;
var G__67734 = cljs.core.next.call(null,qs);
parsed = G__67732;
key = G__67733;
qs = G__67734;
continue;
} else {
var G__67735 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__67736 = key;
var G__67737 = cljs.core.next.call(null,qs);
parsed = G__67735;
key = G__67736;
qs = G__67737;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_67744 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_67745 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_67746 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_67747 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_67748 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_67744,with_vars_67745),clojure.set.union.call(null,where_vars_67747,in_vars_67746));
var shared_67749 = clojure.set.intersection.call(null,find_vars_67744,with_vars_67745);
if(cljs.core.empty_QMARK_.call(null,unknown_67748)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_67748)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_67748,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_67749)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_67749)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_67749,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_67750 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_67751 = datascript.parser.collect.call(null,((function (in_vars_67750){
return (function (p1__67738_SHARP_){
return (p1__67738_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_67750))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_67752 = datascript.parser.collect.call(null,((function (in_vars_67750,in_sources_67751){
return (function (p1__67739_SHARP_){
return (p1__67739_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_67750,in_sources_67751))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__16320__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_67750);
if(cljs.core.truth_(and__16320__auto__)){
var and__16320__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_67751);
if(cljs.core.truth_(and__16320__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_67752);
} else {
return and__16320__auto____$1;
}
} else {
return and__16320__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_67753 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_67753))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_67754 = datascript.parser.collect.call(null,(function (p1__67740_SHARP_){
return (p1__67740_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_67755 = datascript.parser.collect.call(null,((function (in_sources_67754){
return (function (p1__67741_SHARP_){
return (p1__67741_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_67754))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_67756 = clojure.set.difference.call(null,where_sources_67755,in_sources_67754);
if(cljs.core.empty_QMARK_.call(null,unknown_67756)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_67756)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_67756,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__67742_SHARP_){
return (p1__67742_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__67743_SHARP_){
return (p1__67743_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map