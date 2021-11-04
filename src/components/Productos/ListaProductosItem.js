import React from "react";
import {Image, StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import Icon from "react-native-ionicons";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    image:{
        width: 50,
        height: 50,
        marginRight: 15,
    },
    icon:{
        color: '#000',
        marginLeft: 'auto',
    },
    text:{
        marginLeft: -175,
      
    },
    text1:{
        marginLeft: -70,
      
    },
    text2:{
        marginLeft: -65,
      
    },

   
});

export default function ListaProductosItem({producto, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image source={{uri: producto.imagen}} style={styles.image}/>
            <Text >Nombre: {producto.nombre}</Text>
            <Text style={styles.text}>{"\n"}Marca: {producto.marca}</Text>
            <Text style={styles.text1}>{"\n"}{"\n"}Precio: {producto.precio}</Text>
            <Text style={styles.text2}>{"\n"}{"\n"}{"\n"}Existencia: {producto.existencia}</Text>
            <Icon name ="arrow-dropright-circle" style={styles.icon}/>
        </View>
        </TouchableOpacity>
       
    );
}