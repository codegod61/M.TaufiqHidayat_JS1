// Contoh penggunaan if, else, dan nested if
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// Contoh penggunaan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini Senin");
    break;
  case "Selasa":
    console.log("Hari ini Selasa");
    break;
  case "Rabu":
    console.log("Hari ini Rabu");
    break;
  default:
    console.log("Hari ini bukan Senin, Selasa, atau Rabu");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh penggunaan while statement
let angka = 1;
while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// do while
let baris = 1;
do {
  let bintang = "";
  let jumlahBintang = 1;
  while (jumlahBintang <= baris) {
    bintang += "*";
    jumlahBintang++;
  }
  console.log(bintang);
  baris++;
} while (baris <= 5);



// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(3, 5);
console.log("Hasil penjumlahan: " + hasil);
