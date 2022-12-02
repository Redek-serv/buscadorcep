/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

var app = angular.module('MyApp', ['angular-loading-bar'])
app.controller('MyCtrl', function($scope, $http){
$scope.listaResultado = false;   
$scope.lista = [];   
    
$scope.buscar =  function(cep){

//$http.get('http://cep.correiocontrol.com.br/'+cep+'.json')
$http.get('http://cep.republicavirtual.com.br/web_cep.php?cep='+cep+'&formato=json')
.success(function(data, status){
    
console.log(data,status);
    
$scope.lista = data;    
$scope.listaResultado = true;     

      
}).error(function(){
alert("Cep não encontrado!");
$scope.listaResultado = false;     
});    
}       
});
