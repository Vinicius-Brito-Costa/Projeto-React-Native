import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, FlatList  } from 'react-native';
import USUARIO from './../../../assets/usuario.png';

export default function Login(props) {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const cadastro = () => {
        alert('Função em construção.')
        /*alert(usuario)
        alert(senha)*/
    }
    const DATA = [
        { id: '4', titulo: 'Usuario', teclado: 'default', tipo: 'username', escondido: false, onChange: setUsuario },
        { id: '5', titulo: 'Senha', teclado: 'default', tipo: 'password', escondido: true, onChange: setSenha },
    ]
    const Item = ({ item }) => {
        return <TextInput style={[styles.input, styles.border]} placeholder={item.titulo}  keyboardType={item.teclado} textContentType={item.tipo} secureTextEntry={item.escondido} onChangeText={text => item.onChange(text) } />
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Image style={[styles.Image]} source={USUARIO} />
            <View style={[styles.main, styles.border2]}>
                <FlatList
                style={styles.flat}
                data={DATA}
                renderItem={Item}
                />
                <TouchableOpacity style={[styles.entrar, styles.border]} onPress={() => cadastro()}>
                    <Text style={[styles.entrarTexto]}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3f3579',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        height: '45%',
        width: '80%',
        borderRadius: 10,
        paddingTop: 10
    },
    border:{
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, .1)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, .1)',
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(255, 255, 255, .1)',
        borderRightWidth: 1,
        borderRightColor: 'rgba(255, 255, 255, .1)',
    },
    border2:{
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(255, 255, 255, 1)',
        borderTopWidth: 3,
        borderTopColor: 'rgba(255, 255, 255, 1)',
        borderLeftWidth: 3,
        borderLeftColor: 'rgba(255, 255, 255, 1)',
        borderRightWidth: 3,
        borderRightColor: 'rgba(255, 255, 255, 1)',
    },
    Image:{
        width: '60%',
        height: '35%',
        borderRadius: 100,
        marginVertical: 20,
        backgroundColor: 'white',
    },
    Login:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 10
    },
    input:{
        color: 'white',
        width: '95%',
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, .7)',
        height: 40,
        marginTop: 10,
        paddingLeft: 20,
        fontSize: 20,
        alignSelf: 'center'
    },
    entrar:{
        width: '85%',
        borderRadius: 5,
        backgroundColor: 'white',
        height: 65,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#32CD30',
        justifyContent:'center',
    },
    entrarTexto:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',        
        margin: 'auto',
        color: 'white'
    },
    flat:{
        width: '100%',
        height: 'auto'
    }
});


/*

                    <TextInput style={styles.input} placeholder='Nome' onChangeText={text => setNome(text)}/>
                    <TextInput style={styles.input} placeholder='Sobrenome' onChangeText={text => setSobreNome(text)}/>
                    <TextInput style={styles.input} placeholder='Telefone' keyboardType='phone-pad' onChangeText={text => setTelefone(text)}/>
                    <TextInput style={styles.input} placeholder='E-Mail' keyboardType='email-address' textContentType='emailAddress' onChangeText={text => setEmail(text)}/>
                    <TextInput style={styles.input} placeholder='Usuario' textContentType='username' onChangeText={text => setUsuario(text)}/>
                    <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} textContentType='password' onChangeText={text => setSenha(text)}/>
                    <CheckBox disabled={false} value={check} onValueChanges={(valor) => setCheck(valor)} />

*/