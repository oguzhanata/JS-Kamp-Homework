
//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

function add(...numbers) {  // ... => gelen tüm parametreleri bir array içerisine yazar. [5,2,13,16,290,15,32,6,33]. Rest operatörü.
    let sayi = 0;
    for (let i = 0; i < numbers.length; i++) {
        let asalMi = true
        sayi = numbers[i]
        for (let j =2; j<sayi;j++ ){
            if (sayi % j == 0) {
                asalMi = false
                break
            }

        }
        if(asalMi) {
            console.log(`${sayi} Asal sayidir`)
        }
        else{
            console.log(`${sayi} Asal sayi değildir.`)
        }
    }
}
add(5,19,29,16,13,15,32,6,33)


// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

var num1 = 0
var num2 = 0
var total1 = 0
var total2 = 0
function friendNumber(num1, num2) {
    
    for (let i = 0; i < num1; i++) {
        if(num1 % i == 0){
        total1 = total1 + i
        }
    }
    for (let i = 0; i < num2; i++) {
        if(num2 % i == 0){
            total2 = total2 + i
            }
    }
    if (total1 == num2 && total2 == num1) {
        console.log(`${num1} ve ${num2} arkadaş sayilardir.`)
    }
    else {
        console.log(`${num1} ve ${num2} arkadaş sayi değillerdir.`)
    }
}

friendNumber(220,284)
friendNumber(321,563)

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.


for( let i=1 ; i < 1000; i++ ){
    let iTotaly = 0
    for( let x = 1 ; x <= i ; x++){
        if(i % x == 0){
            iTotaly = iTotaly + x
        }
    }
    if( iTotaly == i*2){
        console.log(`${i} bir Mühemmel Sayıdır`)
        iTotaly = 0
    }
}


// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function asalMi() {

    for (let i = 2; i <= 1000; i++) {
        let asalMiKontrol = 1
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                asalMiKontrol = 0
            }
        }
        if (asalMiKontrol == 1) {
            console.log(i + " sayısı asaldır")
        }
    }
}

asalMi()

