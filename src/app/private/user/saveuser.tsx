import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import { DeleteButton, InputLabel, SaveButton, SaveUserContent, SaveUserFooter, SaveUserLine, SmallInput, SmallInputContainer } from "@/styles/saveUserStyles";
import { FontAwesome } from "@expo/vector-icons";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from '@react-native-picker/picker';
import { useAuth } from "@/contexts/AuthContext";
import { useFocusEffect } from "@react-navigation/native";
import { createUser, getUserById, updateUserById } from "@/services/api.service";


interface userData {
    id:string|undefined,
    name: string | undefined,
    email: string | undefined,
    password: string | undefined,
    permission: string | undefined
}

export default function SaveUser() {

    const { id, type } = useLocalSearchParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userPermission, setUserPermission] = useState('');
    const { permission } = useAuth();


    useFocusEffect(
        useCallback(() => {
            inicializaPagina();
        }, [id,type])
    );

    const inicializaPagina = () => {
        if (id) {
            getUserData(id.toString());
        } else {
            cleanUserData();
        }
    }

    const getUserData = async (id: string) => {
        const userData = await getUserById({ id });
        setName(userData.name);
        setEmail(userData.email);
        setPassword(userData.content);
        setUserPermission(userData.permission);
    }

    const cleanUserData = () => {
        setName('');
        setEmail('');
        setPassword('');
        setUserPermission(type.toString());
    }

    if (permission != "professor") {
        return <Redirect href="/private" />
    }

    function validateUserInput(user: userData): boolean {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^.{6,}$/; // Pelo menos 6 caracteres
        const validPermissions = ["professor", "student"];

        if (!user.name || !user.email || !user.permission) {
            console.log("Algo veio nulo")
            return false;
        }

        if (!nameRegex.test(user.name)) {
            console.log("nome inválido");
            return false;
        }

        if (!emailRegex.test(user.email)) {
            console.log("email inválido");
            return false;
        }

        const isCreatingUser = !id;

        if (isCreatingUser) {

            if (!user.password) {
                console.log("senha não preenchida");
                return false;
            }

            if (!passwordRegex.test(user.password)) {
                console.log("senha inválida");
                return false;
            }
        }

        if (!validPermissions.includes(user.permission)) {
            console.log("permissão inválida");
            return false
        }

        return true;
    }

    const saveUser = async() => {

        const user: userData = {
            id:undefined,
            name: name,
            email: email,
            password: password,
            permission: userPermission
        };

        const userInputIsValid = validateUserInput(user);

        if (!userInputIsValid) {
            Alert.alert("Dados inválidos", "Os dados do formulário estão incorretos! Preencha corretamente.");
            return;
        }


        if (id) {
            console.log("Vai atualizar!");
            user.id = id.toString();
            await updateUserById(user);
            router.navigate(`/private/user/listuser?type=${type}`);
        } else {
            console.log("Vai Salvar!");
            await createUser(user);
            router.navigate(`/private/user/listuser?type=${type}`);
        }

    }

    return (
        <ScrollView>
            <CloseableHeader onCloseRoute={`/private/user/listuser?type=${type}`}>
                {id ? <>Editar </> : <>Criar </>}
                {type == "professor" ? <>Professor </> : <>Aluno </>}
            </CloseableHeader>
            <SaveUserContent>
                <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Nome</InputLabel>
                <SmallInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Digite o nome do usuário" />


                {!id && (
                    <>
                        <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>E-mail</InputLabel>
                        <SmallInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Digite o e-mail do usuário"
                        />
                        <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Senha</InputLabel>
                        <SmallInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Digite a senha do usuário"
                            secureTextEntry />

                    </>
                )}

                {id && (
                    <>

                        <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Tipo do usuário</InputLabel>
                        <SmallInputContainer>
                            <Picker
                                style={{
                                    width: '100%',
                                }}
                                selectedValue={userPermission}
                                onValueChange={(itemValue, itemIndex) =>
                                    setUserPermission(itemValue)
                                }>
                                <Picker.Item label="Aluno" value="student" />
                                <Picker.Item label="Professor" value="professor" />
                            </Picker>
                        </SmallInputContainer>

                        <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>E-mail</InputLabel>
                        <SmallInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Digite o e-mail do usuário"
                            style={{ backgroundColor: "#9BAAC0" }}
                            editable={false} />
                    </>
                )}

                <SaveUserLine />
                <SaveUserFooter>
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
                    <SaveButton onPress={() => saveUser()}>
                        <Text style={{ fontFamily: 'MavenPro-Bold', color: "#08244B" }} >Salvar</Text>
                        <FontAwesome
                            name="save"
                            color="#08244B"
                            size={16}
                        />
                    </SaveButton>
                </SaveUserFooter>
            </SaveUserContent>
        </ScrollView >

    )
}