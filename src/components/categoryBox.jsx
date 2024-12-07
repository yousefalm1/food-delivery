import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import categoryImages from '../../assets/data/categoryImage';
import { TouchableOpacity } from 'react-native';

const Category = ({ category, restaurants }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setIsActive(!isActive)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        // padding: 30,
        paddingLeft: 2,

        paddingRight: 15,
        paddingVertical: 2,
        backgroundColor: isActive ? '#FE5320' : '#fff',
        borderRadius: 100,
        marginTop: 10,
      }}
    >
      <Image
        // source={categoryImages[category.categoryName]}
        // source={restaurants[0].menuItems[0].image}
        style={{
          width: 35,
          height: 35,
          objectFit: 'cover',
          borderRadius: 100,
        }}
      />
      <Text
        style={{
          color: isActive ? '#fff' : '#000',
          fontSize: 13,
          fontWeight: '400',
        }}
      >
        {category.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({});
