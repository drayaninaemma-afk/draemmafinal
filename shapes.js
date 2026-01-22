// shapes.js — micro detalles suaves para la experiencia ✨
document.addEventListener("DOMContentLoaded", () => {
    console.log("shapes.js cargado ✅ - Animaciones suaves activas");

    const header = document.querySelector(".site-header");
    const sections = document.querySelectorAll("section");

    // ===== HEADER COMPACTO AL HACER SCROLL =====
    function handleScroll() {
        if (!header) return;

        if (window.scrollY > 10) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // por si entra ya scrolleado

    // ===== REVELAR SECCIONES AL HACER SCROLL =====
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2
            }
        );

        sections.forEach((section) => {
            section.classList.add("reveal-section");
            observer.observe(section);
        });
    } else {
        // Fallback: si el navegador no soporta IntersectionObserver, mostramos todo sin animación
        sections.forEach((section) => {
            section.classList.add("is-visible");
        });
    }
});
