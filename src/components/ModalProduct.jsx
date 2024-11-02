import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { getContactUsAction } from "../util/configuration";
import { useTranslation } from 'react-i18next';

export const FullScreenDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ImageListItem key={props.data ? props.data.img : ''} onClick={handleClickOpen}>
        <img
          srcSet={`${props.data ? props.data.img : ''}?w=${props.data.width.small}&fit=crop&auto=format&dpr=2 2x`}
          src={`${props.data ? props.data.img : ''}?w=${props.data.width.small}&fit=crop&auto=format`}
          alt={props.data ? props.data.title : ''}
          loading="lazy"
        />
      </ImageListItem>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

          </Toolbar>
        </AppBar>

        <Container >
          <br />
          <br />
          <br />
          <Grid container spacing={2} justifyContent={'center'}>
            <Grid size={{ xs: 9, md: 6 }} >
              <img
                srcSet={`${props.data ? props.data.img : ''}?w=${props.data.width.large}&fit=crop&auto=format&dpr=2 2x`}
                src={`${props.data ? props.data.img : ''}?w=${props.data.width.large}&fit=crop&auto=format`}
                alt={props.data ? t(props.data.name + '.title') : ''}
                loading="lazy"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
                {`${props.data ? t(props.data.name + '.title') : ''}`}
              </Typography>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {`${props.data ? t(props.data.name + '.description') : ''}`}
              </Typography>
              <br />
              <a
                href={getContactUsAction}
                className="btn btn-custom btn-lg page-scroll"
              >
                {t('contactUsDeliveryButtonText')}
              </a>
            </Grid>
          </Grid>
        </Container>
      </Dialog>
    </>
  );
}
export default FullScreenDialog;