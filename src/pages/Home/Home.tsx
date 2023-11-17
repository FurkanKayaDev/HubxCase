import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import HomeBackground from '../../assets/images/HomeBackground.png';
import Icon from 'react-native-vector-icons/Fontisto';
import * as Icons from '../../assets/icons';
import GradientText from '../../components/GradientText';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {fetchQuestions} from '../../redux/Features/QuestionSlice';
import {fetchCategories} from '../../redux/Features/CategoriesSlice';
import QuestionCard from '../../components/QuestionCard';
import CategoryCard from '../../components/CategoryCard';
import {styles} from './Home.styles';
import {useAppDispatch} from '../../redux/store';
const Home = () => {
  const dispatch = useAppDispatch();

  const {questions, loading} = useSelector(
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
    <SafeAreaView style={styles.container}>
      <ImageBackground source={HomeBackground} style={styles.imageBg}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Hi, plant lover!</Text>
          <Text style={styles.headerContent}>Good Afternoon! ⛅</Text>
          <View style={styles.inputContainer}>
            <Icon name="search" size={16} color="#AFAFAF" />
            <TextInput
              placeholder="Search for plants"
              style={styles.input}
              placeholderTextColor={'#AFAFAF'}
            />
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.upgradeBtn}>
        <View style={styles.upgradeContainer}>
          <Icons.Mail width={50} height={50} />
          <View>
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
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : (
          <FlatList
            data={questions}
            horizontal
            renderItem={renderQuestionItem}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
      <View style={styles.categories}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
