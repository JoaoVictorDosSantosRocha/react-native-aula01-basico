import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloResumo from './estiloResumo';

function Resumo({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return (
            <View style={estiloResumo.container}>
                <View style={estiloResumo.borda}>

                    <Text style={estiloResumo.texto}>
O projeto tem como objetivo a criação de um projeto web chamado “Health Music” que funcionária como uma comunidade de pessoas que compartilhariam experiências de como a música os ajudou em momentos difíceis e indicações de música para lidar com certas emoções como por exemplo a ansiedade. Além de uma aba especifica para listar os benefícios que a música fornece ao nosso cérebro com o intuito de tornar a rotina de escutar música em algo saudável e mais prazeroso.</Text>
<Text style={estiloResumo.texto}>Nome: João Victor dos Santos Rocha</Text>

                    <TouchableOpacity style={estiloResumo.botaoContainer} onPress={voltar}>
                        <Text style={estiloResumo.botaoTexto}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}
export default Resumo;