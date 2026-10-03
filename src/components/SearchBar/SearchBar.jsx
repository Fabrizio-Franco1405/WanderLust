import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles';
import { styles } from './SearchBar.styles';

export const SearchBar = ({
  placeholder = 'Buscar destinos, hoteles...',
  onChangeText,
  value,
  onSubmit,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={theme.colors.textMuted} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;