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
        this.groceryList.push({ name: 'Onions' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVFO0FBT3ZFLElBQWEsYUFBYTtJQUwxQjtRQU1FLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztJQVFsQyxDQUFDO0lBTkMsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0tBQ2pFLENBQUM7R0FDVyxhQUFhLENBU3pCO0FBVFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIGdyb2NlcnlMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goe25hbWU6ICdBcHBsZXMnfSk7XG4gICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHtuYW1lOiAnQmFuYW5hcyd9KTtcbiAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goe25hbWU6ICdPcmFuZ2VzJ30pO1xuICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7bmFtZTogJ09uaW9ucyd9KTtcbiAgfVxufSJdfQ==