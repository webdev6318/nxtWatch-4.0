import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailedView from '../FailedView'
import LoaderView from '../LoaderView'

import {
  GamingContainer,
  GamingContentContainer,
  BannerContainer,
  LogoConatainer,
  BannerHeading,
  VideoThumbnail,
  VideoHeading,
  VidoePara,
  VideoConatiner,
  VideoItem,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiConstant = {
  initial: 'INITIAL',
  failed: 'FAILED',
  progress: 'IN_PROGRESS',
  completed: 'COMPLETED',
}

export default class Trending extends Component {
  state = {gamingList: [], loadingStatus: apiConstant.initial}

  componentDidMount() {
    this.getGamingVideo()
  }

  getGamingVideo = async () => {
    this.setState({loadingStatus: apiConstant.progress})

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    // const jwtToken =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const formattedList = videos.map(v => ({
        id: v.id,
        title: v.title,
        thumbnailUrl: v.thumbnail_url,
        viewCount: v.view_count,
      }))

      this.setState({
        gamingList: formattedList,
        loadingStatus: apiConstant.completed,
      })
    } else {
      this.setState({loadingStatus: apiConstant.failed})
    }
  }

  renderBanner = isDark => (
    <BannerContainer data-testid="banner" isDark={isDark}>
      <LogoConatainer>
        <SiYoutubegaming style={{color: '#ff0000', fontSize: '30px'}} />
      </LogoConatainer>
      <BannerHeading isDark={isDark}>Gaming</BannerHeading>
    </BannerContainer>
  )

  renderSuccessView = isDark => {
    const {gamingList} = this.state
    return (
      <>
        {this.renderBanner(isDark)}
        <VideoConatiner>
          {gamingList.map(item => (
            <VideoItem key={item.id}>
              <Link to={`/videos/${item.id}`} style={{textDecoration: 'none'}}>
                <VideoThumbnail src={item.thumbnailUrl} alt="video thumbnail" />
                <VideoHeading isDark={isDark}>{item.title}</VideoHeading>
                <VidoePara>{item.viewCount} watching worldwide</VidoePara>
              </Link>
            </VideoItem>
          ))}
        </VideoConatiner>
      </>
    )
  }

  renderViews = isDark => {
    const {loadingStatus} = this.state
    switch (loadingStatus) {
      case apiConstant.completed:
        return this.renderSuccessView(isDark)
      case apiConstant.failed:
        return <FailedView resetApiCall={this.getGamingVideo} />
      case apiConstant.progress:
        return <LoaderView />
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <GamingContainer>
                <Sidebar viewSidebar={false} />
                <GamingContentContainer isDark={isDark} data-testid="gaming">
                  {this.renderViews(isDark)}
                </GamingContentContainer>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
