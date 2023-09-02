import React, { useState, useLayoutEffect, FC } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { CustomSkeletonContentProps } from './types';

const CustomSkeletonContent: FC<CustomSkeletonContentProps> = ({
  isLoading = true,
  containerStyle = {},
  layout = [],
  duration = 1000,
}) => {
  const [skeletonAnim] = useState(new Animated.Value(0));

  useLayoutEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(skeletonAnim, {
            toValue: 1,
            duration: duration / 2.5,
            useNativeDriver: false,
          }),
          Animated.timing(skeletonAnim, {
            toValue: 0,
            duration: duration / 2.5,
            useNativeDriver: false,
          }),
        ])
      ).start();
    } else {
      skeletonAnim.stopAnimation();
    }
  }, [isLoading, skeletonAnim, duration]);

  return (
    <View style={[styles.container, containerStyle]}>
      {layout.map((item) => (
        <Animated.View
          key={item.key}
          style={[
            styles.skeletonItem,
            {
              width: item.width,
              height: item.height,
              marginBottom: item.marginBottom,
              opacity: skeletonAnim,
              borderRadius: item.borderRadius || 0,
              // You can add more style props
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  skeletonItem: {
    backgroundColor: '#E0E0E0',
  },
});

export default CustomSkeletonContent;