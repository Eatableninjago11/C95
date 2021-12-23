import React, {Component} from 'react';
import {Text,StyleSheet,View, TouchableOpacity, TextInput,Image} from 'react-native';

export default class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchInput: "",
            searchArtist: "",
            searchSong: "",
            searchLevel: "",
        }
    }

    searchSong = async () =>{
        var text = this.state.searchInput.toUpperCase();
        var searchText = text.split(""),
        
        const query = await db.collection("songs").where("name","==",text).get()
    }
}