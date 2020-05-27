import * as React from 'react';
import { Picker } from '@react-native-community/picker';
import { ResolutionProps } from './RESOLUTIONS';


export type PickerProps = {
  data: ResolutionProps[];
  platform?: string;
  onValueChange?: (itemValue: ResolutionProps | React.ReactText, itemIndex: number) => void;
}

export const YwnPicker = ({
  data,
  platform,
  onValueChange,
}: PickerProps) => {
  return (
    <Picker
      selectedValue={platform}
      style={{ height: 55, width: 260 }}
      onValueChange={onValueChange}
    >
      {data.map(item => (
        <Picker.Item
          key={item.name}
          label={item.name}
          value={item.name}
        />
      ))
      }
    </Picker>
  )
}