import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';
import { HomeView } from '../screens/home/HomeView';
import CreateWalletView from '../screens/create-wallet/CreateWalletView';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={routes.HomeScreen} component={HomeView} />
			<Stack.Screen
				name={routes.CreateWalletScreen}
				component={CreateWalletView}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;

const styles = StyleSheet.create({});
