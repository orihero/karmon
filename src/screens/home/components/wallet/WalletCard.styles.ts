import { Dimensions, Platform, StyleSheet } from 'react-native';
import theme from '../../../../theme/theme';

const { width } = Dimensions.get('screen');
export const walletWidth = width - (2.5 * width) / 10;

export const walletCardStyles = StyleSheet.create({
	container: {
		width: walletWidth,
		height: 150,
		margin: 16,
		borderRadius: 8,
		borderWidth: 2
	},
	emptyContainer: {
		borderColor: theme.colors.baseLightLight40,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2
	},
	emptyText: {
		color: theme.colors.baseLightLight40
	}
});
