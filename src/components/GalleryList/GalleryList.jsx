import '@fontsource/roboto';
import GalleryItem from '../GalleryItem/GalleryItem';

import Container from '@material-ui/core/Container';

function GalleryList({ galleryList, updateLikeData, updateUnlikeData, deleteData, showDesc }) { 
    return (
    <Container maxWidth="sm">
      {galleryList.map((galleryItem) => {
        return (
          <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem}
            updateLikeData={updateLikeData}
            updateUnlikeData={updateUnlikeData}
            deleteData={deleteData}
            showDesc={showDesc}
          />
        ); 
      })}
    </Container>
  );
} 

export default GalleryList;