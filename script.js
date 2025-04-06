
const destinationCards = document.querySelectorAll('.destination-card');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2 class="modal-title"></h2>
        <p class="modal-description"></p>
    </div>
`;
document.body.appendChild(modal);

destinationCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        modal.querySelector('.modal-title').textContent = title;
        modal.querySelector('.modal-description').textContent = description;
        modal.style.display = 'block';
    });
});


modal.querySelector('.close-button').addEventListener('click', () => {
    modal.style.display = 'none';
});


const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const randomDestinations = ["Maldives", "Santorini", "Paris", "Venice", "Barcelona", "Monaco"];
const randomButton = document.createElement('button');
randomButton.textContent = 'Get Random Destination';
randomButton.classList.add('random-destination');
document.body.appendChild(randomButton);

randomButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * randomDestinations.length);
    alert(`Your random destination is: ${randomDestinations[randomIndex]}`);
});