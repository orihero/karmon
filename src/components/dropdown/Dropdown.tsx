import React, { useState } from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { ArrowDown } from '../../assets/icons/arrow-down';
import { ArrowRight } from '../../assets/icons/arrow-right';
import Text from '../text/Text';
import { dropdownStyles } from './Dropdown.styles';

export interface DropdownItemProps {
	label: string;
	value: string;
}

export interface DropdownProps {
	items?: DropdownItemProps[];
	onValueChange?: (item: DropdownItemProps) => void;
	value?: DropdownItemProps;
}

const Dropdown = ({ items, value, onValueChange }: DropdownProps) => {
	const [modalVisible, setModalVisible] = useState(false);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	const onItemPress = (item: DropdownItemProps) => () => {
		onValueChange && onValueChange(item);
		closeModal();
	};
	return (
		<>
			<TouchableOpacity
				onPress={openModal}
				style={dropdownStyles.container}
			>
				<ArrowDown />
				<Text style={dropdownStyles.text}>{value?.label}</Text>
			</TouchableOpacity>
			<Modal
				onBackButtonPress={closeModal}
				onBackdropPress={closeModal}
				onDismiss={closeModal}
				isVisible={modalVisible}
				style={dropdownStyles.modal}
			>
				<View style={dropdownStyles.modalContainer}>
					{items?.map((e) => {
						return (
							<TouchableOpacity
								onPress={onItemPress(e)}
								key={e.value}
								style={dropdownStyles.modalItemContainer}
							>
								<Text style={dropdownStyles.modalItem}>
									{e.label}
								</Text>
								<ArrowRight />
							</TouchableOpacity>
						);
					})}
				</View>
			</Modal>
		</>
	);
};

export default Dropdown;
