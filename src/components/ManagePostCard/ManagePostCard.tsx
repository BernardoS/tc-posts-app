import {
    PostCardContainer,
    PostCardImage,
    PostCardContent,
    PostCardTitle,
    PostCardLine,
    PostCardSubtitile,
    PostDescriptionContainer,
    PostCardActionsContainer,
    DeleteButton,
    EditButton
} from "./ManagePostCardStyle";
import LogoIcon from "../../assets/images/logo-icon.png"
import { router } from "expo-router";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, Text } from "react-native";

interface PostCardProps {
    id?: string,
    coverImage?: string,
    title?: string,
    description?: string,
    handleDeleteFunction:(id:string)=>void;
}


const ManagePostCard: React.FC<PostCardProps> = ({ id, coverImage, title, description, handleDeleteFunction }) => {

    let cardImage = '';

    if (coverImage) {
        cardImage = coverImage
    }

    function deleteItem(){
        console.log("Chegou aqui");
        /*if(id){
            handleDeleteFunction(id);
        }else{
            Alert.alert("Ops... Alguma coisa aconteceu","Não foi possível deletar o item, tente novamente mais tarde");
        }*/
    }

    function reduzirTexto(texto?:string, limite?:number) {
        
        if(texto && limite){
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
        <PostCardContainer id={id} >
            <PostCardImage source={LogoIcon} alt={title} className="post-card-image" />
            <PostCardContent>
                <PostCardTitle className="post-card-title">{reduzirTexto(title,80)}</PostCardTitle>
                <PostCardLine></PostCardLine>
                {description && (
                    <PostDescriptionContainer>
                        <PostCardSubtitile>
                            {reduzirTexto(description,120)}
                        </PostCardSubtitile>
                    </PostDescriptionContainer>
                )}
                <PostCardLine></PostCardLine>
                <PostCardActionsContainer>
                    <DeleteButton onPress={()=>deleteItem()}>
                        <FontAwesome name="trash" size={16} color="#FCC918" />
                        <Text style={{ fontFamily: 'MavenPro-Bold', color: '#FCC918' }}>
                            Apagar
                        </Text>
                    </DeleteButton>
                    <EditButton onPress={() => router.navigate(`/private/post/savepost?id=${id}`)}>
                        <FontAwesome name="pencil" size={16} color="#08244B" />
                        <Text style={{ fontFamily: 'MavenPro-Bold', color: '#08244B' }}>
                            Editar
                        </Text>
                    </EditButton>
                </PostCardActionsContainer>
            </PostCardContent>
        </PostCardContainer>
    );
};

export default ManagePostCard;