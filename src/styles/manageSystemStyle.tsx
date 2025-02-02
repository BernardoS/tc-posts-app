import styled from "styled-components/native";


export const ManageSystemContainer = styled.View`
    display:flex;
    align-items:center;
`;

export const ManageSystemContent = styled.View`
    display:flex;
    width:90%;
`;

export const ManageSystemTitle = styled.Text`
    color:#1E4071;
    font-size:28px;
    margin: 8px 0px;
`;

export const ManageSystemSubTitle = styled.Text`
    color:#1E4071;
    opacity:0.8;
    font-size:16px;
    margin: 8px 0px;
`;

export const ManageSystemOptionsContainer = styled.View`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    gap:2%;
`

export const ManageSystemOption = styled.TouchableOpacity`
    width:48%;
    aspect-ratio:1;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#1E4071;
`;

export const ManageSystemOptionText = styled.Text`
    color:#FCC918;
    margin-top:8px;
    font-size:18px;
    text-align:center;
    width:70%;
`;

export const ManageSystemLine = styled.View`
    width:100%;
    height: 2px;
    background-color:#1E4071;
    margin-top:16px;
    margin-bottom:16px;
    border-radius:10px;
`;

export const CreateUserButton = styled.TouchableOpacity`
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