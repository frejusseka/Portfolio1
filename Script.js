// 1. Interaction du bouton principal
const actionBtn = document.getElementById('actionBtn');
const messageDisplay = document.getElementById('message');

const messages = [
    "Bonjour ! Merci de visiter ma page. 🎉",
    "La musique et le code, une belle harmonie ! 🎸💻",
    "N'oubliez pas de suivre vos passions. ✨",
    "Vous êtes génial ! Merci pour le clic. 😊",
    "Le développement web, c'est créatif et puissant !"
];

let clickCount = 0;

actionBtn.addEventListener('click', function() {
    clickCount++;
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDisplay.textContent = messages[randomIndex];
    
    // Changer le texte du bouton après quelques clics
    if (clickCount === 3) {
        actionBtn.textContent = "Tu aimes cliquer, hein ? 😄";
    } else if (clickCount === 5) {
        actionBtn.textContent = "Super énergie ! 🚀";
    }
});

// 2. Changement de couleur de fond
const colorButtons = document.querySelectorAll('.color-btn');

colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        document.body.style.backgroundColor = color;
        
        // Ajouter un feedback visuel
        colorButtons.forEach(btn => btn.style.boxShadow = 'none');
        this.style.boxShadow = '0 0 0 3px #2575fc';
    });
});

// 3. Animation des titres au défilement
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Appliquer aux titres de section
document.querySelectorAll('h2').forEach(h2 => {
    h2.style.opacity = 0;
    h2.style.transform = 'translateY(20px)';
    h2.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(h2);
});

// 4. Date du pied de page
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}