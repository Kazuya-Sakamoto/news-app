import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/article.json'

const styles = StyleSheet.create({
  container: {
    flex: 1, //* resetCss 同様画面いっぱい 
    backgroundColor: '#fff',
  },
});

export default function App() {
  const [articles, setArticles] = useState(); //*state　導入
  useEffect(() => { //* useEffect の導入
    const timer = setTimeout(() => { 
      setArticles(dummyArticles)
    }, 2000);
    return () => clearTimeout(timer) //* timer をクリーンアップする
  }, []) //* 空の配列を渡すとマウント時のみ発火する設定になる
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