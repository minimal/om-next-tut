// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16332__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16332__auto__){
return or__16332__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16332__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46111_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46111_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__46116 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46117 = null;
var count__46118 = (0);
var i__46119 = (0);
while(true){
if((i__46119 < count__46118)){
var n = cljs.core._nth.call(null,chunk__46117,i__46119);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46120 = seq__46116;
var G__46121 = chunk__46117;
var G__46122 = count__46118;
var G__46123 = (i__46119 + (1));
seq__46116 = G__46120;
chunk__46117 = G__46121;
count__46118 = G__46122;
i__46119 = G__46123;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__46116);
if(temp__4425__auto__){
var seq__46116__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46116__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__46116__$1);
var G__46124 = cljs.core.chunk_rest.call(null,seq__46116__$1);
var G__46125 = c__17135__auto__;
var G__46126 = cljs.core.count.call(null,c__17135__auto__);
var G__46127 = (0);
seq__46116 = G__46124;
chunk__46117 = G__46125;
count__46118 = G__46126;
i__46119 = G__46127;
continue;
} else {
var n = cljs.core.first.call(null,seq__46116__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46128 = cljs.core.next.call(null,seq__46116__$1);
var G__46129 = null;
var G__46130 = (0);
var G__46131 = (0);
seq__46116 = G__46128;
chunk__46117 = G__46129;
count__46118 = G__46130;
i__46119 = G__46131;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__46170_46177 = cljs.core.seq.call(null,deps);
var chunk__46171_46178 = null;
var count__46172_46179 = (0);
var i__46173_46180 = (0);
while(true){
if((i__46173_46180 < count__46172_46179)){
var dep_46181 = cljs.core._nth.call(null,chunk__46171_46178,i__46173_46180);
topo_sort_helper_STAR_.call(null,dep_46181,(depth + (1)),state);

var G__46182 = seq__46170_46177;
var G__46183 = chunk__46171_46178;
var G__46184 = count__46172_46179;
var G__46185 = (i__46173_46180 + (1));
seq__46170_46177 = G__46182;
chunk__46171_46178 = G__46183;
count__46172_46179 = G__46184;
i__46173_46180 = G__46185;
continue;
} else {
var temp__4425__auto___46186 = cljs.core.seq.call(null,seq__46170_46177);
if(temp__4425__auto___46186){
var seq__46170_46187__$1 = temp__4425__auto___46186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46170_46187__$1)){
var c__17135__auto___46188 = cljs.core.chunk_first.call(null,seq__46170_46187__$1);
var G__46189 = cljs.core.chunk_rest.call(null,seq__46170_46187__$1);
var G__46190 = c__17135__auto___46188;
var G__46191 = cljs.core.count.call(null,c__17135__auto___46188);
var G__46192 = (0);
seq__46170_46177 = G__46189;
chunk__46171_46178 = G__46190;
count__46172_46179 = G__46191;
i__46173_46180 = G__46192;
continue;
} else {
var dep_46193 = cljs.core.first.call(null,seq__46170_46187__$1);
topo_sort_helper_STAR_.call(null,dep_46193,(depth + (1)),state);

var G__46194 = cljs.core.next.call(null,seq__46170_46187__$1);
var G__46195 = null;
var G__46196 = (0);
var G__46197 = (0);
seq__46170_46177 = G__46194;
chunk__46171_46178 = G__46195;
count__46172_46179 = G__46196;
i__46173_46180 = G__46197;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46174){
var vec__46176 = p__46174;
var x = cljs.core.nth.call(null,vec__46176,(0),null);
var xs = cljs.core.nthnext.call(null,vec__46176,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46176,x,xs,get_deps__$1){
return (function (p1__46132_SHARP_){
return clojure.set.difference.call(null,p1__46132_SHARP_,x);
});})(vec__46176,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__46210 = cljs.core.seq.call(null,provides);
var chunk__46211 = null;
var count__46212 = (0);
var i__46213 = (0);
while(true){
if((i__46213 < count__46212)){
var prov = cljs.core._nth.call(null,chunk__46211,i__46213);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46214_46222 = cljs.core.seq.call(null,requires);
var chunk__46215_46223 = null;
var count__46216_46224 = (0);
var i__46217_46225 = (0);
while(true){
if((i__46217_46225 < count__46216_46224)){
var req_46226 = cljs.core._nth.call(null,chunk__46215_46223,i__46217_46225);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46226,prov);

var G__46227 = seq__46214_46222;
var G__46228 = chunk__46215_46223;
var G__46229 = count__46216_46224;
var G__46230 = (i__46217_46225 + (1));
seq__46214_46222 = G__46227;
chunk__46215_46223 = G__46228;
count__46216_46224 = G__46229;
i__46217_46225 = G__46230;
continue;
} else {
var temp__4425__auto___46231 = cljs.core.seq.call(null,seq__46214_46222);
if(temp__4425__auto___46231){
var seq__46214_46232__$1 = temp__4425__auto___46231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46214_46232__$1)){
var c__17135__auto___46233 = cljs.core.chunk_first.call(null,seq__46214_46232__$1);
var G__46234 = cljs.core.chunk_rest.call(null,seq__46214_46232__$1);
var G__46235 = c__17135__auto___46233;
var G__46236 = cljs.core.count.call(null,c__17135__auto___46233);
var G__46237 = (0);
seq__46214_46222 = G__46234;
chunk__46215_46223 = G__46235;
count__46216_46224 = G__46236;
i__46217_46225 = G__46237;
continue;
} else {
var req_46238 = cljs.core.first.call(null,seq__46214_46232__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46238,prov);

var G__46239 = cljs.core.next.call(null,seq__46214_46232__$1);
var G__46240 = null;
var G__46241 = (0);
var G__46242 = (0);
seq__46214_46222 = G__46239;
chunk__46215_46223 = G__46240;
count__46216_46224 = G__46241;
i__46217_46225 = G__46242;
continue;
}
} else {
}
}
break;
}

var G__46243 = seq__46210;
var G__46244 = chunk__46211;
var G__46245 = count__46212;
var G__46246 = (i__46213 + (1));
seq__46210 = G__46243;
chunk__46211 = G__46244;
count__46212 = G__46245;
i__46213 = G__46246;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__46210);
if(temp__4425__auto__){
var seq__46210__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46210__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__46210__$1);
var G__46247 = cljs.core.chunk_rest.call(null,seq__46210__$1);
var G__46248 = c__17135__auto__;
var G__46249 = cljs.core.count.call(null,c__17135__auto__);
var G__46250 = (0);
seq__46210 = G__46247;
chunk__46211 = G__46248;
count__46212 = G__46249;
i__46213 = G__46250;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46210__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46218_46251 = cljs.core.seq.call(null,requires);
var chunk__46219_46252 = null;
var count__46220_46253 = (0);
var i__46221_46254 = (0);
while(true){
if((i__46221_46254 < count__46220_46253)){
var req_46255 = cljs.core._nth.call(null,chunk__46219_46252,i__46221_46254);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46255,prov);

var G__46256 = seq__46218_46251;
var G__46257 = chunk__46219_46252;
var G__46258 = count__46220_46253;
var G__46259 = (i__46221_46254 + (1));
seq__46218_46251 = G__46256;
chunk__46219_46252 = G__46257;
count__46220_46253 = G__46258;
i__46221_46254 = G__46259;
continue;
} else {
var temp__4425__auto___46260__$1 = cljs.core.seq.call(null,seq__46218_46251);
if(temp__4425__auto___46260__$1){
var seq__46218_46261__$1 = temp__4425__auto___46260__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46218_46261__$1)){
var c__17135__auto___46262 = cljs.core.chunk_first.call(null,seq__46218_46261__$1);
var G__46263 = cljs.core.chunk_rest.call(null,seq__46218_46261__$1);
var G__46264 = c__17135__auto___46262;
var G__46265 = cljs.core.count.call(null,c__17135__auto___46262);
var G__46266 = (0);
seq__46218_46251 = G__46263;
chunk__46219_46252 = G__46264;
count__46220_46253 = G__46265;
i__46221_46254 = G__46266;
continue;
} else {
var req_46267 = cljs.core.first.call(null,seq__46218_46261__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46267,prov);

var G__46268 = cljs.core.next.call(null,seq__46218_46261__$1);
var G__46269 = null;
var G__46270 = (0);
var G__46271 = (0);
seq__46218_46251 = G__46268;
chunk__46219_46252 = G__46269;
count__46220_46253 = G__46270;
i__46221_46254 = G__46271;
continue;
}
} else {
}
}
break;
}

