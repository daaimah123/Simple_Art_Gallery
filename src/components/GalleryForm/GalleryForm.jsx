import './GalleryForm.css';
import '@fontsource/roboto';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

function GalleryForm({ addData }) {
  const [imagePath, setImagePath] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  return (
    <FormControl
      onSubmit={() => {
        {
          e.preventDefault(); 
          addData(imagePath, imageDescription);
        }
      }}
    >
      <TextField
        placeholder="Image URL"
        inputProps={{ 'aria-label': 'description' }}
        value={imagePath}
        onChange={(event) => {
          setImagePath(event.target.value);
        }}
      ></TextField>
      <TextField
        placeholder="Image Description"
        inputProps={{ 'aria-label': 'description' }}
        value={imageDescription}
        onChange={(event) => {
          setImageDescription(event.target.value);
        }}
      ></TextField>
      <Button variant="contained" color="primary" >
        Submit
      </Button>
    </FormControl>
  );
}

export default GalleryForm;