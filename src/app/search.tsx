import { SearchButton, SearchInputContainer, SearchInputText } from "@/styles/searchStyles";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Search() {

    const searchParams = useLocalSearchParams();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        router.navigate(`/search?term=${searchTerm}`);
    }

    useEffect(() => {
        if(searchParams.term != null && searchParams.term != "" && searchParams != undefined){
            setSearchTerm(searchParams.term.toString());
        }
    }, [searchParams])

    return (
        <View>
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
            <Text>Pesquisa</Text>
        </View>
    )
}