var G__46272 = cljs.core.next.call(null,seq__46210__$1);
var G__46273 = null;
var G__46274 = (0);
var G__46275 = (0);
seq__46210 = G__46272;
chunk__46211 = G__46273;
count__46212 = G__46274;
i__46213 = G__46275;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__46280_46284 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46281_46285 = null;
var count__46282_46286 = (0);
var i__46283_46287 = (0);
while(true){
if((i__46283_46287 < count__46282_46286)){
var ns_46288 = cljs.core._nth.call(null,chunk__46281_46285,i__46283_46287);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46288);

var G__46289 = seq__46280_46284;
var G__46290 = chunk__46281_46285;
var G__46291 = count__46282_46286;
var G__46292 = (i__46283_46287 + (1));
seq__46280_46284 = G__46289;
chunk__46281_46285 = G__46290;
count__46282_46286 = G__46291;
i__46283_46287 = G__46292;
continue;
} else {
var temp__4425__auto___46293 = cljs.core.seq.call(null,seq__46280_46284);
if(temp__4425__auto___46293){
var seq__46280_46294__$1 = temp__4425__auto___46293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46280_46294__$1)){
var c__17135__auto___46295 = cljs.core.chunk_first.call(null,seq__46280_46294__$1);
var G__46296 = cljs.core.chunk_rest.call(null,seq__46280_46294__$1);
var G__46297 = c__17135__auto___46295;
var G__46298 = cljs.core.count.call(null,c__17135__auto___46295);
var G__46299 = (0);
seq__46280_46284 = G__46296;
chunk__46281_46285 = G__46297;
count__46282_46286 = G__46298;
i__46283_46287 = G__46299;
continue;
} else {
var ns_46300 = cljs.core.first.call(null,seq__46280_46294__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46300);

var G__46301 = cljs.core.next.call(null,seq__46280_46294__$1);
var G__46302 = null;
var G__46303 = (0);
var G__46304 = (0);
seq__46280_46284 = G__46301;
chunk__46281_46285 = G__46302;
count__46282_46286 = G__46303;
i__46283_46287 = G__46304;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16332__auto__ = goog.require__;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__46305__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46306__i = 0, G__46306__a = new Array(arguments.length -  0);
while (G__46306__i < G__46306__a.length) {G__46306__a[G__46306__i] = arguments[G__46306__i + 0]; ++G__46306__i;}
  args = new cljs.core.IndexedSeq(G__46306__a,0);
} 
return G__46305__delegate.call(this,args);};
G__46305.cljs$lang$maxFixedArity = 0;
G__46305.cljs$lang$applyTo = (function (arglist__46307){
var args = cljs.core.seq(arglist__46307);
return G__46305__delegate(args);
});
G__46305.cljs$core$IFn$_invoke$arity$variadic = G__46305__delegate;
return G__46305;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46309 = cljs.core._EQ_;
var expr__46310 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46309.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46310))){
var path_parts = ((function (pred__46309,expr__46310){
return (function (p1__46308_SHARP_){
return clojure.string.split.call(null,p1__46308_SHARP_,/[\/\\]/);
});})(pred__46309,expr__46310))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__46309,expr__46310){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e46312){if((e46312 instanceof Error)){
var e = e46312;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46312;

}
}})());
});
;})(path_parts,sep,root,pred__46309,expr__46310))
} else {
if(cljs.core.truth_(pred__46309.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46310))){
return ((function (pred__46309,expr__46310){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__46309,expr__46310){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__46309,expr__46310))
);

return deferred.addErrback(((function (deferred,pred__46309,expr__46310){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__46309,expr__46310))
);
});
;})(pred__46309,expr__46310))
} else {
return ((function (pred__46309,expr__46310){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46309,expr__46310))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46313,callback){
var map__46316 = p__46313;
var map__46316__$1 = ((((!((map__46316 == null)))?((((map__46316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46316):map__46316);
var file_msg = map__46316__$1;
var request_url = cljs.core.get.call(null,map__46316__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46316,map__46316__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46316,map__46316__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__){
return (function (state_46340){
var state_val_46341 = (state_46340[(1)]);
if((state_val_46341 === (7))){
var inst_46336 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
var statearr_46342_46362 = state_46340__$1;
(statearr_46342_46362[(2)] = inst_46336);

(statearr_46342_46362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (1))){
var state_46340__$1 = state_46340;
var statearr_46343_46363 = state_46340__$1;
(statearr_46343_46363[(2)] = null);

(statearr_46343_46363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (4))){
var inst_46320 = (state_46340[(7)]);
var inst_46320__$1 = (state_46340[(2)]);
var state_46340__$1 = (function (){var statearr_46344 = state_46340;
(statearr_46344[(7)] = inst_46320__$1);

return statearr_46344;
})();
if(cljs.core.truth_(inst_46320__$1)){
var statearr_46345_46364 = state_46340__$1;
(statearr_46345_46364[(1)] = (5));

} else {
var statearr_46346_46365 = state_46340__$1;
(statearr_46346_46365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (6))){
var state_46340__$1 = state_46340;
var statearr_46347_46366 = state_46340__$1;
(statearr_46347_46366[(2)] = null);

(statearr_46347_46366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (3))){
var inst_46338 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46340__$1,inst_46338);
} else {
if((state_val_46341 === (2))){
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46340__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46341 === (11))){
var inst_46332 = (state_46340[(2)]);
var state_46340__$1 = (function (){var statearr_46348 = state_46340;
(statearr_46348[(8)] = inst_46332);

return statearr_46348;
})();
var statearr_46349_46367 = state_46340__$1;
(statearr_46349_46367[(2)] = null);

(statearr_46349_46367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (9))){
var inst_46324 = (state_46340[(9)]);
var inst_46326 = (state_46340[(10)]);
var inst_46328 = inst_46326.call(null,inst_46324);
var state_46340__$1 = state_46340;
var statearr_46350_46368 = state_46340__$1;
(statearr_46350_46368[(2)] = inst_46328);

(statearr_46350_46368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (5))){
var inst_46320 = (state_46340[(7)]);
var inst_46322 = figwheel.client.file_reloading.blocking_load.call(null,inst_46320);
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46340__$1,(8),inst_46322);
} else {
if((state_val_46341 === (10))){
var inst_46324 = (state_46340[(9)]);
var inst_46330 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46324);
var state_46340__$1 = state_46340;
var statearr_46351_46369 = state_46340__$1;
(statearr_46351_46369[(2)] = inst_46330);

(statearr_46351_46369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (8))){
var inst_46326 = (state_46340[(10)]);
var inst_46320 = (state_46340[(7)]);
var inst_46324 = (state_46340[(2)]);
var inst_46325 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46326__$1 = cljs.core.get.call(null,inst_46325,inst_46320);
var state_46340__$1 = (function (){var statearr_46352 = state_46340;
(statearr_46352[(9)] = inst_46324);

(statearr_46352[(10)] = inst_46326__$1);

return statearr_46352;
})();
if(cljs.core.truth_(inst_46326__$1)){
var statearr_46353_46370 = state_46340__$1;
(statearr_46353_46370[(1)] = (9));

} else {
var statearr_46354_46371 = state_46340__$1;
(statearr_46354_46371[(1)] = (10));

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
});})(c__20164__auto__))
;
return ((function (switch__20099__auto__,c__20164__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20100__auto__ = null;
var figwheel$client$file_reloading$state_machine__20100__auto____0 = (function (){
var statearr_46358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46358[(0)] = figwheel$client$file_reloading$state_machine__20100__auto__);

(statearr_46358[(1)] = (1));

return statearr_46358;
});
var figwheel$client$file_reloading$state_machine__20100__auto____1 = (function (state_46340){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_46340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e46359){if((e46359 instanceof Object)){
var ex__20103__auto__ = e46359;
var statearr_46360_46372 = state_46340;
(statearr_46360_46372[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46373 = state_46340;
state_46340 = G__46373;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20100__auto__ = function(state_46340){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20100__auto____1.call(this,state_46340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20100__auto____0;
figwheel$client$file_reloading$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20100__auto____1;
return figwheel$client$file_reloading$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_46361 = f__20165__auto__.call(null);
(statearr_46361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_46361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__))
);

return c__20164__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46374,callback){
var map__46377 = p__46374;
var map__46377__$1 = ((((!((map__46377 == null)))?((((map__46377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46377):map__46377);
var file_msg = map__46377__$1;
var namespace = cljs.core.get.call(null,map__46377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46377,map__46377__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46377,map__46377__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46379){
var map__46382 = p__46379;
var map__46382__$1 = ((((!((map__46382 == null)))?((((map__46382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46382):map__46382);
var file_msg = map__46382__$1;
var namespace = cljs.core.get.call(null,map__46382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16320__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16320__auto__){
var or__16332__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var or__16332__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16332__auto____$1)){
return or__16332__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16320__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46384,callback){
var map__46387 = p__46384;
var map__46387__$1 = ((((!((map__46387 == null)))?((((map__46387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46387):map__46387);
var file_msg = map__46387__$1;
var request_url = cljs.core.get.call(null,map__46387__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46387__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20164__auto___46475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___46475,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___46475,out){
return (function (state_46457){
var state_val_46458 = (state_46457[(1)]);
if((state_val_46458 === (1))){
var inst_46435 = cljs.core.nth.call(null,files,(0),null);
var inst_46436 = cljs.core.nthnext.call(null,files,(1));
var inst_46437 = files;
var state_46457__$1 = (function (){var statearr_46459 = state_46457;
(statearr_46459[(7)] = inst_46437);

(statearr_46459[(8)] = inst_46435);

(statearr_46459[(9)] = inst_46436);

return statearr_46459;
})();
var statearr_46460_46476 = state_46457__$1;
(statearr_46460_46476[(2)] = null);

(statearr_46460_46476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46458 === (2))){
var inst_46440 = (state_46457[(10)]);
var inst_46437 = (state_46457[(7)]);
var inst_46440__$1 = cljs.core.nth.call(null,inst_46437,(0),null);
var inst_46441 = cljs.core.nthnext.call(null,inst_46437,(1));
var inst_46442 = (inst_46440__$1 == null);
var inst_46443 = cljs.core.not.call(null,inst_46442);
var state_46457__$1 = (function (){var statearr_46461 = state_46457;
(statearr_46461[(10)] = inst_46440__$1);

(statearr_46461[(11)] = inst_46441);

return statearr_46461;
})();
if(inst_46443){
var statearr_46462_46477 = state_46457__$1;
(statearr_46462_46477[(1)] = (4));

} else {
var statearr_46463_46478 = state_46457__$1;
(statearr_46463_46478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46458 === (3))){
var inst_46455 = (state_46457[(2)]);
var state_46457__$1 = state_46457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46457__$1,inst_46455);
} else {
if((state_val_46458 === (4))){
var inst_46440 = (state_46457[(10)]);
var inst_46445 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46440);
var state_46457__$1 = state_46457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46457__$1,(7),inst_46445);
} else {
if((state_val_46458 === (5))){
var inst_46451 = cljs.core.async.close_BANG_.call(null,out);
var state_46457__$1 = state_46457;
var statearr_46464_46479 = state_46457__$1;
(statearr_46464_46479[(2)] = inst_46451);

(statearr_46464_46479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46458 === (6))){
var inst_46453 = (state_46457[(2)]);
var state_46457__$1 = state_46457;
var statearr_46465_46480 = state_46457__$1;
(statearr_46465_46480[(2)] = inst_46453);

(statearr_46465_46480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46458 === (7))){
var inst_46441 = (state_46457[(11)]);
var inst_46447 = (state_46457[(2)]);
var inst_46448 = cljs.core.async.put_BANG_.call(null,out,inst_46447);
var inst_46437 = inst_46441;
var state_46457__$1 = (function (){var statearr_46466 = state_46457;
(statearr_46466[(7)] = inst_46437);

(statearr_46466[(12)] = inst_46448);

return statearr_46466;
})();
var statearr_46467_46481 = state_46457__$1;
(statearr_46467_46481[(2)] = null);

(statearr_46467_46481[(1)] = (2));


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
});})(c__20164__auto___46475,out))
;
return ((function (switch__20099__auto__,c__20164__auto___46475,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____0 = (function (){
var statearr_46471 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46471[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__);

(statearr_46471[(1)] = (1));

return statearr_46471;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____1 = (function (state_46457){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_46457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e46472){if((e46472 instanceof Object)){
var ex__20103__auto__ = e46472;
var statearr_46473_46482 = state_46457;
(statearr_46473_46482[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46483 = state_46457;
state_46457 = G__46483;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__ = function(state_46457){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____1.call(this,state_46457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___46475,out))
})();
var state__20166__auto__ = (function (){var statearr_46474 = f__20165__auto__.call(null);
(statearr_46474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___46475);

return statearr_46474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___46475,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46484,opts){
var map__46488 = p__46484;
var map__46488__$1 = ((((!((map__46488 == null)))?((((map__46488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46488):map__46488);
var eval_body__$1 = cljs.core.get.call(null,map__46488__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46488__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16320__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16320__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16320__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46490){var e = e46490;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__46491_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46491_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__46496){
var vec__46497 = p__46496;
var k = cljs.core.nth.call(null,vec__46497,(0),null);
var v = cljs.core.nth.call(null,vec__46497,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46498){
var vec__46499 = p__46498;
var k = cljs.core.nth.call(null,vec__46499,(0),null);
var v = cljs.core.nth.call(null,vec__46499,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46503,p__46504){
var map__46751 = p__46503;
var map__46751__$1 = ((((!((map__46751 == null)))?((((map__46751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46751):map__46751);
var opts = map__46751__$1;
var before_jsload = cljs.core.get.call(null,map__46751__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46751__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46751__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46752 = p__46504;
var map__46752__$1 = ((((!((map__46752 == null)))?((((map__46752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46752):map__46752);
var msg = map__46752__$1;
var files = cljs.core.get.call(null,map__46752__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46752__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46752__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46905){
var state_val_46906 = (state_46905[(1)]);
if((state_val_46906 === (7))){
var inst_46766 = (state_46905[(7)]);
var inst_46767 = (state_46905[(8)]);
var inst_46769 = (state_46905[(9)]);
var inst_46768 = (state_46905[(10)]);
var inst_46774 = cljs.core._nth.call(null,inst_46767,inst_46769);
var inst_46775 = figwheel.client.file_reloading.eval_body.call(null,inst_46774,opts);
var inst_46776 = (inst_46769 + (1));
var tmp46907 = inst_46766;
var tmp46908 = inst_46767;
var tmp46909 = inst_46768;
var inst_46766__$1 = tmp46907;
var inst_46767__$1 = tmp46908;
var inst_46768__$1 = tmp46909;
var inst_46769__$1 = inst_46776;
var state_46905__$1 = (function (){var statearr_46910 = state_46905;
(statearr_46910[(7)] = inst_46766__$1);

(statearr_46910[(8)] = inst_46767__$1);

(statearr_46910[(9)] = inst_46769__$1);

(statearr_46910[(11)] = inst_46775);

(statearr_46910[(10)] = inst_46768__$1);

return statearr_46910;
})();
var statearr_46911_46997 = state_46905__$1;
(statearr_46911_46997[(2)] = null);

(statearr_46911_46997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (20))){
var inst_46809 = (state_46905[(12)]);
var inst_46817 = figwheel.client.file_reloading.sort_files.call(null,inst_46809);
var state_46905__$1 = state_46905;
var statearr_46912_46998 = state_46905__$1;
(statearr_46912_46998[(2)] = inst_46817);

(statearr_46912_46998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (27))){
var state_46905__$1 = state_46905;
var statearr_46913_46999 = state_46905__$1;
(statearr_46913_46999[(2)] = null);

(statearr_46913_46999[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (1))){
var inst_46758 = (state_46905[(13)]);
var inst_46755 = before_jsload.call(null,files);
var inst_46756 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46757 = (function (){return ((function (inst_46758,inst_46755,inst_46756,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46500_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46500_SHARP_);
});
;})(inst_46758,inst_46755,inst_46756,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46758__$1 = cljs.core.filter.call(null,inst_46757,files);
var inst_46759 = cljs.core.not_empty.call(null,inst_46758__$1);
var state_46905__$1 = (function (){var statearr_46914 = state_46905;
(statearr_46914[(13)] = inst_46758__$1);

(statearr_46914[(14)] = inst_46755);

(statearr_46914[(15)] = inst_46756);

return statearr_46914;
})();
if(cljs.core.truth_(inst_46759)){
var statearr_46915_47000 = state_46905__$1;
(statearr_46915_47000[(1)] = (2));

} else {
var statearr_46916_47001 = state_46905__$1;
(statearr_46916_47001[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (24))){
var state_46905__$1 = state_46905;
var statearr_46917_47002 = state_46905__$1;
(statearr_46917_47002[(2)] = null);

(statearr_46917_47002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (39))){
var inst_46859 = (state_46905[(16)]);
var state_46905__$1 = state_46905;
var statearr_46918_47003 = state_46905__$1;
(statearr_46918_47003[(2)] = inst_46859);

(statearr_46918_47003[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (46))){
var inst_46900 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46919_47004 = state_46905__$1;
(statearr_46919_47004[(2)] = inst_46900);

(statearr_46919_47004[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (4))){
var inst_46803 = (state_46905[(2)]);
var inst_46804 = cljs.core.List.EMPTY;
var inst_46805 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46804);
var inst_46806 = (function (){return ((function (inst_46803,inst_46804,inst_46805,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46501_SHARP_){
var and__16320__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46501_SHARP_);
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46501_SHARP_));
} else {
return and__16320__auto__;
}
});
;})(inst_46803,inst_46804,inst_46805,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46807 = cljs.core.filter.call(null,inst_46806,files);
var inst_46808 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46809 = cljs.core.concat.call(null,inst_46807,inst_46808);
var state_46905__$1 = (function (){var statearr_46920 = state_46905;
(statearr_46920[(12)] = inst_46809);

(statearr_46920[(17)] = inst_46805);

(statearr_46920[(18)] = inst_46803);

return statearr_46920;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46921_47005 = state_46905__$1;
(statearr_46921_47005[(1)] = (16));

} else {
var statearr_46922_47006 = state_46905__$1;
(statearr_46922_47006[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (15))){
var inst_46793 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46923_47007 = state_46905__$1;
(statearr_46923_47007[(2)] = inst_46793);

(statearr_46923_47007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (21))){
var inst_46819 = (state_46905[(19)]);
var inst_46819__$1 = (state_46905[(2)]);
var inst_46820 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46819__$1);
var state_46905__$1 = (function (){var statearr_46924 = state_46905;
(statearr_46924[(19)] = inst_46819__$1);

return statearr_46924;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46905__$1,(22),inst_46820);
} else {
if((state_val_46906 === (31))){
var inst_46903 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46905__$1,inst_46903);
} else {
if((state_val_46906 === (32))){
var inst_46859 = (state_46905[(16)]);
var inst_46864 = inst_46859.cljs$lang$protocol_mask$partition0$;
var inst_46865 = (inst_46864 & (64));
var inst_46866 = inst_46859.cljs$core$ISeq$;
var inst_46867 = (inst_46865) || (inst_46866);
var state_46905__$1 = state_46905;
if(cljs.core.truth_(inst_46867)){
var statearr_46925_47008 = state_46905__$1;
(statearr_46925_47008[(1)] = (35));

} else {
var statearr_46926_47009 = state_46905__$1;
(statearr_46926_47009[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (40))){
var inst_46880 = (state_46905[(20)]);
var inst_46879 = (state_46905[(2)]);
var inst_46880__$1 = cljs.core.get.call(null,inst_46879,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46881 = cljs.core.get.call(null,inst_46879,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46882 = cljs.core.not_empty.call(null,inst_46880__$1);
var state_46905__$1 = (function (){var statearr_46927 = state_46905;
(statearr_46927[(21)] = inst_46881);

(statearr_46927[(20)] = inst_46880__$1);

return statearr_46927;
})();
if(cljs.core.truth_(inst_46882)){
var statearr_46928_47010 = state_46905__$1;
(statearr_46928_47010[(1)] = (41));

} else {
var statearr_46929_47011 = state_46905__$1;
(statearr_46929_47011[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (33))){
var state_46905__$1 = state_46905;
var statearr_46930_47012 = state_46905__$1;
(statearr_46930_47012[(2)] = false);

(statearr_46930_47012[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (13))){
var inst_46779 = (state_46905[(22)]);
var inst_46783 = cljs.core.chunk_first.call(null,inst_46779);
var inst_46784 = cljs.core.chunk_rest.call(null,inst_46779);
var inst_46785 = cljs.core.count.call(null,inst_46783);
var inst_46766 = inst_46784;
var inst_46767 = inst_46783;
var inst_46768 = inst_46785;
var inst_46769 = (0);
var state_46905__$1 = (function (){var statearr_46931 = state_46905;
(statearr_46931[(7)] = inst_46766);

(statearr_46931[(8)] = inst_46767);

(statearr_46931[(9)] = inst_46769);

(statearr_46931[(10)] = inst_46768);

return statearr_46931;
})();
var statearr_46932_47013 = state_46905__$1;
(statearr_46932_47013[(2)] = null);

(statearr_46932_47013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (22))){
var inst_46827 = (state_46905[(23)]);
var inst_46822 = (state_46905[(24)]);
var inst_46819 = (state_46905[(19)]);
var inst_46823 = (state_46905[(25)]);
var inst_46822__$1 = (state_46905[(2)]);
var inst_46823__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46822__$1);
var inst_46824 = (function (){var all_files = inst_46819;
var res_SINGLEQUOTE_ = inst_46822__$1;
var res = inst_46823__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46827,inst_46822,inst_46819,inst_46823,inst_46822__$1,inst_46823__$1,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46502_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46502_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46827,inst_46822,inst_46819,inst_46823,inst_46822__$1,inst_46823__$1,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46825 = cljs.core.filter.call(null,inst_46824,inst_46822__$1);
var inst_46826 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46827__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46826);
var inst_46828 = cljs.core.not_empty.call(null,inst_46827__$1);
var state_46905__$1 = (function (){var statearr_46933 = state_46905;
(statearr_46933[(26)] = inst_46825);

(statearr_46933[(23)] = inst_46827__$1);

(statearr_46933[(24)] = inst_46822__$1);

(statearr_46933[(25)] = inst_46823__$1);

return statearr_46933;
})();
if(cljs.core.truth_(inst_46828)){
var statearr_46934_47014 = state_46905__$1;
(statearr_46934_47014[(1)] = (23));

} else {
var statearr_46935_47015 = state_46905__$1;
(statearr_46935_47015[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (36))){
var state_46905__$1 = state_46905;
var statearr_46936_47016 = state_46905__$1;
(statearr_46936_47016[(2)] = false);

(statearr_46936_47016[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (41))){
var inst_46880 = (state_46905[(20)]);
var inst_46884 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46885 = cljs.core.map.call(null,inst_46884,inst_46880);
var inst_46886 = cljs.core.pr_str.call(null,inst_46885);
var inst_46887 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_46886)].join('');
var inst_46888 = figwheel.client.utils.log.call(null,inst_46887);
var state_46905__$1 = state_46905;
var statearr_46937_47017 = state_46905__$1;
(statearr_46937_47017[(2)] = inst_46888);

(statearr_46937_47017[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (43))){
var inst_46881 = (state_46905[(21)]);
var inst_46891 = (state_46905[(2)]);
var inst_46892 = cljs.core.not_empty.call(null,inst_46881);
var state_46905__$1 = (function (){var statearr_46938 = state_46905;
(statearr_46938[(27)] = inst_46891);

return statearr_46938;
})();
if(cljs.core.truth_(inst_46892)){
var statearr_46939_47018 = state_46905__$1;
(statearr_46939_47018[(1)] = (44));

} else {
var statearr_46940_47019 = state_46905__$1;
(statearr_46940_47019[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (29))){
var inst_46825 = (state_46905[(26)]);
var inst_46827 = (state_46905[(23)]);
var inst_46859 = (state_46905[(16)]);
var inst_46822 = (state_46905[(24)]);
var inst_46819 = (state_46905[(19)]);
var inst_46823 = (state_46905[(25)]);
var inst_46855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46858 = (function (){var all_files = inst_46819;
var res_SINGLEQUOTE_ = inst_46822;
var res = inst_46823;
var files_not_loaded = inst_46825;
var dependencies_that_loaded = inst_46827;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46825,inst_46827,inst_46859,inst_46822,inst_46819,inst_46823,inst_46855,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46857){
var map__46941 = p__46857;
var map__46941__$1 = ((((!((map__46941 == null)))?((((map__46941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46941):map__46941);
var namespace = cljs.core.get.call(null,map__46941__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46825,inst_46827,inst_46859,inst_46822,inst_46819,inst_46823,inst_46855,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46859__$1 = cljs.core.group_by.call(null,inst_46858,inst_46825);
var inst_46861 = (inst_46859__$1 == null);
var inst_46862 = cljs.core.not.call(null,inst_46861);
var state_46905__$1 = (function (){var statearr_46943 = state_46905;
(statearr_46943[(28)] = inst_46855);

(statearr_46943[(16)] = inst_46859__$1);

return statearr_46943;
})();
if(inst_46862){
var statearr_46944_47020 = state_46905__$1;
(statearr_46944_47020[(1)] = (32));

} else {
var statearr_46945_47021 = state_46905__$1;
(statearr_46945_47021[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (44))){
var inst_46881 = (state_46905[(21)]);
var inst_46894 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46881);
var inst_46895 = cljs.core.pr_str.call(null,inst_46894);
var inst_46896 = [cljs.core.str("not required: "),cljs.core.str(inst_46895)].join('');
var inst_46897 = figwheel.client.utils.log.call(null,inst_46896);
var state_46905__$1 = state_46905;
var statearr_46946_47022 = state_46905__$1;
(statearr_46946_47022[(2)] = inst_46897);

(statearr_46946_47022[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (6))){
var inst_46800 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46947_47023 = state_46905__$1;
(statearr_46947_47023[(2)] = inst_46800);

(statearr_46947_47023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (28))){
var inst_46825 = (state_46905[(26)]);
var inst_46852 = (state_46905[(2)]);
var inst_46853 = cljs.core.not_empty.call(null,inst_46825);
var state_46905__$1 = (function (){var statearr_46948 = state_46905;
(statearr_46948[(29)] = inst_46852);

return statearr_46948;
})();
if(cljs.core.truth_(inst_46853)){
var statearr_46949_47024 = state_46905__$1;
(statearr_46949_47024[(1)] = (29));

} else {
var statearr_46950_47025 = state_46905__$1;
(statearr_46950_47025[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (25))){
var inst_46823 = (state_46905[(25)]);
var inst_46839 = (state_46905[(2)]);
var inst_46840 = cljs.core.not_empty.call(null,inst_46823);
var state_46905__$1 = (function (){var statearr_46951 = state_46905;
(statearr_46951[(30)] = inst_46839);

return statearr_46951;
})();
if(cljs.core.truth_(inst_46840)){
var statearr_46952_47026 = state_46905__$1;
(statearr_46952_47026[(1)] = (26));

} else {
var statearr_46953_47027 = state_46905__$1;
(statearr_46953_47027[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (34))){
var inst_46874 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
if(cljs.core.truth_(inst_46874)){
var statearr_46954_47028 = state_46905__$1;
(statearr_46954_47028[(1)] = (38));

} else {
var statearr_46955_47029 = state_46905__$1;
(statearr_46955_47029[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (17))){
var state_46905__$1 = state_46905;
var statearr_46956_47030 = state_46905__$1;
(statearr_46956_47030[(2)] = recompile_dependents);

(statearr_46956_47030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (3))){
var state_46905__$1 = state_46905;
var statearr_46957_47031 = state_46905__$1;
(statearr_46957_47031[(2)] = null);

(statearr_46957_47031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (12))){
var inst_46796 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46958_47032 = state_46905__$1;
(statearr_46958_47032[(2)] = inst_46796);

(statearr_46958_47032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (2))){
var inst_46758 = (state_46905[(13)]);
var inst_46765 = cljs.core.seq.call(null,inst_46758);
var inst_46766 = inst_46765;
var inst_46767 = null;
var inst_46768 = (0);
var inst_46769 = (0);
var state_46905__$1 = (function (){var statearr_46959 = state_46905;
(statearr_46959[(7)] = inst_46766);

(statearr_46959[(8)] = inst_46767);

(statearr_46959[(9)] = inst_46769);

(statearr_46959[(10)] = inst_46768);

return statearr_46959;
})();
var statearr_46960_47033 = state_46905__$1;
(statearr_46960_47033[(2)] = null);

(statearr_46960_47033[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (23))){
var inst_46825 = (state_46905[(26)]);
var inst_46827 = (state_46905[(23)]);
var inst_46822 = (state_46905[(24)]);
var inst_46819 = (state_46905[(19)]);
var inst_46823 = (state_46905[(25)]);
var inst_46830 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46832 = (function (){var all_files = inst_46819;
var res_SINGLEQUOTE_ = inst_46822;
var res = inst_46823;
var files_not_loaded = inst_46825;
var dependencies_that_loaded = inst_46827;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46825,inst_46827,inst_46822,inst_46819,inst_46823,inst_46830,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46831){
var map__46961 = p__46831;
var map__46961__$1 = ((((!((map__46961 == null)))?((((map__46961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46961):map__46961);
var request_url = cljs.core.get.call(null,map__46961__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46825,inst_46827,inst_46822,inst_46819,inst_46823,inst_46830,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46833 = cljs.core.reverse.call(null,inst_46827);
var inst_46834 = cljs.core.map.call(null,inst_46832,inst_46833);
var inst_46835 = cljs.core.pr_str.call(null,inst_46834);
var inst_46836 = figwheel.client.utils.log.call(null,inst_46835);
var state_46905__$1 = (function (){var statearr_46963 = state_46905;
(statearr_46963[(31)] = inst_46830);

return statearr_46963;
})();
var statearr_46964_47034 = state_46905__$1;
(statearr_46964_47034[(2)] = inst_46836);

(statearr_46964_47034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (35))){
var state_46905__$1 = state_46905;
var statearr_46965_47035 = state_46905__$1;
(statearr_46965_47035[(2)] = true);

(statearr_46965_47035[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (19))){
var inst_46809 = (state_46905[(12)]);
var inst_46815 = figwheel.client.file_reloading.expand_files.call(null,inst_46809);
var state_46905__$1 = state_46905;
var statearr_46966_47036 = state_46905__$1;
(statearr_46966_47036[(2)] = inst_46815);

(statearr_46966_47036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (11))){
var state_46905__$1 = state_46905;
var statearr_46967_47037 = state_46905__$1;
(statearr_46967_47037[(2)] = null);

(statearr_46967_47037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (9))){
var inst_46798 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46968_47038 = state_46905__$1;
(statearr_46968_47038[(2)] = inst_46798);

(statearr_46968_47038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (5))){
var inst_46769 = (state_46905[(9)]);
var inst_46768 = (state_46905[(10)]);
var inst_46771 = (inst_46769 < inst_46768);
var inst_46772 = inst_46771;
var state_46905__$1 = state_46905;
if(cljs.core.truth_(inst_46772)){
var statearr_46969_47039 = state_46905__$1;
(statearr_46969_47039[(1)] = (7));

} else {
var statearr_46970_47040 = state_46905__$1;
(statearr_46970_47040[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (14))){
var inst_46779 = (state_46905[(22)]);
var inst_46788 = cljs.core.first.call(null,inst_46779);
var inst_46789 = figwheel.client.file_reloading.eval_body.call(null,inst_46788,opts);
var inst_46790 = cljs.core.next.call(null,inst_46779);
var inst_46766 = inst_46790;
var inst_46767 = null;
var inst_46768 = (0);
var inst_46769 = (0);
var state_46905__$1 = (function (){var statearr_46971 = state_46905;
(statearr_46971[(7)] = inst_46766);

(statearr_46971[(8)] = inst_46767);

(statearr_46971[(9)] = inst_46769);

(statearr_46971[(32)] = inst_46789);

(statearr_46971[(10)] = inst_46768);

return statearr_46971;
})();
var statearr_46972_47041 = state_46905__$1;
(statearr_46972_47041[(2)] = null);

(statearr_46972_47041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (45))){
var state_46905__$1 = state_46905;
var statearr_46973_47042 = state_46905__$1;
(statearr_46973_47042[(2)] = null);

(statearr_46973_47042[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (26))){
var inst_46825 = (state_46905[(26)]);
var inst_46827 = (state_46905[(23)]);
var inst_46822 = (state_46905[(24)]);
var inst_46819 = (state_46905[(19)]);
var inst_46823 = (state_46905[(25)]);
var inst_46842 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46844 = (function (){var all_files = inst_46819;
var res_SINGLEQUOTE_ = inst_46822;
var res = inst_46823;
var files_not_loaded = inst_46825;
var dependencies_that_loaded = inst_46827;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46825,inst_46827,inst_46822,inst_46819,inst_46823,inst_46842,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46843){
var map__46974 = p__46843;
var map__46974__$1 = ((((!((map__46974 == null)))?((((map__46974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46974):map__46974);
var namespace = cljs.core.get.call(null,map__46974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46825,inst_46827,inst_46822,inst_46819,inst_46823,inst_46842,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46845 = cljs.core.map.call(null,inst_46844,inst_46823);
var inst_46846 = cljs.core.pr_str.call(null,inst_46845);
var inst_46847 = figwheel.client.utils.log.call(null,inst_46846);
var inst_46848 = (function (){var all_files = inst_46819;
var res_SINGLEQUOTE_ = inst_46822;
var res = inst_46823;
var files_not_loaded = inst_46825;
var dependencies_that_loaded = inst_46827;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46825,inst_46827,inst_46822,inst_46819,inst_46823,inst_46842,inst_46844,inst_46845,inst_46846,inst_46847,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46825,inst_46827,inst_46822,inst_46819,inst_46823,inst_46842,inst_46844,inst_46845,inst_46846,inst_46847,state_val_46906,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46849 = setTimeout(inst_46848,(10));
var state_46905__$1 = (function (){var statearr_46976 = state_46905;
(statearr_46976[(33)] = inst_46847);

(statearr_46976[(34)] = inst_46842);

return statearr_46976;
})();
var statearr_46977_47043 = state_46905__$1;
(statearr_46977_47043[(2)] = inst_46849);

(statearr_46977_47043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (16))){
var state_46905__$1 = state_46905;
var statearr_46978_47044 = state_46905__$1;
(statearr_46978_47044[(2)] = reload_dependents);

(statearr_46978_47044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (38))){
var inst_46859 = (state_46905[(16)]);
var inst_46876 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46859);
var state_46905__$1 = state_46905;
var statearr_46979_47045 = state_46905__$1;
(statearr_46979_47045[(2)] = inst_46876);

(statearr_46979_47045[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (30))){
var state_46905__$1 = state_46905;
var statearr_46980_47046 = state_46905__$1;
(statearr_46980_47046[(2)] = null);

(statearr_46980_47046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (10))){
var inst_46779 = (state_46905[(22)]);
var inst_46781 = cljs.core.chunked_seq_QMARK_.call(null,inst_46779);
var state_46905__$1 = state_46905;
if(inst_46781){
var statearr_46981_47047 = state_46905__$1;
(statearr_46981_47047[(1)] = (13));

} else {
var statearr_46982_47048 = state_46905__$1;
(statearr_46982_47048[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (18))){
var inst_46813 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
if(cljs.core.truth_(inst_46813)){
var statearr_46983_47049 = state_46905__$1;
(statearr_46983_47049[(1)] = (19));

} else {
var statearr_46984_47050 = state_46905__$1;
(statearr_46984_47050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (42))){
var state_46905__$1 = state_46905;
var statearr_46985_47051 = state_46905__$1;
(statearr_46985_47051[(2)] = null);

(statearr_46985_47051[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (37))){
var inst_46871 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46986_47052 = state_46905__$1;
(statearr_46986_47052[(2)] = inst_46871);

(statearr_46986_47052[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (8))){
var inst_46766 = (state_46905[(7)]);
var inst_46779 = (state_46905[(22)]);
var inst_46779__$1 = cljs.core.seq.call(null,inst_46766);
var state_46905__$1 = (function (){var statearr_46987 = state_46905;
(statearr_46987[(22)] = inst_46779__$1);

return statearr_46987;
})();
if(inst_46779__$1){
var statearr_46988_47053 = state_46905__$1;
(statearr_46988_47053[(1)] = (10));

} else {
var statearr_46989_47054 = state_46905__$1;
(statearr_46989_47054[(1)] = (11));

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
}
});})(c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20099__auto__,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____0 = (function (){
var statearr_46993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46993[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__);

(statearr_46993[(1)] = (1));

return statearr_46993;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____1 = (function (state_46905){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_46905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e46994){if((e46994 instanceof Object)){
var ex__20103__auto__ = e46994;
var statearr_46995_47055 = state_46905;
(statearr_46995_47055[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47056 = state_46905;
state_46905 = G__47056;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__ = function(state_46905){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____1.call(this,state_46905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20166__auto__ = (function (){var statearr_46996 = f__20165__auto__.call(null);
(statearr_46996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_46996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__,map__46751,map__46751__$1,opts,before_jsload,on_jsload,reload_dependents,map__46752,map__46752__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20164__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47059,link){
var map__47062 = p__47059;
var map__47062__$1 = ((((!((map__47062 == null)))?((((map__47062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47062):map__47062);
var file = cljs.core.get.call(null,map__47062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__47062,map__47062__$1,file){
return (function (p1__47057_SHARP_,p2__47058_SHARP_){
if(cljs.core._EQ_.call(null,p1__47057_SHARP_,p2__47058_SHARP_)){
return p1__47057_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__47062,map__47062__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47068){
var map__47069 = p__47068;
var map__47069__$1 = ((((!((map__47069 == null)))?((((map__47069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47069):map__47069);
var match_length = cljs.core.get.call(null,map__47069__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47069__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47064_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47064_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args47071 = [];
var len__17390__auto___47074 = arguments.length;
var i__17391__auto___47075 = (0);
while(true){
if((i__17391__auto___47075 < len__17390__auto___47074)){
args47071.push((arguments[i__17391__auto___47075]));

var G__47076 = (i__17391__auto___47075 + (1));
i__17391__auto___47075 = G__47076;
continue;
} else {
}
break;
}

var G__47073 = args47071.length;
switch (G__47073) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47071.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47078_SHARP_,p2__47079_SHARP_){
return cljs.core.assoc.call(null,p1__47078_SHARP_,cljs.core.get.call(null,p2__47079_SHARP_,key),p2__47079_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__47080){
var map__47083 = p__47080;
var map__47083__$1 = ((((!((map__47083 == null)))?((((map__47083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47083):map__47083);
var f_data = map__47083__$1;
var file = cljs.core.get.call(null,map__47083__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47085,files_msg){
var map__47092 = p__47085;
var map__47092__$1 = ((((!((map__47092 == null)))?((((map__47092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47092):map__47092);
var opts = map__47092__$1;
var on_cssload = cljs.core.get.call(null,map__47092__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__47094_47098 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__47095_47099 = null;
var count__47096_47100 = (0);
var i__47097_47101 = (0);
while(true){
if((i__47097_47101 < count__47096_47100)){
var f_47102 = cljs.core._nth.call(null,chunk__47095_47099,i__47097_47101);
figwheel.client.file_reloading.reload_css_file.call(null,f_47102);

var G__47103 = seq__47094_47098;
var G__47104 = chunk__47095_47099;
var G__47105 = count__47096_47100;
var G__47106 = (i__47097_47101 + (1));
seq__47094_47098 = G__47103;
chunk__47095_47099 = G__47104;
count__47096_47100 = G__47105;
i__47097_47101 = G__47106;
continue;
} else {
var temp__4425__auto___47107 = cljs.core.seq.call(null,seq__47094_47098);
if(temp__4425__auto___47107){
var seq__47094_47108__$1 = temp__4425__auto___47107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47094_47108__$1)){
var c__17135__auto___47109 = cljs.core.chunk_first.call(null,seq__47094_47108__$1);
var G__47110 = cljs.core.chunk_rest.call(null,seq__47094_47108__$1);
var G__47111 = c__17135__auto___47109;
var G__47112 = cljs.core.count.call(null,c__17135__auto___47109);
var G__47113 = (0);
seq__47094_47098 = G__47110;
chunk__47095_47099 = G__47111;
count__47096_47100 = G__47112;
i__47097_47101 = G__47113;
continue;
} else {
var f_47114 = cljs.core.first.call(null,seq__47094_47108__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_47114);

var G__47115 = cljs.core.next.call(null,seq__47094_47108__$1);
var G__47116 = null;
var G__47117 = (0);
var G__47118 = (0);
seq__47094_47098 = G__47115;
chunk__47095_47099 = G__47116;
count__47096_47100 = G__47117;
i__47097_47101 = G__47118;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__47092,map__47092__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__47092,map__47092__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map