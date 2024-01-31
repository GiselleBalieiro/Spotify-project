const searchInput = document.getElementById ('searchInput');
const resultsArtists = document.elementById ('result-artist');
const resultPlaylist = document.getElementById ('result-playlists');

function requestApi (searchTerm) {
    const url = ""
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEath (element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultsArtists.classList.remove('hidden');
}

document.addEventListener ('input', function() {
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultsArtists.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm)
})
