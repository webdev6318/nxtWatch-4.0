import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderLogo = styled.img`
  width: 100px;
`
export const HeaderButtonContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const HeaderItem = styled.li`
  list-style-type: none;
`
export const ProfileLogo = styled.img`
  display: none;
  width: 30px;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const LogoutButton = styled.button`
  outline: none;
  border: 1px solid;
  border-color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  padding: 5px 10px;
  background: none;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButtonLogo = styled.button`
  outline: none;
  border: none;
  background: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderButton = styled.button`
  outline: none;
  border: none;
  background: none;

  @media screen and (min-width: 768px) {
    display: ${props => (props.none ? 'none' : 'block')};
  }
`

export const PopupContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
`

export const StyledPopup = styled(Popup)`
  width: 100%;
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const PopupButtonConatainer = styled.div`
  display: flex;
  gap: 20px;
`

export const CloseButton = styled.button`
  outline: none;
  padding: 10px 20px;
  background: none;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
`

export const LogoutFinalButton = styled(LogoutButton)`
  display: block;
`

export const LogoutMessage = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#313131')};
  text-align: center;
`

export const MenuPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const MenuPopupContent = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
`
export const SidebarMenu = styled.div`
  width: 100%;
`
export const MenuLogoutButton = styled.button`
  background: none;
  outline: none;
  border: none;
`
