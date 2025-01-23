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
        <GestureHandlerRootView style={{ flex: 1, }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        drawerIcon: ({ size, color }) => <FontAwesome size={size} color={color} name="home" />,
                        drawerLabel: 'Home'
                    }} />
                <Drawer.Screen
                    name="login"
                    options={{
                        headerShown: false,
                        drawerIcon: ({ size, color }) => <FontAwesome size={size} color={color} name="user" />,
                        drawerLabel: 'Área do professor'
                    }} />
                <Drawer.Screen
                    name="post/[id]"
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false
                    }} />
                <Drawer.Screen
                    name="aluno/admin/liststudent"
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false
                    }} />
                <Drawer.Screen
                    name="aluno/admin/savestudent"
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false
                    }} />
                <Drawer.Screen
                    name="professor/admin/saveprofessor"
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false
                    }} />
                <Drawer.Screen
                    name="professor/admin/listprofessor"
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false
                    }} />
                <Drawer.Screen
                    name="professor/admin/listpost"
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false
                    }} />
                <Drawer.Screen
                    name="professor/admin/savepost"
                    options={{
                        drawerItemStyle: { display: 'none' },
                        headerShown: false
                    }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}