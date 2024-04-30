import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  BgContainer,
  LoginFormContainer,
  LoginLabelContainer,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginLogo,
  ShowPassContainer,
  CheckBoxInput,
  ErrorMsg,
} from './styledComponents'

export default class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onLogin = async e => {
    e.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const apiUrl = 'https://apis.ccbp.in/login'

    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, option)
    const data = await response.json()

    if (response.ok) {
      const jwtToken = data.jwt_token
      this.onSubmitSuccess(jwtToken)
    } else {
      this.setState({errorMsg: data.error_msg, showErrorMsg: true})
    }
    console.log(data)
  }

  onChangeUsername = e => {
    this.setState({usernameInput: e.target.value})
  }

  onChangePassword = e => {
    this.setState({passwordInput: e.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      showPassword,
      errorMsg,
      showErrorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <BgContainer isDark={isDark}>
              <LoginFormContainer isDark={isDark}>
                <LoginLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onLogin}>
                  <LoginLabelContainer>
                    <LoginLabel htmlFor="username" isDark={isDark}>
                      USERNAME
                    </LoginLabel>
                    <LoginInput
                      id="username"
                      isDark={isDark}
                      onChange={this.onChangeUsername}
                      value={usernameInput}
                      type="text"
                      placeholder="Username"
                    />
                  </LoginLabelContainer>
                  <LoginLabelContainer>
                    <LoginLabel htmlFor="password" isDark={isDark}>
                      PASSWORD
                    </LoginLabel>
                    <LoginInput
                      id="password"
                      isDark={isDark}
                      onChange={this.onChangePassword}
                      value={passwordInput}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                    />
                  </LoginLabelContainer>
                  <ShowPassContainer>
                    <CheckBoxInput
                      id="checkbox"
                      onChange={this.onChangeCheckbox}
                      type="checkbox"
                      checked={showPassword}
                    />
                    <LoginLabel htmlFor="checkbox" isDark={isDark}>
                      Show Password
                    </LoginLabel>
                  </ShowPassContainer>
                  <LoginButton type="submit">Login</LoginButton>
                </LoginForm>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
