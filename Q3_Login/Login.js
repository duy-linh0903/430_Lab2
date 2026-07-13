import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

const LoginScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    placeholder="Phone"
                    style={styles.input}/>
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;