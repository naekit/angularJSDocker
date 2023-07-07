;(function () {
	const NavController = function ($location) {
		this.isActive = function (viewLocation) {
			return $location.path() === viewLocation
		}
	}

	NavController.$inject = ["$location"]

	angular.module("customersApp").controller("NavController", NavController)
})()
