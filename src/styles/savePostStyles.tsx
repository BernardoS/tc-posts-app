import styled from "styled-components/native";

export const SavePostContent = styled.View`
    display:flex;
    margin:auto;
    width:90%;
    padding-top:5%;
`;

export const SmallInput = styled.TextInput`
    width:100%;
    border:2px solid #08244B;
    border-radius:10px;
    height:64px;
    padding-left:32px;
    font-size:18px;
    font-weight:700;
    color:#1E4071;
    background-color:#F6F6F6;
`;

export const MediumInput = styled.TextInput`
    width:100%;
    border:2px solid #08244B;
    border-radius:10px;
    height:200px;
    padding-left:32px;
    font-size:18px;
    font-weight:700;
    color:#1E4071;
    background-color:#F6F6F6;
`;


export const LargeInput = styled.TextInput`
    width:100%;
    border:2px solid #08244B;
    border-radius:10px;
    height:400px;
    padding-left:32px;
    font-size:18px;
    font-weight:700;
    color:#1E4071;
    background-color:#F6F6F6;
`;

export const InputLabel = styled.Text`
    color:#08244B;
    font-size:16px;
    align-self:start;
    margin:8px 0px 4px 8px;
`;
export const SavePostLine = styled.View`
    width:100%;
    height: 2px;
    background-color:#08244B;
    margin-top:8px;
    margin-bottom:8px;
`;

export const SavePostFooter = styled.View`
    display:flex;
    margin:auto;
    width:90%;
    padding-top:5%;
    padding-bottom:5%;
    flex-direction:row;
    justify-content:space-between;
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


export const SaveButton = styled.TouchableOpacity`
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

export const CreatePostButton = styled.TouchableOpacity`
    background-color: #FCC918;
    border:2px solid #08244B;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:center;
    gap:8px;
    height:48px;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    width:100%;
`;