import { Link } from 'react-router-dom';
import Ticket from './../Images/movie_tickets.jpg'

function Home() {
    return (
        <>
            <div className="text-center">
                <h2>Find a movie to watch tonight</h2>
                <hr></hr>
                <Link to="/movies">
                    <img src={Ticket} alt="movie tickets" />
                </Link>
                
            </div>
        </>
      );
}

export default Home;