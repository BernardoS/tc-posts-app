import Header from "@/components/Header/Header";
import PostCard from "@/components/PostCard/PostCard";
import { getAllPosts } from "@/services/api.service";
import {
    PostListSubTitle,
    PostListTitle,
    SearchButton,
    SearchInputContainer,
    SearchInputText
} from "@/styles/indexStyles";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";


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
    
    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');

    const [postList, setPostList] = useState<iPost[]>();

    const handleSearch = () => {
        console.log("Pesquisa realizada com o termo:" + searchTerm)
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", ()=>getPosts());
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        if (searchParams.term != null && searchParams.term != "" && searchParams != undefined) {
            setSearchTerm(searchParams.term.toString());
        }
    }, [searchParams]);

    useEffect(()=>{
        getPosts();
    },[])


    const getPosts = async () => {

        const data = await getAllPosts();

        setPostList(data)
    }

    



    const renderItem = ({ item }: { item: iPost }) => {
        return (
            <PostCard id={item._id} key={item._id} title={item.title} description={item.description} />
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
                data={postList}
                renderItem={renderItem}
                keyExtractor={(item: { _id: string }) => item._id}
                style={{ padding: 10 }}
                keyboardShouldPersistTaps="handled"
            />

        </View>
    )
}

