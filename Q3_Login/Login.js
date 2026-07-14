import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from "./style";

const LoginScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.container}>
            <View style={Styles.container}>
                <Text style={Styles.title}>Login</Text>
                <TextInput
                    placeholder="Phone"
                    style={Styles.input}/>
                <TextInput
                    placeholder="Password"
                    style={Styles.input}
                    secureTextEntry/>
                <TouchableOpacity style={Styles.btn}>
                    <Text style={Styles.btntext}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;