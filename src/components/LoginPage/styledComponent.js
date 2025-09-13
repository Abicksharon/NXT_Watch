// styledComponent.js
import styled from 'styled-components'

export const LoginOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: ${props =>
    props.lightTheme
      ? 'linear-gradient(135deg, #e0eafc, #cfdef3)'
      : 'radial-gradient(circle at center, #1e1e1e, #121212)'};
  transition: background 0.3s ease;
`

export const LoginInnerContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 40px;
  background-color: ${props =>
    props.lightTheme ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.05)'};
  border-radius: 15px;
  box-shadow: ${props =>
    props.lightTheme
      ? '0 4px 20px rgba(0,0,0,0.1)'
      : '0 0 30px rgba(0,0,0,0.7)'};
  backdrop-filter: ${props => (props.lightTheme ? 'none' : 'blur(10px)')};
  border: ${props =>
    props.lightTheme ? '1px solid #ddd' : '1px solid rgba(255,255,255,0.1)'};
  opacity: ${props => (props.showCard ? 1 : 0)};
  transform: ${props =>
    props.showCard ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.4s ease-in-out;
`

export const NxttrendsLogoImage = styled.img`
  height: 40px;
  margin-bottom: 20px;
`

export const InputsCont = styled.div`
  width: 100%;
`

export const UsernameFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`

export const PasswordFieldContainer = styled(UsernameFieldContainer)``

export const UsernameText = styled.label`
  font-size: 14px;
  color: ${props => (props.lightTheme ? '#333' : '#ddd')};
  margin-bottom: 6px;
`

export const UsernameInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid ${props => (props.lightTheme ? '#ccc' : '#444')};
  background-color: ${props =>
    props.lightTheme ? '#fff' : 'rgba(255,255,255,0.05)'};
  color: ${props => (props.lightTheme ? '#000' : '#fff')};
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: ${props => (props.lightTheme ? '#6c63ff' : '#888')};
    box-shadow: 0 0 0 2px ${props => (props.lightTheme ? '#6c63ff44' : '#8884')};
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

export const ShowPasswordCheckbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
`

export const ShowPasswordLabel = styled.label`
  font-size: 13px;
  color: ${props => (props.lightTheme ? '#444' : '#ccc')};
`

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  color: #fff;
  background-color: #6c63ff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #574fd3;
  }
`

export const ErrorMsgCont = styled.div`
  margin-top: 10px;
  height: 20px;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  color: red;
  margin: 0;
`

export const Para = styled.p`
  color: ${props => (props.lightTheme ? '#666' : '#aaa')};
  font-size: 13px;
  text-align: center;
  margin: 10px 0;
`

export const SwitchModeBtn = styled.button`
  background: transparent;
  border: none;
  color: ${props => (props.lightTheme ? '#007bff' : '#4c9aff')};
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`
