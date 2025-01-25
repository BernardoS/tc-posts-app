import CloseableHeader from "@/components/CloseableHeader/CloseableHeader"
import {
    DeleteButton,
    InputLabel,
    LargeInput,
    MediumInput,
    SaveButton,
    SavePostContent,
    SavePostFooter,
    SavePostLine,
    SmallInput
} from "@/styles/savePostStyles";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler"


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


export default function SavePost() {

    const { id } = useLocalSearchParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <ScrollView>
            <CloseableHeader onCloseRoute={`/private/post/${id}`} >
                {id ? "Editar Post" : "Criar Post"}
            </CloseableHeader>
            <SavePostContent>
                <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Título</InputLabel>
                <SmallInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Digite o título" />
                <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Descrição</InputLabel>
                <MediumInput
                    multiline={true}
                    style={{
                        textAlignVertical: 'top'
                    }}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Digite uma descrição curta" />
                <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Conteúdo</InputLabel>
                <LargeInput
                    multiline={true}
                    style={{
                        textAlignVertical: 'top'
                    }}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Digite o conteúdo" />
                <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Título</InputLabel>
                <SmallInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Digite aqui o nome do autor" />
                <SavePostLine />
            </SavePostContent>
            <SavePostFooter>
                {id && (
                    <DeleteButton  >
                        <Text style={{ fontFamily: 'MavenPro-Bold', color: "#FCC918" }} >Apagar</Text>
                        <FontAwesome
                            name="trash"
                            color="#FCC918"
                            size={16}
                        />
                    </DeleteButton>
                )}
                <SaveButton>
                    <Text style={{ fontFamily: 'MavenPro-Bold', color: "#08244B" }} >Salvar</Text>
                    <FontAwesome
                        name="save"
                        color="#08244B"
                        size={16}
                    />
                </SaveButton>
            </SavePostFooter>
        </ScrollView>
    )
}