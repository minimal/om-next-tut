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
if(typeof cljs.core.async.t_cljs$core$async59683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59683 = (function (fn_handler,f,meta59684){
this.fn_handler = fn_handler;
this.f = f;
this.meta59684 = meta59684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59685,meta59684__$1){
var self__ = this;
var _59685__$1 = this;
return (new cljs.core.async.t_cljs$core$async59683(self__.fn_handler,self__.f,meta59684__$1));
});

cljs.core.async.t_cljs$core$async59683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59685){
var self__ = this;
var _59685__$1 = this;
return self__.meta59684;
});

cljs.core.async.t_cljs$core$async59683.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async59683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async59683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async59683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta59684","meta59684",1602627278,null)], null);
});

cljs.core.async.t_cljs$core$async59683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59683";

cljs.core.async.t_cljs$core$async59683.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async59683");
});

cljs.core.async.__GT_t_cljs$core$async59683 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async59683(fn_handler__$1,f__$1,meta59684){
return (new cljs.core.async.t_cljs$core$async59683(fn_handler__$1,f__$1,meta59684));
});

}

return (new cljs.core.async.t_cljs$core$async59683(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args59688 = [];
var len__17390__auto___59691 = arguments.length;
var i__17391__auto___59692 = (0);
while(true){
if((i__17391__auto___59692 < len__17390__auto___59691)){
args59688.push((arguments[i__17391__auto___59692]));

var G__59693 = (i__17391__auto___59692 + (1));
i__17391__auto___59692 = G__59693;
continue;
} else {
}
break;
}

var G__59690 = args59688.length;
switch (G__59690) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59688.length)].join('')));

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
var args59695 = [];
var len__17390__auto___59698 = arguments.length;
var i__17391__auto___59699 = (0);
while(true){
if((i__17391__auto___59699 < len__17390__auto___59698)){
args59695.push((arguments[i__17391__auto___59699]));

var G__59700 = (i__17391__auto___59699 + (1));
i__17391__auto___59699 = G__59700;
continue;
} else {
}
break;
}

var G__59697 = args59695.length;
switch (G__59697) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59695.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_59702 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_59702);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_59702,ret){
return (function (){
return fn1.call(null,val_59702);
});})(val_59702,ret))
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
var args59703 = [];
var len__17390__auto___59706 = arguments.length;
var i__17391__auto___59707 = (0);
while(true){
if((i__17391__auto___59707 < len__17390__auto___59706)){
args59703.push((arguments[i__17391__auto___59707]));

var G__59708 = (i__17391__auto___59707 + (1));
i__17391__auto___59707 = G__59708;
continue;
} else {
}
break;
}

var G__59705 = args59703.length;
switch (G__59705) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59703.length)].join('')));

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
var n__17235__auto___59710 = n;
var x_59711 = (0);
while(true){
if((x_59711 < n__17235__auto___59710)){
(a[x_59711] = (0));

var G__59712 = (x_59711 + (1));
x_59711 = G__59712;
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

var G__59713 = (i + (1));
i = G__59713;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async59717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59717 = (function (alt_flag,flag,meta59718){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta59718 = meta59718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_59719,meta59718__$1){
var self__ = this;
var _59719__$1 = this;
return (new cljs.core.async.t_cljs$core$async59717(self__.alt_flag,self__.flag,meta59718__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async59717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_59719){
var self__ = this;
var _59719__$1 = this;
return self__.meta59718;
});})(flag))
;

cljs.core.async.t_cljs$core$async59717.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async59717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async59717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async59717.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta59718","meta59718",-1841715638,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async59717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59717";

cljs.core.async.t_cljs$core$async59717.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async59717");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async59717 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async59717(alt_flag__$1,flag__$1,meta59718){
return (new cljs.core.async.t_cljs$core$async59717(alt_flag__$1,flag__$1,meta59718));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async59717(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async59723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59723 = (function (alt_handler,flag,cb,meta59724){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta59724 = meta59724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59725,meta59724__$1){
var self__ = this;
var _59725__$1 = this;
return (new cljs.core.async.t_cljs$core$async59723(self__.alt_handler,self__.flag,self__.cb,meta59724__$1));
});

cljs.core.async.t_cljs$core$async59723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59725){
var self__ = this;
var _59725__$1 = this;
return self__.meta59724;
});

cljs.core.async.t_cljs$core$async59723.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async59723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async59723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async59723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta59724","meta59724",591335436,null)], null);
});

cljs.core.async.t_cljs$core$async59723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59723";

cljs.core.async.t_cljs$core$async59723.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async59723");
});

cljs.core.async.__GT_t_cljs$core$async59723 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async59723(alt_handler__$1,flag__$1,cb__$1,meta59724){
return (new cljs.core.async.t_cljs$core$async59723(alt_handler__$1,flag__$1,cb__$1,meta59724));
});

}

