import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// requests
import {instance} from '../api';

const useFetch = selectedCategory => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(value));
      console.log('GET STORED DATA: ', value);
    } catch (e) {
      console.log('Data not stored: ', e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('data');
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      console.log('Data not found: ', e);
    }
  };

  const fetchData = async () => {
    // getData().then(async result => {
    //   if (result) {
    //     console.log('========= FETCH DATA FROM STORAGE ==========');
    //     console.log('========= RESULT ==========', result);
    //     setData(result);
    //   } else {
    //     console.log('========= FETCH DATA ==========');
    //     try {
    //       const response = await instance.get(selectedCategory);
    //       storeData(response.data.results);
    //       setData(response.data.results);
    //       setLoading(false);
    //     } catch (error) {
    //       setLoading(false);
    //       setError(true);
    //     }
    //   }
    // });
    try {
      const response = await instance.get(selectedCategory);
      storeData(response.data.results);
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
    fetchData();
  }, [selectedCategory]);

  return [loading, data, error];
};

export default useFetch;
