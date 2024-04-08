import React, { useEffect, useState } from 'react';
import './App.css';
import '@fontsource/roboto';
import axios from 'axios';
import swal from 'sweetalert';

import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

function App() {
  useEffect(() => {
    getData();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  function getData() {
    /*
      GET ROUTE to /gallery
    */
    axios
      .get('/gallery', (req, res) => {
        console.log('CLIENT - GET inside getData() ');
      })
      .then((response) => {
        console.log(' .then CLIENT - GET - got a response', response);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log('.catch CLIENT - GET - got an error', error);
      });
  } 

  function addData(imagePath, imageDescription) {
    axios
      .post('/gallery', { imagePath, imageDescription }, (req, res) => {
        console.log('CLIENT - POST inside addData() ');
      })
      .then((response) => {
        console.log(' .then CLIENT - POST - got a response', response);
        getData();
      })
      .catch((error) => {
        console.log('.catch CLIENT - GET - got an error', error);
      });
  }

  function updateLikeData(galleryItemId) {
    /*
      PUT ROUTE to /gallery/like/id
    */
    axios
      .put(`/gallery/like/${galleryItemId}`, (req, res) => {
        console.log('CLIENT - PUT inside updateLikeData() ');
      })
      .then((response) => {
        console.log(' .then CLIENT - PUT - got a response', response);
        getData();
      })
      .catch((error) => {
        console.log(' .catch CLIENT - PUT - got an error ', error);
      });
  } 

  function updateUnlikeData(galleryItemId) {
    /*
      PUT ROUTE to /gallery/unlike/id
    */
    axios
      .put(`/gallery/unlike/${galleryItemId}`, (req, res) => {
        console.log('CLIENT - PUT inside updateUnlikeData() ');
      })
      .then((response) => {
        console.log(' .then CLIENT - PUT - got a response', response);
        getData();
      })
      .catch((error) => {
        console.log(' .catch CLIENT - PUT - got an error ', error);
      });
  } 

  function showDesc(galleryItemId, showDesc) {
    /*
      PUT ROUTE TO /gallery/show-desc/id
    */
    axios
      .put(
        `/gallery/show-desc/${galleryItemId}`,
        { show_desc: showDesc },
        (req, res) => {
          console.log('CLIENT - PUT inside showDesc() ');
        }
      )
      .then((response) => {
        console.log(' .then CLIENT - PUT - got a response', response);
        getData();
      })
      .catch((error) => {
        console.log(' .catch CLIENT - PUT - got an error ', error);
      });
  }

  function deleteData(galleryItemId) {
    /*
      DELETE ROUTE to /gallery
    */
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this image',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`/gallery/${galleryItemId}`, (req, res) => {
            console.log('CLIENT - DELETE inside deleteData() ');
          })
          .then((response) => {
            console.log(' .then CLIENT - DELETE - got a response', response);
            getData();
          })
          .catch((error) => {
            console.log(' .catch CLIENT - DELETE - got an error ', error);
          });
      }
    });
  } 

  return (
    <div className="App">
      <Header />
      <GalleryForm addData={addData} />

      <GalleryList
        galleryList={galleryList}
        updateLikeData={updateLikeData}
        updateUnlikeData={updateUnlikeData}
        deleteData={deleteData}
        showDesc={showDesc}
      />
    </div>
  );
}

export default App;