return (new cljs.core.async.t_cljs$core$async59723(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__59726_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59726_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59727_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59727_SHARP_,port], null));
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
var G__59728 = (i + (1));
i = G__59728;
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
var len__17390__auto___59734 = arguments.length;
var i__17391__auto___59735 = (0);
while(true){
if((i__17391__auto___59735 < len__17390__auto___59734)){
args__17397__auto__.push((arguments[i__17391__auto___59735]));

var G__59736 = (i__17391__auto___59735 + (1));
i__17391__auto___59735 = G__59736;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59731){
var map__59732 = p__59731;
var map__59732__$1 = ((((!((map__59732 == null)))?((((map__59732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59732):map__59732);
var opts = map__59732__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59729){
var G__59730 = cljs.core.first.call(null,seq59729);
var seq59729__$1 = cljs.core.next.call(null,seq59729);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59730,seq59729__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args59737 = [];
var len__17390__auto___59787 = arguments.length;
var i__17391__auto___59788 = (0);
while(true){
if((i__17391__auto___59788 < len__17390__auto___59787)){
args59737.push((arguments[i__17391__auto___59788]));

var G__59789 = (i__17391__auto___59788 + (1));
i__17391__auto___59788 = G__59789;
continue;
} else {
}
break;
}

var G__59739 = args59737.length;
switch (G__59739) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59737.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20164__auto___59791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___59791){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___59791){
return (function (state_59763){
var state_val_59764 = (state_59763[(1)]);
if((state_val_59764 === (7))){
var inst_59759 = (state_59763[(2)]);
var state_59763__$1 = state_59763;
var statearr_59765_59792 = state_59763__$1;
(statearr_59765_59792[(2)] = inst_59759);

(statearr_59765_59792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (1))){
var state_59763__$1 = state_59763;
var statearr_59766_59793 = state_59763__$1;
(statearr_59766_59793[(2)] = null);

(statearr_59766_59793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (4))){
var inst_59742 = (state_59763[(7)]);
var inst_59742__$1 = (state_59763[(2)]);
var inst_59743 = (inst_59742__$1 == null);
var state_59763__$1 = (function (){var statearr_59767 = state_59763;
(statearr_59767[(7)] = inst_59742__$1);

return statearr_59767;
})();
if(cljs.core.truth_(inst_59743)){
var statearr_59768_59794 = state_59763__$1;
(statearr_59768_59794[(1)] = (5));

} else {
var statearr_59769_59795 = state_59763__$1;
(statearr_59769_59795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (13))){
var state_59763__$1 = state_59763;
var statearr_59770_59796 = state_59763__$1;
(statearr_59770_59796[(2)] = null);

(statearr_59770_59796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (6))){
var inst_59742 = (state_59763[(7)]);
var state_59763__$1 = state_59763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59763__$1,(11),to,inst_59742);
} else {
if((state_val_59764 === (3))){
var inst_59761 = (state_59763[(2)]);
var state_59763__$1 = state_59763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59763__$1,inst_59761);
} else {
if((state_val_59764 === (12))){
var state_59763__$1 = state_59763;
var statearr_59771_59797 = state_59763__$1;
(statearr_59771_59797[(2)] = null);

(statearr_59771_59797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (2))){
var state_59763__$1 = state_59763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59763__$1,(4),from);
} else {
if((state_val_59764 === (11))){
var inst_59752 = (state_59763[(2)]);
var state_59763__$1 = state_59763;
if(cljs.core.truth_(inst_59752)){
var statearr_59772_59798 = state_59763__$1;
(statearr_59772_59798[(1)] = (12));

} else {
var statearr_59773_59799 = state_59763__$1;
(statearr_59773_59799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (9))){
var state_59763__$1 = state_59763;
var statearr_59774_59800 = state_59763__$1;
(statearr_59774_59800[(2)] = null);

(statearr_59774_59800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (5))){
var state_59763__$1 = state_59763;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59775_59801 = state_59763__$1;
(statearr_59775_59801[(1)] = (8));

} else {
var statearr_59776_59802 = state_59763__$1;
(statearr_59776_59802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (14))){
var inst_59757 = (state_59763[(2)]);
var state_59763__$1 = state_59763;
var statearr_59777_59803 = state_59763__$1;
(statearr_59777_59803[(2)] = inst_59757);

(statearr_59777_59803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (10))){
var inst_59749 = (state_59763[(2)]);
var state_59763__$1 = state_59763;
var statearr_59778_59804 = state_59763__$1;
(statearr_59778_59804[(2)] = inst_59749);

(statearr_59778_59804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59764 === (8))){
var inst_59746 = cljs.core.async.close_BANG_.call(null,to);
var state_59763__$1 = state_59763;
var statearr_59779_59805 = state_59763__$1;
(statearr_59779_59805[(2)] = inst_59746);

(statearr_59779_59805[(1)] = (10));


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
});})(c__20164__auto___59791))
;
return ((function (switch__20099__auto__,c__20164__auto___59791){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_59783 = [null,null,null,null,null,null,null,null];
(statearr_59783[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_59783[(1)] = (1));

return statearr_59783;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_59763){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_59763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e59784){if((e59784 instanceof Object)){
var ex__20103__auto__ = e59784;
var statearr_59785_59806 = state_59763;
(statearr_59785_59806[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59807 = state_59763;
state_59763 = G__59807;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_59763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_59763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___59791))
})();
var state__20166__auto__ = (function (){var statearr_59786 = f__20165__auto__.call(null);
(statearr_59786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___59791);

return statearr_59786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___59791))
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
return (function (p__59991){
var vec__59992 = p__59991;
var v = cljs.core.nth.call(null,vec__59992,(0),null);
var p = cljs.core.nth.call(null,vec__59992,(1),null);
var job = vec__59992;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20164__auto___60174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___60174,res,vec__59992,v,p,job,jobs,results){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___60174,res,vec__59992,v,p,job,jobs,results){
return (function (state_59997){
var state_val_59998 = (state_59997[(1)]);
if((state_val_59998 === (1))){
var state_59997__$1 = state_59997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59997__$1,(2),res,v);
} else {
if((state_val_59998 === (2))){
var inst_59994 = (state_59997[(2)]);
var inst_59995 = cljs.core.async.close_BANG_.call(null,res);
var state_59997__$1 = (function (){var statearr_59999 = state_59997;
(statearr_59999[(7)] = inst_59994);

return statearr_59999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59997__$1,inst_59995);
} else {
return null;
}
}
});})(c__20164__auto___60174,res,vec__59992,v,p,job,jobs,results))
;
return ((function (switch__20099__auto__,c__20164__auto___60174,res,vec__59992,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_60003 = [null,null,null,null,null,null,null,null];
(statearr_60003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_60003[(1)] = (1));

return statearr_60003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_59997){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_59997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60004){if((e60004 instanceof Object)){
var ex__20103__auto__ = e60004;
var statearr_60005_60175 = state_59997;
(statearr_60005_60175[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60176 = state_59997;
state_59997 = G__60176;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_59997){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_59997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___60174,res,vec__59992,v,p,job,jobs,results))
})();
var state__20166__auto__ = (function (){var statearr_60006 = f__20165__auto__.call(null);
(statearr_60006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___60174);

return statearr_60006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___60174,res,vec__59992,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__60007){
var vec__60008 = p__60007;
var v = cljs.core.nth.call(null,vec__60008,(0),null);
var p = cljs.core.nth.call(null,vec__60008,(1),null);
var job = vec__60008;
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
var n__17235__auto___60177 = n;
var __60178 = (0);
while(true){
if((__60178 < n__17235__auto___60177)){
var G__60009_60179 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__60009_60179) {
case "compute":
var c__20164__auto___60181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60178,c__20164__auto___60181,G__60009_60179,n__17235__auto___60177,jobs,results,process,async){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (__60178,c__20164__auto___60181,G__60009_60179,n__17235__auto___60177,jobs,results,process,async){
return (function (state_60022){
var state_val_60023 = (state_60022[(1)]);
if((state_val_60023 === (1))){
var state_60022__$1 = state_60022;
var statearr_60024_60182 = state_60022__$1;
(statearr_60024_60182[(2)] = null);

(statearr_60024_60182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60023 === (2))){
var state_60022__$1 = state_60022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60022__$1,(4),jobs);
} else {
if((state_val_60023 === (3))){
var inst_60020 = (state_60022[(2)]);
var state_60022__$1 = state_60022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60022__$1,inst_60020);
} else {
if((state_val_60023 === (4))){
var inst_60012 = (state_60022[(2)]);
var inst_60013 = process.call(null,inst_60012);
var state_60022__$1 = state_60022;
if(cljs.core.truth_(inst_60013)){
var statearr_60025_60183 = state_60022__$1;
(statearr_60025_60183[(1)] = (5));

} else {
var statearr_60026_60184 = state_60022__$1;
(statearr_60026_60184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60023 === (5))){
var state_60022__$1 = state_60022;
var statearr_60027_60185 = state_60022__$1;
(statearr_60027_60185[(2)] = null);

(statearr_60027_60185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60023 === (6))){
var state_60022__$1 = state_60022;
var statearr_60028_60186 = state_60022__$1;
(statearr_60028_60186[(2)] = null);

(statearr_60028_60186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60023 === (7))){
var inst_60018 = (state_60022[(2)]);
var state_60022__$1 = state_60022;
var statearr_60029_60187 = state_60022__$1;
(statearr_60029_60187[(2)] = inst_60018);

(statearr_60029_60187[(1)] = (3));


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
});})(__60178,c__20164__auto___60181,G__60009_60179,n__17235__auto___60177,jobs,results,process,async))
;
return ((function (__60178,switch__20099__auto__,c__20164__auto___60181,G__60009_60179,n__17235__auto___60177,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_60033 = [null,null,null,null,null,null,null];
(statearr_60033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_60033[(1)] = (1));

return statearr_60033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_60022){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_60022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60034){if((e60034 instanceof Object)){
var ex__20103__auto__ = e60034;
var statearr_60035_60188 = state_60022;
(statearr_60035_60188[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60189 = state_60022;
state_60022 = G__60189;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_60022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_60022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(__60178,switch__20099__auto__,c__20164__auto___60181,G__60009_60179,n__17235__auto___60177,jobs,results,process,async))
})();
var state__20166__auto__ = (function (){var statearr_60036 = f__20165__auto__.call(null);
(statearr_60036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___60181);

return statearr_60036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(__60178,c__20164__auto___60181,G__60009_60179,n__17235__auto___60177,jobs,results,process,async))
);


break;
case "async":
var c__20164__auto___60190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60178,c__20164__auto___60190,G__60009_60179,n__17235__auto___60177,jobs,results,process,async){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (__60178,c__20164__auto___60190,G__60009_60179,n__17235__auto___60177,jobs,results,process,async){
return (function (state_60049){
var state_val_60050 = (state_60049[(1)]);
if((state_val_60050 === (1))){
var state_60049__$1 = state_60049;
var statearr_60051_60191 = state_60049__$1;
(statearr_60051_60191[(2)] = null);

(statearr_60051_60191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (2))){
var state_60049__$1 = state_60049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60049__$1,(4),jobs);
} else {
if((state_val_60050 === (3))){
var inst_60047 = (state_60049[(2)]);
var state_60049__$1 = state_60049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60049__$1,inst_60047);
} else {
if((state_val_60050 === (4))){
var inst_60039 = (state_60049[(2)]);
var inst_60040 = async.call(null,inst_60039);
var state_60049__$1 = state_60049;
if(cljs.core.truth_(inst_60040)){
var statearr_60052_60192 = state_60049__$1;
(statearr_60052_60192[(1)] = (5));

} else {
var statearr_60053_60193 = state_60049__$1;
(statearr_60053_60193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (5))){
var state_60049__$1 = state_60049;
var statearr_60054_60194 = state_60049__$1;
(statearr_60054_60194[(2)] = null);

(statearr_60054_60194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (6))){
var state_60049__$1 = state_60049;
var statearr_60055_60195 = state_60049__$1;
(statearr_60055_60195[(2)] = null);

(statearr_60055_60195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (7))){
var inst_60045 = (state_60049[(2)]);
var state_60049__$1 = state_60049;
var statearr_60056_60196 = state_60049__$1;
(statearr_60056_60196[(2)] = inst_60045);

(statearr_60056_60196[(1)] = (3));


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
});})(__60178,c__20164__auto___60190,G__60009_60179,n__17235__auto___60177,jobs,results,process,async))
;
return ((function (__60178,switch__20099__auto__,c__20164__auto___60190,G__60009_60179,n__17235__auto___60177,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_60060 = [null,null,null,null,null,null,null];
(statearr_60060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_60060[(1)] = (1));

return statearr_60060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_60049){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_60049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60061){if((e60061 instanceof Object)){
var ex__20103__auto__ = e60061;
var statearr_60062_60197 = state_60049;
(statearr_60062_60197[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60198 = state_60049;
state_60049 = G__60198;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_60049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_60049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(__60178,switch__20099__auto__,c__20164__auto___60190,G__60009_60179,n__17235__auto___60177,jobs,results,process,async))
})();
var state__20166__auto__ = (function (){var statearr_60063 = f__20165__auto__.call(null);
(statearr_60063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___60190);

return statearr_60063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(__60178,c__20164__auto___60190,G__60009_60179,n__17235__auto___60177,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__60199 = (__60178 + (1));
__60178 = G__60199;
continue;
} else {
}
break;
}

var c__20164__auto___60200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___60200,jobs,results,process,async){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___60200,jobs,results,process,async){
return (function (state_60085){
var state_val_60086 = (state_60085[(1)]);
if((state_val_60086 === (1))){
var state_60085__$1 = state_60085;
var statearr_60087_60201 = state_60085__$1;
(statearr_60087_60201[(2)] = null);

(statearr_60087_60201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60086 === (2))){
var state_60085__$1 = state_60085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60085__$1,(4),from);
} else {
if((state_val_60086 === (3))){
var inst_60083 = (state_60085[(2)]);
var state_60085__$1 = state_60085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60085__$1,inst_60083);
} else {
if((state_val_60086 === (4))){
var inst_60066 = (state_60085[(7)]);
var inst_60066__$1 = (state_60085[(2)]);
var inst_60067 = (inst_60066__$1 == null);
var state_60085__$1 = (function (){var statearr_60088 = state_60085;
(statearr_60088[(7)] = inst_60066__$1);

return statearr_60088;
})();
if(cljs.core.truth_(inst_60067)){
var statearr_60089_60202 = state_60085__$1;
(statearr_60089_60202[(1)] = (5));

} else {
var statearr_60090_60203 = state_60085__$1;
(statearr_60090_60203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60086 === (5))){
var inst_60069 = cljs.core.async.close_BANG_.call(null,jobs);
var state_60085__$1 = state_60085;
var statearr_60091_60204 = state_60085__$1;
(statearr_60091_60204[(2)] = inst_60069);

(statearr_60091_60204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60086 === (6))){
var inst_60066 = (state_60085[(7)]);
var inst_60071 = (state_60085[(8)]);
var inst_60071__$1 = cljs.core.async.chan.call(null,(1));
var inst_60072 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60073 = [inst_60066,inst_60071__$1];
var inst_60074 = (new cljs.core.PersistentVector(null,2,(5),inst_60072,inst_60073,null));
var state_60085__$1 = (function (){var statearr_60092 = state_60085;
(statearr_60092[(8)] = inst_60071__$1);

return statearr_60092;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60085__$1,(8),jobs,inst_60074);
} else {
if((state_val_60086 === (7))){
var inst_60081 = (state_60085[(2)]);
var state_60085__$1 = state_60085;
var statearr_60093_60205 = state_60085__$1;
(statearr_60093_60205[(2)] = inst_60081);

(statearr_60093_60205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60086 === (8))){
var inst_60071 = (state_60085[(8)]);
var inst_60076 = (state_60085[(2)]);
var state_60085__$1 = (function (){var statearr_60094 = state_60085;
(statearr_60094[(9)] = inst_60076);

return statearr_60094;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60085__$1,(9),results,inst_60071);
} else {
if((state_val_60086 === (9))){
var inst_60078 = (state_60085[(2)]);
var state_60085__$1 = (function (){var statearr_60095 = state_60085;
(statearr_60095[(10)] = inst_60078);

return statearr_60095;
})();
var statearr_60096_60206 = state_60085__$1;
(statearr_60096_60206[(2)] = null);

(statearr_60096_60206[(1)] = (2));


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
});})(c__20164__auto___60200,jobs,results,process,async))
;
return ((function (switch__20099__auto__,c__20164__auto___60200,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0 = (function (){
var statearr_60100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_60100[(1)] = (1));

return statearr_60100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_60085){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_60085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60101){if((e60101 instanceof Object)){
var ex__20103__auto__ = e60101;
var statearr_60102_60207 = state_60085;
(statearr_60102_60207[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60208 = state_60085;
state_60085 = G__60208;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_60085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_60085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___60200,jobs,results,process,async))
})();
var state__20166__auto__ = (function (){var statearr_60103 = f__20165__auto__.call(null);
(statearr_60103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___60200);

return statearr_60103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___60200,jobs,results,process,async))
);


var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__,jobs,results,process,async){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__,jobs,results,process,async){
return (function (state_60141){
var state_val_60142 = (state_60141[(1)]);
if((state_val_60142 === (7))){
var inst_60137 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
var statearr_60143_60209 = state_60141__$1;
(statearr_60143_60209[(2)] = inst_60137);

(statearr_60143_60209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (20))){
var state_60141__$1 = state_60141;
var statearr_60144_60210 = state_60141__$1;
(statearr_60144_60210[(2)] = null);

(statearr_60144_60210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (1))){
var state_60141__$1 = state_60141;
var statearr_60145_60211 = state_60141__$1;
(statearr_60145_60211[(2)] = null);

(statearr_60145_60211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (4))){
var inst_60106 = (state_60141[(7)]);
var inst_60106__$1 = (state_60141[(2)]);
var inst_60107 = (inst_60106__$1 == null);
var state_60141__$1 = (function (){var statearr_60146 = state_60141;
(statearr_60146[(7)] = inst_60106__$1);

return statearr_60146;
})();
if(cljs.core.truth_(inst_60107)){
var statearr_60147_60212 = state_60141__$1;
(statearr_60147_60212[(1)] = (5));

} else {
var statearr_60148_60213 = state_60141__$1;
(statearr_60148_60213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (15))){
var inst_60119 = (state_60141[(8)]);
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60141__$1,(18),to,inst_60119);
} else {
if((state_val_60142 === (21))){
var inst_60132 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
var statearr_60149_60214 = state_60141__$1;
(statearr_60149_60214[(2)] = inst_60132);

(statearr_60149_60214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (13))){
var inst_60134 = (state_60141[(2)]);
var state_60141__$1 = (function (){var statearr_60150 = state_60141;
(statearr_60150[(9)] = inst_60134);

return statearr_60150;
})();
var statearr_60151_60215 = state_60141__$1;
(statearr_60151_60215[(2)] = null);

(statearr_60151_60215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (6))){
var inst_60106 = (state_60141[(7)]);
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60141__$1,(11),inst_60106);
} else {
if((state_val_60142 === (17))){
var inst_60127 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
if(cljs.core.truth_(inst_60127)){
var statearr_60152_60216 = state_60141__$1;
(statearr_60152_60216[(1)] = (19));

} else {
var statearr_60153_60217 = state_60141__$1;
(statearr_60153_60217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (3))){
var inst_60139 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60141__$1,inst_60139);
} else {
if((state_val_60142 === (12))){
var inst_60116 = (state_60141[(10)]);
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60141__$1,(14),inst_60116);
} else {
if((state_val_60142 === (2))){
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60141__$1,(4),results);
} else {
if((state_val_60142 === (19))){
var state_60141__$1 = state_60141;
var statearr_60154_60218 = state_60141__$1;
(statearr_60154_60218[(2)] = null);

(statearr_60154_60218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (11))){
var inst_60116 = (state_60141[(2)]);
var state_60141__$1 = (function (){var statearr_60155 = state_60141;
(statearr_60155[(10)] = inst_60116);

return statearr_60155;
})();
var statearr_60156_60219 = state_60141__$1;
(statearr_60156_60219[(2)] = null);

(statearr_60156_60219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (9))){
var state_60141__$1 = state_60141;
var statearr_60157_60220 = state_60141__$1;
(statearr_60157_60220[(2)] = null);

(statearr_60157_60220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (5))){
var state_60141__$1 = state_60141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60158_60221 = state_60141__$1;
(statearr_60158_60221[(1)] = (8));

} else {
var statearr_60159_60222 = state_60141__$1;
(statearr_60159_60222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (14))){
var inst_60119 = (state_60141[(8)]);
var inst_60121 = (state_60141[(11)]);
var inst_60119__$1 = (state_60141[(2)]);
var inst_60120 = (inst_60119__$1 == null);
var inst_60121__$1 = cljs.core.not.call(null,inst_60120);
var state_60141__$1 = (function (){var statearr_60160 = state_60141;
(statearr_60160[(8)] = inst_60119__$1);

(statearr_60160[(11)] = inst_60121__$1);

return statearr_60160;
})();
if(inst_60121__$1){
var statearr_60161_60223 = state_60141__$1;
(statearr_60161_60223[(1)] = (15));

} else {
var statearr_60162_60224 = state_60141__$1;
(statearr_60162_60224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (16))){
var inst_60121 = (state_60141[(11)]);
var state_60141__$1 = state_60141;
var statearr_60163_60225 = state_60141__$1;
(statearr_60163_60225[(2)] = inst_60121);

(statearr_60163_60225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (10))){
var inst_60113 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
var statearr_60164_60226 = state_60141__$1;
(statearr_60164_60226[(2)] = inst_60113);

(statearr_60164_60226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (18))){
var inst_60124 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
var statearr_60165_60227 = state_60141__$1;
(statearr_60165_60227[(2)] = inst_60124);

(statearr_60165_60227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (8))){
var inst_60110 = cljs.core.async.close_BANG_.call(null,to);
var state_60141__$1 = state_60141;
var statearr_60166_60228 = state_60141__$1;
(statearr_60166_60228[(2)] = inst_60110);

(statearr_60166_60228[(1)] = (10));


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
var statearr_60170 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__);

(statearr_60170[(1)] = (1));

return statearr_60170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1 = (function (state_60141){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_60141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60171){if((e60171 instanceof Object)){
var ex__20103__auto__ = e60171;
var statearr_60172_60229 = state_60141;
(statearr_60172_60229[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60230 = state_60141;
state_60141 = G__60230;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__ = function(state_60141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1.call(this,state_60141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__,jobs,results,process,async))
})();
var state__20166__auto__ = (function (){var statearr_60173 = f__20165__auto__.call(null);
(statearr_60173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_60173;
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
var args60231 = [];
var len__17390__auto___60234 = arguments.length;
var i__17391__auto___60235 = (0);
while(true){
if((i__17391__auto___60235 < len__17390__auto___60234)){
args60231.push((arguments[i__17391__auto___60235]));

var G__60236 = (i__17391__auto___60235 + (1));
i__17391__auto___60235 = G__60236;
continue;
} else {
}
break;
}

var G__60233 = args60231.length;
switch (G__60233) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60231.length)].join('')));

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
var args60238 = [];
var len__17390__auto___60241 = arguments.length;
var i__17391__auto___60242 = (0);
while(true){
if((i__17391__auto___60242 < len__17390__auto___60241)){
args60238.push((arguments[i__17391__auto___60242]));

var G__60243 = (i__17391__auto___60242 + (1));
i__17391__auto___60242 = G__60243;
continue;
} else {
}
break;
}

var G__60240 = args60238.length;
switch (G__60240) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60238.length)].join('')));

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
var args60245 = [];
var len__17390__auto___60298 = arguments.length;
var i__17391__auto___60299 = (0);
while(true){
if((i__17391__auto___60299 < len__17390__auto___60298)){
args60245.push((arguments[i__17391__auto___60299]));

var G__60300 = (i__17391__auto___60299 + (1));
i__17391__auto___60299 = G__60300;
continue;
} else {
}
break;
}

var G__60247 = args60245.length;
switch (G__60247) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60245.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20164__auto___60302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___60302,tc,fc){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___60302,tc,fc){
return (function (state_60273){
var state_val_60274 = (state_60273[(1)]);
if((state_val_60274 === (7))){
var inst_60269 = (state_60273[(2)]);
var state_60273__$1 = state_60273;
var statearr_60275_60303 = state_60273__$1;
(statearr_60275_60303[(2)] = inst_60269);

(statearr_60275_60303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (1))){
var state_60273__$1 = state_60273;
var statearr_60276_60304 = state_60273__$1;
(statearr_60276_60304[(2)] = null);

(statearr_60276_60304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (4))){
var inst_60250 = (state_60273[(7)]);
var inst_60250__$1 = (state_60273[(2)]);
var inst_60251 = (inst_60250__$1 == null);
var state_60273__$1 = (function (){var statearr_60277 = state_60273;
(statearr_60277[(7)] = inst_60250__$1);

return statearr_60277;
})();
if(cljs.core.truth_(inst_60251)){
var statearr_60278_60305 = state_60273__$1;
(statearr_60278_60305[(1)] = (5));

} else {
var statearr_60279_60306 = state_60273__$1;
(statearr_60279_60306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (13))){
var state_60273__$1 = state_60273;
var statearr_60280_60307 = state_60273__$1;
(statearr_60280_60307[(2)] = null);

(statearr_60280_60307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (6))){
var inst_60250 = (state_60273[(7)]);
var inst_60256 = p.call(null,inst_60250);
var state_60273__$1 = state_60273;
if(cljs.core.truth_(inst_60256)){
var statearr_60281_60308 = state_60273__$1;
(statearr_60281_60308[(1)] = (9));

} else {
var statearr_60282_60309 = state_60273__$1;
(statearr_60282_60309[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (3))){
var inst_60271 = (state_60273[(2)]);
var state_60273__$1 = state_60273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60273__$1,inst_60271);
} else {
if((state_val_60274 === (12))){
var state_60273__$1 = state_60273;
var statearr_60283_60310 = state_60273__$1;
(statearr_60283_60310[(2)] = null);

(statearr_60283_60310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (2))){
var state_60273__$1 = state_60273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60273__$1,(4),ch);
} else {
if((state_val_60274 === (11))){
var inst_60250 = (state_60273[(7)]);
var inst_60260 = (state_60273[(2)]);
var state_60273__$1 = state_60273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60273__$1,(8),inst_60260,inst_60250);
} else {
if((state_val_60274 === (9))){
var state_60273__$1 = state_60273;
var statearr_60284_60311 = state_60273__$1;
(statearr_60284_60311[(2)] = tc);

(statearr_60284_60311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (5))){
var inst_60253 = cljs.core.async.close_BANG_.call(null,tc);
var inst_60254 = cljs.core.async.close_BANG_.call(null,fc);
var state_60273__$1 = (function (){var statearr_60285 = state_60273;
(statearr_60285[(8)] = inst_60253);

return statearr_60285;
})();
var statearr_60286_60312 = state_60273__$1;
(statearr_60286_60312[(2)] = inst_60254);

(statearr_60286_60312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (14))){
var inst_60267 = (state_60273[(2)]);
var state_60273__$1 = state_60273;
var statearr_60287_60313 = state_60273__$1;
(statearr_60287_60313[(2)] = inst_60267);

(statearr_60287_60313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (10))){
var state_60273__$1 = state_60273;
var statearr_60288_60314 = state_60273__$1;
(statearr_60288_60314[(2)] = fc);

(statearr_60288_60314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60274 === (8))){
var inst_60262 = (state_60273[(2)]);
var state_60273__$1 = state_60273;
if(cljs.core.truth_(inst_60262)){
var statearr_60289_60315 = state_60273__$1;
(statearr_60289_60315[(1)] = (12));

} else {
var statearr_60290_60316 = state_60273__$1;
(statearr_60290_60316[(1)] = (13));

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
});})(c__20164__auto___60302,tc,fc))
;
return ((function (switch__20099__auto__,c__20164__auto___60302,tc,fc){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_60294 = [null,null,null,null,null,null,null,null,null];
(statearr_60294[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_60294[(1)] = (1));

return statearr_60294;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_60273){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_60273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60295){if((e60295 instanceof Object)){
var ex__20103__auto__ = e60295;
var statearr_60296_60317 = state_60273;
(statearr_60296_60317[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60318 = state_60273;
state_60273 = G__60318;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_60273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_60273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___60302,tc,fc))
})();
var state__20166__auto__ = (function (){var statearr_60297 = f__20165__auto__.call(null);
(statearr_60297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___60302);

return statearr_60297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___60302,tc,fc))
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
return (function (state_60365){
var state_val_60366 = (state_60365[(1)]);
if((state_val_60366 === (1))){
var inst_60351 = init;
var state_60365__$1 = (function (){var statearr_60367 = state_60365;
(statearr_60367[(7)] = inst_60351);

return statearr_60367;
})();
var statearr_60368_60383 = state_60365__$1;
(statearr_60368_60383[(2)] = null);

(statearr_60368_60383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60366 === (2))){
var state_60365__$1 = state_60365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60365__$1,(4),ch);
} else {
if((state_val_60366 === (3))){
var inst_60363 = (state_60365[(2)]);
var state_60365__$1 = state_60365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60365__$1,inst_60363);
} else {
if((state_val_60366 === (4))){
var inst_60354 = (state_60365[(8)]);
var inst_60354__$1 = (state_60365[(2)]);
var inst_60355 = (inst_60354__$1 == null);
var state_60365__$1 = (function (){var statearr_60369 = state_60365;
(statearr_60369[(8)] = inst_60354__$1);

return statearr_60369;
})();
if(cljs.core.truth_(inst_60355)){
var statearr_60370_60384 = state_60365__$1;
(statearr_60370_60384[(1)] = (5));

} else {
var statearr_60371_60385 = state_60365__$1;
(statearr_60371_60385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60366 === (5))){
var inst_60351 = (state_60365[(7)]);
var state_60365__$1 = state_60365;
var statearr_60372_60386 = state_60365__$1;
(statearr_60372_60386[(2)] = inst_60351);

(statearr_60372_60386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60366 === (6))){
var inst_60351 = (state_60365[(7)]);
var inst_60354 = (state_60365[(8)]);
var inst_60358 = f.call(null,inst_60351,inst_60354);
var inst_60351__$1 = inst_60358;
var state_60365__$1 = (function (){var statearr_60373 = state_60365;
(statearr_60373[(7)] = inst_60351__$1);

return statearr_60373;
})();
var statearr_60374_60387 = state_60365__$1;
(statearr_60374_60387[(2)] = null);

(statearr_60374_60387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60366 === (7))){
var inst_60361 = (state_60365[(2)]);
var state_60365__$1 = state_60365;
var statearr_60375_60388 = state_60365__$1;
(statearr_60375_60388[(2)] = inst_60361);

(statearr_60375_60388[(1)] = (3));


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
var statearr_60379 = [null,null,null,null,null,null,null,null,null];
(statearr_60379[(0)] = cljs$core$async$reduce_$_state_machine__20100__auto__);

(statearr_60379[(1)] = (1));

return statearr_60379;
});
var cljs$core$async$reduce_$_state_machine__20100__auto____1 = (function (state_60365){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_60365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60380){if((e60380 instanceof Object)){
var ex__20103__auto__ = e60380;
var statearr_60381_60389 = state_60365;
(statearr_60381_60389[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60390 = state_60365;
state_60365 = G__60390;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20100__auto__ = function(state_60365){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20100__auto____1.call(this,state_60365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20100__auto____0;
cljs$core$async$reduce_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20100__auto____1;
return cljs$core$async$reduce_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_60382 = f__20165__auto__.call(null);
(statearr_60382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_60382;
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
var args60391 = [];
var len__17390__auto___60443 = arguments.length;
var i__17391__auto___60444 = (0);
while(true){
if((i__17391__auto___60444 < len__17390__auto___60443)){
args60391.push((arguments[i__17391__auto___60444]));

var G__60445 = (i__17391__auto___60444 + (1));
i__17391__auto___60444 = G__60445;
continue;
} else {
}
break;
}

var G__60393 = args60391.length;
switch (G__60393) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60391.length)].join('')));

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
return (function (state_60418){
var state_val_60419 = (state_60418[(1)]);
if((state_val_60419 === (7))){
var inst_60400 = (state_60418[(2)]);
var state_60418__$1 = state_60418;
var statearr_60420_60447 = state_60418__$1;
(statearr_60420_60447[(2)] = inst_60400);

(statearr_60420_60447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (1))){
var inst_60394 = cljs.core.seq.call(null,coll);
var inst_60395 = inst_60394;
var state_60418__$1 = (function (){var statearr_60421 = state_60418;
(statearr_60421[(7)] = inst_60395);

return statearr_60421;
})();
var statearr_60422_60448 = state_60418__$1;
(statearr_60422_60448[(2)] = null);

(statearr_60422_60448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (4))){
var inst_60395 = (state_60418[(7)]);
var inst_60398 = cljs.core.first.call(null,inst_60395);
var state_60418__$1 = state_60418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60418__$1,(7),ch,inst_60398);
} else {
if((state_val_60419 === (13))){
var inst_60412 = (state_60418[(2)]);
var state_60418__$1 = state_60418;
var statearr_60423_60449 = state_60418__$1;
(statearr_60423_60449[(2)] = inst_60412);

(statearr_60423_60449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (6))){
var inst_60403 = (state_60418[(2)]);
var state_60418__$1 = state_60418;
if(cljs.core.truth_(inst_60403)){
var statearr_60424_60450 = state_60418__$1;
(statearr_60424_60450[(1)] = (8));

} else {
var statearr_60425_60451 = state_60418__$1;
(statearr_60425_60451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (3))){
var inst_60416 = (state_60418[(2)]);
var state_60418__$1 = state_60418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60418__$1,inst_60416);
} else {
if((state_val_60419 === (12))){
var state_60418__$1 = state_60418;
var statearr_60426_60452 = state_60418__$1;
(statearr_60426_60452[(2)] = null);

(statearr_60426_60452[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (2))){
var inst_60395 = (state_60418[(7)]);
var state_60418__$1 = state_60418;
if(cljs.core.truth_(inst_60395)){
var statearr_60427_60453 = state_60418__$1;
(statearr_60427_60453[(1)] = (4));

} else {
var statearr_60428_60454 = state_60418__$1;
(statearr_60428_60454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (11))){
var inst_60409 = cljs.core.async.close_BANG_.call(null,ch);
var state_60418__$1 = state_60418;
var statearr_60429_60455 = state_60418__$1;
(statearr_60429_60455[(2)] = inst_60409);

(statearr_60429_60455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (9))){
var state_60418__$1 = state_60418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60430_60456 = state_60418__$1;
(statearr_60430_60456[(1)] = (11));

} else {
var statearr_60431_60457 = state_60418__$1;
(statearr_60431_60457[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (5))){
var inst_60395 = (state_60418[(7)]);
var state_60418__$1 = state_60418;
var statearr_60432_60458 = state_60418__$1;
(statearr_60432_60458[(2)] = inst_60395);

(statearr_60432_60458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (10))){
var inst_60414 = (state_60418[(2)]);
var state_60418__$1 = state_60418;
var statearr_60433_60459 = state_60418__$1;
(statearr_60433_60459[(2)] = inst_60414);

(statearr_60433_60459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (8))){
var inst_60395 = (state_60418[(7)]);
var inst_60405 = cljs.core.next.call(null,inst_60395);
var inst_60395__$1 = inst_60405;
var state_60418__$1 = (function (){var statearr_60434 = state_60418;
(statearr_60434[(7)] = inst_60395__$1);

return statearr_60434;
})();
var statearr_60435_60460 = state_60418__$1;
(statearr_60435_60460[(2)] = null);

(statearr_60435_60460[(1)] = (2));


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
var statearr_60439 = [null,null,null,null,null,null,null,null];
(statearr_60439[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_60439[(1)] = (1));

return statearr_60439;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_60418){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_60418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60440){if((e60440 instanceof Object)){
var ex__20103__auto__ = e60440;
var statearr_60441_60461 = state_60418;
(statearr_60441_60461[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60462 = state_60418;
state_60418 = G__60462;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_60418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_60418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_60442 = f__20165__auto__.call(null);
(statearr_60442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_60442;
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
if(typeof cljs.core.async.t_cljs$core$async60684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60684 = (function (mult,ch,cs,meta60685){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta60685 = meta60685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_60686,meta60685__$1){
var self__ = this;
var _60686__$1 = this;
return (new cljs.core.async.t_cljs$core$async60684(self__.mult,self__.ch,self__.cs,meta60685__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async60684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_60686){
var self__ = this;
var _60686__$1 = this;
return self__.meta60685;
});})(cs))
;

cljs.core.async.t_cljs$core$async60684.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async60684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async60684.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async60684.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60684.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60684.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60684.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta60685","meta60685",-852442241,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async60684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60684";

cljs.core.async.t_cljs$core$async60684.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async60684");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async60684 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async60684(mult__$1,ch__$1,cs__$1,meta60685){
return (new cljs.core.async.t_cljs$core$async60684(mult__$1,ch__$1,cs__$1,meta60685));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async60684(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20164__auto___60905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___60905,cs,m,dchan,dctr,done){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___60905,cs,m,dchan,dctr,done){
return (function (state_60817){
var state_val_60818 = (state_60817[(1)]);
if((state_val_60818 === (7))){
var inst_60813 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60819_60906 = state_60817__$1;
(statearr_60819_60906[(2)] = inst_60813);

(statearr_60819_60906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (20))){
var inst_60718 = (state_60817[(7)]);
var inst_60728 = cljs.core.first.call(null,inst_60718);
var inst_60729 = cljs.core.nth.call(null,inst_60728,(0),null);
var inst_60730 = cljs.core.nth.call(null,inst_60728,(1),null);
var state_60817__$1 = (function (){var statearr_60820 = state_60817;
(statearr_60820[(8)] = inst_60729);

return statearr_60820;
})();
if(cljs.core.truth_(inst_60730)){
var statearr_60821_60907 = state_60817__$1;
(statearr_60821_60907[(1)] = (22));

} else {
var statearr_60822_60908 = state_60817__$1;
(statearr_60822_60908[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (27))){
var inst_60758 = (state_60817[(9)]);
var inst_60765 = (state_60817[(10)]);
var inst_60760 = (state_60817[(11)]);
var inst_60689 = (state_60817[(12)]);
var inst_60765__$1 = cljs.core._nth.call(null,inst_60758,inst_60760);
var inst_60766 = cljs.core.async.put_BANG_.call(null,inst_60765__$1,inst_60689,done);
var state_60817__$1 = (function (){var statearr_60823 = state_60817;
(statearr_60823[(10)] = inst_60765__$1);

return statearr_60823;
})();
if(cljs.core.truth_(inst_60766)){
var statearr_60824_60909 = state_60817__$1;
(statearr_60824_60909[(1)] = (30));

} else {
var statearr_60825_60910 = state_60817__$1;
(statearr_60825_60910[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (1))){
var state_60817__$1 = state_60817;
var statearr_60826_60911 = state_60817__$1;
(statearr_60826_60911[(2)] = null);

(statearr_60826_60911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (24))){
var inst_60718 = (state_60817[(7)]);
var inst_60735 = (state_60817[(2)]);
var inst_60736 = cljs.core.next.call(null,inst_60718);
var inst_60698 = inst_60736;
var inst_60699 = null;
var inst_60700 = (0);
var inst_60701 = (0);
var state_60817__$1 = (function (){var statearr_60827 = state_60817;
(statearr_60827[(13)] = inst_60735);

(statearr_60827[(14)] = inst_60701);

(statearr_60827[(15)] = inst_60698);

(statearr_60827[(16)] = inst_60699);

(statearr_60827[(17)] = inst_60700);

return statearr_60827;
})();
var statearr_60828_60912 = state_60817__$1;
(statearr_60828_60912[(2)] = null);

(statearr_60828_60912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (39))){
var state_60817__$1 = state_60817;
var statearr_60832_60913 = state_60817__$1;
(statearr_60832_60913[(2)] = null);

(statearr_60832_60913[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (4))){
var inst_60689 = (state_60817[(12)]);
var inst_60689__$1 = (state_60817[(2)]);
var inst_60690 = (inst_60689__$1 == null);
var state_60817__$1 = (function (){var statearr_60833 = state_60817;
(statearr_60833[(12)] = inst_60689__$1);

return statearr_60833;
})();
if(cljs.core.truth_(inst_60690)){
var statearr_60834_60914 = state_60817__$1;
(statearr_60834_60914[(1)] = (5));

} else {
var statearr_60835_60915 = state_60817__$1;
(statearr_60835_60915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (15))){
var inst_60701 = (state_60817[(14)]);
var inst_60698 = (state_60817[(15)]);
var inst_60699 = (state_60817[(16)]);
var inst_60700 = (state_60817[(17)]);
var inst_60714 = (state_60817[(2)]);
var inst_60715 = (inst_60701 + (1));
var tmp60829 = inst_60698;
var tmp60830 = inst_60699;
var tmp60831 = inst_60700;
var inst_60698__$1 = tmp60829;
var inst_60699__$1 = tmp60830;
var inst_60700__$1 = tmp60831;
var inst_60701__$1 = inst_60715;
var state_60817__$1 = (function (){var statearr_60836 = state_60817;
(statearr_60836[(14)] = inst_60701__$1);

(statearr_60836[(15)] = inst_60698__$1);

(statearr_60836[(18)] = inst_60714);

(statearr_60836[(16)] = inst_60699__$1);

(statearr_60836[(17)] = inst_60700__$1);

return statearr_60836;
})();
var statearr_60837_60916 = state_60817__$1;
(statearr_60837_60916[(2)] = null);

(statearr_60837_60916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (21))){
var inst_60739 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60841_60917 = state_60817__$1;
(statearr_60841_60917[(2)] = inst_60739);

(statearr_60841_60917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (31))){
var inst_60765 = (state_60817[(10)]);
var inst_60769 = done.call(null,null);
var inst_60770 = cljs.core.async.untap_STAR_.call(null,m,inst_60765);
var state_60817__$1 = (function (){var statearr_60842 = state_60817;
(statearr_60842[(19)] = inst_60769);

return statearr_60842;
})();
var statearr_60843_60918 = state_60817__$1;
(statearr_60843_60918[(2)] = inst_60770);

(statearr_60843_60918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (32))){
var inst_60759 = (state_60817[(20)]);
var inst_60758 = (state_60817[(9)]);
var inst_60757 = (state_60817[(21)]);
var inst_60760 = (state_60817[(11)]);
var inst_60772 = (state_60817[(2)]);
var inst_60773 = (inst_60760 + (1));
var tmp60838 = inst_60759;
var tmp60839 = inst_60758;
var tmp60840 = inst_60757;
var inst_60757__$1 = tmp60840;
var inst_60758__$1 = tmp60839;
var inst_60759__$1 = tmp60838;
var inst_60760__$1 = inst_60773;
var state_60817__$1 = (function (){var statearr_60844 = state_60817;
(statearr_60844[(20)] = inst_60759__$1);

(statearr_60844[(9)] = inst_60758__$1);

(statearr_60844[(21)] = inst_60757__$1);

(statearr_60844[(11)] = inst_60760__$1);

(statearr_60844[(22)] = inst_60772);

return statearr_60844;
})();
var statearr_60845_60919 = state_60817__$1;
(statearr_60845_60919[(2)] = null);

(statearr_60845_60919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (40))){
var inst_60785 = (state_60817[(23)]);
var inst_60789 = done.call(null,null);
var inst_60790 = cljs.core.async.untap_STAR_.call(null,m,inst_60785);
var state_60817__$1 = (function (){var statearr_60846 = state_60817;
(statearr_60846[(24)] = inst_60789);

return statearr_60846;
})();
var statearr_60847_60920 = state_60817__$1;
(statearr_60847_60920[(2)] = inst_60790);

(statearr_60847_60920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (33))){
var inst_60776 = (state_60817[(25)]);
var inst_60778 = cljs.core.chunked_seq_QMARK_.call(null,inst_60776);
var state_60817__$1 = state_60817;
if(inst_60778){
var statearr_60848_60921 = state_60817__$1;
(statearr_60848_60921[(1)] = (36));

} else {
var statearr_60849_60922 = state_60817__$1;
(statearr_60849_60922[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (13))){
var inst_60708 = (state_60817[(26)]);
var inst_60711 = cljs.core.async.close_BANG_.call(null,inst_60708);
var state_60817__$1 = state_60817;
var statearr_60850_60923 = state_60817__$1;
(statearr_60850_60923[(2)] = inst_60711);

(statearr_60850_60923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (22))){
var inst_60729 = (state_60817[(8)]);
var inst_60732 = cljs.core.async.close_BANG_.call(null,inst_60729);
var state_60817__$1 = state_60817;
var statearr_60851_60924 = state_60817__$1;
(statearr_60851_60924[(2)] = inst_60732);

(statearr_60851_60924[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (36))){
var inst_60776 = (state_60817[(25)]);
var inst_60780 = cljs.core.chunk_first.call(null,inst_60776);
var inst_60781 = cljs.core.chunk_rest.call(null,inst_60776);
var inst_60782 = cljs.core.count.call(null,inst_60780);
var inst_60757 = inst_60781;
var inst_60758 = inst_60780;
var inst_60759 = inst_60782;
var inst_60760 = (0);
var state_60817__$1 = (function (){var statearr_60852 = state_60817;
(statearr_60852[(20)] = inst_60759);

(statearr_60852[(9)] = inst_60758);

(statearr_60852[(21)] = inst_60757);

(statearr_60852[(11)] = inst_60760);

return statearr_60852;
})();
var statearr_60853_60925 = state_60817__$1;
(statearr_60853_60925[(2)] = null);

(statearr_60853_60925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (41))){
var inst_60776 = (state_60817[(25)]);
var inst_60792 = (state_60817[(2)]);
var inst_60793 = cljs.core.next.call(null,inst_60776);
var inst_60757 = inst_60793;
var inst_60758 = null;
var inst_60759 = (0);
var inst_60760 = (0);
var state_60817__$1 = (function (){var statearr_60854 = state_60817;
(statearr_60854[(20)] = inst_60759);

(statearr_60854[(9)] = inst_60758);

(statearr_60854[(21)] = inst_60757);

(statearr_60854[(27)] = inst_60792);

(statearr_60854[(11)] = inst_60760);

return statearr_60854;
})();
var statearr_60855_60926 = state_60817__$1;
(statearr_60855_60926[(2)] = null);

(statearr_60855_60926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (43))){
var state_60817__$1 = state_60817;
var statearr_60856_60927 = state_60817__$1;
(statearr_60856_60927[(2)] = null);

(statearr_60856_60927[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (29))){
var inst_60801 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60857_60928 = state_60817__$1;
(statearr_60857_60928[(2)] = inst_60801);

(statearr_60857_60928[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (44))){
var inst_60810 = (state_60817[(2)]);
var state_60817__$1 = (function (){var statearr_60858 = state_60817;
(statearr_60858[(28)] = inst_60810);

return statearr_60858;
})();
var statearr_60859_60929 = state_60817__$1;
(statearr_60859_60929[(2)] = null);

(statearr_60859_60929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (6))){
var inst_60749 = (state_60817[(29)]);
var inst_60748 = cljs.core.deref.call(null,cs);
var inst_60749__$1 = cljs.core.keys.call(null,inst_60748);
var inst_60750 = cljs.core.count.call(null,inst_60749__$1);
var inst_60751 = cljs.core.reset_BANG_.call(null,dctr,inst_60750);
var inst_60756 = cljs.core.seq.call(null,inst_60749__$1);
var inst_60757 = inst_60756;
var inst_60758 = null;
var inst_60759 = (0);
var inst_60760 = (0);
var state_60817__$1 = (function (){var statearr_60860 = state_60817;
(statearr_60860[(20)] = inst_60759);

(statearr_60860[(9)] = inst_60758);

(statearr_60860[(30)] = inst_60751);

(statearr_60860[(21)] = inst_60757);

(statearr_60860[(11)] = inst_60760);

(statearr_60860[(29)] = inst_60749__$1);

return statearr_60860;
})();
var statearr_60861_60930 = state_60817__$1;
(statearr_60861_60930[(2)] = null);

(statearr_60861_60930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (28))){
var inst_60757 = (state_60817[(21)]);
var inst_60776 = (state_60817[(25)]);
var inst_60776__$1 = cljs.core.seq.call(null,inst_60757);
var state_60817__$1 = (function (){var statearr_60862 = state_60817;
(statearr_60862[(25)] = inst_60776__$1);

return statearr_60862;
})();
if(inst_60776__$1){
var statearr_60863_60931 = state_60817__$1;
(statearr_60863_60931[(1)] = (33));

} else {
var statearr_60864_60932 = state_60817__$1;
(statearr_60864_60932[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (25))){
var inst_60759 = (state_60817[(20)]);
var inst_60760 = (state_60817[(11)]);
var inst_60762 = (inst_60760 < inst_60759);
var inst_60763 = inst_60762;
var state_60817__$1 = state_60817;
if(cljs.core.truth_(inst_60763)){
var statearr_60865_60933 = state_60817__$1;
(statearr_60865_60933[(1)] = (27));

} else {
var statearr_60866_60934 = state_60817__$1;
(statearr_60866_60934[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (34))){
var state_60817__$1 = state_60817;
var statearr_60867_60935 = state_60817__$1;
(statearr_60867_60935[(2)] = null);

(statearr_60867_60935[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (17))){
var state_60817__$1 = state_60817;
var statearr_60868_60936 = state_60817__$1;
(statearr_60868_60936[(2)] = null);

(statearr_60868_60936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (3))){
var inst_60815 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60817__$1,inst_60815);
} else {
if((state_val_60818 === (12))){
var inst_60744 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60869_60937 = state_60817__$1;
(statearr_60869_60937[(2)] = inst_60744);

(statearr_60869_60937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (2))){
var state_60817__$1 = state_60817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60817__$1,(4),ch);
} else {
if((state_val_60818 === (23))){
var state_60817__$1 = state_60817;
var statearr_60870_60938 = state_60817__$1;
(statearr_60870_60938[(2)] = null);

(statearr_60870_60938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (35))){
var inst_60799 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60871_60939 = state_60817__$1;
(statearr_60871_60939[(2)] = inst_60799);

(statearr_60871_60939[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (19))){
var inst_60718 = (state_60817[(7)]);
var inst_60722 = cljs.core.chunk_first.call(null,inst_60718);
var inst_60723 = cljs.core.chunk_rest.call(null,inst_60718);
var inst_60724 = cljs.core.count.call(null,inst_60722);
var inst_60698 = inst_60723;
var inst_60699 = inst_60722;
var inst_60700 = inst_60724;
var inst_60701 = (0);
var state_60817__$1 = (function (){var statearr_60872 = state_60817;
(statearr_60872[(14)] = inst_60701);

(statearr_60872[(15)] = inst_60698);

(statearr_60872[(16)] = inst_60699);

(statearr_60872[(17)] = inst_60700);

return statearr_60872;
})();
var statearr_60873_60940 = state_60817__$1;
(statearr_60873_60940[(2)] = null);

(statearr_60873_60940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (11))){
var inst_60698 = (state_60817[(15)]);
var inst_60718 = (state_60817[(7)]);
var inst_60718__$1 = cljs.core.seq.call(null,inst_60698);
var state_60817__$1 = (function (){var statearr_60874 = state_60817;
(statearr_60874[(7)] = inst_60718__$1);

return statearr_60874;
})();
if(inst_60718__$1){
var statearr_60875_60941 = state_60817__$1;
(statearr_60875_60941[(1)] = (16));

} else {
var statearr_60876_60942 = state_60817__$1;
(statearr_60876_60942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (9))){
var inst_60746 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60877_60943 = state_60817__$1;
(statearr_60877_60943[(2)] = inst_60746);

(statearr_60877_60943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (5))){
var inst_60696 = cljs.core.deref.call(null,cs);
var inst_60697 = cljs.core.seq.call(null,inst_60696);
var inst_60698 = inst_60697;
var inst_60699 = null;
var inst_60700 = (0);
var inst_60701 = (0);
var state_60817__$1 = (function (){var statearr_60878 = state_60817;
(statearr_60878[(14)] = inst_60701);

(statearr_60878[(15)] = inst_60698);

(statearr_60878[(16)] = inst_60699);

(statearr_60878[(17)] = inst_60700);

return statearr_60878;
})();
var statearr_60879_60944 = state_60817__$1;
(statearr_60879_60944[(2)] = null);

(statearr_60879_60944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (14))){
var state_60817__$1 = state_60817;
var statearr_60880_60945 = state_60817__$1;
(statearr_60880_60945[(2)] = null);

(statearr_60880_60945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (45))){
var inst_60807 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60881_60946 = state_60817__$1;
(statearr_60881_60946[(2)] = inst_60807);

(statearr_60881_60946[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (26))){
var inst_60749 = (state_60817[(29)]);
var inst_60803 = (state_60817[(2)]);
var inst_60804 = cljs.core.seq.call(null,inst_60749);
var state_60817__$1 = (function (){var statearr_60882 = state_60817;
(statearr_60882[(31)] = inst_60803);

return statearr_60882;
})();
if(inst_60804){
var statearr_60883_60947 = state_60817__$1;
(statearr_60883_60947[(1)] = (42));

} else {
var statearr_60884_60948 = state_60817__$1;
(statearr_60884_60948[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (16))){
var inst_60718 = (state_60817[(7)]);
var inst_60720 = cljs.core.chunked_seq_QMARK_.call(null,inst_60718);
var state_60817__$1 = state_60817;
if(inst_60720){
var statearr_60885_60949 = state_60817__$1;
(statearr_60885_60949[(1)] = (19));

} else {
var statearr_60886_60950 = state_60817__$1;
(statearr_60886_60950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (38))){
var inst_60796 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60887_60951 = state_60817__$1;
(statearr_60887_60951[(2)] = inst_60796);

(statearr_60887_60951[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (30))){
var state_60817__$1 = state_60817;
var statearr_60888_60952 = state_60817__$1;
(statearr_60888_60952[(2)] = null);

(statearr_60888_60952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (10))){
var inst_60701 = (state_60817[(14)]);
var inst_60699 = (state_60817[(16)]);
var inst_60707 = cljs.core._nth.call(null,inst_60699,inst_60701);
var inst_60708 = cljs.core.nth.call(null,inst_60707,(0),null);
var inst_60709 = cljs.core.nth.call(null,inst_60707,(1),null);
var state_60817__$1 = (function (){var statearr_60889 = state_60817;
(statearr_60889[(26)] = inst_60708);

return statearr_60889;
})();
if(cljs.core.truth_(inst_60709)){
var statearr_60890_60953 = state_60817__$1;
(statearr_60890_60953[(1)] = (13));

} else {
var statearr_60891_60954 = state_60817__$1;
(statearr_60891_60954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (18))){
var inst_60742 = (state_60817[(2)]);
var state_60817__$1 = state_60817;
var statearr_60892_60955 = state_60817__$1;
(statearr_60892_60955[(2)] = inst_60742);

(statearr_60892_60955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (42))){
var state_60817__$1 = state_60817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60817__$1,(45),dchan);
} else {
if((state_val_60818 === (37))){
var inst_60689 = (state_60817[(12)]);
var inst_60776 = (state_60817[(25)]);
var inst_60785 = (state_60817[(23)]);
var inst_60785__$1 = cljs.core.first.call(null,inst_60776);
var inst_60786 = cljs.core.async.put_BANG_.call(null,inst_60785__$1,inst_60689,done);
var state_60817__$1 = (function (){var statearr_60893 = state_60817;
(statearr_60893[(23)] = inst_60785__$1);

return statearr_60893;
})();
if(cljs.core.truth_(inst_60786)){
var statearr_60894_60956 = state_60817__$1;
(statearr_60894_60956[(1)] = (39));

} else {
var statearr_60895_60957 = state_60817__$1;
(statearr_60895_60957[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60818 === (8))){
var inst_60701 = (state_60817[(14)]);
var inst_60700 = (state_60817[(17)]);
var inst_60703 = (inst_60701 < inst_60700);
var inst_60704 = inst_60703;
var state_60817__$1 = state_60817;
if(cljs.core.truth_(inst_60704)){
var statearr_60896_60958 = state_60817__$1;
(statearr_60896_60958[(1)] = (10));

} else {
var statearr_60897_60959 = state_60817__$1;
(statearr_60897_60959[(1)] = (11));

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
});})(c__20164__auto___60905,cs,m,dchan,dctr,done))
;
return ((function (switch__20099__auto__,c__20164__auto___60905,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20100__auto__ = null;
var cljs$core$async$mult_$_state_machine__20100__auto____0 = (function (){
var statearr_60901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60901[(0)] = cljs$core$async$mult_$_state_machine__20100__auto__);

(statearr_60901[(1)] = (1));

return statearr_60901;
});
var cljs$core$async$mult_$_state_machine__20100__auto____1 = (function (state_60817){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_60817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e60902){if((e60902 instanceof Object)){
var ex__20103__auto__ = e60902;
var statearr_60903_60960 = state_60817;
(statearr_60903_60960[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60961 = state_60817;
state_60817 = G__60961;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20100__auto__ = function(state_60817){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20100__auto____1.call(this,state_60817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20100__auto____0;
cljs$core$async$mult_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20100__auto____1;
return cljs$core$async$mult_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___60905,cs,m,dchan,dctr,done))
})();
var state__20166__auto__ = (function (){var statearr_60904 = f__20165__auto__.call(null);
(statearr_60904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___60905);

return statearr_60904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___60905,cs,m,dchan,dctr,done))
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
var args60962 = [];
var len__17390__auto___60965 = arguments.length;
var i__17391__auto___60966 = (0);
while(true){
if((i__17391__auto___60966 < len__17390__auto___60965)){
args60962.push((arguments[i__17391__auto___60966]));

var G__60967 = (i__17391__auto___60966 + (1));
i__17391__auto___60966 = G__60967;
continue;
} else {
}
break;
}

var G__60964 = args60962.length;
switch (G__60964) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60962.length)].join('')));

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
var len__17390__auto___60979 = arguments.length;
var i__17391__auto___60980 = (0);
while(true){
if((i__17391__auto___60980 < len__17390__auto___60979)){
args__17397__auto__.push((arguments[i__17391__auto___60980]));

var G__60981 = (i__17391__auto___60980 + (1));
i__17391__auto___60980 = G__60981;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((3) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17398__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60973){
var map__60974 = p__60973;
var map__60974__$1 = ((((!((map__60974 == null)))?((((map__60974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60974):map__60974);
var opts = map__60974__$1;
var statearr_60976_60982 = state;
(statearr_60976_60982[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__60974,map__60974__$1,opts){
return (function (val){
var statearr_60977_60983 = state;
(statearr_60977_60983[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__60974,map__60974__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_60978_60984 = state;
(statearr_60978_60984[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60969){
var G__60970 = cljs.core.first.call(null,seq60969);
var seq60969__$1 = cljs.core.next.call(null,seq60969);
var G__60971 = cljs.core.first.call(null,seq60969__$1);
var seq60969__$2 = cljs.core.next.call(null,seq60969__$1);
var G__60972 = cljs.core.first.call(null,seq60969__$2);
var seq60969__$3 = cljs.core.next.call(null,seq60969__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60970,G__60971,G__60972,seq60969__$3);
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
if(typeof cljs.core.async.t_cljs$core$async61148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61148 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta61149){
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
this.meta61149 = meta61149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61150,meta61149__$1){
var self__ = this;
var _61150__$1 = this;
return (new cljs.core.async.t_cljs$core$async61148(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta61149__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61150){
var self__ = this;
var _61150__$1 = this;
return self__.meta61149;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61148.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async61148.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta61149","meta61149",-730956824,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61148";

cljs.core.async.t_cljs$core$async61148.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async61148");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async61148 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async61148(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta61149){
return (new cljs.core.async.t_cljs$core$async61148(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta61149));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async61148(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20164__auto___61311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___61311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___61311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_61248){
var state_val_61249 = (state_61248[(1)]);
if((state_val_61249 === (7))){
var inst_61166 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
var statearr_61250_61312 = state_61248__$1;
(statearr_61250_61312[(2)] = inst_61166);

(statearr_61250_61312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (20))){
var inst_61178 = (state_61248[(7)]);
var state_61248__$1 = state_61248;
var statearr_61251_61313 = state_61248__$1;
(statearr_61251_61313[(2)] = inst_61178);

(statearr_61251_61313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (27))){
var state_61248__$1 = state_61248;
var statearr_61252_61314 = state_61248__$1;
(statearr_61252_61314[(2)] = null);

(statearr_61252_61314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (1))){
var inst_61154 = (state_61248[(8)]);
var inst_61154__$1 = calc_state.call(null);
var inst_61156 = (inst_61154__$1 == null);
var inst_61157 = cljs.core.not.call(null,inst_61156);
var state_61248__$1 = (function (){var statearr_61253 = state_61248;
(statearr_61253[(8)] = inst_61154__$1);

return statearr_61253;
})();
if(inst_61157){
var statearr_61254_61315 = state_61248__$1;
(statearr_61254_61315[(1)] = (2));

} else {
var statearr_61255_61316 = state_61248__$1;
(statearr_61255_61316[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (24))){
var inst_61201 = (state_61248[(9)]);
var inst_61208 = (state_61248[(10)]);
var inst_61222 = (state_61248[(11)]);
var inst_61222__$1 = inst_61201.call(null,inst_61208);
var state_61248__$1 = (function (){var statearr_61256 = state_61248;
(statearr_61256[(11)] = inst_61222__$1);

return statearr_61256;
})();
if(cljs.core.truth_(inst_61222__$1)){
var statearr_61257_61317 = state_61248__$1;
(statearr_61257_61317[(1)] = (29));

} else {
var statearr_61258_61318 = state_61248__$1;
(statearr_61258_61318[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (4))){
var inst_61169 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
if(cljs.core.truth_(inst_61169)){
var statearr_61259_61319 = state_61248__$1;
(statearr_61259_61319[(1)] = (8));

} else {
var statearr_61260_61320 = state_61248__$1;
(statearr_61260_61320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (15))){
var inst_61195 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
if(cljs.core.truth_(inst_61195)){
var statearr_61261_61321 = state_61248__$1;
(statearr_61261_61321[(1)] = (19));

} else {
var statearr_61262_61322 = state_61248__$1;
(statearr_61262_61322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (21))){
var inst_61200 = (state_61248[(12)]);
var inst_61200__$1 = (state_61248[(2)]);
var inst_61201 = cljs.core.get.call(null,inst_61200__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61202 = cljs.core.get.call(null,inst_61200__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61203 = cljs.core.get.call(null,inst_61200__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_61248__$1 = (function (){var statearr_61263 = state_61248;
(statearr_61263[(9)] = inst_61201);

(statearr_61263[(12)] = inst_61200__$1);

(statearr_61263[(13)] = inst_61202);

return statearr_61263;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_61248__$1,(22),inst_61203);
} else {
if((state_val_61249 === (31))){
var inst_61230 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
if(cljs.core.truth_(inst_61230)){
var statearr_61264_61323 = state_61248__$1;
(statearr_61264_61323[(1)] = (32));

} else {
var statearr_61265_61324 = state_61248__$1;
(statearr_61265_61324[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (32))){
var inst_61207 = (state_61248[(14)]);
var state_61248__$1 = state_61248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61248__$1,(35),out,inst_61207);
} else {
if((state_val_61249 === (33))){
var inst_61200 = (state_61248[(12)]);
var inst_61178 = inst_61200;
var state_61248__$1 = (function (){var statearr_61266 = state_61248;
(statearr_61266[(7)] = inst_61178);

return statearr_61266;
})();
var statearr_61267_61325 = state_61248__$1;
(statearr_61267_61325[(2)] = null);

(statearr_61267_61325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (13))){
var inst_61178 = (state_61248[(7)]);
var inst_61185 = inst_61178.cljs$lang$protocol_mask$partition0$;
var inst_61186 = (inst_61185 & (64));
var inst_61187 = inst_61178.cljs$core$ISeq$;
var inst_61188 = (inst_61186) || (inst_61187);
var state_61248__$1 = state_61248;
if(cljs.core.truth_(inst_61188)){
var statearr_61268_61326 = state_61248__$1;
(statearr_61268_61326[(1)] = (16));

} else {
var statearr_61269_61327 = state_61248__$1;
(statearr_61269_61327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (22))){
var inst_61208 = (state_61248[(10)]);
var inst_61207 = (state_61248[(14)]);
var inst_61206 = (state_61248[(2)]);
var inst_61207__$1 = cljs.core.nth.call(null,inst_61206,(0),null);
var inst_61208__$1 = cljs.core.nth.call(null,inst_61206,(1),null);
var inst_61209 = (inst_61207__$1 == null);
var inst_61210 = cljs.core._EQ_.call(null,inst_61208__$1,change);
var inst_61211 = (inst_61209) || (inst_61210);
var state_61248__$1 = (function (){var statearr_61270 = state_61248;
(statearr_61270[(10)] = inst_61208__$1);

(statearr_61270[(14)] = inst_61207__$1);

return statearr_61270;
})();
if(cljs.core.truth_(inst_61211)){
var statearr_61271_61328 = state_61248__$1;
(statearr_61271_61328[(1)] = (23));

} else {
var statearr_61272_61329 = state_61248__$1;
(statearr_61272_61329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (36))){
var inst_61200 = (state_61248[(12)]);
var inst_61178 = inst_61200;
var state_61248__$1 = (function (){var statearr_61273 = state_61248;
(statearr_61273[(7)] = inst_61178);

return statearr_61273;
})();
var statearr_61274_61330 = state_61248__$1;
(statearr_61274_61330[(2)] = null);

(statearr_61274_61330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (29))){
var inst_61222 = (state_61248[(11)]);
var state_61248__$1 = state_61248;
var statearr_61275_61331 = state_61248__$1;
(statearr_61275_61331[(2)] = inst_61222);

(statearr_61275_61331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (6))){
var state_61248__$1 = state_61248;
var statearr_61276_61332 = state_61248__$1;
(statearr_61276_61332[(2)] = false);

(statearr_61276_61332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (28))){
var inst_61218 = (state_61248[(2)]);
var inst_61219 = calc_state.call(null);
var inst_61178 = inst_61219;
var state_61248__$1 = (function (){var statearr_61277 = state_61248;
(statearr_61277[(15)] = inst_61218);

(statearr_61277[(7)] = inst_61178);

return statearr_61277;
})();
var statearr_61278_61333 = state_61248__$1;
(statearr_61278_61333[(2)] = null);

(statearr_61278_61333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (25))){
var inst_61244 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
var statearr_61279_61334 = state_61248__$1;
(statearr_61279_61334[(2)] = inst_61244);

(statearr_61279_61334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (34))){
var inst_61242 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
var statearr_61280_61335 = state_61248__$1;
(statearr_61280_61335[(2)] = inst_61242);

(statearr_61280_61335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (17))){
var state_61248__$1 = state_61248;
var statearr_61281_61336 = state_61248__$1;
(statearr_61281_61336[(2)] = false);

(statearr_61281_61336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (3))){
var state_61248__$1 = state_61248;
var statearr_61282_61337 = state_61248__$1;
(statearr_61282_61337[(2)] = false);

(statearr_61282_61337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (12))){
var inst_61246 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61248__$1,inst_61246);
} else {
if((state_val_61249 === (2))){
var inst_61154 = (state_61248[(8)]);
var inst_61159 = inst_61154.cljs$lang$protocol_mask$partition0$;
var inst_61160 = (inst_61159 & (64));
var inst_61161 = inst_61154.cljs$core$ISeq$;
var inst_61162 = (inst_61160) || (inst_61161);
var state_61248__$1 = state_61248;
if(cljs.core.truth_(inst_61162)){
var statearr_61283_61338 = state_61248__$1;
(statearr_61283_61338[(1)] = (5));

} else {
var statearr_61284_61339 = state_61248__$1;
(statearr_61284_61339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (23))){
var inst_61207 = (state_61248[(14)]);
var inst_61213 = (inst_61207 == null);
var state_61248__$1 = state_61248;
if(cljs.core.truth_(inst_61213)){
var statearr_61285_61340 = state_61248__$1;
(statearr_61285_61340[(1)] = (26));

} else {
var statearr_61286_61341 = state_61248__$1;
(statearr_61286_61341[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (35))){
var inst_61233 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
if(cljs.core.truth_(inst_61233)){
var statearr_61287_61342 = state_61248__$1;
(statearr_61287_61342[(1)] = (36));

} else {
var statearr_61288_61343 = state_61248__$1;
(statearr_61288_61343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (19))){
var inst_61178 = (state_61248[(7)]);
var inst_61197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61178);
var state_61248__$1 = state_61248;
var statearr_61289_61344 = state_61248__$1;
(statearr_61289_61344[(2)] = inst_61197);

(statearr_61289_61344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (11))){
var inst_61178 = (state_61248[(7)]);
var inst_61182 = (inst_61178 == null);
var inst_61183 = cljs.core.not.call(null,inst_61182);
var state_61248__$1 = state_61248;
if(inst_61183){
var statearr_61290_61345 = state_61248__$1;
(statearr_61290_61345[(1)] = (13));

} else {
var statearr_61291_61346 = state_61248__$1;
(statearr_61291_61346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (9))){
var inst_61154 = (state_61248[(8)]);
var state_61248__$1 = state_61248;
var statearr_61292_61347 = state_61248__$1;
(statearr_61292_61347[(2)] = inst_61154);

(statearr_61292_61347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (5))){
var state_61248__$1 = state_61248;
var statearr_61293_61348 = state_61248__$1;
(statearr_61293_61348[(2)] = true);

(statearr_61293_61348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (14))){
var state_61248__$1 = state_61248;
var statearr_61294_61349 = state_61248__$1;
(statearr_61294_61349[(2)] = false);

(statearr_61294_61349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (26))){
var inst_61208 = (state_61248[(10)]);
var inst_61215 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_61208);
var state_61248__$1 = state_61248;
var statearr_61295_61350 = state_61248__$1;
(statearr_61295_61350[(2)] = inst_61215);

(statearr_61295_61350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (16))){
var state_61248__$1 = state_61248;
var statearr_61296_61351 = state_61248__$1;
(statearr_61296_61351[(2)] = true);

(statearr_61296_61351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (38))){
var inst_61238 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
var statearr_61297_61352 = state_61248__$1;
(statearr_61297_61352[(2)] = inst_61238);

(statearr_61297_61352[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (30))){
var inst_61201 = (state_61248[(9)]);
var inst_61208 = (state_61248[(10)]);
var inst_61202 = (state_61248[(13)]);
var inst_61225 = cljs.core.empty_QMARK_.call(null,inst_61201);
var inst_61226 = inst_61202.call(null,inst_61208);
var inst_61227 = cljs.core.not.call(null,inst_61226);
var inst_61228 = (inst_61225) && (inst_61227);
var state_61248__$1 = state_61248;
var statearr_61298_61353 = state_61248__$1;
(statearr_61298_61353[(2)] = inst_61228);

(statearr_61298_61353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (10))){
var inst_61154 = (state_61248[(8)]);
var inst_61174 = (state_61248[(2)]);
var inst_61175 = cljs.core.get.call(null,inst_61174,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61176 = cljs.core.get.call(null,inst_61174,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61177 = cljs.core.get.call(null,inst_61174,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_61178 = inst_61154;
var state_61248__$1 = (function (){var statearr_61299 = state_61248;
(statearr_61299[(16)] = inst_61177);

(statearr_61299[(17)] = inst_61175);

(statearr_61299[(18)] = inst_61176);

(statearr_61299[(7)] = inst_61178);

return statearr_61299;
})();
var statearr_61300_61354 = state_61248__$1;
(statearr_61300_61354[(2)] = null);

(statearr_61300_61354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (18))){
var inst_61192 = (state_61248[(2)]);
var state_61248__$1 = state_61248;
var statearr_61301_61355 = state_61248__$1;
(statearr_61301_61355[(2)] = inst_61192);

(statearr_61301_61355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (37))){
var state_61248__$1 = state_61248;
var statearr_61302_61356 = state_61248__$1;
(statearr_61302_61356[(2)] = null);

(statearr_61302_61356[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61249 === (8))){
var inst_61154 = (state_61248[(8)]);
var inst_61171 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61154);
var state_61248__$1 = state_61248;
var statearr_61303_61357 = state_61248__$1;
(statearr_61303_61357[(2)] = inst_61171);

(statearr_61303_61357[(1)] = (10));


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
});})(c__20164__auto___61311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20099__auto__,c__20164__auto___61311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20100__auto__ = null;
var cljs$core$async$mix_$_state_machine__20100__auto____0 = (function (){
var statearr_61307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61307[(0)] = cljs$core$async$mix_$_state_machine__20100__auto__);

(statearr_61307[(1)] = (1));

return statearr_61307;
});
var cljs$core$async$mix_$_state_machine__20100__auto____1 = (function (state_61248){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_61248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e61308){if((e61308 instanceof Object)){
var ex__20103__auto__ = e61308;
var statearr_61309_61358 = state_61248;
(statearr_61309_61358[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61359 = state_61248;
state_61248 = G__61359;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20100__auto__ = function(state_61248){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20100__auto____1.call(this,state_61248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20100__auto____0;
cljs$core$async$mix_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20100__auto____1;
return cljs$core$async$mix_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___61311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20166__auto__ = (function (){var statearr_61310 = f__20165__auto__.call(null);
(statearr_61310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___61311);

return statearr_61310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___61311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args61360 = [];
var len__17390__auto___61363 = arguments.length;
var i__17391__auto___61364 = (0);
while(true){
if((i__17391__auto___61364 < len__17390__auto___61363)){
args61360.push((arguments[i__17391__auto___61364]));

var G__61365 = (i__17391__auto___61364 + (1));
i__17391__auto___61364 = G__61365;
continue;
} else {
}
break;
}

var G__61362 = args61360.length;
switch (G__61362) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61360.length)].join('')));

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
var args61368 = [];
var len__17390__auto___61493 = arguments.length;
var i__17391__auto___61494 = (0);
while(true){
if((i__17391__auto___61494 < len__17390__auto___61493)){
args61368.push((arguments[i__17391__auto___61494]));

var G__61495 = (i__17391__auto___61494 + (1));
i__17391__auto___61494 = G__61495;
continue;
} else {
}
break;
}

var G__61370 = args61368.length;
switch (G__61370) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61368.length)].join('')));

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
return (function (p1__61367_SHARP_){
if(cljs.core.truth_(p1__61367_SHARP_.call(null,topic))){
return p1__61367_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__61367_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16332__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async61371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61371 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta61372){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta61372 = meta61372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_61373,meta61372__$1){
var self__ = this;
var _61373__$1 = this;
return (new cljs.core.async.t_cljs$core$async61371(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta61372__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_61373){
var self__ = this;
var _61373__$1 = this;
return self__.meta61372;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61371.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta61372","meta61372",357882983,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61371";

cljs.core.async.t_cljs$core$async61371.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async61371");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async61371 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async61371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61372){
return (new cljs.core.async.t_cljs$core$async61371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61372));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async61371(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20164__auto___61497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___61497,mults,ensure_mult,p){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___61497,mults,ensure_mult,p){
return (function (state_61445){
var state_val_61446 = (state_61445[(1)]);
if((state_val_61446 === (7))){
var inst_61441 = (state_61445[(2)]);
var state_61445__$1 = state_61445;
var statearr_61447_61498 = state_61445__$1;
(statearr_61447_61498[(2)] = inst_61441);

(statearr_61447_61498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (20))){
var state_61445__$1 = state_61445;
var statearr_61448_61499 = state_61445__$1;
(statearr_61448_61499[(2)] = null);

(statearr_61448_61499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (1))){
var state_61445__$1 = state_61445;
var statearr_61449_61500 = state_61445__$1;
(statearr_61449_61500[(2)] = null);

(statearr_61449_61500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (24))){
var inst_61424 = (state_61445[(7)]);
var inst_61433 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_61424);
var state_61445__$1 = state_61445;
var statearr_61450_61501 = state_61445__$1;
(statearr_61450_61501[(2)] = inst_61433);

(statearr_61450_61501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (4))){
var inst_61376 = (state_61445[(8)]);
var inst_61376__$1 = (state_61445[(2)]);
var inst_61377 = (inst_61376__$1 == null);
var state_61445__$1 = (function (){var statearr_61451 = state_61445;
(statearr_61451[(8)] = inst_61376__$1);

return statearr_61451;
})();
if(cljs.core.truth_(inst_61377)){
var statearr_61452_61502 = state_61445__$1;
(statearr_61452_61502[(1)] = (5));

} else {
var statearr_61453_61503 = state_61445__$1;
(statearr_61453_61503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (15))){
var inst_61418 = (state_61445[(2)]);
var state_61445__$1 = state_61445;
var statearr_61454_61504 = state_61445__$1;
(statearr_61454_61504[(2)] = inst_61418);

(statearr_61454_61504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (21))){
var inst_61438 = (state_61445[(2)]);
var state_61445__$1 = (function (){var statearr_61455 = state_61445;
(statearr_61455[(9)] = inst_61438);

return statearr_61455;
})();
var statearr_61456_61505 = state_61445__$1;
(statearr_61456_61505[(2)] = null);

(statearr_61456_61505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (13))){
var inst_61400 = (state_61445[(10)]);
var inst_61402 = cljs.core.chunked_seq_QMARK_.call(null,inst_61400);
var state_61445__$1 = state_61445;
if(inst_61402){
var statearr_61457_61506 = state_61445__$1;
(statearr_61457_61506[(1)] = (16));

} else {
var statearr_61458_61507 = state_61445__$1;
(statearr_61458_61507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (22))){
var inst_61430 = (state_61445[(2)]);
var state_61445__$1 = state_61445;
if(cljs.core.truth_(inst_61430)){
var statearr_61459_61508 = state_61445__$1;
(statearr_61459_61508[(1)] = (23));

} else {
var statearr_61460_61509 = state_61445__$1;
(statearr_61460_61509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (6))){
var inst_61376 = (state_61445[(8)]);
var inst_61426 = (state_61445[(11)]);
var inst_61424 = (state_61445[(7)]);
var inst_61424__$1 = topic_fn.call(null,inst_61376);
var inst_61425 = cljs.core.deref.call(null,mults);
var inst_61426__$1 = cljs.core.get.call(null,inst_61425,inst_61424__$1);
var state_61445__$1 = (function (){var statearr_61461 = state_61445;
(statearr_61461[(11)] = inst_61426__$1);

(statearr_61461[(7)] = inst_61424__$1);

return statearr_61461;
})();
if(cljs.core.truth_(inst_61426__$1)){
var statearr_61462_61510 = state_61445__$1;
(statearr_61462_61510[(1)] = (19));

} else {
var statearr_61463_61511 = state_61445__$1;
(statearr_61463_61511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (25))){
var inst_61435 = (state_61445[(2)]);
var state_61445__$1 = state_61445;
var statearr_61464_61512 = state_61445__$1;
(statearr_61464_61512[(2)] = inst_61435);

(statearr_61464_61512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (17))){
var inst_61400 = (state_61445[(10)]);
var inst_61409 = cljs.core.first.call(null,inst_61400);
var inst_61410 = cljs.core.async.muxch_STAR_.call(null,inst_61409);
var inst_61411 = cljs.core.async.close_BANG_.call(null,inst_61410);
var inst_61412 = cljs.core.next.call(null,inst_61400);
var inst_61386 = inst_61412;
var inst_61387 = null;
var inst_61388 = (0);
var inst_61389 = (0);
var state_61445__$1 = (function (){var statearr_61465 = state_61445;
(statearr_61465[(12)] = inst_61388);

(statearr_61465[(13)] = inst_61386);

(statearr_61465[(14)] = inst_61411);

(statearr_61465[(15)] = inst_61387);

(statearr_61465[(16)] = inst_61389);

return statearr_61465;
})();
var statearr_61466_61513 = state_61445__$1;
(statearr_61466_61513[(2)] = null);

(statearr_61466_61513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (3))){
var inst_61443 = (state_61445[(2)]);
var state_61445__$1 = state_61445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61445__$1,inst_61443);
} else {
if((state_val_61446 === (12))){
var inst_61420 = (state_61445[(2)]);
var state_61445__$1 = state_61445;
var statearr_61467_61514 = state_61445__$1;
(statearr_61467_61514[(2)] = inst_61420);

(statearr_61467_61514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (2))){
var state_61445__$1 = state_61445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61445__$1,(4),ch);
} else {
if((state_val_61446 === (23))){
var state_61445__$1 = state_61445;
var statearr_61468_61515 = state_61445__$1;
(statearr_61468_61515[(2)] = null);

(statearr_61468_61515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (19))){
var inst_61376 = (state_61445[(8)]);
var inst_61426 = (state_61445[(11)]);
var inst_61428 = cljs.core.async.muxch_STAR_.call(null,inst_61426);
var state_61445__$1 = state_61445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61445__$1,(22),inst_61428,inst_61376);
} else {
if((state_val_61446 === (11))){
var inst_61386 = (state_61445[(13)]);
var inst_61400 = (state_61445[(10)]);
var inst_61400__$1 = cljs.core.seq.call(null,inst_61386);
var state_61445__$1 = (function (){var statearr_61469 = state_61445;
(statearr_61469[(10)] = inst_61400__$1);

return statearr_61469;
})();
if(inst_61400__$1){
var statearr_61470_61516 = state_61445__$1;
(statearr_61470_61516[(1)] = (13));

} else {
var statearr_61471_61517 = state_61445__$1;
(statearr_61471_61517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (9))){
var inst_61422 = (state_61445[(2)]);
var state_61445__$1 = state_61445;
var statearr_61472_61518 = state_61445__$1;
(statearr_61472_61518[(2)] = inst_61422);

(statearr_61472_61518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (5))){
var inst_61383 = cljs.core.deref.call(null,mults);
var inst_61384 = cljs.core.vals.call(null,inst_61383);
var inst_61385 = cljs.core.seq.call(null,inst_61384);
var inst_61386 = inst_61385;
var inst_61387 = null;
var inst_61388 = (0);
var inst_61389 = (0);
var state_61445__$1 = (function (){var statearr_61473 = state_61445;
(statearr_61473[(12)] = inst_61388);

(statearr_61473[(13)] = inst_61386);

(statearr_61473[(15)] = inst_61387);

(statearr_61473[(16)] = inst_61389);

return statearr_61473;
})();
var statearr_61474_61519 = state_61445__$1;
(statearr_61474_61519[(2)] = null);

(statearr_61474_61519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (14))){
var state_61445__$1 = state_61445;
var statearr_61478_61520 = state_61445__$1;
(statearr_61478_61520[(2)] = null);

(statearr_61478_61520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (16))){
var inst_61400 = (state_61445[(10)]);
var inst_61404 = cljs.core.chunk_first.call(null,inst_61400);
var inst_61405 = cljs.core.chunk_rest.call(null,inst_61400);
var inst_61406 = cljs.core.count.call(null,inst_61404);
var inst_61386 = inst_61405;
var inst_61387 = inst_61404;
var inst_61388 = inst_61406;
var inst_61389 = (0);
var state_61445__$1 = (function (){var statearr_61479 = state_61445;
(statearr_61479[(12)] = inst_61388);

(statearr_61479[(13)] = inst_61386);

(statearr_61479[(15)] = inst_61387);

(statearr_61479[(16)] = inst_61389);

return statearr_61479;
})();
var statearr_61480_61521 = state_61445__$1;
(statearr_61480_61521[(2)] = null);

(statearr_61480_61521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (10))){
var inst_61388 = (state_61445[(12)]);
var inst_61386 = (state_61445[(13)]);
var inst_61387 = (state_61445[(15)]);
var inst_61389 = (state_61445[(16)]);
var inst_61394 = cljs.core._nth.call(null,inst_61387,inst_61389);
var inst_61395 = cljs.core.async.muxch_STAR_.call(null,inst_61394);
var inst_61396 = cljs.core.async.close_BANG_.call(null,inst_61395);
var inst_61397 = (inst_61389 + (1));
var tmp61475 = inst_61388;
var tmp61476 = inst_61386;
var tmp61477 = inst_61387;
var inst_61386__$1 = tmp61476;
var inst_61387__$1 = tmp61477;
var inst_61388__$1 = tmp61475;
var inst_61389__$1 = inst_61397;
var state_61445__$1 = (function (){var statearr_61481 = state_61445;
(statearr_61481[(17)] = inst_61396);

(statearr_61481[(12)] = inst_61388__$1);

(statearr_61481[(13)] = inst_61386__$1);

(statearr_61481[(15)] = inst_61387__$1);

(statearr_61481[(16)] = inst_61389__$1);

return statearr_61481;
})();
var statearr_61482_61522 = state_61445__$1;
(statearr_61482_61522[(2)] = null);

(statearr_61482_61522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (18))){
var inst_61415 = (state_61445[(2)]);
var state_61445__$1 = state_61445;
var statearr_61483_61523 = state_61445__$1;
(statearr_61483_61523[(2)] = inst_61415);

(statearr_61483_61523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61446 === (8))){
var inst_61388 = (state_61445[(12)]);
var inst_61389 = (state_61445[(16)]);
var inst_61391 = (inst_61389 < inst_61388);
var inst_61392 = inst_61391;
var state_61445__$1 = state_61445;
if(cljs.core.truth_(inst_61392)){
var statearr_61484_61524 = state_61445__$1;
(statearr_61484_61524[(1)] = (10));

} else {
var statearr_61485_61525 = state_61445__$1;
(statearr_61485_61525[(1)] = (11));

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
});})(c__20164__auto___61497,mults,ensure_mult,p))
;
return ((function (switch__20099__auto__,c__20164__auto___61497,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_61489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61489[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_61489[(1)] = (1));

return statearr_61489;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_61445){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_61445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e61490){if((e61490 instanceof Object)){
var ex__20103__auto__ = e61490;
var statearr_61491_61526 = state_61445;
(statearr_61491_61526[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61527 = state_61445;
state_61445 = G__61527;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_61445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_61445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___61497,mults,ensure_mult,p))
})();
var state__20166__auto__ = (function (){var statearr_61492 = f__20165__auto__.call(null);
(statearr_61492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___61497);

return statearr_61492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___61497,mults,ensure_mult,p))
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
var args61528 = [];
var len__17390__auto___61531 = arguments.length;
var i__17391__auto___61532 = (0);
while(true){
if((i__17391__auto___61532 < len__17390__auto___61531)){
args61528.push((arguments[i__17391__auto___61532]));

var G__61533 = (i__17391__auto___61532 + (1));
i__17391__auto___61532 = G__61533;
continue;
} else {
}
break;
}

var G__61530 = args61528.length;
switch (G__61530) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61528.length)].join('')));

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
var args61535 = [];
var len__17390__auto___61538 = arguments.length;
var i__17391__auto___61539 = (0);
while(true){
if((i__17391__auto___61539 < len__17390__auto___61538)){
args61535.push((arguments[i__17391__auto___61539]));

var G__61540 = (i__17391__auto___61539 + (1));
i__17391__auto___61539 = G__61540;
continue;
} else {
}
break;
}

var G__61537 = args61535.length;
switch (G__61537) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61535.length)].join('')));

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
var args61542 = [];
var len__17390__auto___61613 = arguments.length;
var i__17391__auto___61614 = (0);
while(true){
if((i__17391__auto___61614 < len__17390__auto___61613)){
args61542.push((arguments[i__17391__auto___61614]));

var G__61615 = (i__17391__auto___61614 + (1));
i__17391__auto___61614 = G__61615;
continue;
} else {
}
break;
}

var G__61544 = args61542.length;
switch (G__61544) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61542.length)].join('')));

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
var c__20164__auto___61617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___61617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___61617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_61583){
var state_val_61584 = (state_61583[(1)]);
if((state_val_61584 === (7))){
var state_61583__$1 = state_61583;
var statearr_61585_61618 = state_61583__$1;
(statearr_61585_61618[(2)] = null);

(statearr_61585_61618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (1))){
var state_61583__$1 = state_61583;
var statearr_61586_61619 = state_61583__$1;
(statearr_61586_61619[(2)] = null);

(statearr_61586_61619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (4))){
var inst_61547 = (state_61583[(7)]);
var inst_61549 = (inst_61547 < cnt);
var state_61583__$1 = state_61583;
if(cljs.core.truth_(inst_61549)){
var statearr_61587_61620 = state_61583__$1;
(statearr_61587_61620[(1)] = (6));

} else {
var statearr_61588_61621 = state_61583__$1;
(statearr_61588_61621[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (15))){
var inst_61579 = (state_61583[(2)]);
var state_61583__$1 = state_61583;
var statearr_61589_61622 = state_61583__$1;
(statearr_61589_61622[(2)] = inst_61579);

(statearr_61589_61622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (13))){
var inst_61572 = cljs.core.async.close_BANG_.call(null,out);
var state_61583__$1 = state_61583;
var statearr_61590_61623 = state_61583__$1;
(statearr_61590_61623[(2)] = inst_61572);

(statearr_61590_61623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (6))){
var state_61583__$1 = state_61583;
var statearr_61591_61624 = state_61583__$1;
(statearr_61591_61624[(2)] = null);

(statearr_61591_61624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (3))){
var inst_61581 = (state_61583[(2)]);
var state_61583__$1 = state_61583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61583__$1,inst_61581);
} else {
if((state_val_61584 === (12))){
var inst_61569 = (state_61583[(8)]);
var inst_61569__$1 = (state_61583[(2)]);
var inst_61570 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_61569__$1);
var state_61583__$1 = (function (){var statearr_61592 = state_61583;
(statearr_61592[(8)] = inst_61569__$1);

return statearr_61592;
})();
if(cljs.core.truth_(inst_61570)){
var statearr_61593_61625 = state_61583__$1;
(statearr_61593_61625[(1)] = (13));

} else {
var statearr_61594_61626 = state_61583__$1;
(statearr_61594_61626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (2))){
var inst_61546 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_61547 = (0);
var state_61583__$1 = (function (){var statearr_61595 = state_61583;
(statearr_61595[(9)] = inst_61546);

(statearr_61595[(7)] = inst_61547);

return statearr_61595;
})();
var statearr_61596_61627 = state_61583__$1;
(statearr_61596_61627[(2)] = null);

(statearr_61596_61627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (11))){
var inst_61547 = (state_61583[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61583,(10),Object,null,(9));
var inst_61556 = chs__$1.call(null,inst_61547);
var inst_61557 = done.call(null,inst_61547);
var inst_61558 = cljs.core.async.take_BANG_.call(null,inst_61556,inst_61557);
var state_61583__$1 = state_61583;
var statearr_61597_61628 = state_61583__$1;
(statearr_61597_61628[(2)] = inst_61558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (9))){
var inst_61547 = (state_61583[(7)]);
var inst_61560 = (state_61583[(2)]);
var inst_61561 = (inst_61547 + (1));
var inst_61547__$1 = inst_61561;
var state_61583__$1 = (function (){var statearr_61598 = state_61583;
(statearr_61598[(10)] = inst_61560);

(statearr_61598[(7)] = inst_61547__$1);

return statearr_61598;
})();
var statearr_61599_61629 = state_61583__$1;
(statearr_61599_61629[(2)] = null);

(statearr_61599_61629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (5))){
var inst_61567 = (state_61583[(2)]);
var state_61583__$1 = (function (){var statearr_61600 = state_61583;
(statearr_61600[(11)] = inst_61567);

return statearr_61600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61583__$1,(12),dchan);
} else {
if((state_val_61584 === (14))){
var inst_61569 = (state_61583[(8)]);
var inst_61574 = cljs.core.apply.call(null,f,inst_61569);
var state_61583__$1 = state_61583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61583__$1,(16),out,inst_61574);
} else {
if((state_val_61584 === (16))){
var inst_61576 = (state_61583[(2)]);
var state_61583__$1 = (function (){var statearr_61601 = state_61583;
(statearr_61601[(12)] = inst_61576);

return statearr_61601;
})();
var statearr_61602_61630 = state_61583__$1;
(statearr_61602_61630[(2)] = null);

(statearr_61602_61630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (10))){
var inst_61551 = (state_61583[(2)]);
var inst_61552 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_61583__$1 = (function (){var statearr_61603 = state_61583;
(statearr_61603[(13)] = inst_61551);

return statearr_61603;
})();
var statearr_61604_61631 = state_61583__$1;
(statearr_61604_61631[(2)] = inst_61552);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61584 === (8))){
var inst_61565 = (state_61583[(2)]);
var state_61583__$1 = state_61583;
var statearr_61605_61632 = state_61583__$1;
(statearr_61605_61632[(2)] = inst_61565);

(statearr_61605_61632[(1)] = (5));


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
});})(c__20164__auto___61617,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20099__auto__,c__20164__auto___61617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_61609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61609[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_61609[(1)] = (1));

return statearr_61609;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_61583){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_61583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e61610){if((e61610 instanceof Object)){
var ex__20103__auto__ = e61610;
var statearr_61611_61633 = state_61583;
(statearr_61611_61633[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61634 = state_61583;
state_61583 = G__61634;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_61583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_61583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___61617,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20166__auto__ = (function (){var statearr_61612 = f__20165__auto__.call(null);
(statearr_61612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___61617);

return statearr_61612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___61617,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args61636 = [];
var len__17390__auto___61692 = arguments.length;
var i__17391__auto___61693 = (0);
while(true){
if((i__17391__auto___61693 < len__17390__auto___61692)){
args61636.push((arguments[i__17391__auto___61693]));

var G__61694 = (i__17391__auto___61693 + (1));
i__17391__auto___61693 = G__61694;
continue;
} else {
}
break;
}

var G__61638 = args61636.length;
switch (G__61638) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61636.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___61696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___61696,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___61696,out){
return (function (state_61668){
var state_val_61669 = (state_61668[(1)]);
if((state_val_61669 === (7))){
var inst_61647 = (state_61668[(7)]);
var inst_61648 = (state_61668[(8)]);
var inst_61647__$1 = (state_61668[(2)]);
var inst_61648__$1 = cljs.core.nth.call(null,inst_61647__$1,(0),null);
var inst_61649 = cljs.core.nth.call(null,inst_61647__$1,(1),null);
var inst_61650 = (inst_61648__$1 == null);
var state_61668__$1 = (function (){var statearr_61670 = state_61668;
(statearr_61670[(7)] = inst_61647__$1);

(statearr_61670[(8)] = inst_61648__$1);

(statearr_61670[(9)] = inst_61649);

return statearr_61670;
})();
if(cljs.core.truth_(inst_61650)){
var statearr_61671_61697 = state_61668__$1;
(statearr_61671_61697[(1)] = (8));

} else {
var statearr_61672_61698 = state_61668__$1;
(statearr_61672_61698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61669 === (1))){
var inst_61639 = cljs.core.vec.call(null,chs);
var inst_61640 = inst_61639;
var state_61668__$1 = (function (){var statearr_61673 = state_61668;
(statearr_61673[(10)] = inst_61640);

return statearr_61673;
})();
var statearr_61674_61699 = state_61668__$1;
(statearr_61674_61699[(2)] = null);

(statearr_61674_61699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61669 === (4))){
var inst_61640 = (state_61668[(10)]);
var state_61668__$1 = state_61668;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61668__$1,(7),inst_61640);
} else {
if((state_val_61669 === (6))){
var inst_61664 = (state_61668[(2)]);
var state_61668__$1 = state_61668;
var statearr_61675_61700 = state_61668__$1;
(statearr_61675_61700[(2)] = inst_61664);

(statearr_61675_61700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61669 === (3))){
var inst_61666 = (state_61668[(2)]);
var state_61668__$1 = state_61668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61668__$1,inst_61666);
} else {
if((state_val_61669 === (2))){
var inst_61640 = (state_61668[(10)]);
var inst_61642 = cljs.core.count.call(null,inst_61640);
var inst_61643 = (inst_61642 > (0));
var state_61668__$1 = state_61668;
if(cljs.core.truth_(inst_61643)){
var statearr_61677_61701 = state_61668__$1;
(statearr_61677_61701[(1)] = (4));

} else {
var statearr_61678_61702 = state_61668__$1;
(statearr_61678_61702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61669 === (11))){
var inst_61640 = (state_61668[(10)]);
var inst_61657 = (state_61668[(2)]);
var tmp61676 = inst_61640;
var inst_61640__$1 = tmp61676;
var state_61668__$1 = (function (){var statearr_61679 = state_61668;
(statearr_61679[(11)] = inst_61657);

(statearr_61679[(10)] = inst_61640__$1);

return statearr_61679;
})();
var statearr_61680_61703 = state_61668__$1;
(statearr_61680_61703[(2)] = null);

(statearr_61680_61703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61669 === (9))){
var inst_61648 = (state_61668[(8)]);
var state_61668__$1 = state_61668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61668__$1,(11),out,inst_61648);
} else {
if((state_val_61669 === (5))){
var inst_61662 = cljs.core.async.close_BANG_.call(null,out);
var state_61668__$1 = state_61668;
var statearr_61681_61704 = state_61668__$1;
(statearr_61681_61704[(2)] = inst_61662);

(statearr_61681_61704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61669 === (10))){
var inst_61660 = (state_61668[(2)]);
var state_61668__$1 = state_61668;
var statearr_61682_61705 = state_61668__$1;
(statearr_61682_61705[(2)] = inst_61660);

(statearr_61682_61705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61669 === (8))){
var inst_61647 = (state_61668[(7)]);
var inst_61648 = (state_61668[(8)]);
var inst_61640 = (state_61668[(10)]);
var inst_61649 = (state_61668[(9)]);
var inst_61652 = (function (){var cs = inst_61640;
var vec__61645 = inst_61647;
var v = inst_61648;
var c = inst_61649;
return ((function (cs,vec__61645,v,c,inst_61647,inst_61648,inst_61640,inst_61649,state_val_61669,c__20164__auto___61696,out){
return (function (p1__61635_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__61635_SHARP_);
});
;})(cs,vec__61645,v,c,inst_61647,inst_61648,inst_61640,inst_61649,state_val_61669,c__20164__auto___61696,out))
})();
var inst_61653 = cljs.core.filterv.call(null,inst_61652,inst_61640);
var inst_61640__$1 = inst_61653;
var state_61668__$1 = (function (){var statearr_61683 = state_61668;
(statearr_61683[(10)] = inst_61640__$1);

return statearr_61683;
})();
var statearr_61684_61706 = state_61668__$1;
(statearr_61684_61706[(2)] = null);

(statearr_61684_61706[(1)] = (2));


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
});})(c__20164__auto___61696,out))
;
return ((function (switch__20099__auto__,c__20164__auto___61696,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_61688 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61688[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_61688[(1)] = (1));

return statearr_61688;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_61668){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_61668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e61689){if((e61689 instanceof Object)){
var ex__20103__auto__ = e61689;
var statearr_61690_61707 = state_61668;
(statearr_61690_61707[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61708 = state_61668;
state_61668 = G__61708;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_61668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_61668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___61696,out))
})();
var state__20166__auto__ = (function (){var statearr_61691 = f__20165__auto__.call(null);
(statearr_61691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___61696);

return statearr_61691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___61696,out))
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
var args61709 = [];
var len__17390__auto___61758 = arguments.length;
var i__17391__auto___61759 = (0);
while(true){
if((i__17391__auto___61759 < len__17390__auto___61758)){
args61709.push((arguments[i__17391__auto___61759]));

var G__61760 = (i__17391__auto___61759 + (1));
i__17391__auto___61759 = G__61760;
continue;
} else {
}
break;
}

var G__61711 = args61709.length;
switch (G__61711) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61709.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___61762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___61762,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___61762,out){
return (function (state_61735){
var state_val_61736 = (state_61735[(1)]);
if((state_val_61736 === (7))){
var inst_61717 = (state_61735[(7)]);
var inst_61717__$1 = (state_61735[(2)]);
var inst_61718 = (inst_61717__$1 == null);
var inst_61719 = cljs.core.not.call(null,inst_61718);
var state_61735__$1 = (function (){var statearr_61737 = state_61735;
(statearr_61737[(7)] = inst_61717__$1);

return statearr_61737;
})();
if(inst_61719){
var statearr_61738_61763 = state_61735__$1;
(statearr_61738_61763[(1)] = (8));

} else {
var statearr_61739_61764 = state_61735__$1;
(statearr_61739_61764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (1))){
var inst_61712 = (0);
var state_61735__$1 = (function (){var statearr_61740 = state_61735;
(statearr_61740[(8)] = inst_61712);

return statearr_61740;
})();
var statearr_61741_61765 = state_61735__$1;
(statearr_61741_61765[(2)] = null);

(statearr_61741_61765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (4))){
var state_61735__$1 = state_61735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61735__$1,(7),ch);
} else {
if((state_val_61736 === (6))){
var inst_61730 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
var statearr_61742_61766 = state_61735__$1;
(statearr_61742_61766[(2)] = inst_61730);

(statearr_61742_61766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (3))){
var inst_61732 = (state_61735[(2)]);
var inst_61733 = cljs.core.async.close_BANG_.call(null,out);
var state_61735__$1 = (function (){var statearr_61743 = state_61735;
(statearr_61743[(9)] = inst_61732);

return statearr_61743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61735__$1,inst_61733);
} else {
if((state_val_61736 === (2))){
var inst_61712 = (state_61735[(8)]);
var inst_61714 = (inst_61712 < n);
var state_61735__$1 = state_61735;
if(cljs.core.truth_(inst_61714)){
var statearr_61744_61767 = state_61735__$1;
(statearr_61744_61767[(1)] = (4));

} else {
var statearr_61745_61768 = state_61735__$1;
(statearr_61745_61768[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (11))){
var inst_61712 = (state_61735[(8)]);
var inst_61722 = (state_61735[(2)]);
var inst_61723 = (inst_61712 + (1));
var inst_61712__$1 = inst_61723;
var state_61735__$1 = (function (){var statearr_61746 = state_61735;
(statearr_61746[(10)] = inst_61722);

(statearr_61746[(8)] = inst_61712__$1);

return statearr_61746;
})();
var statearr_61747_61769 = state_61735__$1;
(statearr_61747_61769[(2)] = null);

(statearr_61747_61769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (9))){
var state_61735__$1 = state_61735;
var statearr_61748_61770 = state_61735__$1;
(statearr_61748_61770[(2)] = null);

(statearr_61748_61770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (5))){
var state_61735__$1 = state_61735;
var statearr_61749_61771 = state_61735__$1;
(statearr_61749_61771[(2)] = null);

(statearr_61749_61771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (10))){
var inst_61727 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
var statearr_61750_61772 = state_61735__$1;
(statearr_61750_61772[(2)] = inst_61727);

(statearr_61750_61772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (8))){
var inst_61717 = (state_61735[(7)]);
var state_61735__$1 = state_61735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61735__$1,(11),out,inst_61717);
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
});})(c__20164__auto___61762,out))
;
return ((function (switch__20099__auto__,c__20164__auto___61762,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_61754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61754[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_61754[(1)] = (1));

return statearr_61754;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_61735){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_61735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e61755){if((e61755 instanceof Object)){
var ex__20103__auto__ = e61755;
var statearr_61756_61773 = state_61735;
(statearr_61756_61773[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61774 = state_61735;
state_61735 = G__61774;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_61735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_61735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___61762,out))
})();
var state__20166__auto__ = (function (){var statearr_61757 = f__20165__auto__.call(null);
(statearr_61757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___61762);

return statearr_61757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___61762,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61782 = (function (map_LT_,f,ch,meta61783){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta61783 = meta61783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61784,meta61783__$1){
var self__ = this;
var _61784__$1 = this;
return (new cljs.core.async.t_cljs$core$async61782(self__.map_LT_,self__.f,self__.ch,meta61783__$1));
});

cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61784){
var self__ = this;
var _61784__$1 = this;
return self__.meta61783;
});

cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async61785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61785 = (function (map_LT_,f,ch,meta61783,_,fn1,meta61786){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta61783 = meta61783;
this._ = _;
this.fn1 = fn1;
this.meta61786 = meta61786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_61787,meta61786__$1){
var self__ = this;
var _61787__$1 = this;
return (new cljs.core.async.t_cljs$core$async61785(self__.map_LT_,self__.f,self__.ch,self__.meta61783,self__._,self__.fn1,meta61786__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_61787){
var self__ = this;
var _61787__$1 = this;
return self__.meta61786;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__61775_SHARP_){
return f1.call(null,(((p1__61775_SHARP_ == null))?null:self__.f.call(null,p1__61775_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async61785.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61783","meta61783",1192799217,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61782","cljs.core.async/t_cljs$core$async61782",863631835,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61786","meta61786",-1804252476,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61785";

cljs.core.async.t_cljs$core$async61785.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async61785");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async61785 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61785(map_LT___$1,f__$1,ch__$1,meta61783__$1,___$2,fn1__$1,meta61786){
return (new cljs.core.async.t_cljs$core$async61785(map_LT___$1,f__$1,ch__$1,meta61783__$1,___$2,fn1__$1,meta61786));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async61785(self__.map_LT_,self__.f,self__.ch,self__.meta61783,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async61782.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async61782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61783","meta61783",1192799217,null)], null);
});

cljs.core.async.t_cljs$core$async61782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61782";

cljs.core.async.t_cljs$core$async61782.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async61782");
});

cljs.core.async.__GT_t_cljs$core$async61782 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61782(map_LT___$1,f__$1,ch__$1,meta61783){
return (new cljs.core.async.t_cljs$core$async61782(map_LT___$1,f__$1,ch__$1,meta61783));
});

}

return (new cljs.core.async.t_cljs$core$async61782(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61791 = (function (map_GT_,f,ch,meta61792){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta61792 = meta61792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61793,meta61792__$1){
var self__ = this;
var _61793__$1 = this;
return (new cljs.core.async.t_cljs$core$async61791(self__.map_GT_,self__.f,self__.ch,meta61792__$1));
});

cljs.core.async.t_cljs$core$async61791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61793){
var self__ = this;
var _61793__$1 = this;
return self__.meta61792;
});

cljs.core.async.t_cljs$core$async61791.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async61791.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61791.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async61791.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61791.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async61791.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async61791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61792","meta61792",-1215163493,null)], null);
});

cljs.core.async.t_cljs$core$async61791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61791";

cljs.core.async.t_cljs$core$async61791.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async61791");
});

cljs.core.async.__GT_t_cljs$core$async61791 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61791(map_GT___$1,f__$1,ch__$1,meta61792){
return (new cljs.core.async.t_cljs$core$async61791(map_GT___$1,f__$1,ch__$1,meta61792));
});

}

return (new cljs.core.async.t_cljs$core$async61791(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async61797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61797 = (function (filter_GT_,p,ch,meta61798){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta61798 = meta61798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61799,meta61798__$1){
var self__ = this;
var _61799__$1 = this;
return (new cljs.core.async.t_cljs$core$async61797(self__.filter_GT_,self__.p,self__.ch,meta61798__$1));
});

cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61799){
var self__ = this;
var _61799__$1 = this;
return self__.meta61798;
});

cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async61797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async61797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61798","meta61798",-1413744748,null)], null);
});

cljs.core.async.t_cljs$core$async61797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61797";

cljs.core.async.t_cljs$core$async61797.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async61797");
});

cljs.core.async.__GT_t_cljs$core$async61797 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61797(filter_GT___$1,p__$1,ch__$1,meta61798){
return (new cljs.core.async.t_cljs$core$async61797(filter_GT___$1,p__$1,ch__$1,meta61798));
});

}

return (new cljs.core.async.t_cljs$core$async61797(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args61800 = [];
var len__17390__auto___61844 = arguments.length;
var i__17391__auto___61845 = (0);
while(true){
if((i__17391__auto___61845 < len__17390__auto___61844)){
args61800.push((arguments[i__17391__auto___61845]));

var G__61846 = (i__17391__auto___61845 + (1));
i__17391__auto___61845 = G__61846;
continue;
} else {
}
break;
}

var G__61802 = args61800.length;
switch (G__61802) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61800.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___61848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___61848,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___61848,out){
return (function (state_61823){
var state_val_61824 = (state_61823[(1)]);
if((state_val_61824 === (7))){
var inst_61819 = (state_61823[(2)]);
var state_61823__$1 = state_61823;
var statearr_61825_61849 = state_61823__$1;
(statearr_61825_61849[(2)] = inst_61819);

(statearr_61825_61849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (1))){
var state_61823__$1 = state_61823;
var statearr_61826_61850 = state_61823__$1;
(statearr_61826_61850[(2)] = null);

(statearr_61826_61850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (4))){
var inst_61805 = (state_61823[(7)]);
var inst_61805__$1 = (state_61823[(2)]);
var inst_61806 = (inst_61805__$1 == null);
var state_61823__$1 = (function (){var statearr_61827 = state_61823;
(statearr_61827[(7)] = inst_61805__$1);

return statearr_61827;
})();
if(cljs.core.truth_(inst_61806)){
var statearr_61828_61851 = state_61823__$1;
(statearr_61828_61851[(1)] = (5));

} else {
var statearr_61829_61852 = state_61823__$1;
(statearr_61829_61852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (6))){
var inst_61805 = (state_61823[(7)]);
var inst_61810 = p.call(null,inst_61805);
var state_61823__$1 = state_61823;
if(cljs.core.truth_(inst_61810)){
var statearr_61830_61853 = state_61823__$1;
(statearr_61830_61853[(1)] = (8));

} else {
var statearr_61831_61854 = state_61823__$1;
(statearr_61831_61854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (3))){
var inst_61821 = (state_61823[(2)]);
var state_61823__$1 = state_61823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61823__$1,inst_61821);
} else {
if((state_val_61824 === (2))){
var state_61823__$1 = state_61823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61823__$1,(4),ch);
} else {
if((state_val_61824 === (11))){
var inst_61813 = (state_61823[(2)]);
var state_61823__$1 = state_61823;
var statearr_61832_61855 = state_61823__$1;
(statearr_61832_61855[(2)] = inst_61813);

(statearr_61832_61855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (9))){
var state_61823__$1 = state_61823;
var statearr_61833_61856 = state_61823__$1;
(statearr_61833_61856[(2)] = null);

(statearr_61833_61856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (5))){
var inst_61808 = cljs.core.async.close_BANG_.call(null,out);
var state_61823__$1 = state_61823;
var statearr_61834_61857 = state_61823__$1;
(statearr_61834_61857[(2)] = inst_61808);

(statearr_61834_61857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (10))){
var inst_61816 = (state_61823[(2)]);
var state_61823__$1 = (function (){var statearr_61835 = state_61823;
(statearr_61835[(8)] = inst_61816);

return statearr_61835;
})();
var statearr_61836_61858 = state_61823__$1;
(statearr_61836_61858[(2)] = null);

(statearr_61836_61858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61824 === (8))){
var inst_61805 = (state_61823[(7)]);
var state_61823__$1 = state_61823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61823__$1,(11),out,inst_61805);
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
});})(c__20164__auto___61848,out))
;
return ((function (switch__20099__auto__,c__20164__auto___61848,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_61840 = [null,null,null,null,null,null,null,null,null];
(statearr_61840[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_61840[(1)] = (1));

return statearr_61840;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_61823){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_61823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e61841){if((e61841 instanceof Object)){
var ex__20103__auto__ = e61841;
var statearr_61842_61859 = state_61823;
(statearr_61842_61859[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61860 = state_61823;
state_61823 = G__61860;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_61823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_61823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___61848,out))
})();
var state__20166__auto__ = (function (){var statearr_61843 = f__20165__auto__.call(null);
(statearr_61843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___61848);

return statearr_61843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___61848,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args61861 = [];
var len__17390__auto___61864 = arguments.length;
var i__17391__auto___61865 = (0);
while(true){
if((i__17391__auto___61865 < len__17390__auto___61864)){
args61861.push((arguments[i__17391__auto___61865]));

var G__61866 = (i__17391__auto___61865 + (1));
i__17391__auto___61865 = G__61866;
continue;
} else {
}
break;
}

var G__61863 = args61861.length;
switch (G__61863) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61861.length)].join('')));

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
return (function (state_62033){
var state_val_62034 = (state_62033[(1)]);
if((state_val_62034 === (7))){
var inst_62029 = (state_62033[(2)]);
var state_62033__$1 = state_62033;
var statearr_62035_62076 = state_62033__$1;
(statearr_62035_62076[(2)] = inst_62029);

(statearr_62035_62076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (20))){
var inst_61999 = (state_62033[(7)]);
var inst_62010 = (state_62033[(2)]);
var inst_62011 = cljs.core.next.call(null,inst_61999);
var inst_61985 = inst_62011;
var inst_61986 = null;
var inst_61987 = (0);
var inst_61988 = (0);
var state_62033__$1 = (function (){var statearr_62036 = state_62033;
(statearr_62036[(8)] = inst_62010);

(statearr_62036[(9)] = inst_61987);

(statearr_62036[(10)] = inst_61985);

(statearr_62036[(11)] = inst_61986);

(statearr_62036[(12)] = inst_61988);

return statearr_62036;
})();
var statearr_62037_62077 = state_62033__$1;
(statearr_62037_62077[(2)] = null);

(statearr_62037_62077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (1))){
var state_62033__$1 = state_62033;
var statearr_62038_62078 = state_62033__$1;
(statearr_62038_62078[(2)] = null);

(statearr_62038_62078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (4))){
var inst_61974 = (state_62033[(13)]);
var inst_61974__$1 = (state_62033[(2)]);
var inst_61975 = (inst_61974__$1 == null);
var state_62033__$1 = (function (){var statearr_62039 = state_62033;
(statearr_62039[(13)] = inst_61974__$1);

return statearr_62039;
})();
if(cljs.core.truth_(inst_61975)){
var statearr_62040_62079 = state_62033__$1;
(statearr_62040_62079[(1)] = (5));

} else {
var statearr_62041_62080 = state_62033__$1;
(statearr_62041_62080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (15))){
var state_62033__$1 = state_62033;
var statearr_62045_62081 = state_62033__$1;
(statearr_62045_62081[(2)] = null);

(statearr_62045_62081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (21))){
var state_62033__$1 = state_62033;
var statearr_62046_62082 = state_62033__$1;
(statearr_62046_62082[(2)] = null);

(statearr_62046_62082[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (13))){
var inst_61987 = (state_62033[(9)]);
var inst_61985 = (state_62033[(10)]);
var inst_61986 = (state_62033[(11)]);
var inst_61988 = (state_62033[(12)]);
var inst_61995 = (state_62033[(2)]);
var inst_61996 = (inst_61988 + (1));
var tmp62042 = inst_61987;
var tmp62043 = inst_61985;
var tmp62044 = inst_61986;
var inst_61985__$1 = tmp62043;
var inst_61986__$1 = tmp62044;
var inst_61987__$1 = tmp62042;
var inst_61988__$1 = inst_61996;
var state_62033__$1 = (function (){var statearr_62047 = state_62033;
(statearr_62047[(9)] = inst_61987__$1);

(statearr_62047[(14)] = inst_61995);

(statearr_62047[(10)] = inst_61985__$1);

(statearr_62047[(11)] = inst_61986__$1);

(statearr_62047[(12)] = inst_61988__$1);

return statearr_62047;
})();
var statearr_62048_62083 = state_62033__$1;
(statearr_62048_62083[(2)] = null);

(statearr_62048_62083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (22))){
var state_62033__$1 = state_62033;
var statearr_62049_62084 = state_62033__$1;
(statearr_62049_62084[(2)] = null);

(statearr_62049_62084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (6))){
var inst_61974 = (state_62033[(13)]);
var inst_61983 = f.call(null,inst_61974);
var inst_61984 = cljs.core.seq.call(null,inst_61983);
var inst_61985 = inst_61984;
var inst_61986 = null;
var inst_61987 = (0);
var inst_61988 = (0);
var state_62033__$1 = (function (){var statearr_62050 = state_62033;
(statearr_62050[(9)] = inst_61987);

(statearr_62050[(10)] = inst_61985);

(statearr_62050[(11)] = inst_61986);

(statearr_62050[(12)] = inst_61988);

return statearr_62050;
})();
var statearr_62051_62085 = state_62033__$1;
(statearr_62051_62085[(2)] = null);

(statearr_62051_62085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (17))){
var inst_61999 = (state_62033[(7)]);
var inst_62003 = cljs.core.chunk_first.call(null,inst_61999);
var inst_62004 = cljs.core.chunk_rest.call(null,inst_61999);
var inst_62005 = cljs.core.count.call(null,inst_62003);
var inst_61985 = inst_62004;
var inst_61986 = inst_62003;
var inst_61987 = inst_62005;
var inst_61988 = (0);
var state_62033__$1 = (function (){var statearr_62052 = state_62033;
(statearr_62052[(9)] = inst_61987);

(statearr_62052[(10)] = inst_61985);

(statearr_62052[(11)] = inst_61986);

(statearr_62052[(12)] = inst_61988);

return statearr_62052;
})();
var statearr_62053_62086 = state_62033__$1;
(statearr_62053_62086[(2)] = null);

(statearr_62053_62086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (3))){
var inst_62031 = (state_62033[(2)]);
var state_62033__$1 = state_62033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62033__$1,inst_62031);
} else {
if((state_val_62034 === (12))){
var inst_62019 = (state_62033[(2)]);
var state_62033__$1 = state_62033;
var statearr_62054_62087 = state_62033__$1;
(statearr_62054_62087[(2)] = inst_62019);

(statearr_62054_62087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (2))){
var state_62033__$1 = state_62033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62033__$1,(4),in$);
} else {
if((state_val_62034 === (23))){
var inst_62027 = (state_62033[(2)]);
var state_62033__$1 = state_62033;
var statearr_62055_62088 = state_62033__$1;
(statearr_62055_62088[(2)] = inst_62027);

(statearr_62055_62088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (19))){
var inst_62014 = (state_62033[(2)]);
var state_62033__$1 = state_62033;
var statearr_62056_62089 = state_62033__$1;
(statearr_62056_62089[(2)] = inst_62014);

(statearr_62056_62089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (11))){
var inst_61999 = (state_62033[(7)]);
var inst_61985 = (state_62033[(10)]);
var inst_61999__$1 = cljs.core.seq.call(null,inst_61985);
var state_62033__$1 = (function (){var statearr_62057 = state_62033;
(statearr_62057[(7)] = inst_61999__$1);

return statearr_62057;
})();
if(inst_61999__$1){
var statearr_62058_62090 = state_62033__$1;
(statearr_62058_62090[(1)] = (14));

} else {
var statearr_62059_62091 = state_62033__$1;
(statearr_62059_62091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (9))){
var inst_62021 = (state_62033[(2)]);
var inst_62022 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_62033__$1 = (function (){var statearr_62060 = state_62033;
(statearr_62060[(15)] = inst_62021);

return statearr_62060;
})();
if(cljs.core.truth_(inst_62022)){
var statearr_62061_62092 = state_62033__$1;
(statearr_62061_62092[(1)] = (21));

} else {
var statearr_62062_62093 = state_62033__$1;
(statearr_62062_62093[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (5))){
var inst_61977 = cljs.core.async.close_BANG_.call(null,out);
var state_62033__$1 = state_62033;
var statearr_62063_62094 = state_62033__$1;
(statearr_62063_62094[(2)] = inst_61977);

(statearr_62063_62094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (14))){
var inst_61999 = (state_62033[(7)]);
var inst_62001 = cljs.core.chunked_seq_QMARK_.call(null,inst_61999);
var state_62033__$1 = state_62033;
if(inst_62001){
var statearr_62064_62095 = state_62033__$1;
(statearr_62064_62095[(1)] = (17));

} else {
var statearr_62065_62096 = state_62033__$1;
(statearr_62065_62096[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (16))){
var inst_62017 = (state_62033[(2)]);
var state_62033__$1 = state_62033;
var statearr_62066_62097 = state_62033__$1;
(statearr_62066_62097[(2)] = inst_62017);

(statearr_62066_62097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62034 === (10))){
var inst_61986 = (state_62033[(11)]);
var inst_61988 = (state_62033[(12)]);
var inst_61993 = cljs.core._nth.call(null,inst_61986,inst_61988);
var state_62033__$1 = state_62033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62033__$1,(13),out,inst_61993);
} else {
if((state_val_62034 === (18))){
var inst_61999 = (state_62033[(7)]);
var inst_62008 = cljs.core.first.call(null,inst_61999);
var state_62033__$1 = state_62033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62033__$1,(20),out,inst_62008);
} else {
if((state_val_62034 === (8))){
var inst_61987 = (state_62033[(9)]);
var inst_61988 = (state_62033[(12)]);
var inst_61990 = (inst_61988 < inst_61987);
var inst_61991 = inst_61990;
var state_62033__$1 = state_62033;
if(cljs.core.truth_(inst_61991)){
var statearr_62067_62098 = state_62033__$1;
(statearr_62067_62098[(1)] = (10));

} else {
var statearr_62068_62099 = state_62033__$1;
(statearr_62068_62099[(1)] = (11));

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
var statearr_62072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62072[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__);

(statearr_62072[(1)] = (1));

return statearr_62072;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____1 = (function (state_62033){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_62033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e62073){if((e62073 instanceof Object)){
var ex__20103__auto__ = e62073;
var statearr_62074_62100 = state_62033;
(statearr_62074_62100[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62101 = state_62033;
state_62033 = G__62101;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__ = function(state_62033){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____1.call(this,state_62033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20100__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_62075 = f__20165__auto__.call(null);
(statearr_62075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_62075;
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
var args62102 = [];
var len__17390__auto___62105 = arguments.length;
var i__17391__auto___62106 = (0);
while(true){
if((i__17391__auto___62106 < len__17390__auto___62105)){
args62102.push((arguments[i__17391__auto___62106]));

var G__62107 = (i__17391__auto___62106 + (1));
i__17391__auto___62106 = G__62107;
continue;
} else {
}
break;
}

var G__62104 = args62102.length;
switch (G__62104) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62102.length)].join('')));

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
var args62109 = [];
var len__17390__auto___62112 = arguments.length;
var i__17391__auto___62113 = (0);
while(true){
if((i__17391__auto___62113 < len__17390__auto___62112)){
args62109.push((arguments[i__17391__auto___62113]));

var G__62114 = (i__17391__auto___62113 + (1));
i__17391__auto___62113 = G__62114;
continue;
} else {
}
break;
}

var G__62111 = args62109.length;
switch (G__62111) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62109.length)].join('')));

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
var args62116 = [];
var len__17390__auto___62167 = arguments.length;
var i__17391__auto___62168 = (0);
while(true){
if((i__17391__auto___62168 < len__17390__auto___62167)){
args62116.push((arguments[i__17391__auto___62168]));

var G__62169 = (i__17391__auto___62168 + (1));
i__17391__auto___62168 = G__62169;
continue;
} else {
}
break;
}

var G__62118 = args62116.length;
switch (G__62118) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62116.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___62171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___62171,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___62171,out){
return (function (state_62142){
var state_val_62143 = (state_62142[(1)]);
if((state_val_62143 === (7))){
var inst_62137 = (state_62142[(2)]);
var state_62142__$1 = state_62142;
var statearr_62144_62172 = state_62142__$1;
(statearr_62144_62172[(2)] = inst_62137);

(statearr_62144_62172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62143 === (1))){
var inst_62119 = null;
var state_62142__$1 = (function (){var statearr_62145 = state_62142;
(statearr_62145[(7)] = inst_62119);

return statearr_62145;
})();
var statearr_62146_62173 = state_62142__$1;
(statearr_62146_62173[(2)] = null);

(statearr_62146_62173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62143 === (4))){
var inst_62122 = (state_62142[(8)]);
var inst_62122__$1 = (state_62142[(2)]);
var inst_62123 = (inst_62122__$1 == null);
var inst_62124 = cljs.core.not.call(null,inst_62123);
var state_62142__$1 = (function (){var statearr_62147 = state_62142;
(statearr_62147[(8)] = inst_62122__$1);

return statearr_62147;
})();
if(inst_62124){
var statearr_62148_62174 = state_62142__$1;
(statearr_62148_62174[(1)] = (5));

} else {
var statearr_62149_62175 = state_62142__$1;
(statearr_62149_62175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62143 === (6))){
var state_62142__$1 = state_62142;
var statearr_62150_62176 = state_62142__$1;
(statearr_62150_62176[(2)] = null);

(statearr_62150_62176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62143 === (3))){
var inst_62139 = (state_62142[(2)]);
var inst_62140 = cljs.core.async.close_BANG_.call(null,out);
var state_62142__$1 = (function (){var statearr_62151 = state_62142;
(statearr_62151[(9)] = inst_62139);

return statearr_62151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62142__$1,inst_62140);
} else {
if((state_val_62143 === (2))){
var state_62142__$1 = state_62142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62142__$1,(4),ch);
} else {
if((state_val_62143 === (11))){
var inst_62122 = (state_62142[(8)]);
var inst_62131 = (state_62142[(2)]);
var inst_62119 = inst_62122;
var state_62142__$1 = (function (){var statearr_62152 = state_62142;
(statearr_62152[(10)] = inst_62131);

(statearr_62152[(7)] = inst_62119);

return statearr_62152;
})();
var statearr_62153_62177 = state_62142__$1;
(statearr_62153_62177[(2)] = null);

(statearr_62153_62177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62143 === (9))){
var inst_62122 = (state_62142[(8)]);
var state_62142__$1 = state_62142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62142__$1,(11),out,inst_62122);
} else {
if((state_val_62143 === (5))){
var inst_62122 = (state_62142[(8)]);
var inst_62119 = (state_62142[(7)]);
var inst_62126 = cljs.core._EQ_.call(null,inst_62122,inst_62119);
var state_62142__$1 = state_62142;
if(inst_62126){
var statearr_62155_62178 = state_62142__$1;
(statearr_62155_62178[(1)] = (8));

} else {
var statearr_62156_62179 = state_62142__$1;
(statearr_62156_62179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62143 === (10))){
var inst_62134 = (state_62142[(2)]);
var state_62142__$1 = state_62142;
var statearr_62157_62180 = state_62142__$1;
(statearr_62157_62180[(2)] = inst_62134);

(statearr_62157_62180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62143 === (8))){
var inst_62119 = (state_62142[(7)]);
var tmp62154 = inst_62119;
var inst_62119__$1 = tmp62154;
var state_62142__$1 = (function (){var statearr_62158 = state_62142;
(statearr_62158[(7)] = inst_62119__$1);

return statearr_62158;
})();
var statearr_62159_62181 = state_62142__$1;
(statearr_62159_62181[(2)] = null);

(statearr_62159_62181[(1)] = (2));


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
});})(c__20164__auto___62171,out))
;
return ((function (switch__20099__auto__,c__20164__auto___62171,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_62163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62163[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_62163[(1)] = (1));

return statearr_62163;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_62142){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_62142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e62164){if((e62164 instanceof Object)){
var ex__20103__auto__ = e62164;
var statearr_62165_62182 = state_62142;
(statearr_62165_62182[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62183 = state_62142;
state_62142 = G__62183;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_62142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_62142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___62171,out))
})();
var state__20166__auto__ = (function (){var statearr_62166 = f__20165__auto__.call(null);
(statearr_62166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___62171);

return statearr_62166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___62171,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args62184 = [];
var len__17390__auto___62254 = arguments.length;
var i__17391__auto___62255 = (0);
while(true){
if((i__17391__auto___62255 < len__17390__auto___62254)){
args62184.push((arguments[i__17391__auto___62255]));

var G__62256 = (i__17391__auto___62255 + (1));
i__17391__auto___62255 = G__62256;
continue;
} else {
}
break;
}

var G__62186 = args62184.length;
switch (G__62186) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62184.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___62258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___62258,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___62258,out){
return (function (state_62224){
var state_val_62225 = (state_62224[(1)]);
if((state_val_62225 === (7))){
var inst_62220 = (state_62224[(2)]);
var state_62224__$1 = state_62224;
var statearr_62226_62259 = state_62224__$1;
(statearr_62226_62259[(2)] = inst_62220);

(statearr_62226_62259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (1))){
var inst_62187 = (new Array(n));
var inst_62188 = inst_62187;
var inst_62189 = (0);
var state_62224__$1 = (function (){var statearr_62227 = state_62224;
(statearr_62227[(7)] = inst_62188);

(statearr_62227[(8)] = inst_62189);

return statearr_62227;
})();
var statearr_62228_62260 = state_62224__$1;
(statearr_62228_62260[(2)] = null);

(statearr_62228_62260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (4))){
var inst_62192 = (state_62224[(9)]);
var inst_62192__$1 = (state_62224[(2)]);
var inst_62193 = (inst_62192__$1 == null);
var inst_62194 = cljs.core.not.call(null,inst_62193);
var state_62224__$1 = (function (){var statearr_62229 = state_62224;
(statearr_62229[(9)] = inst_62192__$1);

return statearr_62229;
})();
if(inst_62194){
var statearr_62230_62261 = state_62224__$1;
(statearr_62230_62261[(1)] = (5));

} else {
var statearr_62231_62262 = state_62224__$1;
(statearr_62231_62262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (15))){
var inst_62214 = (state_62224[(2)]);
var state_62224__$1 = state_62224;
var statearr_62232_62263 = state_62224__$1;
(statearr_62232_62263[(2)] = inst_62214);

(statearr_62232_62263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (13))){
var state_62224__$1 = state_62224;
var statearr_62233_62264 = state_62224__$1;
(statearr_62233_62264[(2)] = null);

(statearr_62233_62264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (6))){
var inst_62189 = (state_62224[(8)]);
var inst_62210 = (inst_62189 > (0));
var state_62224__$1 = state_62224;
if(cljs.core.truth_(inst_62210)){
var statearr_62234_62265 = state_62224__$1;
(statearr_62234_62265[(1)] = (12));

} else {
var statearr_62235_62266 = state_62224__$1;
(statearr_62235_62266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (3))){
var inst_62222 = (state_62224[(2)]);
var state_62224__$1 = state_62224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62224__$1,inst_62222);
} else {
if((state_val_62225 === (12))){
var inst_62188 = (state_62224[(7)]);
var inst_62212 = cljs.core.vec.call(null,inst_62188);
var state_62224__$1 = state_62224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62224__$1,(15),out,inst_62212);
} else {
if((state_val_62225 === (2))){
var state_62224__$1 = state_62224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62224__$1,(4),ch);
} else {
if((state_val_62225 === (11))){
var inst_62204 = (state_62224[(2)]);
var inst_62205 = (new Array(n));
var inst_62188 = inst_62205;
var inst_62189 = (0);
var state_62224__$1 = (function (){var statearr_62236 = state_62224;
(statearr_62236[(7)] = inst_62188);

(statearr_62236[(10)] = inst_62204);

(statearr_62236[(8)] = inst_62189);

return statearr_62236;
})();
var statearr_62237_62267 = state_62224__$1;
(statearr_62237_62267[(2)] = null);

(statearr_62237_62267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (9))){
var inst_62188 = (state_62224[(7)]);
var inst_62202 = cljs.core.vec.call(null,inst_62188);
var state_62224__$1 = state_62224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62224__$1,(11),out,inst_62202);
} else {
if((state_val_62225 === (5))){
var inst_62188 = (state_62224[(7)]);
var inst_62197 = (state_62224[(11)]);
var inst_62192 = (state_62224[(9)]);
var inst_62189 = (state_62224[(8)]);
var inst_62196 = (inst_62188[inst_62189] = inst_62192);
var inst_62197__$1 = (inst_62189 + (1));
var inst_62198 = (inst_62197__$1 < n);
var state_62224__$1 = (function (){var statearr_62238 = state_62224;
(statearr_62238[(11)] = inst_62197__$1);

(statearr_62238[(12)] = inst_62196);

return statearr_62238;
})();
if(cljs.core.truth_(inst_62198)){
var statearr_62239_62268 = state_62224__$1;
(statearr_62239_62268[(1)] = (8));

} else {
var statearr_62240_62269 = state_62224__$1;
(statearr_62240_62269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (14))){
var inst_62217 = (state_62224[(2)]);
var inst_62218 = cljs.core.async.close_BANG_.call(null,out);
var state_62224__$1 = (function (){var statearr_62242 = state_62224;
(statearr_62242[(13)] = inst_62217);

return statearr_62242;
})();
var statearr_62243_62270 = state_62224__$1;
(statearr_62243_62270[(2)] = inst_62218);

(statearr_62243_62270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (10))){
var inst_62208 = (state_62224[(2)]);
var state_62224__$1 = state_62224;
var statearr_62244_62271 = state_62224__$1;
(statearr_62244_62271[(2)] = inst_62208);

(statearr_62244_62271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62225 === (8))){
var inst_62188 = (state_62224[(7)]);
var inst_62197 = (state_62224[(11)]);
var tmp62241 = inst_62188;
var inst_62188__$1 = tmp62241;
var inst_62189 = inst_62197;
var state_62224__$1 = (function (){var statearr_62245 = state_62224;
(statearr_62245[(7)] = inst_62188__$1);

(statearr_62245[(8)] = inst_62189);

return statearr_62245;
})();
var statearr_62246_62272 = state_62224__$1;
(statearr_62246_62272[(2)] = null);

(statearr_62246_62272[(1)] = (2));


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
});})(c__20164__auto___62258,out))
;
return ((function (switch__20099__auto__,c__20164__auto___62258,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_62250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62250[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_62250[(1)] = (1));

return statearr_62250;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_62224){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_62224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e62251){if((e62251 instanceof Object)){
var ex__20103__auto__ = e62251;
var statearr_62252_62273 = state_62224;
(statearr_62252_62273[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62274 = state_62224;
state_62224 = G__62274;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_62224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_62224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___62258,out))
})();
var state__20166__auto__ = (function (){var statearr_62253 = f__20165__auto__.call(null);
(statearr_62253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___62258);

return statearr_62253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___62258,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args62275 = [];
var len__17390__auto___62349 = arguments.length;
var i__17391__auto___62350 = (0);
while(true){
if((i__17391__auto___62350 < len__17390__auto___62349)){
args62275.push((arguments[i__17391__auto___62350]));

var G__62351 = (i__17391__auto___62350 + (1));
i__17391__auto___62350 = G__62351;
continue;
} else {
}
break;
}

var G__62277 = args62275.length;
switch (G__62277) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62275.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20164__auto___62353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___62353,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___62353,out){
return (function (state_62319){
var state_val_62320 = (state_62319[(1)]);
if((state_val_62320 === (7))){
var inst_62315 = (state_62319[(2)]);
var state_62319__$1 = state_62319;
var statearr_62321_62354 = state_62319__$1;
(statearr_62321_62354[(2)] = inst_62315);

(statearr_62321_62354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (1))){
var inst_62278 = [];
var inst_62279 = inst_62278;
var inst_62280 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62319__$1 = (function (){var statearr_62322 = state_62319;
(statearr_62322[(7)] = inst_62279);

(statearr_62322[(8)] = inst_62280);

return statearr_62322;
})();
var statearr_62323_62355 = state_62319__$1;
(statearr_62323_62355[(2)] = null);

(statearr_62323_62355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (4))){
var inst_62283 = (state_62319[(9)]);
var inst_62283__$1 = (state_62319[(2)]);
var inst_62284 = (inst_62283__$1 == null);
var inst_62285 = cljs.core.not.call(null,inst_62284);
var state_62319__$1 = (function (){var statearr_62324 = state_62319;
(statearr_62324[(9)] = inst_62283__$1);

return statearr_62324;
})();
if(inst_62285){
var statearr_62325_62356 = state_62319__$1;
(statearr_62325_62356[(1)] = (5));

} else {
var statearr_62326_62357 = state_62319__$1;
(statearr_62326_62357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (15))){
var inst_62309 = (state_62319[(2)]);
var state_62319__$1 = state_62319;
var statearr_62327_62358 = state_62319__$1;
(statearr_62327_62358[(2)] = inst_62309);

(statearr_62327_62358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (13))){
var state_62319__$1 = state_62319;
var statearr_62328_62359 = state_62319__$1;
(statearr_62328_62359[(2)] = null);

(statearr_62328_62359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (6))){
var inst_62279 = (state_62319[(7)]);
var inst_62304 = inst_62279.length;
var inst_62305 = (inst_62304 > (0));
var state_62319__$1 = state_62319;
if(cljs.core.truth_(inst_62305)){
var statearr_62329_62360 = state_62319__$1;
(statearr_62329_62360[(1)] = (12));

} else {
var statearr_62330_62361 = state_62319__$1;
(statearr_62330_62361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (3))){
var inst_62317 = (state_62319[(2)]);
var state_62319__$1 = state_62319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62319__$1,inst_62317);
} else {
if((state_val_62320 === (12))){
var inst_62279 = (state_62319[(7)]);
var inst_62307 = cljs.core.vec.call(null,inst_62279);
var state_62319__$1 = state_62319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62319__$1,(15),out,inst_62307);
} else {
if((state_val_62320 === (2))){
var state_62319__$1 = state_62319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62319__$1,(4),ch);
} else {
if((state_val_62320 === (11))){
var inst_62283 = (state_62319[(9)]);
var inst_62287 = (state_62319[(10)]);
var inst_62297 = (state_62319[(2)]);
var inst_62298 = [];
var inst_62299 = inst_62298.push(inst_62283);
var inst_62279 = inst_62298;
var inst_62280 = inst_62287;
var state_62319__$1 = (function (){var statearr_62331 = state_62319;
(statearr_62331[(7)] = inst_62279);

(statearr_62331[(11)] = inst_62299);

(statearr_62331[(8)] = inst_62280);

(statearr_62331[(12)] = inst_62297);

return statearr_62331;
})();
var statearr_62332_62362 = state_62319__$1;
(statearr_62332_62362[(2)] = null);

(statearr_62332_62362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (9))){
var inst_62279 = (state_62319[(7)]);
var inst_62295 = cljs.core.vec.call(null,inst_62279);
var state_62319__$1 = state_62319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62319__$1,(11),out,inst_62295);
} else {
if((state_val_62320 === (5))){
var inst_62283 = (state_62319[(9)]);
var inst_62280 = (state_62319[(8)]);
var inst_62287 = (state_62319[(10)]);
var inst_62287__$1 = f.call(null,inst_62283);
var inst_62288 = cljs.core._EQ_.call(null,inst_62287__$1,inst_62280);
var inst_62289 = cljs.core.keyword_identical_QMARK_.call(null,inst_62280,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62290 = (inst_62288) || (inst_62289);
var state_62319__$1 = (function (){var statearr_62333 = state_62319;
(statearr_62333[(10)] = inst_62287__$1);

return statearr_62333;
})();
if(cljs.core.truth_(inst_62290)){
var statearr_62334_62363 = state_62319__$1;
(statearr_62334_62363[(1)] = (8));

} else {
var statearr_62335_62364 = state_62319__$1;
(statearr_62335_62364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (14))){
var inst_62312 = (state_62319[(2)]);
var inst_62313 = cljs.core.async.close_BANG_.call(null,out);
var state_62319__$1 = (function (){var statearr_62337 = state_62319;
(statearr_62337[(13)] = inst_62312);

return statearr_62337;
})();
var statearr_62338_62365 = state_62319__$1;
(statearr_62338_62365[(2)] = inst_62313);

(statearr_62338_62365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (10))){
var inst_62302 = (state_62319[(2)]);
var state_62319__$1 = state_62319;
var statearr_62339_62366 = state_62319__$1;
(statearr_62339_62366[(2)] = inst_62302);

(statearr_62339_62366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62320 === (8))){
var inst_62279 = (state_62319[(7)]);
var inst_62283 = (state_62319[(9)]);
var inst_62287 = (state_62319[(10)]);
var inst_62292 = inst_62279.push(inst_62283);
var tmp62336 = inst_62279;
var inst_62279__$1 = tmp62336;
var inst_62280 = inst_62287;
var state_62319__$1 = (function (){var statearr_62340 = state_62319;
(statearr_62340[(14)] = inst_62292);

(statearr_62340[(7)] = inst_62279__$1);

(statearr_62340[(8)] = inst_62280);

return statearr_62340;
})();
var statearr_62341_62367 = state_62319__$1;
(statearr_62341_62367[(2)] = null);

(statearr_62341_62367[(1)] = (2));


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
});})(c__20164__auto___62353,out))
;
return ((function (switch__20099__auto__,c__20164__auto___62353,out){
return (function() {
var cljs$core$async$state_machine__20100__auto__ = null;
var cljs$core$async$state_machine__20100__auto____0 = (function (){
var statearr_62345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62345[(0)] = cljs$core$async$state_machine__20100__auto__);

(statearr_62345[(1)] = (1));

return statearr_62345;
});
var cljs$core$async$state_machine__20100__auto____1 = (function (state_62319){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_62319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e62346){if((e62346 instanceof Object)){
var ex__20103__auto__ = e62346;
var statearr_62347_62368 = state_62319;
(statearr_62347_62368[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62369 = state_62319;
state_62319 = G__62369;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
cljs$core$async$state_machine__20100__auto__ = function(state_62319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20100__auto____1.call(this,state_62319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20100__auto____0;
cljs$core$async$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20100__auto____1;
return cljs$core$async$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___62353,out))
})();
var state__20166__auto__ = (function (){var statearr_62348 = f__20165__auto__.call(null);
(statearr_62348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___62353);

return statearr_62348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___62353,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map