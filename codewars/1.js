

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

var solution = function (firstArray, secondArray) {
    let a = []
  
    for(let i = 0; i< firstArray.length;i++){
        for(let j = 0; j< secondArray.length;j++){
            if( i == j ){
                if( firstArray[i] >= secondArray[j]  ){
                    a.push((firstArray[i] - secondArray[j])**2)
                    
                }
                else {
                    a.push(( secondArray[j] - firstArray[i] )**2)
                }
            }
           
        }
    }
    let a2 =   a.reduce((acc, val) => {
        return acc + val
    })
    console.log(a2 / a.length);

}
solution([10, 20, 10, 2], [10, 25, 5, -2]  )




////////////////33333333//////////////


function permutations(string) {
    
	return [];
}
permutations('aabb')