var app=angular.module("mdr",[]);
app.controller("ctr",function($scope){

    $scope.names=[
        {Name:"Ahad",Dob:new Date("September 20,1999"),Gender:"Male",Fees:"6000",status:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfKAGz8EbZZSY0Ip6i-a7-GccJrY1OpbBEg&usqp=CAU"},
    
    {Name:"Arsalan",Dob:new Date("August 16,1998"),Gender:"Male",Fees:"6000",status:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfKAGz8EbZZSY0Ip6i-a7-GccJrY1OpbBEg&usqp=CAU"},{Name:"Sonia",Dob:new Date("February 06,1997"),Gender:"Female",Fees:"7000",status:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfKAGz8EbZZSY0Ip6i-a7-GccJrY1OpbBEg&usqp=CAU"},{Name:"Sawera",Dob:new Date("November 14,1999"),Gender:"Female",Fees:"9000",status:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfKAGz8EbZZSY0Ip6i-a7-GccJrY1OpbBEg&usqp=CAU"},{Name:"Barik",Dob:new Date("March 20,1996"),Gender:"Male",Fees:"10000",status:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfKAGz8EbZZSY0Ip6i-a7-GccJrY1OpbBEg&usqp=CAU",Fans:0},{Name:"Awais",Dob:new Date("December 08,1999"),Gender:"Male",Fees:"8000",status:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfKAGz8EbZZSY0Ip6i-a7-GccJrY1OpbBEg&usqp=CAU"}]
$scope.num=3;


    $scope.increment=function(){
      x.status="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"
    }

})


app.filter("myFilter",function(){
    return function(gender){
        switch(gender){
            case "Female":
                return "F";
           case "Male":
               return "M";
        }
    }
   
})