import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  savedVideos: [],
  saveVideo: () => {},
  removeVideo: () => {},
  isSaved: null,
})

export default ThemeContext
