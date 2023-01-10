import React from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { Component } from "react";
// import { fetchImages } from "./fetchImages";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import css from './App.module.css';
import { Modal } from "./Modal/Modal";
import { Dna } from 'react-loader-spinner';
import { Button } from "./Button/Button";


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    error: null,
    loading: false,
    modal: false,
    index: null,
     
  };
handleSearch = (query) => {
    this.setState({ query });
    this.setState({page: 1})
  }
componentDidUpdate = (prevProps, prevState) => {
  if(prevState.query !== this.state.query){
  this.setState({ loading: true });
  
     fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=31282203-7ea8db37884084c288d3f697d&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
        }).then(images => this.setState({ images: images.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => { this.setState({ loading: false }); this.setState(prevState => ({ page: prevState.page + 1 })) });
      
    }
  }
showModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }
 getIndex = (index) => {
  this.setState({index})
  }

  handleClickButton = () => {
    this.setState({ loading: true });
  
     fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=31282203-7ea8db37884084c288d3f697d&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
        }).then(images => this.setState({ images: [...this.state.images, ...images.hits] }))
        .catch(error => this.setState({ error }))
        .finally(() => { this.setState({ loading: false }); this.setState(prevState => ({ page: prevState.page + 1 })) });
      
    }

  render() {
    const { images, index, modal, loading } = this.state;
    
  return (
    <div className={css.App}>
   
      
      <SearchBar onSubmit={this.handleSearch}/>
      <ImageGallery >
        {images.map((image, index) => {
          return < ImageGalleryItem onClick={this.showModal} getIndex={ this.getIndex} key={image.id} index={index} image={image.webformatURL} tags={image.tags}  />
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
      {images.length >= 12 && <Button onClick={this.handleClickButton} />}
      {modal && <Modal onClose={this.showModal}><img src={images[index].largeImageURL} alt={images[index].tags}/></Modal>}
    
    </div>
  );
}
}
  

