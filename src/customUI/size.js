import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const customWidth = size => {
  return (size / 320) * width;
};

export const customHeight = size => {
  return (size / 568) * height;
};

