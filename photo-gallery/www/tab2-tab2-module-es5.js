function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
    \**************************************************************************/

  /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle */

  /***/
  function node_modulesCapacitorCoreDistEsmCorePluginDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
      return CameraSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
      return CameraDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
      return CameraResultType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
      return FilesystemDirectory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
      return FilesystemEncoding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
      return HapticsImpactStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
      return HapticsNotificationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
      return KeyboardStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
      return KeyboardResize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
      return ActionSheetOptionStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
      return PermissionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
      return PhotosAlbumType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
      return StatusBarStyle;
    });

    var CameraSource;

    (function (CameraSource) {
      CameraSource["Prompt"] = "PROMPT";
      CameraSource["Camera"] = "CAMERA";
      CameraSource["Photos"] = "PHOTOS";
    })(CameraSource || (CameraSource = {}));

    var CameraDirection;

    (function (CameraDirection) {
      CameraDirection["Rear"] = "REAR";
      CameraDirection["Front"] = "FRONT";
    })(CameraDirection || (CameraDirection = {}));

    var CameraResultType;

    (function (CameraResultType) {
      CameraResultType["Uri"] = "uri";
      CameraResultType["Base64"] = "base64";
      CameraResultType["DataUrl"] = "dataUrl";
    })(CameraResultType || (CameraResultType = {}));

    var FilesystemDirectory;

    (function (FilesystemDirectory) {
      /**
       * The Application directory
       */
      FilesystemDirectory["Application"] = "APPLICATION";
      /**
       * The Documents directory
       */

      FilesystemDirectory["Documents"] = "DOCUMENTS";
      /**
       * The Data directory
       */

      FilesystemDirectory["Data"] = "DATA";
      /**
       * The Cache directory
       */

      FilesystemDirectory["Cache"] = "CACHE";
      /**
       * The external directory (Android only)
       */

      FilesystemDirectory["External"] = "EXTERNAL";
      /**
       * The external storage directory (Android only)
       */

      FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
    })(FilesystemDirectory || (FilesystemDirectory = {}));

    var FilesystemEncoding;

    (function (FilesystemEncoding) {
      FilesystemEncoding["UTF8"] = "utf8";
      FilesystemEncoding["ASCII"] = "ascii";
      FilesystemEncoding["UTF16"] = "utf16";
    })(FilesystemEncoding || (FilesystemEncoding = {}));

    var HapticsImpactStyle;

    (function (HapticsImpactStyle) {
      HapticsImpactStyle["Heavy"] = "HEAVY";
      HapticsImpactStyle["Medium"] = "MEDIUM";
      HapticsImpactStyle["Light"] = "LIGHT";
    })(HapticsImpactStyle || (HapticsImpactStyle = {}));

    var HapticsNotificationType;

    (function (HapticsNotificationType) {
      HapticsNotificationType["SUCCESS"] = "SUCCESS";
      HapticsNotificationType["WARNING"] = "WARNING";
      HapticsNotificationType["ERROR"] = "ERROR";
    })(HapticsNotificationType || (HapticsNotificationType = {}));

    var KeyboardStyle;

    (function (KeyboardStyle) {
      KeyboardStyle["Dark"] = "DARK";
      KeyboardStyle["Light"] = "LIGHT";
    })(KeyboardStyle || (KeyboardStyle = {}));

    var KeyboardResize;

    (function (KeyboardResize) {
      KeyboardResize["Body"] = "body";
      KeyboardResize["Ionic"] = "ionic";
      KeyboardResize["Native"] = "native";
      KeyboardResize["None"] = "none";
    })(KeyboardResize || (KeyboardResize = {}));

    var ActionSheetOptionStyle;

    (function (ActionSheetOptionStyle) {
      ActionSheetOptionStyle["Default"] = "DEFAULT";
      ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
      ActionSheetOptionStyle["Cancel"] = "CANCEL";
    })(ActionSheetOptionStyle || (ActionSheetOptionStyle = {})); //


    var PermissionType;

    (function (PermissionType) {
      PermissionType["Camera"] = "camera";
      PermissionType["Photos"] = "photos";
      PermissionType["Geolocation"] = "geolocation";
      PermissionType["Notifications"] = "notifications";
      PermissionType["ClipboardRead"] = "clipboard-read";
      PermissionType["ClipboardWrite"] = "clipboard-write";
    })(PermissionType || (PermissionType = {}));

    var PhotosAlbumType;

    (function (PhotosAlbumType) {
      /**
       * Album is a "smart" album (such as Favorites or Recently Added)
       */
      PhotosAlbumType["Smart"] = "smart";
      /**
       * Album is a cloud-shared album
       */

      PhotosAlbumType["Shared"] = "shared";
      /**
       * Album is a user-created album
       */

      PhotosAlbumType["User"] = "user";
    })(PhotosAlbumType || (PhotosAlbumType = {}));

    var StatusBarStyle;

    (function (StatusBarStyle) {
      /**
       * Light text for dark backgrounds.
       */
      StatusBarStyle["Dark"] = "DARK";
      /**
       * Dark text for light backgrounds.
       */

      StatusBarStyle["Light"] = "LIGHT";
    })(StatusBarStyle || (StatusBarStyle = {})); //# sourceMappingURL=core-plugin-definitions.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/global.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
    \*********************************************************/

  /*! exports provided: Capacitor, Plugins */

  /***/
  function node_modulesCapacitorCoreDistEsmGlobalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
      return Capacitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Plugins", function () {
      return Plugins;
    });
    /* harmony import */


    var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./web-runtime */
    "./node_modules/@capacitor/core/dist/esm/web-runtime.js"); // Create our default Capacitor instance, which will be
    // overridden on native platforms


    var Capacitor = function (globalThis) {
      // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
      // Ensure the global is assigned the same Capacitor instance,
      // then export Capacitor so it can be imported in other modules
      return globalThis.Capacitor = globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]();
    }( // figure out the current globalThis, such as "window", "self" or "global"
    // ensure errors are not thrown in an node SSR environment or web worker
    typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

    var Plugins = Capacitor.Plugins; //# sourceMappingURL=global.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
    \********************************************************/

  /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, Capacitor, Plugins, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */

  /***/
  function node_modulesCapacitorCoreDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"];
    });
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global */
    "./node_modules/@capacitor/core/dist/esm/global.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Plugins", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"];
    });
    /* harmony import */


    var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web-plugins */
    "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"];
    });
    /* harmony import */


    var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web/index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/util.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
    \*******************************************************/

  /*! exports provided: extend, uuid4 */

  /***/
  function node_modulesCapacitorCoreDistEsmUtilJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extend", function () {
      return extend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uuid4", function () {
      return uuid4;
    });

    var extend = function extend(target) {
      var objs = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
      }

      objs.forEach(function (o) {
        if (o && typeof o === 'object') {
          for (var k in o) {
            if (o.hasOwnProperty(k)) {
              target[k] = o[k];
            }
          }
        }
      });
      return target;
    };

    var uuid4 = function uuid4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }; //# sourceMappingURL=util.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
    \**************************************************************/

  /*! exports provided: registerWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */

  /***/
  function node_modulesCapacitorCoreDistEsmWebPluginsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
      return registerWebPlugin;
    });
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./global */
    "./node_modules/@capacitor/core/dist/esm/global.js");
    /* harmony import */


    var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./web/index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web/accessibility */
    "./node_modules/@capacitor/core/dist/esm/web/accessibility.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
    });
    /* harmony import */


    var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web/app */
    "./node_modules/@capacitor/core/dist/esm/web/app.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"];
    });
    /* harmony import */


    var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./web/browser */
    "./node_modules/@capacitor/core/dist/esm/web/browser.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"];
    });
    /* harmony import */


    var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./web/camera */
    "./node_modules/@capacitor/core/dist/esm/web/camera.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"];
    });
    /* harmony import */


    var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./web/clipboard */
    "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"];
    });
    /* harmony import */


    var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./web/filesystem */
    "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"];
    });
    /* harmony import */


    var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./web/geolocation */
    "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"];
    });
    /* harmony import */


    var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./web/device */
    "./node_modules/@capacitor/core/dist/esm/web/device.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"];
    });
    /* harmony import */


    var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./web/local-notifications */
    "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"];
    });
    /* harmony import */


    var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./web/share */
    "./node_modules/@capacitor/core/dist/esm/web/share.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"];
    });
    /* harmony import */


    var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./web/modals */
    "./node_modules/@capacitor/core/dist/esm/web/modals.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"];
    });
    /* harmony import */


    var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./web/motion */
    "./node_modules/@capacitor/core/dist/esm/web/motion.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"];
    });
    /* harmony import */


    var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./web/network */
    "./node_modules/@capacitor/core/dist/esm/web/network.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"];
    });
    /* harmony import */


    var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./web/permissions */
    "./node_modules/@capacitor/core/dist/esm/web/permissions.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"];
    });
    /* harmony import */


    var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./web/splash-screen */
    "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"];
    });
    /* harmony import */


    var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./web/storage */
    "./node_modules/@capacitor/core/dist/esm/web/storage.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"];
    });
    /* harmony import */


    var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./web/toast */
    "./node_modules/@capacitor/core/dist/esm/web/toast.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"];
    });

    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);

    var registerWebPlugin = function registerWebPlugin(plugin) {
      Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
    }; //# sourceMappingURL=web-plugins.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
    \**************************************************************/

  /*! exports provided: CapacitorWeb */

  /***/
  function node_modulesCapacitorCoreDistEsmWebRuntimeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function () {
      return CapacitorWeb;
    });

    var CapacitorWeb =
    /** @class */
    function () {
      function CapacitorWeb() {
        var _this = this;

        this.platform = 'web';
        this.isNative = false; // Need to assign here to avoid having to define every plugin but still
        // get the typed benefits of the provided plugins in PluginRegistry

        this.Plugins = {}; // Build a proxy for the Plugins object that returns the "Noop Plugin"
        // if a plugin isn't available

        this.Plugins = new Proxy(this.Plugins, {
          get: function get(target, prop) {
            if (typeof target[prop] === 'undefined') {
              var thisRef_1 = _this;
              return new Proxy({}, {
                get: function get(_target, _prop) {
                  if (typeof _target[_prop] === 'undefined') {
                    return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                  } else {
                    return _target[_prop];
                  }
                }
              });
            } else {
              return target[prop];
            }
          }
        });
      }

      CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
      };

      CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
      };

      CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
      };

      CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
      };

      CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
      };

      return CapacitorWeb;
    }(); //# sourceMappingURL=web-runtime.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/accessibility.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
    \********************************************************************/

  /*! exports provided: AccessibilityPluginWeb, Accessibility */

  /***/
  function node_modulesCapacitorCoreDistEsmWebAccessibilityJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return AccessibilityPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return Accessibility;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var AccessibilityPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);

      function AccessibilityPluginWeb() {
        return _super.call(this, {
          name: 'Accessibility',
          platforms: ['web']
        }) || this;
      }

      AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
        throw new Error('Feature not available in the browser');
      };

      AccessibilityPluginWeb.prototype.speak = function (options) {
        if (!('speechSynthesis' in window)) {
          return Promise.reject('Browser does not support the Speech Synthesis API');
        }

        var utterance = new SpeechSynthesisUtterance(options.value);

        if (options.language) {
          utterance.lang = options.language;
        }

        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
      };

      return AccessibilityPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Accessibility = new AccessibilityPluginWeb(); //# sourceMappingURL=accessibility.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/app.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
    \**********************************************************/

  /*! exports provided: AppPluginWeb, App */

  /***/
  function node_modulesCapacitorCoreDistEsmWebAppJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return AppPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return App;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var AppPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);

      function AppPluginWeb() {
        var _this = _super.call(this, {
          name: 'App',
          platforms: ['web']
        }) || this;

        if (typeof document !== 'undefined') {
          document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
        }

        return _this;
      }

      AppPluginWeb.prototype.exitApp = function () {
        throw new Error('Method not implemented.');
      };

      AppPluginWeb.prototype.canOpenUrl = function (_options) {
        return Promise.resolve({
          value: true
        });
      };

      AppPluginWeb.prototype.openUrl = function (_options) {
        return Promise.resolve({
          completed: true
        });
      };

      AppPluginWeb.prototype.getLaunchUrl = function () {
        return Promise.resolve({
          url: ''
        });
      };

      AppPluginWeb.prototype.handleVisibilityChange = function () {
        var data = {
          isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
      };

      return AppPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var App = new AppPluginWeb(); //# sourceMappingURL=app.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/browser.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
    \**************************************************************/

  /*! exports provided: BrowserPluginWeb, Browser */

  /***/
  function node_modulesCapacitorCoreDistEsmWebBrowserJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return BrowserPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return Browser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var BrowserPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);

      function BrowserPluginWeb() {
        return _super.call(this, {
          name: 'Browser',
          platforms: ['web']
        }) || this;
      }

      BrowserPluginWeb.prototype.open = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            this._lastWindow = window.open(options.url, options.windowName || '_blank');
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      BrowserPluginWeb.prototype.prefetch = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            // Does nothing
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      BrowserPluginWeb.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            this._lastWindow && this._lastWindow.close();
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      return BrowserPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Browser = new BrowserPluginWeb(); //# sourceMappingURL=browser.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/camera.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
    \*************************************************************/

  /*! exports provided: CameraPluginWeb, Camera */

  /***/
  function node_modulesCapacitorCoreDistEsmWebCameraJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return CameraPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var CameraPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);

      function CameraPluginWeb() {
        return _super.call(this, {
          name: 'Camera',
          platforms: ['web']
        }) || this;
      }

      CameraPluginWeb.prototype.getPhoto = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            options;
            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var cameraModal;

                var _this = this;

                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      cameraModal = document.createElement('pwa-camera-modal');
                      document.body.appendChild(cameraModal);
                      return [4
                      /*yield*/
                      , cameraModal.componentOnReady()];

                    case 1:
                      _a.sent();

                      cameraModal.addEventListener('onPhoto', function (e) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                          var photo, _a;

                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                            switch (_b.label) {
                              case 0:
                                photo = e.detail;
                                if (!(photo === null)) return [3
                                /*break*/
                                , 1];
                                reject('User cancelled photos app');
                                return [3
                                /*break*/
                                , 4];

                              case 1:
                                if (!(photo instanceof Error)) return [3
                                /*break*/
                                , 2];
                                reject(photo.message);
                                return [3
                                /*break*/
                                , 4];

                              case 2:
                                _a = resolve;
                                return [4
                                /*yield*/
                                , this._getCameraPhoto(photo, options)];

                              case 3:
                                _a.apply(void 0, [_b.sent()]);

                                _b.label = 4;

                              case 4:
                                cameraModal.dismiss();
                                document.body.removeChild(cameraModal);
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      });
                      cameraModal.present();
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            })];
          });
        });
      };

      CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          var format = photo.type.split('/')[1];

          if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
            resolve({
              webPath: URL.createObjectURL(photo),
              format: format
            });
          } else {
            reader.readAsDataURL(photo);

            reader.onloadend = function () {
              var r = reader.result;

              if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                resolve({
                  dataUrl: r,
                  format: format
                });
              } else {
                resolve({
                  base64String: r.split(',')[1],
                  format: format
                });
              }
            };

            reader.onerror = function (e) {
              reject(e);
            };
          }
        });
      };

      return CameraPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Camera = new CameraPluginWeb(); //# sourceMappingURL=camera.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
    \****************************************************************/

  /*! exports provided: ClipboardPluginWeb, Clipboard */

  /***/
  function node_modulesCapacitorCoreDistEsmWebClipboardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return ClipboardPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return Clipboard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ClipboardPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);

      function ClipboardPluginWeb() {
        return _super.call(this, {
          name: 'Clipboard',
          platforms: ['web']
        }) || this;
      }

      ClipboardPluginWeb.prototype.write = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!navigator.clipboard) {
                  return [2
                  /*return*/
                  , Promise.reject('Clipboard API not available in this browser')];
                }

                if (!(options.string !== undefined || options.url)) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];

              case 1:
                _a.sent();

                return [3
                /*break*/
                , 3];

              case 2:
                if (options.image) {
                  return [2
                  /*return*/
                  , Promise.reject('Setting images not supported on the web')];
                }

                _a.label = 3;

              case 3:
                return [2
                /*return*/
                , Promise.resolve()];
            }
          });
        });
      };

      ClipboardPluginWeb.prototype.read = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var text, data, _i, _a, item;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                if (!navigator.clipboard) {
                  return [2
                  /*return*/
                  , Promise.reject('Clipboard API not available in this browser')];
                }

                if (!(_options.type === 'string' || _options.type === 'url')) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , navigator.clipboard.readText()];

              case 1:
                text = _b.sent();
                return [2
                /*return*/
                , Promise.resolve({
                  value: text
                })];

              case 2:
                return [4
                /*yield*/
                , navigator.clipboard.read()];

              case 3:
                data = _b.sent();

                for (_i = 0, _a = data.items; _i < _a.length; _i++) {
                  item = _a[_i];

                  if (item.type === 'text/plain') {
                    return [2
                    /*return*/
                    , Promise.resolve({
                      value: item.getAs('text/plain')
                    })];
                  }
                }

                _b.label = 4;

              case 4:
                return [2
                /*return*/
                , Promise.reject('Unable to get data from clipboard')];
            }
          });
        });
      };

      return ClipboardPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Clipboard = new ClipboardPluginWeb(); //# sourceMappingURL=clipboard.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/device.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
    \*************************************************************/

  /*! exports provided: DevicePluginWeb, Device */

  /***/
  function node_modulesCapacitorCoreDistEsmWebDeviceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return DevicePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return Device;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util */
    "./node_modules/@capacitor/core/dist/esm/util.js");

    var DevicePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);

      function DevicePluginWeb() {
        return _super.call(this, {
          name: 'Device',
          platforms: ['web']
        }) || this;
      }

      DevicePluginWeb.prototype.getInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var ua, uaFields, battery, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                ua = navigator.userAgent;
                uaFields = this.parseUa(ua);
                battery = {};
                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , navigator.getBattery()];

              case 2:
                battery = _a.sent();
                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _a.sent();
                return [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                , Promise.resolve({
                  model: uaFields.model,
                  platform: 'web',
                  appVersion: '',
                  appBuild: '',
                  operatingSystem: uaFields.operatingSystem,
                  osVersion: uaFields.osVersion,
                  manufacturer: navigator.vendor,
                  isVirtual: false,
                  batteryLevel: battery.level,
                  isCharging: battery.charging,
                  uuid: this.getUid()
                })];
            }
          });
        });
      };

      DevicePluginWeb.prototype.getLanguageCode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , {
              value: navigator.language
            }];
          });
        });
      };

      DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;

        var end = _ua.indexOf(') AppleWebKit');

        if (_ua.indexOf(') Gecko') !== -1) {
          end = _ua.indexOf(') Gecko');
        }

        var fields = _ua.substring(start, end);

        if (_ua.indexOf('Android') !== -1) {
          uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
          uaFields.osVersion = fields.split('; ')[1];
        } else {
          uaFields.model = fields.split('; ')[0];

          if (navigator.oscpu) {
            uaFields.osVersion = navigator.oscpu;
          } else {
            if (_ua.indexOf('Windows') !== -1) {
              uaFields.osVersion = fields;
            } else {
              var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
              uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
            }
          }
        }

        if (/android/i.test(_ua)) {
          uaFields.operatingSystem = 'android';
        } else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
          uaFields.operatingSystem = 'ios';
        } else if (/Win/.test(_ua)) {
          uaFields.operatingSystem = 'windows';
        } else if (/Mac/i.test(_ua)) {
          uaFields.operatingSystem = 'mac';
        } else {
          uaFields.operatingSystem = 'unknown';
        }

        return uaFields;
      };

      DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');

        if (uid) {
          return uid;
        }

        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
      };

      return DevicePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Device = new DevicePluginWeb(); //# sourceMappingURL=device.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
    \*****************************************************************/

  /*! exports provided: FilesystemPluginWeb, Filesystem */

  /***/
  function node_modulesCapacitorCoreDistEsmWebFilesystemJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return FilesystemPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return Filesystem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var FilesystemPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);

      function FilesystemPluginWeb() {
        var _this = _super.call(this, {
          name: 'Filesystem',
          platforms: ['web']
        }) || this;

        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
      }

      FilesystemPluginWeb.prototype.initDb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            if (this._db !== undefined) {
              return [2
              /*return*/
              , this._db];
            }

            if (!('indexedDB' in window)) {
              throw new Error('This browser doesn\'t support IndexedDB');
            }

            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
              request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;

              request.onsuccess = function () {
                _this._db = request.result;
                resolve(request.result);
              };

              request.onerror = function () {
                return reject(request.error);
              };

              request.onblocked = function () {
                console.warn('db blocked');
              };
            })];
          });
        });
      };

      FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;

        switch (event.oldVersion) {
          case 0:
          case 1:
          default:
            if (db.objectStoreNames.contains('FileStorage')) {
              db.deleteObjectStore('FileStorage');
            }

            var store = db.createObjectStore('FileStorage', {
              keyPath: 'path'
            });
            store.createIndex('by_folder', 'folder');
        }
      };

      FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var readFlag;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
            return [2
            /*return*/
            , this.initDb().then(function (conn) {
              return new Promise(function (resolve, reject) {
                var tx = conn.transaction(['FileStorage'], readFlag);
                var store = tx.objectStore('FileStorage');
                var req = store[cmd].apply(store, args);

                req.onsuccess = function () {
                  return resolve(req.result);
                };

                req.onerror = function () {
                  return reject(req.error);
                };
              });
            })];
          });
        });
      };

      FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var readFlag;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
            return [2
            /*return*/
            , this.initDb().then(function (conn) {
              return new Promise(function (resolve, reject) {
                var tx = conn.transaction(['FileStorage'], readFlag);
                var store = tx.objectStore('FileStorage');
                var index = store.index(indexName);
                var req = index[cmd].apply(index, args);

                req.onsuccess = function () {
                  return resolve(req.result);
                };

                req.onerror = function () {
                  return reject(req.error);
                };
              });
            })];
          });
        });
      };

      FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        var fsPath = '/' + directory;
        if (uriPath !== '') fsPath += '/' + cleanedUriPath;
        return fsPath;
      };

      FilesystemPluginWeb.prototype.clear = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var conn, tx, store;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.initDb()];

              case 1:
                conn = _a.sent();
                tx = conn.transaction(['FileStorage'], 'readwrite');
                store = tx.objectStore('FileStorage');
                store.clear();
                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Read a file from disk
       * @param options options for the file read
       * @return a promise that resolves with the read file data result
       */


      FilesystemPluginWeb.prototype.readFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (entry === undefined) throw Error('File does not exist.');
                return [2
                /*return*/
                , {
                  data: entry.content
                }];
            }
          });
        });
      };
      /**
       * Write a file to disk in the specified location on device
       * @param options options for the file write
       * @return a promise that resolves with the file write result
       */


      FilesystemPluginWeb.prototype.writeFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, data, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                data = options.data;
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                occupiedEntry = _a.sent();
                if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                encoding = options.encoding;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 2:
                parentEntry = _a.sent();
                if (!(parentEntry === undefined)) return [3
                /*break*/
                , 4];
                subDirIndex = parentPath.indexOf('/', 1);
                if (!(subDirIndex !== -1)) return [3
                /*break*/
                , 4];
                parentArgPath = parentPath.substr(subDirIndex);
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: true
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                now = Date.now();
                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'file',
                  size: data.length,
                  ctime: now,
                  mtime: now,
                  content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Append to a file on disk in the specified location on device
       * @param options options for the file append
       * @return a promise that resolves with the file write result
       */


      FilesystemPluginWeb.prototype.appendFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, parentArgPath, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                data = options.data;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                now = Date.now();
                ctime = now;
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                occupiedEntry = _a.sent();
                if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 2:
                parentEntry = _a.sent();
                if (!(parentEntry === undefined)) return [3
                /*break*/
                , 4];
                parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: true
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                if (occupiedEntry !== undefined) {
                  data = occupiedEntry.content + data;
                  ctime = occupiedEntry.ctime;
                }

                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'file',
                  size: data.length,
                  ctime: ctime,
                  mtime: now,
                  content: data
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Delete a file from disk
       * @param options options for the file delete
       * @return a promise that resolves with the deleted file data result
       */


      FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry, entries;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (entry === undefined) throw Error('File does not exist.');
                return [4
                /*yield*/
                , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

              case 2:
                entries = _a.sent();
                if (entries.length !== 0) throw Error('Folder is not empty.');
                return [4
                /*yield*/
                , this.dbRequest('delete', [path])];

              case 3:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Create a directory.
       * @param options options for the mkdir
       * @return a promise that resolves with the mkdir result
       */


      FilesystemPluginWeb.prototype.mkdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, createIntermediateDirectories, recursive, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                createIntermediateDirectories = options.createIntermediateDirectories;

                if (options.createIntermediateDirectories !== undefined) {
                  console.warn('createIntermediateDirectories is deprecated, use recursive');
                }

                recursive = options.recursive;
                doRecursive = createIntermediateDirectories || recursive;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                depth = (path.match(/\//g) || []).length;
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 1:
                parentEntry = _a.sent();
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 2:
                occupiedEntry = _a.sent();
                if (depth === 1) throw Error('Cannot create Root directory');
                if (occupiedEntry !== undefined) throw Error('Current directory does already exist.');
                if (!doRecursive && depth !== 2 && parentEntry === undefined) throw Error('Parent directory must exist');
                if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3
                /*break*/
                , 4];
                parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: doRecursive
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                now = Date.now();
                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'directory',
                  size: 0,
                  ctime: now,
                  mtime: now
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Remove a directory
       * @param options the options for the directory remove
       */


      FilesystemPluginWeb.prototype.rmdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                path = options.path, directory = options.directory, recursive = options.recursive;
                fullPath = this.getPath(directory, path);
                return [4
                /*yield*/
                , this.dbRequest('get', [fullPath])];

              case 1:
                entry = _b.sent();
                if (entry === undefined) throw Error('Folder does not exist.');
                if (entry.type !== 'directory') throw Error('Requested path is not a directory');
                return [4
                /*yield*/
                , this.readdir({
                  path: path,
                  directory: directory
                })];

              case 2:
                readDirResult = _b.sent();
                if (readDirResult.files.length !== 0 && !recursive) throw Error('Folder is not empty');
                _i = 0, _a = readDirResult.files;
                _b.label = 3;

              case 3:
                if (!(_i < _a.length)) return [3
                /*break*/
                , 9];
                entry_1 = _a[_i];
                entryPath = path + "/" + entry_1;
                return [4
                /*yield*/
                , this.stat({
                  path: entryPath,
                  directory: directory
                })];

              case 4:
                entryObj = _b.sent();
                if (!(entryObj.type === 'file')) return [3
                /*break*/
                , 6];
                return [4
                /*yield*/
                , this.deleteFile({
                  path: entryPath,
                  directory: directory
                })];

              case 5:
                _b.sent();

                return [3
                /*break*/
                , 8];

              case 6:
                return [4
                /*yield*/
                , this.rmdir({
                  path: entryPath,
                  directory: directory,
                  recursive: recursive
                })];

              case 7:
                _b.sent();

                _b.label = 8;

              case 8:
                _i++;
                return [3
                /*break*/
                , 3];

              case 9:
                return [4
                /*yield*/
                , this.dbRequest('delete', [fullPath])];

              case 10:
                _b.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Return a list of files from the directory (not recursive)
       * @param options the options for the readdir operation
       * @return a promise that resolves with the readdir directory listing result
       */


      FilesystemPluginWeb.prototype.readdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry, entries, names;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (options.path !== '' && entry === undefined) throw Error('Folder does not exist.');
                return [4
                /*yield*/
                , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

              case 2:
                entries = _a.sent();
                names = entries.map(function (e) {
                  return e.substring(path.length + 1);
                });
                return [2
                /*return*/
                , {
                  files: names
                }];
            }
          });
        });
      };
      /**
       * Return full File URI for a path and directory
       * @param options the options for the stat operation
       * @return a promise that resolves with the file stat result
       */


      FilesystemPluginWeb.prototype.getUri = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (!(entry === undefined)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , this.dbRequest('get', [path + '/'])];

              case 2:
                entry = _a.sent();
                _a.label = 3;

              case 3:
                if (entry === undefined) throw Error('Entry does not exist.');
                return [2
                /*return*/
                , {
                  uri: entry.path
                }];
            }
          });
        });
      };
      /**
       * Return data about a file
       * @param options the options for the stat operation
       * @return a promise that resolves with the file stat result
       */


      FilesystemPluginWeb.prototype.stat = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (!(entry === undefined)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , this.dbRequest('get', [path + '/'])];

              case 2:
                entry = _a.sent();
                _a.label = 3;

              case 3:
                if (entry === undefined) throw Error('Entry does not exist.');
                return [2
                /*return*/
                , {
                  type: entry.type,
                  size: entry.size,
                  ctime: entry.ctime,
                  mtime: entry.mtime,
                  uri: entry.path
                }];
            }
          });
        });
      };
      /**
       * Rename a file or directory
       * @param options the options for the rename operation
       * @return a promise that resolves with the rename result
       */


      FilesystemPluginWeb.prototype.rename = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , this._copy(options, true)];
          });
        });
      };
      /**
       * Copy a file or directory
       * @param options the options for the copy operation
       * @return a promise that resolves with the copy result
       */


      FilesystemPluginWeb.prototype.copy = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , this._copy(options, false)];
          });
        });
      };
      /**
       * Function that can perform a copy or a rename
       * @param options the options for the rename operation
       * @param doRename whether to perform a rename or copy operation
       * @return a promise that resolves with the result
       */


      FilesystemPluginWeb.prototype._copy = function (options, doRename) {
        if (doRename === void 0) {
          doRename = false;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;

          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;

                if (!to || !from) {
                  throw Error('Both to and from must be provided');
                } // If no "to" directory is provided, use the "from" directory


                if (!toDirectory) {
                  toDirectory = fromDirectory;
                }

                fromPath = this.getPath(fromDirectory, from);
                toPath = this.getPath(toDirectory, to); // Test that the "to" and "from" locations are different

                if (fromPath === toPath) {
                  return [2
                  /*return*/
                  , {}];
                }

                if (toPath.startsWith(fromPath)) {
                  throw Error('To path cannot contain the from path');
                }

                _b.label = 1;

              case 1:
                _b.trys.push([1, 3,, 6]);

                return [4
                /*yield*/
                , this.stat({
                  path: to,
                  directory: toDirectory
                })];

              case 2:
                toObj = _b.sent();
                return [3
                /*break*/
                , 6];

              case 3:
                e_1 = _b.sent();
                toPathComponents = to.split('/');
                toPathComponents.pop();
                toPath_1 = toPathComponents.join('/');
                if (!(toPathComponents.length > 0)) return [3
                /*break*/
                , 5];
                return [4
                /*yield*/
                , this.stat({
                  path: toPath_1,
                  directory: toDirectory
                })];

              case 4:
                toParentDirectory = _b.sent();

                if (toParentDirectory.type !== 'directory') {
                  throw new Error('Parent directory of the to path is a file');
                }

                _b.label = 5;

              case 5:
                return [3
                /*break*/
                , 6];

              case 6:
                // Cannot overwrite a directory
                if (toObj && toObj.type === 'directory') {
                  throw new Error('Cannot overwrite a directory with a file');
                }

                return [4
                /*yield*/
                , this.stat({
                  path: from,
                  directory: fromDirectory
                })];

              case 7:
                fromObj = _b.sent();

                updateTime = function updateTime(path, ctime, mtime) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var fullPath, entry;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          fullPath = this.getPath(toDirectory, path);
                          return [4
                          /*yield*/
                          , this.dbRequest('get', [fullPath])];

                        case 1:
                          entry = _a.sent();
                          entry.ctime = ctime;
                          entry.mtime = mtime;
                          return [4
                          /*yield*/
                          , this.dbRequest('put', [entry])];

                        case 2:
                          _a.sent();

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                };

                _a = fromObj.type;

                switch (_a) {
                  case 'file':
                    return [3
                    /*break*/
                    , 8];

                  case 'directory':
                    return [3
                    /*break*/
                    , 15];
                }

                return [3
                /*break*/
                , 28];

              case 8:
                return [4
                /*yield*/
                , this.readFile({
                  path: from,
                  directory: fromDirectory
                })];

              case 9:
                file = _b.sent();
                if (!doRename) return [3
                /*break*/
                , 11];
                return [4
                /*yield*/
                , this.deleteFile({
                  path: from,
                  directory: fromDirectory
                })];

              case 10:
                _b.sent();

                _b.label = 11;

              case 11:
                // Write the file to the new location
                return [4
                /*yield*/
                , this.writeFile({
                  path: to,
                  directory: toDirectory,
                  data: file.data
                })];

              case 12:
                // Write the file to the new location
                _b.sent();

                if (!doRename) return [3
                /*break*/
                , 14];
                return [4
                /*yield*/
                , updateTime(to, fromObj.ctime, fromObj.mtime)];

              case 13:
                _b.sent();

                _b.label = 14;

              case 14:
                // Resolve promise
                return [2
                /*return*/
                , {}];

              case 15:
                if (toObj) {
                  throw Error('Cannot move a directory over an existing object');
                }

                _b.label = 16;

              case 16:
                _b.trys.push([16, 20,, 21]); // Create the to directory


                return [4
                /*yield*/
                , this.mkdir({
                  path: to,
                  directory: toDirectory,
                  recursive: false
                })];

              case 17:
                // Create the to directory
                _b.sent();

                if (!doRename) return [3
                /*break*/
                , 19];
                return [4
                /*yield*/
                , updateTime(to, fromObj.ctime, fromObj.mtime)];

              case 18:
                _b.sent();

                _b.label = 19;

              case 19:
                return [3
                /*break*/
                , 21];

              case 20:
                e_2 = _b.sent();
                return [3
                /*break*/
                , 21];

              case 21:
                return [4
                /*yield*/
                , this.readdir({
                  path: from,
                  directory: fromDirectory
                })];

              case 22:
                contents = _b.sent().files;
                _i = 0, contents_1 = contents;
                _b.label = 23;

              case 23:
                if (!(_i < contents_1.length)) return [3
                /*break*/
                , 26];
                filename = contents_1[_i]; // Move item from the from directory to the to directory

                return [4
                /*yield*/
                , this._copy({
                  from: from + "/" + filename,
                  to: to + "/" + filename,
                  directory: fromDirectory,
                  toDirectory: toDirectory
                }, doRename)];

              case 24:
                // Move item from the from directory to the to directory
                _b.sent();

                _b.label = 25;

              case 25:
                _i++;
                return [3
                /*break*/
                , 23];

              case 26:
                if (!doRename) return [3
                /*break*/
                , 28];
                return [4
                /*yield*/
                , this.rmdir({
                  path: from,
                  directory: fromDirectory
                })];

              case 27:
                _b.sent();

                _b.label = 28;

              case 28:
                return [2
                /*return*/
                , {}];
            }
          });
        });
      };

      FilesystemPluginWeb._debug = true;
      return FilesystemPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Filesystem = new FilesystemPluginWeb(); //# sourceMappingURL=filesystem.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
    \******************************************************************/

  /*! exports provided: GeolocationPluginWeb, Geolocation */

  /***/
  function node_modulesCapacitorCoreDistEsmWebGeolocationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return GeolocationPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return Geolocation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util */
    "./node_modules/@capacitor/core/dist/esm/util.js");

    var GeolocationPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);

      function GeolocationPluginWeb() {
        return _super.call(this, {
          name: 'Geolocation',
          platforms: ['web']
        }) || this;
      }

      GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          return _this.requestPermissions().then(function (_result) {
            window.navigator.geolocation.getCurrentPosition(function (pos) {
              resolve(pos);
            }, function (err) {
              reject(err);
            }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }, options));
          });
        });
      };

      GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
          callback(pos);
        }, function (err) {
          callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }, options));
        return "" + id;
      };

      GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
      };

      return GeolocationPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Geolocation = new GeolocationPluginWeb(); //# sourceMappingURL=geolocation.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
    \************************************************************/

  /*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

  /***/
  function node_modulesCapacitorCoreDistEsmWebIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
      return WebPluginRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
      return WebPlugins;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
      return WebPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
      return mergeWebPlugins;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
      return mergeWebPlugin;
    });

    var WebPluginRegistry =
    /** @class */
    function () {
      function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
      }

      WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
      };

      WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
      };

      WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);

        if (!plugin) {
          console.error("Unable to load web plugin " + name + ", no such plugin found.");
          return;
        }

        plugin.load();
      };

      WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];

        for (var name_1 in this.plugins) {
          p.push(this.plugins[name_1]);
        }

        return p;
      };

      return WebPluginRegistry;
    }();

    var WebPlugins = new WebPluginRegistry();

    var WebPlugin =
    /** @class */
    function () {
      function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};

        if (!pluginRegistry) {
          WebPlugins.addPlugin(this);
        } else {
          pluginRegistry.addPlugin(this);
        }
      }

      WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
      };

      WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
          return;
        }

        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
      };

      WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;

        var listeners = this.listeners[eventName];

        if (!listeners) {
          this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it

        var windowListener = this.windowListeners[eventName];

        if (windowListener && !windowListener.registered) {
          this.addWindowListener(windowListener);
        }

        return {
          remove: function remove() {
            _this.removeListener(eventName, listenerFunc);
          }
        };
      };

      WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];

        if (!listeners) {
          return;
        }

        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
        // remove the window listener

        if (!this.listeners[eventName].length) {
          this.removeWindowListener(this.windowListeners[eventName]);
        }
      };

      WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];

        if (listeners) {
          listeners.forEach(function (listener) {
            return listener(data);
          });
        }
      };

      WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
      };

      WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;

        this.windowListeners[pluginEventName] = {
          registered: false,
          windowEventName: windowEventName,
          pluginEventName: pluginEventName,
          handler: function handler(event) {
            _this.notifyListeners(pluginEventName, event);
          }
        };
      };

      WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
          return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        } else {
          return Promise.resolve({
            results: []
          });
        }
      };

      WebPlugin.prototype.load = function () {
        this.loaded = true;
      };

      return WebPlugin;
    }();

    var shouldMergeWebPlugin = function shouldMergeWebPlugin(plugin) {
      return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
    };
    /**
     * For all our known web plugins, merge them into the global plugins
     * registry if they aren't already existing. If they don't exist, that
     * means there's no existing native implementation for it.
     * @param knownPlugins the Capacitor.Plugins global registry.
     */


    var mergeWebPlugins = function mergeWebPlugins(knownPlugins) {
      var plugins = WebPlugins.getPlugins();

      for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
      }
    };

    var mergeWebPlugin = function mergeWebPlugin(knownPlugins, plugin) {
      // If we already have a plugin registered (meaning it was defined in the native layer),
      // then we should only overwrite it if the corresponding web plugin activates on
      // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
      if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
      }

      knownPlugins[plugin.config.name] = plugin;
    }; //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
    \**************************************************************************/

  /*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */

  /***/
  function node_modulesCapacitorCoreDistEsmWebLocalNotificationsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return LocalNotificationsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return LocalNotifications;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var LocalNotificationsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);

      function LocalNotificationsPluginWeb() {
        var _this = _super.call(this, {
          name: 'LocalNotifications',
          platforms: ['web']
        }) || this;

        _this.pending = [];
        return _this;
      }

      LocalNotificationsPluginWeb.prototype.sendPending = function () {
        var _this = this;

        var toRemove = [];
        var now = +new Date();
        this.pending.forEach(function (localNotification) {
          if (localNotification.schedule && localNotification.schedule.at) {
            if (+localNotification.schedule.at <= now) {
              _this.buildNotification(localNotification);

              toRemove.push(localNotification);
            }
          }
        });
        console.log('Sent pending, removing', toRemove);
        this.pending = this.pending.filter(function (localNotification) {
          return !toRemove.find(function (ln) {
            return ln === localNotification;
          });
        });
      };

      LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
        var _this = this;

        var l = localNotification;

        if (localNotification.schedule && localNotification.schedule.at) {
          var diff = +localNotification.schedule.at - +new Date();
          this.pending.push(l);
          setTimeout(function () {
            _this.sendPending();
          }, diff);
          return;
        }

        this.buildNotification(localNotification);
      };

      LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
        var l = localNotification;
        return new Notification(l.title, {
          body: l.body
        });
      };

      LocalNotificationsPluginWeb.prototype.schedule = function (options) {
        var _this = this;

        var notifications = [];
        options.notifications.forEach(function (notification) {
          notifications.push(_this.sendNotification(notification));
        });
        return Promise.resolve({
          notifications: notifications.map(function (_) {
            return {
              id: ''
            };
          })
        });
      };

      LocalNotificationsPluginWeb.prototype.getPending = function () {
        return Promise.resolve({
          notifications: this.pending.map(function (localNotification) {
            return {
              id: '' + localNotification.id
            };
          })
        });
      };

      LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
        throw new Error('Method not implemented.');
      };

      LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
        console.log('Cancel these', pending);
        this.pending = this.pending.filter(function (localNotification) {
          return !pending.notifications.find(function (ln) {
            return ln.id === '' + localNotification.id;
          });
        });
        return Promise.resolve();
      };

      LocalNotificationsPluginWeb.prototype.areEnabled = function () {
        throw new Error('Method not implemented.');
      };

      LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
          Notification.requestPermission(function (result) {
            if (result === 'denied' || result === 'default') {
              reject(result);
              return;
            }

            resolve({
              results: [result]
            });
          });
        });
      };

      return LocalNotificationsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var LocalNotifications = new LocalNotificationsPluginWeb(); //# sourceMappingURL=local-notifications.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/modals.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
    \*************************************************************/

  /*! exports provided: ModalsPluginWeb, Modals */

  /***/
  function node_modulesCapacitorCoreDistEsmWebModalsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return ModalsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return Modals;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ModalsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);

      function ModalsPluginWeb() {
        return _super.call(this, {
          name: 'Modals',
          platforms: ['web']
        }) || this;
      }

      ModalsPluginWeb.prototype.alert = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            window.alert(options.message);
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      ModalsPluginWeb.prototype.prompt = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var val;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            val = window.prompt(options.message, options.inputPlaceholder || '');
            return [2
            /*return*/
            , Promise.resolve({
              value: val,
              cancelled: val === null
            })];
          });
        });
      };

      ModalsPluginWeb.prototype.confirm = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var val;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            val = window.confirm(options.message);
            return [2
            /*return*/
            , Promise.resolve({
              value: val
            })];
          });
        });
      };

      ModalsPluginWeb.prototype.showActions = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , new Promise(function (resolve, _reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var controller, items, actionSheetElement;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      controller = document.querySelector('ion-action-sheet-controller');

                      if (!controller) {
                        controller = document.createElement('ion-action-sheet-controller');
                        document.body.appendChild(controller);
                      }

                      return [4
                      /*yield*/
                      , controller.componentOnReady()];

                    case 1:
                      _a.sent();

                      items = options.options.map(function (o, i) {
                        return {
                          text: o.title,
                          role: o.style && o.style.toLowerCase() || '',
                          icon: o.icon || '',
                          handler: function handler() {
                            resolve({
                              index: i
                            });
                          }
                        };
                      });
                      return [4
                      /*yield*/
                      , controller.create({
                        title: options.title,
                        buttons: items
                      })];

                    case 2:
                      actionSheetElement = _a.sent();
                      return [4
                      /*yield*/
                      , actionSheetElement.present()];

                    case 3:
                      _a.sent();

                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            })];
          });
        });
      };

      return ModalsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Modals = new ModalsPluginWeb(); //# sourceMappingURL=modals.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/motion.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
    \*************************************************************/

  /*! exports provided: MotionPluginWeb, Motion */

  /***/
  function node_modulesCapacitorCoreDistEsmWebMotionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return MotionPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return Motion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var MotionPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);

      function MotionPluginWeb() {
        var _this = _super.call(this, {
          name: 'Motion'
        }) || this;

        _this.registerWindowListener('devicemotion', 'accel');

        _this.registerWindowListener('deviceorientation', 'orientation');

        return _this;
      }

      return MotionPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Motion = new MotionPluginWeb(); //# sourceMappingURL=motion.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/network.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
    \**************************************************************/

  /*! exports provided: NetworkPluginWeb, Network */

  /***/
  function node_modulesCapacitorCoreDistEsmWebNetworkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return NetworkPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return Network;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var NetworkPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);

      function NetworkPluginWeb() {
        var _this = _super.call(this, {
          name: 'Network',
          platforms: ['web']
        }) || this;

        _this.listenerFunction = null;
        return _this;
      }

      NetworkPluginWeb.prototype.getStatus = function () {
        return new Promise(function (resolve, reject) {
          if (!window.navigator) {
            reject('Network info not available');
            return;
          }

          var connected = window.navigator.onLine;
          var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
          var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
          resolve({
            connected: connected,
            connectionType: connected ? connectionType : 'none'
          });
        });
      };

      NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
        var thisRef = this;
        var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
        var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
        var onlineBindFunc = listenerFunc.bind(thisRef, {
          connected: true,
          connectionType: connectionType
        });
        var offlineBindFunc = listenerFunc.bind(thisRef, {
          connected: false,
          connectionType: 'none'
        });

        if (eventName.localeCompare('networkStatusChange') === 0) {
          window.addEventListener('online', onlineBindFunc);
          window.addEventListener('offline', offlineBindFunc);
          return {
            remove: function remove() {
              window.removeEventListener('online', onlineBindFunc);
              window.removeEventListener('offline', offlineBindFunc);
            }
          };
        }
      };

      return NetworkPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Network = new NetworkPluginWeb(); //# sourceMappingURL=network.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/permissions.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
    \******************************************************************/

  /*! exports provided: PermissionsPluginWeb, Permissions */

  /***/
  function node_modulesCapacitorCoreDistEsmWebPermissionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return PermissionsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return Permissions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var PermissionsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);

      function PermissionsPluginWeb() {
        return _super.call(this, {
          name: 'Permissions'
        }) || this;
      }

      PermissionsPluginWeb.prototype.query = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var navigator, name, ret;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                navigator = window.navigator;

                if (!navigator.permissions) {
                  return [2
                  /*return*/
                  , Promise.reject('This browser does not support the Permissions API')];
                }

                name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                return [4
                /*yield*/
                , navigator.permissions.query({
                  name: name
                })];

              case 1:
                ret = _a.sent();
                return [2
                /*return*/
                , {
                  state: ret.state
                }];
            }
          });
        });
      };

      return PermissionsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Permissions = new PermissionsPluginWeb(); //# sourceMappingURL=permissions.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/share.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
    \************************************************************/

  /*! exports provided: SharePluginWeb, Share */

  /***/
  function node_modulesCapacitorCoreDistEsmWebShareJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return SharePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return Share;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var SharePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);

      function SharePluginWeb() {
        return _super.call(this, {
          name: 'Share',
          platforms: ['web']
        }) || this;
      }

      SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
          return Promise.reject('Web Share API not available');
        }

        return navigator.share({
          title: options.title,
          text: options.text,
          url: options.url
        });
      };

      return SharePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Share = new SharePluginWeb(); //# sourceMappingURL=share.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
    \********************************************************************/

  /*! exports provided: SplashScreenPluginWeb, SplashScreen */

  /***/
  function node_modulesCapacitorCoreDistEsmWebSplashScreenJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return SplashScreenPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return SplashScreen;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var SplashScreenPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);

      function SplashScreenPluginWeb() {
        return _super.call(this, {
          name: 'SplashScreen',
          platforms: ['web']
        }) || this;
      }

      SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
        return Promise.resolve();
      };

      SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
        return Promise.resolve();
      };

      return SplashScreenPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var SplashScreen = new SplashScreenPluginWeb(); //# sourceMappingURL=splash-screen.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/storage.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
    \**************************************************************/

  /*! exports provided: StoragePluginWeb, Storage */

  /***/
  function node_modulesCapacitorCoreDistEsmWebStorageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return StoragePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return Storage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var StoragePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);

      function StoragePluginWeb() {
        var _this = _super.call(this, {
          name: 'Storage',
          platforms: ['web']
        }) || this;

        _this.KEY_PREFIX = '_cap_';
        return _this;
      }

      StoragePluginWeb.prototype.get = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          resolve({
            value: window.localStorage.getItem(_this.makeKey(options.key))
          });
        });
      };

      StoragePluginWeb.prototype.set = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          window.localStorage.setItem(_this.makeKey(options.key), options.value);
          resolve();
        });
      };

      StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          window.localStorage.removeItem(_this.makeKey(options.key));
          resolve();
        });
      };

      StoragePluginWeb.prototype.keys = function () {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          resolve({
            keys: Object.keys(localStorage).filter(function (k) {
              return _this.isKey(k);
            }).map(function (k) {
              return _this.getKey(k);
            })
          });
        });
      };

      StoragePluginWeb.prototype.clear = function () {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          Object.keys(localStorage).filter(function (k) {
            return _this.isKey(k);
          }).forEach(function (k) {
            return window.localStorage.removeItem(k);
          });
          resolve();
        });
      };

      StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
      };

      StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
      };

      StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
      };

      return StoragePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Storage = new StoragePluginWeb(); //# sourceMappingURL=storage.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/toast.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
    \************************************************************/

  /*! exports provided: ToastPluginWeb, Toast */

  /***/
  function node_modulesCapacitorCoreDistEsmWebToastJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return ToastPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return Toast;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ToastPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);

      function ToastPluginWeb() {
        return _super.call(this, {
          name: 'Toast',
          platforms: ['web']
        }) || this;
      }

      ToastPluginWeb.prototype.show = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var duration, toast;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            duration = 3000;

            if (options.duration) {
              duration = options.duration === 'long' ? 5000 : 3000;
            }

            toast = document.createElement('pwa-toast');
            toast.duration = duration;
            toast.message = options.text;
            document.body.appendChild(toast);
            return [2
            /*return*/
            ];
          });
        });
      };

      return ToastPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Toast = new ToastPluginWeb(); //# sourceMappingURL=toast.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js ***!
    \**********************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesCapacitorCoreNode_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./node_modules/@ionic-native/local-notifications/ngx/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic-native/local-notifications/ngx/index.js ***!
    \*********************************************************************/

  /*! exports provided: ELocalNotificationTriggerUnit, ILocalNotificationActionType, LocalNotifications */

  /***/
  function node_modulesIonicNativeLocalNotificationsNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ELocalNotificationTriggerUnit", function () {
      return ELocalNotificationTriggerUnit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ILocalNotificationActionType", function () {
      return ILocalNotificationActionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return LocalNotifications;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ELocalNotificationTriggerUnit;

    (function (ELocalNotificationTriggerUnit) {
      ELocalNotificationTriggerUnit["SECOND"] = "second";
      ELocalNotificationTriggerUnit["MINUTE"] = "minute";
      ELocalNotificationTriggerUnit["HOUR"] = "hour";
      ELocalNotificationTriggerUnit["DAY"] = "day";
      ELocalNotificationTriggerUnit["WEEK"] = "week";
      ELocalNotificationTriggerUnit["MONTH"] = "month";
      ELocalNotificationTriggerUnit["QUARTER"] = "quarter";
      ELocalNotificationTriggerUnit["YEAR"] = "year";
      ELocalNotificationTriggerUnit["WEEKDAY"] = "weekday";
      ELocalNotificationTriggerUnit["WEEKDAY_ORDINAL"] = "weekdayOrdinal";
      ELocalNotificationTriggerUnit["WEEK_OF_MONTH"] = "weekOfMonth";
    })(ELocalNotificationTriggerUnit || (ELocalNotificationTriggerUnit = {}));

    var ILocalNotificationActionType;

    (function (ILocalNotificationActionType) {
      ILocalNotificationActionType["INPUT"] = "input";
      ILocalNotificationActionType["BUTTON"] = "button";
    })(ILocalNotificationActionType || (ILocalNotificationActionType = {}));

    var LocalNotifications =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotifications, _super);

      function LocalNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      LocalNotifications.prototype.hasPermission = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", {}, arguments);
      };

      LocalNotifications.prototype.requestPermission = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermission", {}, arguments);
      };

      LocalNotifications.prototype.schedule = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "schedule", {
          "sync": true
        }, arguments);
      };

      LocalNotifications.prototype.update = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "update", {
          "sync": true
        }, arguments);
      };

      LocalNotifications.prototype.clear = function (notificationId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clear", {}, arguments);
      };

      LocalNotifications.prototype.clearAll = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clearAll", {}, arguments);
      };

      LocalNotifications.prototype.cancel = function (notificationId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cancel", {}, arguments);
      };

      LocalNotifications.prototype.cancelAll = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cancelAll", {}, arguments);
      };

      LocalNotifications.prototype.isPresent = function (notificationId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isPresent", {}, arguments);
      };

      LocalNotifications.prototype.isScheduled = function (notificationId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isScheduled", {}, arguments);
      };

      LocalNotifications.prototype.isTriggered = function (notificationId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isTriggered", {}, arguments);
      };

      LocalNotifications.prototype.hasType = function (id, type) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasType", {}, arguments);
      };

      LocalNotifications.prototype.getType = function (id) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getType", {}, arguments);
      };

      LocalNotifications.prototype.getIds = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getIds", {}, arguments);
      };

      LocalNotifications.prototype.getScheduledIds = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getScheduledIds", {}, arguments);
      };

      LocalNotifications.prototype.getTriggeredIds = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getTriggeredIds", {}, arguments);
      };

      LocalNotifications.prototype.get = function (notificationId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "get", {}, arguments);
      };

      LocalNotifications.prototype.getAll = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAll", {}, arguments);
      };

      LocalNotifications.prototype.getScheduled = function (notificationId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getScheduled", {}, arguments);
      };

      LocalNotifications.prototype.getTriggered = function (notificationId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getTriggered", {}, arguments);
      };

      LocalNotifications.prototype.addActions = function (groupId, actions) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addActions", {}, arguments);
      };

      LocalNotifications.prototype.removeActions = function (groupId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeActions", {}, arguments);
      };

      LocalNotifications.prototype.hasActions = function (groupId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasActions", {}, arguments);
      };

      LocalNotifications.prototype.getDefaults = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDefaults", {
          "sync": true
        }, arguments);
      };

      LocalNotifications.prototype.setDefaults = function (defaults) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDefaults", {
          "sync": true
        }, arguments);
      };

      LocalNotifications.prototype.getAllScheduled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAllScheduled", {}, arguments);
      };

      LocalNotifications.prototype.getAllTriggered = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAllTriggered", {}, arguments);
      };

      LocalNotifications.prototype.on = function (eventName) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "on", {
          "observable": true,
          "clearFunction": "un",
          "clearWithArgs": true
        }, arguments);
      };

      LocalNotifications.prototype.fireEvent = function (eventName, args) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "fireEvent", {
          "sync": true
        }, arguments);
      };

      LocalNotifications.prototype.fireQueuedEvents = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "fireQueuedEvents", {}, arguments);
      };

      LocalNotifications.pluginName = "LocalNotifications";
      LocalNotifications.plugin = "cordova-plugin-local-notification";
      LocalNotifications.pluginRef = "cordova.plugins.notification.local";
      LocalNotifications.repo = "https://github.com/katzer/cordova-plugin-local-notifications";
      LocalNotifications.platforms = ["Android", "iOS", "Windows"];
      LocalNotifications = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LocalNotifications);
      return LocalNotifications;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2FsLW5vdGlmaWNhdGlvbnMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxNQUFNLENBQU4sSUFBWSw2QkFZWDtBQVpELFdBQVksNkJBQTZCO0lBQ3ZDLGtEQUFpQixDQUFBO0lBQ2pCLGtEQUFpQixDQUFBO0lBQ2pCLDhDQUFhLENBQUE7SUFDYiw0Q0FBVyxDQUFBO0lBQ1gsOENBQWEsQ0FBQTtJQUNiLGdEQUFlLENBQUE7SUFDZixvREFBbUIsQ0FBQTtJQUNuQiw4Q0FBYSxDQUFBO0lBQ2Isb0RBQW1CLENBQUE7SUFDbkIsbUVBQWtDLENBQUE7SUFDbEMsOERBQTZCLENBQUE7QUFDL0IsQ0FBQyxFQVpXLDZCQUE2QixLQUE3Qiw2QkFBNkIsUUFZeEM7QUEwSUQsTUFBTSxDQUFOLElBQVksNEJBR1g7QUFIRCxXQUFZLDRCQUE0QjtJQUN0QywrQ0FBZSxDQUFBO0lBQ2YsaURBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFHdkM7O0lBMlh1QyxzQ0FBaUI7Ozs7SUFNdkQsMENBQWE7SUFTYiw4Q0FBaUI7SUFXakIscUNBQVEsYUFBQyxPQUFtRDtJQVM1RCxtQ0FBTSxhQUFDLE9BQTRCO0lBUW5DLGtDQUFLLGFBQUMsY0FBbUI7SUFTekIscUNBQVE7SUFVUixtQ0FBTSxhQUFDLGNBQW1CO0lBUzFCLHNDQUFTO0lBVVQsc0NBQVMsYUFBQyxjQUFzQjtJQVVoQyx3Q0FBVyxhQUFDLGNBQXNCO0lBVWxDLHdDQUFXLGFBQUMsY0FBc0I7SUFXbEMsb0NBQU8sYUFBQyxFQUFVLEVBQUUsSUFBWTtJQVNoQyxvQ0FBTyxhQUFDLEVBQVU7SUFTbEIsbUNBQU07SUFTTiw0Q0FBZTtJQVNmLDRDQUFlO0lBVWYsZ0NBQUcsYUFBQyxjQUFtQjtJQVN2QixtQ0FBTTtJQVVOLHlDQUFZLGFBQUMsY0FBbUI7SUFVaEMseUNBQVksYUFBQyxjQUFtQjtJQVdoQyx1Q0FBVSxhQUFDLE9BQVksRUFBRSxPQUFtQztJQVU1RCwwQ0FBYSxhQUFDLE9BQVk7SUFVMUIsdUNBQVUsYUFBQyxPQUFZO0lBV3ZCLHdDQUFXO0lBV1gsd0NBQVcsYUFBQyxRQUFhO0lBU3pCLDRDQUFlO0lBU2YsNENBQWU7SUFjZiwrQkFBRSxhQUFDLFNBQWlCO0lBWXBCLHNDQUFTLGFBQUMsU0FBaUIsRUFBRSxJQUFTO0lBT3RDLDZDQUFnQjs7Ozs7O0lBblNMLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0I7NkJBeGhCL0I7RUF3aEJ3QyxpQkFBaUI7U0FBNUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIEVMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXJVbml0IHtcbiAgU0VDT05EID0gJ3NlY29uZCcsXG4gIE1JTlVURSA9ICdtaW51dGUnLFxuICBIT1VSID0gJ2hvdXInLFxuICBEQVkgPSAnZGF5JyxcbiAgV0VFSyA9ICd3ZWVrJyxcbiAgTU9OVEggPSAnbW9udGgnLFxuICBRVUFSVEVSID0gJ3F1YXJ0ZXInLFxuICBZRUFSID0gJ3llYXInLFxuICBXRUVLREFZID0gJ3dlZWtkYXknLFxuICBXRUVLREFZX09SRElOQUwgPSAnd2Vla2RheU9yZGluYWwnLFxuICBXRUVLX09GX01PTlRIID0gJ3dlZWtPZk1vbnRoJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb25FdmVyeSB7XG4gIC8qKlxuICAgKiBUaGUgbWludXRlLlxuICAgKi9cbiAgbWludXRlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgaG91ci5cbiAgICovXG4gIGhvdXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkuXG4gICAqL1xuICBkYXk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgb2Ygd2Vlay5cbiAgICovXG4gIHdlZWtkYXk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIG9mIHllYWRheSBvZiB0aGUgYXJkaW5hbCB3ZWVrLlxuICAgKi9cbiAgd2Vlaz86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGRheSBvZiB0aGUgb3JkaW5hbCB3ZWVrLlxuICAgKi9cbiAgd2Vla2RheU9yZGluYWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIG9mIG1vbnRoLlxuICAgKi9cbiAgd2Vla09mTW9udGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aC5cbiAgICovXG4gIG1vbnRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgcXVhcnRlci5cbiAgICovXG4gIHF1YXJ0ZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB5ZWFyLlxuICAgKi9cbiAgeWVhcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyIHtcbiAgLyoqICoqKioqIEZJWCAqKioqKiAqL1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBzeXN0ZW0gc2hvdWxkIGRlbGl2ZXIgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbi4gSWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBuaWwgb3IgaXMgYSBkYXRlIGluIHRoZSBwYXN0LCB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIGlzIGRlbGl2ZXJlZCBpbW1lZGlhdGVseS5cbiAgICogRGVmYXVsdDogbm93IH4gbmV3IERhdGUoKVxuICAgKi9cbiAgYXQ/OiBEYXRlO1xuXG4gIC8qKiAqKioqKiBUSU1FU1BBTiAqKioqKiAqL1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdW5pdHNcbiAgICovXG4gIGluPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVbml0XG4gICAqL1xuICB1bml0PzogRUxvY2FsTm90aWZpY2F0aW9uVHJpZ2dlclVuaXQ7XG5cbiAgLyoqICoqKioqIFJFUEVBVC9NQVRDSCAqKioqKiAqL1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdW5pdHNcbiAgICovXG4gIGNvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgdW5pdFxuICAgKi9cbiAgZXZlcnk/OiBFTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyVW5pdCB8IElMb2NhbE5vdGlmaWNhdGlvbkV2ZXJ5O1xuXG4gIC8qKlxuICAgKiBUaGUgZW5kIG9mIHRoZSByZXBlYXRpbmcgbm90aWZpY2F0aW9uXG4gICAqL1xuICBiZWZvcmU/OiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBzeXN0ZW0gc2hvdWxkIGRlbGl2ZXIgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbi4gSWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBuaWwgb3IgaXMgYSBkYXRlIGluIHRoZSBwYXN0LCB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIGlzIGRlbGl2ZXJlZCBpbW1lZGlhdGVseS5cbiAgICogT25seSBmb3IgXCJyZXBlYXRcIlxuICAgKiBEZWZhdWx0OiBub3cgfiBuZXcgRGF0ZSgpXG4gICAqL1xuICBmaXJzdEF0PzogRGF0ZTtcblxuICAvKipcbiAgICogT25seSBmb3IgXCJtYXRjaFwiXG4gICAqL1xuICBhZnRlcj86IERhdGU7XG5cbiAgLyoqICoqKioqIExPQ0FUSU9OICoqKioqICovXG5cbiAgLyoqXG4gICAqIElPUyBPTkxZXG4gICAqIENlbnRlciBvZiB0aGUgbG9jYXRpb25cbiAgICogTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSB2YWx1ZXNcbiAgICovXG4gIGNlbnRlcj86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBJT1MgT05MWVxuICAgKiBSYWRpdXMgaW4gbWV0ZXJzXG4gICAqL1xuICByYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElPUyBPTkxZXG4gICAqIFRyaWdnZXIgb24gZW50cnkgb2YgdGhlIGxvY2F0aW9uXG4gICAqL1xuICBub3RpZnlPbkVudHJ5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogVHJpZ2dlciBvbiBleGl0IG9mIHRoZSBsb2NhdGlvblxuICAgKi9cbiAgbm90aWZ5T25FeGl0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogVHJpZ2dlciBvbmx5IG9uY2U/XG4gICAqL1xuICBzaW5nbGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZW51bSBJTG9jYWxOb3RpZmljYXRpb25BY3Rpb25UeXBlIHtcbiAgSU5QVVQgPSAnaW5wdXQnLFxuICBCVVRUT04gPSAnYnV0dG9uJyxcbn1cblxuLyoqXG4gKiBOb3RpZmljYXRpb24gYWN0aW9uXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbnMjYWN0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGFjdGlvbiBpcyB1c2VkIGFzIHRoZSBldmVudCBuYW1lIGluIHRoZSBsaXN0ZW5lciBmdW5jdGlvblxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIG1lc3NhZ2VcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgbm90aWZpY2F0aW9uIHNob3cgd2hlbiBhcHAgaW4gZm9yZWdyb3VuZC5cbiAgICovXG4gIGZvcmVncm91bmQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYWN0aW9uIGNhdXNlcyB0aGUgYXBwIHRvIGxhdW5jaCBpbiB0aGUgZm9yZWdyb3VuZFxuICAgKi9cbiAgbGF1bmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgdGhlIHZhbHVlIGlzICdkZWNsaW5lJyB0aGUgYWN0aW9uIGlzIGRpc3BsYXllZCB3aXRoIHNwZWNpYWwgaGlnaGxpZ2h0aW5nIHRvIGluZGljYXRlIHRoYXQgaXQgcGVyZm9ybXMgYSBkZXN0cnVjdGl2ZSB0YXNrXG4gICAqL1xuICB1aT86IHN0cmluZztcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGFjdGlvbiByZXF1aXJlcyB0aGF0IHRoZSB1c2Vy4oCZcyBkZXZpY2UgYmUgdW5sb2NrZWQuXG4gICAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhbiBhY3Rpb24gd2l0aCB0aGlzIG9wdGlvbiwgdGhlIHN5c3RlbSBwcm9tcHRzXG4gICAqIHRoZSB1c2VyIHRvIHVubG9jayB0aGUgZGV2aWNlXG4gICAqL1xuICBuZWVkc0F1dGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzb3VyY2UgcGF0aCBvZiB0aGUgYWN0aW9uIGljb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBBbiBhcnJheSBvZiBwcmUtZGVmaW5lZCBjaG9pY2VzIGZvciB1c2VycyBpbnB1dFxuICAgKi9cbiAgY2hvaWNlcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHVzZXIgY2FuIHByb3ZpZGUgYXJiaXRyYXJ5IHRleHQgdmFsdWVzXG4gICAqL1xuICBlZGl0YWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElPUyBPTkxZXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgdGV4dCBpbnB1dCBidXR0b24gdGhhdCBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuXG4gICAqL1xuICBzdWJtaXRUaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIGFjdGlvbi4gSWYgb21pdHRlZCAnYnV0dG9uJyBpcyB1c2VkLlxuICAgKi9cbiAgdHlwZT86IElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvblR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsTm90aWZpY2F0aW9uUHJvZ3Jlc3NCYXIge1xuICAvKipcbiAgICogSXMgdGhlIHByb2dyZXNzIGJhciBlbmFibGVkP1xuICAgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZhbHVlXG4gICAqL1xuICB2YWx1ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFRoZSBtYXhpbXVtIHZhbHVlIChkZWZhdWx0IGlzIDEwMClcbiAgICovXG4gIG1heFZhbHVlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU2hvdyBhbiBpbmRldGVybWluYXRlIHByb2dyZXNzIGJhclxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdJTkRPV1MgT05MWVxuICAgKiBHZXRzIG9yIHNldHMgYW4gb3B0aW9uYWwgc3RyaW5nIHRvIGJlIGRpc3BsYXllZCBpbnN0ZWFkIG9mIHRoZVxuICAgKiBkZWZhdWx0IHBlcmNlbnRhZ2Ugc3RyaW5nLiBJZiB0aGlzIGlzbid0IHByb3ZpZGVkLCBzb21ldGhpbmdcbiAgICogbGlrZSBcIjcwJVwiIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdJTkRPV1MgT05MWVxuICAgKiBTZXRzIHRoZSBzdGF0dXMgKHJlcXVpcmVkKSwgd2hpY2ggaXMgZGlzcGxheWVkIHVuZGVybmVhdGggdGhlIHByb2dyZXNzIGJhclxuICAgKiBvbiB0aGUgbGVmdC5cbiAgICogVGhpcyBzdHJpbmcgc2hvdWxkIHJlZmxlY3QgdGhlIHN0YXR1cyBvZiB0aGUgb3BlcmF0aW9uLFxuICAgKiBsaWtlIFwiRG93bmxvYWRpbmcuLi5cIiBvciBcIkluc3RhbGxpbmcuLi5cIlxuICAgKi9cbiAgc3RhdHVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE5vdGlmaWNhdGlvbiB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIHJlcXVpcmVkIHRvIGNsZWFyLCBjYW5jZWwsIHVwZGF0ZSBvciByZXRyaWV2ZSB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIGluIHRoZSBmdXR1cmVcbiAgICogRGVmYXVsdDogMFxuICAgKi9cbiAgaWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEZpcnN0IHJvdyBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAqIERlZmF1bHQ6IEVtcHR5IHN0cmluZyAoaU9TKSBvciB0aGUgYXBwIG5hbWUgKEFuZHJvaWQpXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2Vjb25kIHJvdyBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAqIERlZmF1bHQ6IEVtcHR5IHN0cmluZ1xuICAgKi9cbiAgdGV4dD86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIGN1cnJlbnRseSBzZXQgYXMgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbiBpbiBTcHJpbmdib2FyZCAoaU9TKSBvciBhdCB0aGUgcmlnaHQtaGFuZCBzaWRlIG9mIHRoZSBsb2NhbCBub3RpZmljYXRpb24gKEFuZHJvaWQpXG4gICAqIERlZmF1bHQ6IDAgKHdoaWNoIG1lYW5zIGRvbid0IHNob3cgYSBudW1iZXIpXG4gICAqL1xuICBiYWRnZT86IG51bWJlcjtcblxuICAvKipcbiAgICogVXJpIG9mIHRoZSBmaWxlIGNvbnRhaW5pbmcgdGhlIHNvdW5kIHRvIHBsYXkgd2hlbiBhbiBhbGVydCBpcyBkaXNwbGF5ZWRcbiAgICogRGVmYXVsdDogcmVzOi8vcGxhdGZvcm1fZGVmYXVsdFxuICAgKi9cbiAgc291bmQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFyYml0cmFyeSBkYXRhLCBvYmplY3RzIHdpbGwgYmUgZW5jb2RlZCB0byBKU09OIHN0cmluZ1xuICAgKiBEZWZhdWx0OiBudWxsXG4gICAqL1xuICBkYXRhPzogYW55O1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogVXJpIG9mIHRoZSBpY29uIHRoYXQgaXMgc2hvd24gaW4gdGhlIHRpY2tlciBhbmQgbm90aWZpY2F0aW9uXG4gICAqIERlZmF1bHQ6IHJlczovL2ljb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBVcmkgb2YgdGhlIHJlc291cmNlIChvbmx5IHJlczovLykgdG8gdXNlIGluIHRoZSBub3RpZmljYXRpb24gbGF5b3V0cy4gRGlmZmVyZW50IGNsYXNzZXMgb2YgZGV2aWNlcyBtYXkgcmV0dXJuIGRpZmZlcmVudCBzaXplc1xuICAgKiBEZWZhdWx0OiByZXM6Ly9pY19wb3B1cF9yZW1pbmRlclxuICAgKi9cbiAgc21hbGxJY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogUkdCIHZhbHVlIGZvciB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgc21hbGxJY29uLlxuICAgKiBEZWZhdWx0OiBBbmRyb2lkcyBDT0xPUl9ERUZBVUxULCB3aGljaCB3aWxsIHZhcnkgYmFzZWQgb24gQW5kcm9pZCB2ZXJzaW9uLlxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBVc2UgdGhlIGRlZmF1bHQgbm90aWZpY2F0aW9uIHZpYnJhdGUuXG4gICAqL1xuICB2aWJyYXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIERlZmluZSB0aGUgYmxpbmtpbmcgb2YgdGhlIExFRCBvbiB0aGUgZGV2aWNlLlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIExFRCB3aWxsIGJsaW5rIGluIHRoZSBkZWZhdWx0IGNvbG9yIHdpdGhcbiAgICogdGltaW5ncyBmb3Igb24gYW5kIG9mZiBzZXQgdG8gMTAwMCBtcy5cbiAgICogSWYgc2V0IHRvIGEgc3RyaW5nLCB0aGUgTEVEIHdpbGwgYmxpbmsgaW4gdGhpcyBBUkdCIHZhbHVlIHdpdGhcbiAgICogdGltaW5ncyBmb3Igb24gYW5kIG9mZiBzZXQgdG8gMTAwMCBtcy5cbiAgICogSWYgc2V0IHRvIGFuIGFycmF5LCB0aGUgdmFsdWUgb2YgdGhlIGtleSAwIHdpbGwgYmUgdXNlZCBhcyB0aGUgY29sb3IsXG4gICAqIHRoZSB2YWx1ZSBvZiB0aGUga2V5IDEgd2lsbCBiZSB1c2VkIGFzIHRoZSAnb24nIHRpbWluZywgdGhlIHZhbHVlIG9mXG4gICAqIHRoZSBrZXkgMiB3aWxsIGJlIHVzZWQgYXMgdGhlICdvZmYnIHRpbWluZ1xuICAgKi9cbiAgbGVkPzogeyBjb2xvcjogc3RyaW5nOyBvbjogbnVtYmVyOyBvZmY6IG51bWJlciB9IHwgYW55W10gfCBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOb3RpZmljYXRpb24gcHJpb3JpdHkuXG4gICAqIEludGVnZXJzIGJldHdlZW4gLTIgYW5kIDIsIHdoZXJlYXMgLTIgaXMgbWluaW11bSBhbmQgMiBpcyBtYXhpbXVtIHByaW9yaXR5XG4gICAqL1xuICBwcmlvcml0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogSXMgYSBzaWxlbnQgbm90aWZpY2F0aW9uXG4gICAqL1xuICBzaWxlbnQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYSBjbGljayBvbiB0aGUgbm90aWZpY2F0aW9uIGNhdXNlcyB0aGUgYXBwXG4gICAqIHRvIGxhdW5jaCBpbiB0aGUgZm9yZWdyb3VuZFxuICAgKi9cbiAgbGF1bmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFdha2V1cCB0aGUgZGV2aWNlLiAoZGVmYXVsdCBpcyB0cnVlKVxuICAgKi9cbiAgd2FrZXVwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNwZWNpZmllcyBhIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyBhZnRlciB3aGljaCB0aGlzIG5vdGlmaWNhdGlvbiBzaG91bGQgYmUgY2FuY2VsZWQsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IGNhbmNlbGVkLlxuICAgKi9cbiAgdGltZW91dEFmdGVyPzogbnVtYmVyIHwgZmFsc2U7XG5cbiAgLyoqXG4gICAqIEFjdGlvbnMgaWQgb3IgYWN0aW9uc1xuICAgKi9cbiAgYWN0aW9ucz86IHN0cmluZyB8IElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvbltdO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRvIHRyaWdnZXIgdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgdHJpZ2dlcj86IElMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXI7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpbWFnZSBhdHRhY2htZW50c1xuICAgKi9cbiAgYXR0YWNobWVudHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIElmIGFuZCBob3cgdGhlIG5vdGlmaWNhdGlvbiBzaGFsbCBzaG93IHRoZSB3aGVuIGRhdGUuXG4gICAqIFBvc3NiaWxlIHZhbHVlczpcbiAgICogICAgICAgICAgICAgICAgICBib29sZWFuOiB0cnVlIGVxdWFscyAnY2xvY2snLCBmYWxzZSBkaXNhYmxlIGEgd2F0Y2gvY291bnRlclxuICAgKiAgICAgICAgICAgICAgICAgICdjbG9jayc6IFNob3cgdGhlIHdoZW4gZGF0ZSBpbiB0aGUgY29udGVudCB2aWV3XG4gICAqICAgICAgICAgICAgICAgICAgJ2Nocm9ub21ldGVyJzogU2hvdyBhIHN0b3B3YXRjaFxuICAgKlxuICAgKi9cbiAgY2xvY2s/OiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93cyBhIHByb2dyZXNzIGJhclxuICAgKiBTZXR0aW5nIGEgYm9vbGVhbiBpcyBhIHNob3J0Y3V0IGZvciB7ZW5hYmxlZDogdHJ1ZS9mYWxzZX0gcmVzcGVjdGl2ZWx5XG4gICAqL1xuICBwcm9ncmVzc0Jhcj86IElMb2NhbE5vdGlmaWNhdGlvblByb2dyZXNzQmFyIHwgYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIElmIG11bHRpcGxlIG5vdGlmaWNhdGlvbnMgaGF2ZSB0aGUgc2FtZSBncm91cCB5b3VyIGFwcCBjYW4gcHJlc2VudFxuICAgKiB0aGVtIGFzIGEgc2luZ2xlIGdyb3VwLlxuICAgKi9cbiAgZ3JvdXA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBJZiBzZXQgdG8gJ3RydWUnIHRoaXMgbm90aWZpY2F0aW9uIGNvdWxkIHVzZSAnc3VtbWFyeScgdG8gc3VtbWFyaXplXG4gICAqIHRoZSBjb250ZW50cyBvZiB0aGUgd2hvbGUgZ3JvdXBcbiAgICovXG4gIGdyb3VwU3VtbWFyeT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTdW1tYXJ5IG9mIHRoZSB3aG9sZSBub3RpZmljYXRpb24gZ3JvdXAuIFNob3VsZCBiZSB1c2VkIGluIGNvbmp1bnRpb25cbiAgICogd2l0aCAnZ3JvdXBTdW1tYXJ5JyBzZXQgdG8gdHJ1ZVxuICAgKi9cbiAgc3VtbWFyeT86IHN0cmluZztcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0aGlzIG5vdGlmaWNhdGlvbiByZXByZXNlbnRzLlxuICAgKi9cbiAgbnVtYmVyPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU2V0IHdoZXRoZXIgdGhpcyBpcyBhbiBcIm9uZ29pbmdcIiBub3RpZmljYXRpb24uXG4gICAqIE9uZ29pbmcgbm90aWZpY2F0aW9ucyBjYW5ub3QgYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLFxuICAgKiBzbyB5b3VyIGFwcGxpY2F0aW9uIG9yIHNlcnZpY2UgbXVzdCB0YWtlIGNhcmUgb2YgY2FuY2VsaW5nIHRoZW0uXG4gICAqL1xuICBzdGlja3k/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogTWFrZSB0aGlzIG5vdGlmaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSB1c2VyIHRvdWNoZXMgaXQuXG4gICAqL1xuICBhdXRvQ2xlYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogSWYgc2V0IHRvIHRydWUgdGhlIG5vdGlmaWNhdGlvbiB3aWxsIGJlIHNob3cgaW4gaXRzIGVudGlyZXR5IG9uIGFsbCBsb2Nrc2NyZWVucy5cbiAgICogSWYgc2V0IHRvIGZhbHNlIGl0IHdpbGwgbm90IGJlIHJldmVhbGVkIG9uIGEgc2VjdXJlIGxvY2tzY3JlZW4uXG4gICAqL1xuICBsb2Nrc2NyZWVuPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNldCB0aGUgZGVmYXVsdCBub3RpZmljYXRpb24gb3B0aW9ucyB0aGF0IHdpbGwgYmUgdXNlZC5cbiAgICogVGhlIHZhbHVlIHNob3VsZCBiZSBvbmUgb3IgbW9yZSBvZiB0aGUgZm9sbG93aW5nIGZpZWxkcyBjb21iaW5lZCB3aXRoXG4gICAqIGJpdHdpc2Utb3I6IERFRkFVTFRfU09VTkQsIERFRkFVTFRfVklCUkFURSwgREVGQVVMVF9MSUdIVFMuXG4gICAqL1xuICBkZWZhdWx0cz86IG51bWJlcjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNwZWNpZmllcyB0aGUgY2hhbm5lbCB0aGUgbm90aWZpY2F0aW9uIHNob3VsZCBiZSBkZWxpdmVyZWQgb24uXG4gICAqL1xuICBjaGFubmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU2V0IHRoZSB0b2tlbiBmb3IgdGhlIG1lZGlhIHNlc3Npb25cbiAgICovXG4gIG1lZGlhU2Vzc2lvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWFrZSB0aGlzIG5vdGlmaWNhdGlvbiBzaG93IHdoZW4gYXBwIGluIGZvcmVncm91bmQuXG4gICAqL1xuICBmb3JlZ3JvdW5kPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBMb2NhbCBOb3RpZmljYXRpb25zXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gZGlzcGxheSBsb2NhbCBub3RpZmljYXRpb25zIG9uIHRoZSBkZXZpY2VcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbG9jYWwtbm90aWZpY2F0aW9ucy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsTm90aWZpY2F0aW9uczogTG9jYWxOb3RpZmljYXRpb25zKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gU2NoZWR1bGUgYSBzaW5nbGUgbm90aWZpY2F0aW9uXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZSh7XG4gKiAgIGlkOiAxLFxuICogICB0ZXh0OiAnU2luZ2xlIElMb2NhbE5vdGlmaWNhdGlvbicsXG4gKiAgIHNvdW5kOiBpc0FuZHJvaWQ/ICdmaWxlOi8vc291bmQubXAzJzogJ2ZpbGU6Ly9iZWVwLmNhZicsXG4gKiAgIGRhdGE6IHsgc2VjcmV0OiBrZXkgfVxuICogfSk7XG4gKlxuICpcbiAqIC8vIFNjaGVkdWxlIG11bHRpcGxlIG5vdGlmaWNhdGlvbnNcbiAqIHRoaXMubG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XG4gKiAgICBpZDogMSxcbiAqICAgIHRleHQ6ICdNdWx0aSBJTG9jYWxOb3RpZmljYXRpb24gMScsXG4gKiAgICBzb3VuZDogaXNBbmRyb2lkID8gJ2ZpbGU6Ly9zb3VuZC5tcDMnOiAnZmlsZTovL2JlZXAuY2FmJyxcbiAqICAgIGRhdGE6IHsgc2VjcmV0OmtleSB9XG4gKiAgIH0se1xuICogICAgaWQ6IDIsXG4gKiAgICB0aXRsZTogJ0xvY2FsIElMb2NhbE5vdGlmaWNhdGlvbiBFeGFtcGxlJyxcbiAqICAgIHRleHQ6ICdNdWx0aSBJTG9jYWxOb3RpZmljYXRpb24gMicsXG4gKiAgICBpY29uOiAnaHR0cDovL2V4YW1wbGUuY29tL2ljb24ucG5nJ1xuICogfV0pO1xuICpcbiAqXG4gKiAvLyBTY2hlZHVsZSBkZWxheWVkIG5vdGlmaWNhdGlvblxuICogdGhpcy5sb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoe1xuICogICAgdGV4dDogJ0RlbGF5ZWQgSUxvY2FsTm90aWZpY2F0aW9uJyxcbiAqICAgIHRyaWdnZXI6IHthdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAzNjAwKX0sXG4gKiAgICBsZWQ6ICdGRjAwMDAnLFxuICogICAgc291bmQ6IG51bGxcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSUxvY2FsTm90aWZpY2F0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG9jYWxOb3RpZmljYXRpb25zJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm5vdGlmaWNhdGlvbi5sb2NhbCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbnMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbE5vdGlmaWNhdGlvbnMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbmZvcm1zIGlmIHRoZSBhcHAgaGFzIHRoZSBwZXJtaXNzaW9uIHRvIHNob3cgbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBzaG93IG5vdGlmaWNhdGlvbnMgaWYgbm90IGFscmVhZHkgZ3JhbnRlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYSBzaW5nbGUgb3IgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7Tm90aWZpY2F0aW9uIHwgSUxvY2FsTm90aWZpY2F0aW9uW119IG9wdGlvbmFsXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2NoZWR1bGUob3B0aW9ucz86IElMb2NhbE5vdGlmaWNhdGlvbiB8IElMb2NhbE5vdGlmaWNhdGlvbltdKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgcHJldmlvdXNseSBzY2hlZHVsZWQgbm90aWZpY2F0aW9uLiBNdXN0IGluY2x1ZGUgdGhlIGlkIGluIHRoZSBvcHRpb25zIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIG9wdGlvbnMge0lMb2NhbE5vdGlmaWNhdGlvbn0gb3B0aW9uYWxcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICB1cGRhdGUob3B0aW9ucz86IElMb2NhbE5vdGlmaWNhdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogQ2xlYXJzIHNpbmdsZSBvciBtdWx0aXBsZSBub3RpZmljYXRpb25zXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7YW55fSBBIHNpbmdsZSBub3RpZmljYXRpb24gaWQsIG9yIGFuIGFycmF5IG9mIG5vdGlmaWNhdGlvbiBpZHMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBoYWQgYmVlbiBjbGVhcmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2hlbiBhbGwgbm90aWZpY2F0aW9ucyBoYXZlIGNsZWFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXJBbGwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VscyBzaW5nbGUgb3IgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge2FueX0gQSBzaW5nbGUgbm90aWZpY2F0aW9uIGlkLCBvciBhbiBhcnJheSBvZiBub3RpZmljYXRpb24gaWRzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBub3RpZmljYXRpb24gaXMgY2FuY2VsZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2FuY2VsKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIGFsbCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdoZW4gYWxsIG5vdGlmaWNhdGlvbnMgYXJlIGNhbmNlbGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhbmNlbEFsbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgcHJlc2VuY2Ugb2YgYSBub3RpZmljYXRpb25cbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHtudW1iZXJ9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1ByZXNlbnQobm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaXMgYSBub3RpZmljYXRpb24gaXMgc2NoZWR1bGVkXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNTY2hlZHVsZWQobm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBub3RpZmljYXRpb24gaXMgdHJpZ2dlcmVkXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNUcmlnZ2VyZWQobm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIG5vdGlmaWNhdGlvbiBoYXMgYSBnaXZlbiB0eXBlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVGhlIElEIG9mIHRoZSBub3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlICBUaGUgdHlwZSBvZiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzVHlwZShpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0eXBlICh0cmlnZ2VyZWQsIHNjaGVkdWxlZCkgZm9yIHRoZSBub3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBUaGUgSUQgb2YgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VHlwZShpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIG5vdGlmaWNhdGlvbiBpZHNcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8bnVtYmVyPj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElkcygpOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaWRzIG9mIHNjaGVkdWxlZCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcltdPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2NoZWR1bGVkSWRzKCk6IFByb21pc2U8bnVtYmVyW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBpZHMgb2YgdHJpZ2dlcmVkIG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8bnVtYmVyPj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRyaWdnZXJlZElkcygpOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIG5vdGlmaWNhdGlvbiBvYmplY3RcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHthbnl9IFRoZSBpZCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQobm90aWZpY2F0aW9uSWQ6IGFueSk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbm90aWZpY2F0aW9uIG9iamVjdHNcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbGwoKTogUHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb25bXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzY2hlZHVsZWQgbm90aWZpY2F0aW9uIG9iamVjdFxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge2FueX0gVGhlIGlkIG9mIHRoZSBub3RpZmljYXRpb24gdG8gZ2V0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNjaGVkdWxlZChub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdHJpZ2dlcmVkIG5vdGlmaWNhdGlvbiBvYmplY3RcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIFRoZSBpZCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUcmlnZ2VyZWQobm90aWZpY2F0aW9uSWQ6IGFueSk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBncm91cCBvZiBhY3Rpb25zXG4gICAqIEBwYXJhbSBncm91cElkIFRoZSBpZCBvZiB0aGUgYWN0aW9uIGdyb3VwXG4gICAqIEBwYXJhbSBhY3Rpb25zIFRoZSBhY3Rpb25zIG9mIHRoaXMgZ3JvdXBcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkQWN0aW9ucyhncm91cElkOiBhbnksIGFjdGlvbnM6IElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvbltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGdyb3VwIG9mIGFjdGlvbnNcbiAgICogQHBhcmFtIGdyb3VwSWQgVGhlIGlkIG9mIHRoZSBhY3Rpb24gZ3JvdXBcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlQWN0aW9ucyhncm91cElkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBncm91cCBvZiBhY3Rpb25zIGlzIGRlZmluZWRcbiAgICogQHBhcmFtIGdyb3VwSWQgVGhlIGlkIG9mIHRoZSBhY3Rpb24gZ3JvdXBcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFdoZXRoZXIgdGhlIGdyb3VwIGlzIGRlZmluZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzQWN0aW9ucyhncm91cElkOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgKHBsYXRmb3JtIHNwZWNpZmljKSBkZWZhdWx0IHNldHRpbmdzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBBbiBvYmplY3Qgd2l0aCBhbGwgZGVmYXVsdCBzZXR0aW5nc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGdldERlZmF1bHRzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZXMgdGhlIChwbGF0Zm9ybSBzcGVjaWZpYykgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXREZWZhdWx0cyhkZWZhdWx0czogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBzY2hlZHVsZWQgbm90aWZpY2F0aW9uIG9iamVjdHNcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8SUxvY2FsTm90aWZpY2F0aW9uPj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFsbFNjaGVkdWxlZCgpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdHJpZ2dlcmVkIG5vdGlmaWNhdGlvbiBvYmplY3RzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PElMb2NhbE5vdGlmaWNhdGlvbj4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbGxUcmlnZ2VyZWQoKTogUHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb25bXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEF2YWlsYWJsZSBldmVudHM6IHNjaGVkdWxlLCB0cmlnZ2VyLCBjbGljaywgdXBkYXRlLCBjbGVhciwgY2xlYXJhbGwsIGNhbmNlbCwgY2FuY2VsYWxsLiBDdXN0b20gZXZlbnQgbmFtZXMgYXJlIHBvc3NpYmxlIGZvciBhY3Rpb25zXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAndW4nLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXG4gIH0pXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTm90IGFuIG9mZmljaWFsIGludGVyZmFjZSwgaG93ZXZlciBpdHMgcG9zc2libGUgdG8gbWFudWFsbHkgZmlyZSBldmVudHMuXG4gICAqIEBwYXJhbSBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBBdmFpbGFibGUgZXZlbnRzOiBzY2hlZHVsZSwgdHJpZ2dlciwgY2xpY2ssIHVwZGF0ZSwgY2xlYXIsIGNsZWFyYWxsLCBjYW5jZWwsIGNhbmNlbGFsbC4gQ3VzdG9tIGV2ZW50IG5hbWVzIGFyZSBwb3NzaWJsZSBmb3IgYWN0aW9uc1xuICAgKiBAcGFyYW0gYXJncyBPcHRpb25hbCBhcmd1bWVudHNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBmaXJlRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHZvaWQge31cblxuICAvKipcbiAgICogRmlyZSBxdWV1ZWQgZXZlbnRzIG9uY2UgdGhlIGRldmljZSBpcyByZWFkeSBhbmQgYWxsIGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmlyZVF1ZXVlZEV2ZW50cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Photo Gallery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n  <div margin-top text-center>\n    <ion-button  (click)=\"logOut()\">\n      Log out\n    </ion-button>\n    <ion-fab margin-right  slot=\"fixed\" >\n      <ion-button (click)=\"photoService.addNewToGallery()\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"photoService.getPhotoFromSystem()\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-fab>\n  </div>\n  \n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" \n      *ngFor=\"let photo of photoService.photos; index as position\">\n        <ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\">\n        </ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        Camera = _capacitor_core__WEBP.Camera,
        Filesystem = _capacitor_core__WEBP.Filesystem,
        Storage = _capacitor_core__WEBP.Storage;

    var PhotoService = /*#__PURE__*/function () {
      function PhotoService(platform) {
        _classCallCheck(this, PhotoService);

        this.photos = [];
        this.PHOTO_STORAGE = "photos";

        this.convertBlobToBase64 = function (blob) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(blob);
          });
        };

        this.platform = platform;
      }

      _createClass(PhotoService, [{
        key: "readAsBase64",
        value: function readAsBase64(cameraPhoto) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var file, response, blob;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.platform.is('hybrid')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 3;
                    return Filesystem.readFile({
                      path: cameraPhoto.path
                    });

                  case 3:
                    file = _context.sent;
                    return _context.abrupt("return", file.data);

                  case 7:
                    _context.next = 9;
                    return fetch(cameraPhoto.webPath);

                  case 9:
                    response = _context.sent;
                    _context.next = 12;
                    return response.blob();

                  case 12:
                    blob = _context.sent;
                    _context.next = 15;
                    return this.convertBlobToBase64(blob);

                  case 15:
                    return _context.abrupt("return", _context.sent);

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadSaved",
        value: function loadSaved() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var photos, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, photo, readFile;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Storage.get({
                      key: this.PHOTO_STORAGE
                    });

                  case 2:
                    photos = _context2.sent;
                    this.photos = JSON.parse(photos.value) || []; // Easiest way to detect when running on the web: 
                    // “when the platform is NOT hybrid, do this”

                    if (this.platform.is('hybrid')) {
                      _context2.next = 33;
                      break;
                    }

                    // Display the photo by reading into base64 format
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context2.prev = 8;
                    _iterator = this.photos[Symbol.iterator]();

                  case 10:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                      _context2.next = 19;
                      break;
                    }

                    photo = _step.value;
                    _context2.next = 14;
                    return Filesystem.readFile({
                      path: photo.filepath,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 14:
                    readFile = _context2.sent;
                    // Web platform only: Save the photo into the base64 field
                    photo.base64 = "data:image/jpeg;base64,".concat(readFile.data);

                  case 16:
                    _iteratorNormalCompletion = true;
                    _context2.next = 10;
                    break;

                  case 19:
                    _context2.next = 25;
                    break;

                  case 21:
                    _context2.prev = 21;
                    _context2.t0 = _context2["catch"](8);
                    _didIteratorError = true;
                    _iteratorError = _context2.t0;

                  case 25:
                    _context2.prev = 25;
                    _context2.prev = 26;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 28:
                    _context2.prev = 28;

                    if (!_didIteratorError) {
                      _context2.next = 31;
                      break;
                    }

                    throw _iteratorError;

                  case 31:
                    return _context2.finish(28);

                  case 32:
                    return _context2.finish(25);

                  case 33:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[8, 21, 25, 33], [26,, 28, 32]]);
          }));
        }
      }, {
        key: "getPhotoFile",
        value: function getPhotoFile(cameraPhoto, fileName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var fileUri;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.platform.is('hybrid')) {
                      _context3.next = 7;
                      break;
                    }

                    _context3.next = 3;
                    return Filesystem.getUri({
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data,
                      path: fileName
                    });

                  case 3:
                    fileUri = _context3.sent;
                    return _context3.abrupt("return", {
                      filepath: fileUri.uri,
                      webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].convertFileSrc(fileUri.uri)
                    });

                  case 7:
                    return _context3.abrupt("return", {
                      filepath: fileName,
                      webviewPath: cameraPhoto.webPath
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "savePicture",
        value: function savePicture(cameraPhoto) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var base64Data, fileName;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.readAsBase64(cameraPhoto);

                  case 2:
                    base64Data = _context4.sent;
                    // Write the file to the data directory
                    fileName = new Date().getTime() + '.jpeg';
                    _context4.next = 6;
                    return Filesystem.writeFile({
                      path: fileName,
                      data: base64Data,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 6:
                    _context4.next = 8;
                    return this.getPhotoFile(cameraPhoto, fileName);

                  case 8:
                    return _context4.abrupt("return", _context4.sent);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "addNewToGallery",
        value: function addNewToGallery() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var capturedPhoto, savedImageFile;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return Camera.getPhoto({
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                      quality: 100 // highest quality (0 to 100)

                    });

                  case 2:
                    capturedPhoto = _context5.sent;
                    _context5.next = 5;
                    return this.savePicture(capturedPhoto);

                  case 5:
                    savedImageFile = _context5.sent;
                    this.photos.unshift(savedImageFile);
                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: this.platform.is('hybrid') ? JSON.stringify(this.photos) : JSON.stringify(this.photos.map(function (p) {
                        // Don't save the base64 representation of the photo data, 
                        // since it's already saved on the Filesystem
                        var photoCopy = Object.assign({}, p);
                        delete photoCopy.base64;
                        return photoCopy;
                      }))
                    });

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getPhotoFromSystem",
        value: function getPhotoFromSystem() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var capturedPhoto, savedImageFile;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Camera.getPhoto({
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos,
                      quality: 100 // highest quality (0 to 100)

                    });

                  case 2:
                    capturedPhoto = _context6.sent;
                    _context6.next = 5;
                    return this.savePicture(capturedPhoto);

                  case 5:
                    savedImageFile = _context6.sent;
                    this.photos.unshift(savedImageFile);
                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: this.platform.is('hybrid') ? JSON.stringify(this.photos) : JSON.stringify(this.photos.map(function (p) {
                        // Don't save the base64 representation of the photo data, 
                        // since it's already saved on the Filesystem
                        var photoCopy = Object.assign({}, p);
                        delete photoCopy.base64;
                        return photoCopy;
                      }))
                    });

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return PhotoService;
    }();

    PhotoService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], PhotoService);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]],
      providers: [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9FOlxcYXV0b21hdGljYVxcYXV0b21hdGljYUFuNFxcc2VtMlxcbW9iaWxlIGNvbXB1dGluZ1xccHJvaWVjdFxccGhvdG8tZ2FsbGVyeS9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(photoService, navCtrl, toastCtrl, localNotifications) {
        _classCallCheck(this, Tab2Page);

        this.photoService = photoService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.localNotifications = localNotifications;
      }

      _createClass(Tab2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photoService.loadSaved();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          var _this2 = this;

          parse__WEBPACK_IMPORTED_MODULE_3__["Parse"].User.logOut().then(function (resp) {
            console.log('Logged out successfully', resp);

            _this2.navCtrl.navigateRoot('login');
          }, function (err) {
            console.log('Error logging out', err);

            _this2.toastCtrl.create({
              message: 'Error logging out',
              duration: 2000
            });
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.onEnterSendNotification();
        }
      }, {
        key: "onEnterSendNotification",
        value: function onEnterSendNotification() {
          this.sendNotifications({
            id: 1,
            title: 'New notification',
            text: 'Welcome back, my friend.'
          });
        }
      }, {
        key: "sendNotifications",
        value: function sendNotifications(notifications) {
          var _this3 = this;

          return this.localNotifications.hasPermission().then(function (hasPermission) {
            if (hasPermission) {
              _this3.localNotifications.schedule(notifications);
            } else {
              _this3.localNotifications.requestPermission().then(function (hasPermission) {
                if (hasPermission) {
                  _this3.localNotifications.schedule(notifications);
                }
              });
            }
          });
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]
      }];
    };

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map