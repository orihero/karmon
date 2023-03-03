import { useRef, useState } from 'react';
import { DropdownItemProps } from '../../components/dropdown/Dropdown';
import monthsJson from '../../assets/json/months.json';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../navigation/routes';

export const useInsetsAsMargin = () => {
	const { bottom, left, right, top } = useSafeAreaInsets();
	const insets = {
		marginTop: top,
		marginBottom: bottom,
		marginLeft: left,
		marginRight: right
	};
	return {
		omit: (name: keyof typeof insets) => {
			//@ts-ignore
			delete insets[name];
			return insets;
		},
		all: () => insets
	};
};

export const useHomeViewData = () => {
	const months = useRef<DropdownItemProps[]>(
		monthsJson.map((e) => ({
			label: e.name,
			value: e.abbreviation
		}))
	);
	const navigation = useNavigation();

	const currentMonth = new Date(Date.now()).getMonth();
	const [selectedMonth, setSelectedMonth] = useState<DropdownItemProps>({
		label: monthsJson[currentMonth].name,
		value: monthsJson[currentMonth].name
	});

	const onMonthChange = (val: DropdownItemProps) => {
		setSelectedMonth(val);
	};

	const onAddWallet = () => {
		navigation.navigate(routes.CreateWalletScreen);
	};

	return {
		months: months.current,
		selectedMonth,
		onMonthChange,
		onAddWallet
	};
};
