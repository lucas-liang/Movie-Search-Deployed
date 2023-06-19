

const URL = 'http://localhost:5000';
export async function searchMovies(searchTerm){
    if(searchTerm === ''){
        return [];
    }
    const response = await fetch(`${URL}/get/${searchTerm}`);
    const data = await response.json();
    return data;
    
}