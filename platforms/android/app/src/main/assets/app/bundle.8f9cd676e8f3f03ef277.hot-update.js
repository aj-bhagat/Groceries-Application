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
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
        // TODO: Define
    };
    AppComponent.prototype.signUp = function () {
        this.userService.register(this.user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDRjtBQUNpQjtBQVN6RDtJQUdFLHNCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUQ1QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksc0RBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsZUFBZTtJQUNqQixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUgsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3JDLENBQUM7O2dCQXJCa0MscUVBQVc7O0lBSGpDLFlBQVk7UUFQeEIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLHFFQUFXLENBQUM7WUFFeEIseURBQXVDOztTQUV4QyxDQUFDO3lDQUlpQyxxRUFBVztPQUhqQyxZQUFZLENBeUJ4QjtJQUFELG1CQUFDO0NBQUE7QUF6QndCIiwiZmlsZSI6ImJ1bmRsZS44ZjljZDY3NmU4ZjNmMDNlZjI3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWxvZ2luXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9wYWdlcy9sb2dpbi9sb2dpbi5hbmRyb2lkLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgfVxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cbiAgXG4gIGxvZ2luKCkge1xuICAgIC8vIFRPRE86IERlZmluZVxuICB9XG4gIFxuICBzaWduVXAoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpO1xuICB9XG5cbnRvZ2dsZURpc3BsYXkoKXtcbiAgdGhpcy5pc0xvZ2dpbmdJbj0hdGhpcy5pc0xvZ2dpbmdJbjtcbn1cbn0iXSwic291cmNlUm9vdCI6IiJ9