function createHamButtonDiv(x) {
    x.classList.toggle("change");
    const parentNav = document.querySelector("nav");
    const existingDiv = parentNav.querySelector(".ham-button-div");

    if (existingDiv) {
        existingDiv.remove();
    } else {
        const newDiv = document.createElement("div");
        newDiv.className = "ham-button-div";
        newDiv.innerHTML = '<a href="index.html">Home</a><a href="services.html">Services</a><a href="Readme.html">About</a><a id="contactUsButton" onclick="openContactForm()">Contact</a>';
        parentNav.appendChild(newDiv);
    }
}
function openContactForm() {
    document.getElementById('contactFormPopup').style.display = 'flex';
}
function closeContactForm() {
    document.getElementById('contactFormPopup').style.display = 'none';
}

// night and day mode
document.addEventListener('DOMContentLoaded', function() {
    // Deteksi klik tombol dan toggle class untuk mode malam
    document.getElementById('mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('night-mode');
        var modeText = document.getElementById('mode-text');
        if (document.body.classList.contains('night-mode')) {
            modeText.textContent = 'Night Mode';
        } else {
            modeText.textContent = 'Day Mode';
        }
    });
});

// saving last setting for day/night mode
    // Simpan status mode (day/night) di local storage
    var modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('change', function() {
        if (modeToggle.checked) {
            localStorage.setItem('mode', 'night');
        } else {
            localStorage.setItem('mode', 'day');
        }
    });

    // Cek status mode terakhir saat halaman dimuat
    document.addEventListener('DOMContentLoaded', function() {
        var lastMode = localStorage.getItem('mode');
        if (lastMode === 'night') {
            document.body.classList.add('night-mode');
            document.getElementById('mode-text').textContent = 'Night Mode';
            modeToggle.checked = true;
        }
    });