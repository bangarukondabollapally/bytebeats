function sendData(){

    let song = document.getElementById("song").value;
    let artist = document.getElementById("artist").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            song:song,
            artist:artist
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML =
            "Data sent successfully!";
    });
}