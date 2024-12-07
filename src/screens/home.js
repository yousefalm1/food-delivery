import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  // Text,
} from 'react-native';
import { Text } from '../../App';
import restaurantCategories from '../../assets/data/restaurantCategories';
import restaurants from '../../assets/data/restaurant';

import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryContainer from '../components/categoryContainer';

import TopHeader from '../components/home/header/topheader';
import SearchSection from '../components/home/header/searchSection';
import SectionHeader from '../components/reuseable/SectionHeader';
import {
  ArrowRight,
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
import AllRestaurantsContainer from '../components/allResturants/AllRestaurantsContainer';

const Home = () => {
  return (
    <View style={{ backgroundColor: '', paddingHorizontal: 15, marginTop: 50 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 20,
              // shadowColor: '#000',
              // shadowOffset: { width: 0, height: 2 },
              // shadowOpacity: 0.1,
              // elevation: 3,
            }}
          >
            <Search size={17} color="#1e1a18" strokeWidth={1.5} />
          </TouchableOpacity>

          <View style={{ alignItems: 'center', gap: 2 }}>
            <Text
              style={{
                color: '#7a869a',
                fontSize: 12,
                marginBottom: 2,
                // fontFamily: 'Anuphan',
                fontWeight: '400', // Can use: 100, 200, 300, 400 (normal), 500, 600, 700 (bold), 800, 900
              }}
            >
              Current Location
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MapPin size={18} color="#fff" fill="#FE5320" strokeWidth={1.5} />
              <Text
                style={{
                  marginLeft: 4,
                  fontSize: 14,
                  color: '#1e1a18',
                  fontWeight: 500,
                }}
              >
                Street, Block 12, Jabriya
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 18,
              // shadowColor: '#000',
              // shadowOffset: { width: 0, height: 2 },
              // shadowOpacity: 0.1,
              // elevation: 3,
            }}
          >
            <ShoppingCart size={18} color="#1e1a18" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: '#1e1a18',
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // padding: 20,
            paddingTop: 25,
            paddingBottom: 20,
            paddingHorizontal: 30,

            marginTop: 15,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 3,
              }}
            >
              Taco Town on Yalla
            </Text>
            <Text
              style={{
                color: '#aaa',
                fontSize: 13,
                fontWeight: '300',
                marginBottom: 12,
              }}
            >
              Get KD0 Delivery Fees Reduced. Free Delivery on Orders Over KD 10
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 20,
                paddingHorizontal: 10,
                paddingVertical: 6,
                alignSelf: 'flex-start',
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: '#FE5320',
                    marginRight: 8,
                  }}
                >
                  Order Now
                </Text>
                <CircleArrowRight size={20} fill="#FE5320" color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: restaurants[2].image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 16,
              marginLeft: 20,
            }}
          />
        </View>
        <FeaturedResContainer restaurants={restaurants} />
        {/* <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                // padding: 30,
                paddingLeft: 2,

                paddingRight: 15,
                paddingVertical: 2,
                backgroundColor: '#FE5320',
                borderRadius: 100,
                marginTop: 10,
              }}
            >
              <Image
                source={{ uri: restaurants[0].menuItems[0].image }}
                style={{
                  width: 35,
                  height: 35,
                  objectFit: 'cover',
                  borderRadius: 100,
                }}
              />
              <Text style={{ color: '#fff', fontSize: 13, fontWeight: '400' }}>
                {restaurantCategories[0].categoryName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                // padding: 30,
                paddingLeft: 2,

                paddingRight: 15,
                paddingVertical: 2,
                backgroundColor: '#fff',
                borderRadius: 100,
                marginTop: 10,
              }}
            >
              <Image
                source={{ uri: restaurants[0].menuItems[0].image }}
                style={{
                  width: 35,
                  height: 35,
                  objectFit: 'cover',
                  borderRadius: 100,
                }}
              />
              <Text
                style={{ color: '#1e1a18', fontSize: 13, fontWeight: '400' }}
              >
                {restaurantCategories[0].categoryName}
              </Text>
            </View>
          </View>
        </View> */}
        {/* <CategoryContainer
          restaurantCategories={restaurantCategories}
          restaurant
        /> */}

        {/* <AllRestaurantsContainer restaurants={restaurants} /> */}
        {/* <View style={{ marginTop: 15 }}>
          <SectionHeader mainText="All Restaurants" subText="See all" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -20 }}
            contentContainerStyle={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              gap: 10,
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 35,
                marginTop: 15,
                width: '57%',
              }}
            >
              <View>
                <Image
                  source={{ uri: restaurants[0].menuItems[0].image }}
                  style={{
                    width: '100%',
                    height: 130,
                    borderRadius: 35,
                    padding: 4,
                    position: 'relative',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 2,
                    elevation: 3, // For Android
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 25,
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: '600' }}>
                  {restaurants[0].name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <View>
                      <Star
                        fill="#FE5320"
                        size={18}
                        strokeWidth={1.5}
                        color="#FE5320"
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: '400',
                          letterSpacing: -0.5,
                        }}
                      >
                        {restaurants[0].rating}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '500',
                        letterSpacing: -0.3,
                      }}
                    >
                      KD 0 Delivery Fee
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#FE5320',
                    padding: 12,
                    borderRadius: 30,
                    // marginTop: 10,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 12 }}>
                    Add to Cart
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
