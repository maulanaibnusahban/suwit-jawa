// Fungsi untuk mendapatkan pilihan acak komputer: gajah, orang, atau semut.
function getPilihanKomputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah"; // Probabilitas untuk gajah: 0.34
  if (comp >= 0.34 && comp < 0.7) return "orang"; // Probabilitas untuk orang: 0.36 (0.7 - 0.34)
  return "semut"; // Probabilitas untuk semut: 0.30
}

// Fungsi untuk menentukan hasil permainan berdasarkan pilihan komputer dan pemain.
function getHasil(comp, player) {
  if (player == comp) return "SERI!"; // Pemain dan komputer memilih sama, seri.
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!"; // Pemain pilih gajah, komputer pilih orang, pemain menang, dan sebaliknya.
  if (player == "orang") return (hasil = comp == "gajah" ? "KALAH!" : "MENANG!"); // Pemain pilih orang, komputer pilih gajah, pemain kalah, dan sebaliknya.
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!"; // Pemain pilih semut, komputer pilih orang, pemain menang, dan sebaliknya.
}

// Fungsi untuk mengatur animasi putar gambar komputer.
function putar() {
  const imgCom = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"]; // Array gambar yang akan diputar.
  let i = 0;
  const waktuMulai = new Date().getTime();

  // Mengatur interval untuk mengganti gambar dengan interval 100ms selama 1 detik (1000ms).
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval; // Menghentikan interval setelah 1 detik.
      return;
    }

    // Mengganti gambar komputer sesuai dengan urutan dalam array gambar.
    imgCom.setAttribute("src", "img/" + gambar[i++] + ".png");

    // Kembali ke gambar pertama jika sudah mencapai gambar terakhir.
    if (i == gambar.length) i = 0;
  }, 100);
}

// Mendapatkan semua elemen gambar untuk pilihan pemain dan menambahkan event listener untuk masing-masing.
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    // Mendapatkan pilihan acak komputer dan pilihan pemain.
    const pilihanComputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;

    // Mendapatkan hasil permainan dan memulai animasi putar.
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();

    // Menunggu 1 detik sebelum menampilkan hasil permainan dan gambar komputer.
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil; // Menampilkan hasil permainan.
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanKomputer();
//   const pilihanplayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanplayer);
//   console.log("comp :" + pilihanComputer);
//   console.log("player :" + pilihanplayer);
//   console.log(hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanKomputer();
//   const pilihanplayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanplayer);
//   console.log("comp :" + pilihanComputer);
//   console.log("player :" + pilihanplayer);
//   console.log(hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanKomputer();
//   const pilihanplayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanplayer);
//   console.log("comp :" + pilihanComputer);
//   console.log("player :" + pilihanplayer);
//   console.log(hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// console.log("comp :" + pilihanComputer);
// console.log("player :" + pilihanplayer);
// console.log(hasil);
