import { NativeModules, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Notification } from '../../assets/icons/notification';
import Avatar from '../../components/avatar/Avatar';
import Dropdown from '../../components/dropdown/Dropdown';
import ColoredPill from './components/colored-pill/ColoredPill';
import WalletCard from './components/wallet/WalletCard';
import { walletWidth } from './components/wallet/WalletCard.styles';
import { homeViewStyles } from './HomeView.styles';
import { useHomeViewData, useInsetsAsMargin } from './hooks';

export const HomeView = () => {
	const { months, selectedMonth, onMonthChange, onAddWallet } =
		useHomeViewData();
	const insets = useInsetsAsMargin();
	return (
		<LinearGradient colors={['#FFF6E6', 'rgba(248, 237, 216, 0)']}>
			<View
				style={[
					homeViewStyles.topNavigationContainer,
					insets.omit('marginBottom')
				]}
			>
				<Avatar />
				<Dropdown
					items={months}
					onValueChange={onMonthChange}
					value={selectedMonth}
					reversedIcon
				/>
				<Notification />
			</View>
			<ScrollView
				pagingEnabled
				horizontal
				snapToInterval={walletWidth + 32.4}
				scrollEventThrottle={16}
				decelerationRate="fast"
				showsHorizontalScrollIndicator={false}
				snapToAlignment="center"
			>
				<WalletCard onPress={onAddWallet} isEmpty />
			</ScrollView>
			<View style={homeViewStyles.expenseBalance}>
				<ColoredPill type="income" balance="$5000" />
				<ColoredPill type="expense" balance="$1200" />
			</View>
		</LinearGradient>
	);
};
