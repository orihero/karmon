import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const createWalletVeiwStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.violetViolet100
	},
	topNavigation: {
		flex: 1,
		justifyContent: 'space-between'
	},
	content: {
		backgroundColor: theme.colors.baseLightLight100,
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
		paddingVertical: 24,
		paddingHorizontal: 16
	},
	balanceContainer: {
		margin: 16
	},
	balanceText: {
		...theme.textVariants.titleTitle3,
		color: theme.colors.baseLightLight80
	}
});
