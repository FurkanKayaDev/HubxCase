import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {
  screenWidth,
  fonts,
  fontSizes,
  screenScale,
} from '../constants/constants';

interface Props {
  item: {
    title: string;
    image_uri: string;
  };
}

const QuestionCard = ({item}: Props) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{uri: item.image_uri}}
        style={styles.cardImage}
        imageStyle={{borderRadius: 10}}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: screenWidth * 0.64,
    height: screenScale * 360,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
  },
  cardTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '45%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  cardTitle: {
    fontFamily: fonts.Rubik,
    fontWeight: '400',
    fontSize: fontSizes.h12,
    color: 'white',
  },
});
