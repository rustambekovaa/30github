

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

// function persistence(num) {
//     let a = num.toString()
//     let a2 = 0
//     while (a.length > 1) {
//         let product = 1;
//         for (i in a) {
//             product *= parseInt(a[i])
//         }
//         a = product.toString()
//         a2++
//     }
//     a1 = 1

//     return a2
// }
// console.log(persistence(999));


//////////2222222222///////////

// var solution = function (firstArray, secondArray) {
//     let a = []

//     for(let i = 0; i< firstArray.length;i++){
//         for(let j = 0; j< secondArray.length;j++){
//             if( i == j ){
//                 if( firstArray[i] >= secondArray[j]  ){
//                     a.push((firstArray[i] - secondArray[j])**2)

//                 }
//                 else {
//                     a.push(( secondArray[j] - firstArray[i] )**2)
//                 }
//             }

//         }
//     }
//     let a2 =   a.reduce((acc, val) => {
//         return acc + val
//     })
//     console.log(a2 / a.length);

// }
// solution([10, 20, 10, 2], [10, 25, 5, -2]  )




////////////////33333333//////////////


// function cakes(recipe, available) {
//     let a = []
//     for (i in recipe) {
//         if (!(i in available)) {
//            return 0
//         }
//         a.push(Math.floor(available[i] / recipe[i]))
//     }
//     return Math.min(...a)


// }

// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));




///////////////444444444////////////////


// Math.round = function(number) {
//     return (number % 1 >= 0.5) ? number - number % 1 + 1 : number - number % 1;
// };
// Math.round(0.4)

// Math.ceil = function(number) {
//     return (number % 1 > 0) ? number - number % 1 + 1 : number;
// };
// Math.ceil(0.5)

// Math.floor = function(number) {
//     return number - number % 1;
// };
// Math.floor(0.5)






/////////55555///////////



// function reverse(array){
//     let a = []
//     for(let i = array.length-1; i>=0; i--){
//         a.push(array[i])

//     }
//   return a

// }

// reverse([1, 2, 3])


///////666666///////
// function beeramid(bonus, price) {
//     let cans = Math.floor(bonus / price);  
//     let level = 0;
//     let totalCans = 0;

//     while (cans >= totalCans + (level + 1) * (level + 1)) {
//       level++;  
//       totalCans += level * level;  
//     }

//     return level;
//   }

// beeramid(9, 2)

////////77777/////////

// function mineLocation(field){
// let a = []
//     field.forEach(element => {

//         if(element.includes(1)){
//            a.push(field.indexOf(element))
//             element.forEach(element2 => {

//             if(element2 == 1){
//                 a.push(element.indexOf(element2))

//             }
//         })
//         }
//     });
//     return a

// }

// mineLocation([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]])

// function mineLocation(field) {
//     let row = field.findIndex(row => row.includes(1));
//     let col = field[row].indexOf(1);
//     return [row, col];
// }
// mineLocation([ [0, 0, 0], [0, 0, 0], [0, 1, 0] ])




////////////////8888888///////////


// function pigIt(str) {
//     let sim = [',', '!', '@', '.',]
//     let newar = []
//     let a2 = ''
//     let a = str.split(' ')
//     a.forEach(element => {
//         if (!(sim.includes(element))) {
//             for (let i = 1; i < element.length; i++) {
//                 a2 += element[i]

//             }
//             a2 += element[0] + 'ay' + ' '
//         }
//         else{
//             a2 +=  element
//         }

//     });
  
//     console.log(a2);
    
// }

// pigIt('Hello world !')


////////////////8888888///////////2//////////////


// function pigIt(str) {
//     let sim = ['!', '?', '.', ',']; 
//     return str.split(' ').map(word => {       
//         return sim.includes(word) ? word : word.slice(1) + word[0] + 'ay';
//     }).join(' ');
// }

// console.log(pigIt('Hello world !'));





/////////999999///////////

function largestSum(arr){
    let a = arr.reduce((elem,elem2)=>{
        return elem + elem2
    })
    console.log(a);
    
  }
 console.log( largestSum([-1,-2,-3]));
 
