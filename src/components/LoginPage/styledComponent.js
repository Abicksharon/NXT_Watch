import styled from 'styled-components'

export const LoginOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color:${props => (props.lightTheme ? '#ffffff' : '#181818')};;

`

export const LoginInnerContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  background-color:${props => (props.lightTheme ? '#ffffff' : '#000000')};
  border-radius:6px;

`

export const NxttrendsLogoImage = styled.img`
  height: 40px;

`

export const InputsCont = styled.div`
width:75%;
`

export const UsernameFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  margin-top: 20px;
`

export const PasswordFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px 5px 0px;
  width: 100%;
 

`

export const UsernameText = styled.label`
  font-size: 10px;
  color: #383838;
  font-weight: bold;
  color:${props => (props.lightTheme ? '#606060' : '#cccccc')};
cursor:pointer;
`

export const UsernameInput = styled.input`
  width: 100%;
  height:27px;
  margin:5px 0px 0px 0px;
  outline:none;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  margin:0px 0px 0px 0px;
`

export const ShowPasswordCheckbox = styled.input`
  margin-right: 5px;
  cursor: pointer;
  height:11px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 12px;
  color: ${props => (props.lightTheme ? '#383838' : '#cccccc')};
  cursor: pointer;
`

export const SubmitBtn = styled.button`
  width: 75%;
  border: none;
  color: #ffffff;
  background-color: #00306e;
  font-size: 12px;
  margin-top: 5px;
  height: 30px;
  border-radius: 5px;
  cursor:pointer;
`
export const ErrorMsgCont = styled.div`
  height:20px;
  align-self:flex-start;
  margin-top: 10px;
`

export const ErrorMsg = styled.p`
font-size:10px;
color:red;
margin:0px;
`
