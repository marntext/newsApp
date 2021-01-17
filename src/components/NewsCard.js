import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const NewsCard= ({ news }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: news.imageUrl}}
                style={styles.image}
            />
            <Text style={styles.title}>{news.title}</Text>
            <Text styles={styles.desciription}>{news.description}</Text>
        </View>
    );
}

export { NewsCard };

const styles = StyleSheet.create ({
    container: {
        width: Dimensions.get('window').width * 0.95,
        borderWidth: 1,
        borderColor:'#eceff1',
        padding: 5,
        margin: 5,
        borderRadius: 5
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    description: {

    },

    image: {
        height: Dimensions.get('window').height * 0.25,
        borderRadius: 5
    }
})