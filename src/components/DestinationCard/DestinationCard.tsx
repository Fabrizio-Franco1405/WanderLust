import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles';
import { styles } from './DestinationCard.styles';

export interface DestinationCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUri: string;
  isFavorite?: boolean;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

const placeholderSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250">
  <rect width="400" height="250" fill="#F0F0F0"/>
  <text x="200" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#999" text-anchor="middle">Imagen no disponible</text>
</svg>`;

export const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  location,
  price,
  rating,
  imageUri,
  isFavorite = false,
  onPress,
  onFavoritePress,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image
        source={{ uri: imageError ? placeholderSvg : imageUri }}
        style={styles.image as ImageStyle}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoading(false)}
        resizeMode="cover"
      />

      {imageLoading && !imageError && (
        <View style={styles.imagePlaceholder}>
          <Ionicons name="image-outline" size={32} color={theme.colors.textMuted} />
        </View>
      )}

      {imageError && (
        <View style={styles.imagePlaceholder}>
          <Ionicons name="image-outline" size={48} color={theme.colors.textMuted} />
        </View>
      )}

      <TouchableOpacity style={styles.heartBtn} onPress={onFavoritePress}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={20}
          color={isFavorite ? theme.colors.favorite : theme.colors.textMuted}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={12} color={theme.colors.secondary} />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={14} color={theme.colors.textMuted} />
          <Text style={styles.location}>{location}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.priceSubtitle}>/ noche</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DestinationCard;