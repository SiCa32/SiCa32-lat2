import './artist-item.js';

class ArtistList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set artists(artists) {
        this._artists = artists;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._artists.forEach(artist => {
            const movieElement = document.createElement("artist-item");
            movieElement.artist = artist;
            this.shadowDOM.appendChild(movieElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("artist-list", ArtistList);
