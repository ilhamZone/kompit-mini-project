import { Dimensions } from "react-native";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const findUlrId = (url: string) => {
  const match = url.match(/\/(\d+)\//);
  const id = match ? match[1] : null;
  return id;
};

export const RPH = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};

export const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};
