import ThemeContext from '../../context/ThemeContext'
import {
  FailedViewContainer,
  FailedImage,
  FailedHeading,
  FailedButton,
  FailedPara,
} from './styledComponents'

const FailedView = props => {
  const {resetApiCall} = props

  const onClickRetry = () => {
    resetApiCall()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <FailedViewContainer>
            <FailedImage
              alt="failure view"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <FailedHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedPara isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </FailedPara>
            <FailedButton onClick={onClickRetry}>Retry</FailedButton>
          </FailedViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailedView
