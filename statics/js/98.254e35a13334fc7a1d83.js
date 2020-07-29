(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{nRaW:function(e,t,s){e.exports=s("sRdN")},sRdN:function(e,t,s){"use strict";s.r(t);var a={data:function(){return{animation:!0,timeline:!0,baseLayerPicker:!1,fullscreenButton:!0,infoBox:!0,fullscreenElement:document.body,tk:"436ce7e50d27eede2f2929307e6b33c0"}},mounted:function(){this.$refs.vcViewer.createPromise.then((function(e){e.Cesium,e.viewer;console.log("viewer is loaded.")}))},methods:{ready:function(e){var t=e.Cesium,s=e.viewer;this.fullscreenElement=this.$refs.viewerContainer,s.entities.add({id:"成都欢迎你",position:t.Cartesian3.fromDegrees(104.06,30.67,100),billboard:new t.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",scale:.1}),label:new t.LabelGraphics({text:"Hello Cesium",font:"24px sans-serif",horizontalOrigin:1,outlineColor:new t.Color(0,0,0,1),outlineWidth:2,pixelOffset:new t.Cartesian2(17,-5),style:t.LabelStyle.FILL})})}}},r=s("JFUb"),v=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("VcViewer")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),s("h3",[e._v("Initialize the Viewer instance with the vc-viewer component")]),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{ref:"viewerContainer",staticClass:"viewer"},[s("vc-viewer",{ref:"vcViewer",attrs:{animation:e.animation,baseLayerPicker:e.baseLayerPicker,timeline:e.timeline,fullscreenButton:e.fullscreenButton,fullscreenElement:e.fullscreenElement,infoBox:e.infoBox},on:{ready:e.ready}},[s("vc-navigation"),e._v(" "),s("vc-layer-imagery",{ref:"layerText"},[s("vc-provider-imagery-tianditu",{attrs:{mapStyle:"eia_c",token:e.tk}})],1),e._v(" "),s("vc-layer-imagery",[s("vc-provider-imagery-tianditu",{attrs:{mapStyle:"img_c",token:e.tk}})],1)],1),e._v(" "),s("div",{staticClass:"demo-tool"},[s("span",[e._v("animation")]),e._v(" "),s("md-switch",{model:{value:e.animation,callback:function(t){e.animation=t},expression:"animation"}}),e._v(" "),s("span",[e._v("timeline")]),e._v(" "),s("md-switch",{model:{value:e.timeline,callback:function(t){e.timeline=t},expression:"timeline"}}),e._v(" "),s("span",[e._v("baseLayerPicker")]),e._v(" "),s("md-switch",{model:{value:e.baseLayerPicker,callback:function(t){e.baseLayerPicker=t},expression:"baseLayerPicker"}}),e._v(" "),s("span",[e._v("fullscreenButton")]),e._v(" "),s("md-switch",{model:{value:e.fullscreenButton,callback:function(t){e.fullscreenButton=t},expression:"fullscreenButton"}}),e._v(" "),s("span",[e._v("infoBox")]),e._v(" "),s("md-switch",{model:{value:e.infoBox,callback:function(t){e.infoBox=t},expression:"infoBox"}})],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(1),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(2),e._v(" "),s("hr"),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(3),e._v(" "),s("hr"),e._v(" "),e._m(4)],1)}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("code",{pre:!0},[e._v("vc-viewer")]),e._v(" is a container of Cesium core class and instance. It's the root component of other components of vue-cesium.\nThe container is an empty DOM node which used to mount other components or DOM nodes. In "),s("code",{pre:!0},[e._v("2.0.1 +")]),e._v(" version, you can use "),s("code",{pre:!0},[e._v("ref")]),e._v(" to get the"),s("code",{pre:!0},[e._v("createPromise")]),e._v(" object of the component to perform related operations.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewerContainer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"vcViewer"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":animation")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"animation"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":baseLayerPicker")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"baseLayerPicker"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":timeline")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"timeline"')]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":fullscreenButton")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"fullscreenButton"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":fullscreenElement")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"fullscreenElement"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":infoBox")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"infoBox"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-navigation")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-navigation")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-layer-imagery")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"layerText"')]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-imagery-tianditu")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("mapStyle")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"eia_c"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":token")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"tk"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-imagery-tianditu")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-layer-imagery")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-layer-imagery")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-imagery-tianditu")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("mapStyle")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"img_c"')]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":token")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"tk"')]),e._v("\n        >")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-imagery-tianditu")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-layer-imagery")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"demo-tool"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("animation"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"animation"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("timeline"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"timeline"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("baseLayerPicker"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"baseLayerPicker"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("fullscreenButton"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"fullscreenButton"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("infoBox"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"infoBox"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-switch")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data () {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("animation")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("timeline")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("baseLayerPicker")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("fullscreenButton")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("infoBox")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("fullscreenElement")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("document")]),e._v(".body,\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("tk")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'436ce7e50d27eede2f2929307e6b33c0'")]),e._v("\n      }\n    },\n    mounted () {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$refs.vcViewer.createPromise.then("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("{Cesium, viewer}")]),e._v(")=>")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'viewer is loaded.'")]),e._v(")\n      })\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready (cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" {Cesium, viewer} = cesiumInstance\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".fullscreenElement = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$refs.viewerContainer\n        viewer.entities.add({\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("id")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'成都欢迎你'")]),e._v(",\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("position")]),e._v(": Cesium.Cartesian3.fromDegrees("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("104.06")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("30.67")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("100")]),e._v("),\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("billboard")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.BillboardGraphics({\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("image")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("scale")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.1")]),e._v("\n          }),\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.LabelGraphics ({\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Hello Cesium'")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("font")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'24px sans-serif'")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("horizontalOrigin")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("outlineColor")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.Color("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v("),\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("outlineWidth")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("pixelOffset")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.Cartesian2("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("17")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("-5")]),e._v("),\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("style")]),e._v(": Cesium.LabelStyle.FILL\n          })\n        })\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("animation")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the Animation widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("baseLayerPicker")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the BaseLayerPicker widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("fullscreenButton")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the FullscreenButton widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("vrButton")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to true, the VRButton widget will be created.")])]),e._v(" "),s("tr",[s("td",[e._v("geocoder")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the Geocoder widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("homeButton")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the HomeButton widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("infoBox")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the InfoBox widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("sceneModePicker")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the SceneModePicker widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("selectionIndicator")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the SelectionIndicator widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("timeline")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the Timeline widget will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("navigationHelpButton")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to false, the navigation help button will not be created.")])]),e._v(" "),s("tr",[s("td",[e._v("navigationInstructionsInitiallyVisible")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.")])]),e._v(" "),s("tr",[s("td",[e._v("scene3DOnly")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("When true, each geometry instance will only be rendered in 3D to save GPU memory.")])]),e._v(" "),s("tr",[s("td",[e._v("shouldAnimate")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("true if the clock should attempt to advance simulation time by default, false otherwise.")])]),e._v(" "),s("tr",[s("td",[e._v("fullscreenElement")]),e._v(" "),s("td",[e._v("Element")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("document.body")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The element or id to be placed into fullscreen mode when the full screen button is pressed.")])]),e._v(" "),s("tr",[s("td",[e._v("useDefaultRenderLoop")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("True if this widget should control the render loop, false otherwise.")])]),e._v(" "),s("tr",[s("td",[e._v("targetFrameRate")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The target frame rate when using the default render loop.")])]),e._v(" "),s("tr",[s("td",[e._v("showRenderLoopErrors")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.")])]),e._v(" "),s("tr",[s("td",[e._v("automaticallyTrackDataSourceClocks")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently.")])]),e._v(" "),s("tr",[s("td",[e._v("contextOptions")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("Context and WebGL creation properties corresponding to options passed to Scene.")])]),e._v(" "),s("tr",[s("td",[e._v("orderIndependentTranslucency")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If true and the configuration supports it, use order independent translucency.")])]),e._v(" "),s("tr",[s("td",[e._v("creditContainer")]),e._v(" "),s("td",[e._v("Element | String")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.")])]),e._v(" "),s("tr",[s("td",[e._v("creditViewport")]),e._v(" "),s("td",[e._v("Element | String")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.")])]),e._v(" "),s("tr",[s("td",[e._v("terrainExaggeration")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("A scalar used to exaggerate the terrain. Note that terrain exaggeration will not modify any other primitive as they are positioned relative to the ellipsoid.")])]),e._v(" "),s("tr",[s("td",[e._v("shadows")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("Determines if shadows are cast by the sun.")])]),e._v(" "),s("tr",[s("td",[e._v("terrainShadows")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("3")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("Determines if the terrain casts or receives shadows from the sun.")])]),e._v(" "),s("tr",[s("td",[e._v("mapMode2D")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction.")])]),e._v(" "),s("tr",[s("td",[e._v("projectionPicker")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("If set to true, the ProjectionPicker widget will be created.")])]),e._v(" "),s("tr",[s("td",[e._v("accessToken")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("set accessToken of Cesium ion")])]),e._v(" "),s("tr",[s("td",[e._v("logo")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if default logo is displayed on the viewer.")])]),e._v(" "),s("tr",[s("td",[e._v("camera")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Scene camera position. Default positioning to China worldwide. "),s("strong",[e._v("structure: { position: { lng: number, lat: number, height: number }, heading: number, pitch: number, roll: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("TZcode")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("UTM")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Time zone code.")])]),e._v(" "),s("tr",[s("td",[e._v("UTCoffset")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("-(new Date().getTimezoneOffset())")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The time difference (minutes) of UTC time.")])]),e._v(" "),s("tr",[s("td",[e._v("removeCesiumScript")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Whether to remove CesiumJS script tags when vc-viewer is destroyed.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")]),e._v(" "),s("th",[e._v("source")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("selectedEntityChanged")]),e._v(" "),s("td",[e._v("Entity")]),e._v(" "),s("td",[e._v("Gets the event that is raised when the selected entity changes.")]),e._v(" "),s("td",[e._v("Viewer")])]),e._v(" "),s("tr",[s("td",[e._v("trackedEntityChanged")]),e._v(" "),s("td",[e._v("Entity")]),e._v(" "),s("td",[e._v("Gets the event that is raised when the tracked entity changes.")]),e._v(" "),s("td",[e._v("Viewer")])]),e._v(" "),s("tr",[s("td",[e._v("layerAdded")]),e._v(" "),s("td",[e._v("imageryLayer, index")]),e._v(" "),s("td",[e._v("An event that is raised when a layer is added to the collection. Event handlers are passed the layer that was added and the index at which it was added.")]),e._v(" "),s("td",[e._v("Viewer.imageryLayers")])]),e._v(" "),s("tr",[s("td",[e._v("layerMoved")]),e._v(" "),s("td",[e._v("imageryLayer, newIndex, oldIndex")]),e._v(" "),s("td",[e._v("An event that is raised when a layer changes position in the collection. Event handlers are passed the layer that was moved, its new index after the move, and its old index prior to the move.")]),e._v(" "),s("td",[e._v("Viewer.imageryLayers")])]),e._v(" "),s("tr",[s("td",[e._v("layerRemoved")]),e._v(" "),s("td",[e._v("imageryLayer, index")]),e._v(" "),s("td",[e._v("An event that is raised when a layer is removed from the collection. Event handlers are passed the layer that was removed and the index from which it was removed.")]),e._v(" "),s("td",[e._v("Viewer.imageryLayers")])]),e._v(" "),s("tr",[s("td",[e._v("layerShownOrHidden")]),e._v(" "),s("td",[e._v("imageryLayer, index, flag")]),e._v(" "),s("td",[e._v("An event that is raised when a layer is shown or hidden by setting the ImageryLayer#show property. Event handlers are passed a reference to this layer, the index of the layer in the collection, and a flag that is true if the layer is now shown or false if it is now hidden.")]),e._v(" "),s("td",[e._v("iewer.imageryLayers")])]),e._v(" "),s("tr",[s("td",[e._v("dataSourceAdded")]),e._v(" "),s("td",[e._v("dataSource")]),e._v(" "),s("td",[e._v("An event that is raised when a data source is added to the collection. Event handlers are passed the data source that was added.")]),e._v(" "),s("td",[e._v("Viewer.dataSources")])]),e._v(" "),s("tr",[s("td",[e._v("dataSourceMoved")]),e._v(" "),s("td",[e._v("dataSource")]),e._v(" "),s("td",[e._v("An event that is raised when a data source changes position in the collection. Event handlers are passed the data source that was moved, its new index after the move, and its old index prior to the move.")]),e._v(" "),s("td",[e._v("Viewer.dataSources")])]),e._v(" "),s("tr",[s("td",[e._v("dataSourceRemoved")]),e._v(" "),s("td",[e._v("dataSource")]),e._v(" "),s("td",[e._v("An event that is raised when a data source is removed from the collection. Event handlers are passed the data source that was removed.")]),e._v(" "),s("td",[e._v("Viewer.entities")])]),e._v(" "),s("tr",[s("td",[e._v("collectionChanged")]),e._v(" "),s("td",[e._v("collection, added, removed, changed")]),e._v(" "),s("td",[e._v("Gets the event that is fired when entities are added or removed from the collection. The generated event is a EntityCollection.collectionChangedEventCallback.")]),e._v(" "),s("td",[e._v("Viewer.entities")])]),e._v(" "),s("tr",[s("td",[e._v("morphComplete")]),e._v(" "),s("td",[e._v("object")]),e._v(" "),s("td",[e._v("The event fired at the completion of a scene transition.")]),e._v(" "),s("td",[e._v("Viewer.scene")])]),e._v(" "),s("tr",[s("td",[e._v("morphStart")]),e._v(" "),s("td",[e._v("object")]),e._v(" "),s("td",[e._v("The event fired at the beginning of a scene transition.")]),e._v(" "),s("td",[e._v("Viewer.scene")])]),e._v(" "),s("tr",[s("td",[e._v("postRender")]),e._v(" "),s("td",[e._v("scene")]),e._v(" "),s("td",[e._v("Gets the event that will be raised immediately after the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.")]),e._v(" "),s("td",[e._v("Viewer.scene")])]),e._v(" "),s("tr",[s("td",[e._v("preRender")]),e._v(" "),s("td",[e._v("scene")]),e._v(" "),s("td",[e._v("Gets the event that will be raised after the scene is updated and immediately before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.")]),e._v(" "),s("td",[e._v("Viewer.scene")])]),e._v(" "),s("tr",[s("td",[e._v("postUpdate")]),e._v(" "),s("td",[e._v("scene")]),e._v(" "),s("td",[e._v("Gets the event that will be raised immediately after the scene is updated and before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.")]),e._v(" "),s("td",[e._v("Viewer.scene")])]),e._v(" "),s("tr",[s("td",[e._v("preUpdate")]),e._v(" "),s("td",[e._v("scene")]),e._v(" "),s("td",[e._v("Gets the event that will be raised before the scene is updated or rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.")]),e._v(" "),s("td",[e._v("Viewer.scene")])]),e._v(" "),s("tr",[s("td",[e._v("renderError")]),e._v(" "),s("td",[e._v("scene, error")]),e._v(" "),s("td",[e._v("Gets the event that will be raised when an error is thrown inside the render function. The Scene instance and the thrown error are the only two parameters passed to the event handler. By default, errors are not rethrown after this event is raised, but that can be changed by setting the rethrowRenderErrors property.")]),e._v(" "),s("td",[e._v("Viewer.scene")])]),e._v(" "),s("tr",[s("td",[e._v("terrainProviderChanged")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Gets an event that's raised when the terrain provider is changed.")]),e._v(" "),s("td",[e._v("Viewer.scene")])]),e._v(" "),s("tr",[s("td",[e._v("changed")]),e._v(" "),s("td",[e._v("number")]),e._v(" "),s("td",[e._v("Gets the event that will be raised when the camera has changed by percentageChanged.")]),e._v(" "),s("td",[e._v("Viewer.camera")])]),e._v(" "),s("tr",[s("td",[e._v("moveEnd")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Gets the event that will be raised when the camera has stopped moving.")]),e._v(" "),s("td",[e._v("Viewer.camera")])]),e._v(" "),s("tr",[s("td",[e._v("moveStart")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Gets the event that will be raised at when the camera starts to move.")]),e._v(" "),s("td",[e._v("Viewer.camera")])]),e._v(" "),s("tr",[s("td",[e._v("onStop")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("An Event that is fired whenever Clock#stopTime is reached.")]),e._v(" "),s("td",[e._v("Viewer.clock")])]),e._v(" "),s("tr",[s("td",[e._v("onTick")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("An Event that is fired whenever Clock#tick is called.")]),e._v(" "),s("td",[e._v("Viewer.clock")])]),e._v(" "),s("tr",[s("td",[e._v("errorEvent")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Gets an event that is raised when the terrain provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.")]),e._v(" "),s("td",[e._v("Viewer.terrainProvider")])]),e._v(" "),s("tr",[s("td",[e._v("cameraClicked")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Gets an Event that is fired when the user clicks the camera icon.")]),e._v(" "),s("td",[e._v("Viewer.infoBox.viewModel")])]),e._v(" "),s("tr",[s("td",[e._v("closeClicked")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Gets an Event that is fired when the user closes the info box.")]),e._v(" "),s("td",[e._v("Viewer.infoBox.viewModel")])]),e._v(" "),s("tr",[s("td",[e._v("LEFT_CLICK")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse left click event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("LEFT_DOUBLE_CLICK")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse left double click event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("LEFT_DOWN")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse left button down event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("LEFT_UP")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse left button up event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("MIDDLE_CLICK")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse middle click event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("MIDDLE_DOWN")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse middle button down event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("MIDDLE_UP")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse middle button up event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("MOUSE_MOVE")]),e._v(" "),s("td",[e._v("{startPosition: point, endPosition: point}")]),e._v(" "),s("td",[e._v("Represents a mouse move event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("PINCH_END")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Represents the end of a two-finger event on a touch surface.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("PINCH_MOVE")]),e._v(" "),s("td",[e._v("{distance: {startPosition: point, endPosition: point}, angleAndHeight: {startPosition: point, endPosition: point}}")]),e._v(" "),s("td",[e._v("Represents a change of a two-finger event on a touch surface.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("PINCH_START")]),e._v(" "),s("td",[e._v("{position1: point, position2: point}")]),e._v(" "),s("td",[e._v("Represents the start of a two-finger event on a touch surface.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("RIGHT_CLICK")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse right click event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("RIGHT_DOWN")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse left button down event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("RIGHT_UP")]),e._v(" "),s("td",[e._v("{position: point}")]),e._v(" "),s("td",[e._v("Represents a mouse right button up event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])]),e._v(" "),s("tr",[s("td",[e._v("WHEEL")]),e._v(" "),s("td",[e._v("delta")]),e._v(" "),s("td",[e._v("Represents a mouse wheel event.")]),e._v(" "),s("td",[e._v("ScreenSpaceEventType")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Refer to the official documentation: "),t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html"}},[this._v("Viewer")])])])}],!1,null,null,null);t.default=v.exports}}]);
//# sourceMappingURL=98.254e35a13334fc7a1d83.js.map