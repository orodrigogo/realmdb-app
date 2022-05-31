import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 44px;   
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 12px;
  font-weight: 500;
`;

export const Counter = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  margin-bottom: 12px;
`;