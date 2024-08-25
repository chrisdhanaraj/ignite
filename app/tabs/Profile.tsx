import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <View>
        <ThemedText>Profile</ThemedText>
      </View>
    </SafeAreaView>
  );
}
