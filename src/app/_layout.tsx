import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import 'react-native-gesture-handler';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        drawerIcon: ({size,color}) => <FontAwesome size={size} color={color} name="home" />,
                        drawerLabel:'Home'
                    }} />
                <Drawer.Screen
                    name="login"
                    options={{
                        headerShown: false,
                        drawerIcon: ({size,color}) => <FontAwesome size={size} color={color} name="user" />,
                        drawerLabel:'Área do professor'
                    }} />
                <Drawer.Screen
                    name="search"
                    options={{
                        headerShown: false,
                        drawerIcon: ({size,color}) => <FontAwesome size={size} color={color}  name="search" />,
                        drawerLabel:'Pesquisar posts'
                    }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}