class DataSource {
    static searchArtist(keyword) {
        return fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.artists) {
                    return Promise.resolve(responseJson.artists);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;
