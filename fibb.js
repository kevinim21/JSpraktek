//nenghitung deret fibbonacci
//0 1 1 2 3 5 8 13 21 34 . . .

let n = 15 // 610
let a = 0
let b = 1
let nextnumber = 0

for (let i = 1; i<n; i++){
    nextnumber = a+b
    a = b
    b = nextnumber
}

console.log (b)

