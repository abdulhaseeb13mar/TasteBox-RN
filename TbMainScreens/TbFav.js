/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  DzremoveFavAction,
  DzsetFavAction,
  DzsetCurrentProductAction,
} from '../TbStateManagement/TbActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {H_W} from '../TbFrequentUsage/TbResponsive';
import {colors} from '../TbFrequentUsage/TbColor';
import WrapperScreen from '../TbFrequentUsage/TbWrapperScreen';
import Loop from '../TbFrequentUsage/TbFlatList';
import NavigationRef from '../TbFrequentUsage/TbRefNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {DzVerticalTile} from './TbHome';
import SadHeart from '../AllAssets/UtilityAssets/sadheart.png';

const DzFavourites = (props) => {
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  const DzGoToSingleProduct = (item) => {
    props.DzsetCurrentProductAction(item);
    NavigationRef.Navigate('DzSP');
  };

  const DzGoBack = () => NavigationRef.Navigate('DzHome');

  return (
    <WrapperScreen style={{backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <Loop
          horizontal={false}
          data={props.DzFavs}
          renderItem={({item}) => (
            <DzVerticalTile
              item={item}
              DzGoToSingleProduct={DzGoToSingleProduct}
              DzFavs={props.DzFavs}
              DzsetFav={(fd) => props.DzsetFavAction(fd)}
              DzremoveFav={(fd) => props.DzremoveFavAction(fd)}
            />
          )}
          ListHeaderComponent={
            <>
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
                  <Ionicons
                    name="chevron-back"
                    color={colors.primary}
                    size={22}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: colors.primary,
                  }}>
                  {props.DzFavs.length} Favourites
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
                  <Feather name="shopping-bag" color="white" size={22} />
                </View>
              </View>
              {props.DzFavs.length === 0 && (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: HEIGHT * 0.8,
                  }}>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                      shadowOpacity: 0.36,
                      shadowRadius: 6.68,
                    }}>
                    <FastImage
                      source={SadHeart}
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
                    No Favourites!
                  </Text>
                </View>
              )}
            </>
          }
        />
      </View>
    </WrapperScreen>
  );
};

const mapStateToProps = (state) => {
  return {
    DzFavs: state.DzToggleFav,
  };
};

export default connect(mapStateToProps, {
  DzsetFavAction,
  DzsetCurrentProductAction,
  DzremoveFavAction,
})(DzFavourites);
