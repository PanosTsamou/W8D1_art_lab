import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({homePageSubmit}) =>{
    const [query, setQuery]= useState("")
    const navigate = useNavigate()

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        homePageSubmit(query, 1)
        setQuery("")
        navigate('/search')
    }

    const handleAdvanceSearchClick = () =>{
        navigate('/search')
    }

    return(
        <div>
            <form onSubmit={handleSubmit} name = "search" >
                <input onChange={handleChange} value = {query} name = "query"/>
                <input type='submit' value='Search'/>
            </form>
            <p onClick={handleAdvanceSearchClick}>Advance Search</p>
        </div>
    );
} 

export default Home