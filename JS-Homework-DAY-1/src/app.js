let sayi = 10

let student = {id:1 , name:"Engin"}
//console.log(student)

/*
function save(ogrenci, puan=10) {
    console.log(ogrenci.name + " : " + puan)
    
}

save(student);
*/


function save( puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}

//save(undefined,student);

let students = ["Engin Demiroğ", "Oğuzhan ATA", "Halit Kalaycı", "Büşra"]

//console.log(students)

let students2 = [student, {id:2 , name:"Ahmet"}, "Ankara", {city:"İstanbul"}]

//console.log(students2)


//rest : array yapısı göndeririz istediğimiz kadar.
//params (c#)
//varArgs (java)
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)

//showProducts(10, ["Elma", "Armut", "Karpuz"])


//spread : array ile gönderdiğimiz yapıyı tek tek ayırarak çıktı vverdi.
let points = [1,2,3,4,5,6,7]

console.log(...points)
console.log(Math.max(...points))


console.log("ABC", "D", "EFG", "H")

//Destructuring(ayırma) : array'in içindeki her bir elemanı farklı bir değişkene atamak.

let populations = [10000,20000,30000,[40000,100000]]

let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"içecek"}
console.log(category.id)
//console.log(category["id"]) -> farklı gösterimi üst satırdaki kodun.

// objenin elemanlarını değişkenlere atama yöntemi
let {id,name} = category
console.log(id)
console.log(name)


