import CloseableHeader from "@/components/CloseableHeader/CloseableHeader"
import { useAuth } from "@/contexts/AuthContext";
import { deletePostById, getPostById } from "@/services/api.service";
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
import { Redirect, router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler"


interface iPostData {
    title: string;
    description: string;
    content: string;
    author: string;
}


export default function SavePost() {

    const { permission } = useAuth();

    if (permission != "professor") {
        return <Redirect href="/private" />
    }

    const { id } = useLocalSearchParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    useFocusEffect(
        useCallback(() => {
            inicializaPagina();
        }, [id])
    );

    const inicializaPagina = () => {
        if (id) {
            getPostData(id.toString());
        } else {
            cleanPostData();
        }
    }

    const getPostData = async (id: string) => {
        const postData = await getPostById({ id });
        setTitle(postData.title);
        setDescription(postData.description);
        setContent(postData.content);
        setAuthor(postData.author);
    }

    const cleanPostData = () => {
        setTitle('');
        setDescription('');
        setAuthor('');
        setContent('');
    }

    const deletePost = async (id: string | undefined) => {
        if (id) {
            await deletePostById({ id });
            router.navigate('private/post/listpost');
        } else {
            Alert.alert("Ops... Alguma coisa aconteceu", "Não foi possível deletar o item, tente novamente mais tarde");
        }

    }


    var validatePost = ({ title, author, content, description }: iPostData): boolean => {
        return false
    }

    const handleSavePost = () => {

        const postToSave: iPostData = {
            title: '',
            author: '',
            content: '',
            description: ''
        }

        var postIsValid: boolean = validatePost(postToSave);

        if (postIsValid) {
            // salva o post
        }
    }



    return (
        <ScrollView>
            <CloseableHeader onCloseRoute={`/private/post/listpost`} >
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
                    value={content}
                    onChangeText={setDescription}
                    placeholder="Digite o conteúdo" />
                <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Autor</InputLabel>
                <SmallInput
                    value={author}
                    onChangeText={setTitle}
                    placeholder="Digite aqui o nome do autor" />
                <SavePostLine />
            </SavePostContent>
            <SavePostFooter>
                {id && (
                    <DeleteButton onPress={()=> deletePost(id)} >
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