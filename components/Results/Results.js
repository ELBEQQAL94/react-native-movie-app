// Libs
import React from 'react';

// React Native Components
import {View, FlatList} from 'react-native';

// Constants
import {COLORS, SIZES} from '../../constants';

// Core Components
import ShowCard from '../show-card/ShowCard';

const NUM_OF_COLOMUNS = 2;

const Results = ({results}) => {
  return (
    <View style={{paddingBottom: 100}}>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={results}
        bounces={false}
        scrollEventThrottle={16}
        numColumns={NUM_OF_COLOMUNS}
        renderItem={({item}) => {
          return (
            <View style={{width: '50%'}}>
              <ShowCard
                key={item.id}
                show={item}
                styleContainer={{
                  width: 200,
                  height: 300,
                  paddingLeft: 0,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Results;
