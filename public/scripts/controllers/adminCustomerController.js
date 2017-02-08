myApp.controller('adminCustomerController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
      console.log("NG");
        console.log('in adminCustomerController');

        $scope.viewCustomer = function() {
            $http({
                method: 'GET',
                url: '/customer', //or url: '/customer/id',
            }).then(function successCallback(response) {
                console.log(response);
                $scope.customers = response.data;
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.addCustomer = function() {
            var data = {
                name: $scope.customerName,
                address: $scope.customerAddress,
                products: $scope.productToBeAdded
            };
            console.log("data:", data);
            $http({
                method: 'POST',
                url: '/customer',
                data: data,
            }).then(function successCallback(response) {
                console.log(response);
                alert("New Customer Added");
                $window.location.reload();
            }, function errorCallback(error) {
                console.log('error', error);
            });
        }; //end addNewCustomer

        $scope.editCustomer = function(customer) {
          $scope.customerToEdit = JSON.parse(JSON.stringify(customer));
        };

        $scope.updateCustomer = function() {
            var data = $scope.customerToEdit;
            console.log("data:", data);
            $http({
                method: 'PUT',
                url: '/customer',
                data: data,
            }).then(function successCallback(response) {
                console.log(response);
                alert("Customer Updated");
                $window.location.reload();
            }, function errorCallback(error) {
                console.log('error', error);
            });
        }; //end updateExistingCustomer

        $scope.deleteCustomer = function(customer) {
            $http({
                method: 'DELETE',
                url: '/customer/' + customer.id,
            }).then(function successCallback(response) {
                console.log(response);
                $window.location.reload();
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.viewProduct = function() {
            $http({
                method: 'GET',
                url: '/product', //or url: '/product/id',
            }).then(function successCallback(response) {
                console.log(response);
                $scope.permitted_products = response.data;
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };
//on button click i would like addProduct to take selected product and add it to the addCustomer products array
        $scope.addProductToCustomer = function(product){
          $scope.productToBeAdded.push(product);
          console.log("product added");
          alert("product added");
        };

        $scope.addProduct = function() {
            var data = {
                type: 'French bread',
                variety: '1/2" slice',
                price: 3.65
            };
            $http({
                method: 'POST',
                url: '/product',
                data: data,
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.updateProduct = function() {
            var data = {
                id: 32,
                price: 3.75
            };
            $http({
                method: 'PUT',
                url: '/product',
                data: data,
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.deleteProduct = function() {
            $http({
                method: 'DELETE',
                url: '/product/:id',
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.viewUser = function() {
            http({
                type: 'GET',
                url: '/user',
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.addUser = function() {
            var data = {
                email: 'frank@franks.com',
                name: 'Frank Bank'
            };
            http({
                type: 'POST',
                url: '/user',
                data: data,
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.updateUser = function() {
            var data = {
                id: 2,
                name: 'Franklin Bank'
            };
            http({
                method: 'PUT',
                url: '/user',
                data: data,
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.deleteUser = function() {
            http({
                method: 'DELETE',
                url: '/user/:id',
                data: data,
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };
        $scope.productToBeAdded = [];
    } //end
]);