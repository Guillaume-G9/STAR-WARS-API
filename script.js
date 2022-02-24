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
                <li id="play" onmouseover="playSound()" onmouseleave="pauseSound()" class="character">
                    <h2>${character.name}</h2>
                    <p>Date of birth: ${character.birth_year}</p>
                </li>
            `;
    }).join('');
    charactersList.innerHTML = htmlString;
};

var byline = document.getElementById('byline');   
bylineText = byline.innerHTML;                    
bylineArr = bylineText.split('');                
byline.innerHTML = '';                            

var span;         
var letter;

for(i=0;i<bylineArr.length;i++){                 
  span = document.createElement("span");          
  letter = document.createTextNode(bylineArr[i]); 
  if(bylineArr[i] == ' ') {                       
    byline.appendChild(letter);         
  } else {
    span.appendChild(letter);           
    byline.appendChild(span);           
  }
}

loadCharacters();



const playHover = document.getElementById('play'),
  saber = document.getElementById('saber')
	audios = document.querySelectorAll('audio');
    themeSong = document.querySelector(".theme-song")


function playSound() {
    saber.play();
}

function playThemeSong() {
    themeSong.play()
}

function pauseSound() {
    saber.pause()
    saber.currentTime = 0;
}
// playHover.addEventListener('mouseleave', function() {
//   audio.pause();
//   audio.currentTime = 0;
// }, false);