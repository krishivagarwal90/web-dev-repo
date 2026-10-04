API=" http://www.omdbapi.com/?i=tt3896198&apikey=14dd4a00"




const movieForm=document.querySelector("#movieForm")
const movieInput=document.querySelector("#movieInput")
const movieHub=document.querySelector("#movieHub")



searchMovie.addEventListener("submit",(e)=>{e.preventDefault();


    let query=movieInput.value.trim()


    if(!query){
        return
    }
    console.log(query);
      SearchMovies(query)
})
async function SearchMovies(movieName){




    movieHub.innerHTML=`<span class="loader"></span>`


    let response= await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=14dd4a00&s=${encodeURIComponent(movieName)}`)
    let data=await response.json()

    console.log(data)


if(data.Response=="True"){
    displayMovies(data.Search)
} 
else{
     console.log(data.Error);
    MovieHub.innerHTML=`<p>${data.Error}</p>`
}
}






function displayMovies(data){
    data.forEach((movie) => {
        movieHub.innerHTML=""
   
    const div =document.createElement("div")
    div.dataset.id=movie.imdbID
    div.setAttribute("class","movie-card")
    div.innerHTML=`
    <div>
        <img src="${movie.Poster}" alt="">
    </div>
    <p>${movie.Title}</p>
    <p>${movie.Year}</p>

`
movieHub.append(div)
 });
}
movieHub.addEventListener("click",(e)=>{
    e.stopPropagation();
    const movieCard=e.target.closest(".movie-card")
 const imdbID =movieCard.dataset.imdbID
 location.href=`movie-detail.html?id=${imdbID}`
})