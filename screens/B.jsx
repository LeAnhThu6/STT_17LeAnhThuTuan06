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
    image: require("../assets/cap1.png"),
  },
  {
    id: 2,
    image: require("../assets/cap2.png"),
  },
  {
    id: 3,
    image: require("../assets/cap3.png"),
  },
  {
    id: 4,
    image: require("../assets/cap4.png"),
  },
  {
    id: 5,
    image: require("../assets/cap5.png"),
  },
  {
    id: 6,
    image: require("../assets/cap6.png"),
  },
];

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        backgroundColor,
        height: (screenHeight - 100) / 3,
        width: screenWidth / 2,
        flexDirection: "column",
        flex: 1,
        left: 0,
      },
    ]}
  >
    <Image
      style={{ width: screenWidth / 2 - 20, height: 90, left: 5, top: 5 }}
      source={item.image}
    />
    <Text
      style={{
        width: 111,
        height: 28,
        fontStyle: FontFamily.robotoRegular,
        fontSize: 12,
        fontWeight: "500",
        top: 10,
        left: 20,
      }}
    >
      Cáp chuyển từ Cổng USB sang PS2...
    </Text>
    <Image
      style={{ width: 130, height: 14, left: 20, top: 15 }}
      source={require("../assets/rate.png")}
    />
    <View
      style={{
        flexDirection: "row",
        top: 20,
        left: 20,
        width: screenWidth / 2 - 20,
        height: 28,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontStyle: FontFamily.robotoBold,
          fontWeight: "bold",
        }}
      >
        69.900 đ
      </Text>
      <Text style={{ color: "gray", left: 20, fontSize: 12 }}>-39 %</Text>
    </View>
  </TouchableOpacity>
);

const B = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const [selectedId, setSelectedId] = useState(1);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "white" : "lightGray";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
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
        style={[styles.iconLayoutSearch]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Image
        style={[styles.bicartCheckIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cartRed.png")}
      />
      <Image
        style={[styles.iconLayoutMore]}
        contentFit="cover"
        source={require("../assets/more.png")}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }} // back ve trang truoc
      >
        <Image
          style={[styles.antDesignarrowLeftOutlinedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/antdesignarrowleftoutlined.png")}
        />
      </TouchableOpacity>
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
          numColumns={2}
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
    left: screenWidth - 100,
  },
  iconLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
    top: 6,
    position: "absolute",
  },
  iconLayoutSearch: {
    overflow: "hidden",
    top: 6,
    width: 192,
    height: 30,
    position: "absolute",
    left: 60,
  },
  iconLayoutMore: {
    overflow: "hidden",
    top: 20,
    width: 18,
    height: 4.36,
    position: "absolute",
    left: screenWidth - 50,
  },
  antDesignarrowLeftOutlinedIcon: {
    left: 17,
  },
});

export default B;
