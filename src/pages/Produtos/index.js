import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, FlatList  } from 'react-native';
import annePro260 from './../../../assets/produtos/annePro260.jpg';
import cougarMinosXT from './../../../assets/produtos/cougarMinosXT.jpg';
import G305Lightspeed from './../../../assets/produtos/G305Lightspeed.jpg';
import ps4 from './../../../assets/produtos/ps4.jpg';
import ps5 from './../../../assets/produtos/ps5.jpg';
import ramDDR48GB from './../../../assets/produtos/ramDDR48GB.jpg';

export default class Produtos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            produtos: []
        }
        this.Produto = this.Produto.bind(this);
    }
    async componentDidMount(){
        let resultado = [
            {
                nome: 'Anne Pro 2 60%',
                preco_antigo: '979.57',
                preco_atual: '685.72',
                imagem: annePro260
            },
            {
                nome: "Logitech G305 LIGHTSPEED",
                preco_antigo: null,
                preco_atual: "269.88",
                imagem: G305Lightspeed
            },
            {
                nome: "Cougar Minos XT Pink",
                preco_antigo: "193.84",
                preco_atual: "174.46",
                imagem: cougarMinosXT
            },
            {
                nome: "PS5",
                preco_antigo: "4499.89",
                preco_atual: "4274.90",
                imagem: ps5

            },
            {
                nome: "PS4",
                preco_antigo: "2799.89",
                preco_atual: "2399.90",
                imagem: ps4
            },
            {
                nome: "Memoria RAM DDR4 8GB",
                preco_antigo: "376.35",
                preco_atual: "269.90",
                imagem: ramDDR48GB
            }
        ]
        this.setState({produtos: resultado});
    }
    Produto = ({ item }) => {
        const atual = (parseInt(item.preco_atual)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        const antigo = (parseInt(item.preco_antigo)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return <View style={styles.boxProduto}>
                    <Image style={styles.imagemProduto} source={item.imagem}/>
                    <Text style={styles.tituloProduto}>{item.nome}</Text>
                    <Text style={styles.novoProduto}>Preço antigo: <Text style={styles.antigoProduto}>{antigo}</Text></Text>
                    <Text style={styles.novoProduto}>Preço novo: <Text style={styles.novoProduto}>{atual}</Text></Text>
                </View>
    }
    render(){
        return (
            <View style={styles.main}>
                <StatusBar hidden />
                <View style={styles.container}>
                    <FlatList
                    style={styles.flat}
                    data={this.state.produtos}
                    renderItem={this.Produto}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#3f3579',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    boxProduto:{
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#646081',
        padding: 10,
        borderRadius: 10,
    },
    imagemProduto:{
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    tituloProduto:{
        fontSize: 20,
        color: 'white',
    },
    antigoProduto:{
        color: 'red'
    },
    novoProduto:{
        fontSize: 18,
        color: 'white'
    },
    flat:{
        width: '100%'
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