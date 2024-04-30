import {Component} from 'react'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {withRouter} from 'react-router-dom'

import {
  SidebarContainer,
  SideBarLinkContainer,
  SidebarLink,
  SidebarLinkHeading,
  SidebarSocialContainer,
  SidebarSocialHeading,
  SidebarSocialIconContainer,
  SidbarSocialPara,
  SidebarSocialImage,
  Link,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const linkList = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Trending',
    path: '/trending',
  },
  {
    id: 3,
    title: 'Gaming',
    path: '/gaming',
  },
  {
    id: 4,
    title: 'Saved videos',
    path: '/saved-videos',
  },
]

class Sidebar extends Component {
  state = {activeLink: ''}

  componentDidMount() {
    const {match} = this.props
    const {path} = match
    const activeTab = linkList.filter(item => item.path === path)
    if (activeTab.length !== 0) {
      this.setState({activeLink: activeTab[0].id})
    }
  }

  changeActiveLink = id => {
    this.setState({activeLink: id})
  }

  renderLinkIcon = (title, isActive) => {
    switch (title) {
      case 'Home':
        return (
          <IoMdHome
            style={{
              fontSize: '20px',
              color: `${isActive ? '#ff0000' : '#909090'}`,
            }}
          />
        )
      case 'Trending':
        return (
          <HiFire
            style={{
              fontSize: '20px',
              color: `${isActive ? '#ff0000' : '#909090'}`,
            }}
          />
        )
      case 'Gaming':
        return (
          <SiYoutubegaming
            style={{
              fontSize: '20px',
              color: `${isActive ? '#ff0000' : '#909090'}`,
            }}
          />
        )
      case 'Saved videos':
        return (
          <MdPlaylistAdd
            style={{
              fontSize: '20px',
              color: `${isActive ? '#ff0000' : '#909090'}`,
            }}
          />
        )
      default:
        return null
    }
  }

  render() {
    const {activeLink} = this.state
    const {viewSidebar} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <SidebarContainer viewSidebar={viewSidebar} isDark={isDark}>
              <SideBarLinkContainer>
                {linkList.map(item => (
                  <SidebarLink key={item.id}>
                    <Link
                      to={item.path}
                      onClick={() => this.changeActiveLink(item.id)}
                      isDark={isDark}
                      activeLink={activeLink === item.id}
                    >
                      {this.renderLinkIcon(item.title, activeLink === item.id)}
                      <SidebarLinkHeading activeLink={activeLink === item.id}>
                        {item.title}
                      </SidebarLinkHeading>
                    </Link>
                  </SidebarLink>
                ))}
              </SideBarLinkContainer>
              <SidebarSocialContainer>
                <SidebarSocialHeading isDark={isDark}>
                  CONTACT US
                </SidebarSocialHeading>
                <SidebarSocialIconContainer>
                  <SidebarSocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SidebarSocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SidebarSocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SidebarSocialIconContainer>
                <SidbarSocialPara isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </SidbarSocialPara>
              </SidebarSocialContainer>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
