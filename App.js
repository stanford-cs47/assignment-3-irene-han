/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList,
  Dimensions, Platform, Image, ActivityIndicator, Keyboard } from 'react-native';
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
    Keyboard.dismiss();
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

  getArticleContent = () => {
    const {articles, loading} = this.state;
    let contentDisplayed = null;
    if (loading) {
      contentDisplayed = <ActivityIndicator
        size="large" color="black"/>
    } else {
      contentDisplayed = <News articles={articles}/>
    }
    return (
      <View style={styles.body}>
        {contentDisplayed}
      </View>
    )
  }

  render() {
    const {articles, loading} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Search
          onChangeText={this.onChangeText}
          onSubmitText={this.onSubmitText}
          searchText = {this.state.searchText}
        />
        {this.getArticleContent()}
      </SafeAreaView>
    );
  }
}

const Header = () => {
  return (
    <View style={styles.header}>
        <Image style={styles.logo} source={Images.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: Metrics.screenWidth,
    height: Metrics.navBarHeight,
    marginVertical: Metrics.marginHorizontal,
    resizeMode: "contain",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: Metrics.screenWidth,
    height: "100%",
    resizeMode: "contain",
  },
  body: {
    flex: 1,
  }
});
