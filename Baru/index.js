// Belajar Fungsi

function LuasPersegiPanjang(panjang, lebar) {
  let hasil = panjang * lebar;
  console.log(hasil);
}
LuasPersegiPanjang(2, 3);

const pi = 3.142857142857143;

function LuasLingkaran(jari_jari) {
  let result = (pi * jari_jari) ** 2;
  console.log(result);
}
LuasLingkaran(4);

// If else

if (false) {
  console.log("Ini ada di dalam if");
} else {
  console.log("Ini ada di dalam else");
}

let umurKu = 17,
  umurKTP = 17;

if (umurKu > 100) throw new Error("Sip Panjang Umur");
else {
  if (umurKu >= umurKTP) console.log("Anda eligible buat KTP");
  else console.log("Anda belum eligible");
}

let orang = {
  nama: "Seinly",
  umur: 18,
  alamat: "Sleman",
};

console.log(
  "Halo nama saya",
  orang.nama,
  "Umur saya",
  orang.umur,
  "Alamat saya di",
  orang.alamat
);

let orangOrang = ["Seinly", "Fulan", "Herry", "Singh"];

orangOrang.forEach((nama) => {
  console.log("Hey nama saya adalah", nama);
});

let anakNeuversity = [
  {
    nama: "Seinly",
    umur: 18,
  },
  {
    nama: "Fulan",
    umur: 20,
  },
  {
    nama: "Herry",
    umur: 20,
  },
  {
    nama: "Singh",
    umur: 15,
  },
];

anakNeuversity.forEach((tes) => {
  console.log("Saya adalah", tes.nama + ". Umur saya", tes.umur);
});
