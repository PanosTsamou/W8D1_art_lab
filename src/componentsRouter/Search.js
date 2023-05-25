import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";



const Search = ({searchPageSubmit, arts, page, chooseArtWork, changePage , previousQuery}) =>{
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("")
    let navigate = useNavigate()

    useEffect (() =>{
        setQuery(previousQuery)
    }, [])

    const handleSelectChange = (event) => {
        setCategory(event.target.value)
    }

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query && category) {
            searchPageSubmit(query.toLowerCase(), category, 1)
            navigate('/search')
            console.log("ok")
        }
    };


    const listComponents = arts.map((pieceArt, index) => {

        return (
            <SearchItem key={pieceArt.id} pieceArt = { pieceArt } chooseArtWork = { chooseArtWork } index= { index }/>
        );
    });

    



    return (
        <div>
            <div className="search">
                {/* <h2>Search for an art work</h2> */}
                <form onSubmit={handleSubmit} className= "search-form">
                    <div>
                        <label htmlFor="select-category">
                            Choose a category:
                        </label>
                        <select onChange={handleSelectChange} id="select-category" required>
                            <option hidden value="">Categories</option>
                            <option value="q">Any</option>
                            <option value="query[term][artist_title]">Artist</option>
                            <option value="query[term][subject_titles]">Subject</option>
                            <option value="query[term][title]">Title</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="searching-for-text">
                            Enter a subject:
                        </label>
                        <input type="text" value={query} id="searching-for-text" onChange={handleQueryChange} required/>
                    </div>

                    <input type="submit" value="Search" />
                </form>
            </div>
            <div>
                <ul>
                    {listComponents}
                </ul>
                { page ? <div className="page-buttons">
                    { (page > 1) ? <button onClick={() => changePage((pageNumber) => pageNumber-1)}>Previous</button> : null}
                    <label>Page {page} </label>
                    <button onClick={() => changePage((pageNumber) => pageNumber+1)}>Next</button>
                </div>: null}
            </div>

        </div>
        
    );
} 

export default Search