import Header from "@/components/Header/Header";
import PostCard from "@/components/PostCard/PostCard";
import { getAllPosts, getPostByText } from "@/services/api.service";
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
import { Alert, FlatList, View } from "react-native";


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


    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');

    const [postList, setPostList] = useState<iPost[]>();

    const validateSearchTerm = (term: string | undefined):boolean => {
        const termRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;

        if (!term)
            return false;

        if (!termRegex.test(term))
            return false;

        return true;
    }

    const handleSearch = async() => {
        if (!searchTerm) {
            await getPosts();
        } else {
            const searchTermIsValid = validateSearchTerm(searchTerm);

            if(!searchTermIsValid){
                Alert.alert("Ops... Houve um problema","O texto digitado não é valido, por favor, digite novamente!");
                return;
            }
            
            await searchPosts(searchTerm);
        }
    }


    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => getPosts());
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        getPosts();
    }, [])


    const searchPosts = async (text:string) =>{
        const data = await getPostByText({text});

        setPostList(data);
    }

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

