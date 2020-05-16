import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/article.json'

const styles = StyleSheet.create({
  container: {
    flex: 1, //* resetCss 同様画面いっぱい 
    backgroundColor: '#fff',
  },
});

export default function App() {
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