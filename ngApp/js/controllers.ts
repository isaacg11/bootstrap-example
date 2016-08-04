namespace app.Controllers {
  export class HomeController {

    showModal(animalName:string) {
      this.$uibModal.open({
        templateUrl: '/templates/dialog.html',
        controller: 'DialogController',
        controllerAs: 'vm',
        resolve: {
          dataFromHomeController: () => animalName
        },
        size: 'sm'
      });
    }

    constructor(private $uibModal: angular.ui.bootstrap.IModalService) {

    }
  }

  angular.module('app').controller('HomeController', HomeController);

  class DialogController {
    ok() {
      this.$uibModalInstance.close();
    }

    constructor(
      public dataFromHomeController,
      private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

    }
  }
  angular.module("app").controller("DialogController", DialogController);

}
