import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191b28',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  platform: {
    backgroundColor: '#242a3c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },
  btnControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: '#3490e2',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  captureAll: {
    backgroundColor: '#191e2c',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  textCapture: {
    color: '#fff',
  },
  devices: {
    backgroundColor: '#fff',
  },
  deviceName: {
    color: '#fff',
    marginBottom: 8,
  }
});