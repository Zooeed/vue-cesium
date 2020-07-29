(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{U4Hc:function(t,s,a){t.exports=a("tgXm")},tgXm:function(t,s,a){"use strict";a.r(s);var r=a("JFUb"),e=Object(r.a)({data:function(){return{colorPoint:{},polylines:[{positions:[{lng:119.24884033203125,lat:30.31311798095703,height:1183.3186645507812},{lng:119.24906555725647,lat:30.312892755731806,height:1183.3186645507812}]},{positions:[{lng:119.24884033203125,lat:30.313392639160156,height:1183.804443359375},{lng:119.24906555725632,lat:30.31316741393502,height:1183.684988424182}]},{positions:[{lng:119.24884033203125,lat:30.313655853271484,height:1184.2783203125},{lng:119.24906555725632,lat:30.313430628046348,height:1184.1093236654997}]}]}},methods:{ready:function(t){var s=t.Cesium;t.viewer;this.colorPoint=s.Color.fromCssColorString("rgb(255,229,0)")}}},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("PointPrimitive")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:t.ready}},[a("vc-collection-primitive-point",[t._l(t.polylines,(function(s,r){return[t._l(s.positions,(function(s,e){return[a("vc-primitive-point",{key:"point"+r+"position"+e,attrs:{position:s,color:t.colorPoint,pixelSize:8}})]}))]}))],2)],1)],1)]],2),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(3),t._v(" "),a("hr"),t._v(" "),t._m(4),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(5),t._v(" "),a("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-primitive-point")]),this._v(" component is used to load a graphical point positioned in the 3D scene, that is created and rendered using a "),s("code",{pre:!0},[this._v("vc-collection-primitive-point")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[this._v("Load points with "),s("code",{pre:!0},[this._v("vc-primitive-point")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-collection-primitive-point")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"(polyline, index) of polylines"')]),t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"(position, subIndex) of polyline.positions"')]),t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-point")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"'point' + index + 'position' + subIndex\"")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":color")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"colorPoint"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":pixelSize")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"8"')]),t._v("\n            >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-point")]),t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-collection-primitive-point")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("colorPoint")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("polylines")]),t._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("119.24884033203125")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.313117980957031")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1183.3186645507812")]),t._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("119.24906555725647")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.312892755731806")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1183.3186645507812")]),t._v(" }\n            ]\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("119.24884033203125")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.313392639160156")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1183.804443359375")]),t._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("119.24906555725632")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.31316741393502")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1183.6849884241819")]),t._v(" }\n            ]\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("119.24884033203125")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.313655853271484")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1184.2783203125")]),t._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("119.24906555725632")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.313430628046348")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1184.1093236654997")]),t._v(" }\n            ]\n          }\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".colorPoint = Cesium.Color.fromCssColorString("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'rgb(255,229,0)'")]),t._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("color")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("disableDepthTestDistance")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the distance from the camera at which to disable the depth test to.")])]),t._v(" "),a("tr",[a("td",[t._v("distanceDisplayCondition")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying at what distance from the camera that this point will be displayed. "),a("strong",[t._v("Structure: { near: number, far: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("*")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Gets or sets the user-defined value returned when the point is picked.")])]),t._v(" "),a("tr",[a("td",[t._v("outlineColor")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("outlineWidth")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the the outline width in pixels.")])]),t._v(" "),a("tr",[a("td",[t._v("pixelSize")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the size in pixels.")])]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Gets or sets the Cartesian position of this point. "),a("strong",[t._v("Structure: { lng: number, lat: number, height: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("scaleByDistance")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A NearFarScalar Property used to scale the point based on distance. "),a("strong",[t._v("Structure: { near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying the visibility of the point.")])]),t._v(" "),a("tr",[a("td",[t._v("translucencyByDistance")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" A NearFarScalar Property used to set translucency based on distance from the camera. "),a("strong",[t._v("Structure: { near: number, nearValue: number, far: number, farValue: number }")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html"}},[this._v("PointPrimitive")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),a("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);s.default=e.exports}}]);
//# sourceMappingURL=84.c0154c6605120cef2e6f.js.map