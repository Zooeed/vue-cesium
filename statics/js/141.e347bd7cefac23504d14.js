(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{XWG2:function(s,t,a){s.exports=a("fVRK")},fVRK:function(s,t,a){"use strict";a.r(t);var r=a("eVuF"),e=a.n(r),n={data:function(){return{appearance:null,positions:[{lng:110,lat:33.5,height:0},{lng:110,lat:33.5,height:2e5},{lng:105,lat:33.5,height:2e5},{lng:105,lat:33.5,height:0}],vertexFormat:null,attributes:null,attributesOutline:null}},mounted:function(){e.a.all([this.$refs.polygonCoplanar.createPromise,this.$refs.polygonCoplanarOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var a=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(a.boundingSphere,t.vm.$parent.modelMatrix):a.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.viewer=a;var r=t.ColorGeometryInstanceAttribute,e=t.PerInstanceColorAppearance;this.appearance=new e({flat:!0}),this.vertexFormat=e.FLAT_VERTEX_FORMAT,this.attributes={color:new r(Math.random(),Math.random(),Math.random(),.5)},this.attributesOutline={color:new r(Math.random(),Math.random(),Math.random())}}}},l=a("JFUb"),v=Object(l.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("CoplanarPolygonGeometry、CoplanarPolygonOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载共面多边形几何体")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-primitive",{attrs:{appearance:s.appearance}},[a("vc-instance-geometry",{attrs:{attributes:s.attributes}},[a("vc-geometry-polygon-coplanar",{ref:"polygonCoplanar",attrs:{positions:s.positions,vertexFormat:s.vertexFormat}})],1)],1),s._v(" "),a("vc-primitive",{attrs:{appearance:s.appearance}},[a("vc-instance-geometry",{attrs:{attributes:s.attributesOutline}},[a("vc-geometry-outline-polygon-coplanar",{ref:"polygonCoplanarOutline",attrs:{positions:s.positions}})],1)],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),a("hr"),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(9),s._v(" "),a("hr")],1)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("code",{pre:!0},[s._v("vc-geometry-polygon-coplanar")]),s._v(" 组件用于加载共面多边形。")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("vc-geometry-outline-polygon-coplanar")]),s._v(" 组件用于加载共面多边形轮廓。")]),s._v(" "),a("li",[s._v("需要作为 "),a("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(" 的子组件使用，可以挂载到 "),a("code",{pre:!0},[s._v("vc-primitive")]),s._v("。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon-coplanar")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonCoplanar"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":vertexFormat")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertexFormat"')]),s._v("\n          >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon-coplanar")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributesOutline"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-polygon-coplanar")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonCoplanarOutline"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v("\n          >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-polygon-coplanar")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributesOutline")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.polygonCoplanar.createPromise, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.polygonCoplanarOutline.createPromise]).then(\n        "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances.reduce("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur.vm.$parent.modelMatrix\n              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n          }, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n          instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n        }\n      )\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready({ Cesium, viewer }) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer = viewer\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PerInstanceColorAppearance({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributesOutline = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random())\n        }\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-polygon-coplanar")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("positions")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 的 positions 属性。")])]),s._v(" "),a("tr",[a("td",[s._v("vertexFormat")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 要缓存的顶点属性。")])]),s._v(" "),a("tr",[a("td",[s._v("stRotation")]),s._v(" "),a("td",[s._v("Number|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 纹理按正北方向逆时针旋转角度。")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 参考椭球体。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry--outline-polygon-coplanar")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("positions")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 的 positions 属性。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("positions 结构")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Array")]),s._v("\n[{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html"}},[this._v("CoplanarPolygonGeometry")])]),this._v("、"),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CoplanarPolygonOutlineGeometry.html"}},[this._v("CoplanarPolygonOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=v.exports}}]);
//# sourceMappingURL=141.e347bd7cefac23504d14.js.map