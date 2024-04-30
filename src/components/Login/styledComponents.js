import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.isDark ? '#1e293b' : ' #f9f9f9')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const LoginFormContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #f9f9f9')};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const LoginForm = styled.form`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const LoginLabel = styled.label`
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  margin-bottom: 5px;
`
export const LoginInput = styled.input`
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
  outline: none;
  padding: 10px;
  width: 100%;
  background: none;
  border: 1px solid #94a3b8;
  & :focus {
    outline: none;
  }
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
`
export const LoginLogo = styled.img`
  width: 50%;
`
export const ShowPassContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`
export const CheckBoxInput = styled.input`
  margin: 0;
  width: 20px;
  height: 20px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  align-self: flex-start;
  margin: 0;
  padding: 0;
`
