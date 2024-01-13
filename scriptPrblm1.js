// let a=[5,6,7];
// let b =[3,6,10];
// let array=[0,0];
//     let alice=0;
//     let bob=0;
//     function niti(a,b){
//     for(var i =0; i<3;i++){
//         if(a[i]>b[i]){
//         alice=alice+1;
//         array[0]=array[0]+1;
//         }
//         else if(a[i]<b[i]){
//             array[1]=array[1]+1;
//         }
//     }
//     return array;
// }
// console.log(niti(a,b));

//

// let arr=[[4,5,6],[7,9,5],[55,5,8]];

// function diagonalDifference(arr) {
//     var sum=0;
//     var sum1=0;
//     var n =2;
// for(var i=0;i<arr.length;i++){
//      sum=arr[i][i]+sum;
// }
// for(var j=0;j<2;j++){
//     sum1=arr[j][n]+sum1;
//     n=n-1;
// }
// return Math.abs(sum1-sum);
// }
// console.log(diagonalDifference(arr));

//
// let n="";
// n.length==4;
// console.log(n.length);

// function pyramid(){
//     let arr =[];
//     arr.length=n;
//     for(var i=0;i<arr.length;i++){
//         arr[i]=="   ";
//     }
//     for(var j = n-1;j>-1;j--){
//         arr[j]="#";
//         console.log(arr)
//     }
// }
// pyramid();

// var a = new Promise((resolve,reject)=>{
// if(1>5){
//     resolve("Hi hello");
// }
// else{
//      reject("Hello HI");
// }
// }
// )
// console.log(a);

// var a = parseInt(prompt("Enter your age"))
// const obj = new Promise((resolve,reject)=>
// {
//     if(a>18){
//         resolve("valid")
//     }
//     else{
//         reject("Not valid");
//     }
// }
// )
// // console.log(obj);
// obj.then((data)=>console.log(data)).catch((error)=>console.log(error));

// var element1 = document.createElement("h1")
// element1.innerHTML="This page shows the countries and its Capitals";
// document.body.append(element1);

// const restconties = fetch("https://restcountries.com/v2/all");
// console.log(restconties);
// restconties
//   .then((data) => data.json())
//   .then((data1) => {
  
//     for (var i = 0; i < data1.length; i++) {
//         let element2 = document.createElement("h3")
//         element2.innerHTML=data1[i].name +" - "+ data1[i].capital
//         document.body.append(element2)

//     //   console.log(data1[i].name + " - " + data1[i].capital);
//     }
//   });

// let element1 = document.createElement("p");
// element1.innerHTML = "hi";
// document.body.append(element1);

// const today = new Date();
// console.log(today);
// const date = new Date(2023,,15);
// console.log(date);
// console.log(today>date);

//CRUD operation

// var selectedrow  = null;   //initial value

// function onformsubmit(e){
//     event.preventdefault();
//     var formdata = readformdata()
//     insertnewrecord(formdata);
// }

// //retriving of data from from

// function readformdata(){
//     var formdata ={};
//     formdata["productcode"] = document.getElementById("productcode").value;
//     formdata["product"] = document.getElementById("product").value;
//     formdata["Quantity"] = document.getElementById("Quantity").value;
//     formdata["perprice"] = document.getElementById("perprice").value;
//     // console.log(formdata);
//      return formdata;

// }
// function insertnewrecord(data){
//     var table = document.getElementById("storelist").getElementsByTagName("tbody")[0];//getting values from html
//     var newrow = table.insertRow(table.length);
//     cell1=newrow.insertCell(0);
//     cell1.innerHTML = data.productcode;
//     cell2=newrow.insertCell(1);
//     cell2.innerHTML = data.product;
//     cell3=newrow.insertCell(2);
//     cell3.innerHTML = data.Quantity;
//     cell4=newrow.insertCell(3);
//     cell4.innerHTML = data.perprice;
//     cell4=newrow.insertCell(4);
//     cell4.innerHTML = "<button>Edit</button><button>Delete</button>";
// }
let n = 4; 
var space =  " "*(5);
var hash = "#"
var result = space+hash;
console.log(result);

