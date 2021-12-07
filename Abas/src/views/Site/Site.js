import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloSite from './estiloSite';

function Site({ navigation }) {

    const entrar = () => {
        open("https://3000-crimson-ox-km5sfwe7.ws-us21.gitpod.io/Inicial");
       }
    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={estiloSite.container}>
            <View style={estiloSite.borda}>

                <Text style={estiloSite.texto}>Site</Text>

                <TouchableOpacity style={estiloSite.botaoContainer} onPress={entrar}>
                    <Text style={estiloSite.botaoTexto}>Acesse nosso Site </Text>
                </TouchableOpacity>
                <TouchableOpacity style={estiloSite.botaoContainer} onPress={voltar}>
                    <Text style={estiloSite.botaoTexto}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Site;