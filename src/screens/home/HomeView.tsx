import { Image, SafeAreaView, View } from 'react-native';
import { Notification } from '../../assets/icons/notification';
import Avatar from '../../components/avatar/Avatar';
import Dropdown from '../../components/dropdown/Dropdown';
import { styles } from './HomeView.styles';

export const HomeView = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topNavigationContainer}>
				<Avatar />
				<Dropdown />
				<Notification />
			</View>
		</SafeAreaView>
	);
};
