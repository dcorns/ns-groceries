"use strict";
var core_1 = require("@angular/core");
var ListComponent = (function () {
    function ListComponent() {
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.groceryList.push({ name: 'Apples' });
        this.groceryList.push({ name: 'Bananas' });
        this.groceryList.push({ name: 'Oranges' });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
    })
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVFO0FBT3ZFLElBQWEsYUFBYTtJQUwxQjtRQU1FLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztJQU9sQyxDQUFDO0lBTEMsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztLQUNqRSxDQUFDO0dBQ1csYUFBYSxDQVF6QjtBQVJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBncm9jZXJ5TGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHtuYW1lOiAnQXBwbGVzJ30pO1xuICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7bmFtZTogJ0JhbmFuYXMnfSk7XG4gICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHtuYW1lOiAnT3Jhbmdlcyd9KTtcbiAgfVxufSJdfQ==