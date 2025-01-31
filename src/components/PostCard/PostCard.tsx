import {
    PostCardContainer,
    PostCardImage,
    PostCardContent,
    PostCardTitle,
    PostCardLine,
    PostCardSubtitile,
    PostDescriptionContainer
} from "./PostCardStyle";
import LogoIcon from "../../assets/images/logo-icon.png"
import { router } from "expo-router";
import React from "react";

interface PostCardProps {
    id?: string,
    coverImage?: string,
    title?: string,
    description?: string
}


const PostCard: React.FC<PostCardProps> = ({ id, coverImage, title, description }) => {

    let cardImage = '';

    if (coverImage) {
        cardImage = coverImage
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
        <PostCardContainer id={id} onPress={() => router.navigate(`/private/post/${id}`)} >
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
            </PostCardContent>
        </PostCardContainer>
    );
};

export default PostCard;