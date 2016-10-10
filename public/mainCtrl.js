angular.module("customDirs").controller("mainCtrl",
function($scope, mainServ){
  $scope.test1="This is the main test";
  setInterval(function(){
  console.log($scope.test1+"main");
},2000)});

// stuff from whiteboard


$scope.list=["x","y","z",];

for(var i=0;i<response.length;i++){
  
  if(response[i].type=$state){$scope.list.push(response[i]);}
}
