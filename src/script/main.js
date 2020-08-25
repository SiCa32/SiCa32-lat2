import '../JS/artist-list.js';
import '../JS/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieElement = document.querySelector("artist-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchArtist(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        movieElement.artists = results;
    };

    const fallbackResult = message => {
        movieElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
