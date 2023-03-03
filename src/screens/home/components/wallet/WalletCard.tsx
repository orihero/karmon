import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { walletCardStyles } from './WalletCard.styles';
import { Add } from '../../../../assets/icons/add';
import theme from '../../../../theme/theme';

export interface WalletCardProps {
	isEmpty?: boolean;
	onPress: () => void | undefined;
}

const WalletCard = ({ isEmpty = false, onPress }: WalletCardProps) => {
	if (isEmpty) {
		return (
			<TouchableOpacity
				onPress={onPress}
				style={[
					walletCardStyles.container,
					walletCardStyles.emptyContainer
				]}
			>
				<Add
					stroke={theme.colors.baseLightLight40}
					width={'40'}
					height={'40'}
				/>
				<Text style={walletCardStyles.emptyText}>Add wallet</Text>
			</TouchableOpacity>
		);
	}
	return (
		<View style={walletCardStyles.container}>
			<Text>wallet</Text>
		</View>
	);
};

export default WalletCard;
