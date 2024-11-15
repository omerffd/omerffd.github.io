
function updateClock() {
    const now = new Date();

   /* Saat Bilgsi gösterir */
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

     /* Tarih Bilgsi gösterir */
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar
    const year = now.getFullYear();
    const dateString = `${day}/${month}/${year}`;

    
    document.getElementById('clock').textContent = `${dateString} - ${timeString}`;
}


setInterval(updateClock, 1000);
updateClock(); 


/* Burası Ana sayfa daki iletişim kontrol kısmı */
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
    feedback.innerHTML = ''; // Önceki geri bildirimi temizle

    
    if (name === '') {
        feedback.innerHTML += 'Lütfen isminizi girin.<br>';
    }

    
    if (email === '') {
        feedback.innerHTML += 'Lütfen e-posta adresinizi girin.<br>';
    } else if (!validateEmail(email)) {
        feedback.innerHTML += 'Geçersiz e-posta formatı.<br>';
    }

    
    if (message === '') {
        feedback.innerHTML += 'Lütfen mesajınızı girin.<br>';
    }

    
    return feedback.innerHTML === '';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(String(email).toLowerCase());
}


/* Hakkımda Kısmı için JavaScript Dosyası */

function toggleInfo() {
    const info = document.getElementById('moreInfo');
    const button = document.getElementById('toggleButton');
    
    if (info.style.display === "none") {
        info.style.display = "block"; // Detayları göster
        button.textContent = "Daha Az Gör"; // Buton metnini değiştir
    } else {
        info.style.display = "none"; // Detayları gizle
        button.textContent = "Daha Fazla Gör"; // Buton metnini değiştir
    }
}

/* Projeler Kısmı için JavaScript Dosyası  */

function filterProjects() {
    const filterValue = document.getElementById('filterSelect').value;
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        if (filterValue === 'all') {
            project.style.display = 'block'; // Tüm projeleri göster
        } else if (project.getAttribute('data-type') === filterValue) {
            project.style.display = 'block'; // Seçilen türdeki projeleri göster
        } else {
            project.style.display = 'none'; // Diğerlerini gizle
        }
    });
}


const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.getElementsByClassName("close")[0];

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".close");

    /*Projedeki şeylere tıklayınca gelen yer */ 
    document.querySelectorAll(".proje").forEach(proje => {
        proje.addEventListener("click", () => {
            const imgSrc = proje.querySelector(".proje_image").src;
            const title = proje.querySelector("h2").textContent;
            const description = proje.querySelector("p").textContent;

            /*Modal içerikleri güncelleme olayı*/
            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            /* Modalı gösterm olayı */
            modal.style.display = "flex";
        });
    });

    /*Moda kapayma olayı */
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    /* Modaldan başka yere tıklayınca kapanma */
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


function filterProjects() {
    const filter = document.getElementById("filterSelect").value;
    const projects = document.querySelectorAll(".proje");

    projects.forEach(project => {
        /*Bütün projeleri gösterme ya da gizleme olayı */
        if (filter === "hepsi") {
            project.style.display = "block";
        } else if (project.getAttribute("data-category") === filter) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

