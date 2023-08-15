
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as BooksAPI from "../BooksAPI"
import { useState,useEffect } from "react";
import { useParams } from "react-router"
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
export default function BookDetail() {
  const params = useParams();
  const [bookDetail, setBookDetail] = useState({});
  useEffect(() => {
    BooksAPI.get(`${params.id}`).then(booksFromApi => {
      setBookDetail(booksFromApi);
    });
   
  }, []);
  
 
  console.log(bookDetail);

 return(   <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {bookDetail.subtitle}

      </Typography>
      <Typography variant="h5" component="div">
      {bookDetail.title}
      </Typography>
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${bookDetail.imageLinks && bookDetail.imageLinks.thumbnail}}")`
          
        }}
      ></div>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {bookDetail.categories}

      </Typography>
      <Typography variant="body2">
      {bookDetail.description}

        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
   
  </Card>)
}


