class LogoFigure extends HTMLElement{

  connectedCallback(){
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || null;

    this.innerHTML = `
      <style>
        figure {
          display: flex;
          flex-flow: column;
          margin: auto;
        }

        img {
          width: 35px;
          height: auto;
          border-radius: 50px;
        }
      </style>

      <figure>
        <img src="${this.src}"
            alt="${this.alt}">
      </figure>
    `;
  }

}

customElements.define("logo-figure", LogoFigure);
