import styled from "styled-components/native";

export const PostHeader = styled.ImageBackground`
    min-height:160px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:5%;
`

export const PostTitle = styled.Text`
    font-size:32px;
    color:#FCC918;
`;

export const PostDate = styled.Text`
    font-size:14px;
    color:#F6F6F6;
`;

export const PostSectionContainer = styled.View`
    display:flex;
    flex-direction:column;
    padding-top:16px;
    padding-right:5%;
    padding-left:5%;
    margin-bottom:16px;
`;

export const PostSectionTitle = styled.Text`
    color:#1E4071;
    font-size:24px;
`;

export const PostActionContainer = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-top:16px;
    padding-right:5%;
    padding-left:5%;
    margin-bottom:16px;
`;

export const DeleteButton = styled.TouchableOpacity`
    background-color:#08244B;
    border:2px solid #FCC918;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:8px;
    height:48px;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    width:45%;
`;

export const EditButton = styled.TouchableOpacity`
    background-color:#FCC918;
    border:2px solid #08244B;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    gap:8px;
    height:48px;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    width:45%;
`;