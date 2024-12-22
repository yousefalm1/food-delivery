import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import categoryImages from '../../assets/data/categoryImage';
import ROUTE from '../Navigation/index';

const Category = ({ category, onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(ROUTE.HOME.CATEGORIES, {
      category: category,
      restaurants: category.restaurants,
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ alignItems: 'center', marginRight: 15 }}
    >
      <Image
        source={categoryImages[category.name]}
        style={{ width: 80, height: 80, borderRadius: 13 }}
      />
      <Text
        style={{
          color: '#b7b7b7',
          fontFamily: 'Poppins-Medium',
          fontSize: 12,
          marginTop: 10,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 6,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 13,
  },
  text: {
    color: '#b7b7b7',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
  },
});
