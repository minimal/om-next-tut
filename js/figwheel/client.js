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
var pred__44949 = cljs.core._EQ_;
var expr__44950 = (function (){var or__16332__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__44949.call(null,"true",expr__44950))){
return true;
} else {
if(cljs.core.truth_(pred__44949.call(null,"false",expr__44950))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__44950)].join('')));
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
var G__44952__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__44952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44953__i = 0, G__44953__a = new Array(arguments.length -  0);
while (G__44953__i < G__44953__a.length) {G__44953__a[G__44953__i] = arguments[G__44953__i + 0]; ++G__44953__i;}
  args = new cljs.core.IndexedSeq(G__44953__a,0);
} 
return G__44952__delegate.call(this,args);};
G__44952.cljs$lang$maxFixedArity = 0;
G__44952.cljs$lang$applyTo = (function (arglist__44954){
var args = cljs.core.seq(arglist__44954);
return G__44952__delegate(args);
});
G__44952.cljs$core$IFn$_invoke$arity$variadic = G__44952__delegate;
return G__44952;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44955){
var map__44958 = p__44955;
var map__44958__$1 = ((((!((map__44958 == null)))?((((map__44958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44958):map__44958);
var message = cljs.core.get.call(null,map__44958__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44958__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20164__auto___45120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___45120,ch){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___45120,ch){
return (function (state_45089){
var state_val_45090 = (state_45089[(1)]);
if((state_val_45090 === (7))){
var inst_45085 = (state_45089[(2)]);
var state_45089__$1 = state_45089;
var statearr_45091_45121 = state_45089__$1;
(statearr_45091_45121[(2)] = inst_45085);

(statearr_45091_45121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (1))){
var state_45089__$1 = state_45089;
var statearr_45092_45122 = state_45089__$1;
(statearr_45092_45122[(2)] = null);

(statearr_45092_45122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (4))){
var inst_45042 = (state_45089[(7)]);
var inst_45042__$1 = (state_45089[(2)]);
var state_45089__$1 = (function (){var statearr_45093 = state_45089;
(statearr_45093[(7)] = inst_45042__$1);

return statearr_45093;
})();
if(cljs.core.truth_(inst_45042__$1)){
var statearr_45094_45123 = state_45089__$1;
(statearr_45094_45123[(1)] = (5));

} else {
var statearr_45095_45124 = state_45089__$1;
(statearr_45095_45124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (15))){
var inst_45049 = (state_45089[(8)]);
var inst_45064 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45049);
var inst_45065 = cljs.core.first.call(null,inst_45064);
var inst_45066 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45065);
var inst_45067 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_45066)].join('');
var inst_45068 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45067);
var state_45089__$1 = state_45089;
var statearr_45096_45125 = state_45089__$1;
(statearr_45096_45125[(2)] = inst_45068);

(statearr_45096_45125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (13))){
var inst_45073 = (state_45089[(2)]);
var state_45089__$1 = state_45089;
var statearr_45097_45126 = state_45089__$1;
(statearr_45097_45126[(2)] = inst_45073);

(statearr_45097_45126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (6))){
var state_45089__$1 = state_45089;
var statearr_45098_45127 = state_45089__$1;
(statearr_45098_45127[(2)] = null);

(statearr_45098_45127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (17))){
var inst_45071 = (state_45089[(2)]);
var state_45089__$1 = state_45089;
var statearr_45099_45128 = state_45089__$1;
(statearr_45099_45128[(2)] = inst_45071);

(statearr_45099_45128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (3))){
var inst_45087 = (state_45089[(2)]);
var state_45089__$1 = state_45089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45089__$1,inst_45087);
} else {
if((state_val_45090 === (12))){
var inst_45048 = (state_45089[(9)]);
var inst_45062 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45048,opts);
var state_45089__$1 = state_45089;
if(cljs.core.truth_(inst_45062)){
var statearr_45100_45129 = state_45089__$1;
(statearr_45100_45129[(1)] = (15));

} else {
var statearr_45101_45130 = state_45089__$1;
(statearr_45101_45130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (2))){
var state_45089__$1 = state_45089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45089__$1,(4),ch);
} else {
if((state_val_45090 === (11))){
var inst_45049 = (state_45089[(8)]);
var inst_45054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45055 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45049);
var inst_45056 = cljs.core.async.timeout.call(null,(1000));
var inst_45057 = [inst_45055,inst_45056];
var inst_45058 = (new cljs.core.PersistentVector(null,2,(5),inst_45054,inst_45057,null));
var state_45089__$1 = state_45089;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45089__$1,(14),inst_45058);
} else {
if((state_val_45090 === (9))){
var inst_45049 = (state_45089[(8)]);
var inst_45075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45076 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45049);
var inst_45077 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45076);
var inst_45078 = [cljs.core.str("Not loading: "),cljs.core.str(inst_45077)].join('');
var inst_45079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45078);
var state_45089__$1 = (function (){var statearr_45102 = state_45089;
(statearr_45102[(10)] = inst_45075);

return statearr_45102;
})();
var statearr_45103_45131 = state_45089__$1;
(statearr_45103_45131[(2)] = inst_45079);

(statearr_45103_45131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (5))){
var inst_45042 = (state_45089[(7)]);
var inst_45044 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45045 = (new cljs.core.PersistentArrayMap(null,2,inst_45044,null));
var inst_45046 = (new cljs.core.PersistentHashSet(null,inst_45045,null));
var inst_45047 = figwheel.client.focus_msgs.call(null,inst_45046,inst_45042);
var inst_45048 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45047);
var inst_45049 = cljs.core.first.call(null,inst_45047);
var inst_45050 = figwheel.client.autoload_QMARK_.call(null);
var state_45089__$1 = (function (){var statearr_45104 = state_45089;
(statearr_45104[(8)] = inst_45049);

(statearr_45104[(9)] = inst_45048);

return statearr_45104;
})();
if(cljs.core.truth_(inst_45050)){
var statearr_45105_45132 = state_45089__$1;
(statearr_45105_45132[(1)] = (8));

} else {
var statearr_45106_45133 = state_45089__$1;
(statearr_45106_45133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (14))){
var inst_45060 = (state_45089[(2)]);
var state_45089__$1 = state_45089;
var statearr_45107_45134 = state_45089__$1;
(statearr_45107_45134[(2)] = inst_45060);

(statearr_45107_45134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (16))){
var state_45089__$1 = state_45089;
var statearr_45108_45135 = state_45089__$1;
(statearr_45108_45135[(2)] = null);

(statearr_45108_45135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (10))){
var inst_45081 = (state_45089[(2)]);
var state_45089__$1 = (function (){var statearr_45109 = state_45089;
(statearr_45109[(11)] = inst_45081);

return statearr_45109;
})();
var statearr_45110_45136 = state_45089__$1;
(statearr_45110_45136[(2)] = null);

(statearr_45110_45136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45090 === (8))){
var inst_45048 = (state_45089[(9)]);
var inst_45052 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45048,opts);
var state_45089__$1 = state_45089;
if(cljs.core.truth_(inst_45052)){
var statearr_45111_45137 = state_45089__$1;
(statearr_45111_45137[(1)] = (11));

} else {
var statearr_45112_45138 = state_45089__$1;
(statearr_45112_45138[(1)] = (12));

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
});})(c__20164__auto___45120,ch))
;
return ((function (switch__20099__auto__,c__20164__auto___45120,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____0 = (function (){
var statearr_45116 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45116[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__);

(statearr_45116[(1)] = (1));

return statearr_45116;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____1 = (function (state_45089){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_45089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e45117){if((e45117 instanceof Object)){
var ex__20103__auto__ = e45117;
var statearr_45118_45139 = state_45089;
(statearr_45118_45139[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45140 = state_45089;
state_45089 = G__45140;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__ = function(state_45089){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____1.call(this,state_45089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20100__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___45120,ch))
})();
var state__20166__auto__ = (function (){var statearr_45119 = f__20165__auto__.call(null);
(statearr_45119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___45120);

return statearr_45119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___45120,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45141_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45141_SHARP_));
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
var base_path_45148 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45148){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_45146 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_45147 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_45146,_STAR_print_newline_STAR_45147,base_path_45148){
return (function() { 
var G__45149__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__45149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45150__i = 0, G__45150__a = new Array(arguments.length -  0);
while (G__45150__i < G__45150__a.length) {G__45150__a[G__45150__i] = arguments[G__45150__i + 0]; ++G__45150__i;}
  args = new cljs.core.IndexedSeq(G__45150__a,0);
} 
return G__45149__delegate.call(this,args);};
G__45149.cljs$lang$maxFixedArity = 0;
G__45149.cljs$lang$applyTo = (function (arglist__45151){
var args = cljs.core.seq(arglist__45151);
return G__45149__delegate(args);
});
G__45149.cljs$core$IFn$_invoke$arity$variadic = G__45149__delegate;
return G__45149;
})()
;})(_STAR_print_fn_STAR_45146,_STAR_print_newline_STAR_45147,base_path_45148))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45147;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45146;
}}catch (e45145){if((e45145 instanceof Error)){
var e = e45145;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45148], null));
} else {
var e = e45145;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_45148))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45152){
var map__45159 = p__45152;
var map__45159__$1 = ((((!((map__45159 == null)))?((((map__45159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45159):map__45159);
var opts = map__45159__$1;
var build_id = cljs.core.get.call(null,map__45159__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45159,map__45159__$1,opts,build_id){
return (function (p__45161){
var vec__45162 = p__45161;
var map__45163 = cljs.core.nth.call(null,vec__45162,(0),null);
var map__45163__$1 = ((((!((map__45163 == null)))?((((map__45163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45163):map__45163);
var msg = map__45163__$1;
var msg_name = cljs.core.get.call(null,map__45163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45162,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45162,map__45163,map__45163__$1,msg,msg_name,_,map__45159,map__45159__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45162,map__45163,map__45163__$1,msg,msg_name,_,map__45159,map__45159__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45159,map__45159__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45169){
var vec__45170 = p__45169;
var map__45171 = cljs.core.nth.call(null,vec__45170,(0),null);
var map__45171__$1 = ((((!((map__45171 == null)))?((((map__45171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45171):map__45171);
var msg = map__45171__$1;
var msg_name = cljs.core.get.call(null,map__45171__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45170,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45173){
var map__45183 = p__45173;
var map__45183__$1 = ((((!((map__45183 == null)))?((((map__45183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45183):map__45183);
var on_compile_warning = cljs.core.get.call(null,map__45183__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45183__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45183,map__45183__$1,on_compile_warning,on_compile_fail){
return (function (p__45185){
var vec__45186 = p__45185;
var map__45187 = cljs.core.nth.call(null,vec__45186,(0),null);
var map__45187__$1 = ((((!((map__45187 == null)))?((((map__45187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45187):map__45187);
var msg = map__45187__$1;
var msg_name = cljs.core.get.call(null,map__45187__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45186,(1));
var pred__45189 = cljs.core._EQ_;
var expr__45190 = msg_name;
if(cljs.core.truth_(pred__45189.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45190))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45189.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45190))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45183,map__45183__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__,msg_hist,msg_names,msg){
return (function (state_45406){
var state_val_45407 = (state_45406[(1)]);
if((state_val_45407 === (7))){
var inst_45330 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
if(cljs.core.truth_(inst_45330)){
var statearr_45408_45454 = state_45406__$1;
(statearr_45408_45454[(1)] = (8));

} else {
var statearr_45409_45455 = state_45406__$1;
(statearr_45409_45455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (20))){
var inst_45400 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45410_45456 = state_45406__$1;
(statearr_45410_45456[(2)] = inst_45400);

(statearr_45410_45456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (27))){
var inst_45396 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45411_45457 = state_45406__$1;
(statearr_45411_45457[(2)] = inst_45396);

(statearr_45411_45457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (1))){
var inst_45323 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45406__$1 = state_45406;
if(cljs.core.truth_(inst_45323)){
var statearr_45412_45458 = state_45406__$1;
(statearr_45412_45458[(1)] = (2));

} else {
var statearr_45413_45459 = state_45406__$1;
(statearr_45413_45459[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (24))){
var inst_45398 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45414_45460 = state_45406__$1;
(statearr_45414_45460[(2)] = inst_45398);

(statearr_45414_45460[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (4))){
var inst_45404 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45406__$1,inst_45404);
} else {
if((state_val_45407 === (15))){
var inst_45402 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45415_45461 = state_45406__$1;
(statearr_45415_45461[(2)] = inst_45402);

(statearr_45415_45461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (21))){
var inst_45361 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45416_45462 = state_45406__$1;
(statearr_45416_45462[(2)] = inst_45361);

(statearr_45416_45462[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (31))){
var inst_45385 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45406__$1 = state_45406;
if(cljs.core.truth_(inst_45385)){
var statearr_45417_45463 = state_45406__$1;
(statearr_45417_45463[(1)] = (34));

} else {
var statearr_45418_45464 = state_45406__$1;
(statearr_45418_45464[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (32))){
var inst_45394 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45419_45465 = state_45406__$1;
(statearr_45419_45465[(2)] = inst_45394);

(statearr_45419_45465[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (33))){
var inst_45383 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45420_45466 = state_45406__$1;
(statearr_45420_45466[(2)] = inst_45383);

(statearr_45420_45466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (13))){
var inst_45344 = figwheel.client.heads_up.clear.call(null);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(16),inst_45344);
} else {
if((state_val_45407 === (22))){
var inst_45365 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45366 = figwheel.client.heads_up.append_message.call(null,inst_45365);
var state_45406__$1 = state_45406;
var statearr_45421_45467 = state_45406__$1;
(statearr_45421_45467[(2)] = inst_45366);

(statearr_45421_45467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (36))){
var inst_45392 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45422_45468 = state_45406__$1;
(statearr_45422_45468[(2)] = inst_45392);

(statearr_45422_45468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (29))){
var inst_45376 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45423_45469 = state_45406__$1;
(statearr_45423_45469[(2)] = inst_45376);

(statearr_45423_45469[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (6))){
var inst_45325 = (state_45406[(7)]);
var state_45406__$1 = state_45406;
var statearr_45424_45470 = state_45406__$1;
(statearr_45424_45470[(2)] = inst_45325);

(statearr_45424_45470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (28))){
var inst_45372 = (state_45406[(2)]);
var inst_45373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45374 = figwheel.client.heads_up.display_warning.call(null,inst_45373);
var state_45406__$1 = (function (){var statearr_45425 = state_45406;
(statearr_45425[(8)] = inst_45372);

return statearr_45425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(29),inst_45374);
} else {
if((state_val_45407 === (25))){
var inst_45370 = figwheel.client.heads_up.clear.call(null);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(28),inst_45370);
} else {
if((state_val_45407 === (34))){
var inst_45387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(37),inst_45387);
} else {
if((state_val_45407 === (17))){
var inst_45352 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45426_45471 = state_45406__$1;
(statearr_45426_45471[(2)] = inst_45352);

(statearr_45426_45471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (3))){
var inst_45342 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45406__$1 = state_45406;
if(cljs.core.truth_(inst_45342)){
var statearr_45427_45472 = state_45406__$1;
(statearr_45427_45472[(1)] = (13));

} else {
var statearr_45428_45473 = state_45406__$1;
(statearr_45428_45473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (12))){
var inst_45338 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45429_45474 = state_45406__$1;
(statearr_45429_45474[(2)] = inst_45338);

(statearr_45429_45474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (2))){
var inst_45325 = (state_45406[(7)]);
var inst_45325__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45406__$1 = (function (){var statearr_45430 = state_45406;
(statearr_45430[(7)] = inst_45325__$1);

return statearr_45430;
})();
if(cljs.core.truth_(inst_45325__$1)){
var statearr_45431_45475 = state_45406__$1;
(statearr_45431_45475[(1)] = (5));

} else {
var statearr_45432_45476 = state_45406__$1;
(statearr_45432_45476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (23))){
var inst_45368 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45406__$1 = state_45406;
if(cljs.core.truth_(inst_45368)){
var statearr_45433_45477 = state_45406__$1;
(statearr_45433_45477[(1)] = (25));

} else {
var statearr_45434_45478 = state_45406__$1;
(statearr_45434_45478[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (35))){
var state_45406__$1 = state_45406;
var statearr_45435_45479 = state_45406__$1;
(statearr_45435_45479[(2)] = null);

(statearr_45435_45479[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (19))){
var inst_45363 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45406__$1 = state_45406;
if(cljs.core.truth_(inst_45363)){
var statearr_45436_45480 = state_45406__$1;
(statearr_45436_45480[(1)] = (22));

} else {
var statearr_45437_45481 = state_45406__$1;
(statearr_45437_45481[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (11))){
var inst_45334 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45438_45482 = state_45406__$1;
(statearr_45438_45482[(2)] = inst_45334);

(statearr_45438_45482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (9))){
var inst_45336 = figwheel.client.heads_up.clear.call(null);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(12),inst_45336);
} else {
if((state_val_45407 === (5))){
var inst_45327 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45406__$1 = state_45406;
var statearr_45439_45483 = state_45406__$1;
(statearr_45439_45483[(2)] = inst_45327);

(statearr_45439_45483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (14))){
var inst_45354 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45406__$1 = state_45406;
if(cljs.core.truth_(inst_45354)){
var statearr_45440_45484 = state_45406__$1;
(statearr_45440_45484[(1)] = (18));

} else {
var statearr_45441_45485 = state_45406__$1;
(statearr_45441_45485[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (26))){
var inst_45378 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45406__$1 = state_45406;
if(cljs.core.truth_(inst_45378)){
var statearr_45442_45486 = state_45406__$1;
(statearr_45442_45486[(1)] = (30));

} else {
var statearr_45443_45487 = state_45406__$1;
(statearr_45443_45487[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (16))){
var inst_45346 = (state_45406[(2)]);
var inst_45347 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45348 = figwheel.client.format_messages.call(null,inst_45347);
var inst_45349 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45350 = figwheel.client.heads_up.display_error.call(null,inst_45348,inst_45349);
var state_45406__$1 = (function (){var statearr_45444 = state_45406;
(statearr_45444[(9)] = inst_45346);

return statearr_45444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(17),inst_45350);
} else {
if((state_val_45407 === (30))){
var inst_45380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45381 = figwheel.client.heads_up.display_warning.call(null,inst_45380);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(33),inst_45381);
} else {
if((state_val_45407 === (10))){
var inst_45340 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45445_45488 = state_45406__$1;
(statearr_45445_45488[(2)] = inst_45340);

(statearr_45445_45488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (18))){
var inst_45356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45357 = figwheel.client.format_messages.call(null,inst_45356);
var inst_45358 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45359 = figwheel.client.heads_up.display_error.call(null,inst_45357,inst_45358);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(21),inst_45359);
} else {
if((state_val_45407 === (37))){
var inst_45389 = (state_45406[(2)]);
var state_45406__$1 = state_45406;
var statearr_45446_45489 = state_45406__$1;
(statearr_45446_45489[(2)] = inst_45389);

(statearr_45446_45489[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45407 === (8))){
var inst_45332 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45406__$1 = state_45406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45406__$1,(11),inst_45332);
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
var statearr_45450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45450[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__);

(statearr_45450[(1)] = (1));

return statearr_45450;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____1 = (function (state_45406){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_45406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e45451){if((e45451 instanceof Object)){
var ex__20103__auto__ = e45451;
var statearr_45452_45490 = state_45406;
(statearr_45452_45490[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45491 = state_45406;
state_45406 = G__45491;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__ = function(state_45406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____1.call(this,state_45406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__,msg_hist,msg_names,msg))
})();
var state__20166__auto__ = (function (){var statearr_45453 = f__20165__auto__.call(null);
(statearr_45453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_45453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__,msg_hist,msg_names,msg))
);

return c__20164__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20164__auto___45554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___45554,ch){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___45554,ch){
return (function (state_45537){
var state_val_45538 = (state_45537[(1)]);
if((state_val_45538 === (1))){
var state_45537__$1 = state_45537;
var statearr_45539_45555 = state_45537__$1;
(statearr_45539_45555[(2)] = null);

(statearr_45539_45555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (2))){
var state_45537__$1 = state_45537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45537__$1,(4),ch);
} else {
if((state_val_45538 === (3))){
var inst_45535 = (state_45537[(2)]);
var state_45537__$1 = state_45537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45537__$1,inst_45535);
} else {
if((state_val_45538 === (4))){
var inst_45525 = (state_45537[(7)]);
var inst_45525__$1 = (state_45537[(2)]);
var state_45537__$1 = (function (){var statearr_45540 = state_45537;
(statearr_45540[(7)] = inst_45525__$1);

return statearr_45540;
})();
if(cljs.core.truth_(inst_45525__$1)){
var statearr_45541_45556 = state_45537__$1;
(statearr_45541_45556[(1)] = (5));

} else {
var statearr_45542_45557 = state_45537__$1;
(statearr_45542_45557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (5))){
var inst_45525 = (state_45537[(7)]);
var inst_45527 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_45525);
var state_45537__$1 = state_45537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45537__$1,(8),inst_45527);
} else {
if((state_val_45538 === (6))){
var state_45537__$1 = state_45537;
var statearr_45543_45558 = state_45537__$1;
(statearr_45543_45558[(2)] = null);

(statearr_45543_45558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (7))){
var inst_45533 = (state_45537[(2)]);
var state_45537__$1 = state_45537;
var statearr_45544_45559 = state_45537__$1;
(statearr_45544_45559[(2)] = inst_45533);

(statearr_45544_45559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (8))){
var inst_45529 = (state_45537[(2)]);
var state_45537__$1 = (function (){var statearr_45545 = state_45537;
(statearr_45545[(8)] = inst_45529);

return statearr_45545;
})();
var statearr_45546_45560 = state_45537__$1;
(statearr_45546_45560[(2)] = null);

(statearr_45546_45560[(1)] = (2));


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
});})(c__20164__auto___45554,ch))
;
return ((function (switch__20099__auto__,c__20164__auto___45554,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20100__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20100__auto____0 = (function (){
var statearr_45550 = [null,null,null,null,null,null,null,null,null];
(statearr_45550[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20100__auto__);

(statearr_45550[(1)] = (1));

return statearr_45550;
});
var figwheel$client$heads_up_plugin_$_state_machine__20100__auto____1 = (function (state_45537){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_45537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e45551){if((e45551 instanceof Object)){
var ex__20103__auto__ = e45551;
var statearr_45552_45561 = state_45537;
(statearr_45552_45561[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45562 = state_45537;
state_45537 = G__45562;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20100__auto__ = function(state_45537){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20100__auto____1.call(this,state_45537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20100__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20100__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___45554,ch))
})();
var state__20166__auto__ = (function (){var statearr_45553 = f__20165__auto__.call(null);
(statearr_45553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___45554);

return statearr_45553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___45554,ch))
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
return (function (state_45583){
var state_val_45584 = (state_45583[(1)]);
if((state_val_45584 === (1))){
var inst_45578 = cljs.core.async.timeout.call(null,(3000));
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45583__$1,(2),inst_45578);
} else {
if((state_val_45584 === (2))){
var inst_45580 = (state_45583[(2)]);
var inst_45581 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45583__$1 = (function (){var statearr_45585 = state_45583;
(statearr_45585[(7)] = inst_45580);

return statearr_45585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45583__$1,inst_45581);
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
var statearr_45589 = [null,null,null,null,null,null,null,null];
(statearr_45589[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__);

(statearr_45589[(1)] = (1));

return statearr_45589;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____1 = (function (state_45583){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_45583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e45590){if((e45590 instanceof Object)){
var ex__20103__auto__ = e45590;
var statearr_45591_45593 = state_45583;
(statearr_45591_45593[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45594 = state_45583;
state_45583 = G__45594;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__ = function(state_45583){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____1.call(this,state_45583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20100__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_45592 = f__20165__auto__.call(null);
(statearr_45592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_45592;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45595){
var map__45602 = p__45595;
var map__45602__$1 = ((((!((map__45602 == null)))?((((map__45602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45602):map__45602);
var ed = map__45602__$1;
var formatted_exception = cljs.core.get.call(null,map__45602__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45602__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45602__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45604_45608 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45605_45609 = null;
var count__45606_45610 = (0);
var i__45607_45611 = (0);
while(true){
if((i__45607_45611 < count__45606_45610)){
var msg_45612 = cljs.core._nth.call(null,chunk__45605_45609,i__45607_45611);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45612);

var G__45613 = seq__45604_45608;
var G__45614 = chunk__45605_45609;
var G__45615 = count__45606_45610;
var G__45616 = (i__45607_45611 + (1));
seq__45604_45608 = G__45613;
chunk__45605_45609 = G__45614;
count__45606_45610 = G__45615;
i__45607_45611 = G__45616;
continue;
} else {
var temp__4425__auto___45617 = cljs.core.seq.call(null,seq__45604_45608);
if(temp__4425__auto___45617){
var seq__45604_45618__$1 = temp__4425__auto___45617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45604_45618__$1)){
var c__17135__auto___45619 = cljs.core.chunk_first.call(null,seq__45604_45618__$1);
var G__45620 = cljs.core.chunk_rest.call(null,seq__45604_45618__$1);
var G__45621 = c__17135__auto___45619;
var G__45622 = cljs.core.count.call(null,c__17135__auto___45619);
var G__45623 = (0);
seq__45604_45608 = G__45620;
chunk__45605_45609 = G__45621;
count__45606_45610 = G__45622;
i__45607_45611 = G__45623;
continue;
} else {
var msg_45624 = cljs.core.first.call(null,seq__45604_45618__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45624);

var G__45625 = cljs.core.next.call(null,seq__45604_45618__$1);
var G__45626 = null;
var G__45627 = (0);
var G__45628 = (0);
seq__45604_45608 = G__45625;
chunk__45605_45609 = G__45626;
count__45606_45610 = G__45627;
i__45607_45611 = G__45628;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45629){
var map__45632 = p__45629;
var map__45632__$1 = ((((!((map__45632 == null)))?((((map__45632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45632):map__45632);
var w = map__45632__$1;
var message = cljs.core.get.call(null,map__45632__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__45640 = cljs.core.seq.call(null,plugins);
var chunk__45641 = null;
var count__45642 = (0);
var i__45643 = (0);
while(true){
if((i__45643 < count__45642)){
var vec__45644 = cljs.core._nth.call(null,chunk__45641,i__45643);
var k = cljs.core.nth.call(null,vec__45644,(0),null);
var plugin = cljs.core.nth.call(null,vec__45644,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45646 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45640,chunk__45641,count__45642,i__45643,pl_45646,vec__45644,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45646.call(null,msg_hist);
});})(seq__45640,chunk__45641,count__45642,i__45643,pl_45646,vec__45644,k,plugin))
);
} else {
}

var G__45647 = seq__45640;
var G__45648 = chunk__45641;
var G__45649 = count__45642;
var G__45650 = (i__45643 + (1));
seq__45640 = G__45647;
chunk__45641 = G__45648;
count__45642 = G__45649;
i__45643 = G__45650;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45640);
if(temp__4425__auto__){
var seq__45640__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45640__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__45640__$1);
var G__45651 = cljs.core.chunk_rest.call(null,seq__45640__$1);
var G__45652 = c__17135__auto__;
var G__45653 = cljs.core.count.call(null,c__17135__auto__);
var G__45654 = (0);
seq__45640 = G__45651;
chunk__45641 = G__45652;
count__45642 = G__45653;
i__45643 = G__45654;
continue;
} else {
var vec__45645 = cljs.core.first.call(null,seq__45640__$1);
var k = cljs.core.nth.call(null,vec__45645,(0),null);
var plugin = cljs.core.nth.call(null,vec__45645,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45655 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45640,chunk__45641,count__45642,i__45643,pl_45655,vec__45645,k,plugin,seq__45640__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45655.call(null,msg_hist);
});})(seq__45640,chunk__45641,count__45642,i__45643,pl_45655,vec__45645,k,plugin,seq__45640__$1,temp__4425__auto__))
);
} else {
}

var G__45656 = cljs.core.next.call(null,seq__45640__$1);
var G__45657 = null;
var G__45658 = (0);
var G__45659 = (0);
seq__45640 = G__45656;
chunk__45641 = G__45657;
count__45642 = G__45658;
i__45643 = G__45659;
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
var args45660 = [];
var len__17390__auto___45663 = arguments.length;
var i__17391__auto___45664 = (0);
while(true){
if((i__17391__auto___45664 < len__17390__auto___45663)){
args45660.push((arguments[i__17391__auto___45664]));

var G__45665 = (i__17391__auto___45664 + (1));
i__17391__auto___45664 = G__45665;
continue;
} else {
}
break;
}

var G__45662 = args45660.length;
switch (G__45662) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45660.length)].join('')));

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
var len__17390__auto___45671 = arguments.length;
var i__17391__auto___45672 = (0);
while(true){
if((i__17391__auto___45672 < len__17390__auto___45671)){
args__17397__auto__.push((arguments[i__17391__auto___45672]));

var G__45673 = (i__17391__auto___45672 + (1));
i__17391__auto___45672 = G__45673;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((0) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17398__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45668){
var map__45669 = p__45668;
var map__45669__$1 = ((((!((map__45669 == null)))?((((map__45669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45669):map__45669);
var opts = map__45669__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45667){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45667));
});

//# sourceMappingURL=client.js.map