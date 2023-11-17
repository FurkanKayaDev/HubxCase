import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import FirstStepBg from '../../../assets/images/Background.png';
import FirstImage from '../../../assets/images/FirstPageImage.png';
import {useNavigation} from '@react-navigation/native';

import {styles} from './FirstStep.styles';
const FirstStep = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={FirstStepBg} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Welcome to
            <Text style={styles.boldTitle}> PlantApp</Text>
          </Text>
          <Text style={styles.contentText}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>
        <View>
          <Image source={FirstImage} style={styles.image} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SecondStep')}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
          <View style={styles.legal}>
            <Text style={styles.legalText}>
              By tapping next, you are agreeing to PlantID
            </Text>
            <Text style={styles.legalText}>
              <Text style={styles.underline}>Terms of Use</Text> &{' '}
              <Text style={styles.underline}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FirstStep;
