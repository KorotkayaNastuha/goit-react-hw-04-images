import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';

export function ImageGallery ({children}){ 
        return <ul className={css.imageGallery}>
           {children} 
</ul>
    }

ImageGallery.propTypes = {
children:PropTypes.array,
}