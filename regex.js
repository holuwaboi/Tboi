const myform =document.getElementById('myform')
const password=document.querySelector('.password')

// myform.addEventListener('submit',(e)=>{
// e.preventDefault()
// const REGEX= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

// if (REGEX.test (password.value)) {
//     alert('password is CORRECT')
// } else {
//     alert('password must have at least 1 upper case & lower case letter, a digit and a symbol (among #?!@$%^&*-).')
// }

// console.log(password.value);
// })

// if(password.value.length < 8){
//     alert('password must be 8 character')
// } else{
//     alert('password correct')
// }


// console.log(password.value);


// fetch('https://www.boredapi.com/api/activity')
// .then((response) =>{

//     return response.json()

// })
// .then((stanley)=>{
//     var text = document.querySelector('.text')
//     text.innerHTML=stanley.activity
//     // console.log(stanley)

// })


const BTN = document.querySelector('.btn')
const dogImage = document.querySelector('.dog-image')
BTN.addEventListener('click', function(){

fetch('https://dog.ceo/api/breeds/image/random')
.then((response) =>{

    if(response.status !=='success'){
        console.log('error');
    }
    return response.json()
})

.then((tosin) =>{
    console.log(tosin);
    dogImage.src=tosin.message

})


.catch((error)=>{
    console.log('fetching error', error.message);

})
})











// var first_name = 'Tosin'
// name.length >= 5
// console.log(name[4]);

// first_name.slice(1)
// console.log(first_name.slice,(1,3))

// var cutName = first_name.slice(1,3)
// console.log(cutName) 

// var club ='manchester'
// club.toUpperCase()
// console.log(club.toUpperCase())

// console.log(`${first_name} supports ${club} `)

// console.log( first_name  + 'supports' +  club)

// console.log(club.split(''))

// console.log(club.indexOf('manchester'))

// var school = 'appclickkfemi'

// school.indexOf('p')
// console.log(school.lastIndexOf('k'))

// console.log(school.search('femi'))


// var age = '25.33'
// var newAge = age.toString()
// console.log(typeof(newAge))

// let speed = 240.9
// console.log(Math.PI)

// console.log(Math.floor(speed))

// console.log(Math.random() *100)

// console.log(Math.floor(Math.random() *100))

// var pi = Math.PI
// var radius = 2

// console.log(pi * radius**2);

// var countries = ['madagascar','Greece','Canada']

// console.log(countries.length)

// console.log(countries[0]);

// var bagPack= []

// bagPack.push('feeding bottle','ball','rice','spoon')
// console.log(bagPack)

// bagPack.unshift('book')
// console.log(bagPack)

//  bagPack.pop()
//  console.log(bagPack)

//  var slicedData =bagPack.slice(1,2)
//  console.log(slicedData)

// bagPack.splice(1,2,'fan')
// console.log(bagPack)


// var NewArray =['rice','amala','spag','moi']
// NewArray.splice(1,1,'beans')
// console.log(NewArray);

// var arrray = NewArray.concat(bagPack)
// console.log(arrray);




// function name(params) {
    
// }

// function printText(){
//     console.log('print text!!!')

// }

// printText()

// var bella = function(){
//     console.log('hello world');
// }

// bella()
// bella()
// bella()
// bella()

// //arrow funtiom
// const tosin = () =>{
//     console.log('hello world from tosin');

// }

// tosin()
// tosin()
// tosin()
// tosin()
// tosin()

// const greet = () =>{
//     console.log('good morning femi');

// }

// greet()

// var tboi = () =>{
//     console.log('hello boi');
// }

// tboi()

// var get =(name) =>{
//     console.log('come home' + name);


// }

// get('tosin')
// get('musa')

// function square(number){
//     return(
//        `the square of ${ number} is: ${ number**2}`
//     )
// }


// console.log(square(40));

// // funtion to convert dolz to naira

// function convert(dollar){
//     return(
//         dollar*1500
//     )
// }

// console.log(convert(10));

// // funtion that converts celcius to fahreheit

// // c*9/5 =32

// function celToFanrenheit(degree){
//     return(
//         degree * 9/5 +32
//     )
// }

// console.log(celToFanrenheit(1));

// //current year

// // function AgeCalculator(year){
// //     return(
// //         2024-year
// //     )
// // }

// // console.log(AgeCalculator(20));

// function AgeCalculator(year){
//     var currentYear = new Date().getFullYear()
//     return(
//         currentYear -year

//     )
// }
// console.log(AgeCalculator(1988));



// function capitalize(string){
//     return(
//         string.toUpperCase()
//     )
// }

// console.log(capitalize('girl'));


// var number = [1,2,3,4,5,6,7,8,9,10]

// // for( num in number){
// // console.log(num * 2);
// // }

// var emails = ['ayo@mails.com','dayo@maill.com']

// // for(mail in emails){
// //     console.log(emails [mail] +  'how are you')
// // }

// // var evenNumbers = numbers.map((num) =>{
// // return num * 2;
// // })
// // console.log(evenNumbers);

// // map method

// var newnumbers =[2,3,4,5,6]

// var multipliesArray = newnumbers.map((ade) =>{
//     return(
//         ade * 2
//     )

// })

// console.log(multipliesArray);

// var filteredEvenNumber= newnumbers.filter((num) =>{
//     return(
//         num % 2 == 0
//     )


// })
//  console.log(filteredEvenNumber);


//  var foodItems = ['amala','rice','eba']

//  var filteredEvenNumber= foodItems.filter((foodItems) =>{
//  return

//  }


//  )



var newNewdata = [2,4,6,8,10]

var multipliesArray=newNewdata.map((tosin)=>{
    return(
        tosin *2

    ) 
    


}

)
console.log(multipliesArray);


//OBJECT
// var myDetails={
//     name: 'dev',
//     school:'Appclick'
// }

localStorage.setItem('username','tosin')
 var username=localStorage.getItem('username')
 console.log(username);


 var myArray=['femi','dds','tboi']
 myArray.splice(1,1)
 console.log(myArray);


 
 