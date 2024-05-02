//coding menentukan bilangan prima atau tidak
//2,3,5,7,11,13...
// prima = hanya punya 2 pembagi habis

let number = 4
let pembagi = 0

for (let i=1; i<= number; i++){
    if (number % i === 0) {
        pembagi++
    }
}

console.log(pembagi == 2 ? "prime number" : "not prime number")
