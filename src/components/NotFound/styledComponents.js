import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
`

export const NotFoundMsg = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const NotFoundImg = styled.img`
  width: 50%;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
`

export const NotFoundPara = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#cbd5e1')};
`
