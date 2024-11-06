import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { getContactUsAction } from "../util/configuration";
import { useTranslation } from 'react-i18next';
import { typeModal } from '../util/configuration'

export const FullScreenDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const [currentTypeModal, setCurrentTypeModal] = React.useState(typeModal[props?.data.type]);
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
          srcSet={`${props.data ? props.data.img : ''}?w=${currentTypeModal.small.width}&fit=crop&auto=format&dpr=2 2x`}
          src={`${props.data ? props.data.img : ''}?w=${currentTypeModal.small.width}&fit=crop&auto=format`}
          alt={props.data ? props.data.title : ''}
          loading="lazy"
        />
      </ImageListItem>
      <Dialog
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        <Container >
          <br />
          <br />
          <Grid container spacing={2} justifyContent={'center'}>
            <Grid size={props?.data.type === 'HORIZONTAL'? { xs: 12, md: 9, sm: 10 } : { sm: 6, xs: 9, md: 6} } >
              <img
                srcSet={`${props.data ? props.data.img : ''}`}
                src={`${props.data ? props.data.img : ''}`}
                alt={props.data ? t(props.data.name + '.title') : ''}
                loading="lazy"
                style={{maxWidth: 100 + '%', maxHeight: 550 + 'px'}}
                
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h1" component="div">
                {`${props.data ? t(props.data.name + '.title') : ''}`}
              </Typography>
              <Typography sx={{ ml: 2, flex: 1 }} variant="p" component="div">
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
          <br />
          <br />
        </Container>
      </Dialog>
    </>
  );
}
export default FullScreenDialog;