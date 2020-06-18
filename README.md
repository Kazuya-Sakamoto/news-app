# news-app
ReactNative

**Wikiにメモあり**


## Desgin
![スクリーンショット 2020-05-23 18 38 56](https://user-images.githubusercontent.com/56709557/82727345-e4216a00-9d24-11ea-86cc-2d1b89f0cc4a.png)![スクリーンショット 2020-05-23 18 39 10](https://user-images.githubusercontent.com/56709557/82727349-e7b4f100-9d24-11ea-8e01-0f3d0986dd55.png)
![スクリーンショット 2020-05-23 18 39 28](https://user-images.githubusercontent.com/56709557/82727378-192dbc80-9d25-11ea-921d-ce83f9e540f0.png)
![スクリーンショット 2020-05-23 18 39 49](https://user-images.githubusercontent.com/56709557/82727380-1a5ee980-9d25-11ea-9cc6-f79777f0c49c.png)

**expo constants**
```
expo install expo-constants
```
>https://docs.expo.io/versions/latest/sdk/constants/

**Axios install**
```
yarn add axios
```
>https://github.com/axios/axios

**api**
>https://newsapi.org/

**React Navigation**
```
yarn add @react-navigation/native
```
```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
```
yarn add @react-navigation/stack
```
>https://reactnavigation.org/docs/getting-started


**TouchableOpacity**
>https://reactnative.dev/docs/touchableopacity

**React Native WebView**
```
expo install react-native-webview
```
>https://docs.expo.io/versions/latest/sdk/webview/

**react-native-debugger**
```
 brew update && brew cask install react-native-debugger
```

https://github.com/jhen0409/react-native-debugger


### Redux
<img width="1023" alt="スクリーンショット 2020-05-16 19 12 57" src="https://user-images.githubusercontent.com/56709557/82117136-4e785e80-97a9-11ea-8e07-2a0405f0b522.png">

```
yarn add redux
```

**react-native-debugger**
```
 brew update && brew cask install react-native-debugger
 ```
 
>https://github.com/jhen0409/react-native-debugger

### Navbar の作成

```
yarn add @react-navigation/bottom-tabs
```
>https://reactnavigation.org/docs/bottom-tab-navigator

### Redux-Persist ローカルストレージにデータ保存
```
 yarn add redux-persist
```
>https://github.com/rt2zz/redux-persist

### 社内で確認
**buildコマンド**
```
expo publish
```

# React Nativeとは
<div align="center">
<img src="https://vitalify.jp/blog/wp-content/uploads/2019/10/reactnative.png" alt="属性" title="タイトル">
</div>
<br>
React Nativeとは、<br>
Reactは最初、JavaScriptを使用してWebのインターフェースを構築するためのソフトウェアとして登場しました。<br>
Facebookによって開発されたこと、特にWeb開発者に人気が高いこと以外は、ツールやベストプラクティスを備えた他のフレームワークと基本的に変わりません。<br>
フレームワークにはそれぞれに利便性があるものですが、Reactの利便性は「インターフェースはデータの関数である」というシンプルな考えに基づいてUI開発にクリーンなスタイルをもたらすことです。<br>
React Nativeが登場したのは約2年前ですが、モバイルのUI開発にも同じ考えをもたらしました。つまりWeb開発のコンセプトをモバイル開発の世界に持ち込んだのです。<br>
React Nativeは、PhoneGapやCordovaなどのフレームワークと同じカテゴリに分類されますが、これらよりも技術的に優れていると私は思います。


# React Characteristic
**1) UIが作りやすい**

Webアプリケーションではどんな画面が見えて、どんな機能を持っているかが重要になります。Webアプリケーションがどんな画面になっていて、どのように動作するのかを示すのがUI（ユーザーインターフェース）です。React.jsは、このUI機能を追加することに特化したライブラリで、開発を簡単にしてくれます。 


**2) 機能を部品化して再利用することが可能** <br>
React.jsは「コンポーネント指向」という考え方を採用しています。これは、開発した機能を自動車部品のように細かく分けて、再利用できる形にしています。1つのWebアプリケーションで開発した機能を、再度他のWebアプリケーションでも利用できるため、手間を大きく減らすことができます。 


**3) Webアプリケーションの表示処理が早くなる** 

Webアプリケーションを作成する上では、ユーザが入力した情報に応じてリアルタイムに更新される機能が重要になります。データバインディングとは、「ブラウザ上で表示される内容」と「HTMLテキストに記述している内容」が自動的に紐づいて更新される仕組みのことを指している言葉です。例えば、「Hello world」とWebブラウザ上に表示されているとします。表示されるテキストの内容を変更したい場合には、 

<img width="782" alt="スクリーンショット 2020-05-16 15 10 10" src="https://user-images.githubusercontent.com/56709557/82112396-71921680-9787-11ea-9d0d-46240226416a.png">

<引用>
> https://engineer.emilee.jp/blog/7344-20190704
> https://techacademy.jp/magazine/11652

