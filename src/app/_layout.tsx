import 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { Slot } from "expo-router";
import { View } from "react-native";
import { AuthProvider } from '@/contexts/AuthContext';

export default function Layout() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                'MavenPro-Bold': require('../assets/fonts/MavenPro-Bold.ttf'),
                'MavenPro-ExtraBold': require('../assets/fonts/MavenPro-ExtraBold.ttf'),
                'MavenPro-SemiBold': require('../assets/fonts/MavenPro-SemiBold.ttf'),
            });
            setFontsLoaded(true);
        })();
    }, []);

    if (!fontsLoaded) {
        return null; // Ou exibir um carregamento
    }

    return (
        <AuthProvider>
            <View style={{ flex: 1 }}>
                <Slot />
            </View>
        </AuthProvider>
    )
}