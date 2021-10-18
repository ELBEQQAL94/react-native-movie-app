// Libs
import React from 'react';

// React Native Core Components
import {View, Text, StyleSheet, FlatList} from 'react-native';

// Constants
import {COLORS, FONTS, SIZES} from '../../constants';

// Core Components
import ShowCard from '../show-card/ShowCard';

const TrendingShows = ({shows}) => {
  return (
    <View>
      <Text style={styles.title}>Trending Shows</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={shows}
        bounces={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            <View>
              <ShowCard
                key={item.id}
                show={item}
                styleContainer={{
                  paddingLeft: index === 0 ? 0 : null,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    marginVertical: SIZES.padding,
    ...FONTS.h2,
  },
});

export default TrendingShows;
