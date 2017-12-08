var app = angular.module('vigitest', []);

app.controller('InvoiceController', ['$scope', '$http', function ($scope, $http) {

    $scope.createInvoice = function () {
        var invoiceDetails = {
            "CustomerId": 1,
            "ContactIds": [
              1,
              2
            ],
            "CorporateRevenueId": 2,
            "LocationId": 3,
            "CurrencyId": 4,
            "Note": "sample string 5",
            "InvoiceItems": [
              {
                  "Id": 1,
                  "Detail": "sample string 2",
                  "Amount": 3.0,
                  "Quantity": 4,
                  "InvoiceId": 5,
                  "CorporateProductId": 6,
                  "CorporateProductCode": "sample string 7"
              },
              {
                  "Id": 1,
                  "Detail": "sample string 2",
                  "Amount": 3.0,
                  "Quantity": 4,
                  "InvoiceId": 5,
                  "CorporateProductId": 6,
                  "CorporateProductCode": "sample string 7"
              }
            ],
            "CorporateId": 6,
            "InvoiceReference": "sample string 7",
            "InvoiceDate": "2017-12-04T07:35:35.8383535+00:00",
            "DueDate": "2017-12-04T07:35:35.8383535+00:00",
            "EnforceDueDate": true,
            "InvoiceNumber": "sample string 9",
            "InvoiceAction": 1
        };
        $http.post('https://api.vigipay.gov/api/invoice/create', invoiceDetails)
            .then(function (response) {
                document.writeln(response.data);
            }, function (response) {
                document.write(response.data);
            });
    };

    $scope.getInvoices = function () {

    };
}]);

app.config(['$httpProvider', function ($httpProvider) {

    $httpProvider.defaults.headers.common['Accept'] = "application/json";
    $httpProvider.defaults.headers.common['Content-Type'] = "application/json";
    //$httpProvider.defaults.useXDomain = true;

}]);