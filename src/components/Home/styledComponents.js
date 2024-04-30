import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  overflow: hidden;
`

export const HomeContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const HomeContentContainer = styled.div`
  width: 100%;
`

export const HomeBannerContainer = styled.div`
  display: ${props => (props.showBanner ? 'block' : 'none')};
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: fit-content;
  padding: 40px 25px;
`

export const HomeBannerLogo = styled.img`
  width: 100px;
`

export const HomeBannerButton = styled.button`
  background: none;
  outline: none;
  border: 1px solid #0f0f0f;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 15px;
`

export const HomeBannerPara = styled.p`
  color: #1e293b;
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const HomeBannerLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HomeBannerCloseButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.isDark ? '#f4f4f4' : '#cccccc')};
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInput = styled.input`
  outline: none;
  border: none;
  height: 40px;
  flex-grow: 1;
  padding-left: 15px;
  background: none;
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
  &:focus {
    outline: none;
  }
`
export const SearchButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 12px 20px;
  background-color: ${props => (props.isDark ? '#7e858e' : '#cccccc')};
`
export const VideosContainer = styled.div`
  padding: 10px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const VideoListConatainer = styled.ul`
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
`
export const NoResultButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px 20px;
`
export const NoResultImg = styled.img`
  width: 45%;
`
export const NoResultHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`
export const NoResultPara = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#cbd5e1')};
`
