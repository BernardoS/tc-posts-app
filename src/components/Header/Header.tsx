import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import { ParamListBase, useNavigation, } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
    HeaderContainer,
    MenuButton,
    LogoHeader,
    LogoContainer,
    ContainerLine
} from "./HeaderStyle";
import LogoHeaderMenu from "../../assets/images/logo-header-menu.png";

export default function Header() {

    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    const toggleDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <View>
            <HeaderContainer>
                <MenuButton onPress={() => toggleDrawer()}>
                    <FontAwesome size={20} name="bars" color={"#FCC918"} />
                </MenuButton>
                <LogoContainer>
                    <LogoHeader source={LogoHeaderMenu} />
                </LogoContainer>
            </HeaderContainer>
            <ContainerLine></ContainerLine>
        </View>

    );
}


