"use strict";
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        alert("About to register: " + user.email);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFJekMsSUFBYSxXQUFXO0lBQXhCO0lBSUEsQ0FBQztJQUhDLDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLEtBQUssQ0FBQyx3QkFBc0IsSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksV0FBVztJQUR2QixpQkFBVSxFQUFFO0dBQ0EsV0FBVyxDQUl2QjtBQUpZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcbiAgcmVnaXN0ZXIodXNlcjogVXNlcil7XG4gICAgYWxlcnQoYEFib3V0IHRvIHJlZ2lzdGVyOiAke3VzZXIuZW1haWx9YCk7XG4gIH1cbn0iXX0=