/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import WrapperScreen from '../TbFrequentUsage/TbWrapperScreen';
import {colors, textFont} from '../TbFrequentUsage/TbColor';
import {H_W} from '../TbFrequentUsage/TbResponsive';
import Data from '../TbData';
import Loop from '../TbFrequentUsage//TbFlatList';
import RefNavigation from '../TbFrequentUsage/TbRefNavigation';
import {connect} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import FastImage from 'react-native-fast-image';
import {
  DzsetCurrentProductAction,
  DzremoveFavAction,
  DzsetFavAction,
} from '../TbStateManagement/TbActions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import DzSearchBar from '../DzComp/DzSearchBar';
// import DzHeader from '../DzComp/DzHeader';
// import UseHeader from '../TbFrequentUsage/TbHeader';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';
import SvgComp from '../AllAssets/Images/HomeSvg';
import TabUnderline from '../AllAssets/Images/TabUnderlineSvg';
import dp from '../AllAssets/Images/1.png';

function DzHome(props) {
  useEffect(() => {
    DzchangeTab(Data.category[0]);
  }, []);
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  const [Dzcategories, setDzcategories] = useState(Data.category);
  const [DzcurrentCat, setDzCurrentCat] = useState(Data.category[0]);
  const [DztabProducts, setDzTabProducts] = useState([]);

  const DzchangeTab = (tab) => {
    setDzCurrentCat(tab);
    const filteredProducts = Data.product.filter(
      (item) => item.categoryid === tab.id,
    );
    setDzTabProducts(filteredProducts);
  };

  // const DzGotoFav = () => RefNavigation.Navigate('DzFav');
  // const DzGotoCart = () => RefNavigation.Navigate('DzCart');
  // const DzGotoSearch = () => RefNavigation.Navigate('DzSearch');
  // const DzGoToSingleProduct = (item) => {
  //   props.DzsetCurrentProductAction(item);
  //   RefNavigation.Navigate('DzSP');
  // };

  return (
    <WrapperScreen style={{backgroundColor: 'white'}}>
      <ScrollView bounces={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: H_W.width * 0.04,
            marginVertical: HEIGHT * 0.015,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              // fontStyle: 'italic',
              fontSize: 40,
              color: colors.primary,
              fontFamily: 'AvenirNextCondensed-HeavyItalic',
            }}>
            TASTE BOX
          </Text>
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingHorizontal: H_W.width * 0.04,
            marginVertical: HEIGHT * 0.03,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: H_W.width * 0.03,
              paddingVertical: HEIGHT * 0.015,
              borderColor: colors.lightGrey3,
              borderWidth: 1,
              width: H_W.width * 0.7,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <AntDesign name="search1" size={18} color={colors.primary} />
            <Text
              style={{
                marginLeft: H_W.width * 0.02,
                fontWeight: 'bold',
                color: colors.lightGrey3,
              }}>
              Search Here...
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
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
            <AntDesign name="hearto" color={colors.primary} size={22} />
          </TouchableOpacity>
        </View>
        <Loop
          data={Dzcategories}
          renderItem={({item}) => (
            <TabList
              item={item}
              DzcurrentCat={DzcurrentCat}
              DzchangeTab={DzchangeTab}
            />
          )}
        />
        <Loop
          horizontal={false}
          data={DztabProducts}
          renderItem={({item}) => <DzVerticalTile item={item} />}
        />
      </ScrollView>
    </WrapperScreen>
  );
}

