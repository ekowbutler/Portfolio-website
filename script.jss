// Toggle fullscreen for <h3> sections and their content
        document.querySelectorAll('h3').forEach(h3 => {
            h3.addEventListener('click', () => {
                const siblings = [];
                let sibling = h3.nextElementSibling;

                while (sibling && sibling.tagName !== 'H3') {
                    siblings.push(sibling);
                    sibling = sibling.nextElementSibling;
                }

                const isFullscreen = h3.classList.toggle('fullscreen');
                siblings.forEach(el => el.classList.toggle('fullscreen-content', isFullscreen));
            });
        });

        // Slideshow functionality
        const slides = document.querySelectorAll('.slideshow-container img');
        let currentSlide = 0;

        const updateSlide = (index) => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        document.querySelector('.slideshow-button.left').addEventListener('click', () => {
            updateSlide(currentSlide - 1);
        });

        document.querySelector('.slideshow-button.right').addEventListener('click', () => {
            updateSlide(currentSlide + 1);
        });

        // Initialize the slideshow
        if (slides.length) slides[0].classList.add('active');

    document.querySelectorAll("h3").forEach(h3 => {
            h3.addEventListener("click", function () {
                // Toggle fullscreen class on the h3
                this.classList.toggle("fullscreen");

                // Get the associated fullscreen content
                const content = this.nextElementSibling;

                // Toggle the visibility of the content
                if (content && content.classList.contains("fullscreen-content")) {
                    content.style.display = content.style.display === "block" ? "none" : "block";
                }
            });
        });