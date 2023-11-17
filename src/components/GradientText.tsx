import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
interface GradientTextProps {
  text: string;
  colors: string[];
  style?: any;
}

const GradientText: React.FC<GradientTextProps> = ({text, colors, style}) => {
  return (
    <MaskedView
      style={{marginLeft: 5}}
      maskElement={
        <Text style={[style, {backgroundColor: 'transparent'}]}>{text}</Text>
      }>
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
        <Text style={[style, {opacity: 0}]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
