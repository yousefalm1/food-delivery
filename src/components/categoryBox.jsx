import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import categoryImages from '../../assets/data/categoryImage';
import { TouchableOpacity } from 'react-native';

const Category = ({ category }) => {
  return (
    <View style={{ marginHorizontal: 5 }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            borderWidth: 1,
            // borderColor: '#2f2f2f',
            elevation: 3,
          }}
        >
          <View>
            <Image
              source={categoryImages[category.categoryName]}
              style={{ width: 40, height: 40, borderRadius: '100%' }}
            />
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              textAlign: 'center',
              // marginTop: 10,
              fontSize: 12,
              fontWeight: '300',
              fontFamily: 'Poppins',
              color: 'white',
            }}
          >
            {category.categoryName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
