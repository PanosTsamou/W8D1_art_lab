import React, { useEffect, useState } from 'react';
import ArtSearch from '../components/ArtSearch';
import SearchList from '../components/SearchList';
import ArtDisplay from '../components/ArtDisplay';

const ArtContainer = () => {

    const [arts, setArts] = useState([])
    const [clickedArt, setClickArt] = useState(null)
    const [clickedArtInfo, setClickedArtInfo] = useState(null)
    const [page, setPage] = useState(0)
    const [query, setQuery] = useState("")
    const [category, setCategory] = useState("")
    

    useEffect(() =>{
        if(page !== 0){
            getArt(query, category, page)
        }
    
    },[page])

    const updateInitialSearch = (query, category, page) =>{
        setCategory(category);
        setQuery(query)
        setPage(page)

    }

    const getArtWorkInfo = function (clickedArtUrl) {
        fetch(clickedArtUrl)
            .then(res => res.json())
            .then(artsData => setClickedArtInfo(artsData.data))
    }

    const clickedArtWork = (artWork) => {
        setClickArt(artWork);
        getArtWorkInfo(artWork.api_link)
    };

   
    const getArt = function (yourSearch, category, pageInit) {
        // setArts([])
        // setCategory(category)
        // setQuery(yourSearch)
        // setPage(pageInit)
        console.log('print')
        const url = `https://api.artic.edu/api/v1/artworks/search?${category}=${yourSearch}&page=${pageInit}&limit=10`
        fetch(url)
            .then(res => res.json())
            .then(artsData => setArts(artsData.data))
    }

    const changePage = (pageChanged) => {
        setPage(pageChanged)
    } 

    return (
        <>
            <ArtSearch  updateInitialSearch ={updateInitialSearch} />
            {arts.length === 0 ? null  :  <SearchList arts={arts} clickedArtWork={clickedArtWork} changePage={changePage} page={page}/>}
            
            {clickedArt && clickedArtInfo ? <ArtDisplay artWork={clickedArt} artWorkInfo={clickedArtInfo} /> : null}

        </>
    );

};

export default ArtContainer;

 // `https://api.artic.edu/api/v1/artworks/search?q=${yourSearch}?page=1&limit=100`
    // https://api.artic.edu/api/v1/artworks/search?query[term][artist_title]=${yourSearch}&limit=100
    // const url = `https://api.artic.edu/api/v1/artworks/search?${category}=${yourSearch}&page=2&limit=10`
