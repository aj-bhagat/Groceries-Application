require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-login",
            template: __webpack_require__("./pages/login/login.html"),
            styles: [__webpack_require__("./pages/login/login.android.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "ActionBar {\r\n  background-color: black;\r\n  color: white;\r\n}", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.component.ts");



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({ createFrameOnBootstrap: true }, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"name":"nativescript-template-ng-groceries","version":"4.0.0","main":"main.js"};

/***/ }),

/***/ "./pages/login/login.android.css":
/***/ (function(module, exports) {

module.exports = "FlexboxLayout {\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-image: url(\"https://go-wine.com/admin/img/Farmtotable.jpg\");\n}\nStackLayout {\n  width: 300;\n  padding: 15 16;\n  background-color: #f0f0f0;\n}\n\nImage {\n  margin-bottom: 20;\n  height: 70;\n}\nButton, TextField{\n  margin-bottom: 10;\n}\n.btn-primary{\n  background-color: #CB1D00;\n  margin-left: 0;\n  margin-right: 0;\n}\nTextField{\n  placeholder-color: #C4AFB4;\n  color: black;\n\n}"

/***/ }),

/***/ "./pages/login/login.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\r\n\r\n<FlexboxLayout>\r\n  <StackLayout class=\"form\">\r\n    <TextField hint=\"Email Address\" keyboardType=\"email\"\r\n      autocorrect=\"false\" autocapitalizationType=\"none\"\r\n      class=\"input input-border\"></TextField>\r\n    <TextField hint=\"Password\" secure=\"true\"\r\n      class=\"input input-border\"></TextField>\r\n\r\n    <Button text=\"Sign in\" class=\"btn btn-primary\"></Button>\r\n    <Button text=\"Sign up for Groceries\"></Button>\r\n  </StackLayout>\r\n</FlexboxLayout>"

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luL2xvZ2luLmFuZHJvaWQuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQTBDO0FBUTFDO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFOeEIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBRXBCLHlEQUF1Qzs7U0FFeEMsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7QUNSekIseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsY0FBYyw4QkFBOEIsbUJBQW1CLEtBQUs7O0FBRTNGO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNxQztBQUUvQjtBQU8vQztJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBTHJCLDhEQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywyRkFBa0IsQ0FBQztZQUM3QixZQUFZLEVBQUUsQ0FBQywyREFBWSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDLDJEQUFZLENBQUM7U0FDMUIsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUE7QUFBSDs7Ozs7Ozs7Ozs7Ozs7QUNSdEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxjQUF5Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p6RixpQ0FBaUMsNEJBQTRCLHdCQUF3QiwyQkFBMkIsNkVBQTZFLEdBQUcsZUFBZSxlQUFlLG1CQUFtQiw4QkFBOEIsR0FBRyxXQUFXLHNCQUFzQixlQUFlLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLGVBQWUsOEJBQThCLG1CQUFtQixvQkFBb0IsR0FBRyxZQUFZLCtCQUErQixpQkFBaUIsS0FBSyxDOzs7Ozs7O0FDQTFnQix3akIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWxvZ2luXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbG9naW4vbG9naW4uYW5kcm9pZC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkFjdGlvbkJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoeyBjcmVhdGVGcmFtZU9uQm9vdHN0cmFwOiB0cnVlIH0pLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkZsZXhib3hMYXlvdXQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9nby13aW5lLmNvbS9hZG1pbi9pbWcvRmFybXRvdGFibGUuanBnXFxcIik7XFxufVxcblN0YWNrTGF5b3V0IHtcXG4gIHdpZHRoOiAzMDA7XFxuICBwYWRkaW5nOiAxNSAxNjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbkltYWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwO1xcbiAgaGVpZ2h0OiA3MDtcXG59XFxuQnV0dG9uLCBUZXh0RmllbGR7XFxuICBtYXJnaW4tYm90dG9tOiAxMDtcXG59XFxuLmJ0bi1wcmltYXJ5e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCMUQwMDtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5UZXh0RmllbGR7XFxuICBwbGFjZWhvbGRlci1jb2xvcjogI0M0QUZCNDtcXG4gIGNvbG9yOiBibGFjaztcXG5cXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48RmxleGJveExheW91dD5cXHJcXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxyXFxuICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW1haWwgQWRkcmVzc1xcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCJcXHJcXG4gICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxyXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgIDxUZXh0RmllbGQgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIj48L1RleHRGaWVsZD5cXHJcXG5cXHJcXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTaWduIGluXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXHJcXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTaWduIHVwIGZvciBHcm9jZXJpZXNcXFwiPjwvQnV0dG9uPlxcclxcbiAgPC9TdGFja0xheW91dD5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9