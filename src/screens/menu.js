import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import restaurants from '../../assets/data/restaurant';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  MinusIcon,
  MinusSquareIcon,
  PlusIcon,
  PlusSquareIcon,
  Star,
  ThumbsUp,
  ThumbsUpIcon,
} from 'lucide-react-native';
import RestaurantCardBox from '../components/restaurants/restaurantCardBox';
import MenuItems from '../components/restaurants/menuItems';
import { LinearGradient } from 'expo-linear-gradient';

const Menu = () => {
  return (
    <>
      <ScrollView>
        <View>
          <Image
            source={{ uri: restaurants[0].image }}
            style={{ width: '100%', height: 300 }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 50,
              left: 20,
              padding: 10,
              borderRadius: 100,
              backgroundColor: '#ff5f1f',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            }}
          >
            <ChevronLeft size={20} color={'white'} />
          </TouchableOpacity>
          <LinearGradient
            colors={[
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0.1)',
              'rgba(0,0,0,0.3)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.7)',
              'rgba(0,0,0,0.85)',
              'rgba(0,0,0,0.95)',
            ]}
            locations={[0, 0.3, 0.5, 0.65, 0.8, 0.9, 1]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 300,
            }}
          />
        </View>

        <View style={{ padding: 20 }}>
          <View>
            <Text style={{ fontWeight: '600', fontSize: 24, color: '#fff' }}>
              {restaurants[0].name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <View style={{ gap: 6 }}>
              <Text style={{ color: 'gray' }}>
                {restaurants[0].deliveryTime} - {restaurants[0].category} -
                Restaurant
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 4,
                }}
              >
                <Star fill="green" stroke="green" width={18} height={18} />
                <Text style={{ color: '#52ae60', marginLeft: 4 }}>
                  {restaurants[0].rating} Excellent
                </Text>
              </View>
            </View>

            <View></View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontWeight: '400', fontSize: 18, color: '#fff' }}>
              Menu Items
            </Text>
          </View>

          <MenuItems restaurants={restaurants} />
        </View>
      </ScrollView>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({});
