// Libs
import React from 'react';

// React Native Components
import {View, Text, Image, StyleSheet} from 'react-native';

// Constants
import {COLORS, SIZES, icons, FONTS} from '../../constants';

// Service
import {baseImgUrl} from '../../api';

// Utils
import {truncateString} from '../../utils';

const ShowCard = ({show, styleContainer}) => {
  const title = show?.title || show?.name || show?.original_name;
  return (
    <View style={[styles.cardContainer, {...styleContainer}]}>
      <View style={{backgroundColor: '#e1e4e8', borderRadius: SIZES.radius}}>
        <Image
          source={{
            uri: `${baseImgUrl}${show.backdrop_path || show.poster_path}`,
          }}
          style={styles.image}
        />

        <Text style={styles.title}>{truncateString(title, 15)}</Text>
        <View style={styles.bottomCardContainer}>
          <Image source={icons.star} style={styles.starIcon} />
          <Text style={styles.vote}>{show.vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: SIZES.width * 0.75,
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: SIZES.radius,
  },
  title: {
    color: COLORS.white,
    position: 'absolute',
    bottom: 40,
    left: 40,
    ...FONTS.h3,
  },
  vote: {
    color: COLORS.white,
  },
  bottomCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: COLORS.yellow,
  },
});

export default ShowCard;
