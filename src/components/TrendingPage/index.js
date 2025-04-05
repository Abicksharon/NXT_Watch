import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavBar from '../NavBar'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingOuterCont,
  TrendingMenuCont,
  TrendingInnerCont,
  TrendingText,
  TrendingIconCont,
  TrendingBarCont,
  TrendingIcon,
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

class TrendingPage extends Component {
  state = {
    isBannerClose: false,
    searchInput: '',
    videoslist: [],
    fetchStatus: viewStatus.initial,
  }

  removeBanner = () => {
    this.setState(prev => ({isBannerClose: !prev.isBannerClose}))
  }

  handleSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeVideos = videoData => ({
    channel: {
      name: videoData.channel.name,
      profileImageUrl: videoData.channel.profile_image_url,
    },
    id: videoData.id,
    publishedAt: videoData.published_at,
    thumbnailUrl: videoData.thumbnail_url,
    title: videoData.title,
    viewCount: videoData.view_count,
  })

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({fetchStatus: viewStatus.inprogress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)

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
    const {videoslist, fetchStatus} = this.state
    return videoslist.map(each => (
      <TrendingVideoCard key={each.id} videoDetails={each} />
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
    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            const {lightTheme} = value
            return (
              <TrendingOuterCont>
                <Header />
                <TrendingMenuCont lightTheme={lightTheme}>
                  <NavBar />
                  <TrendingInnerCont lightTheme={lightTheme}>
                    <TrendingBarCont lightTheme={lightTheme}>
                      <TrendingIconCont lightTheme={lightTheme}>
                        <TrendingIcon lightTheme={lightTheme} />
                      </TrendingIconCont>
                      <TrendingText lightTheme={lightTheme}>
                        Trending
                      </TrendingText>
                    </TrendingBarCont>

                    <VideosCont>{this.switchRender()}</VideosCont>
                  </TrendingInnerCont>
                </TrendingMenuCont>
              </TrendingOuterCont>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default TrendingPage
