import { FontAwesome } from "@expo/vector-icons";
import { ContainerLine, HeaderCloseButton, HeaderContainer, HeaderContent, HeaderTitle } from "./CloseableHeaderStyle";
import { router } from "expo-router";
import { ReactNode, useEffect, useState } from "react";


interface CloseableHeaderProps {
    children: ReactNode;
    onCloseRoute?: string;
}

export default function CloseableHeader({ onCloseRoute, children }: CloseableHeaderProps) {

    function onClose() {
        if (onCloseRoute) {
            router.navigate(onCloseRoute);
            return;
        }

        router.back();
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderCloseButton onPress={onClose}>
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
            <ContainerLine />
        </HeaderContainer>
    )

}

