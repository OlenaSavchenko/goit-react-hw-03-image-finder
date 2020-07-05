import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ url, largeImageUrl, description, onClick }) => (
  <li className="ImageGalleryItem">
    <a href={largeImageUrl} data-attr={description} onClick={onClick}>
      <img src={url} alt={description} className="ImageGalleryItem-image" />
    </a>
  </li>
);

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
