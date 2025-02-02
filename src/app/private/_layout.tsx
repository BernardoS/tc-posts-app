import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { useAuth } from "@/contexts/AuthContext";
import { Redirect } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    const { isLoggedIn } = useAuth();

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

    if (!isLoggedIn) {
        return <Redirect href="/" />
    }

    return (
        <GestureHandlerRootView style={{ flex: 1, }}>
            <Drawer 
                screenOptions={{ 
                    headerShown: false,
                    drawerStyle:{
                        backgroundColor:"#08244B"
                    }
                 }}
                >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: "Página inicial",
                        drawerLabelStyle:{color:"#FCC918"},
                        drawerIcon: ({ size }) => <FontAwesome size={size} color="#FCC918" name="home" />,
                    }}
                />
                <Drawer.Screen
                    name="professor/managesystem"
                    options={{
                        drawerLabel: "Gerenciar plataforma",
                        drawerLabelStyle:{color:"#FCC918"},
                        drawerIcon: ({ size }) => <FontAwesome size={size} color="#FCC918" name="cogs" />
                    }}
                />
                 <Drawer.Screen
                    name="user/listuser"
                    options={{
                        drawerItemStyle:{display:'none'}
                    }}
                />
                <Drawer.Screen
                    name="user/saveuser"
                    options={{
                        drawerItemStyle:{display:'none'}
                    }}
                />
                 <Drawer.Screen
                    name="professor/manageuser"
                    options={{
                        drawerItemStyle:{display:'none'}
                    }}
                />
                <Drawer.Screen
                    name="post/[id]"
                    options={{
                        drawerItemStyle:{display:'none'}
                    }}
                />
                <Drawer.Screen
                    name="post/listpost"
                    options={{
                        drawerItemStyle:{display:'none'}
                    }}
                />
                <Drawer.Screen
                    name="post/savepost"
                    options={{
                        drawerItemStyle:{display:'none'}
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}