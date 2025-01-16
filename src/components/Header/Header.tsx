import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ParamListBase, useNavigation, } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { router } from "expo-router";
import {
    HeaderContainer,
    MenuButton,
    LogoHeader,
    LogoContainer
} from "./HeaderStyle";
import LogoHeaderMenu from "../../assets/logo-header-menu.png";

export default function Header() {

    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    const toggleDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <HeaderContainer >
            <MenuButton onPress={() => toggleDrawer()}>
                <FontAwesome size={20} name="bars" color={"#FCC918"} />
            </MenuButton>
            <LogoContainer>
                <LogoHeader source={LogoHeaderMenu} />
            </LogoContainer>

        </HeaderContainer>
    );
}


