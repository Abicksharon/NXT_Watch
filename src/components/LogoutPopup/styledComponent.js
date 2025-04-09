import styled from 'styled-components'

export const PopoutDiv = styled.div`
  width: 350px;
  height: 160px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
`
export const PopoutHeader = styled.p`
  color: ${props => (props.lightTheme ? '#00306e' : '#ffffff')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const ButtonsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 30px;
`
export const CustomButton = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 3px;
  background-color: ${props => (props.solid ? '#3b82f6' : 'transparent')};
  border: 1px ${props => (props.solid ? 'transparent' : '#7e858e')} solid;
  color: ${props => (props.solid ? '#ffffff' : '#7e858e')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
