import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import LogoutPopup from '../LogoutPopup'
import {
  HeaderCont,
  HeaderCont2,
  HeaderNxtlogo,
  HeaderProfile,
  ThemeButton,
  MoonLogo,
  LogoutBtn,
  SunLogo,
  HomeLink,
  StyledPopout,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, changeTheme} = value
      const {history} = props
      console.log(history)

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const logo = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      return (
        <HeaderCont lightTheme={lightTheme}>
          <HomeLink to="/">
            <HeaderNxtlogo src={logo} alt="website logo" />
          </HomeLink>

          <HeaderCont2 lightTheme={lightTheme}>
            <ThemeButton data-testid="theme" onClick={changeTheme}>
              {lightTheme ? <MoonLogo /> : <SunLogo />}
            </ThemeButton>

            <HeaderProfile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <StyledPopout
              trigger={
                <LogoutBtn lightTheme={lightTheme} onClick={onClickLogout}>
                  Logout
                </LogoutBtn>
              }
              modal
              closeOnDocumentClick
            >
              {close => (
                <LogoutPopup
                  close={close}
                  onClickLogout={onClickLogout}
                  lightTheme={lightTheme}
                />
              )}
            </StyledPopout>
          </HeaderCont2>
        </HeaderCont>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
