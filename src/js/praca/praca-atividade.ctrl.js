class PracaAtividadeCtrl {
  constructor($scope, $document, $window, $mdDialog, $log, User, Atividade, $timeout, objData) {
    "ngInject";

    angular.extend(this, {$scope});
console.info(objData)
    this.objData = objData;

    // let arrImgHeight = [];
    // arrImgHeight[1] = '150px';
    // arrImgHeight[2] = '200px';
    // arrImgHeight[3] = '250px';
    // this.intImgHeght = () => {
    //   return arrImgHeight[Math.floor((Math.random() * 3) + 1)];
    // };

      // $scope.imagens = imagens;
      //
      // $document.ready(() =>{
      //     $('.materialboxed').materialbox();
      // });
      //
      // this.paginator = {};
      // this.paginator.page = 1;
      // this.paginator.perpage = 2;
      // $scope.paginatorData = [];
      // this.paginator.intRendered = 0;
      //
      // // this.imagens = imagens;
      // this.arrImg = this.buildGridModel(imagens);
      // this.paginatorRender($scope);
      // this.scope = $scope;

      // $scope.$watch('paginatorData',
      //     () => {
              // $('.materialboxed').materialbox();
              // console.info('aa1');
              // console.info('aa2');
              // this.currentUser = newUser
              // this.userMenu = this.buildMenu(this.currentUser)
      //     }
      // );
  }
}

export default PracaAtividadeCtrl
