import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component{
    render() {
        const { image, onClick, tags, index } = this.props;
        return <li className={css.imageGalleryItem} id={image.id} onClick={onClick}>
            <img onClick= {() => {this.props.getIndex(index)}} src={image} alt={tags}  className={css.imageGalleryItemImage} />
</li>
    }
}
ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    getIndex: PropTypes.func,
    tags: PropTypes.string,
    index: PropTypes.number,
}