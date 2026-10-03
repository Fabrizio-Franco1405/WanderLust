import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../../styles';
import { styles } from './CategoryFilter.styles';

export const CategoryFilter = ({
  categories = ['Todos', 'Montaña', 'Ciudad', 'Camping', 'Playa'],
  activeIndex = 0,
  onCategoryPress,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              index === activeIndex && styles.buttonActive,
            ]}
            onPress={() => onCategoryPress?.(index)}
          >
            <Text
              style={[
                styles.text,
                index === activeIndex && styles.textActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryFilter;
