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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__65132_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__65132_SHARP_));
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
var seq__65137 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__65138 = null;
var count__65139 = (0);
var i__65140 = (0);
while(true){
if((i__65140 < count__65139)){
var n = cljs.core._nth.call(null,chunk__65138,i__65140);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65141 = seq__65137;
var G__65142 = chunk__65138;
var G__65143 = count__65139;
var G__65144 = (i__65140 + (1));
seq__65137 = G__65141;
chunk__65138 = G__65142;
count__65139 = G__65143;
i__65140 = G__65144;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__65137);
if(temp__4425__auto__){
var seq__65137__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65137__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__65137__$1);
var G__65145 = cljs.core.chunk_rest.call(null,seq__65137__$1);
var G__65146 = c__17135__auto__;
var G__65147 = cljs.core.count.call(null,c__17135__auto__);
var G__65148 = (0);
seq__65137 = G__65145;
chunk__65138 = G__65146;
count__65139 = G__65147;
i__65140 = G__65148;
continue;
} else {
var n = cljs.core.first.call(null,seq__65137__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65149 = cljs.core.next.call(null,seq__65137__$1);
var G__65150 = null;
var G__65151 = (0);
var G__65152 = (0);
seq__65137 = G__65149;
chunk__65138 = G__65150;
count__65139 = G__65151;
i__65140 = G__65152;
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

var seq__65191_65198 = cljs.core.seq.call(null,deps);
var chunk__65192_65199 = null;
var count__65193_65200 = (0);
var i__65194_65201 = (0);
while(true){
if((i__65194_65201 < count__65193_65200)){
var dep_65202 = cljs.core._nth.call(null,chunk__65192_65199,i__65194_65201);
topo_sort_helper_STAR_.call(null,dep_65202,(depth + (1)),state);

var G__65203 = seq__65191_65198;
var G__65204 = chunk__65192_65199;
var G__65205 = count__65193_65200;
var G__65206 = (i__65194_65201 + (1));
seq__65191_65198 = G__65203;
chunk__65192_65199 = G__65204;
count__65193_65200 = G__65205;
i__65194_65201 = G__65206;
continue;
} else {
var temp__4425__auto___65207 = cljs.core.seq.call(null,seq__65191_65198);
if(temp__4425__auto___65207){
var seq__65191_65208__$1 = temp__4425__auto___65207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65191_65208__$1)){
var c__17135__auto___65209 = cljs.core.chunk_first.call(null,seq__65191_65208__$1);
var G__65210 = cljs.core.chunk_rest.call(null,seq__65191_65208__$1);
var G__65211 = c__17135__auto___65209;
var G__65212 = cljs.core.count.call(null,c__17135__auto___65209);
var G__65213 = (0);
seq__65191_65198 = G__65210;
chunk__65192_65199 = G__65211;
count__65193_65200 = G__65212;
i__65194_65201 = G__65213;
continue;
} else {
var dep_65214 = cljs.core.first.call(null,seq__65191_65208__$1);
topo_sort_helper_STAR_.call(null,dep_65214,(depth + (1)),state);

var G__65215 = cljs.core.next.call(null,seq__65191_65208__$1);
var G__65216 = null;
var G__65217 = (0);
var G__65218 = (0);
seq__65191_65198 = G__65215;
chunk__65192_65199 = G__65216;
count__65193_65200 = G__65217;
i__65194_65201 = G__65218;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__65195){
var vec__65197 = p__65195;
var x = cljs.core.nth.call(null,vec__65197,(0),null);
var xs = cljs.core.nthnext.call(null,vec__65197,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__65197,x,xs,get_deps__$1){
return (function (p1__65153_SHARP_){
return clojure.set.difference.call(null,p1__65153_SHARP_,x);
});})(vec__65197,x,xs,get_deps__$1))
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
var seq__65231 = cljs.core.seq.call(null,provides);
var chunk__65232 = null;
var count__65233 = (0);
var i__65234 = (0);
while(true){
if((i__65234 < count__65233)){
var prov = cljs.core._nth.call(null,chunk__65232,i__65234);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65235_65243 = cljs.core.seq.call(null,requires);
var chunk__65236_65244 = null;
var count__65237_65245 = (0);
var i__65238_65246 = (0);
while(true){
if((i__65238_65246 < count__65237_65245)){
var req_65247 = cljs.core._nth.call(null,chunk__65236_65244,i__65238_65246);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65247,prov);

var G__65248 = seq__65235_65243;
var G__65249 = chunk__65236_65244;
var G__65250 = count__65237_65245;
var G__65251 = (i__65238_65246 + (1));
seq__65235_65243 = G__65248;
chunk__65236_65244 = G__65249;
count__65237_65245 = G__65250;
i__65238_65246 = G__65251;
continue;
} else {
var temp__4425__auto___65252 = cljs.core.seq.call(null,seq__65235_65243);
if(temp__4425__auto___65252){
var seq__65235_65253__$1 = temp__4425__auto___65252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65235_65253__$1)){
var c__17135__auto___65254 = cljs.core.chunk_first.call(null,seq__65235_65253__$1);
var G__65255 = cljs.core.chunk_rest.call(null,seq__65235_65253__$1);
var G__65256 = c__17135__auto___65254;
var G__65257 = cljs.core.count.call(null,c__17135__auto___65254);
var G__65258 = (0);
seq__65235_65243 = G__65255;
chunk__65236_65244 = G__65256;
count__65237_65245 = G__65257;
i__65238_65246 = G__65258;
continue;
} else {
var req_65259 = cljs.core.first.call(null,seq__65235_65253__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65259,prov);

var G__65260 = cljs.core.next.call(null,seq__65235_65253__$1);
var G__65261 = null;
var G__65262 = (0);
var G__65263 = (0);
seq__65235_65243 = G__65260;
chunk__65236_65244 = G__65261;
count__65237_65245 = G__65262;
i__65238_65246 = G__65263;
continue;
}
} else {
}
}
break;
}

var G__65264 = seq__65231;
var G__65265 = chunk__65232;
var G__65266 = count__65233;
var G__65267 = (i__65234 + (1));
seq__65231 = G__65264;
chunk__65232 = G__65265;
count__65233 = G__65266;
i__65234 = G__65267;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__65231);
if(temp__4425__auto__){
var seq__65231__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65231__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__65231__$1);
var G__65268 = cljs.core.chunk_rest.call(null,seq__65231__$1);
var G__65269 = c__17135__auto__;
var G__65270 = cljs.core.count.call(null,c__17135__auto__);
var G__65271 = (0);
seq__65231 = G__65268;
chunk__65232 = G__65269;
count__65233 = G__65270;
i__65234 = G__65271;
continue;
} else {
var prov = cljs.core.first.call(null,seq__65231__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65239_65272 = cljs.core.seq.call(null,requires);
var chunk__65240_65273 = null;
var count__65241_65274 = (0);
var i__65242_65275 = (0);
while(true){
if((i__65242_65275 < count__65241_65274)){
var req_65276 = cljs.core._nth.call(null,chunk__65240_65273,i__65242_65275);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65276,prov);

var G__65277 = seq__65239_65272;
var G__65278 = chunk__65240_65273;
var G__65279 = count__65241_65274;
var G__65280 = (i__65242_65275 + (1));
seq__65239_65272 = G__65277;
chunk__65240_65273 = G__65278;
count__65241_65274 = G__65279;
i__65242_65275 = G__65280;
continue;
} else {
var temp__4425__auto___65281__$1 = cljs.core.seq.call(null,seq__65239_65272);
if(temp__4425__auto___65281__$1){
var seq__65239_65282__$1 = temp__4425__auto___65281__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65239_65282__$1)){
var c__17135__auto___65283 = cljs.core.chunk_first.call(null,seq__65239_65282__$1);
var G__65284 = cljs.core.chunk_rest.call(null,seq__65239_65282__$1);
var G__65285 = c__17135__auto___65283;
var G__65286 = cljs.core.count.call(null,c__17135__auto___65283);
var G__65287 = (0);
seq__65239_65272 = G__65284;
chunk__65240_65273 = G__65285;
count__65241_65274 = G__65286;
i__65242_65275 = G__65287;
continue;
} else {
var req_65288 = cljs.core.first.call(null,seq__65239_65282__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65288,prov);

var G__65289 = cljs.core.next.call(null,seq__65239_65282__$1);
var G__65290 = null;
var G__65291 = (0);
var G__65292 = (0);
seq__65239_65272 = G__65289;
chunk__65240_65273 = G__65290;
count__65241_65274 = G__65291;
i__65242_65275 = G__65292;
continue;
}
} else {
}
}
break;
}

