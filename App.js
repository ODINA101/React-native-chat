import React from 'react';
import { StyleSheet,KeyboardAvoidingView, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
export default class App extends React.Component {
  state = {
    messages: [],
  }





  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <KeyboardAvoidingView  behavior="padding" style={{flex:1,flexDirection:"column"}}>
      <GiftedChat
      messages={this.state.messages}
      onSend={messages => this.onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    
 </KeyboardAvoidingView>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
