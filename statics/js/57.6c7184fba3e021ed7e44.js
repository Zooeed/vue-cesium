(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{TUoj:function(e,t,s){"use strict";s.r(t);var a=s("JFUb"),r=Object(a.a)({data:function(){return{alpha:1,brightness:1,contrast:1,imageryProvider:{}}},methods:{ready:function(e){var t=e.Cesium;e.viewer;this.imageryProvider=new t.MapboxImageryProvider({mapId:"mapbox.streets"})}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("ImageryLayer")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),s("h3",[e._v("Load an ImageryLayer to viewer")]),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:e.ready}},[s("vc-layer-imagery",{ref:"layer",attrs:{alpha:e.alpha,imageryProvider:e.imageryProvider,brightness:e.brightness,contrast:e.contrast}})],1),e._v(" "),s("div",{staticClass:"demo-tool"},[s("span",[e._v("alpha")]),e._v(" "),s("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:e.alpha,callback:function(t){e.alpha=t},expression:"alpha"}}),e._v(" "),s("span",[e._v("brightness")]),e._v(" "),s("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:e.brightness,callback:function(t){e.brightness=t},expression:"brightness"}}),e._v(" "),s("span",[e._v("contrast")]),e._v(" "),s("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:e.contrast,callback:function(t){e.contrast=t},expression:"contrast"}})],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(1),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(2),e._v(" "),s("hr"),e._v(" "),e._m(3),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(4),e._v(" "),s("hr")],1)}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The "),s("code",{pre:!0},[e._v("vc-layer-imagery")]),e._v(" component is used to load Cesium images. You can directly specify the "),s("code",{pre:!0},[e._v("imageryProvider")]),e._v(" of "),s("code",{pre:!0},[e._v("vc-layer-imagery")]),e._v(" to load the image, or you can mount the subcomponent "),s("code",{pre:!0},[e._v("vc-provider-imager-xxx")]),e._v(" to load the image.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-layer-imagery")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"layer"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":alpha")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"alpha"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":imageryProvider")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"imageryProvider"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":brightness")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"brightness"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":contrast")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"contrast"')]),e._v("\n      >")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-layer-imagery")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"demo-tool"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("alpha"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vue-slider")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"alpha"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":min")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":max")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":interval")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0.01"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vue-slider")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("brightness"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vue-slider")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"brightness"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":min")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":max")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"3"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":interval")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0.01"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vue-slider")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("contrast"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vue-slider")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"contrast"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":min")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":max")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"3"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":interval")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0.01"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vue-slider")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("alpha")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("brightness")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("contrast")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("imageryProvider")]),e._v(": {}\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = cesiumInstance\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".imageryProvider = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.MapboxImageryProvider({\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("mapId")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'mapbox.streets'")]),e._v("\n        })\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("alpha")]),e._v(" "),s("td",[e._v("Number|function")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The alpha blending value of this layer, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile.")])]),e._v(" "),s("tr",[s("td",[e._v("brightness")]),e._v(" "),s("td",[e._v("Number|function")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the brightness is required, and it is expected to return the brightness value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),e._v(" "),s("tr",[s("td",[e._v("contrast")]),e._v(" "),s("td",[e._v("Number|function")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the contrast is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),e._v(" "),s("tr",[s("td",[e._v("hue")]),e._v(" "),s("td",[e._v("Number|function")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the hue is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),e._v(" "),s("tr",[s("td",[e._v("saturation")]),e._v(" "),s("td",[e._v("Number|function")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the saturation is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),e._v(" "),s("tr",[s("td",[e._v("gamma")]),e._v(" "),s("td",[e._v("Number|function")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),e._v(" "),s("tr",[s("td",[e._v("splitDirection")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The ImagerySplitDirection split to apply to this layer.  "),s("strong",[e._v("LEFT: -1, NONE: 0, RIGHT: 1")])])]),e._v(" "),s("tr",[s("td",[e._v("minificationFilter")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("9729")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The texture minification filter to apply to this layer. Possible values are TextureMinificationFilter.LINEAR and TextureMinificationFilter.NEAREST. "),s("strong",[e._v("NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986, NEAREST_MIPMAP_NEAREST: 9984")])])]),e._v(" "),s("tr",[s("td",[e._v("magnificationFilter")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("9729")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The texture minification filter to apply to this layer. Possible values are TextureMagnificationFilter.LINEAR and TextureMagnificationFilter.NEAREST. "),s("strong",[e._v("NEAREST: 9728, LINEAR: 9729")])])]),e._v(" "),s("tr",[s("td",[e._v("show")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" True if the layer is shown; otherwise, false.")])]),e._v(" "),s("tr",[s("td",[e._v("maximumAnisotropy")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("maximum supported")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.")])]),e._v(" "),s("tr",[s("td",[e._v("minimumTerrainLevel")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.")])]),e._v(" "),s("tr",[s("td",[e._v("maximumTerrainLevel")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.")])]),e._v(" "),s("tr",[s("td",[e._v("cutoutRectangle")]),e._v(" "),s("td",[e._v("Rectangle")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Cartographic rectangle for cutting out a portion of this ImageryLayer.")])]),e._v(" "),s("tr",[s("td",[e._v("colorToAlpha")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Color to be used as alpha.")])]),e._v(" "),s("tr",[s("td",[e._v("colorToAlphaThreshold")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.004")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Threshold for color-to-alpha.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html"}},[this._v("ImageryLayer")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ready")]),e._v(" "),s("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),s("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);t.default=r.exports},fukg:function(e,t,s){e.exports=s("TUoj")}}]);
//# sourceMappingURL=57.6c7184fba3e021ed7e44.js.map