var G__65293 = cljs.core.next.call(null,seq__65231__$1);
var G__65294 = null;
var G__65295 = (0);
var G__65296 = (0);
seq__65231 = G__65293;
chunk__65232 = G__65294;
count__65233 = G__65295;
i__65234 = G__65296;
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
var seq__65301_65305 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__65302_65306 = null;
var count__65303_65307 = (0);
var i__65304_65308 = (0);
while(true){
if((i__65304_65308 < count__65303_65307)){
var ns_65309 = cljs.core._nth.call(null,chunk__65302_65306,i__65304_65308);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65309);

var G__65310 = seq__65301_65305;
var G__65311 = chunk__65302_65306;
var G__65312 = count__65303_65307;
var G__65313 = (i__65304_65308 + (1));
seq__65301_65305 = G__65310;
chunk__65302_65306 = G__65311;
count__65303_65307 = G__65312;
i__65304_65308 = G__65313;
continue;
} else {
var temp__4425__auto___65314 = cljs.core.seq.call(null,seq__65301_65305);
if(temp__4425__auto___65314){
var seq__65301_65315__$1 = temp__4425__auto___65314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65301_65315__$1)){
var c__17135__auto___65316 = cljs.core.chunk_first.call(null,seq__65301_65315__$1);
var G__65317 = cljs.core.chunk_rest.call(null,seq__65301_65315__$1);
var G__65318 = c__17135__auto___65316;
var G__65319 = cljs.core.count.call(null,c__17135__auto___65316);
var G__65320 = (0);
seq__65301_65305 = G__65317;
chunk__65302_65306 = G__65318;
count__65303_65307 = G__65319;
i__65304_65308 = G__65320;
continue;
} else {
var ns_65321 = cljs.core.first.call(null,seq__65301_65315__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65321);

var G__65322 = cljs.core.next.call(null,seq__65301_65315__$1);
var G__65323 = null;
var G__65324 = (0);
var G__65325 = (0);
seq__65301_65305 = G__65322;
chunk__65302_65306 = G__65323;
count__65303_65307 = G__65324;
i__65304_65308 = G__65325;
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
var G__65326__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__65326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65327__i = 0, G__65327__a = new Array(arguments.length -  0);
while (G__65327__i < G__65327__a.length) {G__65327__a[G__65327__i] = arguments[G__65327__i + 0]; ++G__65327__i;}
  args = new cljs.core.IndexedSeq(G__65327__a,0);
} 
return G__65326__delegate.call(this,args);};
G__65326.cljs$lang$maxFixedArity = 0;
G__65326.cljs$lang$applyTo = (function (arglist__65328){
var args = cljs.core.seq(arglist__65328);
return G__65326__delegate(args);
});
G__65326.cljs$core$IFn$_invoke$arity$variadic = G__65326__delegate;
return G__65326;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__65330 = cljs.core._EQ_;
var expr__65331 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__65330.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__65331))){
var path_parts = ((function (pred__65330,expr__65331){
return (function (p1__65329_SHARP_){
return clojure.string.split.call(null,p1__65329_SHARP_,/[\/\\]/);
});})(pred__65330,expr__65331))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__65330,expr__65331){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e65333){if((e65333 instanceof Error)){
var e = e65333;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65333;

}
}})());
});
;})(path_parts,sep,root,pred__65330,expr__65331))
} else {
if(cljs.core.truth_(pred__65330.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__65331))){
return ((function (pred__65330,expr__65331){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__65330,expr__65331){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__65330,expr__65331))
);

return deferred.addErrback(((function (deferred,pred__65330,expr__65331){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__65330,expr__65331))
);
});
;})(pred__65330,expr__65331))
} else {
return ((function (pred__65330,expr__65331){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__65330,expr__65331))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__65334,callback){
var map__65337 = p__65334;
var map__65337__$1 = ((((!((map__65337 == null)))?((((map__65337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65337):map__65337);
var file_msg = map__65337__$1;
var request_url = cljs.core.get.call(null,map__65337__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__65337,map__65337__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__65337,map__65337__$1,file_msg,request_url))
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
return (function (state_65361){
var state_val_65362 = (state_65361[(1)]);
if((state_val_65362 === (7))){
var inst_65357 = (state_65361[(2)]);
var state_65361__$1 = state_65361;
var statearr_65363_65383 = state_65361__$1;
(statearr_65363_65383[(2)] = inst_65357);

(statearr_65363_65383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65362 === (1))){
var state_65361__$1 = state_65361;
var statearr_65364_65384 = state_65361__$1;
(statearr_65364_65384[(2)] = null);

(statearr_65364_65384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65362 === (4))){
var inst_65341 = (state_65361[(7)]);
var inst_65341__$1 = (state_65361[(2)]);
var state_65361__$1 = (function (){var statearr_65365 = state_65361;
(statearr_65365[(7)] = inst_65341__$1);

return statearr_65365;
})();
if(cljs.core.truth_(inst_65341__$1)){
var statearr_65366_65385 = state_65361__$1;
(statearr_65366_65385[(1)] = (5));

} else {
var statearr_65367_65386 = state_65361__$1;
(statearr_65367_65386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65362 === (6))){
var state_65361__$1 = state_65361;
var statearr_65368_65387 = state_65361__$1;
(statearr_65368_65387[(2)] = null);

(statearr_65368_65387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65362 === (3))){
var inst_65359 = (state_65361[(2)]);
var state_65361__$1 = state_65361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65361__$1,inst_65359);
} else {
if((state_val_65362 === (2))){
var state_65361__$1 = state_65361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65361__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_65362 === (11))){
var inst_65353 = (state_65361[(2)]);
var state_65361__$1 = (function (){var statearr_65369 = state_65361;
(statearr_65369[(8)] = inst_65353);

return statearr_65369;
})();
var statearr_65370_65388 = state_65361__$1;
(statearr_65370_65388[(2)] = null);

(statearr_65370_65388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65362 === (9))){
var inst_65345 = (state_65361[(9)]);
var inst_65347 = (state_65361[(10)]);
var inst_65349 = inst_65347.call(null,inst_65345);
var state_65361__$1 = state_65361;
var statearr_65371_65389 = state_65361__$1;
(statearr_65371_65389[(2)] = inst_65349);

(statearr_65371_65389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65362 === (5))){
var inst_65341 = (state_65361[(7)]);
var inst_65343 = figwheel.client.file_reloading.blocking_load.call(null,inst_65341);
var state_65361__$1 = state_65361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65361__$1,(8),inst_65343);
} else {
if((state_val_65362 === (10))){
var inst_65345 = (state_65361[(9)]);
var inst_65351 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_65345);
var state_65361__$1 = state_65361;
var statearr_65372_65390 = state_65361__$1;
(statearr_65372_65390[(2)] = inst_65351);

(statearr_65372_65390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65362 === (8))){
var inst_65341 = (state_65361[(7)]);
var inst_65347 = (state_65361[(10)]);
var inst_65345 = (state_65361[(2)]);
var inst_65346 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_65347__$1 = cljs.core.get.call(null,inst_65346,inst_65341);
var state_65361__$1 = (function (){var statearr_65373 = state_65361;
(statearr_65373[(9)] = inst_65345);

(statearr_65373[(10)] = inst_65347__$1);

return statearr_65373;
})();
if(cljs.core.truth_(inst_65347__$1)){
var statearr_65374_65391 = state_65361__$1;
(statearr_65374_65391[(1)] = (9));

} else {
var statearr_65375_65392 = state_65361__$1;
(statearr_65375_65392[(1)] = (10));

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
var statearr_65379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65379[(0)] = figwheel$client$file_reloading$state_machine__20100__auto__);

(statearr_65379[(1)] = (1));

return statearr_65379;
});
var figwheel$client$file_reloading$state_machine__20100__auto____1 = (function (state_65361){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_65361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e65380){if((e65380 instanceof Object)){
var ex__20103__auto__ = e65380;
var statearr_65381_65393 = state_65361;
(statearr_65381_65393[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65394 = state_65361;
state_65361 = G__65394;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20100__auto__ = function(state_65361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20100__auto____1.call(this,state_65361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20100__auto____0;
figwheel$client$file_reloading$state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20100__auto____1;
return figwheel$client$file_reloading$state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__))
})();
var state__20166__auto__ = (function (){var statearr_65382 = f__20165__auto__.call(null);
(statearr_65382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_65382;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__65395,callback){
var map__65398 = p__65395;
var map__65398__$1 = ((((!((map__65398 == null)))?((((map__65398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65398):map__65398);
var file_msg = map__65398__$1;
var namespace = cljs.core.get.call(null,map__65398__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__65398,map__65398__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__65398,map__65398__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__65400){
var map__65403 = p__65400;
var map__65403__$1 = ((((!((map__65403 == null)))?((((map__65403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65403):map__65403);
var file_msg = map__65403__$1;
var namespace = cljs.core.get.call(null,map__65403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__65405,callback){
var map__65408 = p__65405;
var map__65408__$1 = ((((!((map__65408 == null)))?((((map__65408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65408):map__65408);
var file_msg = map__65408__$1;
var request_url = cljs.core.get.call(null,map__65408__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__65408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20164__auto___65496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto___65496,out){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto___65496,out){
return (function (state_65478){
var state_val_65479 = (state_65478[(1)]);
if((state_val_65479 === (1))){
var inst_65456 = cljs.core.nth.call(null,files,(0),null);
var inst_65457 = cljs.core.nthnext.call(null,files,(1));
var inst_65458 = files;
var state_65478__$1 = (function (){var statearr_65480 = state_65478;
(statearr_65480[(7)] = inst_65458);

(statearr_65480[(8)] = inst_65457);

(statearr_65480[(9)] = inst_65456);

return statearr_65480;
})();
var statearr_65481_65497 = state_65478__$1;
(statearr_65481_65497[(2)] = null);

(statearr_65481_65497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65479 === (2))){
var inst_65458 = (state_65478[(7)]);
var inst_65461 = (state_65478[(10)]);
var inst_65461__$1 = cljs.core.nth.call(null,inst_65458,(0),null);
var inst_65462 = cljs.core.nthnext.call(null,inst_65458,(1));
var inst_65463 = (inst_65461__$1 == null);
var inst_65464 = cljs.core.not.call(null,inst_65463);
var state_65478__$1 = (function (){var statearr_65482 = state_65478;
(statearr_65482[(11)] = inst_65462);

(statearr_65482[(10)] = inst_65461__$1);

return statearr_65482;
})();
if(inst_65464){
var statearr_65483_65498 = state_65478__$1;
(statearr_65483_65498[(1)] = (4));

} else {
var statearr_65484_65499 = state_65478__$1;
(statearr_65484_65499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65479 === (3))){
var inst_65476 = (state_65478[(2)]);
var state_65478__$1 = state_65478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65478__$1,inst_65476);
} else {
if((state_val_65479 === (4))){
var inst_65461 = (state_65478[(10)]);
var inst_65466 = figwheel.client.file_reloading.reload_js_file.call(null,inst_65461);
var state_65478__$1 = state_65478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65478__$1,(7),inst_65466);
} else {
if((state_val_65479 === (5))){
var inst_65472 = cljs.core.async.close_BANG_.call(null,out);
var state_65478__$1 = state_65478;
var statearr_65485_65500 = state_65478__$1;
(statearr_65485_65500[(2)] = inst_65472);

(statearr_65485_65500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65479 === (6))){
var inst_65474 = (state_65478[(2)]);
var state_65478__$1 = state_65478;
var statearr_65486_65501 = state_65478__$1;
(statearr_65486_65501[(2)] = inst_65474);

(statearr_65486_65501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65479 === (7))){
var inst_65462 = (state_65478[(11)]);
var inst_65468 = (state_65478[(2)]);
var inst_65469 = cljs.core.async.put_BANG_.call(null,out,inst_65468);
var inst_65458 = inst_65462;
var state_65478__$1 = (function (){var statearr_65487 = state_65478;
(statearr_65487[(7)] = inst_65458);

(statearr_65487[(12)] = inst_65469);

return statearr_65487;
})();
var statearr_65488_65502 = state_65478__$1;
(statearr_65488_65502[(2)] = null);

(statearr_65488_65502[(1)] = (2));


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
});})(c__20164__auto___65496,out))
;
return ((function (switch__20099__auto__,c__20164__auto___65496,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____0 = (function (){
var statearr_65492 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65492[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__);

(statearr_65492[(1)] = (1));

return statearr_65492;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____1 = (function (state_65478){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_65478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e65493){if((e65493 instanceof Object)){
var ex__20103__auto__ = e65493;
var statearr_65494_65503 = state_65478;
(statearr_65494_65503[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65504 = state_65478;
state_65478 = G__65504;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__ = function(state_65478){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____1.call(this,state_65478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto___65496,out))
})();
var state__20166__auto__ = (function (){var statearr_65495 = f__20165__auto__.call(null);
(statearr_65495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto___65496);

return statearr_65495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto___65496,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__65505,opts){
var map__65509 = p__65505;
var map__65509__$1 = ((((!((map__65509 == null)))?((((map__65509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65509):map__65509);
var eval_body__$1 = cljs.core.get.call(null,map__65509__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__65509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e65511){var e = e65511;
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
return (function (p1__65512_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65512_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__65517){
var vec__65518 = p__65517;
var k = cljs.core.nth.call(null,vec__65518,(0),null);
var v = cljs.core.nth.call(null,vec__65518,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__65519){
var vec__65520 = p__65519;
var k = cljs.core.nth.call(null,vec__65520,(0),null);
var v = cljs.core.nth.call(null,vec__65520,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__65524,p__65525){
var map__65772 = p__65524;
var map__65772__$1 = ((((!((map__65772 == null)))?((((map__65772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65772):map__65772);
var opts = map__65772__$1;
var before_jsload = cljs.core.get.call(null,map__65772__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__65772__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__65772__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__65773 = p__65525;
var map__65773__$1 = ((((!((map__65773 == null)))?((((map__65773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65773):map__65773);
var msg = map__65773__$1;
var files = cljs.core.get.call(null,map__65773__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__65773__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__65773__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20164__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20165__auto__ = (function (){var switch__20099__auto__ = ((function (c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_65926){
var state_val_65927 = (state_65926[(1)]);
if((state_val_65927 === (7))){
var inst_65788 = (state_65926[(7)]);
var inst_65787 = (state_65926[(8)]);
var inst_65790 = (state_65926[(9)]);
var inst_65789 = (state_65926[(10)]);
var inst_65795 = cljs.core._nth.call(null,inst_65788,inst_65790);
var inst_65796 = figwheel.client.file_reloading.eval_body.call(null,inst_65795,opts);
var inst_65797 = (inst_65790 + (1));
var tmp65928 = inst_65788;
var tmp65929 = inst_65787;
var tmp65930 = inst_65789;
var inst_65787__$1 = tmp65929;
var inst_65788__$1 = tmp65928;
var inst_65789__$1 = tmp65930;
var inst_65790__$1 = inst_65797;
var state_65926__$1 = (function (){var statearr_65931 = state_65926;
(statearr_65931[(7)] = inst_65788__$1);

(statearr_65931[(8)] = inst_65787__$1);

(statearr_65931[(9)] = inst_65790__$1);

(statearr_65931[(10)] = inst_65789__$1);

(statearr_65931[(11)] = inst_65796);

return statearr_65931;
})();
var statearr_65932_66018 = state_65926__$1;
(statearr_65932_66018[(2)] = null);

(statearr_65932_66018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (20))){
var inst_65830 = (state_65926[(12)]);
var inst_65838 = figwheel.client.file_reloading.sort_files.call(null,inst_65830);
var state_65926__$1 = state_65926;
var statearr_65933_66019 = state_65926__$1;
(statearr_65933_66019[(2)] = inst_65838);

(statearr_65933_66019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (27))){
var state_65926__$1 = state_65926;
var statearr_65934_66020 = state_65926__$1;
(statearr_65934_66020[(2)] = null);

(statearr_65934_66020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (1))){
var inst_65779 = (state_65926[(13)]);
var inst_65776 = before_jsload.call(null,files);
var inst_65777 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_65778 = (function (){return ((function (inst_65779,inst_65776,inst_65777,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65521_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65521_SHARP_);
});
;})(inst_65779,inst_65776,inst_65777,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65779__$1 = cljs.core.filter.call(null,inst_65778,files);
var inst_65780 = cljs.core.not_empty.call(null,inst_65779__$1);
var state_65926__$1 = (function (){var statearr_65935 = state_65926;
(statearr_65935[(14)] = inst_65777);

(statearr_65935[(13)] = inst_65779__$1);

(statearr_65935[(15)] = inst_65776);

return statearr_65935;
})();
if(cljs.core.truth_(inst_65780)){
var statearr_65936_66021 = state_65926__$1;
(statearr_65936_66021[(1)] = (2));

} else {
var statearr_65937_66022 = state_65926__$1;
(statearr_65937_66022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (24))){
var state_65926__$1 = state_65926;
var statearr_65938_66023 = state_65926__$1;
(statearr_65938_66023[(2)] = null);

(statearr_65938_66023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (39))){
var inst_65880 = (state_65926[(16)]);
var state_65926__$1 = state_65926;
var statearr_65939_66024 = state_65926__$1;
(statearr_65939_66024[(2)] = inst_65880);

(statearr_65939_66024[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (46))){
var inst_65921 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
var statearr_65940_66025 = state_65926__$1;
(statearr_65940_66025[(2)] = inst_65921);

(statearr_65940_66025[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (4))){
var inst_65824 = (state_65926[(2)]);
var inst_65825 = cljs.core.List.EMPTY;
var inst_65826 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_65825);
var inst_65827 = (function (){return ((function (inst_65824,inst_65825,inst_65826,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65522_SHARP_){
var and__16320__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65522_SHARP_);
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65522_SHARP_));
} else {
return and__16320__auto__;
}
});
;})(inst_65824,inst_65825,inst_65826,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65828 = cljs.core.filter.call(null,inst_65827,files);
var inst_65829 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_65830 = cljs.core.concat.call(null,inst_65828,inst_65829);
var state_65926__$1 = (function (){var statearr_65941 = state_65926;
(statearr_65941[(17)] = inst_65824);

(statearr_65941[(18)] = inst_65826);

(statearr_65941[(12)] = inst_65830);

return statearr_65941;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_65942_66026 = state_65926__$1;
(statearr_65942_66026[(1)] = (16));

} else {
var statearr_65943_66027 = state_65926__$1;
(statearr_65943_66027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (15))){
var inst_65814 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
var statearr_65944_66028 = state_65926__$1;
(statearr_65944_66028[(2)] = inst_65814);

(statearr_65944_66028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (21))){
var inst_65840 = (state_65926[(19)]);
var inst_65840__$1 = (state_65926[(2)]);
var inst_65841 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_65840__$1);
var state_65926__$1 = (function (){var statearr_65945 = state_65926;
(statearr_65945[(19)] = inst_65840__$1);

return statearr_65945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65926__$1,(22),inst_65841);
} else {
if((state_val_65927 === (31))){
var inst_65924 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65926__$1,inst_65924);
} else {
if((state_val_65927 === (32))){
var inst_65880 = (state_65926[(16)]);
var inst_65885 = inst_65880.cljs$lang$protocol_mask$partition0$;
var inst_65886 = (inst_65885 & (64));
var inst_65887 = inst_65880.cljs$core$ISeq$;
var inst_65888 = (inst_65886) || (inst_65887);
var state_65926__$1 = state_65926;
if(cljs.core.truth_(inst_65888)){
var statearr_65946_66029 = state_65926__$1;
(statearr_65946_66029[(1)] = (35));

} else {
var statearr_65947_66030 = state_65926__$1;
(statearr_65947_66030[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (40))){
var inst_65901 = (state_65926[(20)]);
var inst_65900 = (state_65926[(2)]);
var inst_65901__$1 = cljs.core.get.call(null,inst_65900,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_65902 = cljs.core.get.call(null,inst_65900,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_65903 = cljs.core.not_empty.call(null,inst_65901__$1);
var state_65926__$1 = (function (){var statearr_65948 = state_65926;
(statearr_65948[(21)] = inst_65902);

(statearr_65948[(20)] = inst_65901__$1);

return statearr_65948;
})();
if(cljs.core.truth_(inst_65903)){
var statearr_65949_66031 = state_65926__$1;
(statearr_65949_66031[(1)] = (41));

} else {
var statearr_65950_66032 = state_65926__$1;
(statearr_65950_66032[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (33))){
var state_65926__$1 = state_65926;
var statearr_65951_66033 = state_65926__$1;
(statearr_65951_66033[(2)] = false);

(statearr_65951_66033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (13))){
var inst_65800 = (state_65926[(22)]);
var inst_65804 = cljs.core.chunk_first.call(null,inst_65800);
var inst_65805 = cljs.core.chunk_rest.call(null,inst_65800);
var inst_65806 = cljs.core.count.call(null,inst_65804);
var inst_65787 = inst_65805;
var inst_65788 = inst_65804;
var inst_65789 = inst_65806;
var inst_65790 = (0);
var state_65926__$1 = (function (){var statearr_65952 = state_65926;
(statearr_65952[(7)] = inst_65788);

(statearr_65952[(8)] = inst_65787);

(statearr_65952[(9)] = inst_65790);

(statearr_65952[(10)] = inst_65789);

return statearr_65952;
})();
var statearr_65953_66034 = state_65926__$1;
(statearr_65953_66034[(2)] = null);

(statearr_65953_66034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (22))){
var inst_65843 = (state_65926[(23)]);
var inst_65840 = (state_65926[(19)]);
var inst_65848 = (state_65926[(24)]);
var inst_65844 = (state_65926[(25)]);
var inst_65843__$1 = (state_65926[(2)]);
var inst_65844__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65843__$1);
var inst_65845 = (function (){var all_files = inst_65840;
var res_SINGLEQUOTE_ = inst_65843__$1;
var res = inst_65844__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_65843,inst_65840,inst_65848,inst_65844,inst_65843__$1,inst_65844__$1,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65523_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__65523_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_65843,inst_65840,inst_65848,inst_65844,inst_65843__$1,inst_65844__$1,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65846 = cljs.core.filter.call(null,inst_65845,inst_65843__$1);
var inst_65847 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_65848__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65847);
var inst_65849 = cljs.core.not_empty.call(null,inst_65848__$1);
var state_65926__$1 = (function (){var statearr_65954 = state_65926;
(statearr_65954[(23)] = inst_65843__$1);

(statearr_65954[(26)] = inst_65846);

(statearr_65954[(24)] = inst_65848__$1);

(statearr_65954[(25)] = inst_65844__$1);

return statearr_65954;
})();
if(cljs.core.truth_(inst_65849)){
var statearr_65955_66035 = state_65926__$1;
(statearr_65955_66035[(1)] = (23));

} else {
var statearr_65956_66036 = state_65926__$1;
(statearr_65956_66036[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (36))){
var state_65926__$1 = state_65926;
var statearr_65957_66037 = state_65926__$1;
(statearr_65957_66037[(2)] = false);

(statearr_65957_66037[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (41))){
var inst_65901 = (state_65926[(20)]);
var inst_65905 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_65906 = cljs.core.map.call(null,inst_65905,inst_65901);
var inst_65907 = cljs.core.pr_str.call(null,inst_65906);
var inst_65908 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_65907)].join('');
var inst_65909 = figwheel.client.utils.log.call(null,inst_65908);
var state_65926__$1 = state_65926;
var statearr_65958_66038 = state_65926__$1;
(statearr_65958_66038[(2)] = inst_65909);

(statearr_65958_66038[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (43))){
var inst_65902 = (state_65926[(21)]);
var inst_65912 = (state_65926[(2)]);
var inst_65913 = cljs.core.not_empty.call(null,inst_65902);
var state_65926__$1 = (function (){var statearr_65959 = state_65926;
(statearr_65959[(27)] = inst_65912);

return statearr_65959;
})();
if(cljs.core.truth_(inst_65913)){
var statearr_65960_66039 = state_65926__$1;
(statearr_65960_66039[(1)] = (44));

} else {
var statearr_65961_66040 = state_65926__$1;
(statearr_65961_66040[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (29))){
var inst_65843 = (state_65926[(23)]);
var inst_65880 = (state_65926[(16)]);
var inst_65840 = (state_65926[(19)]);
var inst_65846 = (state_65926[(26)]);
var inst_65848 = (state_65926[(24)]);
var inst_65844 = (state_65926[(25)]);
var inst_65876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_65879 = (function (){var all_files = inst_65840;
var res_SINGLEQUOTE_ = inst_65843;
var res = inst_65844;
var files_not_loaded = inst_65846;
var dependencies_that_loaded = inst_65848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65843,inst_65880,inst_65840,inst_65846,inst_65848,inst_65844,inst_65876,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65878){
var map__65962 = p__65878;
var map__65962__$1 = ((((!((map__65962 == null)))?((((map__65962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65962):map__65962);
var namespace = cljs.core.get.call(null,map__65962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65843,inst_65880,inst_65840,inst_65846,inst_65848,inst_65844,inst_65876,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65880__$1 = cljs.core.group_by.call(null,inst_65879,inst_65846);
var inst_65882 = (inst_65880__$1 == null);
var inst_65883 = cljs.core.not.call(null,inst_65882);
var state_65926__$1 = (function (){var statearr_65964 = state_65926;
(statearr_65964[(28)] = inst_65876);

(statearr_65964[(16)] = inst_65880__$1);

return statearr_65964;
})();
if(inst_65883){
var statearr_65965_66041 = state_65926__$1;
(statearr_65965_66041[(1)] = (32));

} else {
var statearr_65966_66042 = state_65926__$1;
(statearr_65966_66042[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (44))){
var inst_65902 = (state_65926[(21)]);
var inst_65915 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65902);
var inst_65916 = cljs.core.pr_str.call(null,inst_65915);
var inst_65917 = [cljs.core.str("not required: "),cljs.core.str(inst_65916)].join('');
var inst_65918 = figwheel.client.utils.log.call(null,inst_65917);
var state_65926__$1 = state_65926;
var statearr_65967_66043 = state_65926__$1;
(statearr_65967_66043[(2)] = inst_65918);

(statearr_65967_66043[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (6))){
var inst_65821 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
var statearr_65968_66044 = state_65926__$1;
(statearr_65968_66044[(2)] = inst_65821);

(statearr_65968_66044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (28))){
var inst_65846 = (state_65926[(26)]);
var inst_65873 = (state_65926[(2)]);
var inst_65874 = cljs.core.not_empty.call(null,inst_65846);
var state_65926__$1 = (function (){var statearr_65969 = state_65926;
(statearr_65969[(29)] = inst_65873);

return statearr_65969;
})();
if(cljs.core.truth_(inst_65874)){
var statearr_65970_66045 = state_65926__$1;
(statearr_65970_66045[(1)] = (29));

} else {
var statearr_65971_66046 = state_65926__$1;
(statearr_65971_66046[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (25))){
var inst_65844 = (state_65926[(25)]);
var inst_65860 = (state_65926[(2)]);
var inst_65861 = cljs.core.not_empty.call(null,inst_65844);
var state_65926__$1 = (function (){var statearr_65972 = state_65926;
(statearr_65972[(30)] = inst_65860);

return statearr_65972;
})();
if(cljs.core.truth_(inst_65861)){
var statearr_65973_66047 = state_65926__$1;
(statearr_65973_66047[(1)] = (26));

} else {
var statearr_65974_66048 = state_65926__$1;
(statearr_65974_66048[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (34))){
var inst_65895 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
if(cljs.core.truth_(inst_65895)){
var statearr_65975_66049 = state_65926__$1;
(statearr_65975_66049[(1)] = (38));

} else {
var statearr_65976_66050 = state_65926__$1;
(statearr_65976_66050[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (17))){
var state_65926__$1 = state_65926;
var statearr_65977_66051 = state_65926__$1;
(statearr_65977_66051[(2)] = recompile_dependents);

(statearr_65977_66051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (3))){
var state_65926__$1 = state_65926;
var statearr_65978_66052 = state_65926__$1;
(statearr_65978_66052[(2)] = null);

(statearr_65978_66052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (12))){
var inst_65817 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
var statearr_65979_66053 = state_65926__$1;
(statearr_65979_66053[(2)] = inst_65817);

(statearr_65979_66053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (2))){
var inst_65779 = (state_65926[(13)]);
var inst_65786 = cljs.core.seq.call(null,inst_65779);
var inst_65787 = inst_65786;
var inst_65788 = null;
var inst_65789 = (0);
var inst_65790 = (0);
var state_65926__$1 = (function (){var statearr_65980 = state_65926;
(statearr_65980[(7)] = inst_65788);

(statearr_65980[(8)] = inst_65787);

(statearr_65980[(9)] = inst_65790);

(statearr_65980[(10)] = inst_65789);

return statearr_65980;
})();
var statearr_65981_66054 = state_65926__$1;
(statearr_65981_66054[(2)] = null);

(statearr_65981_66054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (23))){
var inst_65843 = (state_65926[(23)]);
var inst_65840 = (state_65926[(19)]);
var inst_65846 = (state_65926[(26)]);
var inst_65848 = (state_65926[(24)]);
var inst_65844 = (state_65926[(25)]);
var inst_65851 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_65853 = (function (){var all_files = inst_65840;
var res_SINGLEQUOTE_ = inst_65843;
var res = inst_65844;
var files_not_loaded = inst_65846;
var dependencies_that_loaded = inst_65848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65843,inst_65840,inst_65846,inst_65848,inst_65844,inst_65851,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65852){
var map__65982 = p__65852;
var map__65982__$1 = ((((!((map__65982 == null)))?((((map__65982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65982):map__65982);
var request_url = cljs.core.get.call(null,map__65982__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65843,inst_65840,inst_65846,inst_65848,inst_65844,inst_65851,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65854 = cljs.core.reverse.call(null,inst_65848);
var inst_65855 = cljs.core.map.call(null,inst_65853,inst_65854);
var inst_65856 = cljs.core.pr_str.call(null,inst_65855);
var inst_65857 = figwheel.client.utils.log.call(null,inst_65856);
var state_65926__$1 = (function (){var statearr_65984 = state_65926;
(statearr_65984[(31)] = inst_65851);

return statearr_65984;
})();
var statearr_65985_66055 = state_65926__$1;
(statearr_65985_66055[(2)] = inst_65857);

(statearr_65985_66055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (35))){
var state_65926__$1 = state_65926;
var statearr_65986_66056 = state_65926__$1;
(statearr_65986_66056[(2)] = true);

(statearr_65986_66056[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (19))){
var inst_65830 = (state_65926[(12)]);
var inst_65836 = figwheel.client.file_reloading.expand_files.call(null,inst_65830);
var state_65926__$1 = state_65926;
var statearr_65987_66057 = state_65926__$1;
(statearr_65987_66057[(2)] = inst_65836);

(statearr_65987_66057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (11))){
var state_65926__$1 = state_65926;
var statearr_65988_66058 = state_65926__$1;
(statearr_65988_66058[(2)] = null);

(statearr_65988_66058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (9))){
var inst_65819 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
var statearr_65989_66059 = state_65926__$1;
(statearr_65989_66059[(2)] = inst_65819);

(statearr_65989_66059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (5))){
var inst_65790 = (state_65926[(9)]);
var inst_65789 = (state_65926[(10)]);
var inst_65792 = (inst_65790 < inst_65789);
var inst_65793 = inst_65792;
var state_65926__$1 = state_65926;
if(cljs.core.truth_(inst_65793)){
var statearr_65990_66060 = state_65926__$1;
(statearr_65990_66060[(1)] = (7));

} else {
var statearr_65991_66061 = state_65926__$1;
(statearr_65991_66061[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (14))){
var inst_65800 = (state_65926[(22)]);
var inst_65809 = cljs.core.first.call(null,inst_65800);
var inst_65810 = figwheel.client.file_reloading.eval_body.call(null,inst_65809,opts);
var inst_65811 = cljs.core.next.call(null,inst_65800);
var inst_65787 = inst_65811;
var inst_65788 = null;
var inst_65789 = (0);
var inst_65790 = (0);
var state_65926__$1 = (function (){var statearr_65992 = state_65926;
(statearr_65992[(32)] = inst_65810);

(statearr_65992[(7)] = inst_65788);

(statearr_65992[(8)] = inst_65787);

(statearr_65992[(9)] = inst_65790);

(statearr_65992[(10)] = inst_65789);

return statearr_65992;
})();
var statearr_65993_66062 = state_65926__$1;
(statearr_65993_66062[(2)] = null);

(statearr_65993_66062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (45))){
var state_65926__$1 = state_65926;
var statearr_65994_66063 = state_65926__$1;
(statearr_65994_66063[(2)] = null);

(statearr_65994_66063[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (26))){
var inst_65843 = (state_65926[(23)]);
var inst_65840 = (state_65926[(19)]);
var inst_65846 = (state_65926[(26)]);
var inst_65848 = (state_65926[(24)]);
var inst_65844 = (state_65926[(25)]);
var inst_65863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_65865 = (function (){var all_files = inst_65840;
var res_SINGLEQUOTE_ = inst_65843;
var res = inst_65844;
var files_not_loaded = inst_65846;
var dependencies_that_loaded = inst_65848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65843,inst_65840,inst_65846,inst_65848,inst_65844,inst_65863,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65864){
var map__65995 = p__65864;
var map__65995__$1 = ((((!((map__65995 == null)))?((((map__65995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65995):map__65995);
var namespace = cljs.core.get.call(null,map__65995__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__65995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65843,inst_65840,inst_65846,inst_65848,inst_65844,inst_65863,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65866 = cljs.core.map.call(null,inst_65865,inst_65844);
var inst_65867 = cljs.core.pr_str.call(null,inst_65866);
var inst_65868 = figwheel.client.utils.log.call(null,inst_65867);
var inst_65869 = (function (){var all_files = inst_65840;
var res_SINGLEQUOTE_ = inst_65843;
var res = inst_65844;
var files_not_loaded = inst_65846;
var dependencies_that_loaded = inst_65848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65843,inst_65840,inst_65846,inst_65848,inst_65844,inst_65863,inst_65865,inst_65866,inst_65867,inst_65868,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65843,inst_65840,inst_65846,inst_65848,inst_65844,inst_65863,inst_65865,inst_65866,inst_65867,inst_65868,state_val_65927,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65870 = setTimeout(inst_65869,(10));
var state_65926__$1 = (function (){var statearr_65997 = state_65926;
(statearr_65997[(33)] = inst_65863);

(statearr_65997[(34)] = inst_65868);

return statearr_65997;
})();
var statearr_65998_66064 = state_65926__$1;
(statearr_65998_66064[(2)] = inst_65870);

(statearr_65998_66064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (16))){
var state_65926__$1 = state_65926;
var statearr_65999_66065 = state_65926__$1;
(statearr_65999_66065[(2)] = reload_dependents);

(statearr_65999_66065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (38))){
var inst_65880 = (state_65926[(16)]);
var inst_65897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65880);
var state_65926__$1 = state_65926;
var statearr_66000_66066 = state_65926__$1;
(statearr_66000_66066[(2)] = inst_65897);

(statearr_66000_66066[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (30))){
var state_65926__$1 = state_65926;
var statearr_66001_66067 = state_65926__$1;
(statearr_66001_66067[(2)] = null);

(statearr_66001_66067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (10))){
var inst_65800 = (state_65926[(22)]);
var inst_65802 = cljs.core.chunked_seq_QMARK_.call(null,inst_65800);
var state_65926__$1 = state_65926;
if(inst_65802){
var statearr_66002_66068 = state_65926__$1;
(statearr_66002_66068[(1)] = (13));

} else {
var statearr_66003_66069 = state_65926__$1;
(statearr_66003_66069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (18))){
var inst_65834 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
if(cljs.core.truth_(inst_65834)){
var statearr_66004_66070 = state_65926__$1;
(statearr_66004_66070[(1)] = (19));

} else {
var statearr_66005_66071 = state_65926__$1;
(statearr_66005_66071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (42))){
var state_65926__$1 = state_65926;
var statearr_66006_66072 = state_65926__$1;
(statearr_66006_66072[(2)] = null);

(statearr_66006_66072[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (37))){
var inst_65892 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
var statearr_66007_66073 = state_65926__$1;
(statearr_66007_66073[(2)] = inst_65892);

(statearr_66007_66073[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (8))){
var inst_65800 = (state_65926[(22)]);
var inst_65787 = (state_65926[(8)]);
var inst_65800__$1 = cljs.core.seq.call(null,inst_65787);
var state_65926__$1 = (function (){var statearr_66008 = state_65926;
(statearr_66008[(22)] = inst_65800__$1);

return statearr_66008;
})();
if(inst_65800__$1){
var statearr_66009_66074 = state_65926__$1;
(statearr_66009_66074[(1)] = (10));

} else {
var statearr_66010_66075 = state_65926__$1;
(statearr_66010_66075[(1)] = (11));

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
});})(c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20099__auto__,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____0 = (function (){
var statearr_66014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66014[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__);

(statearr_66014[(1)] = (1));

return statearr_66014;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____1 = (function (state_65926){
while(true){
var ret_value__20101__auto__ = (function (){try{while(true){
var result__20102__auto__ = switch__20099__auto__.call(null,state_65926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20102__auto__;
}
break;
}
}catch (e66015){if((e66015 instanceof Object)){
var ex__20103__auto__ = e66015;
var statearr_66016_66076 = state_65926;
(statearr_66016_66076[(5)] = ex__20103__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66077 = state_65926;
state_65926 = G__66077;
continue;
} else {
return ret_value__20101__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__ = function(state_65926){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____1.call(this,state_65926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20100__auto__;
})()
;})(switch__20099__auto__,c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20166__auto__ = (function (){var statearr_66017 = f__20165__auto__.call(null);
(statearr_66017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20164__auto__);

return statearr_66017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20166__auto__);
});})(c__20164__auto__,map__65772,map__65772__$1,opts,before_jsload,on_jsload,reload_dependents,map__65773,map__65773__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20164__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66080,link){
var map__66083 = p__66080;
var map__66083__$1 = ((((!((map__66083 == null)))?((((map__66083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66083):map__66083);
var file = cljs.core.get.call(null,map__66083__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__66083,map__66083__$1,file){
return (function (p1__66078_SHARP_,p2__66079_SHARP_){
if(cljs.core._EQ_.call(null,p1__66078_SHARP_,p2__66079_SHARP_)){
return p1__66078_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__66083,map__66083__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66089){
var map__66090 = p__66089;
var map__66090__$1 = ((((!((map__66090 == null)))?((((map__66090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66090):map__66090);
var match_length = cljs.core.get.call(null,map__66090__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__66090__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66085_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66085_SHARP_);
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
var args66092 = [];
var len__17390__auto___66095 = arguments.length;
var i__17391__auto___66096 = (0);
while(true){
if((i__17391__auto___66096 < len__17390__auto___66095)){
args66092.push((arguments[i__17391__auto___66096]));

var G__66097 = (i__17391__auto___66096 + (1));
i__17391__auto___66096 = G__66097;
continue;
} else {
}
break;
}

var G__66094 = args66092.length;
switch (G__66094) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66092.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66099_SHARP_,p2__66100_SHARP_){
return cljs.core.assoc.call(null,p1__66099_SHARP_,cljs.core.get.call(null,p2__66100_SHARP_,key),p2__66100_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__66101){
var map__66104 = p__66101;
var map__66104__$1 = ((((!((map__66104 == null)))?((((map__66104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66104):map__66104);
var f_data = map__66104__$1;
var file = cljs.core.get.call(null,map__66104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66106,files_msg){
var map__66113 = p__66106;
var map__66113__$1 = ((((!((map__66113 == null)))?((((map__66113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66113):map__66113);
var opts = map__66113__$1;
var on_cssload = cljs.core.get.call(null,map__66113__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__66115_66119 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__66116_66120 = null;
var count__66117_66121 = (0);
var i__66118_66122 = (0);
while(true){
if((i__66118_66122 < count__66117_66121)){
var f_66123 = cljs.core._nth.call(null,chunk__66116_66120,i__66118_66122);
figwheel.client.file_reloading.reload_css_file.call(null,f_66123);

var G__66124 = seq__66115_66119;
var G__66125 = chunk__66116_66120;
var G__66126 = count__66117_66121;
var G__66127 = (i__66118_66122 + (1));
seq__66115_66119 = G__66124;
chunk__66116_66120 = G__66125;
count__66117_66121 = G__66126;
i__66118_66122 = G__66127;
continue;
} else {
var temp__4425__auto___66128 = cljs.core.seq.call(null,seq__66115_66119);
if(temp__4425__auto___66128){
var seq__66115_66129__$1 = temp__4425__auto___66128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66115_66129__$1)){
var c__17135__auto___66130 = cljs.core.chunk_first.call(null,seq__66115_66129__$1);
var G__66131 = cljs.core.chunk_rest.call(null,seq__66115_66129__$1);
var G__66132 = c__17135__auto___66130;
var G__66133 = cljs.core.count.call(null,c__17135__auto___66130);
var G__66134 = (0);
seq__66115_66119 = G__66131;
chunk__66116_66120 = G__66132;
count__66117_66121 = G__66133;
i__66118_66122 = G__66134;
continue;
} else {
var f_66135 = cljs.core.first.call(null,seq__66115_66129__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_66135);

var G__66136 = cljs.core.next.call(null,seq__66115_66129__$1);
var G__66137 = null;
var G__66138 = (0);
var G__66139 = (0);
seq__66115_66119 = G__66136;
chunk__66116_66120 = G__66137;
count__66117_66121 = G__66138;
i__66118_66122 = G__66139;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__66113,map__66113__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__66113,map__66113__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map