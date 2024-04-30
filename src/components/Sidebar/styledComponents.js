import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: ${props => (props.viewSidebar ? 'block' : 'none')};
  @media screen and (min-width: 768px) {
    background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
    width: 31%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 66px;
    align-self: stretch;
  }
`

export const SideBarLinkContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`

export const SidebarLink = styled.li`
  list-style-type: none;
  width: 100%;
`

export const Link = styled(NavLink)`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 0;
  padding-left: 10px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#f8fafc' : '#1e293b')};
  background-color: ${props => {
    if (props.activeLink) {
      if (props.isDark) {
        return ' #909090'
      }
      return '#ebebeb'
    }
    return ''
  }};
`

export const SidebarLinkButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 0;
  padding-left: 10px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#f8fafc' : '#1e293b')};
  background-color: ${props => {
    if (props.activeLink) {
      if (props.isDark) {
        return ' #909090'
      }
      return '#ebebeb'
    }
    return ''
  }};
`

export const SidebarLinkHeading = styled.p`
  font-size: ${props => (props.viewSidebar ? '10px' : '20px')};
  margin: 0;
  padding: 0;
  font-weight: ${props => (props.activeLink ? 'bold' : 'normal')};
`

export const SidebarSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
`

export const SidebarSocialHeading = styled.p`
  font-size: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#313131')};
`
export const SidebarSocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SidebarSocialImage = styled.img`
  width: 25px;
`

export const SidbarSocialPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#313131')};
`
