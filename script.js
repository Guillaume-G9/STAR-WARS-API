const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let starWarsChar = [];


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = starWarsChar.results.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.birth_year.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async() => {
    try {
        const res = await fetch('https://swapi.dev/api/people/');
        starWarsChar = await res.json();
        console.log(starWarsChar);
        displayCharacters(starWarsChar);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters.results.map((character) => {
        return `
                <li class="character">
                    <h2>${character.name}</h2>
                    <p>Date of birth: ${character.birth_year}</p>
                </li>
            `;
    }).join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();