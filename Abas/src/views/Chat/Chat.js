import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloChat from './estiloChat';

function Chat({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloChat.container}>
            <View style={estiloChat.borda}>

                <Text style={estiloChat.texto}>Futuro Chat</Text>

                <TouchableOpacity style={estiloChat.botaoContainer} onPress={voltar}>
                    <Text style={estiloChat.botaoTexto}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Chat;