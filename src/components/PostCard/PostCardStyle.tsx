import styled from "styled-components/native";

export const PostCardContainer = styled.TouchableOpacity`
    width: 100%;
    aspect-ratio:5/1;
    border-radius: 12px;
    overflow: hidden;
    background-color: #08244B;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display:flex;
    align-items:center;
    flex-direction:row;
    margin-bottom:8px;
`;

export const PostCardImage = styled.Image`
    margin-left:16px;
    width: 35px;
    aspect-ratio:140/177;
`;

export const PostCardContent = styled.View`
    background-color: #08244B;
    padding:8px 16px;
    height:80px;
`;

export const PostCardTitle = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #FCC918;
    margin: 0 0 8px;
`;