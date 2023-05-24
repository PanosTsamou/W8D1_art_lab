
const ArtDisplay = ({ artWork, artWorkInfo }) => {




    return (
        <div>
            <h1>{artWork.title}</h1>
            <div>
                <div>
                    <h3>Style:  {artWorkInfo.style_title}</h3>
                    <h3>Type:   {artWorkInfo.artwork_type_title}</h3>
                    <h3>Artist:  {artWorkInfo.artist_title}</h3>
                    <h3>Started:  {artWorkInfo.date_start}</h3>
                    {artWorkInfo.date_start !== artWorkInfo.date_end ? <h3>Ended:  {artWorkInfo.date_end}</h3> : null}
                    <h3>Displayed:  {artWorkInfo.date_display}</h3>
                    <h3>Place of Origin:  {artWorkInfo.place_of_origin}</h3>
                    <h3>Technique:  {artWorkInfo.technique_titles[0]}</h3>
                    <h3>Description:  {artWorkInfo.thumbnail.alt_text}</h3>
                    <h3>Dimensions in cm(h x w x d x D):  {artWorkInfo.dimensions_detail[0].height_cm} x {artWorkInfo.dimensions_detail[0].width_cm} x {artWorkInfo.dimensions_detail[0].depth_cm} x {artWorkInfo.dimensions_detail[0].diameter_cm}</h3>

                </div>
                <img src={`https://www.artic.edu/iiif/2/${artWorkInfo.image_id}/full/843,/0/default.jpg`} />
            </div>
        </div>
    );
};

export default ArtDisplay;