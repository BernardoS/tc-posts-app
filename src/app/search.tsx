import Header from "@/components/Header/Header";
import PostCard from "@/components/PostCard/PostCard";
import { PostListTitle, SearchButton, SearchInputContainer, SearchInputText } from "@/styles/searchStyles";
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
        router.navigate(`/search?term=${searchTerm}`);
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

            <PostListTitle style={{ fontFamily: 'MavenPro-Bold' }} >Pesquisa</PostListTitle>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: { id: string }) => item.id}
                numColumns={2} // Define o número de colunas
                columnWrapperStyle={{ justifyContent: 'space-around', padding: 8 }}
                keyboardShouldPersistTaps="handled"
            />
            
        </View>
    )
}

