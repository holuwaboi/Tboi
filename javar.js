var password ='ali'
password.length >= 8
var first_name= 'stanley'

console.log(first_name.length)

//console.log(first_name[0])

first_name.slice(1)
console.log(first_name.slice(2,6))

var cutName= first_name.slice(1,4)


var club = 'manchester  united'
//console.log(club.length)

//repalce method
var newClub = club.replace('manchester','Newcastle')
console.log(newClub);

//uppercase
newClub.toUpperCase()
console.log(newClub.toUpperCase());

//concatination of strings
console.log(first_name.concat(' supports ' ,club))
//using+sign
console.log(first_name + ' supports '+ club);

//formats strings
console.log(`${first_name} supports ${club} `)

var text = ' 123456 '
console.log(text.length);

var newtext=text.trim()
console.log(newtext.length);

//charAt

console.log(text.charAt(1));
console.log(text[1]);

//split
console.log(text.split(''))


//club.indexOf('united')
console.log(club.indexOf('united'))

var school ='appclickppade'
console.log(school.indexOf('p'))

console.log(school.lastIndexOf('p'))
console.log(school.search('ade'))

//match method
console.log(school.match('ade'));

console.log(school.matchAll('ade'));

console.log(school.includes('Ade'));

console.log(school.startsWith('pdf'))

//alert
//alert('Hello world')

//prompt('kindly input your name')


//Number methods
var age = 16.5555
var newAge = age.toString()
console.log(typeof(newAge));

//console.log(typeof(age.toString ()))

console.log(age.toExponential(1));

console.log(age.toFixed());

console.log(age.toPrecision(3))

Number('222')

console.log(Math.PI);

let speed = 240.5
console.log(speed.toFixed())
console.log(Math.round(speed));
console.log(Math.floor(speed));

console.log(Math.floor(Math.random()* 100))

var pi = Math.PI
var radius = 2

 console.log(pi * radius**2)
 
 //array methods

var countries = ['madagascar','Greece','Canada']

console.log(countries.length)

console.log(countries[0]);



//var BagPack = Array() or a []

//append to the end of an array
var BagPack = []

BagPack.push('water bottle','spoon')
console.log(BagPack)

//adds an item to the beginning of an array
BagPack.unshift('Book','Hammer','Iphone')
console.log(BagPack);

//Remove from the end
// BagPack.pop(BagPack);
// BagPack.shift();
// console.log(BagPack);

// var SlicedData=BagPack.slice(1,3)
// console.log(SlicedData);

BagPack.splice(1,1,'Fan');
console.log(BagPack);

var NewArray =['Amala','Spag','pyam','Moi']
NewArray.splice(1,1,'beans')
console.log(NewArray);

var array = NewArray.concat(BagPack)
console.log(array);

NewArray[0] ='rice'
console.log(NewArray);

//dates iteration of an array

//==
//===
//!==
//>=
//<=
//>
//<

//conditionals

//if(condition){

//}

// var age =55;
// if(age < 18){
//     console.log('very correct ');

// }

// else{
//     console.log('very wrong')

// }

// var money = true
// if ('money == true'){
//     console.log('show your face')
    

// }
//  else{
//     console.log('hide your face')
//  }

//  var passkey = prompt('kindly input password !')
//  //alert(passkey)

//  var OriginalPassword= 'appclick'

//  if(passkey.trim()== OriginalPassword){
//     alert('password is correct !')


//  }
//  else{
//     alert('password incorrect !')
//  }

 //an admissin validation
 //jambscore> 180
 //age >16

//  var JambScore = prompt('enter your jambscore')
//  var age = prompt('kindly enter your age')

//  if( JambScore >= 180 && age >= 16){
//     alert('You are Eligible for admissiom')
//  }
//  else if(age >= 16 || JambScore >=180){
//     alert('You are not Eligiblr for admisiion but u can visit our private school')

//  }

//  else{
//     alert('You are not eligible for admission')
//  }


//  var passwords = prompt('kindly enter your password')
 
 

//  if(passwords.length <= 8){
//     alert('passwords should not be less than 8 xxx')
//  }else if(!passwords.includes('@')){
//     alert('passwords must have @ sign')
//  }
//  else{
//     alert('passwords incorrect!')
//  }


//  var number = prompt('kindly enter a number')

//  if(number > 0){
//     alert('Number is positve')
//  }
//  else if(number < 0){
//     alert('Number is negative')

//  }
//  else if(number == 0){
//     alert('number is zero')
// }
// else{
//     alert('This is not a number')
// }

// switch (expression) {
//    case value:
      
//       break;
//    case value;   

//    default:
//       break;
// }


var Name ='Anita'
//bunmi Anita

switch (Name) {
   case 'Anita':
      console.log('this is Anita');
      
      break;
      console.log('this is for Bunmi')

   default:
      console.log('name does not exist')
      break;

}

var TodaysDate =new Date
// console.log(TodaysDate);
// TodaysDate.getDate()
// console.log(TodaysDate.getDate())
// console.log(TodaysDate.getDay() +1)
// console.log(TodaysDate.getSeconds())
// console.log((TodaysDate.getTime()))

var DayOfWeek = new Date
// console.log(DayOfWeek.getDay());

switch(DayOfWeek.getDay()){
   case 3:
   case 4:
   console.log('today is wednesday stay sharp')
   break;

   

}

///match a randome number to users number aka mini babaijebu

// Math.random()
// console.log(Math.round(Math.random()* 10))
// var RandomNumber = prompt
// console.log('()')

//get random number btw 1 and 10
// var RandomNumber = Math.round(Math.random() *10);
// console.log(RandomNumber);
// var UserInput = prompt('kindly enter a number from 0 - 10')

// if(RandomNumber==UserInput){
//    //alert(`computer picked ${RandomNumber} Congratulations number matched`)
//    alert("computer picked" + RandomNumber + "congratulations number matched")
// }
// else{
//    alert(`computer picked ${RandomNumber} try again you lost`)
// }


//loops
//for loop
//while loop
//do while loop

//while loop
//for(Expression1,expression2, expression3){
//code that will be executed
//}

//for (assignment of Value;comparison of that variable; increment){
   //code that eill be executed
//}

// var num = 2
// console.log(num = num+1);
for (let number =0; number < 100; number+=1){
console.log("hello");
}

for (let number =2; number <10; number+=2){
console.log(number);
}

for (let number =0; number <10; number+=1){
   if (number % 2 == 0){
   console.log(number);

   } 
   }

   for (let num =1700; num <3600; num++){
      if (num % 5 == 0 && num % 7 == 0){
      console.log(num);
      }
   
   
   } 


   //while

   var age =1
   //while (condition){
     // Code...
   //}
     
   while (age < 4){
      console.log('hello');
      age++
   }

   while (age <= 10){
      console.log(age);
      age++
   }

   //to ommit number 6
    
   var age = 1
   while(age <= 10){
      age+=1
      if(age== 6){
         continue
      }
      console.log(age);
   }

   var age = 1
   while(age <= 10){
      age+=1
      if(age== 6){
         break
      }
      console.log(age);
   }


   var number1 = 12
   var number2 = 3

   console.log(number1 + number2);

   var name = 'musa'

   console.log('my name is '+ name)
   