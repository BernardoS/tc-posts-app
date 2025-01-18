import {
    PostCardContainer,
    PostCardImage,
    PostCardContent,
    PostCardTitle
} from "./PostCardStyle";

interface PostCardProps{
    id:string,
    coverImage?:string,
    title:string
}


const PostCard:React.FC<PostCardProps> = ({ id,coverImage, title }) => {

        let cardImage = 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg';

        if(coverImage){
            cardImage = coverImage
        }

        return (
            <PostCardContainer id={id} >
                <PostCardImage src={cardImage} alt={title} className="post-card-image" />
                <PostCardContent>
                    <PostCardTitle className="post-card-title">{title}</PostCardTitle>
                </PostCardContent>
            </PostCardContainer>
        );
};

export default PostCard;