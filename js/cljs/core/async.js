// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async40662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40662 = (function (fn_handler,f,meta40663){
this.fn_handler = fn_handler;
this.f = f;
this.meta40663 = meta40663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40664,meta40663__$1){
var self__ = this;
var _40664__$1 = this;
return (new cljs.core.async.t_cljs$core$async40662(self__.fn_handler,self__.f,meta40663__$1));
});

cljs.core.async.t_cljs$core$async40662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40664){
var self__ = this;
var _40664__$1 = this;
return self__.meta40663;
});

cljs.core.async.t_cljs$core$async40662.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta40663","meta40663",-1268412236,null)], null);
});

cljs.core.async.t_cljs$core$async40662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40662";

cljs.core.async.t_cljs$core$async40662.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async40662");
});

cljs.core.async.__GT_t_cljs$core$async40662 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async40662(fn_handler__$1,f__$1,meta40663){
return (new cljs.core.async.t_cljs$core$async40662(fn_handler__$1,f__$1,meta40663));
});

}

return (new cljs.core.async.t_cljs$core$async40662(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args40667 = [];
var len__17390__auto___40670 = arguments.length;
var i__17391__auto___40671 = (0);
while(true){
if((i__17391__auto___40671 < len__17390__auto___40670)){
args40667.push((arguments[i__17391__auto___40671]));

var G__40672 = (i__17391__auto___40671 + (1));
i__17391__auto___40671 = G__40672;
continue;
} else {
}
break;
}

var G__40669 = args40667.length;
switch (G__40669) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40667.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args40674 = [];
var len__17390__auto___40677 = arguments.length;
var i__17391__auto___40678 = (0);
while(true){
if((i__17391__auto___40678 < len__17390__auto___40677)){
args40674.push((arguments[i__17391__auto___40678]));

var G__40679 = (i__17391__auto___40678 + (1));
i__17391__auto___40678 = G__40679;
continue;
} else {
}
break;
}

var G__40676 = args40674.length;
switch (G__40676) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40674.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40681 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40681);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40681,ret){
return (function (){
return fn1.call(null,val_40681);
});})(val_40681,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args40682 = [];
var len__17390__auto___40685 = arguments.length;
var i__17391__auto___40686 = (0);
while(true){
if((i__17391__auto___40686 < len__17390__auto___40685)){
args40682.push((arguments[i__17391__auto___40686]));

var G__40687 = (i__17391__auto___40686 + (1));
i__17391__auto___40686 = G__40687;
continue;
} else {
}
break;
}

var G__40684 = args40682.length;
switch (G__40684) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40682.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17235__auto___40689 = n;
var x_40690 = (0);
while(true){
if((x_40690 < n__17235__auto___40689)){
(a[x_40690] = (0));

var G__40691 = (x_40690 + (1));
x_40690 = G__40691;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40692 = (i + (1));
i = G__40692;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40696 = (function (alt_flag,flag,meta40697){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40697 = meta40697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40698,meta40697__$1){
var self__ = this;
var _40698__$1 = this;
return (new cljs.core.async.t_cljs$core$async40696(self__.alt_flag,self__.flag,meta40697__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40698){
var self__ = this;
var _40698__$1 = this;
return self__.meta40697;
});})(flag))
;

cljs.core.async.t_cljs$core$async40696.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40696.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40697","meta40697",-969367561,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40696";

cljs.core.async.t_cljs$core$async40696.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async40696");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40696 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40696(alt_flag__$1,flag__$1,meta40697){
return (new cljs.core.async.t_cljs$core$async40696(alt_flag__$1,flag__$1,meta40697));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40696(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40702 = (function (alt_handler,flag,cb,meta40703){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40703 = meta40703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40704,meta40703__$1){
var self__ = this;
var _40704__$1 = this;
return (new cljs.core.async.t_cljs$core$async40702(self__.alt_handler,self__.flag,self__.cb,meta40703__$1));
});

cljs.core.async.t_cljs$core$async40702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40704){
var self__ = this;
var _40704__$1 = this;
return self__.meta40703;
});

cljs.core.async.t_cljs$core$async40702.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40703","meta40703",-1664403232,null)], null);
});

cljs.core.async.t_cljs$core$async40702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40702";

cljs.core.async.t_cljs$core$async40702.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async40702");
});

cljs.core.async.__GT_t_cljs$core$async40702 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40702(alt_handler__$1,flag__$1,cb__$1,meta40703){
return (new cljs.core.async.t_cljs$core$async40702(alt_handler__$1,flag__$1,cb__$1,meta40703));
});

}

