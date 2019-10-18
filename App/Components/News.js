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
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, TouchableOpacity } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  //you can change the props above to whatever you want/need.

  render () {
    const {articles} = this.props;

    return (
      <View style={styles.container}>
        <FlatList style={styles.flatlist}
          data={articles}
          renderItem={({ item }) => (
            <Article item={item}/>
          )}
          keyExtractor={item => item.url}
        />
      </View>
    );
  }
}

function Article({ item }) {
  return (
    <TouchableOpacity onPress={() => {Linking.openURL(item.url)}}>
      <View style={styles.article}>
        <Text style={material.headline}>{item.title}</Text>
        <Text style={material.body1}>{item.snippet}</Text>
        <Text style={material.subheading}>{item.byline}</Text>
        <Text style={material.caption}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: Metrics.doubleBaseMargin,
    marginVertical: Metrics.marginVertical
  },
  flatlist: {
    width: "100%",
    height: "100%",
  },
  article: {
    marginVertical: Metrics.marginVertical,
  },
});
