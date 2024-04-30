import {Component} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailedView from '../FailedView'
import LoaderView from '../LoaderView'

import {
  VideoDetailsContainer,
  VideoDetailsPage,
  DetailsContainer,
  VideoConatainer,
  VideoTitle,
  InfoContainer,
  Container,
  LikeContainer,
  LikeButton,
  LikeText,
  DislikeText,
  SaveText,
  Line,
  ChannelDetailsContainer,
  ChannelContainer,
  ChannelImg,
  ChannelNameContainer,
  ChannelName,
  ChannelSubscribers,
  VideoCardInfo,
  ChannelDetailsPara,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiConstant = {
  initial: 'INITIAL',
  failed: 'FAILED',
  progress: 'IN_PROGRESS',
  completed: 'COMPLETED',
}

export default class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    videoResponseList: [],
    loadingStatus: apiConstant.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: null,
    currVideoid: '',
  }

  componentDidMount() {
    this.getTrendingVideo()
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({currVideoid: id})
    this.checkSavedVideo(id)
    this.checkResponse(id)
  }

  checkSavedVideo = id => {
    const videos = localStorage.getItem('savedVideos')
    if (videos !== null) {
      const parsedVideos = JSON.parse(videos)
      const res = parsedVideos.find(v => v.id === id)
      if (res !== undefined) {
        this.setState({isSaved: true})
      }
    }
  }

  checkResponse = id => {
    const savedResponseList = localStorage.getItem('responseList')
    if (savedResponseList !== null) {
      const parsedResponseList = JSON.parse(savedResponseList)
      this.setState({videoResponseList: parsedResponseList})
      const res = parsedResponseList.find(obj => obj.id === id)
      if (res !== undefined) {
        this.setState({isLiked: res.isLiked, isDisliked: res.isDisliked})
      }
    }
  }

  changeResponse = () => {
    const {isLiked, isDisliked, videoResponseList, currVideoid} = this.state
    const resObj = {
      id: currVideoid,
      isLiked,
      isDisliked,
    }

    const curObj = videoResponseList.find(obj => obj.id === currVideoid)

    if (curObj === undefined) {
      const updatedResList = [...videoResponseList, resObj]
      this.setState({videoResponseList: updatedResList})
      localStorage.setItem('responseList', JSON.stringify(updatedResList))
    } else {
      const newResponseList = videoResponseList.map(item => {
        if (item.id === currVideoid) {
          return {...item, isLiked, isDisliked}
        }
        return item
      })
      this.setState({videoResponseList: newResponseList})
      localStorage.setItem('responseList', JSON.stringify(newResponseList))
    }
  }

  getTrendingVideo = async () => {
    this.setState({loadingStatus: apiConstant.progress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const v = data.video_details
      const formattedDetails = {
        id: v.id,
        title: v.title,
        videoUrl: v.video_url,
        thumbnailUrl: v.thumbnail_url,
        channel: {
          name: v.channel.name,
          profileImageUrl: v.channel.profile_image_url,
          subscriberCount: v.channel.subscriber_count,
        },
        viewCount: v.view_count,
        publishedAt: formatDistanceToNowStrict(new Date(v.published_at), {
          addSuffix: true,
        }),
        description: v.description,
      }

      this.setState({
        videoDetails: formattedDetails,
        loadingStatus: apiConstant.completed,
      })
    } else {
      this.setState({loadingStatus: apiConstant.failed})
    }
  }

  onClickLike = () => {
    this.setState(
      {
        isLiked: true,
        isDisliked: false,
      },
      this.changeResponse,
    )
  }

  onClickDislike = () => {
    this.setState(
      {
        isDisliked: true,
        isLiked: false,
      },
      this.changeResponse,
    )
  }

  renderSuccessView = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      title,
      videoUrl,
      id,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, saveVideo, removeVideo} = value

          const onClickSave = () => {
            if (!isSaved) {
              this.setState({isSaved: true})
              saveVideo(videoDetails)
            } else {
              removeVideo(id)
              this.setState({isSaved: false})
            }
          }

          return (
            <DetailsContainer>
              <VideoConatainer>
                <ReactPlayer width="100%" url={videoUrl} />
              </VideoConatainer>
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <InfoContainer>
                <Container>
                  <VideoCardInfo>{viewCount} views ●</VideoCardInfo>
                  <VideoCardInfo>{publishedAt}</VideoCardInfo>
                </Container>
                <LikeContainer>
                  <LikeButton onClick={this.onClickLike}>
                    <BiLike
                      style={{
                        color: `${isLiked ? '#2563eb' : '#64748b'}`,
                        fontSize: '23px',
                      }}
                    />
                    <LikeText isLiked={isLiked}>Like</LikeText>
                  </LikeButton>
                  <LikeButton onClick={this.onClickDislike}>
                    <BiDislike
                      style={{
                        color: `${isDisliked ? '#2563eb' : '#64748b'}`,
                        fontSize: '23px',
                      }}
                    />
                    <DislikeText isDisliked={isDisliked}>Dislike</DislikeText>
                  </LikeButton>
                  <LikeButton onClick={onClickSave}>
                    <MdPlaylistAdd
                      style={{
                        color: `${isSaved ? '#2563eb' : '#64748b'}`,
                        fontSize: '23px',
                      }}
                    />
                    <SaveText isSaved={isSaved}>
                      {isSaved ? 'Saved' : 'Save'}
                    </SaveText>
                  </LikeButton>
                </LikeContainer>
              </InfoContainer>
              <Line />
              <ChannelDetailsContainer>
                <ChannelContainer>
                  <ChannelImg src={profileImageUrl} alt="channel logo" />
                  <ChannelNameContainer>
                    <ChannelName isDark={isDark}>{name}</ChannelName>
                    <ChannelSubscribers>
                      {subscriberCount} subscribers
                    </ChannelSubscribers>
                  </ChannelNameContainer>
                </ChannelContainer>
                <ChannelDetailsPara isDark={isDark}>
                  {description}
                </ChannelDetailsPara>
              </ChannelDetailsContainer>
            </DetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
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
              <VideoDetailsContainer>
                <Sidebar />
                <VideoDetailsPage
                  data-testid="videoItemDetails"
                  isDark={isDark}
                >
                  {this.renderViews()}
                </VideoDetailsPage>
              </VideoDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
