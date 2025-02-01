import Header from "@/components/Header/Header";
import PostCard from "@/components/PostCard/PostCard";
import { 
    PostListSubTitle, 
    PostListTitle, 
    SearchButton, 
    SearchInputContainer, 
    SearchInputText } from "@/styles/indexStyles";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";


interface iPost {
    _id: string;
    title?: string;
    description?: string;
    content?: string;
    author?: string;
    modifyDate?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
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

    const data: iPost[] = [
            { _id: '1', title: 'Geografia - O que é latitude e longitude?', description:'Descubra como a latitude e a longitude ajudam a localizar qualquer ponto no planeta e sua importância para a navegação e os sistemas de GPS' },
            { _id: '2', title: 'Geografia - O que é latitude e longitude?', description:'Descubra como a latitude e a longitude ajudam a localizar qualquer ponto no planeta e sua importância para a navegação e os sistemas de GPS' },
        ];
    
        const renderItem = ({ item }: { item: iPost }) => {
            return (
                <PostCard id={item._id} key={item._id} title={item.title}  description={item.description} />
            );
        };

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <PostListTitle style={{ fontFamily: 'MavenPro-Bold' }} >Pesquisar Posts</PostListTitle>
            <PostListSubTitle style={{ fontFamily: 'MavenPro-Bold' }}>Encontre aqui o que você precisa para saber mais de todas as matérias</PostListSubTitle>
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
                keyExtractor={(item: { _id: string }) => item._id}
                style={{padding:10}}
                keyboardShouldPersistTaps="handled"
            />
            
        </View>
    )
}

