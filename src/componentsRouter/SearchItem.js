import { useNavigate } from "react-router-dom";

const SearchItem = ({ pieceArt, chooseArtWork, index }) => {

    let navigate = useNavigate()

    const handleOnClick =() =>{
        chooseArtWork(pieceArt, index)
        navigate(`/display/${index}`)

    }
    return (
        <>
            <li onClick={handleOnClick}>
            <h3>{pieceArt.title}</h3>
            <p>{pieceArt.thumbnail.alt_text}</p>
            </li>
        </>
    );
};

export default SearchItem;