// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__63970 = cljs.core._EQ_;
var expr__63971 = (function (){var or__16332__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__63970.call(null,"true",expr__63971))){
return true;
} else {
if(cljs.core.truth_(pred__63970.call(null,"false",expr__63971))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__63971)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63973__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__63973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63974__i = 0, G__63974__a = new Array(arguments.length -  0);
while (G__63974__i < G__63974__a.length) {G__63974__a[G__63974__i] = arguments[G__63974__i + 0]; ++G__63974__i;}
  args = new cljs.core.IndexedSeq(G__63974__a,0);
} 
return G__63973__delegate.call(this,args);};
G__63973.cljs$lang$maxFixedArity = 0;
G__63973.cljs$lang$applyTo = (function (arglist__63975){
var args = cljs.core.seq(arglist__63975);
return G__63973__delegate(args);
});
G__63973.cljs$core$IFn$_invoke$arity$variadic = G__63973__delegate;
return G__63973;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__63976){
var map__63979 = p__63976;
var map__63979__$1 = ((((!((map__63979 == null)))?((((map__63979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63979):map__63979);
var message = cljs.core.get.call(null,map__63979__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__63979__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16332__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16320__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16320__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16320__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20164__auto___64141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___64141,ch){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___64141,ch){
return (function (state_64110){
var state_val_64111 = (state_64110[(1)]);
if((state_val_64111 === (7))){
var inst_64106 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
var statearr_64112_64142 = state_64110__$1;
(statearr_64112_64142[(2)] = inst_64106);

(statearr_64112_64142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (1))){
var state_64110__$1 = state_64110;
var statearr_64113_64143 = state_64110__$1;
(statearr_64113_64143[(2)] = null);

(statearr_64113_64143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (4))){
var inst_64063 = (state_64110[(7)]);
var inst_64063__$1 = (state_64110[(2)]);
var state_64110__$1 = (function (){var statearr_64114 = state_64110;
(statearr_64114[(7)] = inst_64063__$1);

return statearr_64114;
})();
if(cljs.core.truth_(inst_64063__$1)){
var statearr_64115_64144 = state_64110__$1;
(statearr_64115_64144[(1)] = (5));

} else {
var statearr_64116_64145 = state_64110__$1;
(statearr_64116_64145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (15))){
var inst_64070 = (state_64110[(8)]);
var inst_64085 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_64070);
var inst_64086 = cljs.core.first.call(null,inst_64085);
var inst_64087 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_64086);
var inst_64088 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_64087)].join('');
var inst_64089 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_64088);
var state_64110__$1 = state_64110;
var statearr_64117_64146 = state_64110__$1;
(statearr_64117_64146[(2)] = inst_64089);

(statearr_64117_64146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (13))){
var inst_64094 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
var statearr_64118_64147 = state_64110__$1;
(statearr_64118_64147[(2)] = inst_64094);

(statearr_64118_64147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (6))){
var state_64110__$1 = state_64110;
var statearr_64119_64148 = state_64110__$1;
(statearr_64119_64148[(2)] = null);

(statearr_64119_64148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (17))){
var inst_64092 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
var statearr_64120_64149 = state_64110__$1;
(statearr_64120_64149[(2)] = inst_64092);

(statearr_64120_64149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (3))){
var inst_64108 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64110__$1,inst_64108);
} else {
if((state_val_64111 === (12))){
var inst_64069 = (state_64110[(9)]);
var inst_64083 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_64069,opts);
var state_64110__$1 = state_64110;
if(cljs.core.truth_(inst_64083)){
var statearr_64121_64150 = state_64110__$1;
(statearr_64121_64150[(1)] = (15));

} else {
var statearr_64122_64151 = state_64110__$1;
(statearr_64122_64151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (2))){
var state_64110__$1 = state_64110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64110__$1,(4),ch);
} else {
if((state_val_64111 === (11))){
var inst_64070 = (state_64110[(8)]);
var inst_64075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64076 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_64070);
var inst_64077 = cljs.core.async.timeout.call(null,(1000));
var inst_64078 = [inst_64076,inst_64077];
var inst_64079 = (new cljs.core.PersistentVector(null,2,(5),inst_64075,inst_64078,null));
var state_64110__$1 = state_64110;
return cljs.core.async.ioc_alts_BANG_.call(null,state_64110__$1,(14),inst_64079);
} else {
if((state_val_64111 === (9))){
var inst_64070 = (state_64110[(8)]);
var inst_64096 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_64097 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_64070);
var inst_64098 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_64097);
var inst_64099 = [cljs.core.str("Not loading: "),cljs.core.str(inst_64098)].join('');
var inst_64100 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_64099);
var state_64110__$1 = (function (){var statearr_64123 = state_64110;
(statearr_64123[(10)] = inst_64096);

return statearr_64123;
})();
var statearr_64124_64152 = state_64110__$1;
(statearr_64124_64152[(2)] = inst_64100);

(statearr_64124_64152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (5))){
var inst_64063 = (state_64110[(7)]);
var inst_64065 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_64066 = (new cljs.core.PersistentArrayMap(null,2,inst_64065,null));
var inst_64067 = (new cljs.core.PersistentHashSet(null,inst_64066,null));
var inst_64068 = figwheel.client.focus_msgs.call(null,inst_64067,inst_64063);
var inst_64069 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_64068);
var inst_64070 = cljs.core.first.call(null,inst_64068);
var inst_64071 = figwheel.client.autoload_QMARK_.call(null);
var state_64110__$1 = (function (){var statearr_64125 = state_64110;
(statearr_64125[(9)] = inst_64069);

(statearr_64125[(8)] = inst_64070);

return statearr_64125;
})();
if(cljs.core.truth_(inst_64071)){
var statearr_64126_64153 = state_64110__$1;
(statearr_64126_64153[(1)] = (8));

} else {
var statearr_64127_64154 = state_64110__$1;
(statearr_64127_64154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (14))){
var inst_64081 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
var statearr_64128_64155 = state_64110__$1;
(statearr_64128_64155[(2)] = inst_64081);

(statearr_64128_64155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (16))){
var state_64110__$1 = state_64110;
var statearr_64129_64156 = state_64110__$1;
(statearr_64129_64156[(2)] = null);

(statearr_64129_64156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (10))){
var inst_64102 = (state_64110[(2)]);
var state_64110__$1 = (function (){var statearr_64130 = state_64110;
(statearr_64130[(11)] = inst_64102);

return statearr_64130;
})();
var statearr_64131_64157 = state_64110__$1;
(statearr_64131_64157[(2)] = null);

(statearr_64131_64157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (8))){
var inst_64069 = (state_64110[(9)]);
var inst_64073 = figwheel.client.reload_file_state_QMARK_.call(null,inst_64069,opts);
var state_64110__$1 = state_64110;
if(cljs.core.truth_(inst_64073)){
var statearr_64132_64158 = state_64110__$1;
(statearr_64132_64158[(1)] = (11));

} else {
var statearr_64133_64159 = state_64110__$1;
(statearr_64133_64159[(1)] = (12));

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
});})(c__20164__auto___64141,ch))
;
return ((function (switch__20099__auto__,c__20164__auto___64141,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____0 = (function (){
var statearr_64137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64137[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__);

(statearr_64137[(1)] = (1));

return statearr_64137;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____1 = (function (state_64110){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_64110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e64138){if((e64138 instanceof Object)){
var ex__20103__auto__ = e64138;
var statearr_64139_64160 = state_64110;
(statearr_64139_64160[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64161 = state_64110;
state_64110 = G__64161;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__ = function(state_64110){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____1.call(this,state_64110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___64141,ch))
})();
var state__20166__auto__ = (function (){var statearr_64140 = f__20165__auto__.call(null);
(statearr_64140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___64141);

return statearr_64140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___64141,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__64162_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__64162_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_64169 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_64169){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_64167 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_64168 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_64167,_STAR_print_newline_STAR_64168,base_path_64169){
return (function() { 
var G__64170__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__64170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64171__i = 0, G__64171__a = new Array(arguments.length -  0);
while (G__64171__i < G__64171__a.length) {G__64171__a[G__64171__i] = arguments[G__64171__i + 0]; ++G__64171__i;}
  args = new cljs.core.IndexedSeq(G__64171__a,0);
} 
return G__64170__delegate.call(this,args);};
G__64170.cljs$lang$maxFixedArity = 0;
G__64170.cljs$lang$applyTo = (function (arglist__64172){
var args = cljs.core.seq(arglist__64172);
return G__64170__delegate(args);
});
G__64170.cljs$core$IFn$_invoke$arity$variadic = G__64170__delegate;
return G__64170;
})()
;})(_STAR_print_fn_STAR_64167,_STAR_print_newline_STAR_64168,base_path_64169))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_64168;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_64167;
}}catch (e64166){if((e64166 instanceof Error)){
var e = e64166;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_64169], null));
} else {
var e = e64166;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_64169))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__64173){
var map__64180 = p__64173;
var map__64180__$1 = ((((!((map__64180 == null)))?((((map__64180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64180):map__64180);
var opts = map__64180__$1;
var build_id = cljs.core.get.call(null,map__64180__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__64180,map__64180__$1,opts,build_id){
return (function (p__64182){
var vec__64183 = p__64182;
var map__64184 = cljs.core.nth.call(null,vec__64183,(0),null);
var map__64184__$1 = ((((!((map__64184 == null)))?((((map__64184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64184):map__64184);
var msg = map__64184__$1;
var msg_name = cljs.core.get.call(null,map__64184__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__64183,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__64183,map__64184,map__64184__$1,msg,msg_name,_,map__64180,map__64180__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__64183,map__64184,map__64184__$1,msg,msg_name,_,map__64180,map__64180__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__64180,map__64180__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__64190){
var vec__64191 = p__64190;
var map__64192 = cljs.core.nth.call(null,vec__64191,(0),null);
var map__64192__$1 = ((((!((map__64192 == null)))?((((map__64192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64192):map__64192);
var msg = map__64192__$1;
var msg_name = cljs.core.get.call(null,map__64192__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__64191,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__64194){
var map__64204 = p__64194;
var map__64204__$1 = ((((!((map__64204 == null)))?((((map__64204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64204):map__64204);
var on_compile_warning = cljs.core.get.call(null,map__64204__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__64204__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__64204,map__64204__$1,on_compile_warning,on_compile_fail){
return (function (p__64206){
var vec__64207 = p__64206;
var map__64208 = cljs.core.nth.call(null,vec__64207,(0),null);
var map__64208__$1 = ((((!((map__64208 == null)))?((((map__64208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64208):map__64208);
var msg = map__64208__$1;
var msg_name = cljs.core.get.call(null,map__64208__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__64207,(1));
var pred__64210 = cljs.core._EQ_;
var expr__64211 = msg_name;
if(cljs.core.truth_(pred__64210.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__64211))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__64210.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__64211))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__64204,map__64204__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__,msg_hist,msg_names,msg){
return (function (state_64427){
var state_val_64428 = (state_64427[(1)]);
if((state_val_64428 === (7))){
var inst_64351 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
if(cljs.core.truth_(inst_64351)){
var statearr_64429_64475 = state_64427__$1;
(statearr_64429_64475[(1)] = (8));

} else {
var statearr_64430_64476 = state_64427__$1;
(statearr_64430_64476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (20))){
var inst_64421 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64431_64477 = state_64427__$1;
(statearr_64431_64477[(2)] = inst_64421);

(statearr_64431_64477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (27))){
var inst_64417 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64432_64478 = state_64427__$1;
(statearr_64432_64478[(2)] = inst_64417);

(statearr_64432_64478[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (1))){
var inst_64344 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_64427__$1 = state_64427;
if(cljs.core.truth_(inst_64344)){
var statearr_64433_64479 = state_64427__$1;
(statearr_64433_64479[(1)] = (2));

} else {
var statearr_64434_64480 = state_64427__$1;
(statearr_64434_64480[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (24))){
var inst_64419 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64435_64481 = state_64427__$1;
(statearr_64435_64481[(2)] = inst_64419);

(statearr_64435_64481[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (4))){
var inst_64425 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64427__$1,inst_64425);
} else {
if((state_val_64428 === (15))){
var inst_64423 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64436_64482 = state_64427__$1;
(statearr_64436_64482[(2)] = inst_64423);

(statearr_64436_64482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (21))){
var inst_64382 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64437_64483 = state_64427__$1;
(statearr_64437_64483[(2)] = inst_64382);

(statearr_64437_64483[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (31))){
var inst_64406 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_64427__$1 = state_64427;
if(cljs.core.truth_(inst_64406)){
var statearr_64438_64484 = state_64427__$1;
(statearr_64438_64484[(1)] = (34));

} else {
var statearr_64439_64485 = state_64427__$1;
(statearr_64439_64485[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (32))){
var inst_64415 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64440_64486 = state_64427__$1;
(statearr_64440_64486[(2)] = inst_64415);

(statearr_64440_64486[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (33))){
var inst_64404 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64441_64487 = state_64427__$1;
(statearr_64441_64487[(2)] = inst_64404);

(statearr_64441_64487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (13))){
var inst_64365 = figwheel.client.heads_up.clear.call(null);
var state_64427__$1 = state_64427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(16),inst_64365);
} else {
if((state_val_64428 === (22))){
var inst_64386 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64387 = figwheel.client.heads_up.append_message.call(null,inst_64386);
var state_64427__$1 = state_64427;
var statearr_64442_64488 = state_64427__$1;
(statearr_64442_64488[(2)] = inst_64387);

(statearr_64442_64488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (36))){
var inst_64413 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64443_64489 = state_64427__$1;
(statearr_64443_64489[(2)] = inst_64413);

(statearr_64443_64489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (29))){
var inst_64397 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64444_64490 = state_64427__$1;
(statearr_64444_64490[(2)] = inst_64397);

(statearr_64444_64490[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (6))){
var inst_64346 = (state_64427[(7)]);
var state_64427__$1 = state_64427;
var statearr_64445_64491 = state_64427__$1;
(statearr_64445_64491[(2)] = inst_64346);

(statearr_64445_64491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (28))){
var inst_64393 = (state_64427[(2)]);
var inst_64394 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64395 = figwheel.client.heads_up.display_warning.call(null,inst_64394);
var state_64427__$1 = (function (){var statearr_64446 = state_64427;
(statearr_64446[(8)] = inst_64393);

return statearr_64446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(29),inst_64395);
} else {
if((state_val_64428 === (25))){
var inst_64391 = figwheel.client.heads_up.clear.call(null);
var state_64427__$1 = state_64427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(28),inst_64391);
} else {
if((state_val_64428 === (34))){
var inst_64408 = figwheel.client.heads_up.flash_loaded.call(null);
var state_64427__$1 = state_64427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(37),inst_64408);
} else {
if((state_val_64428 === (17))){
var inst_64373 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64447_64492 = state_64427__$1;
(statearr_64447_64492[(2)] = inst_64373);

(statearr_64447_64492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (3))){
var inst_64363 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_64427__$1 = state_64427;
if(cljs.core.truth_(inst_64363)){
var statearr_64448_64493 = state_64427__$1;
(statearr_64448_64493[(1)] = (13));

} else {
var statearr_64449_64494 = state_64427__$1;
(statearr_64449_64494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (12))){
var inst_64359 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64450_64495 = state_64427__$1;
(statearr_64450_64495[(2)] = inst_64359);

(statearr_64450_64495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (2))){
var inst_64346 = (state_64427[(7)]);
var inst_64346__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_64427__$1 = (function (){var statearr_64451 = state_64427;
(statearr_64451[(7)] = inst_64346__$1);

return statearr_64451;
})();
if(cljs.core.truth_(inst_64346__$1)){
var statearr_64452_64496 = state_64427__$1;
(statearr_64452_64496[(1)] = (5));

} else {
var statearr_64453_64497 = state_64427__$1;
(statearr_64453_64497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (23))){
var inst_64389 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_64427__$1 = state_64427;
if(cljs.core.truth_(inst_64389)){
var statearr_64454_64498 = state_64427__$1;
(statearr_64454_64498[(1)] = (25));

} else {
var statearr_64455_64499 = state_64427__$1;
(statearr_64455_64499[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (35))){
var state_64427__$1 = state_64427;
var statearr_64456_64500 = state_64427__$1;
(statearr_64456_64500[(2)] = null);

(statearr_64456_64500[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (19))){
var inst_64384 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_64427__$1 = state_64427;
if(cljs.core.truth_(inst_64384)){
var statearr_64457_64501 = state_64427__$1;
(statearr_64457_64501[(1)] = (22));

} else {
var statearr_64458_64502 = state_64427__$1;
(statearr_64458_64502[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (11))){
var inst_64355 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64459_64503 = state_64427__$1;
(statearr_64459_64503[(2)] = inst_64355);

(statearr_64459_64503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (9))){
var inst_64357 = figwheel.client.heads_up.clear.call(null);
var state_64427__$1 = state_64427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(12),inst_64357);
} else {
if((state_val_64428 === (5))){
var inst_64348 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_64427__$1 = state_64427;
var statearr_64460_64504 = state_64427__$1;
(statearr_64460_64504[(2)] = inst_64348);

(statearr_64460_64504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (14))){
var inst_64375 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_64427__$1 = state_64427;
if(cljs.core.truth_(inst_64375)){
var statearr_64461_64505 = state_64427__$1;
(statearr_64461_64505[(1)] = (18));

} else {
var statearr_64462_64506 = state_64427__$1;
(statearr_64462_64506[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (26))){
var inst_64399 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_64427__$1 = state_64427;
if(cljs.core.truth_(inst_64399)){
var statearr_64463_64507 = state_64427__$1;
(statearr_64463_64507[(1)] = (30));

} else {
var statearr_64464_64508 = state_64427__$1;
(statearr_64464_64508[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (16))){
var inst_64367 = (state_64427[(2)]);
var inst_64368 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64369 = figwheel.client.format_messages.call(null,inst_64368);
var inst_64370 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64371 = figwheel.client.heads_up.display_error.call(null,inst_64369,inst_64370);
var state_64427__$1 = (function (){var statearr_64465 = state_64427;
(statearr_64465[(9)] = inst_64367);

return statearr_64465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(17),inst_64371);
} else {
if((state_val_64428 === (30))){
var inst_64401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64402 = figwheel.client.heads_up.display_warning.call(null,inst_64401);
var state_64427__$1 = state_64427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(33),inst_64402);
} else {
if((state_val_64428 === (10))){
var inst_64361 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64466_64509 = state_64427__$1;
(statearr_64466_64509[(2)] = inst_64361);

(statearr_64466_64509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (18))){
var inst_64377 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64378 = figwheel.client.format_messages.call(null,inst_64377);
var inst_64379 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64380 = figwheel.client.heads_up.display_error.call(null,inst_64378,inst_64379);
var state_64427__$1 = state_64427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(21),inst_64380);
} else {
if((state_val_64428 === (37))){
var inst_64410 = (state_64427[(2)]);
var state_64427__$1 = state_64427;
var statearr_64467_64510 = state_64427__$1;
(statearr_64467_64510[(2)] = inst_64410);

(statearr_64467_64510[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64428 === (8))){
var inst_64353 = figwheel.client.heads_up.flash_loaded.call(null);
var state_64427__$1 = state_64427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64427__$1,(11),inst_64353);
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
});})(c__20164__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20099__auto__,c__20164__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____0 = (function (){
var statearr_64471 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64471[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__);

(statearr_64471[(1)] = (1));

return statearr_64471;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____1 = (function (state_64427){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_64427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e64472){if((e64472 instanceof Object)){
var ex__20103__auto__ = e64472;
var statearr_64473_64511 = state_64427;
(statearr_64473_64511[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64512 = state_64427;
state_64427 = G__64512;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__ = function(state_64427){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____1.call(this,state_64427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__,msg_hist,msg_names,msg))
})();
var state__20166__auto__ = (function (){var statearr_64474 = f__20165__auto__.call(null);
(statearr_64474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_64474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__,msg_hist,msg_names,msg))
);

return c__20164__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20164__auto___64575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___64575,ch){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___64575,ch){
return (function (state_64558){
var state_val_64559 = (state_64558[(1)]);
if((state_val_64559 === (1))){
var state_64558__$1 = state_64558;
var statearr_64560_64576 = state_64558__$1;
(statearr_64560_64576[(2)] = null);

(statearr_64560_64576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64559 === (2))){
var state_64558__$1 = state_64558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64558__$1,(4),ch);
} else {
if((state_val_64559 === (3))){
var inst_64556 = (state_64558[(2)]);
var state_64558__$1 = state_64558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64558__$1,inst_64556);
} else {
if((state_val_64559 === (4))){
var inst_64546 = (state_64558[(7)]);
var inst_64546__$1 = (state_64558[(2)]);
var state_64558__$1 = (function (){var statearr_64561 = state_64558;
(statearr_64561[(7)] = inst_64546__$1);

return statearr_64561;
})();
if(cljs.core.truth_(inst_64546__$1)){
var statearr_64562_64577 = state_64558__$1;
(statearr_64562_64577[(1)] = (5));

} else {
var statearr_64563_64578 = state_64558__$1;
(statearr_64563_64578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64559 === (5))){
var inst_64546 = (state_64558[(7)]);
var inst_64548 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_64546);
var state_64558__$1 = state_64558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64558__$1,(8),inst_64548);
} else {
if((state_val_64559 === (6))){
var state_64558__$1 = state_64558;
var statearr_64564_64579 = state_64558__$1;
(statearr_64564_64579[(2)] = null);

(statearr_64564_64579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64559 === (7))){
var inst_64554 = (state_64558[(2)]);
var state_64558__$1 = state_64558;
var statearr_64565_64580 = state_64558__$1;
(statearr_64565_64580[(2)] = inst_64554);

(statearr_64565_64580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64559 === (8))){
var inst_64550 = (state_64558[(2)]);
var state_64558__$1 = (function (){var statearr_64566 = state_64558;
(statearr_64566[(8)] = inst_64550);

return statearr_64566;
})();
var statearr_64567_64581 = state_64558__$1;
(statearr_64567_64581[(2)] = null);

(statearr_64567_64581[(1)] = (2));


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
});})(c__20164__auto___64575,ch))
;
return ((function (switch__20099__auto__,c__20164__auto___64575,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20100__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20100__auto____0 = (function (){
var statearr_64571 = [null,null,null,null,null,null,null,null,null];
(statearr_64571[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20100__auto__);

(statearr_64571[(1)] = (1));

return statearr_64571;
});
var figwheel$client$heads_up_plugin_$_state_machine__20100__auto____1 = (function (state_64558){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_64558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e64572){if((e64572 instanceof Object)){
var ex__20103__auto__ = e64572;
var statearr_64573_64582 = state_64558;
(statearr_64573_64582[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64583 = state_64558;
state_64558 = G__64583;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20100__auto__ = function(state_64558){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20100__auto____1.call(this,state_64558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20100__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20100__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___64575,ch))
})();
var state__20166__auto__ = (function (){var statearr_64574 = f__20165__auto__.call(null);
(statearr_64574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___64575);

return statearr_64574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___64575,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__){
return (function (state_64604){
var state_val_64605 = (state_64604[(1)]);
if((state_val_64605 === (1))){
var inst_64599 = cljs.core.async.timeout.call(null,(3000));
var state_64604__$1 = state_64604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64604__$1,(2),inst_64599);
} else {
if((state_val_64605 === (2))){
var inst_64601 = (state_64604[(2)]);
var inst_64602 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_64604__$1 = (function (){var statearr_64606 = state_64604;
(statearr_64606[(7)] = inst_64601);

return statearr_64606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64604__$1,inst_64602);
} else {
return null;
}
}
});})(c__20164__auto__))
;
return ((function (switch__20099__auto__,c__20164__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____0 = (function (){
var statearr_64610 = [null,null,null,null,null,null,null,null];
(statearr_64610[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__);

(statearr_64610[(1)] = (1));

return statearr_64610;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____1 = (function (state_64604){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_64604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e64611){if((e64611 instanceof Object)){
var ex__20103__auto__ = e64611;
var statearr_64612_64614 = state_64604;
(statearr_64612_64614[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64615 = state_64604;
state_64604 = G__64615;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__ = function(state_64604){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____1.call(this,state_64604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_64613 = f__20165__auto__.call(null);
(statearr_64613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_64613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__))
);

return c__20164__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__64616){
var map__64623 = p__64616;
var map__64623__$1 = ((((!((map__64623 == null)))?((((map__64623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64623):map__64623);
var ed = map__64623__$1;
var formatted_exception = cljs.core.get.call(null,map__64623__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__64623__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__64623__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__64625_64629 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__64626_64630 = null;
var count__64627_64631 = (0);
var i__64628_64632 = (0);
while(true){
if((i__64628_64632 < count__64627_64631)){
var msg_64633 = cljs.core._nth.call(null,chunk__64626_64630,i__64628_64632);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_64633);

var G__64634 = seq__64625_64629;
var G__64635 = chunk__64626_64630;
var G__64636 = count__64627_64631;
var G__64637 = (i__64628_64632 + (1));
seq__64625_64629 = G__64634;
chunk__64626_64630 = G__64635;
count__64627_64631 = G__64636;
i__64628_64632 = G__64637;
continue;
} else {
var temp__4425__auto___64638 = cljs.core.seq.call(null,seq__64625_64629);
if(temp__4425__auto___64638){
var seq__64625_64639__$1 = temp__4425__auto___64638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64625_64639__$1)){
var c__17135__auto___64640 = cljs.core.chunk_first.call(null,seq__64625_64639__$1);
var G__64641 = cljs.core.chunk_rest.call(null,seq__64625_64639__$1);
var G__64642 = c__17135__auto___64640;
var G__64643 = cljs.core.count.call(null,c__17135__auto___64640);
var G__64644 = (0);
seq__64625_64629 = G__64641;
chunk__64626_64630 = G__64642;
count__64627_64631 = G__64643;
i__64628_64632 = G__64644;
continue;
} else {
var msg_64645 = cljs.core.first.call(null,seq__64625_64639__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_64645);

var G__64646 = cljs.core.next.call(null,seq__64625_64639__$1);
var G__64647 = null;
var G__64648 = (0);
var G__64649 = (0);
seq__64625_64629 = G__64646;
chunk__64626_64630 = G__64647;
count__64627_64631 = G__64648;
i__64628_64632 = G__64649;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__64650){
var map__64653 = p__64650;
var map__64653__$1 = ((((!((map__64653 == null)))?((((map__64653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64653):map__64653);
var w = map__64653__$1;
var message = cljs.core.get.call(null,map__64653__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16320__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16320__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16320__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__64661 = cljs.core.seq.call(null,plugins);
var chunk__64662 = null;
var count__64663 = (0);
var i__64664 = (0);
while(true){
if((i__64664 < count__64663)){
var vec__64665 = cljs.core._nth.call(null,chunk__64662,i__64664);
var k = cljs.core.nth.call(null,vec__64665,(0),null);
var plugin = cljs.core.nth.call(null,vec__64665,(1),null);
if(cljs.core.truth_(plugin)){
var pl_64667 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__64661,chunk__64662,count__64663,i__64664,pl_64667,vec__64665,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_64667.call(null,msg_hist);
});})(seq__64661,chunk__64662,count__64663,i__64664,pl_64667,vec__64665,k,plugin))
);
} else {
}

var G__64668 = seq__64661;
var G__64669 = chunk__64662;
var G__64670 = count__64663;
var G__64671 = (i__64664 + (1));
seq__64661 = G__64668;
chunk__64662 = G__64669;
count__64663 = G__64670;
i__64664 = G__64671;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__64661);
if(temp__4425__auto__){
var seq__64661__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64661__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__64661__$1);
var G__64672 = cljs.core.chunk_rest.call(null,seq__64661__$1);
var G__64673 = c__17135__auto__;
var G__64674 = cljs.core.count.call(null,c__17135__auto__);
var G__64675 = (0);
seq__64661 = G__64672;
chunk__64662 = G__64673;
count__64663 = G__64674;
i__64664 = G__64675;
continue;
} else {
var vec__64666 = cljs.core.first.call(null,seq__64661__$1);
var k = cljs.core.nth.call(null,vec__64666,(0),null);
var plugin = cljs.core.nth.call(null,vec__64666,(1),null);
if(cljs.core.truth_(plugin)){
var pl_64676 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__64661,chunk__64662,count__64663,i__64664,pl_64676,vec__64666,k,plugin,seq__64661__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_64676.call(null,msg_hist);
});})(seq__64661,chunk__64662,count__64663,i__64664,pl_64676,vec__64666,k,plugin,seq__64661__$1,temp__4425__auto__))
);
} else {
}

var G__64677 = cljs.core.next.call(null,seq__64661__$1);
var G__64678 = null;
var G__64679 = (0);
var G__64680 = (0);
seq__64661 = G__64677;
chunk__64662 = G__64678;
count__64663 = G__64679;
i__64664 = G__64680;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args64681 = [];
var len__17390__auto___64684 = arguments.length;
var i__17391__auto___64685 = (0);
while(true){
if((i__17391__auto___64685 < len__17390__auto___64684)){
args64681.push((arguments[i__17391__auto___64685]));

var G__64686 = (i__17391__auto___64685 + (1));
i__17391__auto___64685 = G__64686;
continue;
} else {
}
break;
}

var G__64683 = args64681.length;
switch (G__64683) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64681.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17397__auto__ = [];
var len__17390__auto___64692 = arguments.length;
var i__17391__auto___64693 = (0);
while(true){
if((i__17391__auto___64693 < len__17390__auto___64692)){
args__17397__auto__.push((arguments[i__17391__auto___64693]));

var G__64694 = (i__17391__auto___64693 + (1));
i__17391__auto___64693 = G__64694;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((0) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17398__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__64689){
var map__64690 = p__64689;
var map__64690__$1 = ((((!((map__64690 == null)))?((((map__64690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64690):map__64690);
var opts = map__64690__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq64688){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64688));
});

//# sourceMappingURL=client.js.map