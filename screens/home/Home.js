// Libs
import React from 'react';
import {useSelector} from 'react-redux';

// React Native Components
import {StyleSheet, ScrollView} from 'react-native';

// Hooks
import {useFetch} from '../../hooks';

// Core Components
import {TrendingShows, Categories, Results} from '../../components';

// Constants
import {COLORS, SIZES} from '../../constants';

// API
import {request} from '../../api';

const Home = ({navigation}) => {
  const selectedCategory = useSelector(
    state => state.selectCategoryState.selectedCategory,
  );

  // Fetch data based on selected category
  const [loading, data, error] = useFetch(selectedCategory);

  // Ftech Trending Shows data
  const [loadingTrendingShows, trendingShows, trendingShowsError] = useFetch(
    request.fetchTrending,
  );

  return (
    <ScrollView style={styles.container}>
      <TrendingShows shows={trendingShows} />
      <Categories />
      <Results results={data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding,
    paddingBottom: 100,
  },
});

export default Home;
