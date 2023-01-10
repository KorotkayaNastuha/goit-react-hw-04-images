import React, { Component } from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';




export class Modal extends Component  {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  handleModalClose = (event) => {
      if (event.currentTarget === event.target) {
          this.props.onClose();
 }
    };
    handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
    render() {
        return <div className={css.overlay} onClick={this.handleModalClose}>
            <div className={css.modal}>{this.props.children}</div>
    
  </div>
    }
 
};

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.element,
    
};






