class AristItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set artist(artist) {
        this._artist = artist;
        this.render();
    }

    render() {
      this.shadowDOM.innerHTML = `
         <style>
            * {
                 margin: 0;
                 padding: 0;
                 box-sizing: border-box;
                 background-color: white;
             }
             
             :host {
                 display: block;
                 margin-bottom: 18px;
                 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                 border-radius: 10px;
                 overflow: hidden;
             }

             .fan-art-club {
                 width: 100%;
                 max-height: 500px;
                 object-fit: cover;
                 object-position: center;
             }

         </style>

           <div class="col-12">
               <div class="card">
                   <div class="card-header">
                      <img class="fan-art-club" src="${this._artist.strArtistThumb}" alt="Fan Art">
                   </div>
                    <table align="left">
                      <tr>
                        <td width="100px">Nama Artis</td>
                        <td width="20px">:</td>
                        <td>${this._artist.strArtist}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Label</td>
                        <td width="20px">:</td>
                        <td>${this._artist.strLabel}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Terbentuk</td>
                        <td width="20px">:</td>
                        <td>${this._artist.intFormedYear}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Lahir</td>
                        <td width="20px">:</td>
                        <td>${this._artist.intBornYear}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Style</td>
                        <td width="20px">:</td>
                        <td>${this._artist.strStyle}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Genre</td>
                        <td width="20px">:</td>
                        <td>${this._artist.strGenre}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Mood</td>
                        <td width="20px">:</td>
                        <td>${this._artist.strMood}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Website</td>
                        <td width="20px">:</td>
                        <td>${this._artist.strWebsite}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Media Sosial</td>
                        <td width="20px">:</td>
                        <td><img src="https://img.icons8.com/fluent/20/000000/facebook-new.png"/> ${this._artist.strFacebook} <img src="https://img.icons8.com/fluent/20/000000/twitter.png"/> ${this._artist.strTwitter}</td>
                      </tr>
                      <tr>
                        <td width="100px" text-align="center">Biografi</td>
                        <td width="20px">:</td>
                        <td>${this._artist.strBiographyEN}</td>
                      </tr>
                    </table>
               </div>
           </div>`;
    }
}

customElements.define("artist-item", AristItem);
