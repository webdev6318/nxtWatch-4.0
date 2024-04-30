import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Sidebar from '../Sidebar'

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
  NoVideoContainer,
  NoVideoImg,
  NoVideoHeading,
  NoVideoPara,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const SavedVideos = () => {
  const savedVideos = localStorage.getItem('savedVideos')
  const parsedVideos = JSON.parse(savedVideos)

  const renderBanner = isDark => (
    <BannerContainer data-testid="banner" isDark={isDark}>
      <LogoConatainer>
        <HiFire style={{color: '#ff0000', fontSize: '30px'}} />
      </LogoConatainer>
      <BannerHeading isDark={isDark}>Saved Videos</BannerHeading>
    </BannerContainer>
  )

  const renderSuccessView = isDark => (
    <>
      {renderBanner(isDark)}
      <VideoConatiner>
        {parsedVideos.map(item => (
          <VideoItem key={item.id}>
            <Link to={`/videos/${item.id}`} style={{textDecoration: 'none'}}>
              <OuterContainer>
                <VideoThumbnail src={item.thumbnailUrl} alt="video thumbnail" />
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

  const noSavedVideos = isDark => (
    <NoVideoContainer isDark={isDark}>
      <NoVideoImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoVideoHeading isDark={isDark}>No saved videos found</NoVideoHeading>
      <NoVideoPara isDark={isDark}>
        You can save your videos while watching them
      </NoVideoPara>
    </NoVideoContainer>
  )

  const renderViews = isDark => {
    if (savedVideos === null || parsedVideos.length === 0) {
      return noSavedVideos(isDark)
    }
    return renderSuccessView(isDark)
  }

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
                data-testid="savedVideos"
              >
                {renderViews(isDark)}
              </TrendingContentContainer>
            </TrendingContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
