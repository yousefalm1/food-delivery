import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import SearchList from './SearchList';
import SectionHeader from '../reuseable/SectionHeader';
import ROUTE from '../../Navigation';
import SearchBar from './SearchBar';
import dishesBetterImages from '../../../assets/data/BetterImage';
import restaurants from '../../../assets/data/restaurant';
import {
  AlarmClock,
  Clock,
  Plus,
  PlusCircle,
  Timer,
} from 'lucide-react-native';

const SearchContainer = ({ restaurants }) => {
  const [search, setSearch] = useState('');

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View
      style={{
        backgroundColor: '#121112',
        padding: 20,
        flex: 1,
        marginTop: 40,
      }}
    >
      <SearchBar setSearch={setSearch} search={search} />

      <View style={{ flexDirection: 'row', gap: 10, marginVertical: 15 }}>
        <View
          style={{
            borderRadius: 20,
            width: '50%',
            padding: 15,
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderColor: '#222222',
            borderWidth: 1,
            backgroundColor: '#121112',
            shadowColor: '#222222',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Image
            source={dishesBetterImages['Butter Chicken']}
            style={{
              width: 100,
              height: 100,
              borderRadius: 15,
              alignSelf: 'center',
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 6,
            }}
          >
            {restaurants[3].menuItems[0].name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginBottom: 8,
            }}
          >
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              <Timer size={16} color="#fff" strokeWidth={1.5} />
              <Text style={{ color: '#aaa', fontSize: 13, fontWeight: '300' }}>
                {restaurants[3].deliveryTime}
              </Text>
            </View>
            <View style={{}}>
              <Text style={{ color: '#aaa', fontSize: 13, fontWeight: '300' }}>
                | 500cal
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>
              KD {restaurants[3].menuItems[0].price}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#ff5f1f',
                borderRadius: 100,
                padding: 8,
              }}
            >
              <Plus color="#fff" size={20} strokeWidth={1.5} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderRadius: 20,
            width: '50%',
            padding: 15,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#222222',
            borderWidth: 2,
            backgroundColor: '#1a1a1a',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          <Image
            source={dishesBetterImages['Beef Tacos']}
            style={{
              width: 110,
              height: 110,
              borderRadius: 15,
              marginBottom: 12,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
            }}
          >
            Beef Tacos
          </Text>
        </View>
      </View>

      {/* <SearchList filteredRestaurants={filteredRestaurants} /> */}
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({});
