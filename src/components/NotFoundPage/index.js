import {Component} from 'react'

import Header from '../Header'

import ThemeContext from '../../context/ThemeContext'

import NavBar from '../NavBar'

import {HomeMenuCont, HomeOuterCont} from '../HomePage/styledComponent'

import {
  HomeInnerCont,
  NotFoundImage,
  NotFoundPara,
  NotFoundCont,
  NotFoundHead,
} from './styledComponent'

class NotFoundRoute extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          const theme = lightTheme

          const notFoundImageUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

          return (
            <HomeOuterCont>
              <Header />
              <HomeMenuCont lightTheme={lightTheme}>
                <NavBar />
                <HomeInnerCont lightTheme={lightTheme}>
                  <NotFoundCont>
                    <NotFoundImage src={notFoundImageUrl} alt='not found' />
                    <NotFoundHead lightTheme={lightTheme}>
                      Page Not Found
                    </NotFoundHead>
                    <NotFoundPara>
                      we are sorry, the page you requested could not be found.
                    </NotFoundPara>
                  </NotFoundCont>
                </HomeInnerCont>
              </HomeMenuCont>
            </HomeOuterCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFoundRoute
