export const getMovies = async() => {
    try{
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20&limit=1&offset=0`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(err){
        console.log(err);
    }
}

export const getTrending = async() => {
    try{
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(err) {
        console.log(err);
    }
}