import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import SecondImage from '../../../assets/images/SecondImage.png';
import SecondBackground from '../../../assets/images/SecondBackground.png';
import Rectangle from '../../../assets/images/Rectangle.png';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import * as Icons from '../../../assets/icons';
import {styles} from './SecondStep.styles';
import {RootStackParamList} from '../../../types/AllType';

const SecondStep = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ImageBackground source={SecondBackground} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Take a photo to
            <Text style={styles.boldTitle}> identify</Text>
          </Text>
          <View style={styles.iconContainer}>
            <Image source={Rectangle} style={styles.rectangle} />
          </View>
          <Text style={styles.title}>the plant!</Text>
        </View>
        <View style={styles.body}>
          <Image source={SecondImage} style={styles.image} />
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('ThirdStep')}>
              <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.dotSlider}>
              <Icons.FullDot style={styles.dot} />
              <Icons.EmptyDot style={styles.dot} />
              <Icons.EmptyDot style={styles.dot} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SecondStep;
