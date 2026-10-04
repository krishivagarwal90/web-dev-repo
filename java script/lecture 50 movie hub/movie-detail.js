const params= new URLSearchParams(location.search)
const imdbID =params.get("id")
const movieDeatail=document.querySelector("#movie-detail")

console.log(imdbID)
if(imdbID){
    SearchMovie(imdbID.trim())
}
async function SearchMovie(imdbID){




    MovieHub.innerHTML=`<p>Searching Movies</p>`


    let response= await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=14dd4a00&si=${imdbID}&plot=full`)
    let data=await response.json()

    console.log(data)


if(data.Response==="True"){
    displayMovies(data)
} 
else{
   console.log(data.Error)
}
}
function displayMovies(data){
    movieDeatail.innerHTML=`  <div>
            <img src="${data.Poster}" alt="">
        </div>
        <div>
            <h2>${data.Title} </h2>
            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>IMDB:${data.imdbrating}</p>
            </section>
            <div>
                <p>Plot Overview</p>
                <p>${data.Plot}</p>
            </div>
            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
                </div>
                <div>
                    <p>Actors</p>
                    <p>${data.Actors}</p>
                </div>
                <div>
                <section>
                    <p>LANGUAFE</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p>COUNTRY</p>
                    <p>${data.Country}</p>
                </section>
                </div>
            
            <button>
            <a href=imdb.com/title/${data.imdbID}>view on imdb
            </button>
        </div>


`
}
