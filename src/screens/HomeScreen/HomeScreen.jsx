import React, { useState, useMemo } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Header, SearchBar, CategoryFilter, DestinationCard } from '../../components';
import { globalStyles } from '../../styles';
import { styles } from './HomeScreen.styles';
import { categories, getDestinationsByCategory } from '../../data/destinations';

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryPress = (index) => {
    setActiveCategory(index);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleSearchSubmit = () => {
    console.log('Buscar:', searchText);
  };

  const selectedCategory = categories[activeCategory];
  const filteredDestinations = useMemo(
    () => getDestinationsByCategory(selectedCategory),
    [selectedCategory]
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.scrollContent}
      >
        <Header style={styles.header} />

        <View style={styles.titleContainer}>
          <Text style={globalStyles.screenSubtitle}>Descubre el mundo</Text>
          <Text style={globalStyles.screenTitle}>¿A dónde quieres ir?</Text>
        </View>

        <SearchBar
          style={styles.searchBar}
          placeholder="Buscar destinos, hoteles..."
          value={searchText}
          onChangeText={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />

        <CategoryFilter
          style={styles.categories}
          activeIndex={activeCategory}
          onCategoryPress={handleCategoryPress}
        />

        <View style={styles.destinationsList}>
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              location={destination.location}
              price={destination.price}
              rating={destination.rating}
              imageUri={destination.imageUri}
              isFavorite={false}
              onPress={() => console.log('Clic en', destination.title)}
              onFavoritePress={() => console.log('Favorito:', destination.title)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;