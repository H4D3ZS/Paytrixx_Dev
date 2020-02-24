import React, { useState } from 'react';
import {Image, View, Dimensions} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Registration from './src/screens/Register';

const App: () => React$Node = () => {
  const [screen, changeScreen] = useState('app');

  return (
    <React.Fragment>
      { screen === 'app'? (<Container>
      <Content>
        <Body>
          <Image 
          source={require('./src/assets/images/logo.png')}
          resizeMode="cover"
          style={{flex: 1, width: 300, height: 500, resizeMode: 'contain'}}/>
            <Button rounded success onPress={() => changeScreen('Registration')}>
              <Text>Register</Text>
            </Button> 

        </Body>
      </Content>
    </Container>): <Registration></Registration> }
    </React.Fragment>
    

  );
};

export default App;