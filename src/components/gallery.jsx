import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ItemsData from '../assets/galleryData.json';
import ModalProduct from './ModalProduct';
import Grid from '@mui/material/Grid2';

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
    <div className="container">
      <div className="section-title">
        <h2>{props.data? props.data.title : "Loading"}</h2>
        <p>    
          {props.data? props.data.description: "Loading"}
        </p>
      </div>
      <div className="row">
      <Grid container >
  <Grid size={{ xs: 12, md: 12 }}>
  <ImageList variant="masonry"  cols={3} gap={8}>
        {ItemsData.itemData.map((item) => (
          <ModalProduct data={item}></ModalProduct>
         
        ))}
      </ImageList>
  </Grid>
  </Grid>
     
      </div>
    </div>
  </div>   
  );
}