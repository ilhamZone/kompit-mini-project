import Colors from "@/constants/colors";
import React, { memo } from "react";
import type { ReactNode } from "react";
import { Text } from "react-native";
import type { TextStyle } from "react-native";

interface Props {
  children: ReactNode;
  numberOfLines?: number | undefined;
  type?: "regular" | "bold" | "medium";
  style?: TextStyle | TextStyle[];
  color?: string;
  size?: number;
  lineHeight?: number;
  textAlign?: "left" | "center" | "right";
}

const Component = ({
  style,
  children,
  numberOfLines,
  type = "regular",
  color = Colors.text,
  size = 16,
  lineHeight,
  textAlign = "left",
}: Props) => {
  const _type = () => {
    if (type === "bold") {
      return "Poppins-Bold";
    }
    if (type === "medium") {
      return "Poppins-Medium";
    }
    return "Poppins-Regular";
  };

  return (
    <Text
      style={[
        {
          fontFamily: `${_type()}`,
          color,
          fontSize: size,
          lineHeight,
          textAlign,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default memo(Component);
