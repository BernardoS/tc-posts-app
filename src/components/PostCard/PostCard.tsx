import {
    PostCardContainer,
    PostCardImage,
    PostCardContent,
    PostCardTitle
} from "./PostCardStyle";
import LogoIcon from "../../assets/images/logo-icon.png"
import { router } from "expo-router";

interface PostCardProps {
    id: string,
    coverImage?: string,
    title: string
}


const PostCard: React.FC<PostCardProps> = ({ id, coverImage, title }) => {

    let cardImage = '';

    if (coverImage) {
        cardImage = coverImage
    }

    return (
        <PostCardContainer id={id}onPress={()=>router.navigate(`/post/${id}`)} >
            <PostCardImage source={LogoIcon} alt={title} className="post-card-image" />
            <PostCardContent>
                <PostCardTitle className="post-card-title">{title}</PostCardTitle>
            </PostCardContent>
        </PostCardContainer>
    );
};

export default PostCard;