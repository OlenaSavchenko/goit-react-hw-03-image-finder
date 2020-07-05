import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  };

  state = {
    showModal: false,
    description: '',
    largeImage: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showModal = event => {
    event.preventDefault();
    const { href, dataset } = event.currentTarget;
    this.setState({
      description: dataset.attr,
      largeImage: href,
    });
    this.toggleModal();
  };

  closeModal = () => {
    this.setState({
      description: '',
      largeImage: '',
    });
    this.toggleModal();
  };
  render() {
    const { images } = this.props;
    const { showModal, description, largeImage } = this.state;
    return (
      <>
        {showModal && (
          <Modal
            url={largeImage}
            description={description}
            onCloseModal={this.closeModal}
          />
        )}
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                url={webformatURL}
                largeImageUrl={largeImageURL}
                description={tags}
                onClick={this.showModal}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
