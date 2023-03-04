import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { createWalletVeiwStyles } from './CreateWalletView.styels';
import Dropdown from '../../components/dropdown/Dropdown';
import BackNavigation from '../../components/back-navigation/BackNavigation';
import Text from '../../components/text/Text';
import BalanceInput from '../../components/balance-input/BalanceInput';
import DefaultInput from '../../components/default-input/DefaultInput';
import DefaultButton from '../../components/default-button/DefaultButton';

const CreateWalletView = () => {
	const [loading, setLoading] = useState(false);

	return (
		<View style={createWalletVeiwStyles.container}>
			<View style={createWalletVeiwStyles.topNavigation}>
				<BackNavigation title="Add new wallet" />
				<View style={createWalletVeiwStyles.balanceContainer}>
					<Text style={createWalletVeiwStyles.balanceText}>
						Balance
					</Text>
					<BalanceInput balance={0} />
				</View>
			</View>
			<View style={createWalletVeiwStyles.content}>
				<Dropdown placeholder="Currency" />
				<DefaultInput placeholder="Name" />
				<DefaultButton text="Create" style={{ marginTop: 50 }} />
			</View>
		</View>
	);
};

export default CreateWalletView;
