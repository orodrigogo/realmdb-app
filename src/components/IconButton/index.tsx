import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function IconButton({ icon, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name={icon}
        size={18}
        color={COLORS.WHITE}
      />
    </Container>
  )
}