// // if()

// for(var i = 1;i<n;i++){

// }
// var n=5;
// function printStaircase(n) {
//     for (let i = 1; i <= n; i++) {
//       // Print spaces
//       for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(' ');
//       }
  
//       // Print '#'
//       for (let k = 1; k <= i; k++) {
//         process.stdout.write('#');
//       }
  
//       // Move to the next line
//       console.log();
//     }
//   }
  
//   console.log(printStaircase(n));

// 
// let minValue = arr[0];
// let maxValue = arr[0];
// // let minresult
// for(var i = 1;i<arr.length; i++){
//    if(arr[i]<minValue){
//        minValue =arr[i];
//    }
//    if(maxValue<arr[i]){
//        maxValue =arr[i];
//    }
 
// }
// var sum = 0;
// for(var j=0;j<arr.length;j++){
//  sum = sum+arr[j];
// }
// console.log(maxValue);
// console.log(minValue);
// var min = parseInt(sum)-parseInt(maxValue)
// var max = parseInt(sum)-parseInt(minValue)

// console.log(min +" " +max);
// console.log(sum);
// console.log(maxVa[

//  
/*
create a two input box with id num1 and num2 
on a button click take two value from both boxes and store in value called total
create a paragrapg tag with id result
every time user click add button the added result should be displayed in paragraph tag
*/
// function total(){
// var a = document.getElementById("num1").value;
// var b = document.getElementById("num2").value;
// var total = parseInt(a)+parseInt(b);
// document.getElementById("result").innerHTML=total;

// // var c = document.getElementById("result");
// if(a%2==0){
//     document.getElementById("numtype").innerHTML="Even";
// }
// else{
//     document.getElementById("numtype").innerHTML="odd";
// }

// }
// var candles = [18,90,90,13,90,75,90,8,90,43];
// var max = Math.max(...candles);
// var count = 0;
// // console.log(max);
// for(let i=0; i<candles.length; i++){
//     if(candles[i]==max){
//         count= count+1;
//     }
// }
// console.log(count);
// function birthdayCakeCandles(candles) {
//     var large = candles[0];
//    var count = 0;
//    for(var i =0;i<candles.length; i++){
//        if(candles[i]>large){
//            large = candles[i];
//        }
//     //    console.log(large);
//        if(candles[i]==large){
//            count=count+1;
//        }
//        console.log(large+" "+count)
//    }
//    console.log(large);
//    console.log(count);

// }
// birthdayCakeCandles(candles);
// var input = "Nitish";
// console.log(typeof(input));
// var args = input.split("/n");
// console.log(typeof(args));

// a = 15;
// // console.log(a);
// var a;

// let b = 15;
// let c = ++b ;
// console.log(b);
// console.log(c);
//Finding LCM of a number

/*
2,6 =>6
3,6=>6
9,7=>81
*/
// let a = 7;
// let b = 54321354354354;
// // let d = 54;

// // c=45;

// for(var i =1;i<(a*b);i++){
//     let c = Math.max(a,b)*i;
//     if(c%a==0){
//         var LCM = c;
//         break;
//     }
// }
// console.log(LCM);


// //GCD
// // var div = Math.max(a,b)+1;
// for(var j=Math.max(a,b); j>0; j--){
//     // --div;
//     if(a%j==0 && b%j==0){
//         break;
//     }
// }
// console.log(j);//count:1
/*0=>1+2 ==3
1=>2+
 */

// var s =[1,2,1,2,3];
// var m =2;
// var d = 3;

// var result = 0;
    
//    for(var i=0; i<s.length; i++){
//     var sum = 0;
//        for(var j =0; j<m; j++){
//            var sum = sum+s[i+j];
           
//             if(sum==d){
//             result = result+1;
//        }
//         }
       
      
//    }
//    console.log(result);

   let arr = [54,68,87,545,845454];
   let arr2 = ['ert','tyu','asf'];
   console.log(arr2.sort())
   console.log([...arr].sort((a,b)=>{//
      return a-b;
    }) );
      
   


