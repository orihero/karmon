import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MaskInput, { Masks, Mask } from 'react-native-mask-input';
import Text from '../text/Text';
import { balanceInputStyles } from './BalanceInput.styles';

export interface BalanceInputProps {
	currency?: string;
	balance?: number;
	decimalPoints?: number;
	isCurrencyLeft?: boolean;
}

const BalanceInput = ({
	balance = 0,
	currency = '$',
	decimalPoints = 1,
	isCurrencyLeft = true
}: BalanceInputProps) => {
	const priceMask = /^\d+(,\d{1,2})?$/;

	const [value, setValue] = useState('');

	return (
		<View style={balanceInputStyles.container}>
			{isCurrencyLeft && (
				<Text
					style={[
						balanceInputStyles.input,
						{ textAlignVertical: 'center' }
					]}
				>
					{currency}
				</Text>
			)}
			<TextInput
				keyboardType="numbers-and-punctuation"
				style={balanceInputStyles.input}
				autoFocus
			/>
			{!isCurrencyLeft && <Text>{currency}</Text>}
		</View>
	);
};

export default BalanceInput;

const styles = StyleSheet.create({});
