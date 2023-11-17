import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import HomeBackground from '../../assets/images/HomeBackground.png';
import {fontSizes, fonts} from '../../constants/constants';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import * as Icons from '../../assets/icons';
import {screenWidth, screenHeight} from '../../constants/constants';
import GradientText from '../../components/GradientText';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {fetchQuestions} from '../../redux/Features/QuestionSlice';
import {fetchCategories} from '../../redux/Features/CategoriesSlice';
import {AppDispatch} from '../../redux/store';
import QuestionCard from '../../components/QuestionCard';
import CategoryCard from '../../components/CategoryCard';
const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const {questions, loading, error} = useSelector(
    (state: RootState) => state.question,
  );

  const {categories} = useSelector((state: RootState) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
  }, []);

  const renderQuestionItem = ({item}: any) => <QuestionCard {...{item}} />;

  const renderCategoryItem = ({item}: any) => <CategoryCard {...{item}} />;
  return (
    <View style={styles.container}>
      <ImageBackground source={HomeBackground} style={styles.imageBg}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Hi, plant lover!</Text>
          <Text style={styles.headerContent}>Good Afternoon! ⛅</Text>
          <View style={styles.inputContainer}>
            <Icon name="search" size={16} color="#AFAFAF" />
            <TextInput placeholder="Search for plants" style={styles.input} />
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.upgradeBtn}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icons.Mail width={50} height={50} />
          <View style={{marginLeft: 5}}>
            <GradientText
              text="FREE Premium Available"
              colors={['#E5C990', '#E4B046']}
              style={styles.upgradeBtnTitle}
            />
            <GradientText
              text="Tap to upgrade your account!"
              colors={['#E5C990', '#E4B046']}
              style={styles.upgradeBtnContent}
            />
          </View>
        </View>
        <Icons.BoldArrow width={30} height={30} />
      </TouchableOpacity>
      <View style={styles.questions}>
        <Text style={styles.questionsTitle}>Get Started</Text>
        <FlatList data={questions} horizontal renderItem={renderQuestionItem} />
      </View>
      <View style={styles.categories}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfafa',
    justifyContent: 'flex-start',
    alignItems: 'center',
    opacity: 0.96,
  },
  imageBg: {
    width: screenWidth,
    height: screenHeight * 0.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    width: screenWidth * 0.9,
    marginTop: screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontFamily: fonts.Rubik,
    fontSize: fontSizes.h9,
    fontWeight: '400',
    color: '#13231B',
  },
  headerContent: {
    fontFamily: fonts.Rubik,
    fontWeight: '600',
    fontSize: fontSizes.h4,
    color: '#13231B',
  },
  inputContainer: {
    width: screenWidth * 0.9,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontFamily: fonts.Rubik,
    fontWeight: '400',
    fontSize: fontSizes.h11,
    color: '#AFAFAF',
    paddingLeft: 15,
  },
  upgradeBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth * 0.9,
    backgroundColor: '#24201A',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  upgradeBtnTitle: {
    fontFamily: fonts.SfProBold,
    fontWeight: '700',
    fontSize: fontSizes.h10,
    color: '#fff',
  },
  upgradeBtnContent: {
    fontFamily: fonts.SfProMedium,
    fontWeight: '600',
    fontSize: fontSizes.h11,
    color: '#fff',
  },
  questions: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.25,
    backgroundColor: '#fbfafa',
    borderRadius: 10,
    marginTop: 20,
  },
  categories: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.5,
    borderRadius: 10,
    marginTop: 10,
  },
  questionsTitle: {
    fontFamily: fonts.Rubik,
    fontWeight: '700',
    fontSize: fontSizes.h11,
    color: '#13231B',
    marginLeft: 10,
    marginTop: 10,
  },
});
