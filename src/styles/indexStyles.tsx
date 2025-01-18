import styled from "styled-components/native";

export const BannerContainer = styled.ImageBackground`
    background-color:#808A96;
    height:250px;
    display:flex;
    align-items:center;
    justify-content:center;
`;
export const BannerText = styled.Text`
    font-size:24px;
    color:#FFFFFF;
    width:95%;
    font-family: sans-serif;
`;

export const BannerHighlightText = styled.Text`
    font-size:28px;
    color:#FCC918;
    margin-right:8px;
    margin-left:8px;
`;
export const SearchInputContainer  = styled.View`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    position: relative;
    margin-top:25px;
`;

export const SearchButton = styled.TouchableOpacity`
    width:95%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    border-radius:25px;
    height:64px;
    padding:0px 32px;
    font-size:18px;
    font-weight:700;
    background-color:#08244B;
    color:#FCC918;
    border:2px solid #FCC918;
`;

export const SearchText = styled.Text`
    font-size:18px;
    color:#FCC918;
`;

export const PostListTitle = styled.Text`
    color:#1E4071;
    font-size:28px;
    width:95%;
    align-self:center;
    margin: 16px 0px;
`;

export const PostCard = styled.TouchableOpacity`
    width: 48%;
    aspect-ratio:1/1;
    border-radius: 12px;
    overflow: hidden;
    background-color: #08244B;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
`;

export const PostCardImage = styled.Image`
    width: 100%;
    height: 60%;
    object-fit: cover;
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
