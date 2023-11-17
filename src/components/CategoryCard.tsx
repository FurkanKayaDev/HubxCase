import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  screenWidth,
  screenHeight,
  fonts,
  fontSizes,
} from '../constants/constants';

const CategoryCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        source={{uri: item.image.url}}
        resizeMode="contain"
        style={styles.cardImage}
        imageStyle={{borderRadius: 10}}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.2,
    marginVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfffd',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImage: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.2,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
  },
  cardTextContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  cardTitle: {
    width: '80%',
    fontFamily: fonts.Rubik,
    fontWeight: '700',
    fontSize: fontSizes.h12,
    color: 'black',
  },
});
