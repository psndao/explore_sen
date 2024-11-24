// script.js

// Menu mobile toggle
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Menu';
    toggleBtn.classList.add('toggle-btn');
    document.querySelector('nav .container').insertBefore(toggleBtn, navLinks);

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Initialisation de la carte pour Dakar
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si l'élément de la carte existe
    const mapElement = document.getElementById('mapid-dakar');
    if (mapElement) {
        var map = L.map('mapid-dakar').setView([14.6928, -17.4467], 12); // Coordonnées centrées sur Dakar

        // Ajouter une couche de tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Ajouter des marqueurs pour quelques attractions de Dakar
        var attractions = [
            { name: "Île de Gorée", coords: [14.4020, -17.2621], description: "Site historique de la traite négrière." },
            { name: "Monument de la Renaissance Africaine", coords: [14.7251, -17.4520], description: "Symbole de la renaissance africaine." },
            { name: "Parc Forestier de Hann", coords: [14.7000, -17.3500], description: "Un vaste parc urbain avec une riche biodiversité." },
            { name: "Marché Sandaga", coords: [14.6780, -17.4400], description: "Un marché animé pour découvrir l’artisanat local." },
            { name: "Plage de Ngor", coords: [14.5628, -17.3271], description: "Plage populaire idéale pour le surf et la détente." }
        ];

        attractions.forEach(function(attraction) {
            L.marker(attraction.coords).addTo(map)
                .bindPopup(`<b>${attraction.name}</b><br>${attraction.description}`);
        });
    }
});

// Initialisation de Swiper pour le Slider d’Images (Optionnel)
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        // Paramètres optionnels
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Défilement fluide pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

