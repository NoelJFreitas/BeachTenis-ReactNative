import React, {useState} from 'react';
import {Box, BoxProps, Text, TouchableOpacityBox} from '@components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTimestamp} from '@hooks';

export interface DateTimePikerProps extends BoxProps {
  label: string;
  value: number;
}

const MINIMUM_DATE = new Date();

export function DateTimePiker({label, value, ...boxProps}: DateTimePikerProps) {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date(value));

  const {day, year, month, hour, minute} = useTimestamp(date.getTime());

  function handleOpenAndCloseModal() {
    setShowModal(!showModal);
  }

  function handleConfirm(newDate: Date) {
    setShowModal(false);
    setDate(newDate);
  }

  return (
    <Box
      height={60}
      borderWidth={1}
      borderRadius="r15"
      flexDirection="row"
      overflow="hidden"
      paddingLeft="s15"
      paddingTop="s6"
      borderColor="gray1"
      {...boxProps}>
      <TouchableOpacityBox
        flex={1}
        activeOpacity={0.6}
        onPress={handleOpenAndCloseModal}>
        <Text preset="label" color="gray1">
          {label}
        </Text>
        <Box flex={1} justifyContent="center">
          <Text>{`${day}/${month}/${year} às ${hour}:${minute}`}</Text>
        </Box>
      </TouchableOpacityBox>
      <DateTimePickerModal
        isVisible={showModal}
        date={date}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={handleOpenAndCloseModal}
        locale="pt_SP"
        minimumDate={MINIMUM_DATE}
        display="inline"
        confirmTextIOS="Confirmar"
        cancelTextIOS="Cancelar"
      />
    </Box>
  );
}
