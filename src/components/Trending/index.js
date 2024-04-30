import {Component} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailedView from '../FailedView'
import LoaderView from '../LoaderView'

import {
  TrendingContainer,
  TrendingContentContainer,
  BannerContainer,
  LogoConatainer,
  BannerHeading,
  VideoConatiner,
  VideoItem,
  Container,
  VideoThumbnail,
  ChannelLogo,
  VideoHeading,
  VidoePara,
  OuterContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiConstant = {
  initial: 'INITIAL',
  failed: 'FAILED',
  progress: 'IN_PROGRESS',
  completed: 'COMPLETED',
}

export default class Trending extends Component {
  state = {videoList: [], loadingStatus: apiConstant.initial}

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    this.setState({loadingStatus: apiConstant.progress})

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

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
        channel: {
          name: v.channel.name,
          profileImageUrl: v.channel.profile_image_url,
        },
        viewCount: v.view_count,
        publishedAt: formatDistanceToNowStrict(new Date(v.published_at), {
          addSuffix: true,
        }),
      }))

      this.setState({
        videoList: formattedList,
        loadingStatus: apiConstant.completed,
      })
    } else {
      this.setState({loadingStatus: apiConstant.failed})
    }
  }

  renderBanner = isDark => (
    <BannerContainer data-testid="banner" isDark={isDark}>
      <LogoConatainer>
        <HiFire style={{color: '#ff0000', fontSize: '30px'}} />
      </LogoConatainer>
      <BannerHeading isDark={isDark}>Trending</BannerHeading>
    </BannerContainer>
  )

  renderSuccessView = isDark => {
    const {videoList} = this.state
    return (
      <>
        {this.renderBanner(isDark)}
        <VideoConatiner>
          {videoList.map(item => (
            <VideoItem key={item.id}>
              <Link to={`/videos/${item.id}`} style={{textDecoration: 'none'}}>
                <OuterContainer>
                  <VideoThumbnail
                    src={item.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <Container row>
                    <ChannelLogo src={item.channel.profileImageUrl} />
                    <Container row={false}>
                      <VideoHeading isDark={isDark}>{item.title}</VideoHeading>
                      <Container row={false}>
                        <VidoePara>{item.channel.name}</VidoePara>
                        <Container row>
                          <VidoePara>{item.viewCount} Views ●</VidoePara>
                          <VidoePara>{item.publishedAt}</VidoePara>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </OuterContainer>
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
        return <FailedView resetApiCall={this.getTrendingVideo} />
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
              <TrendingContainer>
                <Sidebar />
                <TrendingContentContainer
                  isDark={isDark}
                  data-testid="trending"
                >
                  {this.renderViews(isDark)}
                </TrendingContentContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
