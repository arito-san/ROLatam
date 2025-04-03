import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined;
    SignIn: undefined;
    ClockIn: undefined;
    Drawer: undefined;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
