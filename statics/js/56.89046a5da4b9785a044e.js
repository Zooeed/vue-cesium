(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"6m73":function(s,t,a){"use strict";a.r(t);var e=a("JFUb"),r=Object(e.a)({data:function(){return{appearance:{},geometry:{},color:{},attributes:{},modelMatrix1:{},modelMatrix2:{},appearance2:null,geometry2:null,geometryInstances:null,polygonHierarchy:[{lng:102.1,lat:29.5},{lng:106.2,lat:29.5},{lng:106.2,lat:33.5},{lng:108.2,lat:35.5},{lng:102.1,lat:33.5}],height:200,rectangle:{west:110.5,south:29.5,east:115.5,north:34.5}}},methods:{ready:function(s){this.cesiumInstance=s;var t=this.cesiumInstance,a=t.Cesium;t.viewer;this.appearance=new a.PerInstanceColorAppearance,this.attributes={color:a.ColorGeometryInstanceAttribute.fromColor(a.Color.AQUA)},this.geometry=a.BoxGeometry.fromDimensions({vertexFormat:a.VertexFormat.POSITION_AND_NORMAL,dimensions:new a.Cartesian3(1e6,1e6,5e5)}),this.modelMatrix1=a.Matrix4.multiplyByTranslation(a.Transforms.eastNorthUpToFixedFrame(a.Cartesian3.fromDegrees(108,40.03883)),new a.Cartesian3(0,0,1e5),new a.Matrix4),this.modelMatrix2=a.Matrix4.multiplyByTranslation(a.Transforms.eastNorthUpToFixedFrame(a.Cartesian3.fromDegrees(108,40.03883)),new a.Cartesian3(0,0,15e5),new a.Matrix4),this.appearance2=new a.MaterialAppearance({material:a.Material.fromType("Checkerboard",{repeat:new a.Cartesian2(20,6)}),materialSupport:a.MaterialAppearance.MaterialSupport.TEXTURED})}}},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("GeometryInstance")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),s._m(1),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-primitive",{attrs:{appearance:s.appearance}},[a("vc-instance-geometry",{attrs:{id:"top",geometry:s.geometry,color:s.color,attributes:s.attributes,modelMatrix:s.modelMatrix1}}),s._v(" "),a("vc-instance-geometry",{attrs:{id:"bottom",geometry:s.geometry,color:s.color,attributes:s.attributes,modelMatrix:s.modelMatrix2}})],1),s._v(" "),a("vc-primitive",{attrs:{appearance:s.appearance2,geometryInstances:s.geometryInstances},on:{"update:geometryInstances":function(t){s.geometryInstances=t},"update:geometry-instances":function(t){s.geometryInstances=t}}},[a("vc-instance-geometry",[a("vc-geometry-rectangle",{attrs:{rectangle:s.rectangle}})],1),s._v(" "),a("vc-instance-geometry",{attrs:{geometry:s.geometry2},on:{"update:geometry":function(t){s.geometry2=t}}},[a("vc-geometry-polygon",{attrs:{polygonHierarchy:s.polygonHierarchy,height:s.height}})],1)],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(3),s._v(" "),a("hr"),s._v(" "),s._m(4),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(5),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-instance-geometry")]),this._v(" component is used to load a geometry. Geometry instancing allows one Geometry object to be positions in several different locations and colored uniquely. For example, one BoxGeometry can be instanced several times, each with a different modelMatrix to change its position, rotation, and scale.")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[this._v("Load GeometryInstance with "),t("code",{pre:!0},[this._v("vc-instance-geometry")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"top"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"color"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix1"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bottom"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"color"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix2"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometryInstances.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometryInstances"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-rectangle")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rectangle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-rectangle")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry2"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":polygonHierarchy")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonHierarchy"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"height"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix2")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometryInstances")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchy")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("115.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("34.5")]),s._v(" }\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PerInstanceColorAppearance()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".geometry = Cesium.BoxGeometry.fromDimensions({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": Cesium.VertexFormat.POSITION_AND_NORMAL,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dimensions")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(")\n        })\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix1 = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.03883")]),s._v(")),\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100000.0")]),s._v("),\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Matrix4()\n        )\n        ;("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix2 = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.03883")]),s._v(")),\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1500000.0")]),s._v("),\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Matrix4()\n        )),\n          ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance2 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.MaterialAppearance({\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": Cesium.Material.fromType("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Checkerboard'")]),s._v(", {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("repeat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.0")]),s._v(")\n            }),\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("materialSupport")]),s._v(": Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n          }))\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("geometry")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The geometry to instance.")])]),s._v(" "),a("tr",[a("td",[s._v("modelMatrix")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The model matrix that transforms to transform the geometry from model to world coordinates.")])]),s._v(" "),a("tr",[a("td",[s._v("id")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A user-defined object to return when the instance is picked with "),a("code",{pre:!0},[s._v("Scene#pick")]),s._v(".")])]),s._v(" "),a("tr",[a("td",[s._v("attributes")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Per-instance attributes like a show or color attribute shown in the example below.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html"}},[this._v("GeometryInstance")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);t.default=r.exports},"8fNn":function(s,t,a){s.exports=a("6m73")}}]);
//# sourceMappingURL=56.89046a5da4b9785a044e.js.map