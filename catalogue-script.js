function playSong(song){
    document.querySelector("#nowPlaying").innerHTML =
        "Now Playing: " + song;
}

let search = document.querySelector("#search");
let genre = document.querySelector("#genre");
let cards = document.querySelectorAll(".card");

search.addEventListener("input", filterSongs);
genre.addEventListener("change", filterSongs);

function filterSongs(){

    let text = search.value.toLowerCase();
    let type = genre.value;

    cards.forEach(function(card){

        let song = card.innerText.toLowerCase();
        let cardGenre = card.dataset.genre;

        if(song.includes(text) &&
           (type == "all" || cardGenre == type)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}

function previousSong(){
    alert("Previous song");
}

function nextSong(){
    alert("Next song");
}