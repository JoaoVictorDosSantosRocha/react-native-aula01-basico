import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirChat = () => {
        navigation.navigate('Chat')
    }

    const abrirResu = () => {
        navigation.navigate('Sobre')
    }
    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Bem-Vindo!</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirChat}>
                    <Text style={estiloInicial.botaoTexto}>Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirResu}>
                    <Text style={estiloInicial.botaoTexto}>Resumo do Projeto</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Inicial;