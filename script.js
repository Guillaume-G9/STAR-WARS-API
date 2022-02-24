const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let starWarsChar = [];



const loadCharacters = async() => {
    try {
        const res = await fetch('https://swapi.dev/api/people/');
        starWarsChar = await res.json();
        starWarsChar = starWarsChar.results
        displayCharacters(starWarsChar);
    } catch (err) {
        console.error(err);
    }
};


searchBar.addEventListener('keyup', (event) => {
    let input = event.target.value.toLowerCase();
    console.log(starWarsChar)
    const filter = starWarsChar.filter(character => {
        return (
            character.name.toLowerCase().includes(input) ||
            character.birth_year.toLowerCase().includes(input)
        )
    })
    displayCharacters(filter)
})


const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
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