import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};


export default Header;
