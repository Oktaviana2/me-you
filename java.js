const audio = document.getElementById("audio");

// Browser kadang memblokir autoplay, jadi kita paksa jalankan musik saat halaman siap
document.addEventListener("DOMContentLoaded", function() {
    audio.play().catch(error => {
        console.log("Autoplay diblokir, harus ada interaksi pengguna dulu.");
    });
});