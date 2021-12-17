// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e4k7L":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "088b4c0858ba51d9";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7BLcd":[function(require,module,exports) {
var _models = require("./Models/models");
window.onload = function() {
    document.getElementById("cartBtn").addEventListener("click", printCart);
    checkLocalStorage();
    fetchAndPrintData();
    printProducts();
};
let productI = new _models.Products("https://img01.ztat.net/article/spp-media-p1/975b832b5da135fa95459afac9e831dd/0497e1047c01452eabdaa5bf73f3ad42.jpg?imwidth=156", "https://img01.ztat.net/article/spp-media-p1/7ce6b3c186d73c6c83a3089280c4b4ab/b34654d89ccb47e3ac01747b101e83e0.jpg?imwidth=156&filter=packshot", "Anthony jacket thermo down", "", 2500, 2500, 1, "Anthony is a statement jacket cut from a thick down quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.", "black");
let productII = new _models.Products("https://img01.ztat.net/article/spp-media-p1/3c70ab6cbcf84a81aa4d93a0e8d61f5e/931ce05e03954e019b243f60ab5c3397.jpg?imwidth=156", "https://img01.ztat.net/article/spp-media-p1/ac203266f7a6444d97a055ee5d275914/25c10042c7d44bca9a4293ca4d32b142.jpg?imwidth=156&filter=packshot", "Sebastian jacket down", "", 3300, 3300, 1, "Sebastian is a statement jacket made from down. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.", "black");
let productIII = new _models.Products("https://img01.ztat.net/article/spp-media-p1/2e2653373d9d4600aca2884b21e1287e/111497f3cba0480290c3bd16ea81c4ab.jpg?imwidth=156", "https://img01.ztat.net/article/spp-media-p1/945e8d6415ec4253b36873f9c84c36fd/0af67baf0bbc42b4b7721cbde50c95b0.jpg?imwidth=156&filter=packshot", "Ali jacket down", "", 2300, 2300, 1, "Ali is a statement jacket made from down quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.", "black");
let productIV = new _models.Products("https://img01.ztat.net/article/spp-media-p1/4b47edaa76424f2b84c0b9f21c8abb3a/4258bda895964203be8fc47b799ba801.jpg?imwidth=156", "https://img01.ztat.net/article/spp-media-p1/1143f8a9a3064e4dae3cee774952e83c/e0800cdfa3b14d459f49032924513199.jpg?imwidth=156&filter=packshot", "Herbert thermo jacket", "", 4000, 4000, 1, "Herbert is a jacket made from quality down. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.", "black");
let productV = new _models.Products("https://img01.ztat.net/article/spp-media-p1/14f120b6e69a43babe509e2aeefd311f/b0fdb212532945049c376b356c3d73e8.jpg?imwidth=156", "https://img01.ztat.net/article/spp-media-p1/60bdde7f1afe4ca8adad1851473a1785/6cc8fe9adfa044ea98ad4a7ca83fb72e.jpg?imwidth=156&filter=packshot", "Helin jacket synthetic", "", 3500, 3500, 1, "Helin is a statement jacket cut from a wool quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.", "silver");
let productVI = new _models.Products("https://img01.ztat.net/article/spp-media-p1/1bd4f7998671401db5ec1be64b6ef189/8e691e6ad22f47848b19a729cb2bf445.jpg?imwidth=156", "https://img01.ztat.net/article/spp-media-p1/bf2d293f1ad04090818bd3860dff7f13/fdd5d12c96de4307989eb65199062b3d.jpg?imwidth=156&filter=packshot", "Ella vest down", "", 4300, 4300, 1, "Ella is a down vest cut from a thin wool quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.", "black");
let productVII = new _models.Products("https://img01.ztat.net/article/spp-media-p1/678b276155cd3f8ba6e661b963742508/e9b70c633451466788704ece7f5d2c81.jpg?imwidth=156", "https://img01.ztat.net/article/spp-media-p1/275782c86b8d338fa9f8a621bb3585cb/3a5d271abcac477ba9c6018f29122b56.jpg?imwidth=156&filter=packshot", "Shima jacket faux fur", "", 8000, 8000, 1, "Shima is a statement jacket cut from a thin wool quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.", "black");
let productVIII = new _models.Products("https://img01.ztat.net/article/spp-media-p1/fe881b5c02094390995ce8aaf7c99da3/cbe900b191ed48b5bcd3a2878b8059cb.jpg?imwidth=156", "https://img01.ztat.net/article/spp-media-p1/290bb64327674e7c86f18c5512f9b406/853cdb09743443c2b95a70125905416f.jpg?imwidth=156&filter=packshot", "Hannah jacket down", "", 10000, 10000, 1, "Jaqueline is a statement jacket cut from a thin wool quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.", "black");
let productArr = [
    productI,
    productII,
    productIII,
    productIV,
    productV,
    productVI,
    productVII,
    productVIII, 
];
let cartArr1 = [];
let cartQuanDiv = document.createElement("div");
cartQuanDiv.className = "cartQuanStyle";
let cartQuantity1;
//skapar en funktion som hämtar lagrade produkter
function checkLocalStorage() {
    cartArr1 = JSON.parse(localStorage.getItem("product")) || [];
    cartQuantity1 = JSON.parse(localStorage.getItem("cartQuantity")) || 0;
}
//skapar en funktion som lagrar produkterna
function toLocalStorage(cartArr, cartQuantity) {
    localStorage.setItem("product", JSON.stringify(cartArr));
    localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
}
function printProducts() {
    let productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";
    if (cartQuantity1 < 1) {
        cartQuantity1 = 0;
        cartQuanDiv.style.display = "none";
    } else {
        cartQuanDiv.innerHTML = "";
        cartQuanDiv.style.display = "block";
        cartQuanDiv.innerHTML = cartQuantity1.toString();
    }
    for(let i = 0; i < productArr.length; i++){
        let name = document.createElement("h2");
        let sizeContainer = document.createElement("div");
        let colorContainer = document.createElement("div");
        let sizeS = document.createElement("button");
        let sizeM = document.createElement("button");
        let sizeL = document.createElement("button");
        let colorBlack = document.createElement("button");
        let colorSilver = document.createElement("button");
        let colorGreen = document.createElement("button");
        let img = document.createElement("img");
        let img2 = document.createElement("img");
        let price = document.createElement("span");
        let btnDiv = document.createElement("div");
        let infoBtn = document.createElement("button");
        let addToCartBtn = document.createElement("button");
        let productsDiv = document.createElement("div");
        let cartBtn = document.getElementById("cartBtn");
        img.src = productArr[i].firstPicture;
        img.alt = productArr[i].name;
        img2.src = productArr[i].secondPicture;
        img2.alt = productArr[i].name;
        name.innerHTML = productArr[i].name;
        sizeContainer.className = "sizeContainer";
        sizeContainer.innerText = "Size";
        colorContainer.className = "colorContainer";
        colorContainer.innerText = "Color";
        colorBlack.className = "blackBtn";
        colorSilver.className = "silverBtn";
        colorGreen.className = "greenBtn";
        sizeS.innerHTML = "S";
        sizeS.addEventListener("click", ()=>{
            productArr[i].size = "S";
            sizeS.className = "selectedSize";
            sizeM.className = "";
            sizeL.className = "";
        });
        sizeM.innerHTML = "M";
        sizeM.addEventListener("click", ()=>{
            productArr[i].size = "M";
            sizeM.className = "selectedSize";
            sizeS.className = "";
            sizeL.className = "";
        });
        sizeL.innerHTML = "L";
        sizeL.addEventListener("click", ()=>{
            productArr[i].size = "L";
            sizeL.className = "selectedSize";
            sizeS.className = "";
            sizeM.className = "";
        });
        colorBlack.addEventListener("click", ()=>{
            productArr[i].color = "black";
            colorBlack.id = "selectedColorBlack";
            colorSilver.id = "";
            colorGreen.id = "";
        });
        colorSilver.addEventListener("click", ()=>{
            productArr[i].color = "silver";
            colorSilver.id = "selectedColor";
            colorBlack.id = "";
            colorGreen.id = "";
        });
        colorGreen.addEventListener("click", ()=>{
            productArr[i].color = "green";
            colorGreen.id = "selectedColor";
            colorBlack.id = "";
            colorSilver.id = "";
        });
        img.src = productArr[i].firstPicture;
        img2.src = productArr[i].secondPicture;
        price.innerHTML = productArr[i].price.toString() + " kr";
        addToCartBtn.innerHTML = "+";
        infoBtn.innerHTML = "i";
        productsDiv.appendChild(img);
        productsDiv.appendChild(img2);
        productsDiv.appendChild(name);
        productsDiv.appendChild(price);
        sizeContainer.appendChild(sizeS);
        sizeContainer.appendChild(sizeM);
        sizeContainer.appendChild(sizeL);
        productsDiv.appendChild(sizeContainer);
        colorContainer.appendChild(colorBlack);
        colorContainer.appendChild(colorSilver);
        colorContainer.appendChild(colorGreen);
        productsDiv.appendChild(colorContainer);
        btnDiv.appendChild(infoBtn);
        btnDiv.appendChild(addToCartBtn);
        productsDiv.appendChild(btnDiv);
        productContainer.appendChild(productsDiv);
        cartBtn.appendChild(cartQuanDiv);
        productContainer.className = "productContainerStyle";
        btnDiv.className = "btnDivStyle";
        infoBtn.className = "btnStyle";
        addToCartBtn.className = "cartBtnStyle";
        img.className = "firstImg";
        img2.className = "secondImg";
        addToCartBtn.addEventListener("click", function addToCart() {
            if (productArr[i].size !== "") {
                cartArr1.push(productArr[i]);
                cartQuantity1++;
                cartQuanDiv.innerHTML = "";
                cartQuanDiv.style.display = "block";
                cartQuanDiv.innerHTML = cartQuantity1.toString();
                addToCartBtn.removeEventListener("click", addToCart);
                addToCartBtn.addEventListener("click", printCart);
                addToCartBtn.innerHTML = "✓";
                addToCartBtn.className = "inCart";
                toLocalStorage(cartArr1, cartQuantity1);
            }
        });
        for(let j = 0; j < cartArr1.length; j++)if (productArr[i].name === cartArr1[j].name) {
            addToCartBtn.addEventListener("click", printCart);
            addToCartBtn.innerHTML = "✓";
            addToCartBtn.className = "inCart";
        }
        img.style.display = "block";
        img2.style.display = "none";
        img.onmouseover = function() {
            img.style.display = "none";
            img2.style.display = "block";
        };
        img2.onmouseout = function() {
            img.style.display = "block";
            img2.style.display = "none";
        };
        infoBtn.addEventListener("click", ()=>{
            detailClick(i);
        });
    }
}
function detailClick(position) {
    let name = document.createElement("h2");
    let img2 = document.createElement("img");
    let price = document.createElement("p");
    let infotext = document.createElement("span");
    let detailDiv = document.createElement("div");
    let detailContainer = document.getElementById("cart-container");
    detailContainer.innerHTML = "";
    name.innerHTML = productArr[position].name;
    img2.src = productArr[position].secondPicture;
    infotext.innerHTML = productArr[position].detailText;
    price.innerHTML = productArr[position].price.toString() + " kr";
    detailDiv.appendChild(img2);
    detailDiv.appendChild(name);
    detailDiv.appendChild(price);
    detailDiv.appendChild(infotext);
    detailContainer.appendChild(detailDiv);
    handleClick();
}
function printCart() {
    console.log(cartArr1);
    let cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
    for(let i = 0; i < cartArr1.length; i++){
        let productDiv = document.createElement("div");
        let productDetails = document.createElement("span");
        let name = document.createElement("h2");
        let size = document.createElement("span");
        let color = document.createElement("span");
        let img2 = document.createElement("img");
        let totalPrice = document.createElement("span");
        let quantityContainer = document.createElement("div");
        let quantity = document.createElement("span");
        let plusBtn = document.createElement("button");
        let minusBtn = document.createElement("button");
        let removeBtn = document.createElement("button");
        let qtyDisplay = document.createElement("div");
        let productDisplay = document.createElement("div");
        let priceDisplay = document.createElement("div");
        let softDisplay = document.createElement("div");
        plusBtn.addEventListener("click", ()=>{
            addQuantity(i);
            calculatePrice(i);
            printCart();
            toLocalStorage(cartArr1, cartQuantity1);
        });
        minusBtn.addEventListener("click", ()=>{
            subtractQuantity(i);
            calculatePrice(i);
            printCart();
            toLocalStorage(cartArr1, cartQuantity1);
        });
        name.innerHTML = cartArr1[i].name;
        size.innerHTML = "Size: " + cartArr1[i].size;
        color.innerHTML = "Color: " + cartArr1[i].color;
        img2.src = cartArr1[i].secondPicture;
        totalPrice.innerHTML = "<p>Total: </p>" + cartArr1[i].totalPrice.toString() + " kr";
        quantity.innerHTML = cartArr1[i].quantity.toString();
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.className = "removeBtn";
        plusBtn.innerHTML = '<i class="fas fa-plus"></i>';
        minusBtn.innerHTML = '<i class="fas fa-minus"></i>';
        qtyDisplay.innerHTML = "<p>qty</p>";
        productDisplay.innerHTML = "<p>product</p>";
        quantityContainer.className = "quantityContainer";
        productDetails.className = "productSpec";
        qtyDisplay.className = "qtyDisplay";
        priceDisplay.className = "priceDisplay";
        productDisplay.className = "productDisplay";
        softDisplay.className = "softDisplay";
        minusBtn.className = "minusBtn";
        plusBtn.className = "plusBtn";
        removeBtn.addEventListener("click", ()=>{
            removeCartItem(i);
        });
        productDisplay.appendChild(name);
        productDisplay.appendChild(img2);
        productDetails.appendChild(size);
        productDetails.appendChild(color);
        priceDisplay.appendChild(totalPrice);
        productDiv.appendChild(productDetails);
        softDisplay.appendChild(minusBtn);
        softDisplay.appendChild(quantity);
        softDisplay.appendChild(plusBtn);
        softDisplay.appendChild(removeBtn);
        productDiv.appendChild(quantityContainer);
        cartContainer.appendChild(productDiv);
        quantityContainer.appendChild(priceDisplay);
        quantityContainer.appendChild(qtyDisplay);
        quantityContainer.appendChild(productDisplay);
        qtyDisplay.appendChild(softDisplay);
    }
    if (cartContainer.innerHTML == "") {
        let emptyDiv = document.createElement("div");
        let emptyMsg = document.createElement("p");
        let sadSmiley = document.createElement("span");
        emptyMsg.innerHTML = "Your cart is empty";
        sadSmiley.innerHTML = '<i class="far fa-frown"></i>';
        emptyDiv.className = "emptyDivStyle";
        emptyMsg.className = "emptyMsgStyle";
        sadSmiley.className = "smileyStyle";
        cartContainer.appendChild(emptyDiv);
        emptyDiv.appendChild(emptyMsg);
        emptyDiv.appendChild(sadSmiley);
    } else {
        let cartBtnContainer = document.createElement("div");
        let continueShopping = document.createElement("button");
        let goToCheckOut = document.createElement("button");
        let checkoutLink = document.createElement("a");
        goToCheckOut.innerHTML = "Go to Checkout";
        checkoutLink.href = "./checkout.html";
        continueShopping.innerHTML = "Continue Shopping";
        continueShopping.addEventListener("click", ()=>{
            modal.style.display = "none";
        });
        cartBtnContainer.id = "cartBtns";
        checkoutLink.appendChild(goToCheckOut);
        cartBtnContainer.appendChild(checkoutLink);
        cartBtnContainer.appendChild(continueShopping);
        cartContainer.appendChild(cartBtnContainer);
        toLocalStorage(cartArr1, cartQuantity1);
    }
    handleClick();
}
function addQuantity(position) {
    cartArr1[position].quantity += 1;
    return cartArr1[position].quantity;
}
function subtractQuantity(position) {
    cartArr1[position].quantity -= 1;
    if (cartArr1[position].quantity === 0) cartArr1[position].quantity = 1;
    else return cartArr1[position].quantity;
}
function calculatePrice(position) {
    cartArr1[position].totalPrice = cartArr1[position].price * cartArr1[position].quantity;
    return cartArr1[position].totalPrice;
}
function removeCartItem(position) {
    cartArr1[position].quantity = 1;
    calculatePrice(position);
    cartQuantity1--;
    console.log(cartQuantity1);
    cartQuanDiv.innerHTML = "";
    cartQuanDiv.style.display = "block";
    cartQuanDiv.innerHTML = cartQuantity1.toString();
    cartArr1.splice(position, 1);
    toLocalStorage(cartArr1, cartQuantity1);
    window.onclick = function(event) {
        if (event.target == modal) modal.style.display = "none";
    };
    printCart();
    printProducts();
}
function fetchAndPrintData() {
    fetch("https://dark-sky.p.rapidapi.com/59.3293,18.0686?units=auto&lang=en", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "dark-sky.p.rapidapi.com",
            "x-rapidapi-key": "24a44dd15emsh4566a472b62617ap1e4e9fjsn6119876c45be"
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data.currently.temperature);
        let temp = document.getElementById("temp");
        temp.innerHTML = "Current temperature:  " + Math.round(data.currently.temperature) + " °C";
    }).catch((err)=>{
        console.error(err);
    });
}
let modal = document.getElementById("productModal");
let spanis = document.getElementsByClassName("disappear")[0];
function handleClick() {
    modal.style.display = "block";
}
spanis.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) modal.style.display = "none";
};

},{"./Models/models":"5wRa0"}],"5wRa0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Products", ()=>Products
);
class Products {
    constructor(firstPicture, secondPicture, name, size, price, totalPrice, quantity, detailText, color){
        this.firstPicture = firstPicture;
        this.secondPicture = secondPicture;
        this.name = name;
        this.size = size;
        this.price = price;
        this.totalPrice = totalPrice;
        this.quantity = quantity;
        this.detailText = detailText;
        this.color = color;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["e4k7L","7BLcd"], "7BLcd", "parcelRequire2445")

//# sourceMappingURL=products.58ba51d9.js.map
