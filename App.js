import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/article.json'

const styles = StyleSheet.create({
  container: {
    flex: 1, //* resetCss 同様画面いっぱい 
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: "row" //*横並び  //*column 縦並び 
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1, //* スペースを使い切る
    padding: 10, 
    justifyContent: "space-between", //* 間を開ける 
  },
  text:{
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  }
});

export default function App() {
  // ? 一覧表示 変数
  // const items = articles.map((article, index) => {return(
  // <ListItem
  //   imageUrl={article.urlToImage}
  //   title={article.title}
  //   author={article.author}
  //   key={index}
  // />
  // )})
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={articles} //dataの配列を入れる
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