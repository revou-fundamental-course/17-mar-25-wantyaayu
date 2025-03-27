document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen navigasi
    const navPersegi = document.querySelector(".nav-fitur-active");
    const navPersegiPanjang = document.querySelector(".nav-fitur-non-active");
    
    // Ambil elemen section
    const sectionPersegi = document.querySelectorAll("section")[0]; // Luas & Keliling Persegi
    const sectionPersegiPanjang = document.querySelectorAll("section")[2]; // Luas & Keliling Persegi Panjang

    // Fungsi untuk menampilkan Persegi dan menyembunyikan Persegi Panjang
    navPersegi.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        sectionPersegi.style.display = "block";
        sectionPersegi.nextElementSibling.style.display = "block";
        sectionPersegiPanjang.style.display = "none";
        sectionPersegiPanjang.nextElementSibling.style.display = "none";
        navPersegi.style.backgroundColor = "blue";
        navPersegiPanjang.style.backgroundColor = "";
    });

    // Fungsi untuk menampilkan Persegi Panjang dan menyembunyikan Persegi
    navPersegiPanjang.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        sectionPersegi.style.display = "none";
        sectionPersegi.nextElementSibling.style.display = "none";
        sectionPersegiPanjang.style.display = "block";
        sectionPersegiPanjang.nextElementSibling.style.display = "block";
        navPersegiPanjang.style.backgroundColor = "blue";
        navPersegi.style.backgroundColor = "";
    });

    // Atur tampilan awal: Tampilkan Persegi, Sembunyikan Persegi Panjang
    sectionPersegi.style.display = "block";
    sectionPersegi.nextElementSibling.style.display = "block";
    sectionPersegiPanjang.style.display = "none";
    sectionPersegiPanjang.nextElementSibling.style.display = "none";
});
    document.addEventListener("DOMContentLoaded", function () {
        // Luas Persegi
        document.getElementById("btn-luas-content").addEventListener("click", function () {
            let sisi = document.getElementById("luas-content").value;
            if (sisi) {
                let luas = sisi * sisi;
                alert("Luas Persegi: " + luas);
            } else {
                alert("Masukkan nilai sisi terlebih dahulu!");
            }
        });
    
        // Keliling Persegi
        document.getElementById("btn-keliling-content").addEventListener("click", function () {
            let sisi = document.getElementById("keliling-content").value;
            if (sisi) {
                let keliling = 4 * sisi;
                alert("Keliling Persegi: " + keliling);
            } else {
                alert("Masukkan nilai sisi terlebih dahulu!");
            }
        });
    
        // Luas Persegi Panjang
        document.getElementById("btn-hitung-pp-luas").addEventListener("click", function () {
            let panjang = document.getElementById("panjang-luas").value;
            let lebar = document.getElementById("lebar-luas").value;
            if (panjang && lebar) {
                let luas = panjang * lebar;
                alert("Luas Persegi Panjang: " + luas);
            } else {
                alert("Masukkan nilai panjang dan lebar terlebih dahulu!");
            }
        });
    
        // Keliling Persegi Panjang
        document.getElementById("btn-hitung-pp-keliling").addEventListener("click", function () {
            let panjang = document.getElementById("panjang-keliling").value;
            let lebar = document.getElementById("lebar-keliling").value;
            if (panjang && lebar) {
                let keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
                alert("Keliling Persegi Panjang: " + keliling);
            } else {
                alert("Masukkan nilai panjang dan lebar terlebih dahulu!");
            }
        });
    
        // Reset untuk setiap bagian
        document.getElementById("btn-reset-luas").addEventListener("click", function () {
            document.getElementById("luas-content").value = "";
        });
    
        document.getElementById("btn-reset-keliling").addEventListener("click", function () {
            document.getElementById("keliling-content").value = "";
        });
    
        document.getElementById("btn-reset-pp-luas").addEventListener("click", function () {
            document.getElementById("panjang-luas").value = "";
            document.getElementById("lebar-luas").value = "";
        });
    
        document.getElementById("btn-reset-pp-keliling").addEventListener("click", function () {
            document.getElementById("panjang-keliling").value = "";
            document.getElementById("lebar-keliling").value = "";
        });
    });