import React, { memo } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

type FormData = {
  searchInput: string;
};

type Props = {
  onSubmit: (input: string) => void;
  onClear: () => void;
  text: string;
};

const SearchBar = ({ onClear, text, onSubmit }: Props) => {
  const { control, handleSubmit, getValues, reset } = useForm<FormData>();

  const handleReset = () => {
    reset();
    onClear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapInput}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Search Pokemon..."
              placeholderTextColor="#999"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="searchInput"
          defaultValue=""
        />

        {text && (
          <TouchableOpacity onPress={handleReset}>
            <AntDesign name="close" size={20} />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit((data: FormData) =>
          onSubmit(String(data.searchInput))
        )}
      >
        <FontAwesome name="search" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    rowGap: 10,
    marginTop: 12,
  },
  wrapInput: {
    flexDirection: "row",
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    fontFamily: "Poppins-Regular",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "white",
  },
});
