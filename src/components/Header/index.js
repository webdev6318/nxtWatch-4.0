import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiMenu, FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderButtonContainer,
  HeaderItem,
  ProfileLogo,
  LogoutButton,
  LogoutButtonLogo,
  HeaderButton,
  PopupContent,
  PopupButtonConatainer,
  CloseButton,
  LogoutMessage,
  LogoutFinalButton,
  MenuPopupContent,
  SidebarMenu,
  MenuLogoutButton,
} from './styledComponents'

const overlayStyle = {background: 'rgba(0,0,0,0.5)'}

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderMenuButton = isDark => (
    <Popup
      {...{overlayStyle}}
      modal
      trigger={
        <FiMenu
          style={{
            fontSize: '25px',
            color: `${isDark ? '#f9f9f9' : '#181818'}`,
          }}
        />
      }
    >
      {close => (
        <MenuPopupContent isDark={isDark}>
          <IoMdClose
            style={{
              fontSize: '25px',
              color: `${isDark ? '#f9f9f9' : '#181818'}`,
              alignSelf: 'flex-end',
              marginTop: '10px',
            }}
            onClick={() => close()}
          />
          <SidebarMenu>
            <Sidebar viewSidebar />
          </SidebarMenu>
        </MenuPopupContent>
      )}
    </Popup>
  )

  const renderLogoutButton = (isDark, mobile) => (
    <Popup
      {...{overlayStyle}}
      modal
      trigger={
        mobile ? (
          <MenuLogoutButton>
            <FiLogOut
              style={{
                fontSize: '25px',
                color: `${isDark ? '#f9f9f9' : '#181818'}`,
              }}
            />
          </MenuLogoutButton>
        ) : (
          <LogoutButton isDark={isDark}>Logout</LogoutButton>
        )
      }
    >
      {close => (
        <PopupContent isDark={isDark}>
          <LogoutMessage isDark={isDark}>
            Are you sure you want to logout?
          </LogoutMessage>

          <PopupButtonConatainer>
            <LogoutFinalButton onClick={() => close()}>
              Cancel
            </LogoutFinalButton>
            <CloseButton onClick={onClickLogout}>Confirm</CloseButton>
          </PopupButtonConatainer>
        </PopupContent>
      )}
    </Popup>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, toggleTheme} = value

        const onToggleTheme = () => {
          toggleTheme()
        }

        return (
          <HeaderContainer isDark={isDark}>
            <Link to="/">
              <HeaderLogo
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <HeaderButtonContainer>
              <HeaderItem>
                <HeaderButton data-testid="theme" onClick={onToggleTheme}>
                  {isDark ? (
                    <FiSun style={{color: '#f9f9f9', fontSize: '25px'}} />
                  ) : (
                    <FaMoon style={{fontSize: '25px'}} />
                  )}
                </HeaderButton>
              </HeaderItem>
              <HeaderItem>
                <ProfileLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HeaderButton none>{renderMenuButton(isDark)}</HeaderButton>
              </HeaderItem>
              <HeaderItem>
                <LogoutButtonLogo>
                  {renderLogoutButton(isDark, true)}
                </LogoutButtonLogo>
                {renderLogoutButton(isDark)}
              </HeaderItem>
            </HeaderButtonContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
