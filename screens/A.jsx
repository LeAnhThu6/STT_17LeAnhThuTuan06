import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import { FontFamily } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const DATA = [
  {
    id: 1,
    name: "Ca nấu lẩu, nấu mì mini...",
    shop: "Devang",
    image: require("../assets/ca_nau_lau.png"),
  },
  {
    id: 2,
    name: "1KG KHÔ GÀ BƠ TỎI...",
    shop: "LTD Food",
    image: require("../assets/ga_bo_toi.png"),
  },
  {
    id: 3,
    name: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
    image: require("../assets/xa_can_cau.png"),
  },
  {
    id: 4,
    name: "Đồ chơi dạng mô hình",
    shop: "Thế giới đồ chơi",
    image: require("../assets/do_choi_dang_mo_hinh.png"),
  },
  {
    id: 5,
    name: "Lãnh đạo giản đơn",
    shop: "Minh Long Book",
    image: require("../assets/lanh-dao-gian-don.png"),
  },
  {
    id: 6,
    name: "Hiểu lòng con trẻ",
    shop: "Minh Long Book",
    image: require("../assets/hieu-long-con-tre.png"),
  },
  {
    id: 7,
    name: "Donal Trump Thiên tài lãnh đạo",
    shop: "Minh Long Book",
    image: require("../assets/trump-1.png"),
  },
];

const Item = (
  { item, onPress, onPressNavigate, backgroundColor, textColor, textColorShop },
  props
) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.item,
      {
        backgroundColor,
        height: 100,
        width: screenWidth,
        flexDirection: "row",
        flex: 1,
        left: -17,
      },
    ]}
  >
    <Image style={{ width: 74, height: 74, left: -10 }} source={item.image} />
    <Text
      style={{
        flexDirection: "row",
      }}
    >
      <Text
        style={[
          styles.title,
          { fontSize: 13, fontFamily: FontFamily.interRegular },
        ]}
      >
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: textColorShop,
            fontSize: 14,
            fontFamily: FontFamily.interRegular,
          }}
        >
          Shop{" "}
        </Text>
        <Text
          style={[
            styles.title,
            {
              color: textColor,
              fontSize: 14,
              fontFamily: FontFamily.interRegular,
            },
          ]}
        >
          {item.shop}
        </Text>
      </View>
    </Text>
    <TouchableOpacity
      style={{
        backgroundColor: "red",
        width: 80,
        height: 40,
        left: 5,
        margin: "auto",
      }}
      onPress={onPressNavigate}
    >
      <Text style={[styles.title, { color: "white", margin: "auto" }]}>
        Chat
      </Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const A = (props) => {
  const { navigation, route } = props;
  const { navigate } = navigation;
  const [selectedId, setSelectedId] = useState(1);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "white" : "lightGray";
    const color = item.id === selectedId ? "red" : "black";
    const colorShop = item.id === selectedId ? "red" : "#7D5B5B";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        textColorShop={colorShop}
        onPressNavigate={() => navigate("B")}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.aItem, styles.aItemPosition]} />
      <Image
        style={[styles.aChild, styles.aItemPosition]}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={[styles.bicartCheckIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bicartcheck.png")}
      />
      <Image
        style={[styles.antDesignarrowLeftOutlinedIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/antdesignarrowleftoutlined.png")}
      />
      <View
        style={{
          top: 40,
          height: screenHeight - 100,
          width: screenWidth,
          left: 0,
        }}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
  },
  item: {
    padding: 20,
    left: 0,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
  aChild: {
    top: screenHeight - 50,
    height: 50,
  },
  aItemPosition: {
    position: "absolute",
  },
  aItem: {
    top: 0,
    backgroundColor: "#1ba9ff",
    height: 40,
  },
  aItemPosition: {
    width: screenWidth,
    left: 0,
    position: "absolute",
  },
  bicartCheckIcon: {
    left: screenWidth - 50,
  },
  iconLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
    top: 6,
    position: "absolute",
  },
  antDesignarrowLeftOutlinedIcon: {
    left: 17,
  },
});

export default A;
