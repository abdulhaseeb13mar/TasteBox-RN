/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {H_W} from '../TbFrequentUsage/TbResponsive';
import WrapperScreen from '../TbFrequentUsage/TbWrapperScreen';
import {connect} from 'react-redux';
import {colors} from '../TbFrequentUsage/TbColor';
import NavigationRef from '../TbFrequentUsage/TbRefNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {
  DzremoveFavAction,
  DzsetFavAction,
  DzaddCartAction,
  DzremoveCartAction,
} from '../TbStateManagement/TbActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartMiddleShapeSvg from '../AllAssets/Images/cartMiddleShape';
import CartBottomShapeSvg from '../AllAssets/Images/CartBottomShape';
import FastImage from 'react-native-fast-image';
import {Badge} from 'react-native-elements';
import StarRating from '../starRating';

function SingleProduct(props) {
  useEffect(() => {
    // checkIfFav();
  }, []);
  const DzProduct = props.DzProduct;
  // const [fav, setFav] = useState(false);
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);

  // const checkIfFav = () => {
  //   for (let us = 0; us < props.DzFavs.length; us++) {
  //     if (props.DzFavs[us].id === DzProduct.id) {
  //       setFav(true);
  //       break;
  //     }
  //   }
  // };

  // const toggleFav = () => {
  //   fav
  //     ? props.DzremoveFavAction(DzProduct.id)
  //     : props.DzsetFavAction(DzProduct);
  //   setFav(!fav);
  // };

  const DzAddToCart = () => {
    props.DzaddCartAction({...DzProduct});
  };

  const DzRemoveFromCart = () => {
    props.DzCart[DzProduct.id] !== undefined &&
      props.DzCart[DzProduct.id].added !== 0 &&
      props.DzremoveCartAction(DzProduct);
  };

  const DzGotoCart = () => NavigationRef.Navigate('DzCart');
  const DzGoBack = () => NavigationRef.GoBack();

  return (
    <WrapperScreen
      statusColor={`rgba(${colors.rgb_Primary}, 0.1)`}
      style={{backgroundColor: `rgba(${colors.rgb_Primary}, 0.1)`}}>
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
        <TouchableOpacity
          onPress={DzGotoCart}
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
          <Feather name="shopping-bag" color={colors.primary} size={22} />
          {props.DztotalItems > 0 && (
            <Badge
              value={props.DztotalItems}
              containerStyle={{position: 'absolute', bottom: 0, right: 0}}
              badgeStyle={{
                backgroundColor: 'red',
              }}
            />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: H_W.width * 0.05,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FastImage
          source={DzProduct.image}
          style={{
            width: '100%',
            height: HEIGHT * 0.4,
            marginTop: HEIGHT * 0.02,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
          }}
          resizeMode="contain"
        />
        <Text
          numberOfLines={2}
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 28,
            textAlign: 'center',
            fontFamily: 'AvenirNextCondensed-HeavyItalic',
          }}>
          {DzProduct.name.toUpperCase()}
        </Text>
        <Text
          numberOfLines={4}
          style={{
            color: 'white',
            fontStyle: 'italic',
            fontSize: 15,
            marginTop: HEIGHT * 0.015,
            textAlign: 'center',
            fontFamily: 'AvenirNext-Regular',
          }}>
          {DzProduct.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: HEIGHT * 0.015,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: H_W.width * 0.05,
              paddingVertical: HEIGHT * 0.007,
              borderTopLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 'bold',
                fontSize: 19,
                textAlign: 'center',
                fontStyle: 'italic',
              }}>
              $ {DzProduct.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: H_W.width * 0.07,
            }}>
            <StarRating size={H_W.width * 0.2} rating={DzProduct.rating} />
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {' '}
              {DzProduct.rating}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: H_W.width * 1,
          position: 'absolute',
          bottom: HEIGHT * 0.05,
          shadowColor: '#bcbcbc',
          shadowOffset: {
            width: 0,
            height: -HEIGHT * 0.03,
          },
          shadowOpacity: 0.61,
          shadowRadius: 15.11,
          zIndex: -1,
        }}>
        <CartMiddleShapeSvg width={H_W.width * 1.003} height={HEIGHT * 0.63} />
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
            paddingHorizontal: H_W.width * 0.09,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={DzRemoveFromCart}
              style={{
                borderColor: colors.lightGrey3,
                borderWidth: 1,
                paddingHorizontal: H_W.width * 0.01,
                paddingVertical: HEIGHT * 0.007,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 13,
                borderBottomRightRadius: 13,
              }}>
              <Entypo name="minus" color={colors.primary} size={23} />
            </TouchableOpacity>
            <Text
              style={{
                color: colors.charcoal,
                fontWeight: 'bold',
                fontSize: 22,
                textAlign: 'center',
                fontStyle: 'italic',
                fontFamily: 'AvenirNextCondensed-HeavyItalic',
                marginHorizontal: H_W.width * 0.025,
              }}>
              {props.DzCart[DzProduct.id] !== undefined
                ? props.DzCart[DzProduct.id].added
                : 0}
            </Text>
            <TouchableOpacity
              onPress={DzAddToCart}
              style={{
                borderColor: colors.lightGrey3,
                borderWidth: 1,
                paddingHorizontal: H_W.width * 0.01,
                paddingVertical: HEIGHT * 0.007,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 13,
                borderBottomRightRadius: 13,
              }}>
              <Entypo name="plus" color={colors.primary} size={23} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={DzAddToCart}
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
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -7,
            },
            shadowOpacity: 0.51,
            shadowRadius: 9.11,
            zIndex: -1,
          }}>
          <CartBottomShapeSvg width={H_W.width} height={HEIGHT * 0.24} />
        </View>
      </View>
    </WrapperScreen>
  );
}

const mapStateToProps = (state) => {
  return {
    DzProduct: state.DzCrntPrdtReducer,
    DzFavs: state.DzToggleFav,
    DztotalItems: state.DzCartReducer.totalItems,
    DzCart: state.DzCartReducer.items,
  };
};

export default connect(mapStateToProps, {
  DzsetFavAction,
  DzremoveFavAction,
  DzremoveCartAction,
  DzaddCartAction,
})(React.memo(SingleProduct));
