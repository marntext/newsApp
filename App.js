import React, { cloneElement } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const pressFunction = () => {
    
    const user = {
      name: "MM",
      age: 37,
      isAdmin: false
    }

    const member = {
      ...user,
      password: "12345",
      type: null
    }

    // console.log(user)
    // console.log(member)

    const myObj = {
      url: 'www',
      data: [1,2,3],
      config: "empty"
    }

    const {config, url} = myObj
    console.log(config);
    console.log(url);

  }



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{  flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello React Native</Text>
        <Button  title='Log' onPress={pressFunction} />
      </View>
    </SafeAreaView>
  );
}

export default App;
