function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<h4 text-center margin-top>Insert your credentials</h4>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n\t  <ion-item>\n\t\t<ion-label stacked>Username: </ion-label>\n\t\t<ion-input [(ngModel)]=\"username\"></ion-input>\n\t  </ion-item>\n\t</ion-row>\n\t <ion-row>\n\t  <ion-item>\n\t\t<ion-label stacked>Password: </ion-label>\n\t\t<ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n\t  </ion-item>\n   </ion-row>\n\t<ion-row>\n  <ion-col>\n    <button ion-button margin-right style=\"background-color:#ADFF2F\" (click)=\"signUp()\">\n      SIGN UP\n    </button>\n    <button ion-button style=\"background-color:#00BFFF\" (click)=\"signIn()\">\n      SIGN IN\n    </button>\n\t</ion-col>\n \n   </ion-row>\n  </ion-grid>\n </ion-content>";
    /***/
  },

  /***/
  "./src/app/auth/login/login-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/auth/login/login-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppAuthLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/auth/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.module.ts":
  /*!********************************************!*\
    !*** ./src/app/auth/login/login.module.ts ***!
    \********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/auth/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/auth/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.page.scss":
  /*!********************************************!*\
    !*** ./src/app/auth/login/login.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9FOlxcYXV0b21hdGljYVxcYXV0b21hdGljYUFuNFxcc2VtMlxcbW9iaWxlIGNvbXB1dGluZ1xccHJvaWVjdFxccGhvdG8tZ2FsbGVyeS9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5he1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iLCJhIHtcbiAgY29sb3I6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.page.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/login/login.page.ts ***!
    \******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppAuthLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! parse */
    "./node_modules/parse/index.js");
    /* harmony import */


    var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");

    var LoginPage = /*#__PURE__*/function () {
      //constructor(private  authService:  AuthService, private  router:  Router) { }
      function LoginPage(navCtrl, toastCtrl, alertCtrl, router, network, platform) {
        _classCallCheck(this, LoginPage);

        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.network = network;
        this.platform = platform;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.platform.is('cordova')) {
            var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
              console.log('network was disconnected :-(');
            });
          }
        }
      }, {
        key: "signUp",
        value: function signUp() {
          var _this = this;

          parse__WEBPACK_IMPORTED_MODULE_2__["Parse"].User.signUp(this.username, this.password).then(function (resp) {
            console.log('Logged in successfully', resp); // Clears up the form

            _this.username = '';
            _this.password = '';

            _this.toastCtrl.create({
              message: 'Account created successfully',
              duration: 2000
            });
          }, /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err) {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this.alertCtrl.create({
                        message: 'Account with this credentials already exists',
                        buttons: ['Dismiss']
                      });

                    case 2:
                      alert = _context.sent.present();

                      _this.toastCtrl.create({
                        message: err.message,
                        duration: 2000
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      }, {
        key: "signIn",
        value: function signIn() {
          var _this2 = this;

          parse__WEBPACK_IMPORTED_MODULE_2__["Parse"].User.logIn(this.username, this.password).then(function (resp) {
            console.log('Logged in successfully', resp); // If you app has Tabs, set root to TabsPage

            _this2.router.navigate(["tabs/tab2"]); //this.navCtrl.navigateRoot('tabs/tab2')

          }, /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err) {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _this2.alertCtrl.create({
                        message: 'Invalid credentials.',
                        buttons: ['Dismiss']
                      });

                    case 2:
                      alert = _context2.sent.present();

                      _this2.toastCtrl.create({
                        message: err.message,
                        duration: 2000
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/auth/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-login-login-module-es5.js.map