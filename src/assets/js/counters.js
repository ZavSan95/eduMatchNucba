// Variable para controlar si la animación ya se ha ejecutado
let animationExecuted = false;

// Función para animar los incrementadores al hacer scroll hacia la sección de comunidad
function animateIncrements() {
    // Verificar si la animación ya se ha ejecutado
    if (animationExecuted) {
        return;
    }

    // Obtener la posición vertical de la sección de comunidad
    const communitySection = document.getElementById('comunidad');
    const communitySectionTop = communitySection.offsetTop;

    // Verificar si la sección de comunidad está visible en la pantalla
    if (window.scrollY > communitySectionTop - window.innerHeight / 2) {
        // Incrementadores y sus valores finales
        const professorsIncrement = 100;
        const studentsIncrement = 1500;
        const coursesIncrement = 300;

        // Animar incrementadores
        animateIncrement('professors-increment', professorsIncrement);
        animateIncrement('students-increment', studentsIncrement);
        animateIncrement('courses-increment', coursesIncrement);

        // Marcar que la animación se ha ejecutado
        animationExecuted = true;
    }
}

// Función para animar un incrementador específico
function animateIncrement(id, finalValue) {
    let currentValue = 0;

    // Función de animación
    function updateValue() {
        document.getElementById(id).textContent = '+' + currentValue;
        if (currentValue < finalValue) {
            currentValue += Math.ceil(finalValue / 100); // Ajustar la velocidad de la animación
            requestAnimationFrame(updateValue);
        } else {
            document.getElementById(id).textContent = '+' + finalValue;
        }
    }

    // Iniciar animación
    updateValue();
}

// Evento de scroll para activar la animación
window.addEventListener('scroll', animateIncrements);
