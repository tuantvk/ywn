# ywn


<p align="center">
  <a href="https://github.com/tuantvk/ywn/issues">
    <img src="https://img.shields.io/github/issues/tuantvk/ywn.svg" alt="issues" />
  </a>
  <a href="https://github.com/tuantvk/ywn">
    <img src="https://img.shields.io/github/forks/tuantvk/ywn.svg" alt="forks" />
  </a>
  <a href="https://github.com/tuantvk/ywn/">
    <img src="https://img.shields.io/github/stars/tuantvk/ywn.svg" alt="stars" />
  </a>
  <a href="https://github.com/tuantvk/ywn/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/tuantvk/ywn.svg" alt="LICENSE" />
  </a>
</p>


## Usage


### Install

```bash
yarn add ywn
# or
npm install --save ywn
```


Install dependencies:

```bash
yarn add -D react-native-view-shot rn-fetch-blob
# or
npm install --save-dev react-native-view-shot rn-fetch-blob
```


#### Grant Permission to External storage

View on [rn-fetch-blob](https://github.com/joltup/rn-fetch-blob#readme)



### Example

```js
...
import { YwnContext } from 'ywn';

const Stack = createStackNavigator();

const Screens = props => (
  <YwnContext {...props} folder="test" screens={['Home', 'Details', 'Profiles']}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Profiles" component={Profiles} />
    </Stack.Navigator>
  </YwnContext>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screens" component={Screens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```



### Props

| Props       | Description                             | Default     | PropTypes   |
| ----------- | -----------                             | ----------- | ----------- |
| navigation  | props react navigation                  |             | any         |
| route       | props react navigation                  |             | any         |
| screens     | path all screen for Capture All screen  |  []         | string[]    |
| folder      | name folder save in Download            |  Ywn        | string      |
| debug       | mode debug                              |  true       | boolean     |



## License

MIT
