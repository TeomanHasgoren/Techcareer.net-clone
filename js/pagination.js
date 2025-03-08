document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 6;
    let currentPage = 1;

    const cards = document.querySelectorAll("#card-container .col-md-4");
    const paginationLinks = document.querySelectorAll(".pagination .page-link");

    // Prev ve Next butonlarını düzgün bulmak için güncelledik
    const prevButton = document.querySelector(".pagination .prev a");
    const nextButton = document.querySelector(".pagination .next a");

    // Butonlar DOM'da var mı kontrol et
    if (!prevButton || !nextButton) {
        console.error("❌ Prev veya Next butonu bulunamadı!");
        return;
    }

    function showPage(pageNumber) {
        let totalPages = Math.ceil(cards.length / itemsPerPage);

        // Sayfa numarasını sınırla
        if (pageNumber < 1) pageNumber = 1;
        if (pageNumber > totalPages) pageNumber = totalPages;

        currentPage = pageNumber;

        // Tüm kartları gizle
        cards.forEach(card => card.style.display = "none");

        // Sayfadaki kartları göster
        let startIndex = (currentPage - 1) * itemsPerPage;
        let endIndex = startIndex + itemsPerPage;

        for (let i = startIndex; i < endIndex && i < cards.length; i++) {
            cards[i].style.display = "block";
        }

        // Prev ve Next butonlarının durumunu güncelle
        document.querySelector(".pagination .prev").classList.toggle("disabled", currentPage === 1);
        document.querySelector(".pagination .next").classList.toggle("disabled", currentPage === totalPages);
    }

    // Sayfa numaralarına tıklayınca ilgili sayfayı aç
    paginationLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let page = parseInt(this.textContent);

            if (!isNaN(page)) {
                showPage(page);
            }
        });
    });

    // Prev butonu (Önceki sayfa)
    prevButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    // Next butonu (Sonraki sayfa)
    nextButton.addEventListener("click", function (event) {
        event.preventDefault();
        let totalPages = Math.ceil(cards.length / itemsPerPage);
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    // İlk sayfayı göster
    showPage(currentPage);
});
