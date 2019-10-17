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
import { StyleSheet, View, Button, TextInput, TouchableOpacity, Image} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors, Images } from '../Themes'
import { Icon } from 'react-native-elements'


export default class Search extends Component {

  render () {
    return (
      <View style={styles.search}>
        {/*Some styles with a fancy background and padding...*/}
        {/*user input and a search button!*/}
        <TextInput
          style={styles.textBar}
          placeholder={"Search for News"}
          backgroundColor={Colors.cloud}
        />
        {/* <Icon
          name="search"
          type="evilicon"
          style={styles.searchIcon}
        /> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  search: {
    width: "100%",
    flexDirection: "row",
    padding: Metrics.baseMargin,
    position: "relative"
  },
  textBar:{
    width: "100%",
    height: 40,
    padding: Metrics.baseMargin,
    borderRadius: 10
  },
  button: {
    position: "absolute",
  },
  searchIcon: {
    tintColor: "red"
  }
});
