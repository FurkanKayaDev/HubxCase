import {
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FourthImage from '../../../assets/images/FourthImage.png';
import * as Icons from '../../../assets/icons';
import Icon from 'react-native-vector-icons/Fontisto';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {styles} from './FourthStep.styles';
import {RootStackParamList} from '../../../types/AllType';
import {useDispatch} from 'react-redux';
import {setFirstLogin} from '../../../redux/Features/AppSlice';
interface IFeatures {
  title: string;
  content: string;
  icon: JSX.Element;
}

const FourthStep = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedBtn, setSelectedBtn] = useState(2);
  const dispatch = useDispatch();
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

  const renderItem = ({item}: {item: IFeatures}) => (
    <View style={styles.featuresCardContainer}>
      <View style={styles.cardIcon}>{item.icon}</View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardContent}>{item.content}</Text>
    </View>
  );

  const Checked = () => (
    <View style={styles.checked}>
      <View style={styles.checkedIn} />
    </View>
  );

  const UnChecked = () => <View style={styles.unchecked} />;

  return (
    <ImageBackground source={FourthImage} style={styles.imageBg}>
      <Image source={FourthImage} style={styles.image} />
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'MainStack'}],
          });
          dispatch(setFirstLogin(false));
        }}>
        <Icon name="close-a" size={12} color="white" />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.boldTitle}>
          PlantApp<Text style={styles.title}> Premium </Text>
        </Text>
        <Text style={styles.contentText}>Access All Features</Text>
        <FlatList
          data={data}
          renderItem={({item}) => renderItem({item})}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.title}
          style={{
            marginTop: 20,
          }}
        />
        <View style={styles.body}>
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
                {selectedBtn === 1 ? <Checked /> : <UnChecked />}

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
                {selectedBtn === 2 ? <Checked /> : <UnChecked />}
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
    </ImageBackground>
  );
};

export default FourthStep;
