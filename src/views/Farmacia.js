import React from "react";
import { Text,View } from "react-native";

export default function Farmacia(){
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