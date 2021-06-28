import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, RouteProp} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: {
        name: string,
    },
    Register: undefined,
    // Profile: { userId: string };
    // Feed: { sort: 'latest' | 'top' } | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// const Stack = createStackNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: 'red',
        fontSize: 20,
    }
});

const Contetnt1 = () => {
    const onPress = () => {
        alert("dsadsa");
    };

    return (
        <View style={styles.container}>
            <Text>aaa Open up App.tsx to start working on your app!aaa</Text>
            <StatusBar style="auto" />
            <Text onPress={onPress} style={styles.button}>dsadas</Text>
        </View>
    );
};

interface CenterPropsType {
    children: React.ReactNode,
}

const Center = (props: CenterPropsType): React.ReactElement => {
    const { children } = props;

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {children}
        </View>
    )
}

interface LoginPropsType {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
    route: RouteProp<RootStackParamList, 'Login'>;
}

const Login = (props: LoginPropsType) => {
    const onPress = () => {
        props.navigation.navigate('Register');
    };

    // let name = props.route.params.name;

    let params = props.route.params;

    console.info('props', props);
    console.info('params', params);
    
    return (
        <Center>
            <Text>login</Text>
            <Button
                title="do rejestracji skocz"
                onPress={onPress}
            />
        </Center>
    );
};


interface RegisterPropsType {
    navigation: StackNavigationProp<RootStackParamList, 'Register'>;
    route: RouteProp<RootStackParamList, 'Register'>;
}


const Register = (props: RegisterPropsType) => {
    const onPress = () => {
        props.navigation.push('Login', { name: "dsda" });
        // props.navigation.navigate('')
    };

    return (
        <Center>
            <Text>Register</Text>
            <Button
                title="skocz do loginu"
                onPress={onPress}
            />
        </Center>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
