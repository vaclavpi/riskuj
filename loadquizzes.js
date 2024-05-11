// Načtení dat ze souboru quizzes.json
fetch('assets/quizzes.json')
    .then(response => response.json())
    .then(data => {
        // Předání dat do šablony index.html
        renderQuizzes(data);
    })
    .catch(error => console.error('Chyba při načítání dat:', error));

// Funkce pro vykreslení kvízů do HTML
function renderQuizzes(quizzes) {
    const quizTabs = document.querySelector('.quiz-tabs');
    // Projděte každý kvíz a vytvořte odpovídající HTML prvek pro zobrazení
    quizzes.forEach(quiz => {
        const quizTab = document.createElement('div');
        quizTab.classList.add('quiz-tab');
        quizTab.setAttribute('onclick', `startQuiz('${quiz.file}')`);
        quizTab.innerHTML = `
            <img src="${quiz.image}" alt="${quiz.name}" class="quiz-image">
            <h2 class="quiz-title">${quiz.name}</h2>
            <p class="quiz-description">${quiz.description}</p>
        `;
        quizTabs.appendChild(quizTab);
    });
}
