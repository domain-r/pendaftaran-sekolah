
function kirimWA(){
let nama=document.getElementById('nama').value;
let asal=document.getElementById('asal').value;
let ortu=document.getElementById('ortu').value;
let hp=document.getElementById('hp').value;

let pesan=`Pendaftaran Sekolah%0A
Nama: ${nama}%0A
Asal Sekolah: ${asal}%0A
Orang Tua: ${ortu}%0A
HP: ${hp}`;

let no='085141396865';
window.open(`https://wa.me/62${no.substring(1)}?text=${pesan}`);
}
