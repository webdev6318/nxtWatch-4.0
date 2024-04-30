import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  list-style-type: none;
  padding: 10px;
  @media screen and (min-width: 576px) {
    width: 45%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: ${props => (props.col ? 'column' : 'row')};
`

export const VideoCardImage = styled.img`
  width: 100%;
`
export const ChannelImage = styled.img`
  width: 30px;
  align-self: flex-start;
`
export const VideoCardTitle = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-size: 13px;
  align-self: flex-start;
  margin: 0;
`
export const VideoCardInfo = styled.p`
  color: #94a3b8;
  margin: 5px 0;
  padding: 0;
`
