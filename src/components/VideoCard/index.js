import {formatDistanceToNowStrict} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoCardContainer,
  VideoCardImage,
  ChannelImage,
  VideoCardTitle,
  VideoCardInfo,
  Container,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    title,
    thumbnailUrl,
    publishedAt,
    viewCount,
    channel,
    id,
  } = videoDetails
  const {name, profileImageUrl} = channel

  const timeResult = formatDistanceToNowStrict(publishedAt, {addSuffix: true})

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoCardContainer>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoCardImage src={thumbnailUrl} alt="video thumbnail" />
              <Container col={false}>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <Container col>
                  <VideoCardTitle isDark={isDark}>{title}</VideoCardTitle>
                  <Container col>
                    <VideoCardInfo>{name}</VideoCardInfo>
                    <Container col={false}>
                      <VideoCardInfo>{viewCount} views ●</VideoCardInfo>
                      <VideoCardInfo>{timeResult}</VideoCardInfo>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Link>
          </VideoCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
