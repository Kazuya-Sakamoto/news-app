import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
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

//* オブジェクトスプレッド演算子
// * props 親から子にデータを送る
const ListItem = ({ imageUrl, title, author }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{uri: imageUrl}} 
      />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>{/* 3行以上は..... */}
        {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  )
}

export default ListItem;