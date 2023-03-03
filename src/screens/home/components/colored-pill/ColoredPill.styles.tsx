import { StyleSheet } from 'react-native';
import theme from '../../../../theme/theme';

export const coloredPillStyles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 8,
		padding: 16,
		borderRadius: 28,
		flexDirection: 'row'
	},
	iconContainer: {
		padding: 8,
		backgroundColor: theme.colors.baseLightLight80,
		borderRadius: 16
	},
	textContainer: {
		marginLeft: 10
	},
	balanceText: {
		color: theme.colors.baseLightLight80,
		...theme.textVariants.titleTitle2
	},
	titleText: {
		color: theme.colors.baseLightLight80,
		...theme.textVariants.bodyBody3
	}
});
