import SearchBar from "../../components/Searchbar/SearchBar"
import { useState, useEffect } from "react";
import "./home.scss"
import { Link } from "react-router-dom";




const HomePage = () => {

  const [shows, setShows] = useState([]);

    useEffect(() => {
      fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
    const transformedData = data.map(show => show.show);
    setShows(transformedData);
  });     
    }, [])
    
  return (
    <div className='homePage'>
      <SearchBar/>
      <div className="shows">
      {shows.map(show=> (
        <div key ={show.id}>
          
        <Link to={{pathname: `/showdetails/${show.id}`, state: {id: show.id} }}>
          <img src={show.image ? show.image.medium : null} alt={show.name}/>            
          <p> {show.name} </p>
        </Link>

        
        </div>
      ))}
      </div>
    </div>
  )
}

export default HomePage