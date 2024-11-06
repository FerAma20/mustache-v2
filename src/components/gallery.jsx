import * as React from 'react';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ItemsData from '../assets/galleryData.json';
import ModalProduct from './ModalProduct';
import Grid from '@mui/material/Grid2';


export const Gallery = (props) => {
  const [cols, setCols] = useState(3);
  const updateCols = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 900) {
      setCols(3);
    } else if (windowWidth >= 600) {
      setCols(2);
    } else {
      setCols(1);
    }
  };
  useEffect(() => {
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => {
      window.removeEventListener('resize', updateCols);
    };
  }, []);
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="glow-text-dark">{props.data ? props.data.title : "Loading"}</h2>
          <p>
            {props.data ? props.data.description : "Loading"}
          </p>
        </div>
        <div className="row">
          <Grid container >
            <Grid size={{ xs: 12, md: 12 }}>
              <ImageList variant="masonry" cols={cols} gap={8} >
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