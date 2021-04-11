/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
  DzremoveCartAction,
  DzaddCartAction,
  DzsetCurrentProductAction,
  DzsetFavAction,
  DzremoveFavAction,
  DzresetCart,
} from '../TbStateManagement/TbActions';
import WrapperScreen from '../TbFrequentUsage/TbWrapperScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../TbFrequentUsage/TbColor';
import {H_W} from '../TbFrequentUsage/TbResponsive';
import RefNavigation from '../TbFrequentUsage/TbRefNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {DzVerticalTile} from './TbHome';
import CartBottomShapeSvg from '../AllAssets/Images/CartBottomShape';
import Loop from '../TbFrequentUsage/TbFlatList';
import DzItemCounterWrapper from '../TbFrequentUsage/TbItemCounterWrapper';
import EmptyCart from '../AllAssets/UtilityAssets/emptyCart.png';
import FastImage from 'react-native-fast-image';

export const Cart = (props) => {
  useEffect(() => {
    convertObjectToArray();
  }, [props.DzCart]);

  const [HorizontalCartArray, setHorizontalCartArray] = useState([]);

  const convertObjectToArray = () => {
    const CartArray = Object.keys(props.DzCart);
    let UsArr = [];
    CartArray.forEach((element) => {
      UsArr.push(props.DzCart[element]);
    });
    setHorizontalCartArray(UsArr);
  };

  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);

  const DzGoBack = () => RefNavigation.GoBack();

  const DzGoToSingleProduct = (item) => {
    props.DzsetCurrentProductAction(item);
    RefNavigation.Navigate('DzSP');
  };
  const DzinfoScreen = () =>
    props.DzTotalItems > 0 && RefNavigation.Navigate('DzContact');

  return (
    <WrapperScreen
      style={{backgroundColor: `rgba(${colors.rgb_Primary},0.1)`}}
      statusColor={`rgba(${colors.rgb_Primary},0.1)`}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: H_W.width * 0.04,
          marginVertical: HEIGHT * 0.015,
        }}>
        <TouchableOpacity
          onPress={DzGoBack}
          style={{
            borderColor: colors.lightGrey3,
            borderWidth: 1,
            paddingHorizontal: H_W.width * 0.02,
            paddingVertical: HEIGHT * 0.01,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 13,
            borderBottomRightRadius: 13,
          }}>
          <Ionicons name="chevron-back" color={colors.primary} size={22} />
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: colors.primary}}>
          Cart
        </Text>
        <View
          style={{
            paddingHorizontal: H_W.width * 0.02,
            paddingVertical: HEIGHT * 0.01,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 13,
            borderBottomRightRadius: 13,
          }}>
          <Feather
            name="shopping-bag"
            color={`rgba(${colors.rgb_Primary},0)`}
            size={22}
          />
        </View>
      </View>
      <View style={{flex: 1, paddingBottom: HEIGHT * 0.1}}>
        {props.DzTotalItems > 0 ? (
          <Loop
            horizontal={false}
            data={HorizontalCartArray}
            renderItem={({item}) => (
              <DzItemCounterWrapper
                position="top"
                Counterlength={HEIGHT * 0.15}
                style={{marginTop: HEIGHT * 0.05}}
                item={item}
                counterColor={colors.primary}
                counterContentColor={'white'}>
                <DzVerticalTile
                  item={item}
                  DzGoToSingleProduct={DzGoToSingleProduct}
                  DzFavs={props.DzFavs}
                  DzsetFav={(fd) => props.DzsetFavAction(fd)}
                  DzremoveFav={(fd) => props.DzremoveFavAction(fd)}
                />
              </DzItemCounterWrapper>
            )}
          />
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <View
              style={{
                shadowColor: '#606060',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
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
                color: colors.charcoal,
                opacity: 0.7,
                fontWeight: 'bold',
                fontSize: 25,
                marginTop: HEIGHT * 0.02,
              }}>
              Mr. Cart is empty!
            </Text>
          </View>
        )}
      </View>
      <View style={{position: 'absolute', bottom: 0}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: HEIGHT * 0.007 + insets.bottom,
            width: H_W.width,
            paddingHorizontal: H_W.width * 0.07,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontFamily: 'AvenirNext-Regular'}}>
              TOTAL AMOUNT:{'   '}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'AvenirNextCondensed-HeavyItalic',
                fontSize: 17,
              }}>
              $ {props.DzTotal}
            </Text>
          </View>
          <TouchableOpacity
            onPress={DzinfoScreen}
            style={{
              backgroundColor: colors.charcoal,
              paddingHorizontal: H_W.width * 0.05,
              paddingVertical: HEIGHT * 0.007,
              borderTopLeftRadius: 18,
              borderBottomRightRadius: 18,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 19,
                textAlign: 'center',
                fontStyle: 'italic',
                fontFamily: 'AvenirNextCondensed-HeavyItalic',
              }}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            shadowColor: '#606060',
            shadowOffset: {
              width: 0,
              height: -7,
            },
            shadowOpacity: 0.21,
            shadowRadius: 6.11,
            zIndex: -1,
          }}>
          <CartBottomShapeSvg width={H_W.width} height={HEIGHT * 0.24} />
        </View>
      </View>
    </WrapperScreen>
  );
};

const mapStateToProps = (state) => ({
  DzCart: state.DzCartReducer.items,
  DzTotal: state.DzCartReducer.totalAmount,
  DzFavs: state.DzToggleFav,
  DzTotalItems: state.DzCartReducer.totalItems,
});

export default connect(mapStateToProps, {
  DzremoveCartAction,
  DzaddCartAction,
  DzsetCurrentProductAction,
  DzsetFavAction,
  DzremoveFavAction,
  DzresetCart,
})(Cart);
