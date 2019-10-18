/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions, Platform, Image } from 'react-native';
import { Metrics, Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  onChangeText = text => {
    this.setState({searchText: text});
  }
  onSubmitText = () => {
    this.loadArticles(this.state.searchText);
    this.setState({searchText: ""});

  }

  componentDidMount() {
    this.loadArticles();
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  render() {
    const {articles, loading} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        {/*First, you'll need a logo*/}
        <View style={styles.header}>
            <Image style={styles.logo} source={Images.logo}/>
        </View>
        {/*Then your search bar*/}
        <Search
          onChangeText={this.onChangeText}
          onSubmitText={this.onSubmitText}
          searchText = {this.state.searchText}
        />

        {/*And some news*/}
        <News
          articles={this.state.articles}
        />
        {/*Though, you can style and organize these however you want! power to you 😎*/}
        {/*If you want to return custom stuff from the NYT API, checkout the APIRequest file!*/}

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: Metrics.screenWidth,
    height: Metrics.navBarHeight,
    margin: Metrics.marginHorizontal,
    resizeMode: "contain",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: Metrics.screenWidth,
    height: "100%",
    resizeMode: "contain",
  },
});
