// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17397__auto__ = [];
var len__17390__auto___45811 = arguments.length;
var i__17391__auto___45812 = (0);
while(true){
if((i__17391__auto___45812 < len__17390__auto___45811)){
args__17397__auto__.push((arguments[i__17391__auto___45812]));

var G__45813 = (i__17391__auto___45812 + (1));
i__17391__auto___45812 = G__45813;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((2) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17398__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__45803_45814 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__45804_45815 = null;
var count__45805_45816 = (0);
var i__45806_45817 = (0);
while(true){
if((i__45806_45817 < count__45805_45816)){
var k_45818 = cljs.core._nth.call(null,chunk__45804_45815,i__45806_45817);
e.setAttribute(cljs.core.name.call(null,k_45818),cljs.core.get.call(null,attrs,k_45818));

var G__45819 = seq__45803_45814;
var G__45820 = chunk__45804_45815;
var G__45821 = count__45805_45816;
var G__45822 = (i__45806_45817 + (1));
seq__45803_45814 = G__45819;
chunk__45804_45815 = G__45820;
count__45805_45816 = G__45821;
i__45806_45817 = G__45822;
continue;
} else {
var temp__4425__auto___45823 = cljs.core.seq.call(null,seq__45803_45814);
if(temp__4425__auto___45823){
var seq__45803_45824__$1 = temp__4425__auto___45823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45803_45824__$1)){
var c__17135__auto___45825 = cljs.core.chunk_first.call(null,seq__45803_45824__$1);
var G__45826 = cljs.core.chunk_rest.call(null,seq__45803_45824__$1);
var G__45827 = c__17135__auto___45825;
var G__45828 = cljs.core.count.call(null,c__17135__auto___45825);
var G__45829 = (0);
seq__45803_45814 = G__45826;
chunk__45804_45815 = G__45827;
count__45805_45816 = G__45828;
i__45806_45817 = G__45829;
continue;
} else {
var k_45830 = cljs.core.first.call(null,seq__45803_45824__$1);
e.setAttribute(cljs.core.name.call(null,k_45830),cljs.core.get.call(null,attrs,k_45830));

var G__45831 = cljs.core.next.call(null,seq__45803_45824__$1);
var G__45832 = null;
var G__45833 = (0);
var G__45834 = (0);
seq__45803_45814 = G__45831;
chunk__45804_45815 = G__45832;
count__45805_45816 = G__45833;
i__45806_45817 = G__45834;
continue;
}
} else {
}
}
break;
}

var seq__45807_45835 = cljs.core.seq.call(null,children);
var chunk__45808_45836 = null;
var count__45809_45837 = (0);
var i__45810_45838 = (0);
while(true){
if((i__45810_45838 < count__45809_45837)){
var ch_45839 = cljs.core._nth.call(null,chunk__45808_45836,i__45810_45838);
e.appendChild(ch_45839);

var G__45840 = seq__45807_45835;
var G__45841 = chunk__45808_45836;
var G__45842 = count__45809_45837;
var G__45843 = (i__45810_45838 + (1));
seq__45807_45835 = G__45840;
chunk__45808_45836 = G__45841;
count__45809_45837 = G__45842;
i__45810_45838 = G__45843;
continue;
} else {
var temp__4425__auto___45844 = cljs.core.seq.call(null,seq__45807_45835);
if(temp__4425__auto___45844){
var seq__45807_45845__$1 = temp__4425__auto___45844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45807_45845__$1)){
var c__17135__auto___45846 = cljs.core.chunk_first.call(null,seq__45807_45845__$1);
var G__45847 = cljs.core.chunk_rest.call(null,seq__45807_45845__$1);
var G__45848 = c__17135__auto___45846;
var G__45849 = cljs.core.count.call(null,c__17135__auto___45846);
var G__45850 = (0);
seq__45807_45835 = G__45847;
chunk__45808_45836 = G__45848;
count__45809_45837 = G__45849;
i__45810_45838 = G__45850;
continue;
} else {
var ch_45851 = cljs.core.first.call(null,seq__45807_45845__$1);
e.appendChild(ch_45851);

var G__45852 = cljs.core.next.call(null,seq__45807_45845__$1);
var G__45853 = null;
var G__45854 = (0);
var G__45855 = (0);
seq__45807_45835 = G__45852;
chunk__45808_45836 = G__45853;
count__45809_45837 = G__45854;
i__45810_45838 = G__45855;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq45800){
var G__45801 = cljs.core.first.call(null,seq45800);
var seq45800__$1 = cljs.core.next.call(null,seq45800);
var G__45802 = cljs.core.first.call(null,seq45800__$1);
var seq45800__$2 = cljs.core.next.call(null,seq45800__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__45801,G__45802,seq45800__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17247__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17249__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__,hierarchy__17249__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__,hierarchy__17249__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17249__auto__,method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_45856 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_45856.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_45856.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_45856.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_45856);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__45857,st_map){
var map__45862 = p__45857;
var map__45862__$1 = ((((!((map__45862 == null)))?((((map__45862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45862):map__45862);
var container_el = cljs.core.get.call(null,map__45862__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__45862,map__45862__$1,container_el){
return (function (p__45864){
var vec__45865 = p__45864;
var k = cljs.core.nth.call(null,vec__45865,(0),null);
var v = cljs.core.nth.call(null,vec__45865,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__45862,map__45862__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__45866,dom_str){
var map__45869 = p__45866;
var map__45869__$1 = ((((!((map__45869 == null)))?((((map__45869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45869):map__45869);
var c = map__45869__$1;
var content_area_el = cljs.core.get.call(null,map__45869__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__45871){
var map__45874 = p__45871;
var map__45874__$1 = ((((!((map__45874 == null)))?((((map__45874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45874):map__45874);
var content_area_el = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__){
return (function (state_45917){
var state_val_45918 = (state_45917[(1)]);
if((state_val_45918 === (1))){
var inst_45902 = (state_45917[(7)]);
var inst_45902__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45903 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45904 = ["10px","10px","100%","68px","1.0"];
var inst_45905 = cljs.core.PersistentHashMap.fromArrays(inst_45903,inst_45904);
var inst_45906 = cljs.core.merge.call(null,inst_45905,style);
var inst_45907 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45902__$1,inst_45906);
var inst_45908 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45902__$1,msg);
var inst_45909 = cljs.core.async.timeout.call(null,(300));
var state_45917__$1 = (function (){var statearr_45919 = state_45917;
(statearr_45919[(8)] = inst_45908);

(statearr_45919[(7)] = inst_45902__$1);

(statearr_45919[(9)] = inst_45907);

return statearr_45919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45917__$1,(2),inst_45909);
} else {
if((state_val_45918 === (2))){
var inst_45902 = (state_45917[(7)]);
var inst_45911 = (state_45917[(2)]);
var inst_45912 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_45913 = ["auto"];
var inst_45914 = cljs.core.PersistentHashMap.fromArrays(inst_45912,inst_45913);
var inst_45915 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45902,inst_45914);
var state_45917__$1 = (function (){var statearr_45920 = state_45917;
(statearr_45920[(10)] = inst_45911);

return statearr_45920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45917__$1,inst_45915);
} else {
return null;
}
}
});})(c__20164__auto__))
;
return ((function (switch__20099__auto__,c__20164__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto____0 = (function (){
var statearr_45924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45924[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto__);

(statearr_45924[(1)] = (1));

return statearr_45924;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto____1 = (function (state_45917){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_45917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e45925){if((e45925 instanceof Object)){
var ex__20103__auto__ = e45925;
var statearr_45926_45928 = state_45917;
(statearr_45926_45928[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45929 = state_45917;
state_45917 = G__45929;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto__ = function(state_45917){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto____1.call(this,state_45917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_45927 = f__20165__auto__.call(null);
(statearr_45927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_45927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__))
);

return c__20164__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__45931 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__45931,(0),null);
var ln = cljs.core.nth.call(null,vec__45931,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__45934 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__45934,(0),null);
var file_line = cljs.core.nth.call(null,vec__45934,(1),null);
var file_column = cljs.core.nth.call(null,vec__45934,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__45934,file_name,file_line,file_column){
return (function (p1__45932_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__45932_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__45934,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16332__auto__ = file_line;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var and__16320__auto__ = cause;
if(cljs.core.truth_(and__16320__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16320__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__45937 = figwheel.client.heads_up.ensure_container.call(null);
var map__45937__$1 = ((((!((map__45937 == null)))?((((map__45937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45937):map__45937);
var content_area_el = cljs.core.get.call(null,map__45937__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__){
return (function (state_45985){
var state_val_45986 = (state_45985[(1)]);
if((state_val_45986 === (1))){
var inst_45968 = (state_45985[(7)]);
var inst_45968__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45969 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45970 = ["0.0"];
var inst_45971 = cljs.core.PersistentHashMap.fromArrays(inst_45969,inst_45970);
var inst_45972 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45968__$1,inst_45971);
var inst_45973 = cljs.core.async.timeout.call(null,(300));
var state_45985__$1 = (function (){var statearr_45987 = state_45985;
(statearr_45987[(8)] = inst_45972);

(statearr_45987[(7)] = inst_45968__$1);

return statearr_45987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45985__$1,(2),inst_45973);
} else {
if((state_val_45986 === (2))){
var inst_45968 = (state_45985[(7)]);
var inst_45975 = (state_45985[(2)]);
var inst_45976 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_45977 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_45978 = cljs.core.PersistentHashMap.fromArrays(inst_45976,inst_45977);
var inst_45979 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45968,inst_45978);
var inst_45980 = cljs.core.async.timeout.call(null,(200));
var state_45985__$1 = (function (){var statearr_45988 = state_45985;
(statearr_45988[(9)] = inst_45979);

(statearr_45988[(10)] = inst_45975);

return statearr_45988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45985__$1,(3),inst_45980);
} else {
if((state_val_45986 === (3))){
var inst_45968 = (state_45985[(7)]);
var inst_45982 = (state_45985[(2)]);
var inst_45983 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45968,"");
var state_45985__$1 = (function (){var statearr_45989 = state_45985;
(statearr_45989[(11)] = inst_45982);

return statearr_45989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45985__$1,inst_45983);
} else {
return null;
}
}
}
});})(c__20164__auto__))
;
return ((function (switch__20099__auto__,c__20164__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20100__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20100__auto____0 = (function (){
var statearr_45993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45993[(0)] = figwheel$client$heads_up$clear_$_state_machine__20100__auto__);

(statearr_45993[(1)] = (1));

return statearr_45993;
});
var figwheel$client$heads_up$clear_$_state_machine__20100__auto____1 = (function (state_45985){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_45985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e45994){if((e45994 instanceof Object)){
var ex__20103__auto__ = e45994;
var statearr_45995_45997 = state_45985;
(statearr_45995_45997[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45998 = state_45985;
state_45985 = G__45998;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20100__auto__ = function(state_45985){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20100__auto____1.call(this,state_45985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20100__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20100__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_45996 = f__20165__auto__.call(null);
(statearr_45996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_45996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__))
);

return c__20164__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__){
return (function (state_46030){
var state_val_46031 = (state_46030[(1)]);
if((state_val_46031 === (1))){
var inst_46020 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_46030__$1 = state_46030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46030__$1,(2),inst_46020);
} else {
if((state_val_46031 === (2))){
var inst_46022 = (state_46030[(2)]);
var inst_46023 = cljs.core.async.timeout.call(null,(400));
var state_46030__$1 = (function (){var statearr_46032 = state_46030;
(statearr_46032[(7)] = inst_46022);

return statearr_46032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46030__$1,(3),inst_46023);
} else {
if((state_val_46031 === (3))){
var inst_46025 = (state_46030[(2)]);
var inst_46026 = figwheel.client.heads_up.clear.call(null);
var state_46030__$1 = (function (){var statearr_46033 = state_46030;
(statearr_46033[(8)] = inst_46025);

return statearr_46033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46030__$1,(4),inst_46026);
} else {
if((state_val_46031 === (4))){
var inst_46028 = (state_46030[(2)]);
var state_46030__$1 = state_46030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46030__$1,inst_46028);
} else {
return null;
}
}
}
}
});})(c__20164__auto__))
;
return ((function (switch__20099__auto__,c__20164__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto____0 = (function (){
var statearr_46037 = [null,null,null,null,null,null,null,null,null];
(statearr_46037[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto__);

(statearr_46037[(1)] = (1));

return statearr_46037;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto____1 = (function (state_46030){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_46030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e46038){if((e46038 instanceof Object)){
var ex__20103__auto__ = e46038;
var statearr_46039_46041 = state_46030;
(statearr_46039_46041[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46042 = state_46030;
state_46030 = G__46042;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto__ = function(state_46030){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto____1.call(this,state_46030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_46040 = f__20165__auto__.call(null);
(statearr_46040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_46040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__))
);

return c__20164__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map