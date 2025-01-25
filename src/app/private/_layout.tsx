import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import * as Font from 'expo-font';

export default function Layout() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                'MavenPro-Bold': require('../../assets/fonts/MavenPro-Bold.ttf'),
                'MavenPro-ExtraBold': require('../../assets/fonts/MavenPro-ExtraBold.ttf'),
                'MavenPro-SemiBold': require('../../assets/fonts/MavenPro-SemiBold.ttf'),
            });
            setFontsLoaded(true);
        })();
    }, []);

    if (!fontsLoaded) {
        return null; // Ou exibir um carregamento
    }

    return (
        <GestureHandlerRootView style={{ flex: 1, }}>
            <Drawer screenOptions={{headerShown:false}}>
            </Drawer>
        </GestureHandlerRootView>
    )
}