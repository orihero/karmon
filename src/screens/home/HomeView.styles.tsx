import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const homeViewStyles = StyleSheet.create({
	container: {
		flex: 1
	},
	topNavigationContainer: {
		flexDirection: 'row',
		padding: 12,
		paddingHorizontal: 16,
		justifyContent: 'space-between'
	},
	expenseBalance: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
