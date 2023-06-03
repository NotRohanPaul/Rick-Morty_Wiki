import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./Components/Filters/Filters";
import Cards from "./Components/Cards/Cards";
import Pagination from "./Components/Pagination/Pagination";
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";
import './App.css'
import CardDetails from "./Components/Cards/CardDetails";

function App() {
  return (<Router>
    <div className="App">
      <Navbar />
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardDetails />} />

      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episodes/:id" element={<CardDetails />} />

      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/:id" element={<CardDetails />} />
    </Routes >
  </Router>)
}

const Home = () => {
  let [pageNum, setpageNum] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);


  console.log(api);

  
  return (
    <div className="App">

      <h1 className="text-center mb-4">Characters</h1>

      <Search setpageNum={setpageNum} setSearch={setSearch} />


      <div className="container">
        <div className="row">
          <Filters setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} setpageNum={setpageNum} />
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} setpageNum={setpageNum} pageNum={pageNum} />
    </div>
  );
}

export default App;
