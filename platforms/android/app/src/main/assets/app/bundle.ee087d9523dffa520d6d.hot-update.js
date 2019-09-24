webpackHotUpdate("bundle",{

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/user/user.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/user/user.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new _shared_user_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    AppComponent.prototype.submit = function () {
        alert("You're using: " + this.user.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-login",
            providers: [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            template: __webpack_require__("./pages/login/login.html"),
            styles: [__webpack_require__("./pages/login/login.android.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDRjtBQUNpQjtBQVN6RDtJQUdFLHNCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUQ1QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksc0RBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCw2QkFBTSxHQUFOO1FBQ0UsS0FBSyxDQUFDLGdCQUFnQixHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVILG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNyQyxDQUFDOztnQkFUa0MscUVBQVc7O0lBSGpDLFlBQVk7UUFQeEIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLHFFQUFXLENBQUM7WUFFeEIseURBQXVDOztTQUV4QyxDQUFDO3lDQUlpQyxxRUFBVztPQUhqQyxZQUFZLENBYXhCO0lBQUQsbUJBQUM7Q0FBQTtBQWJ3QiIsImZpbGUiOiJidW5kbGUuZWUwODdkOTUyM2RmZmE1MjBkNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1sb2dpblwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbG9naW4vbG9naW4uYW5kcm9pZC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cbiAgc3VibWl0KCl7XG4gICAgYWxlcnQoXCJZb3UncmUgdXNpbmc6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gIH1cblxudG9nZ2xlRGlzcGxheSgpe1xuICB0aGlzLmlzTG9nZ2luZ0luPSF0aGlzLmlzTG9nZ2luZ0luO1xufVxufSJdLCJzb3VyY2VSb290IjoiIn0=