import Header from "@/components/Header/Header";
import {  
    View, 
    FlatList 
} from "react-native";
import {
    BannerContainer,
    BannerHighlightText,
    BannerText,
    PostCard,
    PostCardContent,
    PostCardImage,
    PostCardTitle,
    PostListTitle,
    SearchButton,
    SearchInputContainer,
    SearchText
} from "../styles/indexStyles";
import BannerHome from '../assets/banner-home.png';
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

interface PostCard {
    id: string; // ID do post
    title: string; // Título do post
    coverImage: string; // URL da imagem de capa
}

export default function Index() {

    const data: PostCard[] = [
        { id: '1', title: 'Geografia - O que é latitude e longitude?', coverImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg' },
        { id: '2', title: 'Geografia - O que é latitude e longitude?', coverImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg' },
        { id: '3', title: 'Geografia - O que é latitude e longitude?', coverImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg' },
        { id: '4', title: 'Geografia - O que é latitude e longitude?', coverImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg' },
        { id: '5', title: 'Geografia - O que é latitude e longitude?', coverImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg' },
        { id: '6', title: 'Geografia - O que é latitude e longitude?', coverImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg' },
        { id: '7', title: 'Geografia - O que é latitude e longitude?', coverImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg' },
        { id: '8', title: 'Geografia - O que é latitude e longitude?', coverImage: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg' },
    ];

    const renderItem = ({ item }: { item: PostCard }) => {
        return (
            <PostCard id={item.id} >
                <PostCardImage src={item.coverImage} alt={item.title} className="post-card-image" />
                <PostCardContent>
                    <PostCardTitle className="post-card-title">{item.title}</PostCardTitle>
                </PostCardContent>
            </PostCard>
        );
    };


    const ListHeader = () => {
        return (
            <View >
                <BannerContainer source={BannerHome} resizeMode="cover">
                    <BannerText style={{ fontFamily: 'MavenPro-Bold' }}>
                        Encontre aqui o que você precisa para
                        <BannerHighlightText> saber mais </BannerHighlightText>
                        de todas as matérias
                    </BannerText>
                    <SearchInputContainer>
                        <SearchButton
                            type="button"
                            onPress={() => router.navigate('/search')} >
                            <SearchText style={{ fontFamily: 'MavenPro-Bold' }}>
                                Pesquisar um post
                            </SearchText>
                            <FontAwesome
                                size={24}
                                color={"#FCC918"}
                                name="arrow-right" />
                        </SearchButton>
                    </SearchInputContainer>
                </BannerContainer>

                <PostListTitle style={{ fontFamily: 'MavenPro-Bold' }}>
                    Posts mais recentes
                </PostListTitle>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: { id: string }) => item.id}
                numColumns={2} // Define o número de colunas
                columnWrapperStyle={{ justifyContent: 'space-around', padding: 8 }}
                ListHeaderComponent={<ListHeader />}
                keyboardShouldPersistTaps="handled"
            />

        </View>
    )
}