import { DeleteButton, EditButton, PostActionContainer, PostDate, PostHeader, PostSectionContainer, PostSectionTitle, PostTitle } from "@/styles/postStyles";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import GenericPostCover from "../../../assets/images/generic-post-cover.png";
import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import { FontAwesome } from "@expo/vector-icons";

interface iPost {
    _id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    modifyDate: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default function Post() {

    const { id } = useLocalSearchParams();
    const [postData, setPostData] = useState<iPost>();

    /*useEffect(()=>{
        axios.get(`http://localhost:3000/posts/${id}`).then(response => {
            setPostData(response.data);
          }).catch(error => {
            console.error('Error fetching post:', error);
          });
    },[id])*/

    return (
        <ScrollView>
            <CloseableHeader>
                Post
            </CloseableHeader>
            <PostHeader source={GenericPostCover} reziseMode="cover" >
                <PostTitle style={{ fontFamily: 'MavenPro-Bold' }}>Geografia - O que é latitude e longitude ? </PostTitle>
                <PostDate style={{ fontFamily: 'MavenPro-Bold' }}>Criado em: 22/11/2024</PostDate>
            </PostHeader>
            <PostSectionContainer>
                <PostSectionTitle style={{ fontFamily: 'MavenPro-Bold' }} >Descrição</PostSectionTitle>
                <Text style={{ fontFamily: 'MavenPro-Bold' }} >
                    Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Cevadis im ampola pa arma uma pindureta. Negão é teu passadis, eu sou faxa pretis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
                </Text>
            </PostSectionContainer>
            <PostSectionContainer>
                <PostSectionTitle style={{ fontFamily: 'MavenPro-Bold' }} >Conteúdo</PostSectionTitle>
                <Text style={{ fontFamily: 'MavenPro-Bold' }} >
                    Mussum Ipsum, cacilds vidis litro abeMmrtis.  Casamentiss faiz malandris se pirulitá. Sapien in monti palavris qui num significa nadis i pareci latim. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.

                    Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Interagi no mé, cursus quis, vehicula ac nisi.

                    Quem manda na minha terra sou euzis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Bota 1 metro de cachacis aí pra viagem! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                    Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem num gosta di mim que vai caçá sua turmis! Delegadis gente finis, bibendum egestas augue arcu ut est.
                </Text>
            </PostSectionContainer>
        </ScrollView>
    );
}