return (new cljs.core.async.t_cljs$core$async40702(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40705_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40705_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40706_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40706_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16332__auto__ = wport;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40707 = (i + (1));
i = G__40707;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16332__auto__ = ret;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16320__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16320__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17397__auto__ = [];
var len__17390__auto___40713 = arguments.length;
var i__17391__auto___40714 = (0);
while(true){
if((i__17391__auto___40714 < len__17390__auto___40713)){
args__17397__auto__.push((arguments[i__17391__auto___40714]));

var G__40715 = (i__17391__auto___40714 + (1));
i__17391__auto___40714 = G__40715;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40710){
var map__40711 = p__40710;
var map__40711__$1 = ((((!((map__40711 == null)))?((((map__40711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40711):map__40711);
var opts = map__40711__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40708){
var G__40709 = cljs.core.first.call(null,seq40708);
var seq40708__$1 = cljs.core.next.call(null,seq40708);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40709,seq40708__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args40716 = [];
var len__17390__auto___40766 = arguments.length;
var i__17391__auto___40767 = (0);
while(true){
if((i__17391__auto___40767 < len__17390__auto___40766)){
args40716.push((arguments[i__17391__auto___40767]));

var G__40768 = (i__17391__auto___40767 + (1));
i__17391__auto___40767 = G__40768;
continue;
} else {
}
break;
}

var G__40718 = args40716.length;
switch (G__40718) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40716.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20164__auto___40770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___40770){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___40770){
return (function (state_40742){
var state_val_40743 = (state_40742[(1)]);
if((state_val_40743 === (7))){
var inst_40738 = (state_40742[(2)]);
var state_40742__$1 = state_40742;
var statearr_40744_40771 = state_40742__$1;
(statearr_40744_40771[(2)] = inst_40738);

(statearr_40744_40771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (1))){
var state_40742__$1 = state_40742;
var statearr_40745_40772 = state_40742__$1;
(statearr_40745_40772[(2)] = null);

(statearr_40745_40772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (4))){
var inst_40721 = (state_40742[(7)]);
var inst_40721__$1 = (state_40742[(2)]);
var inst_40722 = (inst_40721__$1 == null);
var state_40742__$1 = (function (){var statearr_40746 = state_40742;
(statearr_40746[(7)] = inst_40721__$1);

return statearr_40746;
})();
if(cljs.core.truth_(inst_40722)){
var statearr_40747_40773 = state_40742__$1;
(statearr_40747_40773[(1)] = (5));

} else {
var statearr_40748_40774 = state_40742__$1;
(statearr_40748_40774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (13))){
var state_40742__$1 = state_40742;
var statearr_40749_40775 = state_40742__$1;
(statearr_40749_40775[(2)] = null);

(statearr_40749_40775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (6))){
var inst_40721 = (state_40742[(7)]);
var state_40742__$1 = state_40742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40742__$1,(11),to,inst_40721);
} else {
if((state_val_40743 === (3))){
var inst_40740 = (state_40742[(2)]);
var state_40742__$1 = state_40742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40742__$1,inst_40740);
} else {
if((state_val_40743 === (12))){
var state_40742__$1 = state_40742;
var statearr_40750_40776 = state_40742__$1;
(statearr_40750_40776[(2)] = null);

(statearr_40750_40776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (2))){
var state_40742__$1 = state_40742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40742__$1,(4),from);
} else {
if((state_val_40743 === (11))){
var inst_40731 = (state_40742[(2)]);
var state_40742__$1 = state_40742;
if(cljs.core.truth_(inst_40731)){
var statearr_40751_40777 = state_40742__$1;
(statearr_40751_40777[(1)] = (12));

} else {
var statearr_40752_40778 = state_40742__$1;
(statearr_40752_40778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (9))){
var state_40742__$1 = state_40742;
var statearr_40753_40779 = state_40742__$1;
(statearr_40753_40779[(2)] = null);

(statearr_40753_40779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (5))){
var state_40742__$1 = state_40742;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40754_40780 = state_40742__$1;
(statearr_40754_40780[(1)] = (8));

} else {
var statearr_40755_40781 = state_40742__$1;
(statearr_40755_40781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (14))){
var inst_40736 = (state_40742[(2)]);
var state_40742__$1 = state_40742;
var statearr_40756_40782 = state_40742__$1;
(statearr_40756_40782[(2)] = inst_40736);

(statearr_40756_40782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (10))){
var inst_40728 = (state_40742[(2)]);
var state_40742__$1 = state_40742;
var statearr_40757_40783 = state_40742__$1;
(statearr_40757_40783[(2)] = inst_40728);

(statearr_40757_40783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40743 === (8))){
var inst_40725 = cljs.core.async.close_BANG_.call(null,to);
var state_40742__$1 = state_40742;
var statearr_40758_40784 = state_40742__$1;
(statearr_40758_40784[(2)] = inst_40725);

(statearr_40758_40784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___40770))
;
return ((function (switch__20099__auto__,c__20164__auto___40770){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_40762 = [null,null,null,null,null,null,null,null];
(statearr_40762[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_40762[(1)] = (1));

return statearr_40762;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_40742){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_40742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e40763){if((e40763 instanceof Object)){
var ex__20103__auto__ = e40763;
var statearr_40764_40785 = state_40742;
(statearr_40764_40785[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40786 = state_40742;
state_40742 = G__40786;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_40742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_40742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___40770))
})();
var state__20166__auto__ = (function (){var statearr_40765 = f__20165__auto__.call(null);
(statearr_40765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___40770);

return statearr_40765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___40770))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__40970){
var vec__40971 = p__40970;
var v = cljs.core.nth.call(null,vec__40971,(0),null);
var p = cljs.core.nth.call(null,vec__40971,(1),null);
var job = vec__40971;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20164__auto___41153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___41153,res,vec__40971,v,p,job,jobs,results){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___41153,res,vec__40971,v,p,job,jobs,results){
return (function (state_40976){
var state_val_40977 = (state_40976[(1)]);
if((state_val_40977 === (1))){
var state_40976__$1 = state_40976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40976__$1,(2),res,v);
} else {
if((state_val_40977 === (2))){
var inst_40973 = (state_40976[(2)]);
var inst_40974 = cljs.core.async.close_BANG_.call(null,res);
var state_40976__$1 = (function (){var statearr_40978 = state_40976;
(statearr_40978[(7)] = inst_40973);

return statearr_40978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40976__$1,inst_40974);
} else {
return null;
}
}
});})(c__20164__auto___41153,res,vec__40971,v,p,job,jobs,results))
;
return ((function (switch__20099__auto__,c__20164__auto___41153,res,vec__40971,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_40982 = [null,null,null,null,null,null,null,null];
(statearr_40982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_40982[(1)] = (1));

return statearr_40982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_40976){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_40976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e40983){if((e40983 instanceof Object)){
var ex__20103__auto__ = e40983;
var statearr_40984_41154 = state_40976;
(statearr_40984_41154[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41155 = state_40976;
state_40976 = G__41155;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_40976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_40976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___41153,res,vec__40971,v,p,job,jobs,results))
})();
var state__20166__auto__ = (function (){var statearr_40985 = f__20165__auto__.call(null);
(statearr_40985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___41153);

return statearr_40985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___41153,res,vec__40971,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40986){
var vec__40987 = p__40986;
var v = cljs.core.nth.call(null,vec__40987,(0),null);
var p = cljs.core.nth.call(null,vec__40987,(1),null);
var job = vec__40987;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17235__auto___41156 = n;
var __41157 = (0);
while(true){
if((__41157 < n__17235__auto___41156)){
var G__40988_41158 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40988_41158) {
case "compute":
var c__20164__auto___41160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41157,c__20164__auto___41160,G__40988_41158,n__17235__auto___41156,jobs,results,process,async){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (__41157,c__20164__auto___41160,G__40988_41158,n__17235__auto___41156,jobs,results,process,async){
return (function (state_41001){
var state_val_41002 = (state_41001[(1)]);
if((state_val_41002 === (1))){
var state_41001__$1 = state_41001;
var statearr_41003_41161 = state_41001__$1;
(statearr_41003_41161[(2)] = null);

(statearr_41003_41161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (2))){
var state_41001__$1 = state_41001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41001__$1,(4),jobs);
} else {
if((state_val_41002 === (3))){
var inst_40999 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41001__$1,inst_40999);
} else {
if((state_val_41002 === (4))){
var inst_40991 = (state_41001[(2)]);
var inst_40992 = process.call(null,inst_40991);
var state_41001__$1 = state_41001;
if(cljs.core.truth_(inst_40992)){
var statearr_41004_41162 = state_41001__$1;
(statearr_41004_41162[(1)] = (5));

} else {
var statearr_41005_41163 = state_41001__$1;
(statearr_41005_41163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (5))){
var state_41001__$1 = state_41001;
var statearr_41006_41164 = state_41001__$1;
(statearr_41006_41164[(2)] = null);

(statearr_41006_41164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (6))){
var state_41001__$1 = state_41001;
var statearr_41007_41165 = state_41001__$1;
(statearr_41007_41165[(2)] = null);

(statearr_41007_41165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41002 === (7))){
var inst_40997 = (state_41001[(2)]);
var state_41001__$1 = state_41001;
var statearr_41008_41166 = state_41001__$1;
(statearr_41008_41166[(2)] = inst_40997);

(statearr_41008_41166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41157,c__20164__auto___41160,G__40988_41158,n__17235__auto___41156,jobs,results,process,async))
;
return ((function (__41157,switch__20099__auto__,c__20164__auto___41160,G__40988_41158,n__17235__auto___41156,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_41012 = [null,null,null,null,null,null,null];
(statearr_41012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_41012[(1)] = (1));

return statearr_41012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_41001){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_41001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e41013){if((e41013 instanceof Object)){
var ex__20103__auto__ = e41013;
var statearr_41014_41167 = state_41001;
(statearr_41014_41167[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41168 = state_41001;
state_41001 = G__41168;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_41001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_41001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(__41157,switch__20099__auto__,c__20164__auto___41160,G__40988_41158,n__17235__auto___41156,jobs,results,process,async))
})();
var state__20166__auto__ = (function (){var statearr_41015 = f__20165__auto__.call(null);
(statearr_41015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___41160);

return statearr_41015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(__41157,c__20164__auto___41160,G__40988_41158,n__17235__auto___41156,jobs,results,process,async))
);


break;
case "async":
var c__20164__auto___41169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41157,c__20164__auto___41169,G__40988_41158,n__17235__auto___41156,jobs,results,process,async){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (__41157,c__20164__auto___41169,G__40988_41158,n__17235__auto___41156,jobs,results,process,async){
return (function (state_41028){
var state_val_41029 = (state_41028[(1)]);
if((state_val_41029 === (1))){
var state_41028__$1 = state_41028;
var statearr_41030_41170 = state_41028__$1;
(statearr_41030_41170[(2)] = null);

(statearr_41030_41170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41029 === (2))){
var state_41028__$1 = state_41028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41028__$1,(4),jobs);
} else {
if((state_val_41029 === (3))){
var inst_41026 = (state_41028[(2)]);
var state_41028__$1 = state_41028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41028__$1,inst_41026);
} else {
if((state_val_41029 === (4))){
var inst_41018 = (state_41028[(2)]);
var inst_41019 = async.call(null,inst_41018);
var state_41028__$1 = state_41028;
if(cljs.core.truth_(inst_41019)){
var statearr_41031_41171 = state_41028__$1;
(statearr_41031_41171[(1)] = (5));

} else {
var statearr_41032_41172 = state_41028__$1;
(statearr_41032_41172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41029 === (5))){
var state_41028__$1 = state_41028;
var statearr_41033_41173 = state_41028__$1;
(statearr_41033_41173[(2)] = null);

(statearr_41033_41173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41029 === (6))){
var state_41028__$1 = state_41028;
var statearr_41034_41174 = state_41028__$1;
(statearr_41034_41174[(2)] = null);

(statearr_41034_41174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41029 === (7))){
var inst_41024 = (state_41028[(2)]);
var state_41028__$1 = state_41028;
var statearr_41035_41175 = state_41028__$1;
(statearr_41035_41175[(2)] = inst_41024);

(statearr_41035_41175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41157,c__20164__auto___41169,G__40988_41158,n__17235__auto___41156,jobs,results,process,async))
;
return ((function (__41157,switch__20099__auto__,c__20164__auto___41169,G__40988_41158,n__17235__auto___41156,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_41039 = [null,null,null,null,null,null,null];
(statearr_41039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_41039[(1)] = (1));

return statearr_41039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_41028){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_41028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e41040){if((e41040 instanceof Object)){
var ex__20103__auto__ = e41040;
var statearr_41041_41176 = state_41028;
(statearr_41041_41176[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41177 = state_41028;
state_41028 = G__41177;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_41028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_41028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(__41157,switch__20099__auto__,c__20164__auto___41169,G__40988_41158,n__17235__auto___41156,jobs,results,process,async))
})();
var state__20166__auto__ = (function (){var statearr_41042 = f__20165__auto__.call(null);
(statearr_41042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___41169);

return statearr_41042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(__41157,c__20164__auto___41169,G__40988_41158,n__17235__auto___41156,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41178 = (__41157 + (1));
__41157 = G__41178;
continue;
} else {
}
break;
}

var c__20164__auto___41179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___41179,jobs,results,process,async){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___41179,jobs,results,process,async){
return (function (state_41064){
var state_val_41065 = (state_41064[(1)]);
if((state_val_41065 === (1))){
var state_41064__$1 = state_41064;
var statearr_41066_41180 = state_41064__$1;
(statearr_41066_41180[(2)] = null);

(statearr_41066_41180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (2))){
var state_41064__$1 = state_41064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41064__$1,(4),from);
} else {
if((state_val_41065 === (3))){
var inst_41062 = (state_41064[(2)]);
var state_41064__$1 = state_41064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41064__$1,inst_41062);
} else {
if((state_val_41065 === (4))){
var inst_41045 = (state_41064[(7)]);
var inst_41045__$1 = (state_41064[(2)]);
var inst_41046 = (inst_41045__$1 == null);
var state_41064__$1 = (function (){var statearr_41067 = state_41064;
(statearr_41067[(7)] = inst_41045__$1);

return statearr_41067;
})();
if(cljs.core.truth_(inst_41046)){
var statearr_41068_41181 = state_41064__$1;
(statearr_41068_41181[(1)] = (5));

} else {
var statearr_41069_41182 = state_41064__$1;
(statearr_41069_41182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (5))){
var inst_41048 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41064__$1 = state_41064;
var statearr_41070_41183 = state_41064__$1;
(statearr_41070_41183[(2)] = inst_41048);

(statearr_41070_41183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (6))){
var inst_41050 = (state_41064[(8)]);
var inst_41045 = (state_41064[(7)]);
var inst_41050__$1 = cljs.core.async.chan.call(null,(1));
var inst_41051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41052 = [inst_41045,inst_41050__$1];
var inst_41053 = (new cljs.core.PersistentVector(null,2,(5),inst_41051,inst_41052,null));
var state_41064__$1 = (function (){var statearr_41071 = state_41064;
(statearr_41071[(8)] = inst_41050__$1);

return statearr_41071;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41064__$1,(8),jobs,inst_41053);
} else {
if((state_val_41065 === (7))){
var inst_41060 = (state_41064[(2)]);
var state_41064__$1 = state_41064;
var statearr_41072_41184 = state_41064__$1;
(statearr_41072_41184[(2)] = inst_41060);

(statearr_41072_41184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (8))){
var inst_41050 = (state_41064[(8)]);
var inst_41055 = (state_41064[(2)]);
var state_41064__$1 = (function (){var statearr_41073 = state_41064;
(statearr_41073[(9)] = inst_41055);

return statearr_41073;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41064__$1,(9),results,inst_41050);
} else {
if((state_val_41065 === (9))){
var inst_41057 = (state_41064[(2)]);
var state_41064__$1 = (function (){var statearr_41074 = state_41064;
(statearr_41074[(10)] = inst_41057);

return statearr_41074;
})();
var statearr_41075_41185 = state_41064__$1;
(statearr_41075_41185[(2)] = null);

(statearr_41075_41185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___41179,jobs,results,process,async))
;
return ((function (switch__20099__auto__,c__20164__auto___41179,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_41079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_41079[(1)] = (1));

return statearr_41079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_41064){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_41064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e41080){if((e41080 instanceof Object)){
var ex__20103__auto__ = e41080;
var statearr_41081_41186 = state_41064;
(statearr_41081_41186[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41187 = state_41064;
state_41064 = G__41187;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_41064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_41064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___41179,jobs,results,process,async))
})();
var state__20166__auto__ = (function (){var statearr_41082 = f__20165__auto__.call(null);
(statearr_41082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___41179);

return statearr_41082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___41179,jobs,results,process,async))
);


var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__,jobs,results,process,async){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__,jobs,results,process,async){
return (function (state_41120){
var state_val_41121 = (state_41120[(1)]);
if((state_val_41121 === (7))){
var inst_41116 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41122_41188 = state_41120__$1;
(statearr_41122_41188[(2)] = inst_41116);

(statearr_41122_41188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (20))){
var state_41120__$1 = state_41120;
var statearr_41123_41189 = state_41120__$1;
(statearr_41123_41189[(2)] = null);

(statearr_41123_41189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (1))){
var state_41120__$1 = state_41120;
var statearr_41124_41190 = state_41120__$1;
(statearr_41124_41190[(2)] = null);

(statearr_41124_41190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (4))){
var inst_41085 = (state_41120[(7)]);
var inst_41085__$1 = (state_41120[(2)]);
var inst_41086 = (inst_41085__$1 == null);
var state_41120__$1 = (function (){var statearr_41125 = state_41120;
(statearr_41125[(7)] = inst_41085__$1);

return statearr_41125;
})();
if(cljs.core.truth_(inst_41086)){
var statearr_41126_41191 = state_41120__$1;
(statearr_41126_41191[(1)] = (5));

} else {
var statearr_41127_41192 = state_41120__$1;
(statearr_41127_41192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (15))){
var inst_41098 = (state_41120[(8)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41120__$1,(18),to,inst_41098);
} else {
if((state_val_41121 === (21))){
var inst_41111 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41128_41193 = state_41120__$1;
(statearr_41128_41193[(2)] = inst_41111);

(statearr_41128_41193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (13))){
var inst_41113 = (state_41120[(2)]);
var state_41120__$1 = (function (){var statearr_41129 = state_41120;
(statearr_41129[(9)] = inst_41113);

return statearr_41129;
})();
var statearr_41130_41194 = state_41120__$1;
(statearr_41130_41194[(2)] = null);

(statearr_41130_41194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (6))){
var inst_41085 = (state_41120[(7)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41120__$1,(11),inst_41085);
} else {
if((state_val_41121 === (17))){
var inst_41106 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
if(cljs.core.truth_(inst_41106)){
var statearr_41131_41195 = state_41120__$1;
(statearr_41131_41195[(1)] = (19));

} else {
var statearr_41132_41196 = state_41120__$1;
(statearr_41132_41196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (3))){
var inst_41118 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41120__$1,inst_41118);
} else {
if((state_val_41121 === (12))){
var inst_41095 = (state_41120[(10)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41120__$1,(14),inst_41095);
} else {
if((state_val_41121 === (2))){
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41120__$1,(4),results);
} else {
if((state_val_41121 === (19))){
var state_41120__$1 = state_41120;
var statearr_41133_41197 = state_41120__$1;
(statearr_41133_41197[(2)] = null);

(statearr_41133_41197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (11))){
var inst_41095 = (state_41120[(2)]);
var state_41120__$1 = (function (){var statearr_41134 = state_41120;
(statearr_41134[(10)] = inst_41095);

return statearr_41134;
})();
var statearr_41135_41198 = state_41120__$1;
(statearr_41135_41198[(2)] = null);

(statearr_41135_41198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (9))){
var state_41120__$1 = state_41120;
var statearr_41136_41199 = state_41120__$1;
(statearr_41136_41199[(2)] = null);

(statearr_41136_41199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (5))){
var state_41120__$1 = state_41120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41137_41200 = state_41120__$1;
(statearr_41137_41200[(1)] = (8));

} else {
var statearr_41138_41201 = state_41120__$1;
(statearr_41138_41201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (14))){
var inst_41098 = (state_41120[(8)]);
var inst_41100 = (state_41120[(11)]);
var inst_41098__$1 = (state_41120[(2)]);
var inst_41099 = (inst_41098__$1 == null);
var inst_41100__$1 = cljs.core.not.call(null,inst_41099);
var state_41120__$1 = (function (){var statearr_41139 = state_41120;
(statearr_41139[(8)] = inst_41098__$1);

(statearr_41139[(11)] = inst_41100__$1);

return statearr_41139;
})();
if(inst_41100__$1){
var statearr_41140_41202 = state_41120__$1;
(statearr_41140_41202[(1)] = (15));

} else {
var statearr_41141_41203 = state_41120__$1;
(statearr_41141_41203[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (16))){
var inst_41100 = (state_41120[(11)]);
var state_41120__$1 = state_41120;
var statearr_41142_41204 = state_41120__$1;
(statearr_41142_41204[(2)] = inst_41100);

(statearr_41142_41204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (10))){
var inst_41092 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41143_41205 = state_41120__$1;
(statearr_41143_41205[(2)] = inst_41092);

(statearr_41143_41205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (18))){
var inst_41103 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41144_41206 = state_41120__$1;
(statearr_41144_41206[(2)] = inst_41103);

(statearr_41144_41206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (8))){
var inst_41089 = cljs.core.async.close_BANG_.call(null,to);
var state_41120__$1 = state_41120;
var statearr_41145_41207 = state_41120__$1;
(statearr_41145_41207[(2)] = inst_41089);

(statearr_41145_41207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto__,jobs,results,process,async))
;
return ((function (switch__20099__auto__,c__20164__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_41149 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_41149[(1)] = (1));

return statearr_41149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_41120){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_41120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e41150){if((e41150 instanceof Object)){
var ex__20103__auto__ = e41150;
var statearr_41151_41208 = state_41120;
(statearr_41151_41208[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41209 = state_41120;
state_41120 = G__41209;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_41120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_41120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__,jobs,results,process,async))
})();
var state__20166__auto__ = (function (){var statearr_41152 = f__20165__auto__.call(null);
(statearr_41152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_41152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__,jobs,results,process,async))
);

return c__20164__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args41210 = [];
var len__17390__auto___41213 = arguments.length;
var i__17391__auto___41214 = (0);
while(true){
if((i__17391__auto___41214 < len__17390__auto___41213)){
args41210.push((arguments[i__17391__auto___41214]));

var G__41215 = (i__17391__auto___41214 + (1));
i__17391__auto___41214 = G__41215;
continue;
} else {
}
break;
}

var G__41212 = args41210.length;
switch (G__41212) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41210.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args41217 = [];
var len__17390__auto___41220 = arguments.length;
var i__17391__auto___41221 = (0);
while(true){
if((i__17391__auto___41221 < len__17390__auto___41220)){
args41217.push((arguments[i__17391__auto___41221]));

var G__41222 = (i__17391__auto___41221 + (1));
i__17391__auto___41221 = G__41222;
continue;
} else {
}
break;
}

var G__41219 = args41217.length;
switch (G__41219) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41217.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args41224 = [];
var len__17390__auto___41277 = arguments.length;
var i__17391__auto___41278 = (0);
while(true){
if((i__17391__auto___41278 < len__17390__auto___41277)){
args41224.push((arguments[i__17391__auto___41278]));

var G__41279 = (i__17391__auto___41278 + (1));
i__17391__auto___41278 = G__41279;
continue;
} else {
}
break;
}

var G__41226 = args41224.length;
switch (G__41226) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41224.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20164__auto___41281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___41281,tc,fc){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___41281,tc,fc){
return (function (state_41252){
var state_val_41253 = (state_41252[(1)]);
if((state_val_41253 === (7))){
var inst_41248 = (state_41252[(2)]);
var state_41252__$1 = state_41252;
var statearr_41254_41282 = state_41252__$1;
(statearr_41254_41282[(2)] = inst_41248);

(statearr_41254_41282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (1))){
var state_41252__$1 = state_41252;
var statearr_41255_41283 = state_41252__$1;
(statearr_41255_41283[(2)] = null);

(statearr_41255_41283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (4))){
var inst_41229 = (state_41252[(7)]);
var inst_41229__$1 = (state_41252[(2)]);
var inst_41230 = (inst_41229__$1 == null);
var state_41252__$1 = (function (){var statearr_41256 = state_41252;
(statearr_41256[(7)] = inst_41229__$1);

return statearr_41256;
})();
if(cljs.core.truth_(inst_41230)){
var statearr_41257_41284 = state_41252__$1;
(statearr_41257_41284[(1)] = (5));

} else {
var statearr_41258_41285 = state_41252__$1;
(statearr_41258_41285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (13))){
var state_41252__$1 = state_41252;
var statearr_41259_41286 = state_41252__$1;
(statearr_41259_41286[(2)] = null);

(statearr_41259_41286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (6))){
var inst_41229 = (state_41252[(7)]);
var inst_41235 = p.call(null,inst_41229);
var state_41252__$1 = state_41252;
if(cljs.core.truth_(inst_41235)){
var statearr_41260_41287 = state_41252__$1;
(statearr_41260_41287[(1)] = (9));

} else {
var statearr_41261_41288 = state_41252__$1;
(statearr_41261_41288[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (3))){
var inst_41250 = (state_41252[(2)]);
var state_41252__$1 = state_41252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41252__$1,inst_41250);
} else {
if((state_val_41253 === (12))){
var state_41252__$1 = state_41252;
var statearr_41262_41289 = state_41252__$1;
(statearr_41262_41289[(2)] = null);

(statearr_41262_41289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (2))){
var state_41252__$1 = state_41252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41252__$1,(4),ch);
} else {
if((state_val_41253 === (11))){
var inst_41229 = (state_41252[(7)]);
var inst_41239 = (state_41252[(2)]);
var state_41252__$1 = state_41252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41252__$1,(8),inst_41239,inst_41229);
} else {
if((state_val_41253 === (9))){
var state_41252__$1 = state_41252;
var statearr_41263_41290 = state_41252__$1;
(statearr_41263_41290[(2)] = tc);

(statearr_41263_41290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (5))){
var inst_41232 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41233 = cljs.core.async.close_BANG_.call(null,fc);
var state_41252__$1 = (function (){var statearr_41264 = state_41252;
(statearr_41264[(8)] = inst_41232);

return statearr_41264;
})();
var statearr_41265_41291 = state_41252__$1;
(statearr_41265_41291[(2)] = inst_41233);

(statearr_41265_41291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (14))){
var inst_41246 = (state_41252[(2)]);
var state_41252__$1 = state_41252;
var statearr_41266_41292 = state_41252__$1;
(statearr_41266_41292[(2)] = inst_41246);

(statearr_41266_41292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (10))){
var state_41252__$1 = state_41252;
var statearr_41267_41293 = state_41252__$1;
(statearr_41267_41293[(2)] = fc);

(statearr_41267_41293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41253 === (8))){
var inst_41241 = (state_41252[(2)]);
var state_41252__$1 = state_41252;
if(cljs.core.truth_(inst_41241)){
var statearr_41268_41294 = state_41252__$1;
(statearr_41268_41294[(1)] = (12));

} else {
var statearr_41269_41295 = state_41252__$1;
(statearr_41269_41295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___41281,tc,fc))
;
return ((function (switch__20099__auto__,c__20164__auto___41281,tc,fc){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_41273 = [null,null,null,null,null,null,null,null,null];
(statearr_41273[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_41273[(1)] = (1));

return statearr_41273;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_41252){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_41252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e41274){if((e41274 instanceof Object)){
var ex__20103__auto__ = e41274;
var statearr_41275_41296 = state_41252;
(statearr_41275_41296[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41297 = state_41252;
state_41252 = G__41297;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_41252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_41252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___41281,tc,fc))
})();
var state__20166__auto__ = (function (){var statearr_41276 = f__20165__auto__.call(null);
(statearr_41276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___41281);

return statearr_41276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___41281,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__){
return (function (state_41344){
var state_val_41345 = (state_41344[(1)]);
if((state_val_41345 === (1))){
var inst_41330 = init;
var state_41344__$1 = (function (){var statearr_41346 = state_41344;
(statearr_41346[(7)] = inst_41330);

return statearr_41346;
})();
var statearr_41347_41362 = state_41344__$1;
(statearr_41347_41362[(2)] = null);

(statearr_41347_41362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41345 === (2))){
var state_41344__$1 = state_41344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41344__$1,(4),ch);
} else {
if((state_val_41345 === (3))){
var inst_41342 = (state_41344[(2)]);
var state_41344__$1 = state_41344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41344__$1,inst_41342);
} else {
if((state_val_41345 === (4))){
var inst_41333 = (state_41344[(8)]);
var inst_41333__$1 = (state_41344[(2)]);
var inst_41334 = (inst_41333__$1 == null);
var state_41344__$1 = (function (){var statearr_41348 = state_41344;
(statearr_41348[(8)] = inst_41333__$1);

return statearr_41348;
})();
if(cljs.core.truth_(inst_41334)){
var statearr_41349_41363 = state_41344__$1;
(statearr_41349_41363[(1)] = (5));

} else {
var statearr_41350_41364 = state_41344__$1;
(statearr_41350_41364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41345 === (5))){
var inst_41330 = (state_41344[(7)]);
var state_41344__$1 = state_41344;
var statearr_41351_41365 = state_41344__$1;
(statearr_41351_41365[(2)] = inst_41330);

(statearr_41351_41365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41345 === (6))){
var inst_41330 = (state_41344[(7)]);
var inst_41333 = (state_41344[(8)]);
var inst_41337 = f.call(null,inst_41330,inst_41333);
var inst_41330__$1 = inst_41337;
var state_41344__$1 = (function (){var statearr_41352 = state_41344;
(statearr_41352[(7)] = inst_41330__$1);

return statearr_41352;
})();
var statearr_41353_41366 = state_41344__$1;
(statearr_41353_41366[(2)] = null);

(statearr_41353_41366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41345 === (7))){
var inst_41340 = (state_41344[(2)]);
var state_41344__$1 = state_41344;
var statearr_41354_41367 = state_41344__$1;
(statearr_41354_41367[(2)] = inst_41340);

(statearr_41354_41367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20164__auto__))
;
return ((function (switch__20099__auto__,c__20164__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20100__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20100__auto____0 = (function (){
var statearr_41358 = [null,null,null,null,null,null,null,null,null];
(statearr_41358[(0)] = cljs$core$async$reduce_$_state_machine__20100__auto__);

(statearr_41358[(1)] = (1));

return statearr_41358;
});
var cljs$core$async$reduce_$_state_machine__20100__auto____1 = (function (state_41344){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_41344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e41359){if((e41359 instanceof Object)){
var ex__20103__auto__ = e41359;
var statearr_41360_41368 = state_41344;
(statearr_41360_41368[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41369 = state_41344;
state_41344 = G__41369;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20100__auto__ = function(state_41344){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20100__auto____1.call(this,state_41344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20100__auto____0;
cljs$core$async$reduce_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20100__auto____1;
return cljs$core$async$reduce_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_41361 = f__20165__auto__.call(null);
(statearr_41361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_41361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__))
);

return c__20164__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args41370 = [];
var len__17390__auto___41422 = arguments.length;
var i__17391__auto___41423 = (0);
while(true){
if((i__17391__auto___41423 < len__17390__auto___41422)){
args41370.push((arguments[i__17391__auto___41423]));

var G__41424 = (i__17391__auto___41423 + (1));
i__17391__auto___41423 = G__41424;
continue;
} else {
}
break;
}

var G__41372 = args41370.length;
switch (G__41372) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41370.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__){
return (function (state_41397){
var state_val_41398 = (state_41397[(1)]);
if((state_val_41398 === (7))){
var inst_41379 = (state_41397[(2)]);
var state_41397__$1 = state_41397;
var statearr_41399_41426 = state_41397__$1;
(statearr_41399_41426[(2)] = inst_41379);

(statearr_41399_41426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (1))){
var inst_41373 = cljs.core.seq.call(null,coll);
var inst_41374 = inst_41373;
var state_41397__$1 = (function (){var statearr_41400 = state_41397;
(statearr_41400[(7)] = inst_41374);

return statearr_41400;
})();
var statearr_41401_41427 = state_41397__$1;
(statearr_41401_41427[(2)] = null);

(statearr_41401_41427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (4))){
var inst_41374 = (state_41397[(7)]);
var inst_41377 = cljs.core.first.call(null,inst_41374);
var state_41397__$1 = state_41397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41397__$1,(7),ch,inst_41377);
} else {
if((state_val_41398 === (13))){
var inst_41391 = (state_41397[(2)]);
var state_41397__$1 = state_41397;
var statearr_41402_41428 = state_41397__$1;
(statearr_41402_41428[(2)] = inst_41391);

(statearr_41402_41428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (6))){
var inst_41382 = (state_41397[(2)]);
var state_41397__$1 = state_41397;
if(cljs.core.truth_(inst_41382)){
var statearr_41403_41429 = state_41397__$1;
(statearr_41403_41429[(1)] = (8));

} else {
var statearr_41404_41430 = state_41397__$1;
(statearr_41404_41430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (3))){
var inst_41395 = (state_41397[(2)]);
var state_41397__$1 = state_41397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41397__$1,inst_41395);
} else {
if((state_val_41398 === (12))){
var state_41397__$1 = state_41397;
var statearr_41405_41431 = state_41397__$1;
(statearr_41405_41431[(2)] = null);

(statearr_41405_41431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (2))){
var inst_41374 = (state_41397[(7)]);
var state_41397__$1 = state_41397;
if(cljs.core.truth_(inst_41374)){
var statearr_41406_41432 = state_41397__$1;
(statearr_41406_41432[(1)] = (4));

} else {
var statearr_41407_41433 = state_41397__$1;
(statearr_41407_41433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (11))){
var inst_41388 = cljs.core.async.close_BANG_.call(null,ch);
var state_41397__$1 = state_41397;
var statearr_41408_41434 = state_41397__$1;
(statearr_41408_41434[(2)] = inst_41388);

(statearr_41408_41434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (9))){
var state_41397__$1 = state_41397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41409_41435 = state_41397__$1;
(statearr_41409_41435[(1)] = (11));

} else {
var statearr_41410_41436 = state_41397__$1;
(statearr_41410_41436[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (5))){
var inst_41374 = (state_41397[(7)]);
var state_41397__$1 = state_41397;
var statearr_41411_41437 = state_41397__$1;
(statearr_41411_41437[(2)] = inst_41374);

(statearr_41411_41437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (10))){
var inst_41393 = (state_41397[(2)]);
var state_41397__$1 = state_41397;
var statearr_41412_41438 = state_41397__$1;
(statearr_41412_41438[(2)] = inst_41393);

(statearr_41412_41438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41398 === (8))){
var inst_41374 = (state_41397[(7)]);
var inst_41384 = cljs.core.next.call(null,inst_41374);
var inst_41374__$1 = inst_41384;
var state_41397__$1 = (function (){var statearr_41413 = state_41397;
(statearr_41413[(7)] = inst_41374__$1);

return statearr_41413;
})();
var statearr_41414_41439 = state_41397__$1;
(statearr_41414_41439[(2)] = null);

(statearr_41414_41439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto__))
;
return ((function (switch__20099__auto__,c__20164__auto__){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_41418 = [null,null,null,null,null,null,null,null];
(statearr_41418[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_41418[(1)] = (1));

return statearr_41418;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_41397){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_41397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e41419){if((e41419 instanceof Object)){
var ex__20103__auto__ = e41419;
var statearr_41420_41440 = state_41397;
(statearr_41420_41440[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41441 = state_41397;
state_41397 = G__41441;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_41397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_41397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_41421 = f__20165__auto__.call(null);
(statearr_41421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_41421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__))
);

return c__20164__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16987__auto__ = (((_ == null))?null:_);
var m__16988__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,_);
} else {
var m__16988__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16988__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,ch);
} else {
var m__16988__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m);
} else {
var m__16988__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41663 = (function (mult,ch,cs,meta41664){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41664 = meta41664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41665,meta41664__$1){
var self__ = this;
var _41665__$1 = this;
return (new cljs.core.async.t_cljs$core$async41663(self__.mult,self__.ch,self__.cs,meta41664__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41665){
var self__ = this;
var _41665__$1 = this;
return self__.meta41664;
});})(cs))
;

cljs.core.async.t_cljs$core$async41663.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41663.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41663.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41663.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41663.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41663.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41664","meta41664",1691715867,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41663";

cljs.core.async.t_cljs$core$async41663.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async41663");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41663 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41663(mult__$1,ch__$1,cs__$1,meta41664){
return (new cljs.core.async.t_cljs$core$async41663(mult__$1,ch__$1,cs__$1,meta41664));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41663(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20164__auto___41884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___41884,cs,m,dchan,dctr,done){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___41884,cs,m,dchan,dctr,done){
return (function (state_41796){
var state_val_41797 = (state_41796[(1)]);
if((state_val_41797 === (7))){
var inst_41792 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41798_41885 = state_41796__$1;
(statearr_41798_41885[(2)] = inst_41792);

(statearr_41798_41885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (20))){
var inst_41697 = (state_41796[(7)]);
var inst_41707 = cljs.core.first.call(null,inst_41697);
var inst_41708 = cljs.core.nth.call(null,inst_41707,(0),null);
var inst_41709 = cljs.core.nth.call(null,inst_41707,(1),null);
var state_41796__$1 = (function (){var statearr_41799 = state_41796;
(statearr_41799[(8)] = inst_41708);

return statearr_41799;
})();
if(cljs.core.truth_(inst_41709)){
var statearr_41800_41886 = state_41796__$1;
(statearr_41800_41886[(1)] = (22));

} else {
var statearr_41801_41887 = state_41796__$1;
(statearr_41801_41887[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (27))){
var inst_41737 = (state_41796[(9)]);
var inst_41739 = (state_41796[(10)]);
var inst_41744 = (state_41796[(11)]);
var inst_41668 = (state_41796[(12)]);
var inst_41744__$1 = cljs.core._nth.call(null,inst_41737,inst_41739);
var inst_41745 = cljs.core.async.put_BANG_.call(null,inst_41744__$1,inst_41668,done);
var state_41796__$1 = (function (){var statearr_41802 = state_41796;
(statearr_41802[(11)] = inst_41744__$1);

return statearr_41802;
})();
if(cljs.core.truth_(inst_41745)){
var statearr_41803_41888 = state_41796__$1;
(statearr_41803_41888[(1)] = (30));

} else {
var statearr_41804_41889 = state_41796__$1;
(statearr_41804_41889[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (1))){
var state_41796__$1 = state_41796;
var statearr_41805_41890 = state_41796__$1;
(statearr_41805_41890[(2)] = null);

(statearr_41805_41890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (24))){
var inst_41697 = (state_41796[(7)]);
var inst_41714 = (state_41796[(2)]);
var inst_41715 = cljs.core.next.call(null,inst_41697);
var inst_41677 = inst_41715;
var inst_41678 = null;
var inst_41679 = (0);
var inst_41680 = (0);
var state_41796__$1 = (function (){var statearr_41806 = state_41796;
(statearr_41806[(13)] = inst_41680);

(statearr_41806[(14)] = inst_41677);

(statearr_41806[(15)] = inst_41714);

(statearr_41806[(16)] = inst_41678);

(statearr_41806[(17)] = inst_41679);

return statearr_41806;
})();
var statearr_41807_41891 = state_41796__$1;
(statearr_41807_41891[(2)] = null);

(statearr_41807_41891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (39))){
var state_41796__$1 = state_41796;
var statearr_41811_41892 = state_41796__$1;
(statearr_41811_41892[(2)] = null);

(statearr_41811_41892[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (4))){
var inst_41668 = (state_41796[(12)]);
var inst_41668__$1 = (state_41796[(2)]);
var inst_41669 = (inst_41668__$1 == null);
var state_41796__$1 = (function (){var statearr_41812 = state_41796;
(statearr_41812[(12)] = inst_41668__$1);

return statearr_41812;
})();
if(cljs.core.truth_(inst_41669)){
var statearr_41813_41893 = state_41796__$1;
(statearr_41813_41893[(1)] = (5));

} else {
var statearr_41814_41894 = state_41796__$1;
(statearr_41814_41894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (15))){
var inst_41680 = (state_41796[(13)]);
var inst_41677 = (state_41796[(14)]);
var inst_41678 = (state_41796[(16)]);
var inst_41679 = (state_41796[(17)]);
var inst_41693 = (state_41796[(2)]);
var inst_41694 = (inst_41680 + (1));
var tmp41808 = inst_41677;
var tmp41809 = inst_41678;
var tmp41810 = inst_41679;
var inst_41677__$1 = tmp41808;
var inst_41678__$1 = tmp41809;
var inst_41679__$1 = tmp41810;
var inst_41680__$1 = inst_41694;
var state_41796__$1 = (function (){var statearr_41815 = state_41796;
(statearr_41815[(13)] = inst_41680__$1);

(statearr_41815[(14)] = inst_41677__$1);

(statearr_41815[(18)] = inst_41693);

(statearr_41815[(16)] = inst_41678__$1);

(statearr_41815[(17)] = inst_41679__$1);

return statearr_41815;
})();
var statearr_41816_41895 = state_41796__$1;
(statearr_41816_41895[(2)] = null);

(statearr_41816_41895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (21))){
var inst_41718 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41820_41896 = state_41796__$1;
(statearr_41820_41896[(2)] = inst_41718);

(statearr_41820_41896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (31))){
var inst_41744 = (state_41796[(11)]);
var inst_41748 = done.call(null,null);
var inst_41749 = cljs.core.async.untap_STAR_.call(null,m,inst_41744);
var state_41796__$1 = (function (){var statearr_41821 = state_41796;
(statearr_41821[(19)] = inst_41748);

return statearr_41821;
})();
var statearr_41822_41897 = state_41796__$1;
(statearr_41822_41897[(2)] = inst_41749);

(statearr_41822_41897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (32))){
var inst_41737 = (state_41796[(9)]);
var inst_41736 = (state_41796[(20)]);
var inst_41739 = (state_41796[(10)]);
var inst_41738 = (state_41796[(21)]);
var inst_41751 = (state_41796[(2)]);
var inst_41752 = (inst_41739 + (1));
var tmp41817 = inst_41737;
var tmp41818 = inst_41736;
var tmp41819 = inst_41738;
var inst_41736__$1 = tmp41818;
var inst_41737__$1 = tmp41817;
var inst_41738__$1 = tmp41819;
var inst_41739__$1 = inst_41752;
var state_41796__$1 = (function (){var statearr_41823 = state_41796;
(statearr_41823[(9)] = inst_41737__$1);

(statearr_41823[(20)] = inst_41736__$1);

(statearr_41823[(10)] = inst_41739__$1);

(statearr_41823[(22)] = inst_41751);

(statearr_41823[(21)] = inst_41738__$1);

return statearr_41823;
})();
var statearr_41824_41898 = state_41796__$1;
(statearr_41824_41898[(2)] = null);

(statearr_41824_41898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (40))){
var inst_41764 = (state_41796[(23)]);
var inst_41768 = done.call(null,null);
var inst_41769 = cljs.core.async.untap_STAR_.call(null,m,inst_41764);
var state_41796__$1 = (function (){var statearr_41825 = state_41796;
(statearr_41825[(24)] = inst_41768);

return statearr_41825;
})();
var statearr_41826_41899 = state_41796__$1;
(statearr_41826_41899[(2)] = inst_41769);

(statearr_41826_41899[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (33))){
var inst_41755 = (state_41796[(25)]);
var inst_41757 = cljs.core.chunked_seq_QMARK_.call(null,inst_41755);
var state_41796__$1 = state_41796;
if(inst_41757){
var statearr_41827_41900 = state_41796__$1;
(statearr_41827_41900[(1)] = (36));

} else {
var statearr_41828_41901 = state_41796__$1;
(statearr_41828_41901[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (13))){
var inst_41687 = (state_41796[(26)]);
var inst_41690 = cljs.core.async.close_BANG_.call(null,inst_41687);
var state_41796__$1 = state_41796;
var statearr_41829_41902 = state_41796__$1;
(statearr_41829_41902[(2)] = inst_41690);

(statearr_41829_41902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (22))){
var inst_41708 = (state_41796[(8)]);
var inst_41711 = cljs.core.async.close_BANG_.call(null,inst_41708);
var state_41796__$1 = state_41796;
var statearr_41830_41903 = state_41796__$1;
(statearr_41830_41903[(2)] = inst_41711);

(statearr_41830_41903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (36))){
var inst_41755 = (state_41796[(25)]);
var inst_41759 = cljs.core.chunk_first.call(null,inst_41755);
var inst_41760 = cljs.core.chunk_rest.call(null,inst_41755);
var inst_41761 = cljs.core.count.call(null,inst_41759);
var inst_41736 = inst_41760;
var inst_41737 = inst_41759;
var inst_41738 = inst_41761;
var inst_41739 = (0);
var state_41796__$1 = (function (){var statearr_41831 = state_41796;
(statearr_41831[(9)] = inst_41737);

(statearr_41831[(20)] = inst_41736);

(statearr_41831[(10)] = inst_41739);

(statearr_41831[(21)] = inst_41738);

return statearr_41831;
})();
var statearr_41832_41904 = state_41796__$1;
(statearr_41832_41904[(2)] = null);

(statearr_41832_41904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (41))){
var inst_41755 = (state_41796[(25)]);
var inst_41771 = (state_41796[(2)]);
var inst_41772 = cljs.core.next.call(null,inst_41755);
var inst_41736 = inst_41772;
var inst_41737 = null;
var inst_41738 = (0);
var inst_41739 = (0);
var state_41796__$1 = (function (){var statearr_41833 = state_41796;
(statearr_41833[(27)] = inst_41771);

(statearr_41833[(9)] = inst_41737);

(statearr_41833[(20)] = inst_41736);

(statearr_41833[(10)] = inst_41739);

(statearr_41833[(21)] = inst_41738);

return statearr_41833;
})();
var statearr_41834_41905 = state_41796__$1;
(statearr_41834_41905[(2)] = null);

(statearr_41834_41905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (43))){
var state_41796__$1 = state_41796;
var statearr_41835_41906 = state_41796__$1;
(statearr_41835_41906[(2)] = null);

(statearr_41835_41906[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (29))){
var inst_41780 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41836_41907 = state_41796__$1;
(statearr_41836_41907[(2)] = inst_41780);

(statearr_41836_41907[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (44))){
var inst_41789 = (state_41796[(2)]);
var state_41796__$1 = (function (){var statearr_41837 = state_41796;
(statearr_41837[(28)] = inst_41789);

return statearr_41837;
})();
var statearr_41838_41908 = state_41796__$1;
(statearr_41838_41908[(2)] = null);

(statearr_41838_41908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (6))){
var inst_41728 = (state_41796[(29)]);
var inst_41727 = cljs.core.deref.call(null,cs);
var inst_41728__$1 = cljs.core.keys.call(null,inst_41727);
var inst_41729 = cljs.core.count.call(null,inst_41728__$1);
var inst_41730 = cljs.core.reset_BANG_.call(null,dctr,inst_41729);
var inst_41735 = cljs.core.seq.call(null,inst_41728__$1);
var inst_41736 = inst_41735;
var inst_41737 = null;
var inst_41738 = (0);
var inst_41739 = (0);
var state_41796__$1 = (function (){var statearr_41839 = state_41796;
(statearr_41839[(9)] = inst_41737);

(statearr_41839[(20)] = inst_41736);

(statearr_41839[(10)] = inst_41739);

(statearr_41839[(30)] = inst_41730);

(statearr_41839[(21)] = inst_41738);

(statearr_41839[(29)] = inst_41728__$1);

return statearr_41839;
})();
var statearr_41840_41909 = state_41796__$1;
(statearr_41840_41909[(2)] = null);

(statearr_41840_41909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (28))){
var inst_41755 = (state_41796[(25)]);
var inst_41736 = (state_41796[(20)]);
var inst_41755__$1 = cljs.core.seq.call(null,inst_41736);
var state_41796__$1 = (function (){var statearr_41841 = state_41796;
(statearr_41841[(25)] = inst_41755__$1);

return statearr_41841;
})();
if(inst_41755__$1){
var statearr_41842_41910 = state_41796__$1;
(statearr_41842_41910[(1)] = (33));

} else {
var statearr_41843_41911 = state_41796__$1;
(statearr_41843_41911[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (25))){
var inst_41739 = (state_41796[(10)]);
var inst_41738 = (state_41796[(21)]);
var inst_41741 = (inst_41739 < inst_41738);
var inst_41742 = inst_41741;
var state_41796__$1 = state_41796;
if(cljs.core.truth_(inst_41742)){
var statearr_41844_41912 = state_41796__$1;
(statearr_41844_41912[(1)] = (27));

} else {
var statearr_41845_41913 = state_41796__$1;
(statearr_41845_41913[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (34))){
var state_41796__$1 = state_41796;
var statearr_41846_41914 = state_41796__$1;
(statearr_41846_41914[(2)] = null);

(statearr_41846_41914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (17))){
var state_41796__$1 = state_41796;
var statearr_41847_41915 = state_41796__$1;
(statearr_41847_41915[(2)] = null);

(statearr_41847_41915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (3))){
var inst_41794 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41796__$1,inst_41794);
} else {
if((state_val_41797 === (12))){
var inst_41723 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41848_41916 = state_41796__$1;
(statearr_41848_41916[(2)] = inst_41723);

(statearr_41848_41916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (2))){
var state_41796__$1 = state_41796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41796__$1,(4),ch);
} else {
if((state_val_41797 === (23))){
var state_41796__$1 = state_41796;
var statearr_41849_41917 = state_41796__$1;
(statearr_41849_41917[(2)] = null);

(statearr_41849_41917[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (35))){
var inst_41778 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41850_41918 = state_41796__$1;
(statearr_41850_41918[(2)] = inst_41778);

(statearr_41850_41918[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (19))){
var inst_41697 = (state_41796[(7)]);
var inst_41701 = cljs.core.chunk_first.call(null,inst_41697);
var inst_41702 = cljs.core.chunk_rest.call(null,inst_41697);
var inst_41703 = cljs.core.count.call(null,inst_41701);
var inst_41677 = inst_41702;
var inst_41678 = inst_41701;
var inst_41679 = inst_41703;
var inst_41680 = (0);
var state_41796__$1 = (function (){var statearr_41851 = state_41796;
(statearr_41851[(13)] = inst_41680);

(statearr_41851[(14)] = inst_41677);

(statearr_41851[(16)] = inst_41678);

(statearr_41851[(17)] = inst_41679);

return statearr_41851;
})();
var statearr_41852_41919 = state_41796__$1;
(statearr_41852_41919[(2)] = null);

(statearr_41852_41919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (11))){
var inst_41697 = (state_41796[(7)]);
var inst_41677 = (state_41796[(14)]);
var inst_41697__$1 = cljs.core.seq.call(null,inst_41677);
var state_41796__$1 = (function (){var statearr_41853 = state_41796;
(statearr_41853[(7)] = inst_41697__$1);

return statearr_41853;
})();
if(inst_41697__$1){
var statearr_41854_41920 = state_41796__$1;
(statearr_41854_41920[(1)] = (16));

} else {
var statearr_41855_41921 = state_41796__$1;
(statearr_41855_41921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (9))){
var inst_41725 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41856_41922 = state_41796__$1;
(statearr_41856_41922[(2)] = inst_41725);

(statearr_41856_41922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (5))){
var inst_41675 = cljs.core.deref.call(null,cs);
var inst_41676 = cljs.core.seq.call(null,inst_41675);
var inst_41677 = inst_41676;
var inst_41678 = null;
var inst_41679 = (0);
var inst_41680 = (0);
var state_41796__$1 = (function (){var statearr_41857 = state_41796;
(statearr_41857[(13)] = inst_41680);

(statearr_41857[(14)] = inst_41677);

(statearr_41857[(16)] = inst_41678);

(statearr_41857[(17)] = inst_41679);

return statearr_41857;
})();
var statearr_41858_41923 = state_41796__$1;
(statearr_41858_41923[(2)] = null);

(statearr_41858_41923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (14))){
var state_41796__$1 = state_41796;
var statearr_41859_41924 = state_41796__$1;
(statearr_41859_41924[(2)] = null);

(statearr_41859_41924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (45))){
var inst_41786 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41860_41925 = state_41796__$1;
(statearr_41860_41925[(2)] = inst_41786);

(statearr_41860_41925[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (26))){
var inst_41728 = (state_41796[(29)]);
var inst_41782 = (state_41796[(2)]);
var inst_41783 = cljs.core.seq.call(null,inst_41728);
var state_41796__$1 = (function (){var statearr_41861 = state_41796;
(statearr_41861[(31)] = inst_41782);

return statearr_41861;
})();
if(inst_41783){
var statearr_41862_41926 = state_41796__$1;
(statearr_41862_41926[(1)] = (42));

} else {
var statearr_41863_41927 = state_41796__$1;
(statearr_41863_41927[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (16))){
var inst_41697 = (state_41796[(7)]);
var inst_41699 = cljs.core.chunked_seq_QMARK_.call(null,inst_41697);
var state_41796__$1 = state_41796;
if(inst_41699){
var statearr_41864_41928 = state_41796__$1;
(statearr_41864_41928[(1)] = (19));

} else {
var statearr_41865_41929 = state_41796__$1;
(statearr_41865_41929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (38))){
var inst_41775 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41866_41930 = state_41796__$1;
(statearr_41866_41930[(2)] = inst_41775);

(statearr_41866_41930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (30))){
var state_41796__$1 = state_41796;
var statearr_41867_41931 = state_41796__$1;
(statearr_41867_41931[(2)] = null);

(statearr_41867_41931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (10))){
var inst_41680 = (state_41796[(13)]);
var inst_41678 = (state_41796[(16)]);
var inst_41686 = cljs.core._nth.call(null,inst_41678,inst_41680);
var inst_41687 = cljs.core.nth.call(null,inst_41686,(0),null);
var inst_41688 = cljs.core.nth.call(null,inst_41686,(1),null);
var state_41796__$1 = (function (){var statearr_41868 = state_41796;
(statearr_41868[(26)] = inst_41687);

return statearr_41868;
})();
if(cljs.core.truth_(inst_41688)){
var statearr_41869_41932 = state_41796__$1;
(statearr_41869_41932[(1)] = (13));

} else {
var statearr_41870_41933 = state_41796__$1;
(statearr_41870_41933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (18))){
var inst_41721 = (state_41796[(2)]);
var state_41796__$1 = state_41796;
var statearr_41871_41934 = state_41796__$1;
(statearr_41871_41934[(2)] = inst_41721);

(statearr_41871_41934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (42))){
var state_41796__$1 = state_41796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41796__$1,(45),dchan);
} else {
if((state_val_41797 === (37))){
var inst_41755 = (state_41796[(25)]);
var inst_41668 = (state_41796[(12)]);
var inst_41764 = (state_41796[(23)]);
var inst_41764__$1 = cljs.core.first.call(null,inst_41755);
var inst_41765 = cljs.core.async.put_BANG_.call(null,inst_41764__$1,inst_41668,done);
var state_41796__$1 = (function (){var statearr_41872 = state_41796;
(statearr_41872[(23)] = inst_41764__$1);

return statearr_41872;
})();
if(cljs.core.truth_(inst_41765)){
var statearr_41873_41935 = state_41796__$1;
(statearr_41873_41935[(1)] = (39));

} else {
var statearr_41874_41936 = state_41796__$1;
(statearr_41874_41936[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41797 === (8))){
var inst_41680 = (state_41796[(13)]);
var inst_41679 = (state_41796[(17)]);
var inst_41682 = (inst_41680 < inst_41679);
var inst_41683 = inst_41682;
var state_41796__$1 = state_41796;
if(cljs.core.truth_(inst_41683)){
var statearr_41875_41937 = state_41796__$1;
(statearr_41875_41937[(1)] = (10));

} else {
var statearr_41876_41938 = state_41796__$1;
(statearr_41876_41938[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___41884,cs,m,dchan,dctr,done))
;
return ((function (switch__20099__auto__,c__20164__auto___41884,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20100__auto__ = null;
var cljs$core$async$mult_$_state_machine__20100__auto____0 = (function (){
var statearr_41880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41880[(0)] = cljs$core$async$mult_$_state_machine__20100__auto__);

(statearr_41880[(1)] = (1));

return statearr_41880;
});
var cljs$core$async$mult_$_state_machine__20100__auto____1 = (function (state_41796){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_41796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e41881){if((e41881 instanceof Object)){
var ex__20103__auto__ = e41881;
var statearr_41882_41939 = state_41796;
(statearr_41882_41939[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41940 = state_41796;
state_41796 = G__41940;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20100__auto__ = function(state_41796){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20100__auto____1.call(this,state_41796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20100__auto____0;
cljs$core$async$mult_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20100__auto____1;
return cljs$core$async$mult_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___41884,cs,m,dchan,dctr,done))
})();
var state__20166__auto__ = (function (){var statearr_41883 = f__20165__auto__.call(null);
(statearr_41883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___41884);

return statearr_41883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___41884,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args41941 = [];
var len__17390__auto___41944 = arguments.length;
var i__17391__auto___41945 = (0);
while(true){
if((i__17391__auto___41945 < len__17390__auto___41944)){
args41941.push((arguments[i__17391__auto___41945]));

var G__41946 = (i__17391__auto___41945 + (1));
i__17391__auto___41945 = G__41946;
continue;
} else {
}
break;
}

var G__41943 = args41941.length;
switch (G__41943) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41941.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,ch);
} else {
var m__16988__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,ch);
} else {
var m__16988__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m);
} else {
var m__16988__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,state_map);
} else {
var m__16988__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,mode);
} else {
var m__16988__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17397__auto__ = [];
var len__17390__auto___41958 = arguments.length;
var i__17391__auto___41959 = (0);
while(true){
if((i__17391__auto___41959 < len__17390__auto___41958)){
args__17397__auto__.push((arguments[i__17391__auto___41959]));

var G__41960 = (i__17391__auto___41959 + (1));
i__17391__auto___41959 = G__41960;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((3) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17398__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41952){
var map__41953 = p__41952;
var map__41953__$1 = ((((!((map__41953 == null)))?((((map__41953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41953):map__41953);
var opts = map__41953__$1;
var statearr_41955_41961 = state;
(statearr_41955_41961[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__41953,map__41953__$1,opts){
return (function (val){
var statearr_41956_41962 = state;
(statearr_41956_41962[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41953,map__41953__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_41957_41963 = state;
(statearr_41957_41963[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41948){
var G__41949 = cljs.core.first.call(null,seq41948);
var seq41948__$1 = cljs.core.next.call(null,seq41948);
var G__41950 = cljs.core.first.call(null,seq41948__$1);
var seq41948__$2 = cljs.core.next.call(null,seq41948__$1);
var G__41951 = cljs.core.first.call(null,seq41948__$2);
var seq41948__$3 = cljs.core.next.call(null,seq41948__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41949,G__41950,G__41951,seq41948__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42127 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42128){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42128 = meta42128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42129,meta42128__$1){
var self__ = this;
var _42129__$1 = this;
return (new cljs.core.async.t_cljs$core$async42127(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42128__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42129){
var self__ = this;
var _42129__$1 = this;
return self__.meta42128;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42128","meta42128",855259412,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42127";

cljs.core.async.t_cljs$core$async42127.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async42127");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42127 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42127(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42128){
return (new cljs.core.async.t_cljs$core$async42127(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42128));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42127(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20164__auto___42290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___42290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___42290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42227){
var state_val_42228 = (state_42227[(1)]);
if((state_val_42228 === (7))){
var inst_42145 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
var statearr_42229_42291 = state_42227__$1;
(statearr_42229_42291[(2)] = inst_42145);

(statearr_42229_42291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (20))){
var inst_42157 = (state_42227[(7)]);
var state_42227__$1 = state_42227;
var statearr_42230_42292 = state_42227__$1;
(statearr_42230_42292[(2)] = inst_42157);

(statearr_42230_42292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (27))){
var state_42227__$1 = state_42227;
var statearr_42231_42293 = state_42227__$1;
(statearr_42231_42293[(2)] = null);

(statearr_42231_42293[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (1))){
var inst_42133 = (state_42227[(8)]);
var inst_42133__$1 = calc_state.call(null);
var inst_42135 = (inst_42133__$1 == null);
var inst_42136 = cljs.core.not.call(null,inst_42135);
var state_42227__$1 = (function (){var statearr_42232 = state_42227;
(statearr_42232[(8)] = inst_42133__$1);

return statearr_42232;
})();
if(inst_42136){
var statearr_42233_42294 = state_42227__$1;
(statearr_42233_42294[(1)] = (2));

} else {
var statearr_42234_42295 = state_42227__$1;
(statearr_42234_42295[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (24))){
var inst_42201 = (state_42227[(9)]);
var inst_42180 = (state_42227[(10)]);
var inst_42187 = (state_42227[(11)]);
var inst_42201__$1 = inst_42180.call(null,inst_42187);
var state_42227__$1 = (function (){var statearr_42235 = state_42227;
(statearr_42235[(9)] = inst_42201__$1);

return statearr_42235;
})();
if(cljs.core.truth_(inst_42201__$1)){
var statearr_42236_42296 = state_42227__$1;
(statearr_42236_42296[(1)] = (29));

} else {
var statearr_42237_42297 = state_42227__$1;
(statearr_42237_42297[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (4))){
var inst_42148 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
if(cljs.core.truth_(inst_42148)){
var statearr_42238_42298 = state_42227__$1;
(statearr_42238_42298[(1)] = (8));

} else {
var statearr_42239_42299 = state_42227__$1;
(statearr_42239_42299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (15))){
var inst_42174 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
if(cljs.core.truth_(inst_42174)){
var statearr_42240_42300 = state_42227__$1;
(statearr_42240_42300[(1)] = (19));

} else {
var statearr_42241_42301 = state_42227__$1;
(statearr_42241_42301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (21))){
var inst_42179 = (state_42227[(12)]);
var inst_42179__$1 = (state_42227[(2)]);
var inst_42180 = cljs.core.get.call(null,inst_42179__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42181 = cljs.core.get.call(null,inst_42179__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42182 = cljs.core.get.call(null,inst_42179__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42227__$1 = (function (){var statearr_42242 = state_42227;
(statearr_42242[(10)] = inst_42180);

(statearr_42242[(12)] = inst_42179__$1);

(statearr_42242[(13)] = inst_42181);

return statearr_42242;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42227__$1,(22),inst_42182);
} else {
if((state_val_42228 === (31))){
var inst_42209 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
if(cljs.core.truth_(inst_42209)){
var statearr_42243_42302 = state_42227__$1;
(statearr_42243_42302[(1)] = (32));

} else {
var statearr_42244_42303 = state_42227__$1;
(statearr_42244_42303[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (32))){
var inst_42186 = (state_42227[(14)]);
var state_42227__$1 = state_42227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42227__$1,(35),out,inst_42186);
} else {
if((state_val_42228 === (33))){
var inst_42179 = (state_42227[(12)]);
var inst_42157 = inst_42179;
var state_42227__$1 = (function (){var statearr_42245 = state_42227;
(statearr_42245[(7)] = inst_42157);

return statearr_42245;
})();
var statearr_42246_42304 = state_42227__$1;
(statearr_42246_42304[(2)] = null);

(statearr_42246_42304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (13))){
var inst_42157 = (state_42227[(7)]);
var inst_42164 = inst_42157.cljs$lang$protocol_mask$partition0$;
var inst_42165 = (inst_42164 & (64));
var inst_42166 = inst_42157.cljs$core$ISeq$;
var inst_42167 = (inst_42165) || (inst_42166);
var state_42227__$1 = state_42227;
if(cljs.core.truth_(inst_42167)){
var statearr_42247_42305 = state_42227__$1;
(statearr_42247_42305[(1)] = (16));

} else {
var statearr_42248_42306 = state_42227__$1;
(statearr_42248_42306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (22))){
var inst_42187 = (state_42227[(11)]);
var inst_42186 = (state_42227[(14)]);
var inst_42185 = (state_42227[(2)]);
var inst_42186__$1 = cljs.core.nth.call(null,inst_42185,(0),null);
var inst_42187__$1 = cljs.core.nth.call(null,inst_42185,(1),null);
var inst_42188 = (inst_42186__$1 == null);
var inst_42189 = cljs.core._EQ_.call(null,inst_42187__$1,change);
var inst_42190 = (inst_42188) || (inst_42189);
var state_42227__$1 = (function (){var statearr_42249 = state_42227;
(statearr_42249[(11)] = inst_42187__$1);

(statearr_42249[(14)] = inst_42186__$1);

return statearr_42249;
})();
if(cljs.core.truth_(inst_42190)){
var statearr_42250_42307 = state_42227__$1;
(statearr_42250_42307[(1)] = (23));

} else {
var statearr_42251_42308 = state_42227__$1;
(statearr_42251_42308[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (36))){
var inst_42179 = (state_42227[(12)]);
var inst_42157 = inst_42179;
var state_42227__$1 = (function (){var statearr_42252 = state_42227;
(statearr_42252[(7)] = inst_42157);

return statearr_42252;
})();
var statearr_42253_42309 = state_42227__$1;
(statearr_42253_42309[(2)] = null);

(statearr_42253_42309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (29))){
var inst_42201 = (state_42227[(9)]);
var state_42227__$1 = state_42227;
var statearr_42254_42310 = state_42227__$1;
(statearr_42254_42310[(2)] = inst_42201);

(statearr_42254_42310[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (6))){
var state_42227__$1 = state_42227;
var statearr_42255_42311 = state_42227__$1;
(statearr_42255_42311[(2)] = false);

(statearr_42255_42311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (28))){
var inst_42197 = (state_42227[(2)]);
var inst_42198 = calc_state.call(null);
var inst_42157 = inst_42198;
var state_42227__$1 = (function (){var statearr_42256 = state_42227;
(statearr_42256[(7)] = inst_42157);

(statearr_42256[(15)] = inst_42197);

return statearr_42256;
})();
var statearr_42257_42312 = state_42227__$1;
(statearr_42257_42312[(2)] = null);

(statearr_42257_42312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (25))){
var inst_42223 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
var statearr_42258_42313 = state_42227__$1;
(statearr_42258_42313[(2)] = inst_42223);

(statearr_42258_42313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (34))){
var inst_42221 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
var statearr_42259_42314 = state_42227__$1;
(statearr_42259_42314[(2)] = inst_42221);

(statearr_42259_42314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (17))){
var state_42227__$1 = state_42227;
var statearr_42260_42315 = state_42227__$1;
(statearr_42260_42315[(2)] = false);

(statearr_42260_42315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (3))){
var state_42227__$1 = state_42227;
var statearr_42261_42316 = state_42227__$1;
(statearr_42261_42316[(2)] = false);

(statearr_42261_42316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (12))){
var inst_42225 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42227__$1,inst_42225);
} else {
if((state_val_42228 === (2))){
var inst_42133 = (state_42227[(8)]);
var inst_42138 = inst_42133.cljs$lang$protocol_mask$partition0$;
var inst_42139 = (inst_42138 & (64));
var inst_42140 = inst_42133.cljs$core$ISeq$;
var inst_42141 = (inst_42139) || (inst_42140);
var state_42227__$1 = state_42227;
if(cljs.core.truth_(inst_42141)){
var statearr_42262_42317 = state_42227__$1;
(statearr_42262_42317[(1)] = (5));

} else {
var statearr_42263_42318 = state_42227__$1;
(statearr_42263_42318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (23))){
var inst_42186 = (state_42227[(14)]);
var inst_42192 = (inst_42186 == null);
var state_42227__$1 = state_42227;
if(cljs.core.truth_(inst_42192)){
var statearr_42264_42319 = state_42227__$1;
(statearr_42264_42319[(1)] = (26));

} else {
var statearr_42265_42320 = state_42227__$1;
(statearr_42265_42320[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (35))){
var inst_42212 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
if(cljs.core.truth_(inst_42212)){
var statearr_42266_42321 = state_42227__$1;
(statearr_42266_42321[(1)] = (36));

} else {
var statearr_42267_42322 = state_42227__$1;
(statearr_42267_42322[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (19))){
var inst_42157 = (state_42227[(7)]);
var inst_42176 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42157);
var state_42227__$1 = state_42227;
var statearr_42268_42323 = state_42227__$1;
(statearr_42268_42323[(2)] = inst_42176);

(statearr_42268_42323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (11))){
var inst_42157 = (state_42227[(7)]);
var inst_42161 = (inst_42157 == null);
var inst_42162 = cljs.core.not.call(null,inst_42161);
var state_42227__$1 = state_42227;
if(inst_42162){
var statearr_42269_42324 = state_42227__$1;
(statearr_42269_42324[(1)] = (13));

} else {
var statearr_42270_42325 = state_42227__$1;
(statearr_42270_42325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (9))){
var inst_42133 = (state_42227[(8)]);
var state_42227__$1 = state_42227;
var statearr_42271_42326 = state_42227__$1;
(statearr_42271_42326[(2)] = inst_42133);

(statearr_42271_42326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (5))){
var state_42227__$1 = state_42227;
var statearr_42272_42327 = state_42227__$1;
(statearr_42272_42327[(2)] = true);

(statearr_42272_42327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (14))){
var state_42227__$1 = state_42227;
var statearr_42273_42328 = state_42227__$1;
(statearr_42273_42328[(2)] = false);

(statearr_42273_42328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (26))){
var inst_42187 = (state_42227[(11)]);
var inst_42194 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42187);
var state_42227__$1 = state_42227;
var statearr_42274_42329 = state_42227__$1;
(statearr_42274_42329[(2)] = inst_42194);

(statearr_42274_42329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (16))){
var state_42227__$1 = state_42227;
var statearr_42275_42330 = state_42227__$1;
(statearr_42275_42330[(2)] = true);

(statearr_42275_42330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (38))){
var inst_42217 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
var statearr_42276_42331 = state_42227__$1;
(statearr_42276_42331[(2)] = inst_42217);

(statearr_42276_42331[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (30))){
var inst_42180 = (state_42227[(10)]);
var inst_42187 = (state_42227[(11)]);
var inst_42181 = (state_42227[(13)]);
var inst_42204 = cljs.core.empty_QMARK_.call(null,inst_42180);
var inst_42205 = inst_42181.call(null,inst_42187);
var inst_42206 = cljs.core.not.call(null,inst_42205);
var inst_42207 = (inst_42204) && (inst_42206);
var state_42227__$1 = state_42227;
var statearr_42277_42332 = state_42227__$1;
(statearr_42277_42332[(2)] = inst_42207);

(statearr_42277_42332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (10))){
var inst_42133 = (state_42227[(8)]);
var inst_42153 = (state_42227[(2)]);
var inst_42154 = cljs.core.get.call(null,inst_42153,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42155 = cljs.core.get.call(null,inst_42153,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42156 = cljs.core.get.call(null,inst_42153,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42157 = inst_42133;
var state_42227__$1 = (function (){var statearr_42278 = state_42227;
(statearr_42278[(7)] = inst_42157);

(statearr_42278[(16)] = inst_42155);

(statearr_42278[(17)] = inst_42156);

(statearr_42278[(18)] = inst_42154);

return statearr_42278;
})();
var statearr_42279_42333 = state_42227__$1;
(statearr_42279_42333[(2)] = null);

(statearr_42279_42333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (18))){
var inst_42171 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
var statearr_42280_42334 = state_42227__$1;
(statearr_42280_42334[(2)] = inst_42171);

(statearr_42280_42334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (37))){
var state_42227__$1 = state_42227;
var statearr_42281_42335 = state_42227__$1;
(statearr_42281_42335[(2)] = null);

(statearr_42281_42335[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (8))){
var inst_42133 = (state_42227[(8)]);
var inst_42150 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42133);
var state_42227__$1 = state_42227;
var statearr_42282_42336 = state_42227__$1;
(statearr_42282_42336[(2)] = inst_42150);

(statearr_42282_42336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___42290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20099__auto__,c__20164__auto___42290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20100__auto__ = null;
var cljs$core$async$mix_$_state_machine__20100__auto____0 = (function (){
var statearr_42286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42286[(0)] = cljs$core$async$mix_$_state_machine__20100__auto__);

(statearr_42286[(1)] = (1));

return statearr_42286;
});
var cljs$core$async$mix_$_state_machine__20100__auto____1 = (function (state_42227){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_42227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e42287){if((e42287 instanceof Object)){
var ex__20103__auto__ = e42287;
var statearr_42288_42337 = state_42227;
(statearr_42288_42337[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42338 = state_42227;
state_42227 = G__42338;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20100__auto__ = function(state_42227){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20100__auto____1.call(this,state_42227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20100__auto____0;
cljs$core$async$mix_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20100__auto____1;
return cljs$core$async$mix_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___42290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20166__auto__ = (function (){var statearr_42289 = f__20165__auto__.call(null);
(statearr_42289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___42290);

return statearr_42289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___42290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16987__auto__ = (((p == null))?null:p);
var m__16988__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16988__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16987__auto__ = (((p == null))?null:p);
var m__16988__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,p,v,ch);
} else {
var m__16988__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42339 = [];
var len__17390__auto___42342 = arguments.length;
var i__17391__auto___42343 = (0);
while(true){
if((i__17391__auto___42343 < len__17390__auto___42342)){
args42339.push((arguments[i__17391__auto___42343]));

var G__42344 = (i__17391__auto___42343 + (1));
i__17391__auto___42343 = G__42344;
continue;
} else {
}
break;
}

var G__42341 = args42339.length;
switch (G__42341) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42339.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16987__auto__ = (((p == null))?null:p);
var m__16988__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,p);
} else {
var m__16988__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16987__auto__ = (((p == null))?null:p);
var m__16988__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,p,v);
} else {
var m__16988__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args42347 = [];
var len__17390__auto___42472 = arguments.length;
var i__17391__auto___42473 = (0);
while(true){
if((i__17391__auto___42473 < len__17390__auto___42472)){
args42347.push((arguments[i__17391__auto___42473]));

var G__42474 = (i__17391__auto___42473 + (1));
i__17391__auto___42473 = G__42474;
continue;
} else {
}
break;
}

var G__42349 = args42347.length;
switch (G__42349) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42347.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16332__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16332__auto__,mults){
return (function (p1__42346_SHARP_){
if(cljs.core.truth_(p1__42346_SHARP_.call(null,topic))){
return p1__42346_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42346_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16332__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42350 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42351){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42351 = meta42351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42352,meta42351__$1){
var self__ = this;
var _42352__$1 = this;
return (new cljs.core.async.t_cljs$core$async42350(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42351__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42352){
var self__ = this;
var _42352__$1 = this;
return self__.meta42351;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42350.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42350.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42351","meta42351",1661975891,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42350";

cljs.core.async.t_cljs$core$async42350.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async42350");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42350 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42350(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42351){
return (new cljs.core.async.t_cljs$core$async42350(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42351));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42350(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20164__auto___42476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___42476,mults,ensure_mult,p){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___42476,mults,ensure_mult,p){
return (function (state_42424){
var state_val_42425 = (state_42424[(1)]);
if((state_val_42425 === (7))){
var inst_42420 = (state_42424[(2)]);
var state_42424__$1 = state_42424;
var statearr_42426_42477 = state_42424__$1;
(statearr_42426_42477[(2)] = inst_42420);

(statearr_42426_42477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (20))){
var state_42424__$1 = state_42424;
var statearr_42427_42478 = state_42424__$1;
(statearr_42427_42478[(2)] = null);

(statearr_42427_42478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (1))){
var state_42424__$1 = state_42424;
var statearr_42428_42479 = state_42424__$1;
(statearr_42428_42479[(2)] = null);

(statearr_42428_42479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (24))){
var inst_42403 = (state_42424[(7)]);
var inst_42412 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42403);
var state_42424__$1 = state_42424;
var statearr_42429_42480 = state_42424__$1;
(statearr_42429_42480[(2)] = inst_42412);

(statearr_42429_42480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (4))){
var inst_42355 = (state_42424[(8)]);
var inst_42355__$1 = (state_42424[(2)]);
var inst_42356 = (inst_42355__$1 == null);
var state_42424__$1 = (function (){var statearr_42430 = state_42424;
(statearr_42430[(8)] = inst_42355__$1);

return statearr_42430;
})();
if(cljs.core.truth_(inst_42356)){
var statearr_42431_42481 = state_42424__$1;
(statearr_42431_42481[(1)] = (5));

} else {
var statearr_42432_42482 = state_42424__$1;
(statearr_42432_42482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (15))){
var inst_42397 = (state_42424[(2)]);
var state_42424__$1 = state_42424;
var statearr_42433_42483 = state_42424__$1;
(statearr_42433_42483[(2)] = inst_42397);

(statearr_42433_42483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (21))){
var inst_42417 = (state_42424[(2)]);
var state_42424__$1 = (function (){var statearr_42434 = state_42424;
(statearr_42434[(9)] = inst_42417);

return statearr_42434;
})();
var statearr_42435_42484 = state_42424__$1;
(statearr_42435_42484[(2)] = null);

(statearr_42435_42484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (13))){
var inst_42379 = (state_42424[(10)]);
var inst_42381 = cljs.core.chunked_seq_QMARK_.call(null,inst_42379);
var state_42424__$1 = state_42424;
if(inst_42381){
var statearr_42436_42485 = state_42424__$1;
(statearr_42436_42485[(1)] = (16));

} else {
var statearr_42437_42486 = state_42424__$1;
(statearr_42437_42486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (22))){
var inst_42409 = (state_42424[(2)]);
var state_42424__$1 = state_42424;
if(cljs.core.truth_(inst_42409)){
var statearr_42438_42487 = state_42424__$1;
(statearr_42438_42487[(1)] = (23));

} else {
var statearr_42439_42488 = state_42424__$1;
(statearr_42439_42488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (6))){
var inst_42405 = (state_42424[(11)]);
var inst_42355 = (state_42424[(8)]);
var inst_42403 = (state_42424[(7)]);
var inst_42403__$1 = topic_fn.call(null,inst_42355);
var inst_42404 = cljs.core.deref.call(null,mults);
var inst_42405__$1 = cljs.core.get.call(null,inst_42404,inst_42403__$1);
var state_42424__$1 = (function (){var statearr_42440 = state_42424;
(statearr_42440[(11)] = inst_42405__$1);

(statearr_42440[(7)] = inst_42403__$1);

return statearr_42440;
})();
if(cljs.core.truth_(inst_42405__$1)){
var statearr_42441_42489 = state_42424__$1;
(statearr_42441_42489[(1)] = (19));

} else {
var statearr_42442_42490 = state_42424__$1;
(statearr_42442_42490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (25))){
var inst_42414 = (state_42424[(2)]);
var state_42424__$1 = state_42424;
var statearr_42443_42491 = state_42424__$1;
(statearr_42443_42491[(2)] = inst_42414);

(statearr_42443_42491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (17))){
var inst_42379 = (state_42424[(10)]);
var inst_42388 = cljs.core.first.call(null,inst_42379);
var inst_42389 = cljs.core.async.muxch_STAR_.call(null,inst_42388);
var inst_42390 = cljs.core.async.close_BANG_.call(null,inst_42389);
var inst_42391 = cljs.core.next.call(null,inst_42379);
var inst_42365 = inst_42391;
var inst_42366 = null;
var inst_42367 = (0);
var inst_42368 = (0);
var state_42424__$1 = (function (){var statearr_42444 = state_42424;
(statearr_42444[(12)] = inst_42365);

(statearr_42444[(13)] = inst_42367);

(statearr_42444[(14)] = inst_42366);

(statearr_42444[(15)] = inst_42390);

(statearr_42444[(16)] = inst_42368);

return statearr_42444;
})();
var statearr_42445_42492 = state_42424__$1;
(statearr_42445_42492[(2)] = null);

(statearr_42445_42492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (3))){
var inst_42422 = (state_42424[(2)]);
var state_42424__$1 = state_42424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42424__$1,inst_42422);
} else {
if((state_val_42425 === (12))){
var inst_42399 = (state_42424[(2)]);
var state_42424__$1 = state_42424;
var statearr_42446_42493 = state_42424__$1;
(statearr_42446_42493[(2)] = inst_42399);

(statearr_42446_42493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (2))){
var state_42424__$1 = state_42424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42424__$1,(4),ch);
} else {
if((state_val_42425 === (23))){
var state_42424__$1 = state_42424;
var statearr_42447_42494 = state_42424__$1;
(statearr_42447_42494[(2)] = null);

(statearr_42447_42494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (19))){
var inst_42405 = (state_42424[(11)]);
var inst_42355 = (state_42424[(8)]);
var inst_42407 = cljs.core.async.muxch_STAR_.call(null,inst_42405);
var state_42424__$1 = state_42424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42424__$1,(22),inst_42407,inst_42355);
} else {
if((state_val_42425 === (11))){
var inst_42365 = (state_42424[(12)]);
var inst_42379 = (state_42424[(10)]);
var inst_42379__$1 = cljs.core.seq.call(null,inst_42365);
var state_42424__$1 = (function (){var statearr_42448 = state_42424;
(statearr_42448[(10)] = inst_42379__$1);

return statearr_42448;
})();
if(inst_42379__$1){
var statearr_42449_42495 = state_42424__$1;
(statearr_42449_42495[(1)] = (13));

} else {
var statearr_42450_42496 = state_42424__$1;
(statearr_42450_42496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (9))){
var inst_42401 = (state_42424[(2)]);
var state_42424__$1 = state_42424;
var statearr_42451_42497 = state_42424__$1;
(statearr_42451_42497[(2)] = inst_42401);

(statearr_42451_42497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (5))){
var inst_42362 = cljs.core.deref.call(null,mults);
var inst_42363 = cljs.core.vals.call(null,inst_42362);
var inst_42364 = cljs.core.seq.call(null,inst_42363);
var inst_42365 = inst_42364;
var inst_42366 = null;
var inst_42367 = (0);
var inst_42368 = (0);
var state_42424__$1 = (function (){var statearr_42452 = state_42424;
(statearr_42452[(12)] = inst_42365);

(statearr_42452[(13)] = inst_42367);

(statearr_42452[(14)] = inst_42366);

(statearr_42452[(16)] = inst_42368);

return statearr_42452;
})();
var statearr_42453_42498 = state_42424__$1;
(statearr_42453_42498[(2)] = null);

(statearr_42453_42498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (14))){
var state_42424__$1 = state_42424;
var statearr_42457_42499 = state_42424__$1;
(statearr_42457_42499[(2)] = null);

(statearr_42457_42499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (16))){
var inst_42379 = (state_42424[(10)]);
var inst_42383 = cljs.core.chunk_first.call(null,inst_42379);
var inst_42384 = cljs.core.chunk_rest.call(null,inst_42379);
var inst_42385 = cljs.core.count.call(null,inst_42383);
var inst_42365 = inst_42384;
var inst_42366 = inst_42383;
var inst_42367 = inst_42385;
var inst_42368 = (0);
var state_42424__$1 = (function (){var statearr_42458 = state_42424;
(statearr_42458[(12)] = inst_42365);

(statearr_42458[(13)] = inst_42367);

(statearr_42458[(14)] = inst_42366);

(statearr_42458[(16)] = inst_42368);

return statearr_42458;
})();
var statearr_42459_42500 = state_42424__$1;
(statearr_42459_42500[(2)] = null);

(statearr_42459_42500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (10))){
var inst_42365 = (state_42424[(12)]);
var inst_42367 = (state_42424[(13)]);
var inst_42366 = (state_42424[(14)]);
var inst_42368 = (state_42424[(16)]);
var inst_42373 = cljs.core._nth.call(null,inst_42366,inst_42368);
var inst_42374 = cljs.core.async.muxch_STAR_.call(null,inst_42373);
var inst_42375 = cljs.core.async.close_BANG_.call(null,inst_42374);
var inst_42376 = (inst_42368 + (1));
var tmp42454 = inst_42365;
var tmp42455 = inst_42367;
var tmp42456 = inst_42366;
var inst_42365__$1 = tmp42454;
var inst_42366__$1 = tmp42456;
var inst_42367__$1 = tmp42455;
var inst_42368__$1 = inst_42376;
var state_42424__$1 = (function (){var statearr_42460 = state_42424;
(statearr_42460[(12)] = inst_42365__$1);

(statearr_42460[(13)] = inst_42367__$1);

(statearr_42460[(14)] = inst_42366__$1);

(statearr_42460[(17)] = inst_42375);

(statearr_42460[(16)] = inst_42368__$1);

return statearr_42460;
})();
var statearr_42461_42501 = state_42424__$1;
(statearr_42461_42501[(2)] = null);

(statearr_42461_42501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (18))){
var inst_42394 = (state_42424[(2)]);
var state_42424__$1 = state_42424;
var statearr_42462_42502 = state_42424__$1;
(statearr_42462_42502[(2)] = inst_42394);

(statearr_42462_42502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42425 === (8))){
var inst_42367 = (state_42424[(13)]);
var inst_42368 = (state_42424[(16)]);
var inst_42370 = (inst_42368 < inst_42367);
var inst_42371 = inst_42370;
var state_42424__$1 = state_42424;
if(cljs.core.truth_(inst_42371)){
var statearr_42463_42503 = state_42424__$1;
(statearr_42463_42503[(1)] = (10));

} else {
var statearr_42464_42504 = state_42424__$1;
(statearr_42464_42504[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___42476,mults,ensure_mult,p))
;
return ((function (switch__20099__auto__,c__20164__auto___42476,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_42468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42468[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_42468[(1)] = (1));

return statearr_42468;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_42424){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_42424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e42469){if((e42469 instanceof Object)){
var ex__20103__auto__ = e42469;
var statearr_42470_42505 = state_42424;
(statearr_42470_42505[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42506 = state_42424;
state_42424 = G__42506;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_42424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_42424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___42476,mults,ensure_mult,p))
})();
var state__20166__auto__ = (function (){var statearr_42471 = f__20165__auto__.call(null);
(statearr_42471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___42476);

return statearr_42471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___42476,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args42507 = [];
var len__17390__auto___42510 = arguments.length;
var i__17391__auto___42511 = (0);
while(true){
if((i__17391__auto___42511 < len__17390__auto___42510)){
args42507.push((arguments[i__17391__auto___42511]));

var G__42512 = (i__17391__auto___42511 + (1));
i__17391__auto___42511 = G__42512;
continue;
} else {
}
break;
}

var G__42509 = args42507.length;
switch (G__42509) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42507.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args42514 = [];
var len__17390__auto___42517 = arguments.length;
var i__17391__auto___42518 = (0);
while(true){
if((i__17391__auto___42518 < len__17390__auto___42517)){
args42514.push((arguments[i__17391__auto___42518]));

var G__42519 = (i__17391__auto___42518 + (1));
i__17391__auto___42518 = G__42519;
continue;
} else {
}
break;
}

var G__42516 = args42514.length;
switch (G__42516) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42514.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args42521 = [];
var len__17390__auto___42592 = arguments.length;
var i__17391__auto___42593 = (0);
while(true){
if((i__17391__auto___42593 < len__17390__auto___42592)){
args42521.push((arguments[i__17391__auto___42593]));

var G__42594 = (i__17391__auto___42593 + (1));
i__17391__auto___42593 = G__42594;
continue;
} else {
}
break;
}

var G__42523 = args42521.length;
switch (G__42523) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42521.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20164__auto___42596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___42596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___42596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42562){
var state_val_42563 = (state_42562[(1)]);
if((state_val_42563 === (7))){
var state_42562__$1 = state_42562;
var statearr_42564_42597 = state_42562__$1;
(statearr_42564_42597[(2)] = null);

(statearr_42564_42597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (1))){
var state_42562__$1 = state_42562;
var statearr_42565_42598 = state_42562__$1;
(statearr_42565_42598[(2)] = null);

(statearr_42565_42598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (4))){
var inst_42526 = (state_42562[(7)]);
var inst_42528 = (inst_42526 < cnt);
var state_42562__$1 = state_42562;
if(cljs.core.truth_(inst_42528)){
var statearr_42566_42599 = state_42562__$1;
(statearr_42566_42599[(1)] = (6));

} else {
var statearr_42567_42600 = state_42562__$1;
(statearr_42567_42600[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (15))){
var inst_42558 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
var statearr_42568_42601 = state_42562__$1;
(statearr_42568_42601[(2)] = inst_42558);

(statearr_42568_42601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (13))){
var inst_42551 = cljs.core.async.close_BANG_.call(null,out);
var state_42562__$1 = state_42562;
var statearr_42569_42602 = state_42562__$1;
(statearr_42569_42602[(2)] = inst_42551);

(statearr_42569_42602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (6))){
var state_42562__$1 = state_42562;
var statearr_42570_42603 = state_42562__$1;
(statearr_42570_42603[(2)] = null);

(statearr_42570_42603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (3))){
var inst_42560 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42562__$1,inst_42560);
} else {
if((state_val_42563 === (12))){
var inst_42548 = (state_42562[(8)]);
var inst_42548__$1 = (state_42562[(2)]);
var inst_42549 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42548__$1);
var state_42562__$1 = (function (){var statearr_42571 = state_42562;
(statearr_42571[(8)] = inst_42548__$1);

return statearr_42571;
})();
if(cljs.core.truth_(inst_42549)){
var statearr_42572_42604 = state_42562__$1;
(statearr_42572_42604[(1)] = (13));

} else {
var statearr_42573_42605 = state_42562__$1;
(statearr_42573_42605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (2))){
var inst_42525 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42526 = (0);
var state_42562__$1 = (function (){var statearr_42574 = state_42562;
(statearr_42574[(9)] = inst_42525);

(statearr_42574[(7)] = inst_42526);

return statearr_42574;
})();
var statearr_42575_42606 = state_42562__$1;
(statearr_42575_42606[(2)] = null);

(statearr_42575_42606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (11))){
var inst_42526 = (state_42562[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42562,(10),Object,null,(9));
var inst_42535 = chs__$1.call(null,inst_42526);
var inst_42536 = done.call(null,inst_42526);
var inst_42537 = cljs.core.async.take_BANG_.call(null,inst_42535,inst_42536);
var state_42562__$1 = state_42562;
var statearr_42576_42607 = state_42562__$1;
(statearr_42576_42607[(2)] = inst_42537);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42562__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (9))){
var inst_42526 = (state_42562[(7)]);
var inst_42539 = (state_42562[(2)]);
var inst_42540 = (inst_42526 + (1));
var inst_42526__$1 = inst_42540;
var state_42562__$1 = (function (){var statearr_42577 = state_42562;
(statearr_42577[(10)] = inst_42539);

(statearr_42577[(7)] = inst_42526__$1);

return statearr_42577;
})();
var statearr_42578_42608 = state_42562__$1;
(statearr_42578_42608[(2)] = null);

(statearr_42578_42608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (5))){
var inst_42546 = (state_42562[(2)]);
var state_42562__$1 = (function (){var statearr_42579 = state_42562;
(statearr_42579[(11)] = inst_42546);

return statearr_42579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42562__$1,(12),dchan);
} else {
if((state_val_42563 === (14))){
var inst_42548 = (state_42562[(8)]);
var inst_42553 = cljs.core.apply.call(null,f,inst_42548);
var state_42562__$1 = state_42562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42562__$1,(16),out,inst_42553);
} else {
if((state_val_42563 === (16))){
var inst_42555 = (state_42562[(2)]);
var state_42562__$1 = (function (){var statearr_42580 = state_42562;
(statearr_42580[(12)] = inst_42555);

return statearr_42580;
})();
var statearr_42581_42609 = state_42562__$1;
(statearr_42581_42609[(2)] = null);

(statearr_42581_42609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (10))){
var inst_42530 = (state_42562[(2)]);
var inst_42531 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42562__$1 = (function (){var statearr_42582 = state_42562;
(statearr_42582[(13)] = inst_42530);

return statearr_42582;
})();
var statearr_42583_42610 = state_42562__$1;
(statearr_42583_42610[(2)] = inst_42531);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42562__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42563 === (8))){
var inst_42544 = (state_42562[(2)]);
var state_42562__$1 = state_42562;
var statearr_42584_42611 = state_42562__$1;
(statearr_42584_42611[(2)] = inst_42544);

(statearr_42584_42611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___42596,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20099__auto__,c__20164__auto___42596,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_42588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42588[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_42588[(1)] = (1));

return statearr_42588;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_42562){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_42562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e42589){if((e42589 instanceof Object)){
var ex__20103__auto__ = e42589;
var statearr_42590_42612 = state_42562;
(statearr_42590_42612[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42613 = state_42562;
state_42562 = G__42613;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_42562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_42562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___42596,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20166__auto__ = (function (){var statearr_42591 = f__20165__auto__.call(null);
(statearr_42591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___42596);

return statearr_42591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___42596,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args42615 = [];
var len__17390__auto___42671 = arguments.length;
var i__17391__auto___42672 = (0);
while(true){
if((i__17391__auto___42672 < len__17390__auto___42671)){
args42615.push((arguments[i__17391__auto___42672]));

var G__42673 = (i__17391__auto___42672 + (1));
i__17391__auto___42672 = G__42673;
continue;
} else {
}
break;
}

var G__42617 = args42615.length;
switch (G__42617) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42615.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___42675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___42675,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___42675,out){
return (function (state_42647){
var state_val_42648 = (state_42647[(1)]);
if((state_val_42648 === (7))){
var inst_42626 = (state_42647[(7)]);
var inst_42627 = (state_42647[(8)]);
var inst_42626__$1 = (state_42647[(2)]);
var inst_42627__$1 = cljs.core.nth.call(null,inst_42626__$1,(0),null);
var inst_42628 = cljs.core.nth.call(null,inst_42626__$1,(1),null);
var inst_42629 = (inst_42627__$1 == null);
var state_42647__$1 = (function (){var statearr_42649 = state_42647;
(statearr_42649[(7)] = inst_42626__$1);

(statearr_42649[(9)] = inst_42628);

(statearr_42649[(8)] = inst_42627__$1);

return statearr_42649;
})();
if(cljs.core.truth_(inst_42629)){
var statearr_42650_42676 = state_42647__$1;
(statearr_42650_42676[(1)] = (8));

} else {
var statearr_42651_42677 = state_42647__$1;
(statearr_42651_42677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42648 === (1))){
var inst_42618 = cljs.core.vec.call(null,chs);
var inst_42619 = inst_42618;
var state_42647__$1 = (function (){var statearr_42652 = state_42647;
(statearr_42652[(10)] = inst_42619);

return statearr_42652;
})();
var statearr_42653_42678 = state_42647__$1;
(statearr_42653_42678[(2)] = null);

(statearr_42653_42678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42648 === (4))){
var inst_42619 = (state_42647[(10)]);
var state_42647__$1 = state_42647;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42647__$1,(7),inst_42619);
} else {
if((state_val_42648 === (6))){
var inst_42643 = (state_42647[(2)]);
var state_42647__$1 = state_42647;
var statearr_42654_42679 = state_42647__$1;
(statearr_42654_42679[(2)] = inst_42643);

(statearr_42654_42679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42648 === (3))){
var inst_42645 = (state_42647[(2)]);
var state_42647__$1 = state_42647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42647__$1,inst_42645);
} else {
if((state_val_42648 === (2))){
var inst_42619 = (state_42647[(10)]);
var inst_42621 = cljs.core.count.call(null,inst_42619);
var inst_42622 = (inst_42621 > (0));
var state_42647__$1 = state_42647;
if(cljs.core.truth_(inst_42622)){
var statearr_42656_42680 = state_42647__$1;
(statearr_42656_42680[(1)] = (4));

} else {
var statearr_42657_42681 = state_42647__$1;
(statearr_42657_42681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42648 === (11))){
var inst_42619 = (state_42647[(10)]);
var inst_42636 = (state_42647[(2)]);
var tmp42655 = inst_42619;
var inst_42619__$1 = tmp42655;
var state_42647__$1 = (function (){var statearr_42658 = state_42647;
(statearr_42658[(11)] = inst_42636);

(statearr_42658[(10)] = inst_42619__$1);

return statearr_42658;
})();
var statearr_42659_42682 = state_42647__$1;
(statearr_42659_42682[(2)] = null);

(statearr_42659_42682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42648 === (9))){
var inst_42627 = (state_42647[(8)]);
var state_42647__$1 = state_42647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42647__$1,(11),out,inst_42627);
} else {
if((state_val_42648 === (5))){
var inst_42641 = cljs.core.async.close_BANG_.call(null,out);
var state_42647__$1 = state_42647;
var statearr_42660_42683 = state_42647__$1;
(statearr_42660_42683[(2)] = inst_42641);

(statearr_42660_42683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42648 === (10))){
var inst_42639 = (state_42647[(2)]);
var state_42647__$1 = state_42647;
var statearr_42661_42684 = state_42647__$1;
(statearr_42661_42684[(2)] = inst_42639);

(statearr_42661_42684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42648 === (8))){
var inst_42626 = (state_42647[(7)]);
var inst_42628 = (state_42647[(9)]);
var inst_42627 = (state_42647[(8)]);
var inst_42619 = (state_42647[(10)]);
var inst_42631 = (function (){var cs = inst_42619;
var vec__42624 = inst_42626;
var v = inst_42627;
var c = inst_42628;
return ((function (cs,vec__42624,v,c,inst_42626,inst_42628,inst_42627,inst_42619,state_val_42648,c__20164__auto___42675,out){
return (function (p1__42614_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42614_SHARP_);
});
;})(cs,vec__42624,v,c,inst_42626,inst_42628,inst_42627,inst_42619,state_val_42648,c__20164__auto___42675,out))
})();
var inst_42632 = cljs.core.filterv.call(null,inst_42631,inst_42619);
var inst_42619__$1 = inst_42632;
var state_42647__$1 = (function (){var statearr_42662 = state_42647;
(statearr_42662[(10)] = inst_42619__$1);

return statearr_42662;
})();
var statearr_42663_42685 = state_42647__$1;
(statearr_42663_42685[(2)] = null);

(statearr_42663_42685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___42675,out))
;
return ((function (switch__20099__auto__,c__20164__auto___42675,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_42667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42667[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_42667[(1)] = (1));

return statearr_42667;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_42647){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_42647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e42668){if((e42668 instanceof Object)){
var ex__20103__auto__ = e42668;
var statearr_42669_42686 = state_42647;
(statearr_42669_42686[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42687 = state_42647;
state_42647 = G__42687;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_42647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_42647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___42675,out))
})();
var state__20166__auto__ = (function (){var statearr_42670 = f__20165__auto__.call(null);
(statearr_42670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___42675);

return statearr_42670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___42675,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args42688 = [];
var len__17390__auto___42737 = arguments.length;
var i__17391__auto___42738 = (0);
while(true){
if((i__17391__auto___42738 < len__17390__auto___42737)){
args42688.push((arguments[i__17391__auto___42738]));

var G__42739 = (i__17391__auto___42738 + (1));
i__17391__auto___42738 = G__42739;
continue;
} else {
}
break;
}

var G__42690 = args42688.length;
switch (G__42690) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42688.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___42741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___42741,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___42741,out){
return (function (state_42714){
var state_val_42715 = (state_42714[(1)]);
if((state_val_42715 === (7))){
var inst_42696 = (state_42714[(7)]);
var inst_42696__$1 = (state_42714[(2)]);
var inst_42697 = (inst_42696__$1 == null);
var inst_42698 = cljs.core.not.call(null,inst_42697);
var state_42714__$1 = (function (){var statearr_42716 = state_42714;
(statearr_42716[(7)] = inst_42696__$1);

return statearr_42716;
})();
if(inst_42698){
var statearr_42717_42742 = state_42714__$1;
(statearr_42717_42742[(1)] = (8));

} else {
var statearr_42718_42743 = state_42714__$1;
(statearr_42718_42743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (1))){
var inst_42691 = (0);
var state_42714__$1 = (function (){var statearr_42719 = state_42714;
(statearr_42719[(8)] = inst_42691);

return statearr_42719;
})();
var statearr_42720_42744 = state_42714__$1;
(statearr_42720_42744[(2)] = null);

(statearr_42720_42744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (4))){
var state_42714__$1 = state_42714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42714__$1,(7),ch);
} else {
if((state_val_42715 === (6))){
var inst_42709 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42721_42745 = state_42714__$1;
(statearr_42721_42745[(2)] = inst_42709);

(statearr_42721_42745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (3))){
var inst_42711 = (state_42714[(2)]);
var inst_42712 = cljs.core.async.close_BANG_.call(null,out);
var state_42714__$1 = (function (){var statearr_42722 = state_42714;
(statearr_42722[(9)] = inst_42711);

return statearr_42722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42714__$1,inst_42712);
} else {
if((state_val_42715 === (2))){
var inst_42691 = (state_42714[(8)]);
var inst_42693 = (inst_42691 < n);
var state_42714__$1 = state_42714;
if(cljs.core.truth_(inst_42693)){
var statearr_42723_42746 = state_42714__$1;
(statearr_42723_42746[(1)] = (4));

} else {
var statearr_42724_42747 = state_42714__$1;
(statearr_42724_42747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (11))){
var inst_42691 = (state_42714[(8)]);
var inst_42701 = (state_42714[(2)]);
var inst_42702 = (inst_42691 + (1));
var inst_42691__$1 = inst_42702;
var state_42714__$1 = (function (){var statearr_42725 = state_42714;
(statearr_42725[(8)] = inst_42691__$1);

(statearr_42725[(10)] = inst_42701);

return statearr_42725;
})();
var statearr_42726_42748 = state_42714__$1;
(statearr_42726_42748[(2)] = null);

(statearr_42726_42748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (9))){
var state_42714__$1 = state_42714;
var statearr_42727_42749 = state_42714__$1;
(statearr_42727_42749[(2)] = null);

(statearr_42727_42749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (5))){
var state_42714__$1 = state_42714;
var statearr_42728_42750 = state_42714__$1;
(statearr_42728_42750[(2)] = null);

(statearr_42728_42750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (10))){
var inst_42706 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42729_42751 = state_42714__$1;
(statearr_42729_42751[(2)] = inst_42706);

(statearr_42729_42751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (8))){
var inst_42696 = (state_42714[(7)]);
var state_42714__$1 = state_42714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42714__$1,(11),out,inst_42696);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___42741,out))
;
return ((function (switch__20099__auto__,c__20164__auto___42741,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_42733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42733[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_42733[(1)] = (1));

return statearr_42733;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_42714){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_42714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e42734){if((e42734 instanceof Object)){
var ex__20103__auto__ = e42734;
var statearr_42735_42752 = state_42714;
(statearr_42735_42752[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42753 = state_42714;
state_42714 = G__42753;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_42714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_42714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___42741,out))
})();
var state__20166__auto__ = (function (){var statearr_42736 = f__20165__auto__.call(null);
(statearr_42736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___42741);

return statearr_42736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___42741,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42761 = (function (map_LT_,f,ch,meta42762){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42762 = meta42762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42763,meta42762__$1){
var self__ = this;
var _42763__$1 = this;
return (new cljs.core.async.t_cljs$core$async42761(self__.map_LT_,self__.f,self__.ch,meta42762__$1));
});

cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42763){
var self__ = this;
var _42763__$1 = this;
return self__.meta42762;
});

cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42764 = (function (map_LT_,f,ch,meta42762,_,fn1,meta42765){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42762 = meta42762;
this._ = _;
this.fn1 = fn1;
this.meta42765 = meta42765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42766,meta42765__$1){
var self__ = this;
var _42766__$1 = this;
return (new cljs.core.async.t_cljs$core$async42764(self__.map_LT_,self__.f,self__.ch,self__.meta42762,self__._,self__.fn1,meta42765__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42766){
var self__ = this;
var _42766__$1 = this;
return self__.meta42765;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42764.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42754_SHARP_){
return f1.call(null,(((p1__42754_SHARP_ == null))?null:self__.f.call(null,p1__42754_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42764.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42762","meta42762",1570812749,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42761","cljs.core.async/t_cljs$core$async42761",-67513751,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42765","meta42765",891820045,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42764";

cljs.core.async.t_cljs$core$async42764.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async42764");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42764 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42764(map_LT___$1,f__$1,ch__$1,meta42762__$1,___$2,fn1__$1,meta42765){
return (new cljs.core.async.t_cljs$core$async42764(map_LT___$1,f__$1,ch__$1,meta42762__$1,___$2,fn1__$1,meta42765));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42764(self__.map_LT_,self__.f,self__.ch,self__.meta42762,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16320__auto__ = ret;
if(cljs.core.truth_(and__16320__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16320__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42762","meta42762",1570812749,null)], null);
});

cljs.core.async.t_cljs$core$async42761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42761";

cljs.core.async.t_cljs$core$async42761.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async42761");
});

cljs.core.async.__GT_t_cljs$core$async42761 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42761(map_LT___$1,f__$1,ch__$1,meta42762){
return (new cljs.core.async.t_cljs$core$async42761(map_LT___$1,f__$1,ch__$1,meta42762));
});

}

return (new cljs.core.async.t_cljs$core$async42761(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42770 = (function (map_GT_,f,ch,meta42771){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42771 = meta42771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42772,meta42771__$1){
var self__ = this;
var _42772__$1 = this;
return (new cljs.core.async.t_cljs$core$async42770(self__.map_GT_,self__.f,self__.ch,meta42771__$1));
});

cljs.core.async.t_cljs$core$async42770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42772){
var self__ = this;
var _42772__$1 = this;
return self__.meta42771;
});

cljs.core.async.t_cljs$core$async42770.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42771","meta42771",289677524,null)], null);
});

cljs.core.async.t_cljs$core$async42770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42770";

cljs.core.async.t_cljs$core$async42770.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async42770");
});

cljs.core.async.__GT_t_cljs$core$async42770 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42770(map_GT___$1,f__$1,ch__$1,meta42771){
return (new cljs.core.async.t_cljs$core$async42770(map_GT___$1,f__$1,ch__$1,meta42771));
});

}

return (new cljs.core.async.t_cljs$core$async42770(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42776 = (function (filter_GT_,p,ch,meta42777){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42777 = meta42777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42778,meta42777__$1){
var self__ = this;
var _42778__$1 = this;
return (new cljs.core.async.t_cljs$core$async42776(self__.filter_GT_,self__.p,self__.ch,meta42777__$1));
});

cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42778){
var self__ = this;
var _42778__$1 = this;
return self__.meta42777;
});

cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42777","meta42777",1342506206,null)], null);
});

cljs.core.async.t_cljs$core$async42776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42776";

cljs.core.async.t_cljs$core$async42776.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async42776");
});

cljs.core.async.__GT_t_cljs$core$async42776 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42776(filter_GT___$1,p__$1,ch__$1,meta42777){
return (new cljs.core.async.t_cljs$core$async42776(filter_GT___$1,p__$1,ch__$1,meta42777));
});

}

return (new cljs.core.async.t_cljs$core$async42776(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args42779 = [];
var len__17390__auto___42823 = arguments.length;
var i__17391__auto___42824 = (0);
while(true){
if((i__17391__auto___42824 < len__17390__auto___42823)){
args42779.push((arguments[i__17391__auto___42824]));

var G__42825 = (i__17391__auto___42824 + (1));
i__17391__auto___42824 = G__42825;
continue;
} else {
}
break;
}

var G__42781 = args42779.length;
switch (G__42781) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42779.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___42827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___42827,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___42827,out){
return (function (state_42802){
var state_val_42803 = (state_42802[(1)]);
if((state_val_42803 === (7))){
var inst_42798 = (state_42802[(2)]);
var state_42802__$1 = state_42802;
var statearr_42804_42828 = state_42802__$1;
(statearr_42804_42828[(2)] = inst_42798);

(statearr_42804_42828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (1))){
var state_42802__$1 = state_42802;
var statearr_42805_42829 = state_42802__$1;
(statearr_42805_42829[(2)] = null);

(statearr_42805_42829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (4))){
var inst_42784 = (state_42802[(7)]);
var inst_42784__$1 = (state_42802[(2)]);
var inst_42785 = (inst_42784__$1 == null);
var state_42802__$1 = (function (){var statearr_42806 = state_42802;
(statearr_42806[(7)] = inst_42784__$1);

return statearr_42806;
})();
if(cljs.core.truth_(inst_42785)){
var statearr_42807_42830 = state_42802__$1;
(statearr_42807_42830[(1)] = (5));

} else {
var statearr_42808_42831 = state_42802__$1;
(statearr_42808_42831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (6))){
var inst_42784 = (state_42802[(7)]);
var inst_42789 = p.call(null,inst_42784);
var state_42802__$1 = state_42802;
if(cljs.core.truth_(inst_42789)){
var statearr_42809_42832 = state_42802__$1;
(statearr_42809_42832[(1)] = (8));

} else {
var statearr_42810_42833 = state_42802__$1;
(statearr_42810_42833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (3))){
var inst_42800 = (state_42802[(2)]);
var state_42802__$1 = state_42802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42802__$1,inst_42800);
} else {
if((state_val_42803 === (2))){
var state_42802__$1 = state_42802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42802__$1,(4),ch);
} else {
if((state_val_42803 === (11))){
var inst_42792 = (state_42802[(2)]);
var state_42802__$1 = state_42802;
var statearr_42811_42834 = state_42802__$1;
(statearr_42811_42834[(2)] = inst_42792);

(statearr_42811_42834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (9))){
var state_42802__$1 = state_42802;
var statearr_42812_42835 = state_42802__$1;
(statearr_42812_42835[(2)] = null);

(statearr_42812_42835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (5))){
var inst_42787 = cljs.core.async.close_BANG_.call(null,out);
var state_42802__$1 = state_42802;
var statearr_42813_42836 = state_42802__$1;
(statearr_42813_42836[(2)] = inst_42787);

(statearr_42813_42836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (10))){
var inst_42795 = (state_42802[(2)]);
var state_42802__$1 = (function (){var statearr_42814 = state_42802;
(statearr_42814[(8)] = inst_42795);

return statearr_42814;
})();
var statearr_42815_42837 = state_42802__$1;
(statearr_42815_42837[(2)] = null);

(statearr_42815_42837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42803 === (8))){
var inst_42784 = (state_42802[(7)]);
var state_42802__$1 = state_42802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42802__$1,(11),out,inst_42784);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___42827,out))
;
return ((function (switch__20099__auto__,c__20164__auto___42827,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_42819 = [null,null,null,null,null,null,null,null,null];
(statearr_42819[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_42819[(1)] = (1));

return statearr_42819;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_42802){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_42802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e42820){if((e42820 instanceof Object)){
var ex__20103__auto__ = e42820;
var statearr_42821_42838 = state_42802;
(statearr_42821_42838[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42839 = state_42802;
state_42802 = G__42839;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_42802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_42802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___42827,out))
})();
var state__20166__auto__ = (function (){var statearr_42822 = f__20165__auto__.call(null);
(statearr_42822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___42827);

return statearr_42822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___42827,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42840 = [];
var len__17390__auto___42843 = arguments.length;
var i__17391__auto___42844 = (0);
while(true){
if((i__17391__auto___42844 < len__17390__auto___42843)){
args42840.push((arguments[i__17391__auto___42844]));

var G__42845 = (i__17391__auto___42844 + (1));
i__17391__auto___42844 = G__42845;
continue;
} else {
}
break;
}

var G__42842 = args42840.length;
switch (G__42842) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42840.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__){
return (function (state_43012){
var state_val_43013 = (state_43012[(1)]);
if((state_val_43013 === (7))){
var inst_43008 = (state_43012[(2)]);
var state_43012__$1 = state_43012;
var statearr_43014_43055 = state_43012__$1;
(statearr_43014_43055[(2)] = inst_43008);

(statearr_43014_43055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (20))){
var inst_42978 = (state_43012[(7)]);
var inst_42989 = (state_43012[(2)]);
var inst_42990 = cljs.core.next.call(null,inst_42978);
var inst_42964 = inst_42990;
var inst_42965 = null;
var inst_42966 = (0);
var inst_42967 = (0);
var state_43012__$1 = (function (){var statearr_43015 = state_43012;
(statearr_43015[(8)] = inst_42965);

(statearr_43015[(9)] = inst_42964);

(statearr_43015[(10)] = inst_42967);

(statearr_43015[(11)] = inst_42966);

(statearr_43015[(12)] = inst_42989);

return statearr_43015;
})();
var statearr_43016_43056 = state_43012__$1;
(statearr_43016_43056[(2)] = null);

(statearr_43016_43056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (1))){
var state_43012__$1 = state_43012;
var statearr_43017_43057 = state_43012__$1;
(statearr_43017_43057[(2)] = null);

(statearr_43017_43057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (4))){
var inst_42953 = (state_43012[(13)]);
var inst_42953__$1 = (state_43012[(2)]);
var inst_42954 = (inst_42953__$1 == null);
var state_43012__$1 = (function (){var statearr_43018 = state_43012;
(statearr_43018[(13)] = inst_42953__$1);

return statearr_43018;
})();
if(cljs.core.truth_(inst_42954)){
var statearr_43019_43058 = state_43012__$1;
(statearr_43019_43058[(1)] = (5));

} else {
var statearr_43020_43059 = state_43012__$1;
(statearr_43020_43059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (15))){
var state_43012__$1 = state_43012;
var statearr_43024_43060 = state_43012__$1;
(statearr_43024_43060[(2)] = null);

(statearr_43024_43060[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (21))){
var state_43012__$1 = state_43012;
var statearr_43025_43061 = state_43012__$1;
(statearr_43025_43061[(2)] = null);

(statearr_43025_43061[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (13))){
var inst_42965 = (state_43012[(8)]);
var inst_42964 = (state_43012[(9)]);
var inst_42967 = (state_43012[(10)]);
var inst_42966 = (state_43012[(11)]);
var inst_42974 = (state_43012[(2)]);
var inst_42975 = (inst_42967 + (1));
var tmp43021 = inst_42965;
var tmp43022 = inst_42964;
var tmp43023 = inst_42966;
var inst_42964__$1 = tmp43022;
var inst_42965__$1 = tmp43021;
var inst_42966__$1 = tmp43023;
var inst_42967__$1 = inst_42975;
var state_43012__$1 = (function (){var statearr_43026 = state_43012;
(statearr_43026[(8)] = inst_42965__$1);

(statearr_43026[(9)] = inst_42964__$1);

(statearr_43026[(14)] = inst_42974);

(statearr_43026[(10)] = inst_42967__$1);

(statearr_43026[(11)] = inst_42966__$1);

return statearr_43026;
})();
var statearr_43027_43062 = state_43012__$1;
(statearr_43027_43062[(2)] = null);

(statearr_43027_43062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (22))){
var state_43012__$1 = state_43012;
var statearr_43028_43063 = state_43012__$1;
(statearr_43028_43063[(2)] = null);

(statearr_43028_43063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (6))){
var inst_42953 = (state_43012[(13)]);
var inst_42962 = f.call(null,inst_42953);
var inst_42963 = cljs.core.seq.call(null,inst_42962);
var inst_42964 = inst_42963;
var inst_42965 = null;
var inst_42966 = (0);
var inst_42967 = (0);
var state_43012__$1 = (function (){var statearr_43029 = state_43012;
(statearr_43029[(8)] = inst_42965);

(statearr_43029[(9)] = inst_42964);

(statearr_43029[(10)] = inst_42967);

(statearr_43029[(11)] = inst_42966);

return statearr_43029;
})();
var statearr_43030_43064 = state_43012__$1;
(statearr_43030_43064[(2)] = null);

(statearr_43030_43064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (17))){
var inst_42978 = (state_43012[(7)]);
var inst_42982 = cljs.core.chunk_first.call(null,inst_42978);
var inst_42983 = cljs.core.chunk_rest.call(null,inst_42978);
var inst_42984 = cljs.core.count.call(null,inst_42982);
var inst_42964 = inst_42983;
var inst_42965 = inst_42982;
var inst_42966 = inst_42984;
var inst_42967 = (0);
var state_43012__$1 = (function (){var statearr_43031 = state_43012;
(statearr_43031[(8)] = inst_42965);

(statearr_43031[(9)] = inst_42964);

(statearr_43031[(10)] = inst_42967);

(statearr_43031[(11)] = inst_42966);

return statearr_43031;
})();
var statearr_43032_43065 = state_43012__$1;
(statearr_43032_43065[(2)] = null);

(statearr_43032_43065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (3))){
var inst_43010 = (state_43012[(2)]);
var state_43012__$1 = state_43012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43012__$1,inst_43010);
} else {
if((state_val_43013 === (12))){
var inst_42998 = (state_43012[(2)]);
var state_43012__$1 = state_43012;
var statearr_43033_43066 = state_43012__$1;
(statearr_43033_43066[(2)] = inst_42998);

(statearr_43033_43066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (2))){
var state_43012__$1 = state_43012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43012__$1,(4),in$);
} else {
if((state_val_43013 === (23))){
var inst_43006 = (state_43012[(2)]);
var state_43012__$1 = state_43012;
var statearr_43034_43067 = state_43012__$1;
(statearr_43034_43067[(2)] = inst_43006);

(statearr_43034_43067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (19))){
var inst_42993 = (state_43012[(2)]);
var state_43012__$1 = state_43012;
var statearr_43035_43068 = state_43012__$1;
(statearr_43035_43068[(2)] = inst_42993);

(statearr_43035_43068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (11))){
var inst_42964 = (state_43012[(9)]);
var inst_42978 = (state_43012[(7)]);
var inst_42978__$1 = cljs.core.seq.call(null,inst_42964);
var state_43012__$1 = (function (){var statearr_43036 = state_43012;
(statearr_43036[(7)] = inst_42978__$1);

return statearr_43036;
})();
if(inst_42978__$1){
var statearr_43037_43069 = state_43012__$1;
(statearr_43037_43069[(1)] = (14));

} else {
var statearr_43038_43070 = state_43012__$1;
(statearr_43038_43070[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (9))){
var inst_43000 = (state_43012[(2)]);
var inst_43001 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43012__$1 = (function (){var statearr_43039 = state_43012;
(statearr_43039[(15)] = inst_43000);

return statearr_43039;
})();
if(cljs.core.truth_(inst_43001)){
var statearr_43040_43071 = state_43012__$1;
(statearr_43040_43071[(1)] = (21));

} else {
var statearr_43041_43072 = state_43012__$1;
(statearr_43041_43072[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (5))){
var inst_42956 = cljs.core.async.close_BANG_.call(null,out);
var state_43012__$1 = state_43012;
var statearr_43042_43073 = state_43012__$1;
(statearr_43042_43073[(2)] = inst_42956);

(statearr_43042_43073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (14))){
var inst_42978 = (state_43012[(7)]);
var inst_42980 = cljs.core.chunked_seq_QMARK_.call(null,inst_42978);
var state_43012__$1 = state_43012;
if(inst_42980){
var statearr_43043_43074 = state_43012__$1;
(statearr_43043_43074[(1)] = (17));

} else {
var statearr_43044_43075 = state_43012__$1;
(statearr_43044_43075[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (16))){
var inst_42996 = (state_43012[(2)]);
var state_43012__$1 = state_43012;
var statearr_43045_43076 = state_43012__$1;
(statearr_43045_43076[(2)] = inst_42996);

(statearr_43045_43076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43013 === (10))){
var inst_42965 = (state_43012[(8)]);
var inst_42967 = (state_43012[(10)]);
var inst_42972 = cljs.core._nth.call(null,inst_42965,inst_42967);
var state_43012__$1 = state_43012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43012__$1,(13),out,inst_42972);
} else {
if((state_val_43013 === (18))){
var inst_42978 = (state_43012[(7)]);
var inst_42987 = cljs.core.first.call(null,inst_42978);
var state_43012__$1 = state_43012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43012__$1,(20),out,inst_42987);
} else {
if((state_val_43013 === (8))){
var inst_42967 = (state_43012[(10)]);
var inst_42966 = (state_43012[(11)]);
var inst_42969 = (inst_42967 < inst_42966);
var inst_42970 = inst_42969;
var state_43012__$1 = state_43012;
if(cljs.core.truth_(inst_42970)){
var statearr_43046_43077 = state_43012__$1;
(statearr_43046_43077[(1)] = (10));

} else {
var statearr_43047_43078 = state_43012__$1;
(statearr_43047_43078[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto__))
;
return ((function (switch__20099__auto__,c__20164__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_43051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43051[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__);

(statearr_43051[(1)] = (1));

return statearr_43051;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____1 = (function (state_43012){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_43012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e43052){if((e43052 instanceof Object)){
var ex__20103__auto__ = e43052;
var statearr_43053_43079 = state_43012;
(statearr_43053_43079[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43080 = state_43012;
state_43012 = G__43080;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__ = function(state_43012){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____1.call(this,state_43012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_43054 = f__20165__auto__.call(null);
(statearr_43054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_43054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__))
);

return c__20164__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43081 = [];
var len__17390__auto___43084 = arguments.length;
var i__17391__auto___43085 = (0);
while(true){
if((i__17391__auto___43085 < len__17390__auto___43084)){
args43081.push((arguments[i__17391__auto___43085]));

var G__43086 = (i__17391__auto___43085 + (1));
i__17391__auto___43085 = G__43086;
continue;
} else {
}
break;
}

var G__43083 = args43081.length;
switch (G__43083) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43081.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args43088 = [];
var len__17390__auto___43091 = arguments.length;
var i__17391__auto___43092 = (0);
while(true){
if((i__17391__auto___43092 < len__17390__auto___43091)){
args43088.push((arguments[i__17391__auto___43092]));

var G__43093 = (i__17391__auto___43092 + (1));
i__17391__auto___43092 = G__43093;
continue;
} else {
}
break;
}

var G__43090 = args43088.length;
switch (G__43090) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43088.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args43095 = [];
var len__17390__auto___43146 = arguments.length;
var i__17391__auto___43147 = (0);
while(true){
if((i__17391__auto___43147 < len__17390__auto___43146)){
args43095.push((arguments[i__17391__auto___43147]));

var G__43148 = (i__17391__auto___43147 + (1));
i__17391__auto___43147 = G__43148;
continue;
} else {
}
break;
}

var G__43097 = args43095.length;
switch (G__43097) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43095.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___43150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___43150,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___43150,out){
return (function (state_43121){
var state_val_43122 = (state_43121[(1)]);
if((state_val_43122 === (7))){
var inst_43116 = (state_43121[(2)]);
var state_43121__$1 = state_43121;
var statearr_43123_43151 = state_43121__$1;
(statearr_43123_43151[(2)] = inst_43116);

(statearr_43123_43151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (1))){
var inst_43098 = null;
var state_43121__$1 = (function (){var statearr_43124 = state_43121;
(statearr_43124[(7)] = inst_43098);

return statearr_43124;
})();
var statearr_43125_43152 = state_43121__$1;
(statearr_43125_43152[(2)] = null);

(statearr_43125_43152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (4))){
var inst_43101 = (state_43121[(8)]);
var inst_43101__$1 = (state_43121[(2)]);
var inst_43102 = (inst_43101__$1 == null);
var inst_43103 = cljs.core.not.call(null,inst_43102);
var state_43121__$1 = (function (){var statearr_43126 = state_43121;
(statearr_43126[(8)] = inst_43101__$1);

return statearr_43126;
})();
if(inst_43103){
var statearr_43127_43153 = state_43121__$1;
(statearr_43127_43153[(1)] = (5));

} else {
var statearr_43128_43154 = state_43121__$1;
(statearr_43128_43154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (6))){
var state_43121__$1 = state_43121;
var statearr_43129_43155 = state_43121__$1;
(statearr_43129_43155[(2)] = null);

(statearr_43129_43155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (3))){
var inst_43118 = (state_43121[(2)]);
var inst_43119 = cljs.core.async.close_BANG_.call(null,out);
var state_43121__$1 = (function (){var statearr_43130 = state_43121;
(statearr_43130[(9)] = inst_43118);

return statearr_43130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43121__$1,inst_43119);
} else {
if((state_val_43122 === (2))){
var state_43121__$1 = state_43121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43121__$1,(4),ch);
} else {
if((state_val_43122 === (11))){
var inst_43101 = (state_43121[(8)]);
var inst_43110 = (state_43121[(2)]);
var inst_43098 = inst_43101;
var state_43121__$1 = (function (){var statearr_43131 = state_43121;
(statearr_43131[(10)] = inst_43110);

(statearr_43131[(7)] = inst_43098);

return statearr_43131;
})();
var statearr_43132_43156 = state_43121__$1;
(statearr_43132_43156[(2)] = null);

(statearr_43132_43156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (9))){
var inst_43101 = (state_43121[(8)]);
var state_43121__$1 = state_43121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43121__$1,(11),out,inst_43101);
} else {
if((state_val_43122 === (5))){
var inst_43101 = (state_43121[(8)]);
var inst_43098 = (state_43121[(7)]);
var inst_43105 = cljs.core._EQ_.call(null,inst_43101,inst_43098);
var state_43121__$1 = state_43121;
if(inst_43105){
var statearr_43134_43157 = state_43121__$1;
(statearr_43134_43157[(1)] = (8));

} else {
var statearr_43135_43158 = state_43121__$1;
(statearr_43135_43158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (10))){
var inst_43113 = (state_43121[(2)]);
var state_43121__$1 = state_43121;
var statearr_43136_43159 = state_43121__$1;
(statearr_43136_43159[(2)] = inst_43113);

(statearr_43136_43159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (8))){
var inst_43098 = (state_43121[(7)]);
var tmp43133 = inst_43098;
var inst_43098__$1 = tmp43133;
var state_43121__$1 = (function (){var statearr_43137 = state_43121;
(statearr_43137[(7)] = inst_43098__$1);

return statearr_43137;
})();
var statearr_43138_43160 = state_43121__$1;
(statearr_43138_43160[(2)] = null);

(statearr_43138_43160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___43150,out))
;
return ((function (switch__20099__auto__,c__20164__auto___43150,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_43142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43142[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_43142[(1)] = (1));

return statearr_43142;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_43121){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_43121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e43143){if((e43143 instanceof Object)){
var ex__20103__auto__ = e43143;
var statearr_43144_43161 = state_43121;
(statearr_43144_43161[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43162 = state_43121;
state_43121 = G__43162;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_43121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_43121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___43150,out))
})();
var state__20166__auto__ = (function (){var statearr_43145 = f__20165__auto__.call(null);
(statearr_43145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___43150);

return statearr_43145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___43150,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43163 = [];
var len__17390__auto___43233 = arguments.length;
var i__17391__auto___43234 = (0);
while(true){
if((i__17391__auto___43234 < len__17390__auto___43233)){
args43163.push((arguments[i__17391__auto___43234]));

var G__43235 = (i__17391__auto___43234 + (1));
i__17391__auto___43234 = G__43235;
continue;
} else {
}
break;
}

var G__43165 = args43163.length;
switch (G__43165) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43163.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___43237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___43237,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___43237,out){
return (function (state_43203){
var state_val_43204 = (state_43203[(1)]);
if((state_val_43204 === (7))){
var inst_43199 = (state_43203[(2)]);
var state_43203__$1 = state_43203;
var statearr_43205_43238 = state_43203__$1;
(statearr_43205_43238[(2)] = inst_43199);

(statearr_43205_43238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (1))){
var inst_43166 = (new Array(n));
var inst_43167 = inst_43166;
var inst_43168 = (0);
var state_43203__$1 = (function (){var statearr_43206 = state_43203;
(statearr_43206[(7)] = inst_43168);

(statearr_43206[(8)] = inst_43167);

return statearr_43206;
})();
var statearr_43207_43239 = state_43203__$1;
(statearr_43207_43239[(2)] = null);

(statearr_43207_43239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (4))){
var inst_43171 = (state_43203[(9)]);
var inst_43171__$1 = (state_43203[(2)]);
var inst_43172 = (inst_43171__$1 == null);
var inst_43173 = cljs.core.not.call(null,inst_43172);
var state_43203__$1 = (function (){var statearr_43208 = state_43203;
(statearr_43208[(9)] = inst_43171__$1);

return statearr_43208;
})();
if(inst_43173){
var statearr_43209_43240 = state_43203__$1;
(statearr_43209_43240[(1)] = (5));

} else {
var statearr_43210_43241 = state_43203__$1;
(statearr_43210_43241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (15))){
var inst_43193 = (state_43203[(2)]);
var state_43203__$1 = state_43203;
var statearr_43211_43242 = state_43203__$1;
(statearr_43211_43242[(2)] = inst_43193);

(statearr_43211_43242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (13))){
var state_43203__$1 = state_43203;
var statearr_43212_43243 = state_43203__$1;
(statearr_43212_43243[(2)] = null);

(statearr_43212_43243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (6))){
var inst_43168 = (state_43203[(7)]);
var inst_43189 = (inst_43168 > (0));
var state_43203__$1 = state_43203;
if(cljs.core.truth_(inst_43189)){
var statearr_43213_43244 = state_43203__$1;
(statearr_43213_43244[(1)] = (12));

} else {
var statearr_43214_43245 = state_43203__$1;
(statearr_43214_43245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (3))){
var inst_43201 = (state_43203[(2)]);
var state_43203__$1 = state_43203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43203__$1,inst_43201);
} else {
if((state_val_43204 === (12))){
var inst_43167 = (state_43203[(8)]);
var inst_43191 = cljs.core.vec.call(null,inst_43167);
var state_43203__$1 = state_43203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43203__$1,(15),out,inst_43191);
} else {
if((state_val_43204 === (2))){
var state_43203__$1 = state_43203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43203__$1,(4),ch);
} else {
if((state_val_43204 === (11))){
var inst_43183 = (state_43203[(2)]);
var inst_43184 = (new Array(n));
var inst_43167 = inst_43184;
var inst_43168 = (0);
var state_43203__$1 = (function (){var statearr_43215 = state_43203;
(statearr_43215[(7)] = inst_43168);

(statearr_43215[(10)] = inst_43183);

(statearr_43215[(8)] = inst_43167);

return statearr_43215;
})();
var statearr_43216_43246 = state_43203__$1;
(statearr_43216_43246[(2)] = null);

(statearr_43216_43246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (9))){
var inst_43167 = (state_43203[(8)]);
var inst_43181 = cljs.core.vec.call(null,inst_43167);
var state_43203__$1 = state_43203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43203__$1,(11),out,inst_43181);
} else {
if((state_val_43204 === (5))){
var inst_43176 = (state_43203[(11)]);
var inst_43168 = (state_43203[(7)]);
var inst_43171 = (state_43203[(9)]);
var inst_43167 = (state_43203[(8)]);
var inst_43175 = (inst_43167[inst_43168] = inst_43171);
var inst_43176__$1 = (inst_43168 + (1));
var inst_43177 = (inst_43176__$1 < n);
var state_43203__$1 = (function (){var statearr_43217 = state_43203;
(statearr_43217[(11)] = inst_43176__$1);

(statearr_43217[(12)] = inst_43175);

return statearr_43217;
})();
if(cljs.core.truth_(inst_43177)){
var statearr_43218_43247 = state_43203__$1;
(statearr_43218_43247[(1)] = (8));

} else {
var statearr_43219_43248 = state_43203__$1;
(statearr_43219_43248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (14))){
var inst_43196 = (state_43203[(2)]);
var inst_43197 = cljs.core.async.close_BANG_.call(null,out);
var state_43203__$1 = (function (){var statearr_43221 = state_43203;
(statearr_43221[(13)] = inst_43196);

return statearr_43221;
})();
var statearr_43222_43249 = state_43203__$1;
(statearr_43222_43249[(2)] = inst_43197);

(statearr_43222_43249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (10))){
var inst_43187 = (state_43203[(2)]);
var state_43203__$1 = state_43203;
var statearr_43223_43250 = state_43203__$1;
(statearr_43223_43250[(2)] = inst_43187);

(statearr_43223_43250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43204 === (8))){
var inst_43176 = (state_43203[(11)]);
var inst_43167 = (state_43203[(8)]);
var tmp43220 = inst_43167;
var inst_43167__$1 = tmp43220;
var inst_43168 = inst_43176;
var state_43203__$1 = (function (){var statearr_43224 = state_43203;
(statearr_43224[(7)] = inst_43168);

(statearr_43224[(8)] = inst_43167__$1);

return statearr_43224;
})();
var statearr_43225_43251 = state_43203__$1;
(statearr_43225_43251[(2)] = null);

(statearr_43225_43251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___43237,out))
;
return ((function (switch__20099__auto__,c__20164__auto___43237,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_43229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43229[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_43229[(1)] = (1));

return statearr_43229;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_43203){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_43203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e43230){if((e43230 instanceof Object)){
var ex__20103__auto__ = e43230;
var statearr_43231_43252 = state_43203;
(statearr_43231_43252[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43253 = state_43203;
state_43203 = G__43253;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_43203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_43203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___43237,out))
})();
var state__20166__auto__ = (function (){var statearr_43232 = f__20165__auto__.call(null);
(statearr_43232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___43237);

return statearr_43232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___43237,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43254 = [];
var len__17390__auto___43328 = arguments.length;
var i__17391__auto___43329 = (0);
while(true){
if((i__17391__auto___43329 < len__17390__auto___43328)){
args43254.push((arguments[i__17391__auto___43329]));

var G__43330 = (i__17391__auto___43329 + (1));
i__17391__auto___43329 = G__43330;
continue;
} else {
}
break;
}

var G__43256 = args43254.length;
switch (G__43256) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43254.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___43332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___43332,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___43332,out){
return (function (state_43298){
var state_val_43299 = (state_43298[(1)]);
if((state_val_43299 === (7))){
var inst_43294 = (state_43298[(2)]);
var state_43298__$1 = state_43298;
var statearr_43300_43333 = state_43298__$1;
(statearr_43300_43333[(2)] = inst_43294);

(statearr_43300_43333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (1))){
var inst_43257 = [];
var inst_43258 = inst_43257;
var inst_43259 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43298__$1 = (function (){var statearr_43301 = state_43298;
(statearr_43301[(7)] = inst_43259);

(statearr_43301[(8)] = inst_43258);

return statearr_43301;
})();
var statearr_43302_43334 = state_43298__$1;
(statearr_43302_43334[(2)] = null);

(statearr_43302_43334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (4))){
var inst_43262 = (state_43298[(9)]);
var inst_43262__$1 = (state_43298[(2)]);
var inst_43263 = (inst_43262__$1 == null);
var inst_43264 = cljs.core.not.call(null,inst_43263);
var state_43298__$1 = (function (){var statearr_43303 = state_43298;
(statearr_43303[(9)] = inst_43262__$1);

return statearr_43303;
})();
if(inst_43264){
var statearr_43304_43335 = state_43298__$1;
(statearr_43304_43335[(1)] = (5));

} else {
var statearr_43305_43336 = state_43298__$1;
(statearr_43305_43336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (15))){
var inst_43288 = (state_43298[(2)]);
var state_43298__$1 = state_43298;
var statearr_43306_43337 = state_43298__$1;
(statearr_43306_43337[(2)] = inst_43288);

(statearr_43306_43337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (13))){
var state_43298__$1 = state_43298;
var statearr_43307_43338 = state_43298__$1;
(statearr_43307_43338[(2)] = null);

(statearr_43307_43338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (6))){
var inst_43258 = (state_43298[(8)]);
var inst_43283 = inst_43258.length;
var inst_43284 = (inst_43283 > (0));
var state_43298__$1 = state_43298;
if(cljs.core.truth_(inst_43284)){
var statearr_43308_43339 = state_43298__$1;
(statearr_43308_43339[(1)] = (12));

} else {
var statearr_43309_43340 = state_43298__$1;
(statearr_43309_43340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (3))){
var inst_43296 = (state_43298[(2)]);
var state_43298__$1 = state_43298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43298__$1,inst_43296);
} else {
if((state_val_43299 === (12))){
var inst_43258 = (state_43298[(8)]);
var inst_43286 = cljs.core.vec.call(null,inst_43258);
var state_43298__$1 = state_43298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43298__$1,(15),out,inst_43286);
} else {
if((state_val_43299 === (2))){
var state_43298__$1 = state_43298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43298__$1,(4),ch);
} else {
if((state_val_43299 === (11))){
var inst_43266 = (state_43298[(10)]);
var inst_43262 = (state_43298[(9)]);
var inst_43276 = (state_43298[(2)]);
var inst_43277 = [];
var inst_43278 = inst_43277.push(inst_43262);
var inst_43258 = inst_43277;
var inst_43259 = inst_43266;
var state_43298__$1 = (function (){var statearr_43310 = state_43298;
(statearr_43310[(7)] = inst_43259);

(statearr_43310[(8)] = inst_43258);

(statearr_43310[(11)] = inst_43276);

(statearr_43310[(12)] = inst_43278);

return statearr_43310;
})();
var statearr_43311_43341 = state_43298__$1;
(statearr_43311_43341[(2)] = null);

(statearr_43311_43341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (9))){
var inst_43258 = (state_43298[(8)]);
var inst_43274 = cljs.core.vec.call(null,inst_43258);
var state_43298__$1 = state_43298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43298__$1,(11),out,inst_43274);
} else {
if((state_val_43299 === (5))){
var inst_43259 = (state_43298[(7)]);
var inst_43266 = (state_43298[(10)]);
var inst_43262 = (state_43298[(9)]);
var inst_43266__$1 = f.call(null,inst_43262);
var inst_43267 = cljs.core._EQ_.call(null,inst_43266__$1,inst_43259);
var inst_43268 = cljs.core.keyword_identical_QMARK_.call(null,inst_43259,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43269 = (inst_43267) || (inst_43268);
var state_43298__$1 = (function (){var statearr_43312 = state_43298;
(statearr_43312[(10)] = inst_43266__$1);

return statearr_43312;
})();
if(cljs.core.truth_(inst_43269)){
var statearr_43313_43342 = state_43298__$1;
(statearr_43313_43342[(1)] = (8));

} else {
var statearr_43314_43343 = state_43298__$1;
(statearr_43314_43343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (14))){
var inst_43291 = (state_43298[(2)]);
var inst_43292 = cljs.core.async.close_BANG_.call(null,out);
var state_43298__$1 = (function (){var statearr_43316 = state_43298;
(statearr_43316[(13)] = inst_43291);

return statearr_43316;
})();
var statearr_43317_43344 = state_43298__$1;
(statearr_43317_43344[(2)] = inst_43292);

(statearr_43317_43344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (10))){
var inst_43281 = (state_43298[(2)]);
var state_43298__$1 = state_43298;
var statearr_43318_43345 = state_43298__$1;
(statearr_43318_43345[(2)] = inst_43281);

(statearr_43318_43345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43299 === (8))){
var inst_43266 = (state_43298[(10)]);
var inst_43258 = (state_43298[(8)]);
var inst_43262 = (state_43298[(9)]);
var inst_43271 = inst_43258.push(inst_43262);
var tmp43315 = inst_43258;
var inst_43258__$1 = tmp43315;
var inst_43259 = inst_43266;
var state_43298__$1 = (function (){var statearr_43319 = state_43298;
(statearr_43319[(7)] = inst_43259);

(statearr_43319[(8)] = inst_43258__$1);

(statearr_43319[(14)] = inst_43271);

return statearr_43319;
})();
var statearr_43320_43346 = state_43298__$1;
(statearr_43320_43346[(2)] = null);

(statearr_43320_43346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20164__auto___43332,out))
;
return ((function (switch__20099__auto__,c__20164__auto___43332,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_43324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43324[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_43324[(1)] = (1));

return statearr_43324;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_43298){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_43298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e43325){if((e43325 instanceof Object)){
var ex__20103__auto__ = e43325;
var statearr_43326_43347 = state_43298;
(statearr_43326_43347[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43348 = state_43298;
state_43298 = G__43348;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_43298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_43298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___43332,out))
})();
var state__20166__auto__ = (function (){var statearr_43327 = f__20165__auto__.call(null);
(statearr_43327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___43332);

return statearr_43327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___43332,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map