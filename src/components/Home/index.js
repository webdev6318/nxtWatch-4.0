import {Component} from 'react'
import {IoMdClose, IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import FailedView from '../FailedView'
import LoaderView from '../LoaderView'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  HomeContentContainer,
  HomeBannerContainer,
  HomeBannerLogo,
  HomeBannerButton,
  HomeBannerPara,
  HomeBannerLogoContainer,
  HomeBannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosContainer,
  VideoListConatainer,
  NoResultButton,
  NoResultContainer,
  NoResultHeading,
  NoResultImg,
  NoResultPara,
  HomeBgContainer,
} from './styledComponents'

const apiConstant = {
  initial: 'INITIAL',
  failed: 'FAILED',
  progress: 'IN_PROGRESS',
  completed: 'COMPLETED',
  noVideos: 'NO_VIDEOS',
}

export default class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    loadingStatus: apiConstant.initial,
    videoList: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({loadingStatus: apiConstant.progress})

    const {searchInput} = this.state
    console.log(searchInput)
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    console.log(apiUrl)
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
        publishedAt: new Date(v.published_at),
      }))

      console.log(videos)
      if (videos.length === 0) {
        this.setState({loadingStatus: apiConstant.noVideos})
      } else {
        this.setState({
          videoList: formattedList,
          loadingStatus: apiConstant.completed,
        })
      }
    } else {
      this.setState({loadingStatus: apiConstant.failed})
    }
  }

  onCloseBanner = () => {
    this.setState({showBanner: false, searchInput: ''})
  }

  renderVideos = () => {
    const {videoList} = this.state
    return (
      <VideoListConatainer>
        {videoList.map(video => (
          <VideoCard videoDetails={video} key={video.id} />
        ))}
      </VideoListConatainer>
    )
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onSearchVideo = e => {
    e.preventDefault()
    this.getVideoDetails()
  }

  renderSearchBar = isDark => {
    const {searchInput} = this.state
    return (
      <SearchContainer onSubmit={this.onSearchVideo} isDark={isDark}>
        <SearchInput
          isDark={isDark}
          value={searchInput}
          onChange={this.onChangeSearchInput}
          type="search"
          placeholder="Search"
        />
        <SearchButton data-testid="searchButton" type="submit">
          <IoMdSearch style={{fontSize: '20px'}} />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderNoVideoView = isDark => (
    <NoResultContainer>
      <NoResultImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultHeading isDark={isDark}>No Search results found</NoResultHeading>
      <NoResultPara isDark={isDark}>
        Try different key words or remove search filter
      </NoResultPara>
      <NoResultButton
        onClick={() => {
          this.setState({searchInput: ''}, this.getVideoDetails)
        }}
      >
        Retry
      </NoResultButton>
    </NoResultContainer>
  )

  renderHomeBanner = () => {
    const {showBanner} = this.state

    return (
      <HomeBannerContainer data-testid="banner" showBanner={showBanner}>
        <HomeBannerLogoContainer>
          <HomeBannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <HomeBannerCloseButton
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <IoMdClose />
          </HomeBannerCloseButton>
        </HomeBannerLogoContainer>
        <HomeBannerPara>
          Buy Nxt Watch Premium prepaid plans with UPI
        </HomeBannerPara>
        <HomeBannerButton>GET IT NOW</HomeBannerButton>
      </HomeBannerContainer>
    )
  }

  renderViews = () => {
    const {loadingStatus} = this.state
    switch (loadingStatus) {
      case apiConstant.completed:
        return this.renderVideos()
      case apiConstant.failed:
        return <FailedView resetApiCall={this.getVideoDetails} />
      case apiConstant.progress:
        return <LoaderView />
      case apiConstant.noVideos:
        return this.renderNoVideoView()
      default:
        return null
    }
  }

  render() {
    // console.log(this.state.loadingStatus)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeBgContainer>
              <Header />
              <HomeContainer data-testid="home">
                <Sidebar viewSidebar={false} />
                <HomeContentContainer>
                  {this.renderHomeBanner()}
                  <VideosContainer isDark={isDark}>
                    {this.renderSearchBar(isDark)}
                    {this.renderViews()}
                  </VideosContainer>
                </HomeContentContainer>
              </HomeContainer>
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
