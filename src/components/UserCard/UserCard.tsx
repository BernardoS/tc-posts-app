import {
    UserCardContainer,
    UserCardContent,
    UserCardTitle,
    UserCardLine,
    UserCardSubtitile,
    UserDescriptionContainer,
    UserCardIconContainer,
    UserCardActionsContainer,
    EditButton,
    DeleteButton
} from "./UserCardStyle";
import LogoIcon from "../../assets/images/logo-icon.png"
import { router } from "expo-router";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import {
    Text
} from "react-native";

interface UserCardProps {
    id?: string,
    name?: string,
    email?: string,
    permission: string
}


const UserCard: React.FC<UserCardProps> = ({ id, name, email, permission }) => {

    function reduzirTexto(texto?: string, limite?: number) {

        if (texto && limite) {
            if (texto.length <= limite) return texto;

            let reduzido = texto.slice(0, limite);

            // Se o caractere seguinte não for um espaço, corta até o último espaço antes do limite
            if (texto[limite] !== ' ') {
                reduzido = reduzido.slice(0, reduzido.lastIndexOf(' '));
            }
            return reduzido + "...";
        }
        return "..."
    }

    return (
        <UserCardContainer id={id} onPress={() => router.navigate(`/private/user/saveuser?id=${id}&type=${permission}`)} >
            <UserCardIconContainer>
                <FontAwesome5 size={24} color="#FCC918" name={permission == "professor" ? "user-tie" : "user-graduate"} />
            </UserCardIconContainer>
            <UserCardContent>
                <UserCardTitle className="post-card-title">{reduzirTexto(name, 80)}</UserCardTitle>
                <UserCardLine></UserCardLine>
                <UserDescriptionContainer>
                    <UserCardSubtitile>
                        {email}
                    </UserCardSubtitile>
                </UserDescriptionContainer>
                <UserCardLine></UserCardLine>
                <UserCardActionsContainer>
                    <DeleteButton>
                        <FontAwesome name="trash" size={16} color="#FCC918" />
                        <Text style={{ fontFamily: 'MavenPro-Bold', color: '#FCC918' }}>
                            Apagar
                        </Text>
                    </DeleteButton>
                    <EditButton>
                        <FontAwesome name="pencil" size={16} color="#08244B" />
                        <Text style={{ fontFamily: 'MavenPro-Bold', color: '#08244B' }}>
                            Editar
                        </Text>
                    </EditButton>
                </UserCardActionsContainer>
            </UserCardContent>
        </UserCardContainer>
    );
};

export default UserCard;