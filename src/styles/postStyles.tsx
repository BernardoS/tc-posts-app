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