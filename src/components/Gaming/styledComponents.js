import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
`

export const GamingContentContainer = styled.div`
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
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

export const VideoItem = styled.li`
  list-style-type: none;
  width: 40%;
  @media screen and (min-width: 576px) {
    width: 28%;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
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
