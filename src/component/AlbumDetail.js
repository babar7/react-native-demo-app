import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

// if we have more then two refrance of props then we make it an object
const Albumdetail = ( {album}) => {
 
   const { title , artist , thumbnail_image, image, url } = album ;
   const { thumbnailStyle,
           headerContentStyle,
           thumbnailContainerStyle,
           hearderTextStyle,
           imageStyle
         } = styles ;
    return (
        <Card>
            <CardItem>
                <View style = {thumbnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{uri : thumbnail_image}} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={hearderTextStyle}>{title}</Text>
                    <Text>{artist }</Text>
                </View>
            </CardItem>

            <CardItem>
                <Image source = {{uri : image}}  style = {imageStyle}/>
            </CardItem>

            <CardItem>
                <Button onPress={ ()=> Linking.openURL(url)}>
                Buy now !
                </Button>
            </CardItem>

        </Card>
    );
};


const styles = {
    headerContentStyle : {
        flexDirection : 'column',
        justifyContent : 'space-around',
    },
    hearderTextStyle : {
        fontSize : 18 ,
    },
    thumbnailStyle : {
        height : 50 ,
        width : 50
    },
    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems : 'center' ,
        marginLeft : 10,
        margingRight : 10,
    },
    imageStyle : {
        height : 300 ,
        flex : 1,
        width : null 
    }
}
export default Albumdetail;