import BookGrid from "../BookGrid/BookGrid";
import AddToLibrary from "../../molecules/BookCard/AddToLibrary/AddToLibrary";
import MyLibrary from "../../atoms/MyLibrary/MyLibrary";

import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'
import axios from "axios";
import React from 'react'

function Entrepreneurship() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/bookdetailpage");
  };

  const [trending, setTrendingBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:6005/trending").then((res) => {
      const data = res.data;
      console.log(data);
      setTrendingBooks(data);
    });
  }, []);
  const [justAdded, setjustAddedBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:6005/justAdded").then((res) => {
      const data = res.data;
      console.log(data);
      setjustAddedBooks(data);
    });
  }, []);
  const [featured, setfeaturedBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:6005/featured").then((res) => {
      const data = res.data;
      console.log(data);
      setfeaturedBooks(data);
    });
  }, []);


  return (
  
  <div>
      <MyLibrary>Trending Blinks</MyLibrary>
      <BookGrid
        bookList={trending}
        btn={<AddToLibrary handleClick={handleClick} />}
      ></BookGrid>
  
      <MyLibrary>Just added</MyLibrary>
      <BookGrid
        bookList={justAdded}
        btn={<AddToLibrary handleClick={handleClick} />}
      ></BookGrid>
      <MyLibrary>Featured</MyLibrary>
      <BookGrid
        bookList={featured}
        btn={<AddToLibrary handleClick={handleClick} />}
      ></BookGrid>
    </div>
  );
}
export default Entrepreneurship;
