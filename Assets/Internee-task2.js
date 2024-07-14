var typed = new Typed(".text", {
    strings: ["On your desire domain", "Give hands On experience", "Get a compitative job"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

// Add a class to the section when it enters the viewport
const section = document.querySelector('section');
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        section.classList.add('section-visible');
    } else {
        section.classList.remove('section-visible');
    }
});
observer.observe(section);


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.instructor-img');

    function updateImageVisibility() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const imageTop = rect.top + scrollY;
            const distanceFromTop = imageTop - scrollY;
            
            // Calculate visibility based on distance from the viewport
            if (distanceFromTop < windowHeight && distanceFromTop > -rect.height) {
                const visibility = 1 - (distanceFromTop / windowHeight);
                image.style.opacity = visibility;
                image.style.transform = `translateY(${100 - (visibility * 100)}px)`;
            } else {
                image.style.opacity = 0;
                image.style.transform = 'translateY(100px)';
            }
        });
    }

    window.addEventListener('scroll', updateImageVisibility);
    updateImageVisibility(); // Initial check
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.instructor-icon');

    function updateImageVisibility() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const imageTop = rect.top + scrollY;
            const distanceFromTop = imageTop - scrollY;
            
            // Calculate visibility based on distance from the viewport
            if (distanceFromTop < windowHeight && distanceFromTop > -rect.height) {
                const visibility = 1 - (distanceFromTop / windowHeight);
                image.style.opacity = visibility;
                image.style.transform = `translateY(${100 - (visibility * 100)}px)`;
            } else {
                image.style.opacity = 0;
                image.style.transform = 'translateY(100px)';
            }
        });
    }

    window.addEventListener('scroll', updateImageVisibility);
    updateImageVisibility(); // Initial check
});