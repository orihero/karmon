import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { dropdownStyles } from './Dropdown.styles';
import { ArrowDown } from '../../assets/icons/arrow-down';
import Text from '../text/Text';
import theme from '../../theme/theme';
import Modal from 'react-native-modal';

export interface DropdownItemProps {
	label: string;
	value: string;
}

export interface DropdownProps {
	items?: DropdownItemProps[];
}

const Dropdown = ({ items }: DropdownProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<>
			<TouchableOpacity
				onPress={openModal}
				style={dropdownStyles.container}
			>
				<ArrowDown />
				<Text style={dropdownStyles.text}>Dropdown</Text>
			</TouchableOpacity>
			<Modal
				onBackButtonPress={closeModal}
				onBackdropPress={closeModal}
				onDismiss={closeModal}
				isVisible={modalVisible}
			>
				<View style={dropdownStyles.modalContainer}>
					{items?.map((e) => {
						return <Text>{e.label}</Text>;
					})}
				</View>
			</Modal>
		</>
	);
};

export default Dropdown;
