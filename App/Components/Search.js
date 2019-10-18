/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity, Image, Keyboard} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors, Images } from '../Themes'
import { Icon } from 'react-native-elements'


export default class Search extends Component {

  render () {
    return (
      <View style={styles.container}>
        {/*Some styles with a fancy background and padding...*/}
        {/*user input and a search button!*/}
        <TextInput
          style={styles.textBar}
          placeholder={"Search for News"}
          value={this.props.searchText}
          onChangeText={(text) => this.props.onChangeText(text)}
          onSubmitEditing={() => this.props.onSubmitText()}
        />
        <Icon
          name="search"
          type="evilicon"
          color={Colors.fire}
          style={styles.searchIcon}
          onPress={() => this.props.onSubmitText()}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Colors.cloud,
    marginHorizontal: Metrics.marginHorizontal,
  },
  textBar:{
    flex: 1,
    padding: 10,
  },
  searchIcon: {
    position: "absolute",
  }
});
