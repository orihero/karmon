import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { coloredPillStyles } from './ColoredPill.styles';
import theme from '../../../../theme/theme';
import { Expense } from '../../../../assets/icons/expense';
import { Income } from '../../../../assets/icons/income';
import { capitalizeFirstLetter } from '../../../../utils/strings';

export interface ColoredPillProps {
	type?: 'income' | 'expense';
	balance?: string;
}

const Pills = {
	expense: {
		Icon: Expense,
		backgroundColor: theme.colors.redRed100
	},
	income: {
		Icon: Income,
		backgroundColor: theme.colors.greenGreen100
	}
};

const ColoredPill = ({ balance, type = 'income' }: ColoredPillProps) => {
	const { Icon, backgroundColor } = Pills[type];
	return (
		<View
			style={[
				coloredPillStyles.container,
				{
					backgroundColor
				}
			]}
		>
			<View style={coloredPillStyles.iconContainer}>
				<Icon />
			</View>
			<View style={coloredPillStyles.textContainer}>
				<Text style={coloredPillStyles.titleText}>
					{capitalizeFirstLetter(type)}
				</Text>
				<Text style={coloredPillStyles.balanceText}>{balance}</Text>
			</View>
		</View>
	);
};

export default ColoredPill;
