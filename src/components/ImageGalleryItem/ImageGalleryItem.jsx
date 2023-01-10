import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export function ImageGalleryItem ({image, onClick, tags, index, getIndex}){
    return <li className={css.imageGalleryItem} id={image.id} onClick={onClick}>
            <img onClick= {() => {getIndex(index)}} src={image} alt={tags}  className={css.imageGalleryItemImage} />
</li>
    }

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    getIndex: PropTypes.func,
    tags: PropTypes.string,
    index: PropTypes.number,
}