import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export function Modal({ onClose, children }) {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

const handleModalClose = (event) => {
      if (event.currentTarget === event.target) {
          onClose();
 }
    };
 const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  
  return <div className={css.overlay} onClick={handleModalClose}>
            <div className={css.modal}>{children}</div>
    
        </div>
    }
 

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.element,
    
};






