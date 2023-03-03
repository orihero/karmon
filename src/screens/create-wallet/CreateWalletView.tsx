import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createWalletVeiwStyles } from './CreateWalletView.styels';
import Dropdown from '../../components/dropdown/Dropdown';
import BackNavigation from '../../components/back-navigation/BackNavigation';

const CreateWalletView = () => {
	return (
		<View style={createWalletVeiwStyles.container}>
			<View style={createWalletVeiwStyles.topNavigation}>
				<BackNavigation title="Add new wallet" />
			</View>
			<View style={createWalletVeiwStyles.content}>
				<Dropdown />
			</View>
		</View>
	);
};

export default CreateWalletView;
