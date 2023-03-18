//KONDISI MENGGUNAKAN IF.... ELSE//
// var angka = 1;
// if (angka == 1)
// {
//     console.log("angka 1");
// } else {
//     console.log("angka selain 1");
// }

// var angka = 2;
// if (angka < 2) {
//   console.log("angka dibawah 2");
// } else if (angka > 2) {
//   console.log("angka diatas 2");
// } else {
//   console.log("angka 2");
// }

//Soal Latihan//
/* Jika umur sudah atau lebih dari 17 maka cetaklah "bisa bikin KTP"
/* Jika tidak maka cetak "belum bisa bikin KTP"*/

// var umur = 15;
// if (umur >= 17){
//     console.log("bisa bikin KTP");
// } else {
//     console.log("belum bisa bikin KTP");
// }

// //KONDISI MENGGUNAKAN SWITCH ... CASE//
// var minuman = "soda";
// switch(minuman){
//     case'kopi':
//     console.log("kamu pilih kopi");
//     break;
//     case 'teh':
//     console.log("kamu pilih teh");
//     break;
//     default:
//     console.log("hanya tersedia kopi dan teh")
// }

// //Soal Latihan//
// var umur = 10
// var tinggi = 170
// if(umur < 17){
//     if (tinggi < 150){
//     console.log("Tidak Boleh Masuk")
// } else {
//     console.log ("Boleh Masuk")
// }
// }

// var minuman = "kopi";
// if (minuman.toLocaleLowerCase() == "kopi"){
//     console.log("anda memilih kopi");
//     console.log(minuman.toLocaleLowerCase());
//     console.log(minuman.toLocaleUpperCase());
// }
// else{
//     console.log("anda tidak memilih kopi");
// }

//Task 1
/**
 * Klasifikasi level untuk karakter dari sebuah game
 * Jika power > 100, disebut "expert"
 * Jika power > 70 - 100, disebut "pro"
 * Jika power > 50 - 70, disebut "normal"
 * Jika power > 30 - 50, disebut "basic"
 * Jika power < 30, disebut "beginner"
 */

// var power = 25;
// if(power > 100){
//     console.log("Expert")} 
//     else if (power > 70 && power <= 100){
//         console.log ("Pro")}
//     else if (power > 50 && power <=70){
//         console.log ("Normal")}
//     else if (power > 30 && power <= 50){
//         console.log("Basic")}
//     else (power < 30);{
//         console.log("Beginner")
//     }

// var voucher = "FreeOngkir";
// var pembelian = 50000;

// switch (voucher){
//     case "FreeOngkir":
//         //Free Ongkir
//         if(pembelian >= 50000){
//             console.log("Total Pembelian Sebesar " + (pembelian));
//             console.log("Potongan 10% sebesar = " + (pembelian*0.1));
//             console.log("Biaya yang harus dibayar = " + (pembelian - (pembelian*0.1)));
//         }
//         else if ((pembelian >= 30000) && (pembelian < 50000)){
//             console.log("Potongan 5%")
//         }
//         else
//             console.log("Potongan 5%")
//         break;
//     case "Free 15%":
//         //......
//         if (pembelian >= 30000){
//             console.log("Potongan 15%");
//         }
//         else{
//             console.log("Potongan 0%")
//         }
//         break;
//     default:
//         console.log("Tidak ada voucher")
// }