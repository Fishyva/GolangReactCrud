import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        //Our headers
        const requestOptions = {
            method: "GET",
            headers: headers,
        }
        // Javascript fetching data from the golang backend rest api    
        fetch(`http://localhost:8080/movies`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch(err => {
                console.log(err);
            })

        
    },[]);
    return (
        <>
            <div>
                <h2>Movies</h2>
                <hr></hr>
                <table className="table table-stripped table-hover">
                    <thead>
                        <tr>
                            <th>Movie</th>
                            <th>Relase Date</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <Link to={`/movies/${movie.id}`}>
                                        {movie.title}
                                    </Link>
                                </td>
                                <td>{movie.release_date}</td>
                                <td>{movie.mpaa_rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
      );
}

export default Movies;