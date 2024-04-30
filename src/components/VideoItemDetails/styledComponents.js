import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
`

export const VideoDetailsPage = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const DetailsContainer = styled.div`
  padding: 10px;
`

export const VideoConatainer = styled.div`
  width: 100%;
  height: auto;
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`

export const LikeText = styled.p`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  margin: 5px 0;
  padding: 0;
  font-weight: bold;
  font-size: 18px;
`

export const DislikeText = styled(LikeText)`
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
`

export const SaveText = styled(LikeText)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const Line = styled.hr`
  color: #94a3b8;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`

export const ChannelImg = styled.img`
  width: 50px;
`

export const ChannelNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 0;
  margin-bottom: 5px;
`

export const ChannelSubscribers = styled.p`
  color: #94a3b8;
  margin: 0;
`
export const VideoCardInfo = styled.p`
  color: #94a3b8;
`
export const ChannelDetailsPara = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`
