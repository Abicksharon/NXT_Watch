import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  changeTheme: () => {},
  activeMenu: '',
  setActiveMenu: () => {},
  savedItems: [],
  saveVideos: () => {},
  videoSaved: false,
})

export default ThemeContext
