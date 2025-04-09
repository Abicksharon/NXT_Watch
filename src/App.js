import {Component} from 'react'
import Cookies from 'js-cookie'

import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import GamingPage from './components/GamingPage'
import ProtectedRoute from './components/ProtectedRoute'

import TrendingPage from './components/TrendingPage'
import SavedVideosPage from './components/SavedVideosPage'
import VideoDetailsPage from './components/VideoDetailsPage'
import NotFoundPage from './components/NotFoundPage'

import './App.css'
import ThemeContext from './context/ThemeContext'

const NavItemsList = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {
    lightTheme: true,
    activeMenu: NavItemsList.home,
    savedItems: [],
    videoSaved: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  setActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  saveVideos = video => {
    this.setState(prev => {
      const isAlreadySaved = prev.savedItems.some(item => item.id === video.id)

      if (isAlreadySaved) {
        return {
          savedItems: prev.savedItems.filter(item => item.id !== video.id),
          videoSaved: false,
        }
      }
      return {
        savedItems: [...prev.savedItems, video],
        videoSaved: true,
      }
    })
  }

  render() {
    const {lightTheme, activeMenu, savedItems, videoSaved} = this.state

    return (
      <ThemeContext.Provider
        value={{
          lightTheme,
          activeMenu,
          changeTheme: this.changeTheme,
          setActiveMenu: this.setActiveMenu,
          savedItems,
          saveVideos: this.saveVideos,
          videoSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />

          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/gaming" component={GamingPage} />

          <ProtectedRoute exact path="/trending" component={TrendingPage} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosPage}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsPage}
          />
          <Route exact path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
