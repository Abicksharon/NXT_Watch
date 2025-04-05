import {
  PopoutDiv,
  PopoutHeader,
  ButtonsSection,
  CustomButton,
} from './styledComponent'

const LogoutPopup = props => {
  const {close, onClickLogout, lightTheme} = props

  return (
    <PopoutDiv lightTheme={lightTheme}>
      <PopoutHeader lightTheme={lightTheme}>
        Are you sure, you want to logout?
      </PopoutHeader>
      <ButtonsSection>
        <CustomButton onClick={close}>Cancel</CustomButton>
        <CustomButton onClick={onClickLogout} solid="solid">
          Confirm
        </CustomButton>
      </ButtonsSection>
    </PopoutDiv>
  )
}

export default LogoutPopup
