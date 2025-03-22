const title = document.querySelector('.title');
const text = 'Do You Want To Be Mine?'.split('');
for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ') {
        title.innerHTML += `<span>${text[index]}<span/>`;
    } else {
        title.innerHTML += `<span style='margin-right: 20px;'><span/>`;
    }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
    const randomDelay = Math.random() * 3;
    element.style.animationDelay = `${randomDelay}s`;
});

document.addEventListener("DOMContentLoaded", function () {
    if (!window.musicAudio) {
        console.log("🎵 Membuat elemen audio baru...");
        window.musicAudio = new Audio("");
        window.musicAudio.loop = true; // Ulang terus musiknya

        window.musicAudio.play().then(() => {
            console.log("✅ Musik berhasil diputar!");
            sessionStorage.setItem("musicPlaying", "true"); // Simpan status musik berjalan
        }).catch(error => {
            console.log("🚨 Gagal memainkan musik:", error);
        });
    } else {
        console.log("✅ Musik sudah berjalan sebelumnya.");
    }

    // Pastikan tombol berpindah ke flower.html tanpa menghentikan musik
    const startButton = document.getElementById('start');
    if (startButton) {
        startButton.addEventListener('click', function (event) {
            event.preventDefault();
            console.log("🌸 Berpindah ke flower.html tanpa menghentikan musik...");
            window.location.href = "flower.html";
        });
    }
});

// Jika masuk ke flower.html, jalankan animasi bunga otomatis
if (window.location.pathname.includes("flower.html")) {
    console.log("🌸 Halaman flower.html dimuat!");
    startBloomAnimation();
}

function startBloomAnimation() {
    const flowers = document.querySelectorAll(".flower");
    flowers.forEach(flower => {
        flower.style.transform = "scale(1.2)";
        flower.style.transition = "transform 2s ease-in-out";
    });
}
