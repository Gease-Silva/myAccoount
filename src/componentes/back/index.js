import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BackButton({ navigation }) {

    function goBack() {
        navigation.goBack();
    }

    return (
        <TouchableOpacity
            onPress={goBack}>
                <AntDesign name="left" size={28} color={'#fff'}/>
        </TouchableOpacity>
    );
}