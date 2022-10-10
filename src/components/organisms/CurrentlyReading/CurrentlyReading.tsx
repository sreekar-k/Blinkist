import axios from "axios"
import BookGrid from "../BookGrid/BookGrid"
import { Finished } from '../../molecules/FinishedButton/Finished'


import React,{useState,useEffect} from 'react'

export interface ICurrentlyReadingGridProps {}

export default function CurrentlyReading(
    _props:ICurrentlyReadingGridProps
)

{
    const [currentReading,setCurrentReading] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:6005/books')
        .then((res)=>{
            const data = res.data;
            setCurrentReading(data)
        })
    },[])
    const handleClick = async (item: string) => {
        const reaminingBooks = currentReading.filter((reading: any) => {
          return reading.title !== item;
        });

        setCurrentReading(reaminingBooks);

        const targetBook: any = currentReading.find((reading: any) => {
          return reading.title === item;
        });

        await axios.delete(`http://localhost:6005/books/${targetBook.id}`).then((res) => {
          console.log(res);
          console.log(res.data);
        });
    
        await   axios.post("http://localhost:6005/finishedbooks", targetBook)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    

    return ( <BookGrid
        bookList={currentReading}
        btn={<Finished id="" handleClick={handleClick} />}
      />)
     
}


