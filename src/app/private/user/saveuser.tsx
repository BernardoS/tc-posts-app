import CloseableHeader from "@/components/CloseableHeader/CloseableHeader";
import { DeleteButton, InputLabel, SaveButton, SaveUserContent, SaveUserFooter, SaveUserLine, SmallInput, SmallInputContainer } from "@/styles/saveUserStyles";
import { FontAwesome } from "@expo/vector-icons";
import { Redirect, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from '@react-native-picker/picker';
import { useAuth } from "@/contexts/AuthContext";

export default function SaveUser() {

    const { id, type } = useLocalSearchParams();

    const [name, setName] = useState('');
    const [userPermission, setUserPermission] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    const { permission } = useAuth();


    if (permission != "professor") {
        return <Redirect href="/private" />
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

                {!id && (
                    <>
                        <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>E-mail</InputLabel>
                        <SmallInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Digite o e-mail do usuário"
                            secureTextEntry />
                        <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>Senha</InputLabel>
                        <SmallInput
                            value={password}
                            onChangeText={setPassoword}
                            placeholder="Digite a senha do usuário"
                            secureTextEntry />

                    </>
                )}

                {id && (
                    <>
                        <InputLabel style={{ fontFamily: 'MavenPro-Bold' }}>E-mail</InputLabel>
                        <SmallInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Digite o nome do usuário"
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
                    <SaveButton>
                        <Text style={{ fontFamily: 'MavenPro-Bold', color: "#08244B" }} >Salvar</Text>
                        <FontAwesome
                            name="save"
                            color="#08244B"
                            size={16}
                        />
                    </SaveButton>
                </SaveUserFooter>
            </SaveUserContent>
        </ScrollView>

    )
}