import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemsData from '../assets/galleryData.json'

export const Gallery=(props)=> {
  return (
    <div id="portfolio" className="text-center">
    <div className="container">
      <div className="section-title">
        <h2>{props.data.title}</h2>
        <p>    
          {props.data.description}
        </p>
      </div>
      <div className="row">
      <Box >
      <ImageList variant="masonry" cols={3} gap={8}>
        {ItemsData.itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
      </div>
    </div>
  </div>   
  );
}