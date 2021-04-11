/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import WrapperScreen from '../TbFrequentUsage/TbWrapperScreen';
import {View, Text} from 'react-native';
import {H_W} from '../TbFrequentUsage/TbResponsive';
import {colors} from '../TbFrequentUsage/TbColor';
import {Button} from 'react-native-elements';
import NavigationRef from '../TbFrequentUsage/TbRefNavigation';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DzresetCart} from '../TbStateManagement/TbActions';
import EmptyCart from '../AllAssets/UtilityAssets/happyCart.png';

function DzConfirmOrder(props) {
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  const ResetAndGoHome = () => {
    props.DzresetCart();
    NavigationRef.NavigateAndReset('DzHome');
  };
  return (
    <WrapperScreen
      barStyle="light-content"
      statusBar={colors.primary}
      style={{
        backgroundColor: colors.primary,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.46,
            shadowRadius: 6.68,
          }}>
          <FastImage
            source={EmptyCart}
            style={{
              width: H_W.width * 0.7,
              height: HEIGHT * 0.35,
            }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            width: H_W.width * 0.9,
            marginTop: 15,
            fontFamily: 'AvenirNextCondensed-HeavyItalic',
          }}>
          YOU HAVE ORDERED SUCCESSFULLY
        </Text>
        <Button
          onPress={ResetAndGoHome}
          title="ORDER MORE!"
          buttonStyle={{
            backgroundColor: 'white',
            width: H_W.width * 0.6,
            borderRadius: 10,
          }}
          raised
          titleStyle={{
            fontSize: 20,
            fontWeight: 'bold',
            borderRadius: 10,
            color: colors.primary,
            fontFamily: 'AvenirNextCondensed-HeavyItalic',
          }}
          containerStyle={{marginTop: 15, borderRadius: 10}}
        />
      </View>
    </WrapperScreen>
  );
}

export default connect(null, {DzresetCart})(React.memo(DzConfirmOrder));
