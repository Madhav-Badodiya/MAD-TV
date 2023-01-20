import "./searchbar.scss"
import { useState } from "react";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const SearchBar = () => {


const [searchTerm, setSearchTerm] = useState("");

const onSearchHandler = (e) => {
  e.preventDefault();

  console.log("Searching for term " + searchTerm )
}

  return (
    <div className="searchBar">
      <form>
        <input type="text" placeholder="Search for tv show..."  
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onSearchHandler} ><SearchTwoToneIcon/></button>
      </form>
    </div>

    
  )
}

export default SearchBar