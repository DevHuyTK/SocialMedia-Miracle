import React, { useState } from 'react';
import { SafeAreaView, TouchableHighlight, StyleSheet, FlatList, Alert } from 'react-native';
import { View, ActivityIndicator } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { Avatar, ListItem, SearchBar } from 'react-native-elements';

function Search({ navigation: { goBack } }) {
  let loading = false;
  const data = [
    {
      email: 'huy@gmail.com',
      title: 'Huy đang code API',
      subTitle: 'gánh team',
    },
    {
      email: 'doanh@gmail.com',
      title: 'Doanh đang viết đặc tả',
      subTitle: 'đọc khó hiểu vl :v',
    },
    {
      email: 'thang@gmail.com',
      title: 'Thắng đang code UI',
      subTitle: 'nghịch là chính :)',
    },
  ];

  const [searchData, setSearchData] = useState([]);
  const [text, setText] = useState('');

  searchFunction = (text) => {
    let e = text.trim().toLowerCase();
    let filteredName = data.filter((item) => item.title.toLowerCase().match(e));
    if (!e || e === '') {
      setSearchData([]);
      setText(text);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      setSearchData([]);
      setText(text);
    } else if (Array.isArray(filteredName)) {
      setSearchData(filteredName);
      setText(text);
    }
  };

  renderHeader = () => {
    return (
      <SafeAreaView style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
        <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableHighlight
            underlayColor="#999"
            activeOpacity={0.5}
            style={styles.btnBack}
            onPress={() => goBack()}
          >
            <MaterialIcons name="chevron-left" color="black" size={30} />
          </TouchableHighlight>
        </View>
        <View style={{ width: '85%', justifyContent: 'center', alignItems: 'center' }}>
          <SearchBar
            placeholder="Search"
            style={{ borderRadius: 16 }}
            containerStyle={{
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: 16,
              borderBottomColor: '#fff',
              borderTopColor: '#fff',
            }}
            lightTheme
            round
            onChangeText={(text) => searchFunction(text)}
            autoCorrect={false}
            value={text}
          />
        </View>
      </SafeAreaView>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={searchData}
        renderItem={({ item }) => (
          <View>
            <ListItem onPress={() => Alert.alert('press')}>
              <Avatar rounded source={require('../../images/Logo.png')} />
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }}>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subTitle}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron color="white" />
            </ListItem>
            <View
              style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '14%',
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.email}
        ListHeaderComponent={renderHeader()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnBack: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
  },
});

export default Search;
