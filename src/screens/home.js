import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import restaurantCategories from '../../assets/data/restaurantCategories';
import restaurants from '../../assets/data/restaurant';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryContainer from '../components/categoryContainer';
import categoryImages from '../../assets/data/categoryImage';
import TopHeader from '../components/home/header/topheader';
import SearchSection from '../components/home/header/searchSection';
import SectionHeader from '../components/reuseable/SectionHeader';
import betterImage from '../../assets/data/BetterImage';
import { LinearGradient } from 'expo-linear-gradient';
import { getCategories, getRestaurants } from '../api/resturants';
import {
  ArrowBigLeft,
  ArrowRight,
  ArrowUpCircle,
  ArrowUpRight,
  ArrowUpRightSquare,
  ChevronRight,
  CircleArrowLeft,
  CircleArrowRight,
  Clock,
  Flame,
  MapPin,
  Search,
  ShoppingCart,
  Star,
  Timer,
} from 'lucide-react-native';
import FeaturedResContainer from '../components/home/featuredRes/featuredResContainer';
import restaurant from '../../assets/data/restaurant';
import FeaturedResHeader from '../components/home/featuredRes/FeaturedResHeader';
import FeaturedResCard from '../components/home/featuredRes/FeaturedResCard';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import ROUTE from '../Navigation/index';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const { cart } = useCart();
  const navigation = useNavigation();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const { data: restaurants } = useQuery({
    queryKey: ['restaurants'],
    queryFn: getRestaurants,
  });

  return (
    <View
      style={{
        backgroundColor: '#161616',
        paddingHorizontal: 15,
        paddingTop: 50,
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <MapPin size={22} color={'#FE5320'} strokeWidth={2} />
          <Text style={{ color: '#aaa', fontWeight: '400', fontSize: 15 }}>
            Coded
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TabNavigator', { screen: ROUTE.HOME.CART })
          }
          style={styles.buttonStyle}
        >
          <ShoppingCart size={20} color="#FE5320" />
          {cart.length > 0 && (
            <View
              style={{
                position: 'absolute',
                right: -6,
                top: -6,
                backgroundColor: '#FE5320',
                borderRadius: 12,
                minWidth: 18,
                height: 18,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1.5,
                borderColor: '#161616',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>
                {cart.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 10 }}>
        <ImageBackground
          source={categoryImages[restaurantCategories[3].categoryName]}
          style={{
            width: '100%',
            height: 360,
            borderRadius: 35,
            overflow: 'hidden',
            marginTop: 15,
          }}
          resizeMode="cover"
        >
          <View
            style={{
              padding: 13,
              paddingTop: 20,
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    color: 'lightgray',
                    fontWeight: '600',
                    fontSize: 13,
                    letterSpacing: 1,
                  }}
                >
                  DISH OF THE DAY
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 20,
                  }}
                >
                  <Flame size={24} color={'#FE5320'} fill={'#FE5320'} />
                </Text>
              </View>
            </View>

            <View style={{ padding: 13 }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: 28,
                  textShadowColor: 'rgba(0,0,0,0.3)',
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 3,
                }}
              >
                {restaurant[1].menuItems[0].name}
              </Text>

              <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Star
                  size={20}
                  color={'#FE5320'}
                  fill={'#FE5320'}
                  strokeWidth={1.5}
                />
                <Star
                  size={20}
                  color={'#FE5320'}
                  fill={'#FE5320'}
                  strokeWidth={1.5}
                />
                <Star
                  size={20}
                  color={'#FE5320'}
                  fill={'#FE5320'}
                  strokeWidth={1.5}
                />
                <Star
                  size={20}
                  color={'#FE5320'}
                  fill={'#FE5320'}
                  strokeWidth={1.5}
                />
                <Star size={20} color={'#aaa'} strokeWidth={1.5} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          marginVertical: 15,
          backgroundColor: '#222222',
          padding: 20,
          height: 90,
          justifyContent: 'center',
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Image
            source={{
              uri: 'https://cdn.discordapp.com/avatars/690198889982328846/e571154fc9abca7ca1e0abf56ac7e2c7?size=1024',
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 35,
              borderWidth: 2,
              borderColor: '#FE5320',
            }}
          />
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: 18,
                marginBottom: 2,
              }}
            >
              Aya's Top Picks
            </Text>
            <Text
              style={{
                color: '#aaa',
                fontWeight: '400',
                fontSize: 12,
              }}
            >
              Check out Aya's favorite dishes
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTE.HOME.CHEFS_FAV)}
            style={{
              backgroundColor: '#FE5320',
              padding: 12,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowUpRight size={20} color={'#fff'} strokeWidth={2.5} />
          </TouchableOpacity>
        </View>
      </View>
      <CategoryContainer categories={categories} />
      {/* <View style={{ marginVertical: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 15 }}
        >
          {restaurantCategories.map((category) => (
            <View key={category.id} style={{ alignItems: 'center' }}>
              <Image
                source={categoryImages[category.categoryName]}
                style={{ width: 80, height: 80, borderRadius: 13 }}
              />
              <Text
                style={{
                  color: '#b7b7b7',
                  fontWeight: '500',
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                {category.categoryName}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
});
