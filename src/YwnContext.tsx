import * as React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import ViewShot, {
  captureRef,
} from "react-native-view-shot";
import RNFetchBlob from 'rn-fetch-blob';

import { YwnPicker } from './YwnPicker';
import {
  RESOLUTIONS,
} from './RESOLUTIONS';
import getDimensions from './getDimensions';


export type YwnContextProps = {
  children: React.ReactNode;
}


const YwnContext = ({
  children,
}: YwnContextProps) => {
  const refViewShot = React.useRef();
  const [platform, changePlatform] = React.useState<string>('');
  const [platformIndex, changeIndex] = React.useState<number>(0);


  React.useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ])
  }

  const onValueChange = (
    itemValue: string, index: number
  ): void => {
    changePlatform(itemValue);
    changeIndex(index);
  }

  const onCapture = () => {
    const PATH_TO_WRITE = `${RNFetchBlob.fs.dirs.DownloadDir}/Ywn/${platform}/${Date.now()}.jpg`;
    captureRef(refViewShot)
      .then(
        data => {
          RNFetchBlob.fs.writeFile(PATH_TO_WRITE, data, 'uri')
        },
        error => console.error("Oops, snapshot failed", error)
      );
  }

  const device = RESOLUTIONS[platformIndex];

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.platform}>
        <TouchableOpacity activeOpacity={.7} onPress={onCapture} style={styles.capture}>
          <Text style={styles.textCapture}>Capture</Text>
        </TouchableOpacity>
        <YwnPicker
          data={RESOLUTIONS}
          platform={platform}
          onValueChange={onValueChange}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.deviceName}>{device.name}</Text>
        <ViewShot ref={refViewShot} options={{ format: "jpg", quality: 0.9, result: "base64" }}>
          <View style={[styles.devices, getDimensions(device.dimensions)]}>
            {children}
          </View>
        </ViewShot>
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  platform: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  capture: {
    backgroundColor: '#f37121',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 4,
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

export default YwnContext;