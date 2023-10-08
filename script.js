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
let Nama = "Taufiq";

switch (Nama) {
  case "Taufiq":
    console.log("Halo Taufiq!");
    break;
  case "Fadlun":
    console.log("Halo Fadlun!");
    break;
  case "Iky":
    console.log("Halo Iky!");
    break;
  default:
    console.log("Anda bukanlah Taufiq, Fadlun, atau Iky");
}

// for 
for (let i = 1; i <= 3; i++) {
  console.log(" Dragon Ball Season : " + i);

  for (let j = 1; j <= 5; j++) {
    console.log("   Episode : " + j);
  }
}

// while
let angka = 5;
while (angka < 10) {
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



// function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(3, 5);
console.log("Hasil : " + hasil);
