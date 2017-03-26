"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
    }
    GroceryListService.prototype.load = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer" + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "Groceries", {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var groceryList = [];
            data.Result.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery.Id, grocery.Name));
            });
            return groceryList;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNDQUE0QztBQUM1Qyw4QkFBbUM7QUFDbkMsaUNBQStCO0FBQy9CLG9DQUFpQztBQUNqQyxxQ0FBa0M7QUFHbEMsSUFBYSxrQkFBa0I7SUFDN0IsNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxpQ0FBSSxHQUFKO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxRQUFRLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRTtZQUNoRCxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO2FBQ0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDMUIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QseUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLGtCQUFrQixDQXVCOUI7QUF2QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHtHcm9jZXJ5fSBmcm9tIFwiLi9ncm9jZXJ5XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgbG9hZCgpe1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXJcIiArIENvbmZpZy50b2tlbik7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIFwiR3JvY2VyaWVzXCIsIHtcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgIGxldCBncm9jZXJ5TGlzdCA9IFtdO1xuICAgICAgICBkYXRhLlJlc3VsdC5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgICAgZ3JvY2VyeUxpc3QucHVzaChuZXcgR3JvY2VyeShncm9jZXJ5LklkLCBncm9jZXJ5Lk5hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2Upe1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufVxuIl19