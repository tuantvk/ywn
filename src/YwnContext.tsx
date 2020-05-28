import * as React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import ViewShot, {
  captureRef,
  releaseCapture,
} from "react-native-view-shot";
import RNFetchBlob from 'rn-fetch-blob';

import styles from './YwnStyles';
import { YwnPicker } from './YwnPicker';
import {
  RESOLUTIONS,
} from './RESOLUTIONS';
import getDimensions from './getDimensions';
import { asyncForEach } from './utils';


export type YwnContextProps = {
  navigation: any;
  route: any;
  screens?: string[];
  folder?: string;
  debug?: boolean;
  children: React.ReactNode;
}


const YwnContext = ({
  navigation,
  route,
  screens,
  folder,
  debug,
  children,
}: YwnContextProps) => {
  const refViewShot = React.useRef();
  const [platform, changePlatform] = React.useState<string>(RESOLUTIONS[0].name);
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

  const onCapture = React.useCallback((screen: string | undefined = 'Untitled') => {

    const _onCapture = async () => {
      const PATH_TO_WRITE = `${RNFetchBlob.fs.dirs.DownloadDir}/${folder}/${platform}/${screen}${Date.now()}.png`;
      try {
        let data = await captureRef(refViewShot);
        await RNFetchBlob.fs.writeFile(
          PATH_TO_WRITE,
          data,
          'uri'
        );
        releaseCapture(data);
      } catch (error) {
        console.warn("Oops, snapshot failed", error)
      }
    }

    _onCapture();

  }, []);


  const onCaptureAll = async () => {
    if (screens && screens.length > 0) {
      await asyncForEach(screens, async (screen: string) => {
        await new Promise((resolve, reject) => {
          let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(navigation.navigate(screen));
          }, 800);
        });
        await new Promise((resolve, reject) => {
          let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(onCapture(screen));
          }, 1800);
        })
      });
    }
  }

  const device = RESOLUTIONS[platformIndex];

  if (!debug) {
    return children;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.platform}>
        <View style={styles.btnControl}>
          {screens && screens.length > 0 ?
            <TouchableOpacity activeOpacity={.7} onPress={onCaptureAll} style={styles.captureAll}>
              <Text style={styles.textCapture}>Capture All</Text>
            </TouchableOpacity>
            : null
          }
          <TouchableOpacity activeOpacity={.7} onPress={() => onCapture('')} style={styles.capture}>
            <Text style={styles.textCapture}>Capture</Text>
          </TouchableOpacity>
        </View>
        <YwnPicker
          data={RESOLUTIONS}
          platform={platform}
          onValueChange={onValueChange}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.deviceName}>{device.name}</Text>
        <ViewShot ref={refViewShot}>
          <View
            key={route ? route.name : Date.now().toString()}
            style={[styles.devices, getDimensions(device.dimensions)]}
          >
            {children}
          </View>
        </ViewShot>
      </View>
    </View >
  );
}


YwnContext.defaultProps = {
  debug: true,
  folder: 'Ywn',
}

export default YwnContext;