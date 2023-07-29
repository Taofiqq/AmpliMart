import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';
import {useNavigationState} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

const CustomTabBar = ({state, descriptors, navigation}) => {
  const selectedIndex = useDerivedValue(() => state.index);

  const tabBarUnderlineStyle = useAnimatedStyle(() => {
    const tabWidth = 100;
    const translateX = interpolate(
      selectedIndex.value,
      state.routes.map((_, i) => i),
      [0, tabWidth * 3],
    );
    return {
      transform: [{translateX}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.tabBarUnderline, tabBarUnderlineStyle]} />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;

        const iconProps = {
          size: 24,
          color: state.index === index ? 'teal' : 'gray',
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Icon.Button
            key={index}
            name={
              label === 'HomeScreen'
                ? 'home'
                : label === 'ProfileScreen'
                ? 'person'
                : label === 'ShoppingCartScreen'
                ? 'shopping-cart'
                : 'menu'
            }
            {...iconProps}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  tabBarUnderline: {
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 2,
    backgroundColor: 'teal',
  },
});

export default CustomTabBar;
