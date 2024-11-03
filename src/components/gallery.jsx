import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ItemsData from '../assets/galleryData.json'
import ModalProduct from './ModalProduct'

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
    <div className="container">
      <div className="section-title">
        <h2 className="glow-text-dark">{props.data? props.data.title : "Loading"}</h2>
        <p>    
          {props.data? props.data.description: "Loading"}
        </p>
      </div>
      <div className="row">
      <Box >
      <ImageList variant="masonry" cols={3} gap={8}>
        {ItemsData.itemData.map((item) => (
          <ModalProduct data={item}></ModalProduct>
         
        ))}
      </ImageList>
    </Box>
      </div>
    </div>
  </div>   
  );
}