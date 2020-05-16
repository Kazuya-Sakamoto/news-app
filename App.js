import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem'; //* component の import
import dummyArticles from './dummies/article.json'  //* dummyData を取得
import Constants from 'expo-constants'
import axios from 'axios'

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;


const styles = StyleSheet.create({
  container: {
    flex: 1, //* resetCss 同様画面いっぱい 
    backgroundColor: '#fff',
  },
});

export default function App() {
  const [articles, setArticles] = useState(); //*state　導入
  useEffect(() => { //* useEffect の導入
    fetchArticle();
    // const timer = setTimeout(() => { 
    // alert(Constants.manifest.extra.newsApiKey) //! API KEY がとれてるか alert で確認してみる
    //   setArticles(dummyArticles)
    // }, 2000);
    // return () => clearTimeout(timer) //* timer をクリーンアップする
  }, []) //* 空の配列を渡すとマウント時のみ発火する設定になる


  const fetchArticle = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={articles} //*dataの配列を入れる
      renderItem={({ item }) =>( 
        <ListItem
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    </SafeAreaView>
  );
}