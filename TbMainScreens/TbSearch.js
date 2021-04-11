/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {H_W} from '../TbFrequentUsage/TbResponsive';
import WrapperScreen from '../TbFrequentUsage/TbWrapperScreen';
import NavigationRef from '../TbFrequentUsage/TbRefNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../TbFrequentUsage/TbColor';
import Data from '../TbData';
import Loop from '../TbFrequentUsage/TbFlatList';
import {connect} from 'react-redux';
import {
  DzsetCurrentProductAction,
  DzsetFavAction,
  DzremoveFavAction,
} from '../TbStateManagement/TbActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import SadMagnify from '../AllAssets/UtilityAssets/sadMagnify.png';
import {DzVerticalTile} from './TbHome';

function Search(props) {
  const [searchText, setSearchText] = useState('');

  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);

  const RenderSearchedResult = () => {
    var SearchedItems = Data.product.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    return SearchedItems.length === 0 ? (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: HEIGHT * 0.7,
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
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.9,
          }}>
          <FastImage
            source={SadMagnify}
            style={{
              width: H_W.width * 0.7,
              height: HEIGHT * 0.35,
              transform: [{rotate: '-30deg'}],
            }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            color: colors.charcoal,
            fontSize: 25,
            textAlign: 'center',
            width: H_W.width * 0.9,
            marginTop: 15,
            fontFamily: 'AvenirNextCondensed-HeavyItalic',
          }}>
          SORRY! NO FOOD FOUND
        </Text>
      </View>
    ) : (
      CardRender(SearchedItems)
    );
  };

  const DzGoToSingleProduct = (item) => {
    props.DzsetCurrentProductAction(item);
    NavigationRef.Navigate('DzSP');
  };

  const CardRender = (Arr) => {
    return (
      <Loop
        horizontal={false}
        data={Arr}
        renderItem={({item}) => (
          <DzVerticalTile
            item={item}
            DzGoToSingleProduct={DzGoToSingleProduct}
            DzFavs={props.DzFavs}
            DzsetFav={(fd) => props.DzsetFavAction(fd)}
            DzremoveFav={(fd) => props.DzremoveFavAction(fd)}
          />
        )}
      />
    );
  };
  const DzGoBack = () => NavigationRef.GoBack();

  const DzchangeSearchText = (t) => setSearchText(t);
  return (
    <WrapperScreen style={{backgroundColor: 'white'}}>
      <View style={styles.DzSearch1}>
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
          <Text style={styles.DzSearch2}>Search</Text>
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
        <View style={styles.DzSearch3}>
          <View
            style={{
              marginTop: HEIGHT * 0.01,
              marginBottom: -HEIGHT * 0.02,
              ...styles.DzSearch4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: H_W.width * 0.03,
                paddingVertical: HEIGHT * 0.015,
                borderColor: colors.lightGrey3,
                borderWidth: 1,
                width: '100%',
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <AntDesign name="search1" size={18} color={colors.primary} />
              <TextInput
                style={{
                  marginLeft: H_W.width * 0.02,
                  width: '90%',
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'black',
                }}
                placeholderTextColor={colors.lightGrey3}
                placeholder="Search Here..."
                onChangeText={DzchangeSearchText}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: HEIGHT * 0.06, flex: 1}}>
        {searchText !== '' ? RenderSearchedResult() : CardRender(Data.product)}
      </View>
    </WrapperScreen>
  );
}

const mapStateToProps = (state) => ({
  DzFavs: state.DzToggleFav,
});

export default connect(mapStateToProps, {
  DzsetCurrentProductAction,
  DzsetFavAction,
  DzremoveFavAction,
})(Search);

const styles = StyleSheet.create({
  DzSearch1: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  DzSearch2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.primary,
  },
  DzSearch3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  DzSearch4: {
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 17.11,
  },
});
