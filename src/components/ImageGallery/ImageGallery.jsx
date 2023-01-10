import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component{
    render() {
        
        return <ul className={css.imageGallery}>
           {this.props.children}
  
</ul>
    }
}
ImageGallery.propTypes = {
children:PropTypes.array,
}