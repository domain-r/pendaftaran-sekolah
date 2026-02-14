document.getElementById("formDaftar").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const asal = document.getElementById("asal").value;
  const ortu = document.getElementById("ortu").value;
  const wa = document.getElementById("wa").value;
  const alamat = document.getElementById("alamat").value;

  const pesan = `
PENDAFTARAN SISWA BARU
Nama: ${nama}
Asal Sekolah: ${asal}
Orang Tua: ${ortu}
No WA: ${wa}
Alamat: ${alamat}
`;

  const nomorTujuan = "6285141396865"; // NOMOR STAF
  const url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});
