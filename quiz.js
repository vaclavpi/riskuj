// Zde načtěte parametr URL pro získání cesty k JSON souboru
const queryParams = new URLSearchParams(window.location.search);
const quizFile = queryParams.get('quiz');

// Načtěte data ze zadaného JSON souboru a inicializujte kvíz
fetch(quizFile)
    .then(response => response.json())
    .then(data => {
        // Zde inicializujte kvíz s načtenými daty
        console.log('Kvíz spuštěn:', data);
    })
    .catch(error => console.error('Chyba při načítání kvízu:', error));
