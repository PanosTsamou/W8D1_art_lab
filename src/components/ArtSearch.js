import { useState } from "react"

const ArtSearch = ({ updateInitialSearch}) => {

    const [query, setQuery] = useState("");

    const [category, setCategory] = useState("")

    const handleSelectChange = (event) => {
        setCategory(event.target.value)
    }

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // newSearch(query);
        if (query && category) {
            updateInitialSearch(query.toLowerCase(), category, 1)
            // setPage(1)
        }

        // setQuery("");
    };



    return (
        <div className="search">
            <h2>Search for an art work</h2>
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
    );
};

export default ArtSearch;