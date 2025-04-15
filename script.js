// Menampilkan pesan selamat datang di console
console.log("Selamat datang di website Kevin!");

// Tambahkan interaksi klik pada navigasi
document.addEventListener("DOMContentLoaded", () => {
    // Efek hover dinamis pada header
    const header = document.querySelector("header");
    header.addEventListener("mouseover", () => {
        header.style.background = "linear-gradient(to right, #ff4500, #ff6347, #ff7f50)";
        header.style.transition = "background 0.5s ease";
    });
    header.addEventListener("mouseout", () => {
        header.style.background = "linear-gradient(to right, #ff7f50, #ff4500)";
    });

    // Animasi teks pada judul halaman
    const pageTitle = document.querySelector("header h1");
    if (pageTitle) {
        let text = pageTitle.textContent;
        let index = 0;
        setInterval(() => {
            pageTitle.textContent = text.slice(0, index) + (index % 2 === 0 ? "|" : "");
            index = (index + 1) % (text.length + 1);
        }, 200);
    }

    // Efek klik pada gambar
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("click", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease";
            setTimeout(() => {
                img.style.transform = "scale(1)";
            }, 300);
        });
    });

    // Perubahan warna dinamis pada footer
    const footer = document.querySelector("footer");
    if (footer) {
        setInterval(() => {
            footer.style.background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        }, 1000);
    }

    // Fungsi untuk menghasilkan warna acak
    function randomColor() {
        return Math.floor(Math.random() * 256);
    }
});
