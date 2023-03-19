// var scores = [100,50,75];
// console.log(scores[0]);

// var items = ["komputer","hp"];
// console.log(items[0]);
// items.push("mouse");
// console.log(items);
// items.pop("mouse");
// console.log(items);
// //menambahkan item dengan item.push
// //menghapus value items.pop

// var scores = [
//     [10,20,30],
//     [15,25,35],
//     [1,3,5]
// ];

// console.log(scores);
// console.log(scores[0][0]);
// console.log(scores[1][0]);

/**LATIAN SOAL
 * Dik :
 * var murid = [
 *      [1, "vincent, 3.5"],
 *      [2, "udin", 3.0],
 *      [3, "mamang, 2.1"]
 * ]
 * Buatlah kode yang hasilnya
 * 1. vincent, ipk = 3.5, lulus
 * 2. udin, ipk = 3.0, lulus
 * 3. mamang, ipk = 2.1, gagal
 * (syarat lulus IPK minimum 3.0)
 */

var murid = [
          [1, "vincent", 3.5],
          [2, "udin", 3.0],
          [3, "mamang", 2.1]
     ]
     console.log(murid[0][1] + ", IPK = " + murid[0][2], (murid [0][2] > 3 )?"Lulus":"Gagal");

     if(murid[0][2] > 3){
        console.log(murid[0][1] + ", IPK = " + murid[0][2]+ " , Lulus");
     }
     else{
        console.log(murid[0][1] + ", IPK = " + murid [0][2] +" , Gagal");
     }

