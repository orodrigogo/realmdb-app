import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { PressableProps } from 'react-native';
import moment from 'moment';

import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  OrderStyleProps
} from './styles';


export type OrderProps = OrderStyleProps & {
  _id: string;
  patrimony: string;
  equipment: string;
  description: string;
  created_at: Date;
}

type Props = PressableProps & {
  data: OrderProps;
};

export function Order({ data, ...rest }: Props) {
  const theme = useTheme();


  return (
    <Container {...rest}>
      <Status status={data.status} />

      <Content>
        <Header>
          <Title>{data.equipment}</Title>
          <MaterialIcons
            name={data.status === "open" ? "hourglass-empty" : "check-circle"}
            size={24}
            color={data.status === "open" ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY}
          />
        </Header>

        <Footer>
          <Info>
            <MaterialIcons name="schedule" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {
                moment(data.created_at).format("DD/MM - HH:MM")
              }
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="my-location" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {data.patrimony}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}