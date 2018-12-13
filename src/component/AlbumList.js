import React, {Component}  from 'react';
import { ScrollView } from 'react-native';
// import axios from 'axios';  
import AlbumDetail from './AlbumDetail';


// Class base Componenet 
class AlbumList extends Component {
    // constructor(){
    //     super()
    //     this.state = {

    //     }
    // }
    state = { 
        albums : []
    }
    componentWillMount(){
       
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // .then((response)=>{
        //     console.log(response.data , "asdasad")
        //     this.setState({albums : response.data});

        // })
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({albums : responseJson});
        })
        .catch( error => {
            console.log(error, "Error Here");
        } )
    }
   
    renderAlbums(){
        return this.state.albums.map( (value, ind) =>  <AlbumDetail key={ind} album={value} />)
    }
    render() {
        return (
        <ScrollView>
            {/* { this.state.albums.map( (val, ind)=> {
                console.log(val, "value")
            })} */}

            {this.renderAlbums()}
        
        </ScrollView>
        )
    }
}
export default AlbumList;
