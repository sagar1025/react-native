import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //http://rallycoding.herokuapp.com/api/music_albums
//for a class based component, it has to return exactly 1 method, i.e a render method.
//componentwillmounth method is a lifecycle method that is automcatically called when this (albumlist)
// component is about to be rendered.
  state = { albums: [] };
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then((respJson) => {
      this.setState({ albums: respJson });
    });
  }

  //helper function

  //key is a unique property of an element that is unique.
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
    );
  }
}

export default AlbumList;