export const DzVerticalTile = ({
  item,
  DzGoToSingleProduct,
  DzFavs,
  DzremoveFav,
  DzsetFav,
}) => {
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.49,
        marginVertical: HEIGHT * 0.02,
      }}>
      <View
        style={{
          position: 'absolute',
          left: H_W.width * 0.03,
          width: H_W.width * 0.55,
          height: HEIGHT * 0.25,
          paddingTop: HEIGHT * 0.015,
          paddingLeft: H_W.width * 0.018,
        }}>
        <AntDesign name="hearto" color="white" size={22} />
        <Text
          numberOfLines={2}
          style={{
            fontWeight: 'bold',
            color: 'white',
            marginTop: HEIGHT * 0.02,
            fontSize: 18,
            fontStyle: 'italic',
          }}>
          {item.name}
        </Text>
        <Text
          numberOfLines={3}
          style={{color: 'white', fontSize: 12, marginTop: HEIGHT * 0.01}}>
          {item.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: HEIGHT * 0.015,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: H_W.width * 0.03,
              paddingVertical: HEIGHT * 0.004,
              borderTopLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
                fontStyle: 'italic',
              }}>
              $ {item.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: H_W.width * 0.04,
            }}>
            <AntDesign name="star" size={15} color="yellow" />
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {' '}
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
      <FastImage
        source={item.image}
        style={{
          width: H_W.width * 0.4,
          height: HEIGHT * 0.2,
          position: 'absolute',
          right: H_W.width * 0.01,
          top: HEIGHT * 0.05,
        }}
        resizeMode="contain"
      />
      <View style={{zIndex: -1, marginLeft: H_W.width * 0.03}}>
        <SvgComp width={H_W.width * 0.9} height={HEIGHT * 0.25} />
      </View>
    </View>
  );
};

export const TabList = ({item, DzchangeTab, DzcurrentCat}) => {
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  return (
    <TouchableOpacity
      onPress={() => DzchangeTab(item)}
      style={{
        backgroundColor:
          DzcurrentCat.name === item.name
            ? `rgba(${colors.rgb_Primary}, 0.25)`
            : 'white',
        paddingRight: H_W.width * 0.04,
        paddingTop: HEIGHT * 0.01,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginHorizontal: H_W.width * 0.02,
      }}>
      <Text
        style={{
          color:
            DzcurrentCat.name === item.name ? colors.primary : colors.darkGray,
          fontWeight: 'bold',
          fontSize: 16,
          textAlign: 'center',
          marginLeft: H_W.width * 0.04,
          fontStyle: 'italic',
          marginBottom: HEIGHT * 0.005,
        }}>
        {item.name}
      </Text>
      {DzcurrentCat.name === item.name && (
        <View>
          <TabUnderline width={H_W.width * 0.19} height={HEIGHT * 0.01} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const border = {
  borderWidth: 1,
  borderColor: 'red',
};
const styles = StyleSheet.create({
  DzHome21: {},
  DzHome20: {},
  DzHome19: {},
  DzHome18: {},
  DzHome17: {},
  DzHome16: {},
  DzHome15: {},
  DzHome14: {},
  DzHome13: {},
  DzHome12: {},
  DzHome11: {
    fontSize: 19,
    fontFamily: textFont.DINAlternate,
    color: colors.primary,
  },
  DzHome10: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  DzHome9: {
    marginLeft: H_W.width * 0.045,
    color: colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  DzHome8: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  DzHome7: {
    fontSize: 18.5,
    fontFamily: textFont.DINAlternate,
    color: colors.darkGray,
  },
  DzHome6: {
    margin: H_W.width * 0.023,
    width: H_W.width * 0.45,
    padding: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderRadius: 8,
  },
  DzHome5: {
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 17.11,
  },
  DzHome4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  DzHome3: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Verdana-Bold',
    fontStyle: 'italic',
    color: 'white',
  },
  DzHome2: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Verdana-Bold',
    color: 'white',
  },
  DzHome1: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tabIndicator: {
    width: 30,
    borderWidth: 1.8,
    borderRadius: 10,
    marginTop: 4,
    backgroundColor: colors.primary,
  },
  HomeTabsText: {
    marginLeft: H_W.width * 0.05,
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  HomeTabsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: H_W.width * 0.05,
    paddingLeft: H_W.width * 0.02,
    paddingRight: H_W.width * 0.04,
    borderRadius: 50,
  },
});

const mapStateToProps = (state) => {
  return {
    DztotalItems: state.DzCartReducer.totalItems,
    DzFavs: state.DzToggleFav,
  };
};

export default connect(mapStateToProps, {
  DzsetCurrentProductAction,
  DzremoveFavAction,
  DzsetFavAction,
})(DzHome);

/*<View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          marginTop: 80,
        }}>
        <View
          style={{
            position: 'absolute',
            width: 400,
            height: 200,
            borderRadius: 30,
            backgroundColor: 'black',
            zIndex: -1,
            transform: [{perspective: 850}, {rotateY: '40deg'}],
          }}></View>
        <FastImage
          source={SvgComp}
          style={{width: 180, height: 180, zIndex: 5}}
          resizeMode="contain"
        />
      </View> */
