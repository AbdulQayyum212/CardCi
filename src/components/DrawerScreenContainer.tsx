import {useDrawerProgress, useDrawerStatus} from '@react-navigation/drawer';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
// import COLORS from '../constants/colors';

function DrawerScreenContainer({children}: {children: JSX.Element}) {
  const isDrawerOpen = useDrawerStatus();
  const progress = useDrawerProgress() as Readonly<SharedValue<number>>;

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);

    const borderRadius = interpolate(progress.value, [0, 1], [0, 25]);

    return {
      borderRadius,
      transform: [{scale}],
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          //   flexDirection: 'row',
          //   backgroundColor: COLORS.white,
          // transform: [{ scale }],
          overflow: 'hidden',
        },
        animatedStyle,
      ]}>
      <StatusBar
        // backgroundColor={isDrawerOpen == 'open' ? COLORS.primary : COLORS.white}
        barStyle="dark-content"
      />
      {children}
    </Animated.View>
  );
}

export default DrawerScreenContainer;

const styles = StyleSheet.create({});
