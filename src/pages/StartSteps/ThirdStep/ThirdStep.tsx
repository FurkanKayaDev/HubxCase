import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ThirdImage from '../../../assets/images/ThirdImage.png';
import SecondBackground from '../../../assets/images/SecondBackground.png';
import Rectangle from '../../../assets/images/Rectangle.png';
import {useNavigation} from '@react-navigation/native';
import {styles} from './ThirdStep.styles';
import * as Icons from '../../../assets/icons';

const ThirdStep = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={SecondBackground} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Get plant <Text style={styles.boldTitle}> care guides </Text>
          </Text>
          <View style={styles.iconContainer}>
            <Image source={Rectangle} style={styles.rectangle} />
          </View>
        </View>
        <View style={styles.body}>
          <Image source={ThirdImage} style={styles.image} />
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('FourthStep')}>
              <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.dotSlider}>
              <Icons.EmptyDot style={styles.dot} />
              <Icons.FullDot style={styles.dot} />
              <Icons.EmptyDot style={styles.dot} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ThirdStep;
