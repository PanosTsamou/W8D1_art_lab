import ListItem from "./ListItem";
import React from 'react';


const SearchList = ({ arts, clickedArtWork, changePage, page}) => {


    const listComponents = arts.map((pieceArt) => {

        return (
            <ListItem key={pieceArt.id} pieceArt={pieceArt} clickedArtWork={clickedArtWork}/>
        );
    });

    
    return (
        <div>
            <ul>
                {listComponents}
            </ul>
            <div className="page-buttons">
                { (page > 1) ? <button onClick={() => changePage((pageNumber) => pageNumber-1)}>Previous</button> : null}
                <label>Page {page} </label>
                <button onClick={() => changePage((pageNumber) => pageNumber+1)}>Next</button>
            </div>
        </div>
    );
};

export default SearchList;