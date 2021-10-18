// Libs
import React from 'react';
import {useDispatch} from 'react-redux';

// React Native Components
import {FlatList, Text, StyleSheet, TouchableOpacity, View} from 'react-native';

// Constants
import {COLORS, categories, SIZES, FONTS} from '../../constants';

// Actions
import {setSelectedCategory} from '../../store/reducer/selectCategoryReducer';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={categories}
        bounces={false}
        scrollEventThrottle={16}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => dispatch(setSelectedCategory(item.request))}
              style={styles.nameContainer}>
              <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding,
  },
  nameContainer: {
    alignItems: 'center',
    marginRight: SIZES.padding,
    marginTop: 10,
    height: 30,
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export default Categories;
