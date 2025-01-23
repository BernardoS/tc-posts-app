import { FontAwesome } from "@expo/vector-icons";
import { ContainerLine, HeaderCloseButton, HeaderContainer, HeaderContent, HeaderTitle } from "./CloseableHeaderStyle";
import { router } from "expo-router";
import { ReactNode } from "react";


interface CloseableHeaderProps{
    children:ReactNode;
}

export default function CloseableHeader({children}:CloseableHeaderProps){

    return(
        <HeaderContainer>
            <HeaderContent>
                <HeaderCloseButton onPress={() => router.back()}>
                    <FontAwesome 
                        name="close"
                        size={30}
                        color="#FCC918"
                    />
                </HeaderCloseButton>
                <HeaderTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                    {children}
                </HeaderTitle>
            </HeaderContent>
            <ContainerLine/>
        </HeaderContainer>
    )

}

