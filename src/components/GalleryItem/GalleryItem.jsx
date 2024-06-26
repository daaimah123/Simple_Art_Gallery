import './GalleryItem.css';
import '@fontsource/roboto';
import GalleryItemButtons from '../GalleryItemButtons/GalleryItemButtons';

function GalleryItem({ galleryItem, updateLikeData, updateUnlikeData, deleteData, showDesc }) {
  /* 
  Expects 
  galleryItem
              id: unique key
              path: string
              description: string
              likes: integer
              show_desc: true/false
  */

  return (
    <div className="img-container">
      {galleryItem.show_desc ? (
        <img
          className="gallery-img"
          id={galleryItem.id}
          src={galleryItem.path}
          alt={galleryItem.description}
          onClick={() => {
            {
              showDesc(galleryItem.id, galleryItem.show_desc);
            }
          }}
        />
      ) : (
        <div
          className="gallery-desc"
          onClick={() => {
            showDesc(galleryItem.id, galleryItem.show_desc);
          }}
        >
          {galleryItem.artist}
        </div>
      )}
      {galleryItem.description}
      <GalleryItemButtons
        galleryItem={galleryItem}
        updateLikeData={updateLikeData}
        updateUnlikeData={updateUnlikeData}
        deleteData={deleteData}
      />
    </div>
  );
}

export default GalleryItem;