import Header from "@/components/Header/Header";
import PostCard from "@/components/PostCard/PostCard";
import { PostListTitle, SearchButton, SearchInputContainer, SearchInputText } from "@/styles/indexStyles";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";

interface iPostCard {
    id: string; // ID do post
    title: string; // Título do post
    coverImage?: string; // URL da imagem de capa
}

export default function Search() {

    const searchParams = useLocalSearchParams();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log("Pesquisa realizada com o termo:"+searchTerm)
    }

    useEffect(() => {
        if (searchParams.term != null && searchParams.term != "" && searchParams != undefined) {
            setSearchTerm(searchParams.term.toString());
        }
    }, [searchParams]);

    const data: iPostCard[] = [
            { id: '1', title: 'Geografia - O que é latitude e longitude?' },
            { id: '2', title: 'Geografia - O que é latitude e longitude?' },
            { id: '3', title: 'Geografia - O que é latitude e longitude?' },
            { id: '4', title: 'Geografia - O que é latitude e longitude?' },
            { id: '5', title: 'Geografia - O que é latitude e longitude?' },
            { id: '6', title: 'Geografia - O que é latitude e longitude?' },
            { id: '7', title: 'Geografia - O que é latitude e longitude?' },
            { id: '8', title: 'Geografia - O que é latitude e longitude?' },
        ];
    
        const renderItem = ({ item }: { item: iPostCard }) => {
            return (
                <PostCard id={item.id} key={item.id} title={item.title} />
            );
        };

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <PostListTitle style={{ fontFamily: 'MavenPro-Bold' }} >Encontre aqui o que você precisa para saber mais de todas as matérias</PostListTitle>
            <SearchInputContainer>
                <SearchInputText
                    placeholder="O que você quer saber ?"
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <SearchButton
                    type="button"
                    onPress={handleSearch} >
                    <FontAwesome
                        size={24}
                        color={"#08244B"}
                        name="search" />
                </SearchButton>
            </SearchInputContainer>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: { id: string }) => item.id}
                style={{padding:10}}
                keyboardShouldPersistTaps="handled"
            />
            
        </View>
    )
}

