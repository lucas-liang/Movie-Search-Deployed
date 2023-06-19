import {useState, useEffect} from 'react';

import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import {searchMovies} from './searchMovies';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm,  setSearchTerm] = useState('');
    
    async function getMovies(title){
        const data = await searchMovies(title);
        setMovies(data.Search);
    } 

    useEffect(() =>{
        getMovies('super');
    }, []);

    useEffect(()=>{getMovies(searchTerm)},
    [searchTerm]);
    
    function keyPress(event){
        const searchTerm = event.target.value;
        if(event.keyCode === 13){
            setSearchTerm(searchTerm);
        }
    }

    function handleClick(){
        const searchTerm = document.getElementById("search").value;
        setSearchTerm(searchTerm);
    }

    return(
    <div className = "app">
        <h1>Movieland</h1>

        <div className = "search">
            <input 
            placeholder = "Search for movies"
            id = 'search'
            onKeyDown = {keyPress}>
            </input>
            <img
            src = {SearchIcon}
            alt = "search"
            onClick = {handleClick}
            />

        </div>

        {movies?.length > 0
            ? (
            <div className = "container">
                {movies.map((movie, idx) => (
                    <MovieCard movie = {movie} key = {idx}/>
                ))}
            </div>
            ) : (
                <div className = "empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;
