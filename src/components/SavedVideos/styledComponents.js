import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
`

export const TrendingContentContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 25px;
  background-color: ${props => (props.isDark ? '#212121' : '#ebebeb')};
`
export const LogoConatainer = styled.div`
  background-color: #94a3b8;
  border-radius: 50%;
  padding: 12px;
`
export const BannerHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`

export const VideoConatiner = styled.ul`
  padding: 10px;
`

export const VideoItem = styled.li`
  list-style-type: none;
  margin: 10px;
`

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
`

export const VideoThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 40%;
    height: 40%;
  } ;
`

export const ChannelLogo = styled.img`
  width: 30px;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoHeading = styled.p`
  font-size: 15px;
  margin: 0;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`

export const VidoePara = styled.p`
  color: #94a3b8;
  margin: 5px 0;
  padding: 0;
  margin: 0;
  font-size: 13px;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`

export const NoVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const NoVideoImg = styled.img`
  width: 50%;
`

export const NoVideoHeading = styled.h1`
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
`

export const NoVideoPara = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#cbd5e1')};
`
