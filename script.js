// if
let nomor = 3; // saya menaruh angka 3. jadi kondisi ini akan dilewati karena bernilai false

if (nomor > 5) {
  console.log("nomor lebih besar dari 5.");
}

// else
let penomoran = 4;

if (penomoran > 5) {
  console.log("nomor lebih besar dari 5.");
} else {
  console.log("nomor kurang dari atau sama dengan 5.");
}


// nested if
let nilai = 75;
let absen = 90;

if (absen >= 75) {
  console.log("Anda hadir di kelas.");
  
  if (nilai >= 80) {
    console.log("Anda mendapatkan nilai A.");
  } else if (nilai >= 70) {
    console.log("Anda mendapatkan nilai B.");
  } else {
    console.log("Anda mendapatkan nilai C.");
  }
} else {
  console.log("Anda tidak hadir di kelas.");
}


// switch case
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
