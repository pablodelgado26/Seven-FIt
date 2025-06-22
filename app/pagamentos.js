import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SemRegistroScreen({ navigation }) {
  // Estado para controlar o filtro ativo (aberto ou pago)
  const [activeFilter, setActiveFilter] = useState('aberto');


  const toggleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E30000" barStyle="light-content" />
      
      {/* Header com filtros */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={[
            styles.filterButton, 
            activeFilter === 'aberto' ? styles.activeFilterButton : styles.inactiveFilterButton
          ]}
          onPress={() => toggleFilter('aberto')}
        >
          <Ionicons 
            name="warning-outline" 
            size={16} 
            color={activeFilter === 'aberto' ? "#E30000" : "white"} 
          />
          <Text 
            style={[
              styles.filterText, 
              activeFilter === 'aberto' ? styles.activeFilterText : styles.inactiveFilterText
            ]}
          >
            Em aberto
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.filterButton, 
            activeFilter === 'pago' ? styles.activeFilterButton : styles.inactiveFilterButton
          ]}
          onPress={() => toggleFilter('pago')}
        >
          <Ionicons 
            name="card-outline" 
            size={16} 
            color={activeFilter === 'pago' ? "#E30000" : "white"} 
          />
          <Text 
            style={[
              styles.filterText, 
              activeFilter === 'pago' ? styles.activeFilterText : styles.inactiveFilterText
            ]}
          >
            Pagos
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <View style={styles.emptyState}>
          {/* Ícone de lupa */}
          <View style={styles.iconContainer}>
            <View style={styles.magnifyingGlass}>
              <View style={styles.glassCircle} />
              <View style={styles.glassHandle} />
            </View>
          </View>

          {/* Texto principal */}
          <Text style={styles.title}>Sem registro</Text>
          <Text style={styles.subtitle}>
            {activeFilter === 'aberto' 
              ? 'Não há pagamentos em aberto para exibir.'
              : 'Não há pagamentos concluídos para exibir.'}
          </Text>


        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#E30000',
    gap: 8,
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  activeFilterButton: {
    backgroundColor: 'white',
  },
  inactiveFilterButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  activeFilterText: {
    color: '#E30000',
  },
  inactiveFilterText: {
    color: 'white',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  emptyState: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 24,
  },
  magnifyingGlass: {
    position: 'relative',
    width: 60,
    height: 60,
  },
  glassCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E30000',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  glassHandle: {
    width: 4,
    height: 20,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#444444',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 200,
  },
  backButtonText: {
    color: '#AAAAAA',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});