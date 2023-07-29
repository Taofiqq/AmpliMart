import {StyleSheet, SafeAreaView, Text, Pressable, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ProductScreen');
  };
  return (
    <SafeAreaView>
      <Pressable onPress={onPress}>
        <Text>Press Me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
