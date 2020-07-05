import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Error from './components/Error';
import imageApi from './services/image-api';
import './App.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    currentPage: 1,
    empty: false,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, currentPage } = this.state;
    const options = {
      query,
      currentPage,
    };

    this.setState({ isLoading: true });
    return imageApi(options)
      .then(images => {
        if (images.length === 0) this.setState({ empty: true });

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));

        this.scrollImagesList();
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollImagesList = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onChangeQuery = query => {
    this.setState({
      query: query,
      images: [],
      currentPage: 1,
      empty: false,
      error: null,
    });
  };

  render() {
    const { images, isLoading, error, empty } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <Error />}
        {empty && <Error />}
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}
      </>
    );
  }
}

export default App;
