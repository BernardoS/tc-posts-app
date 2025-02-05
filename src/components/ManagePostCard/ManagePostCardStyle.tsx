import styled from "styled-components/native";

export const PostCardContainer = styled.TouchableOpacity`
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    background-color: #1E4071;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display:flex;
    align-items:center;
    flex-direction:row;
    margin-bottom:16px;
    padding-bottom:16px;
`;

export const PostCardImage = styled.Image`
    margin-left:16px;
    width: 35px;
    aspect-ratio:140/177;
`;

export const PostCardContent = styled.View`
    background-color: #1E4071;
    padding:8px 16px;
    height:90%;
    width:87%
`;

export const PostCardTitle = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #FCC918;
    margin: 0 0 8px;
    width:100%;
`;

export const PostDescriptionContainer = styled.View`
    width:90%;
`;

export const PostCardSubtitile = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color:#FFFFFF;
    margin: 0 0 8px;
`;

export const PostCardLine = styled.View`
    width:100%;
    height:2px;
    background-color:#f6f6f6;
    margin-bottom:4px;
`;

export const PostCardActionsContainer = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    gap:2%;
    width:100%;
`;

export const DeleteButton = styled.TouchableOpacity`
    background-color:#08244B;
    border:2px solid #FCC918;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:center;
    gap:8px;
    height:48px;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    width:48%;
`;

export const EditButton = styled.TouchableOpacity`
    background-color:#FCC918;
    border:2px solid #08244B;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    height:48px;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    width:48%;
    flex-direction:row;
`;