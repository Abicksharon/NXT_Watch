import styled from 'styled-components'

export const HomeInnerCont = styled.div`
  height: 80vh;
  width: 83%;

  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#000000')};
`
export const NotFoundCont = styled.div`
  height: 70vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`

export const NotFoundImage = styled.img`
  width: 240px;
`
export const NotFoundPara = styled.p`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
`
export const NotFoundHead = styled.h1`
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
`
