import React, {useEffect, useState} from "react";
import {FlatList, Text,TouchableHighlight,View } from "react-native";
import ListaProductos from "../components/Productos/ListaProductosItem";

const PRODUCTOS_LISTA =[
    {
        id: 1,
        nombre: 'Acetominofen MK',
        descripcion: 'Acetominofen mk 500mg - caja 100 unidades',
        precio: 57,
        existencia: 900,
        marca: 'MK',
        imagen: 'https://sucreenlinea.com/pub/media/catalog/product/cache/9047563d1f34e7daee3f925fb9ec1291/0/0/0070150_03_1_2.png'
    },
    {
        id: 2,
        nombre: 'Pomada de la Campana',
        descripcion: 'Pomada de la Campana 70gr',
        precio: 55,
        existencia: 152,
        marca: 'Campana',
        imagen: 'https://cdn11.bigcommerce.com/s-1ckji0j190/images/stencil/1280x1280/products/164/532/POMADA_DE_LA_CAMPANA_FRONT_copia__98517.1597765397.jpg?c=1'
    },
    {
        id: 3,
        nombre: 'Alcohol en Gel Genesis',
        descripcion: 'Alcohol en Gel Genesis olor natural Grande',
        precio: 34,
        existencia: 45875,
        marca: 'Genesis',
        imagen: 'https://genesis.com.gt/wp-content/uploads/2020/06/108901-alcohol-en-gel-8-onzas.png'
    },
   
];


export default function Home({navigation}){
    const [productos, setProductos] = useState(PRODUCTOS_LISTA);
    function handleOnPress() {
        navigation.navigate('Farmacia');
    }

    useEffect(function() {
        async function fetchData(){
            const response = await fetch('https://127.0.0.1:5001/api/productoss');
            const json = await response.json();
            setProductos(json);
        }
      fetchData();
    },[]);

    return(
        <View>
           <FlatList
           data={PRODUCTOS_LISTA}
           renderItem={({item}) =>(
                <ListaProductos producto={item} onPress={handleOnPress} />
           )}
           keyExtractor={item => item.id}
           ListHeaderComponent={
               <View>
                   <Text> Listado de Productos</Text>
               </View>
           }
           />
        </View>
    );
}