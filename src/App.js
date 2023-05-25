import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './componentsRouter/Home'
import ErrorPage from './componentsRouter/ErrorPage';
import { BrowserRouter as Router, Routes, Route, redirect, useNavigate, Link } from 'react-router-dom';
import ArtContainer from "./containers/ArtContainer";
import Search from './componentsRouter/Search';
import Display from './componentsRouter/Display';

function App() {
  const [arts, setArts] = useState([])
  const [clickedArt, setClickArt] = useState(null)
  const [clickedArtInfo, setClickedArtInfo] = useState(null)
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")
  const [index, setIndex] = useState(0)
  const [infoUrl, setInfoUrl] = useState("")
  const [counter, setCounter] =useState(0)


 
  useEffect(() =>{
    if(page !== 0){
      if(!category){

        getArtFromHome(query, page)
      }else
        getArtFromSearch(query, category, page)
    }

},[page, category, query])

  useEffect(() => {
    if(counter){
      const item = arts[index]
      setClickArt(item)
      getArtWorkInfo(item.api_link);
      console.log(clickedArtInfo.title)
    }

  },[counter]);

  useEffect(() => {

     if (infoUrl){
      getArtWorkInfo(infoUrl);
    }

  },[infoUrl]);


  const homePageSubmit = (query, page) =>{
    setQuery(query)
    setPage(page)
  };

  const searchPageSubmit = (query, category, page) => {
    setCategory(category)
    setQuery(query)
    setPage(page)

  };

 

  const getArtFromHome = function (yourSearch, page) {

    const url = `https://api.artic.edu/api/v1/artworks/search?q=${yourSearch}&page=${page}&limit=10`
    fetch(url)
        .then(res => res.json())
        .then(artsData => setArts(artsData.data))
}
const getArtFromSearch = function (yourSearch, category, page) {

  console.log('print')
  const url = `https://api.artic.edu/api/v1/artworks/search?${category}=${yourSearch}&page=${page}&limit=10`
  fetch(url)
      .then(res => res.json())
      .then(artsData => setArts(artsData.data))
}

const getArtWorkInfo = function (url) {
  fetch(url)
      .then(res => res.json())
      .then(artsData => setClickedArtInfo(artsData.data))
  setInfoUrl("")
}

const chooseArtWork = (artWork, index) => {
  setCounter(0)
  setIndex(index)
  setClickArt(artWork);
  setInfoUrl(artWork.api_link)
};

const changePage = (pageChanged) => {
  setPage(pageChanged)
} 

const updateIndex = (index) => {
  setIndex(index)
  setCounter(counter+1)
}





  return (
    <div className="App">
      <Router>
      <Link to="/"> <h1 className='header'>WORLD GALLERY</h1></Link>
        <Routes>
          <Route path = "/" element = {< Home homePageSubmit = {homePageSubmit}/>}/>
          <Route path = "/search" element = {< Search searchPageSubmit = { searchPageSubmit } arts = { arts } page = { page } chooseArtWork = { chooseArtWork }  changePage = { changePage } previousQuery = { query }/>}/>
          <Route path = "/display/:index" element = {clickedArt && clickedArtInfo ? < Display clickedArt = { clickedArt } clickedArtInfo = { clickedArtInfo }  updateIndex = { updateIndex } length = {arts.length}/> : null}/>
          <Route path = "*" element = {< ErrorPage />}/>
        </Routes>
      </Router>
     {/* <ArtContainer /> */}
    </div>
  );
}

export default App;
