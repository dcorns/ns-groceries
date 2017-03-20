"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "user@dale.com";
        this.user.password = "123erd";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMsK0NBQTRDO0FBQzVDLCtEQUEwRDtBQU8xRCxJQUFhLGNBQWM7SUFHekIsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRDVDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBQ0QsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBRWpDLFNBQVMsQ0FDUjtZQUNFLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxFQUE3RCxDQUE2RCxDQUNwRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO3FDQUlpQywwQkFBVztHQUhqQyxjQUFjLENBZ0MxQjtBQWhDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKXtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHRoaXMudXNlci5lbWFpbCA9IFwidXNlckBkYWxlLmNvbVwiO1xuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiMTIzZXJkXCI7XG4gIH1cbiAgc3VibWl0KCl7XG4gICAgaWYodGhpcy5pc0xvZ2dpbmdJbil7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuICBsb2dpbigpe1xuXG4gIH1cbiAgc2lnblVwKCl7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgLy9zdWJzY3JpYmluZyB0byB0aGUgaHR0cC5wb3N0IG9ic2VydmVyXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG4gICAgICApO1xuICB9XG4gIHRvZ2dsZURpc3BsYXkoKXtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cbn0iXX0=