import { SafeAreaView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Notification } from '../../assets/icons/notification';
import Avatar from '../../components/avatar/Avatar';
import Dropdown from '../../components/dropdown/Dropdown';
import { homeViewStyles } from './HomeView.styles';
import { useHomeViewData } from './hooks';

export const HomeView = () => {
	const { months, selectedMonth, onMonthChange } = useHomeViewData();
	return (
		<SafeAreaView style={homeViewStyles.container}>
			<LinearGradient colors={['#FFF6E6', 'rgba(248, 237, 216, 0)']}>
				<View style={homeViewStyles.topNavigationContainer}>
					<Avatar />
					<Dropdown
						items={months}
						onValueChange={onMonthChange}
						value={selectedMonth}
					/>
					<Notification />
				</View>
				<View style={homeViewStyles.expenseBalance}></View>
			</LinearGradient>
		</SafeAreaView>
	);
};
