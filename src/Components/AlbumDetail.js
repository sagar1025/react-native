import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//we can destructure the props "album" by typeing { album } in the argument list
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerContentStyle, imageStyle, imageViewStyle, headerTextStyle, albumImage  } = styles;

  return (
    <Card>
      <CardSection>

        <View style={imageViewStyle}>
        { /*
          height and width must be specifed for all Image tags
          */
        }
          <Image source={{uri: thumbnail_image}} style={ imageStyle } />
        </View>
        <View style={ headerContentStyle }>
          <Text style={headerTextStyle}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>

      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={ albumImage } />
      </CardSection>
      {
        /* on press prop here is different from the onPress event. */
      }
      <CardSection>
        <Button onPress={ () => Linking.openURL(url) } >
          Buy <Text>{ title } Now!</Text>
        </Button>
      </CardSection>

    </Card>
  );
}


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    width: 50,
    height: 50
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignitems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  albumImage: {
    height: 350,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
