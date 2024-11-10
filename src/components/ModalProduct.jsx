import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { getContactUsAction } from "../util/configuration";
import { useTranslation } from 'react-i18next';
import { typeModal } from '../util/configuration';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export const FullScreenDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const [currentTypeModal] = React.useState(typeModal[props?.data.type]);
  const { t } = useTranslation();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ImageListItem key={props.data ? props.data.img : ''} onClick={handleClickOpen} >
        <img
          src={`${props.data ? props.data.img : ''}?w=${currentTypeModal.large.width}&fit=crop&auto=format`}
          alt={props.data ? props.data.title : ''}
          loading="lazy"
          
        />
         <label className='modal_label_card_image'>Bebida</label>
      </ImageListItem>
      <Dialog
        className='modal_container_general'
        maxWidth={props?.data.type === 'HORIZONTAL' ? 'md' : 'lg'}
        open={open}
        onClose={handleClose}
      >
        <IconButton
          className='icon_button_close'
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[props?.data.type === 'HORIZONTAL' ? 900 : 100],
          })}
        >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid size={props?.data.type === 'HORIZONTAL' ? { xs: 12, md: 12, sm: 12 } : { sm: 7, xs: 12, md: 6 }} >
            <Card className='imagen-container'>
              <CardMedia
                component="img"
                height={currentTypeModal ? currentTypeModal.large.heigth : '478'}
                image={`${props.data ? props.data.img : ''}`}
                alt="green iguana"
              />
              <h4 className='modal_text_card_image'>#CaféMustache</h4>
            </Card>

          </Grid>
          <Grid size={props?.data.type === 'HORIZONTAL' ? { xs: 12, md: 12, sm: 12 } : { sm: 5, xs: 12, md: 6 }}>
            <div className='div_container_modal_description'>
              <div className='modal_container_title_descripcion'>
                <Typography sx={{ ml: 2, flex: 1 }} whiteSpace={"wrap"} textAlign={"center"} variant="h2" component="div">
                  {`${props.data ? t(props.data.name + '.title') : ''}`}
                </Typography>
                <Typography sx={{ ml: 2, flex: 1 }} whiteSpace={"wrap"} textAlign={"center"} variant="p">
                  {`${props.data ? t(props.data.name + '.description') : ''}`}
                </Typography>
                <div className='div-container-btnModal'>
                  <Button href={getContactUsAction}>{t('contactUsDeliveryButtonText')}</Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
export default FullScreenDialog;