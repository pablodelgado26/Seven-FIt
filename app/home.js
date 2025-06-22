import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [checkInComplete, setCheckInComplete] = useState(true);
  
  const todayWorkout = {
    type: "Treino de hoje (D)",
    details: "Abdome, Costas, Glúteo, Ombro, P...",
    exercises: [
      "1 - Mesa Flexora Unilateral",
      "2 - Stiff com Barra",
      "3 - Elevação Pélvica So... (+5 Exercícios)"
    ],
    date: "8/30"
  };

  const pendingItems = [
    {
      id: 1,
      title: "Treino vencendo",
      date: "20/01/25",
      description: "Olá Pablo, Seu treino está próximo de vencer... 7? Converse com o professor responsável para sua ficha e evite esta nova!"
    },
    {
      id: 2,
      title: "Ficha de treino vencida",
      date: "Vencimento: 25/01/2025"
    }
  ];

  const menuItems = [
    { title: "Perfil", subtitle: "Dados cadastrais", icon: "person-outline", color: "#E30000" },
    { title: "Treino", subtitle: "Ficha de exercícios", icon: "barbell-outline", color: "#E30000" },
    { title: "Produtos", subtitle: "Vitrine online", icon: "storefront-outline", color: "#E30000" },
    { title: "Atendimento", subtitle: "Histórico de conversas", icon: "chatbubble-outline", color: "#E30000" },
    { title: "Contato", subtitle: "Fale conosco", icon: "call-outline", color: "#E30000" }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E30000" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>P</Text>
          </View>
          <Text style={styles.headerTitle}>Pablo</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Check-in Section */}
        <View style={styles.checkInSection}>
          <View style={styles.checkInContainer}>
            <Ionicons 
              name={checkInComplete ? "checkmark-circle" : "ellipse-outline"} 
              size={24} 
              color={checkInComplete ? "#4CAF50" : "#FFA726"} 
            />
            <Text style={styles.checkInText}>Check-in disponível</Text>
          </View>
        </View>

        {/* Today's Workout */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>É hora do treino!</Text>
          <View style={styles.workoutCard}>
            <View style={styles.workoutHeader}>
              <View>
                <Text style={styles.workoutTitle}>{todayWorkout.type}</Text>
                <Text style={styles.workoutDetails}>{todayWorkout.details}</Text>
              </View>
              <Text style={styles.workoutDate}>{todayWorkout.date}</Text>
            </View>
            
            <View style={styles.exercisesList}>
              {todayWorkout.exercises.map((exercise, index) => (
                <Text key={index} style={styles.exerciseItem}>{exercise}</Text>
              ))}
            </View>
            
            <TouchableOpacity style={styles.completeButton}>
              <Text style={styles.completeButtonText}>TREINO COMPLETO</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pending Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pendências</Text>
          {pendingItems.map((item) => (
            <View key={item.id} style={styles.pendingCard}>
              <View style={styles.pendingHeader}>
                <Ionicons name="warning" size={20} color="#FFA726" />
                <View style={styles.pendingInfo}>
                  <Text style={styles.pendingTitle}>{item.title}</Text>
                  <Text style={styles.pendingDate}>{item.date}</Text>
                </View>
              </View>
              {item.description && (
                <Text style={styles.pendingDescription}>{item.description}</Text>
              )}
              <TouchableOpacity style={styles.pendingButton}>
                <Text style={styles.pendingButtonText}>
                  {item.id === 1 ? "VER TODAS NOTIFICAÇÕES" : "REAGENDAR"}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Menu Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Funcionalidades</Text>
          <View style={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <View style={[styles.menuIcon, { backgroundColor: `${item.color}20` }]}>
                  <Ionicons name={item.icon} size={24} color={item.color} />
                </View>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#E30000',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  checkInSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  checkInContainer: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checkInText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  workoutCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  workoutDetails: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  workoutDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E30000',
  },
  exercisesList: {
    marginBottom: 20,
  },
  exerciseItem: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  completeButton: {
    backgroundColor: '#E30000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productPlaceholder: {
    height: 120,
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  productPlaceholderText: {
    color: '#999',
    fontSize: 14,
  },
  productInfo: {
    alignItems: 'flex-start',
  },
  seeAllButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  seeAllText: {
    color: '#E30000',
    fontSize: 14,
    fontWeight: '600',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#E30000',
    fontWeight: 'bold',
  },
  pendingCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pendingHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  pendingInfo: {
    marginLeft: 12,
    flex: 1,
  },
  pendingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  pendingDate: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  pendingDescription: {
    fontSize: 14,
    color: '#AAAAAA',
    lineHeight: 20,
    marginBottom: 15,
  },
  pendingButton: {
    backgroundColor: '#E30000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  pendingButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    backgroundColor: '#1E1E1E',
    width: '47%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'center',
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
  },
});