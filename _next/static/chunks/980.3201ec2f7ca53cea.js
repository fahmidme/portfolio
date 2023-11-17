(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{6980:function(n,e,t){"use strict";t.r(e),t.d(e,{DisplacementSphere:function(){return y}});var r=t(8616),i=t(1799),c=t(9815),o=t(5893),a=t(7785),u=t(7260),g=t(6240),l=t(7378),f=t(4529),v=t(7294),s=t(9477),d=t(2362),p=t(3142),m=t(9030),x=t.n(m),_={stiffness:30,damping:20,mass:2},y=function(n){var e=(0,a.Fg)(),t=e.rgbBackground,m=e.themeId,y=e.colorWhite,z=(0,v.useRef)(Date.now()),P=(0,v.useRef)(),h=(0,v.useRef)(),w=(0,v.useRef)(),b=(0,v.useRef)(),R=(0,v.useRef)(),S=(0,v.useRef)(),C=(0,v.useRef)(),E=(0,v.useRef)(),L=(0,v.useRef)(),k=(0,v.useRef)(),I=(0,g.J)(),D=(0,f.NM)(P),M=(0,f.iP)(),F=(0,l.q)(0,_),j=(0,l.q)(0,_);return(0,v.useEffect)((function(){var n=window.innerWidth,e=window.innerHeight;return h.current=new s.FM8(.8,.5),w.current=new s.CP7({canvas:P.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),w.current.setSize(n,e),w.current.setPixelRatio(1),w.current.outputEncoding=s.knz,b.current=new s.cPb(54,n/e,.1,100),b.current.position.z=52,R.current=new s.xsS,E.current=new s.xoR,E.current.onBeforeCompile=function(n){C.current=s.rDY.merge([n.uniforms,{time:{type:"f",value:0}}]),n.uniforms=C.current,n.vertexShader='//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\n#define PHONG\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfloat turbulence(vec3 p) {\n  float w = 100.0;\n  float t = -.5;\n  for (float f = 1.0 ; f <= 10.0 ; f++) {\n    float power = pow(2.0, f);\n    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\n  }\n  return t;\n}\n\n// START\nuniform float time;\nvarying vec2 vUv;\nvarying float noise;\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n  vUv = uv;\n\n  noise = turbulence(0.01 * position + normal + time * 0.8);\n  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\n}\n',n.fragmentShader="#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 newPosition;\nvarying float noise;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\t#include <clipping_planes_fragment>\n\n  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\n  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\n  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n  \n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n}\n"},(0,v.startTransition)((function(){L.current=new s.Aip(32,69,69),k.current=new s.Kj0(L.current,E.current),k.current.position.z=0,k.current.modifier=Math.random(),R.current.add(k.current)})),function(){(0,p.in)(R.current),(0,p.e8)(w.current)}}),[]),(0,v.useEffect)((function(){var n=new s.Ox3(y,.6),e=new s.Mig(y,"light"===m?.8:.1);return n.position.z=200,n.position.x=100,n.position.y=100,S.current=[n,e],R.current.background=(0,r.Z)(s.Ilk,(0,c.Z)((0,d.Zm)(t))),S.current.forEach((function(n){return R.current.add(n)})),function(){(0,p.Ji)(S.current)}}),[t,y,m]),(0,v.useEffect)((function(){var n=M.width,e=M.height,t=e+.3*e;w.current.setSize(n,t),b.current.aspect=n/t,b.current.updateProjectionMatrix(),I&&w.current.render(R.current,b.current),n<=d.BC.mobile?(k.current.position.x=14,k.current.position.y=10):n<=d.BC.tablet?(k.current.position.x=18,k.current.position.y=14):(k.current.position.x=22,k.current.position.y=16)}),[I,M]),(0,v.useEffect)((function(){var n=function(n){var e=n.clientX/window.innerWidth,t=n.clientY/window.innerHeight;F.set(t/2),j.set(e/2)};return!I&&D&&window.addEventListener("mousemove",n),function(){window.removeEventListener("mousemove",n)}}),[D,I,F,j]),(0,v.useEffect)((function(){var n,e=function(){n=requestAnimationFrame(e),void 0!==C.current&&(C.current.time.value=5e-5*(Date.now()-z.current)),k.current.rotation.z+=.001,k.current.rotation.x=F.get(),k.current.rotation.y=j.get(),w.current.render(R.current,b.current)};return!I&&D?e():w.current.render(R.current,b.current),function(){cancelAnimationFrame(n)}}),[D,I,F,j]),(0,o.jsx)(u.u,{in:!0,timeout:3e3,children:function(e){return(0,o.jsx)("canvas",(0,i.Z)({"aria-hidden":!0,className:x().canvas,"data-visible":e,ref:P},n))}})}},3142:function(n,e,t){"use strict";t.d(e,{Et:function(){return g},Ji:function(){return s},Zf:function(){return u},e8:function(){return v},in:function(){return l},x2:function(){return d}});var r=t(9477),i=t(4976),c=t(7607);r.CtF.enabled=!0;var o=new i._,a=new c.E;o.setDecoderPath("/draco/"),a.setDRACOLoader(o);var u=a,g=new r.dpR,l=function(n){null===n||void 0===n||n.traverse((function(n){if(n.isMesh)if(n.geometry.dispose(),n.material.isMaterial)f(n.material);else{var e=!0,t=!1,r=void 0;try{for(var i,c=n.material[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var o=i.value;f(o)}}catch(a){t=!0,r=a}finally{try{e||null==c.return||c.return()}finally{if(t)throw r}}}}))},f=function(n){n.dispose();var e=!0,t=!1,r=void 0;try{for(var i,c=Object.keys(n)[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var o,a,u,g=n[i.value];if(g&&"object"===typeof g&&"minFilter"in g)g.dispose(),null===(o=g.source)||void 0===o||null===(a=o.data)||void 0===a||null===(u=a.close)||void 0===u||u.call(a)}}catch(l){t=!0,r=l}finally{try{e||null==c.return||c.return()}finally{if(t)throw r}}},v=function(n){n.dispose(),n=null},s=function(n){var e=!0,t=!1,r=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var o=i.value;o.parent.remove(o)}}catch(a){t=!0,r=a}finally{try{e||null==c.return||c.return()}finally{if(t)throw r}}},d=function(n,e){var t;return e.traverse((function(e){e.name===n&&(t=e)})),t}},9030:function(n){n.exports={canvas:"DisplacementSphere_canvas__zrcVe"}},8616:function(n,e,t){"use strict";function r(n,e){return r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},r(n,e)}function i(n,e){return r(n,e)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function o(n,e,t){return o=c()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(n,r));return t&&i(c,t.prototype),c},o.apply(null,arguments)}function a(n,e,t){return o.apply(null,arguments)}t.d(e,{Z:function(){return a}})}}]);