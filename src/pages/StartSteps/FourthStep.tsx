import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  colors,
  fontSizes,
  fonts,
  screenHeight,
  screenWidth,
} from '../../constants/constants';
import FourthImage from '../../assets/images/FourthImage.png';
import * as Icons from '../../assets/icons';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import {useNavigation} from '@react-navigation/native';
const FourthStep = () => {
  const navigation = useNavigation();
  const [selectedBtn, setSelectedBtn] = useState(2);
  const data = [
    {
      title: 'Unlimited',
      content: 'Plant Identify',
      icon: <Icons.Scanner width={25} height={25} />,
    },
    {
      title: 'Faster',
      content: 'Process',
      icon: <Icons.SpeedMeter width={25} height={25} />,
    },
    {
      title: 'Detailed',
      content: 'Plant care',
      icon: <Icons.Herbal width={25} height={25} />,
    },
  ];

  return (
    <ImageBackground source={FourthImage} style={styles.imageBg}>
      <Image source={FourthImage} style={styles.image} />
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.navigate('MainStack')}>
        <Icon name="close-a" size={16} color="white" />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.boldTitle}>
          PlantApp<Text style={styles.title}> Premium </Text>
        </Text>
        <Text style={styles.contentText}>Access All Features</Text>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                width: screenWidth * 0.45,
                height: screenHeight * 0.15,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: 10,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingLeft: 16,
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 10,
                  marginBottom: 10,
                }}>
                {item.icon}
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardContent}>{item.content}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={{
            marginTop: 20,
          }}
        />
        <View>
          <View style={styles.premiumOptions}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setSelectedBtn(1)}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#1d2a24', '#1c2923']}
                style={
                  selectedBtn === 1
                    ? styles.activeGradient
                    : styles.deactiveGradient
                }>
                <Icon
                  name={
                    selectedBtn === 1 ? 'radio-btn-active' : 'radio-btn-passive'
                  }
                  size={20}
                  color={colors.green}
                />
                <View style={styles.btnContainer}>
                  <Text style={styles.optionsBtnTitle}>1 Month</Text>
                  <Text style={styles.optionsBtnContent}>
                    $2.99/month, auto renewable
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setSelectedBtn(2)}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#101e17', '#133524']}
                style={
                  selectedBtn === 2
                    ? styles.activeGradient
                    : styles.deactiveGradient
                }>
                <Icon
                  name={
                    selectedBtn === 2 ? 'radio-btn-active' : 'radio-btn-passive'
                  }
                  size={20}
                  color={colors.green}
                />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Save 50%</Text>
                </View>
                <View style={styles.btnContainer}>
                  <Text style={styles.optionsBtnTitle}>1 Year</Text>
                  <Text style={styles.optionsBtnContent}>
                    First 3 days free, then $529,99/year
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmBtnText}>Try free for 3 days</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.legalText}>
              After the 3-day free trial period you’ll be charged ₺274.99 per
              year unless you cancel before the trial expires. Yearly
              Subscription is Auto-Renewable
            </Text>
            <Text style={styles.legalOptions}>Terms • Privacy • Restore</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          zIndex: 1,
          width: screenWidth,
          height: screenHeight,
          backgroundColor: colors.darkGreen,
        }}></View>
    </ImageBackground>
  );
};

export default FourthStep;

const styles = StyleSheet.create({
  imageBg: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: screenHeight * 0.07,
    right: screenWidth * 0.05,
    zIndex: 3,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.7,
    position: 'absolute',
    top: 0,
    zIndex: 3,
  },
  headerContainer: {
    position: 'absolute',
    width: screenWidth * 0.9,
    bottom: screenWidth * 0.05,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 5,
  },
  title: {
    fontFamily: fonts.Rubik,
    fontWeight: '400',
    fontSize: fontSizes.h3,
    color: 'white',
  },
  boldTitle: {
    fontFamily: fonts.VisbyBlack,
    fontWeight: 'bold',
    fontSize: fontSizes.h1,
    color: 'white',
  },
  contentText: {
    fontFamily: fonts.Rubik,
    fontWeight: '400',
    fontSize: fontSizes.h10,
    color: 'rgba(255, 255, 255, 0.70)',
    marginTop: 10,
  },
  activeGradient: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.green,
  },
  deactiveGradient: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.30)',
  },
  btn: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    borderRadius: 14,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  btnContainer: {
    marginLeft: 10,
  },
  confirmBtn: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    borderRadius: 14,
    marginTop: 20,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtnText: {
    color: 'white',
    fontSize: fontSizes.h12,
    fontFamily: fonts.RubikBold,
  },
  footer: {
    marginTop: 5,
    width: screenWidth * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legalText: {
    color: 'rgba(255, 255, 255, 0.52)',
    fontSize: fontSizes.h17,
    fontFamily: fonts.Rubik,
    textAlign: 'center',
  },
  legalOptions: {
    color: 'rgba(255, 255, 255, 0.52)',
    fontSize: fontSizes.h14,
    fontFamily: fonts.Rubik,
    textAlign: 'center',
    marginTop: 5,
  },
  cardTitle: {
    fontFamily: fonts.RubikBold,
    fontSize: fontSizes.h12,
    color: 'white',
    letterSpacing: 0.5,
  },
  cardContent: {
    fontFamily: fonts.Rubik,
    fontSize: fontSizes.h12,
    color: 'rgba(255, 255, 255, 0.70)',
    letterSpacing: 0.2,
  },
  premiumOptions: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsBtnTitle: {
    fontFamily: fonts.RubikBold,
    fontSize: fontSizes.h11,
    color: 'white',
    letterSpacing: 0.5,
  },
  optionsBtnContent: {
    fontFamily: fonts.Rubik,
    fontSize: fontSizes.h13,
    color: 'rgba(255, 255, 255, 0.70)',
    letterSpacing: 0.2,
  },
  badge: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: screenWidth * 0.2,
    height: 25,
    backgroundColor: colors.green,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: fontSizes.h13,
    fontFamily: fonts.Rubik,
    fontWeight: '500',
  },
});
