document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
});

document.getElementById("closeMenu").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
});

document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
});

document.addEventListener('DOMContentLoaded', function() {
    // Sadece mobile-menu içindeki dropdown-toggle ve dropdown-menu'yi seç
    const dropdownToggle = document.querySelector('.mobile-menu .dropdown-toggle');
    const dropdownMenu = document.querySelector('.mobile-menu .dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            // Diğer tüm dropdown menüleri kapat
            document.querySelectorAll('.mobile-menu .dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });
            // Mevcut dropdown menüyü aç/kapat
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Mobil menüyü kapatma butonu
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    }

    // Sayfa içinde herhangi bir yere tıklandığında dropdown menüyü kapat
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mobile-menu .dropdown-toggle') && !e.target.closest('.mobile-menu .dropdown-menu')) {
            document.querySelectorAll('.mobile-menu .dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});