import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import {
  SubmitBtn,
  UsernameInput,
  UsernameText,
  UsernameFieldContainer,
  PasswordFieldContainer,
  NxttrendsLogoImage,
  LoginOuterContainer,
  LoginInnerContainer,
  ShowPasswordLabel,
  ShowPasswordCheckbox,
  ShowPasswordContainer,
  InputsCont,
  ErrorMsgCont,
  ErrorMsg,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {method: 'POST', body: JSON.stringify(userDetails)}

    try {
      const response = await fetch(url, option)
      const data = await response.json()
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
        console.log(data.error_msg)
      }
    } catch (error) {
      this.onSubmitFailure(error)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <>
              <UsernameText htmlFor="username" lightTheme={lightTheme}>
                Username
              </UsernameText>
              <UsernameInput
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <>
              <UsernameText lightTheme={lightTheme} htmlFor="password">
                Password
              </UsernameText>
              <UsernameInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={this.onChangePassword}
              />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const {errorMsg} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          const logo = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const jwtToken = Cookies.get('jwt_token')

          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginOuterContainer lightTheme={lightTheme}>
              <LoginInnerContainer
                lightTheme={lightTheme}
                onSubmit={this.submitForm}
              >
                <NxttrendsLogoImage src={logo} alt="website logo" />
                <InputsCont>
                  <UsernameFieldContainer>
                    {this.renderUsernameField()}
                  </UsernameFieldContainer>
                  <PasswordFieldContainer>
                    {this.renderPasswordField()}
                  </PasswordFieldContainer>
                  <ShowPasswordContainer>
                    <ShowPasswordCheckbox
                      type="checkbox"
                      id="showPassword"
                      onChange={this.toggleShowPassword}
                    />
                    <ShowPasswordLabel
                      htmlFor="showPassword"
                      lightTheme={lightTheme}
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordContainer>
                  <ErrorMsgCont>
                    {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
                  </ErrorMsgCont>
                </InputsCont>

                <SubmitBtn type="submit">Login</SubmitBtn>
              </LoginInnerContainer>
            </LoginOuterContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginPage
