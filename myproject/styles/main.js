// Glide.js
document.addEventListener('DOMContentLoaded', () => {
    new Glide('.glide', {
        type: 'carousel',  
        perView: 1,        
        autoplay: 3000     
    }).mount();
});

// Parsley Form
document.addEventListener('DOMContentLoaded', function() {
    $('#example-form').parsley();
  });

// Leaflet map & AOS
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the map and set the view to Toronto's coordinates
    var map = L.map('map').setView([43.65107, -79.347015], 13); // Toronto coordinates

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker at Toronto with a popup
    L.marker([43.65107, -79.347015]).addTo(map)
        .bindPopup("<b>Welcome to Toronto!</b><br>The 6ix.")
        .openPopup();

    AOS.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        once: true, 
    })
});

