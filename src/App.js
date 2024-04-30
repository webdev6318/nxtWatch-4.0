import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    isDark: false,
    savedVideos: [],
    isSaved: null,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  saveVideo = obj => {
    const {savedVideos} = this.state
    const updatedVideoList = [...savedVideos, obj]
    this.setState({savedVideos: updatedVideoList})
    localStorage.setItem('savedVideos', JSON.stringify(updatedVideoList))
  }

  removeVideo = id => {
    const savedVideos = localStorage.getItem('savedVideos')
    const parsedSavedVideos = JSON.parse(savedVideos)
    const filteredList = parsedSavedVideos.filter(item => item.id !== id)

    localStorage.setItem('savedVideos', JSON.stringify(filteredList))
    this.setState({savedVideos: filteredList})
  }

  render() {
    const {isDark, isSaved, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
          saveVideo: this.saveVideo,
          removeVideo: this.removeVideo,
          isSaved,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
