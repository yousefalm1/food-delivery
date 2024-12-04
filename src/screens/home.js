import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import restaurantCategories from '../../assets/data/restaurantCategories';
import restaurants from '../../assets/data/restaurant';

import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryContainer from '../components/categoryContainer';

import TopHeader from '../components/home/header/topheader';
import SearchSection from '../components/home/header/searchSection';
import { Star } from 'lucide-react-native';
import FeaturedResContainer from '../components/home/featuredRes/featuredResContainer';
import restaurant from '../../assets/data/restaurant';

const Home = () => {
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <TopHeader />
      <SearchSection />
      <CategoryContainer restaurantCategories={restaurantCategories} />
      <FeaturedResContainer restaurants={restaurants} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
