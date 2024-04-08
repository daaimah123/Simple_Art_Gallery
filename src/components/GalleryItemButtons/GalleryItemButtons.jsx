import './GalleryItemButtons.css';
import '@fontsource/roboto';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

function GalleryItemButtons({ galleryItem, updateLikeData, updateUnlikeData, deleteData }) {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5">
        {galleryItem.likes > 0 ? (
          <Box color="text.primary" component="span" m={1}>
            {' '}
            Love this!{' '}
          </Box>
        ) : (
          <Box color="text.primary" component="span" m={1}>
            {' '}
            Nobody likes this yet. :({' '}
          </Box>
        )}
      </Typography>

      <Typography variant="subtitle1">Likes: {galleryItem.likes}</Typography>
      <ButtonGroup>
      <Button
          variant="contained"
          color="tertiary"
          endIcon={<ThumbDownAltIcon />}
          onClick={() => {
            updateUnlikeData(galleryItem.id);
          }}
        >
          Unlike
        </Button>

        <Button
          variant="contained"
          color="primary"
          endIcon={<ThumbUpAltIcon />}
          onClick={() => {
            updateLikeData(galleryItem.id);
          }}
        >
          Like
        </Button>

        <Button
          variant="contained"
          color="secondary"
          endIcon={<DeleteForeverIcon />}
          onClick={() => {
            deleteData(galleryItem.id);
          }}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default GalleryItemButtons;