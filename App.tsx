import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeStack from './src/navigation/HomeStack';
import { HomeView } from './src/screens/home/HomeView';

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<HomeStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;
