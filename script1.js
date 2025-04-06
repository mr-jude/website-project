
const destinationsData = [
    {
        name: "Maldives",
        category: "beach",
        description: "Escape to sun-kissed beaches and turquoise waters.",
        image: "maldives.jpg"
    },
    {
        name: "Santorini",
        category: "mountain",
        description: "Hike through breathtaking landscapes and conquer new heights.",
        image: "santorini.jpg"
    },
    {
        name: "Paris",
        category: "city",
        description: "Immerse yourself in vibrant cultures and bustling streets.",
        image: "paris.jpg"
    },
    {
        name: "Venice",
        category: "city",
        description: "Explore the romantic canals and historic architecture.",
        image: "venice.jpg"
    },
    {
        name: "Barcelona",
        category: "city",
        description: "Discover the rich traditions and local life of Spain.",
        image: "barcelona.jpg"
    },
    {
        name: "Monaco",
        category: "beach",
        description: "Unwind on pristine beaches with crystal-clear waters.",
        image: "monaco.jpg"
    }
];


function displayDestinations(category) {
    const destinationsContainer = document.querySelector('.destinations-grid');
    destinationsContainer.innerHTML = ''; 

    const filteredDestinations = category ? 
        destinationsData.filter(dest => dest.category === category) : 
        destinationsData;

    filteredDestinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('destination-card');
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <button class="view-details" data-name="${destination.name}">View Details</button>
        `;
        destinationsContainer.appendChild(card);
    });
}


document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        displayDestinations(category);
    });
});


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


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-details')) {
        const destinationName = e.target.getAttribute('data-name');
        const destination = destinationsData.find(dest => dest.name === destinationName);
        modal.querySelector('.modal-title').textContent = destination.name;
        modal.querySelector('.modal-description').textContent = destination.description;
        modal.style.display = 'block';
    }
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


displayDestinations();