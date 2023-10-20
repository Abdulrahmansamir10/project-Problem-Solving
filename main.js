
function calculateAverage(numbers) {
    var total = numbers.reduce(function(sum, num) {
      return sum + num;
    }, 0);
    
    var count = numbers.length;
    var average = total / count;
    return average;
  }
  
  var numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
  var result = calculateAverage(numbers);
  console.log("المتوسط الحسابي هو:", result); 


// المسألة الثانية
function area( base,hight) {
    
  var area= (base * hight)/2;
  console.log( area);
}
area( 5,10)


// المسألة الثالثة
function convertAgeToDays(age) {
  var days = age * 365; 

  console.log("العمر في الأيام هو: " + days + " يوم");

  return days;
}
var ageInYears = 30;
var ageInDays = convertAgeToDays(ageInYears);
console.log("العمر في السنوات هو: " + ageInYears + " سنة");
console.log("العمر في الأيام هو: " + ageInDays + " يوم");


// المسألة الرابعه
function take( a , b ){
  var sum = a + b;
  return sum;
}
console.log( " مجموع الرقمين هو :"  ,take( 5,7));
console.log ( " مجموع الرقمين هو :"  ,take( 3,7));


//   المسألة الخامسة
function users() {
var name=[ "Abdelrahman","ahmed","ali","samir","asmaa","sara","nora","alaa","mohamed","mayar","amira","nada"];
return name;
}
console.log( users()[0]);


// المسالة السادسة
function write() {
    return " Abdelrahman Samir"
}
console .log( write());
document.getElementById("name").innerHTML= write();


//  المسألة السابعة 
function cal(minutes) {
    
   return minutes * 60;
   
  }
  console.log( cal(1));


// المسألة الثامنة
function calculateSum(num1, num2, num3, num4) {
  var sum = num1 + num2 + num3 + num4;

  var result = sum > 350;
  document.write("مجموع الأرقام: " + sum + "<br>");
  document.write("النتيجة: " + result);
}
calculateSum(100, 75, 120, 60);


// المسألة التاسعة
function check(number) {
  if (number === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check(0));
console.log(check(5));


// المسالة العاشرة

function percentage( a,b){
    sum = a % b;
  return sum;
 }
 console.log(percentage( 5,2))

//  المسالة الحادية عشر

function LargerNumber(num1, num2) {
  if (num1 > num2) {
    console.log("الرقم الأكبر هو: " + num1);
  } else if (num2 > num1) {
    console.log("الرقم الأكبر هو: " + num2);
  } else {
    console.log("الأرقام متساويتان");
  }
}
LargerNumber(5, 10);
LargerNumber(20, 10);
LargerNumber(7, 7);

// المسألة الثانية عشر
function check(variable) {
  if (typeof variable === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(check(5));
console.log(check("Hello"));

// المسألة الثالثة عشر
var curday = function(sp){
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  
  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;
  return (mm+sp+dd+sp+yyyy);
  }
  console.log(curday('/'));
  console.log(curday('-'));