document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // FEATHER ICONS
  // =========================

  feather.replace();


  // =========================
  // WHATSAPP
  // =========================

  const whatsappLinks =
    document.querySelectorAll(".whatsapp-link");

  whatsappLinks.forEach(function (link) {

    const nomor = link.dataset.phone;

    const pesan = encodeURIComponent(
      "Halo Kopi Kita, saya ingin mengetahui informasi mengenai produk dan menu yang tersedia."
    );

    link.href =
      "https://wa.me/" + nomor + "?text=" + pesan;

    link.target = "_blank";

  });


  // =========================
  // SCROLL ANIMATION
  // =========================

  const sections = document.querySelectorAll(
    ".tentang, .menu, .keunggulan, .galeri, .testimoni, .kontak"
  );

  const observer = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },
    {
      threshold: 0.15
    }
  );


  sections.forEach(function (section) {

    section.classList.add("hidden");

    observer.observe(section);

  });

});