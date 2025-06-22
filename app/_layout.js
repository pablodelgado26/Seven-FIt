import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs
            screenOptions={({ route, navigation }) => ({
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarActiveTintColor: '#E30000',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'home') iconName = 'home';
                    else if (route.name === 'pagamentos') iconName = 'card';
                    else if (route.name === 'treino') iconName = 'barbell';
                    else if (route.name === 'produtos') iconName = 'cart';
                    else if (route.name === 'menu') iconName = 'menu';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: route.name !== 'home',
                headerStyle: {
                    backgroundColor: '#E30000', // Fundo vermelho
                },
                headerTintColor: '#fff', // Cor dos ícones e texto do header
                headerLeft: route.name !== 'home'
                    ? () => (
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            color="#fff"
                            style={{ marginLeft: 16 }}
                            onPress={() => navigation.navigate('home')}
                        />
                    )
                    : undefined,
                headerRight: route.name !== 'home'
                    ? () => (
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="#fff"
                            style={{ marginRight: 16 }}
                            onPress={() => {/* ação do sino */}}
                        />
                        
                    )
                    : undefined,
            })}
        >
            <Tabs.Screen name="home" options={{ title: 'Home', headerShown: false }} />
            <Tabs.Screen name="pagamentos" options={{ title: 'Pagamentos' }} />
            <Tabs.Screen name="treino" options={{ title: 'Treino' }} />
            <Tabs.Screen name="produtos" options={{ title: 'Produtos' }} />
            <Tabs.Screen name="menu" options={{ title: 'Menu' }} />
        </Tabs>
    );
}
