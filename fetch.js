function loadData(){

    fetch("data.txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("data").innerHTML = data;
    })
    .catch(error => {
        console.log(error);
    });

}

function loadData(){

    fetch("data.txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("data").innerHTML = data;
    });

}

function loadSongs(){

    fetch("songs.json")
    .then(response => response.json())
    .then(data => {

        let result = "";

        data.songs.forEach(song => {
            result += song.name + " - " + song.artist + "<br>";
        });

        document.getElementById("songDetails").innerHTML = result;
    });
}