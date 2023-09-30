function getPilihanKomputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.7) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return (hasil = comp == "gajah" ? "KALAH!" : "MENANG!");
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

function putar() {
  const imgCom = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMuai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMuai > 1000) {
      clearInterval;
      return;
    }
    imgCom.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanKomputer();
    const pilihanplayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanplayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
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
