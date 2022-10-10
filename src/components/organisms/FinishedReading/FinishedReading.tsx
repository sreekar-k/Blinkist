import BookGrid from "../BookGrid/BookGrid"
import axios from "axios"
import { ReadAgain } from '../../molecules/ReadAgainButton/ReadAgain'
import React,{useState,useEffect} from 'react'


export interface ICurrentlyFinishedGridProps {}

export default function FinishedReading(
    _props:ICurrentlyFinishedGridProps
)
{

    const [finishedReading,setFinishedReading] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:6005/finishedbooks')
        .then( (res) =>{
            const data = res.data;
            setFinishedReading(data)
        })
    },[])

    const handleClick = async (item: string) => {
        const reaminingBooks = finishedReading.filter((reading: any) => {
          return reading.title !== item;
        });
        setFinishedReading(reaminingBooks);
        const targetBook: any = finishedReading.find((reading: any) => {
          return reading.title === item;
        });
        await axios
          .delete(`http://localhost:6005/finishedBooks/${targetBook.id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
    
        await axios
          .post("http://localhost:6005/books", targetBook)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <BookGrid
          bookList={finishedReading}
          btn={<ReadAgain id="" handleClick={handleClick} />}
        ></BookGrid>
      )

    
}


