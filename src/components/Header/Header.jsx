import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles';
import { styles } from './Header.styles';

export const Header = ({
  onMenuPress,
  avatarSource,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={onMenuPress}>
        <Ionicons name="menu" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <Image
        source={avatarSource || require('../../../assets/perfil.jpg')}
        style={styles.avatar}
      />
    </View>
  );
};

export default Header;