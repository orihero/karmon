import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const createWalletVeiwStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between'
	},
	topNavigation: {
		flex: 1,
		backgroundColor: theme.colors.violetViolet100
	},
	content: {}
});
