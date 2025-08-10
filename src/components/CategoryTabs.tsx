import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { CATEGORIES_MALE, CATEGORIES_FEMALE } from '@utils/Categories';

interface CategoryTabsProps {
  genderTab: 'male' | 'female';
  setGenderTab: (gender: 'male' | 'female') => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  genderTab,
  setGenderTab,
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = genderTab === 'male' ? CATEGORIES_MALE : CATEGORIES_FEMALE;
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ x: 0, animated: true });
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [genderTab]);

  return (
    <View>
      <View style={styles.genderTabs}>
        <TouchableOpacity
          onPress={() => setGenderTab('male')}
          style={[styles.tabButton, genderTab === 'male' && styles.activeTab]}
        >
          <Text style={[styles.tabText, genderTab === 'male' && styles.activeTabText]}>
            Produtos Masculinos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGenderTab('female')}
          style={[styles.tabButton, genderTab === 'female' && styles.activeTab]}
        >
          <Text style={[styles.tabText, genderTab === 'female' && styles.activeTabText]}>
            Produtos Femininos
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryTabs}
        ref={scrollViewRef}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[styles.categoryButton, selectedCategory === category && styles.categoryActive]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryActiveText,
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

const styles = StyleSheet.create({
  genderTabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 12,
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#2567E8',
  },
  activeTabText: {
    color: '#2567E8',
    fontWeight: 'bold',
  },

  categoryTabs: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  categoryActive: {
    backgroundColor: '#2567E8',
  },
  categoryText: {
    fontSize: 13,
    color: '#555',
  },
  categoryActiveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CategoryTabs;
