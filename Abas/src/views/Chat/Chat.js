import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloChat from './estiloChat';
import { useState, useCallback, useEffect } from 'react'

function Chat({ navigation }) {

    const entrar = () => {
     open("https://3000-crimson-ox-km5sfwe7.ws-us21.gitpod.io/Chat");
    }
    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloChat.container}>
            <View style={estiloChat.borda}>

                <Text style={estiloChat.texto}>Chat</Text>

                <TouchableOpacity style={estiloChat.botaoContainer} onPress={entrar}>
                    <Text style={estiloChat.botaoTexto}>Participe do Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloChat.botaoContainer} onPress={voltar}>
                    <Text style={estiloChat.botaoTexto}>Voltar</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}
export default Chat;