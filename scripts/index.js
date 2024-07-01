        // Add script to save toggle switch state in local storage
        document.addEventListener('DOMContentLoaded', function() {
            var userMode = localStorage.getItem('mode');
            if (userMode === 'night') {
                document.body.classList.add('night-mode');
                document.getElementById('mode-text').textContent = 'Night Mode';
                document.getElementById('mode-toggle').checked = true; // Set toggle switch to checked
            }

            document.getElementById('mode-toggle').addEventListener('click', function() {
                document.body.classList.toggle('night-mode');
                var modeText = document.getElementById('mode-text');
                if (document.body.classList.contains('night-mode')) {
                    modeText.textContent = 'Night Mode';
                    localStorage.setItem('mode', 'night');
                } else {
                    modeText.textContent = 'Day Mode';
                    localStorage.setItem('mode', 'day');
                }
            });
        });

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
