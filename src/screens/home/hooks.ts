import { useRef, useState } from 'react';
import { DropdownItemProps } from '../../components/dropdown/Dropdown';
import monthsJson from '../../assets/json/months.json';

export const useHomeViewData = () => {
	const months = useRef<DropdownItemProps[]>(
		monthsJson.map((e) => ({
			label: e.name,
			value: e.abbreviation
		}))
	);
	const [selectedMonth, setSelectedMonth] = useState<DropdownItemProps>();

	const onMonthChange = (val: DropdownItemProps) => {
		setSelectedMonth(val);
	};

	return { months: months.current, selectedMonth, onMonthChange };
};
