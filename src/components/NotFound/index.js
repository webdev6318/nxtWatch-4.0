import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundMsg,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <>
          <Header />
          <NotFoundContainer>
            <Sidebar />
            <NotFoundMsg isDark={isDark}>
              <NotFoundImg
                alt="not found"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
              />
              <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
              <NotFoundPara isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundMsg>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
