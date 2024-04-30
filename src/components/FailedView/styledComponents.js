import styled from 'styled-components'

export const FailedViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
`
export const FailedImage = styled.img`
  width: 45%;
`
export const FailedHeading = styled.h1`
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
`
export const FailedButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px 20px;
`

export const FailedPara = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#cbd5e1')};
`
