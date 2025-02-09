import styled from  'styled-components/native';

export const SearchInputContainer  = styled.View`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    position: relative;
`;

export const SearchInputText = styled.TextInput`
    width:95%;
    border:2px solid #08244B;
    border-radius:25px;
    height:64px;
    padding-left:32px;
    font-size:18px;
    font-weight:700;
    color:#1E4071;
    background-color:#F6F6F6;
`;

export const SearchButton = styled.TouchableOpacity`
    background-color:transparent;
    border:none;
    font-size:25px;
    width:25px;
    color: #08244B;
    cursor:pointer;
    position: absolute;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    right:35px;
    transition:0.3s;
`;

export const PostListTitle = styled.Text`
    color:#1E4071;
    font-size:28px;
    width:90%;
    align-self:center;
    margin: 8px 0px;
`;

export const PostListSubTitle = styled.Text`
    color:#1E4071;
    opacity:0.8;
    width:90%;
    align-self:center;
    font-size:16px;
    margin: 8px 0px;
`;

export const LoadingContainer = styled.View`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:50%;
`;