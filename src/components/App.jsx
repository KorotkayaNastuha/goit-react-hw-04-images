import React from "react";
import { SearchBar } from "./Searchbar/Searchbar";
// import { fetchImages } from "./fetchImages";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import css from './App.module.css';
import { Modal } from "./Modal/Modal";
import { Dna } from 'react-loader-spinner';
import { Button } from "./Button/Button";
import { useState } from "react";
import { useEffect } from "react";


export function App () {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(null);

const handleSearch = (query) => {
    setQuery( query );
    setPage(1)
}
  useEffect(() => {
    if (query === '') {
      return
    }
    setLoading(true);
    fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=31282203-7ea8db37884084c288d3f697d&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      }).then(images => {
        if (page === 1) {
          setImages([...images.hits])
          return;
        }
        setImages(prev => [...prev, ...images.hits]);
      })
      .catch(error => setError(error))
      .finally(() => { setLoading(false); });
  }, [page, query]);
  
const showModal = () => {
  setModal(prev => !prev)
  }
 const getIndex = (index) => {
  setIndex(index)
  }
  if (error) {
  console.log(error)
}
 return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSearch}/>
      <ImageGallery >
        {images.map((image, index) => {
          return < ImageGalleryItem onClick={showModal} getIndex={getIndex} key={image.id} index={index} image={image.webformatURL} tags={image.tags}  />
        })}
      </ImageGallery>
      
      {loading && <Dna
          visible={true}
          height="160"
          width="160"
          ariaLabel="dna-loading"
          wrapperStyle={{justifycontent:'center', margin:'auto'}}
          wrapperClass="dna-wrapper"
        />}
      {images.length >= 12 && <Button onClick={()=>{setPage(prevPage => prevPage + 1) }} />}
      {modal && <Modal onClose={showModal}><img src={images[index].largeImageURL} alt={images[index].tags}/></Modal>}
    
    </div>
  );
}

  

