import { useNavigate, useParams } from "react-router-dom";

const Display = ({ clickedArt, clickedArtInfo, updateIndex, length}) =>{
    let {index} = useParams() 
    let navigate = useNavigate()
    
    const colour = clickedArtInfo.color; 
    let  styleString;
    let complementaryColour;

    if (colour && colour.h && colour.s && colour.l  && colour.s < 20 && colour.l < 20) {
        styleString =`hsl(${colour.h} ${colour.s+30}% ${colour.l+30}%)`
        complementaryColour = `hsl(${colour.h+180} ${colour.s+60}% ${colour.l+60}%)`
    }
    else if (colour && colour.h && colour.s && colour.l  && colour.s < 20) {
        styleString =`hsl(${colour.h} ${colour.s+30}% ${colour.l}%)`
        complementaryColour = `hsl(${colour.h+180} ${colour.s+60}% ${colour.l}%)`
    }
    else if(colour && colour.h && colour.s && colour.l && colour.l < 20){
        styleString =`hsl(${colour.h} ${colour.s}% ${colour.l+30}%)`
        complementaryColour = `hsl(${colour.h+180} ${colour.s}% ${colour.l+60}%)`
    }
    else if(colour && colour.h && colour.s && colour.l ){
        styleString = `hsl(${colour.h} ${colour.s}% ${colour.l}%)`
        complementaryColour = `hsl(${colour.h+180} ${colour.s}% ${colour.l}%)`
    }
    else{
        styleString = "#19A7CE"
        complementaryColour = "#AFD3E2"
    } 
    
    
    

    const handleClick = (event) => {
        if(event.target.value === 'next'){
            index = parseInt(index) +1   
        }else{
            index = parseInt(index) -1  
        }
        updateIndex(index)
        navigate(`/display/${index}`)
    }

    return(
        <article style={{backgroundColor: complementaryColour}}>
            <h1>{clickedArt.title}</h1>
            <div>
                <div style={{backgroundColor: styleString}}>

                    <div>
                        <h3>Style:  {clickedArtInfo.style_title}</h3>
                        <h3>Type:   {clickedArtInfo.artwork_type_title}</h3>
                        <h3>Artist:  {clickedArtInfo.artist_title}</h3>
                        <h3>Started:  {clickedArtInfo.date_start}</h3>
                        {clickedArtInfo.date_start !== clickedArtInfo.date_end ? <h3>Ended:  {clickedArtInfo.date_end}</h3> : null}
                        <h3>Displayed:  {clickedArtInfo.date_display}</h3>
                        <h3>Place of Origin:  {clickedArtInfo.place_of_origin}</h3>
                        <h3>Technique:  {clickedArtInfo.technique_titles[0]}</h3>
                        <h3>Description:  {clickedArtInfo.thumbnail.alt_text}</h3>
                        <h3>Dimensions in cm(h x w x d x D):  {clickedArtInfo.dimensions_detail[0].height_cm} x {clickedArtInfo.dimensions_detail[0].width_cm} x {clickedArtInfo.dimensions_detail[0].depth_cm} x {clickedArtInfo.dimensions_detail[0].diameter_cm}</h3>

                    </div>
                    <img src={`https://www.artic.edu/iiif/2/${clickedArtInfo.image_id}/full/843,/0/default.jpg`} />
                </div>
                { index ? <div className="page-buttons">
                        { index > 0  ? <button onClick= {handleClick} value = 'previous' >Previous</button>: null }
                        {index < length ?<button onClick={handleClick} value = 'next'>Next</button> : null}
                    </div>: null}
            </div>
    </article>
    );
} 

export default Display