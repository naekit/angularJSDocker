;(function () {
	const AllOrdersController = function ($scope, customersFactory) {
		$scope.orders = null
		$scope.ordersTotal = 0.0
		$scope.totalType

		function init() {
			customersFactory.getOrders().then(
				function (response) {
					$scope.orders = response.data
					getOrdersTotal()
				},
				function (data, status, headers, config) {
					//handle error
				}
			)
		}
		// simple ng-class binding to change the color of the total

		function getOrdersTotal() {
			let total = 0
			for (let i = 0, len = $scope.orders.length; i < len; i++) {
				total += $scope.orders[i].total
			}
			$scope.ordersTotal = total
			$scope.totalType =
				$scope.ordersTotal > 100 ? "table-success" : "table-danger"
		}

		init()
	}

	AllOrdersController.$inject = ["$scope", "customersFactory"]

	angular
		.module("customersApp")
		.controller("AllOrdersController", AllOrdersController)
})()
