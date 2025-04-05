import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavBar from '../NavBar'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingOuterCont,
  GamingMenuCont,
  GamingBarCont,
  GamingIcon,
  GamingIconCont,
  GamingText,
  GamingInnerCont,
  VideosCont,
  LoaderContainer,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

const viewStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingPage extends Component {
  state = {videoslist: [], fetchStatus: viewStatus.initial}

  changeVideos = videoData => ({
    id: videoData.id,
    thumbnailUrl: videoData.thumbnail_url,
    title: videoData.title,
    viewCount: videoData.view_count,
  })

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({fetchStatus: viewStatus.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const option = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    try {
      const response = await fetch(url, option)

      const data = await response.json()
      const changedVideosData = data.videos.map(each => this.changeVideos(each))
      this.setState({
        videoslist: changedVideosData,
        fetchStatus: viewStatus.success,
      })
    } catch (error) {
      this.setState({fetchStatus: viewStatus.failure})
    }
  }

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <LoaderContainer lightTheme={lightTheme} data-testid="loader">
            <Loader type="ThreeDots" color="#3b82f6" height="50" width="60" />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videoslist} = this.state
    return videoslist.map(each => (
      <GamingVideoCard key={each.id} videoDetails={each} />
    ))
  }

  renderFailureView = () => <p>Something went wrong. Please try again later.</p>

  switchRender = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case viewStatus.inprogress:
        return this.renderLoadingView()
      case viewStatus.success:
        return this.renderSuccessView()
      case viewStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {videoslist} = this.state

    console.log(videoslist)

    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            const {lightTheme} = value
            return (
              <GamingOuterCont>
                <Header />
                <GamingMenuCont lightTheme={lightTheme}>
                  <NavBar />

                  <GamingInnerCont lightTheme={lightTheme}>
                    <GamingBarCont lightTheme={lightTheme}>
                      <GamingIconCont lightTheme={lightTheme}>
                        <GamingIcon lightTheme={lightTheme} />
                      </GamingIconCont>
                      <GamingText lightTheme={lightTheme}>Gaming</GamingText>
                    </GamingBarCont>
                    <VideosCont>{this.switchRender()}</VideosCont>
                  </GamingInnerCont>
                </GamingMenuCont>
              </GamingOuterCont>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default GamingPage
