"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "codefellow@gmail.com";
    }
    AppComponent.prototype.submit = function () {
        alert("You're using: " + this.email);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n<StackLayout>\n<Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n    <TextField hint=\"Email Address\" keyboardType=\"email\" [text] = \"email\"\nautocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n    <Button text=\"Sign in\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n    <Button text=\"Sign up for Groceries\"></Button>\n</StackLayout>\n",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQWdCeEMsSUFBYSxZQUFZO0lBZHpCO1FBZUUsVUFBSyxHQUFHLHNCQUFzQixDQUFDO0lBSWpDLENBQUM7SUFIQyw2QkFBTSxHQUFOO1FBQ0UsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLFlBQVk7SUFkeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSwwZEFTWDtRQUNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7R0FDVyxZQUFZLENBS3hCO0FBTFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuPFN0YWNrTGF5b3V0PlxuPEltYWdlIHNyYz1cInJlczovL2xvZ29fbG9naW5cIiBzdHJldGNoPVwibm9uZVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj48L0ltYWdlPlxuICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIFt0ZXh0XSA9IFwiZW1haWxcIlxuYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCI+PC9UZXh0RmllbGQ+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiBpblwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIj48L0J1dHRvbj5cbiAgICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwIGZvciBHcm9jZXJpZXNcIj48L0J1dHRvbj5cbjwvU3RhY2tMYXlvdXQ+XG5gLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgZW1haWwgPSBcImNvZGVmZWxsb3dAZ21haWwuY29tXCI7XG4gIHN1Ym1pdCgpe1xuICAgIGFsZXJ0KFwiWW91J3JlIHVzaW5nOiBcIiArIHRoaXMuZW1haWwpO1xuICB9XG59Il19