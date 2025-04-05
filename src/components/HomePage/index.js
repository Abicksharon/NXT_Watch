import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavBar from '../NavBar'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeOuterCont,
  HomeMenuCont,
  HomeInnerCont,
  BannerCont,
  BannerNxtlogo,
  BannerTopCont,
  CloseButton,
  BannerSectionClose,
  BannerText,
  BannerBtn,
  HomeVideosOuterCont,
  SearchInputCont,
  SearchBox,
  SearchIcon,
  SearchIconbtn,
  VideosCont,
  LoaderContainer,
  NoSearchResultCont,
  NoSearchImg,
  NoSearchResultHead,
  NoSearchResultPara,
  RetryButton,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

const viewStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomePage extends Component {
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
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)

      const data = await response.json()
      const changedVideosData = data.videos.map(each => this.changeVideos(each))
      if (response.ok) {
        this.setState({
          videoslist: changedVideosData,
          fetchStatus: viewStatus.success,
        })
      } else {
        this.setState({fetchStatus: viewStatus.failure})
      }
    } catch (error) {
      console.log(error)
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
    return videoslist.length > 0 ? (
      videoslist.map(each => (
        <HomeVideoCard key={each.id} videoDetails={each} />
      ))
    ) : (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <NoSearchResultCont lightTheme={lightTheme}>
              <NoSearchImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoSearchResultHead lightTheme={lightTheme}>
                No Search results found
              </NoSearchResultHead>
              <NoSearchResultPara lightTheme={lightTheme}>
                Try different key words or remove search filter
              </NoSearchResultPara>
              <RetryButton onClick={this.getVideos}>Retry</RetryButton>
            </NoSearchResultCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        const failureImageUrl = lightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <NoSearchResultCont lightTheme={lightTheme}>
            <NoSearchImg src={failureImageUrl} alt="failure view" />
            <NoSearchResultHead lightTheme={lightTheme}>
              Oops! Something Went Wrong
            </NoSearchResultHead>
            <NoSearchResultPara lightTheme={lightTheme}>
              We are having some trouble Please try again.
            </NoSearchResultPara>
            <RetryButton onClick={this.getVideos}>Retry</RetryButton>
          </NoSearchResultCont>
        )
      }}
    </ThemeContext.Consumer>
  )

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
    const {isBannerClose, searchInput} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <HomeOuterCont data-testid="home">
              <Header />
              <HomeMenuCont lightTheme={lightTheme}>
                <NavBar />
                <HomeInnerCont lightTheme={lightTheme}>
                  {!isBannerClose && (
                    <BannerCont data-testid="banner">
                      <BannerTopCont>
                        <BannerNxtlogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseButton
                          onClick={this.removeBanner}
                          data-testid="close"
                        >
                          <BannerSectionClose />
                        </CloseButton>
                      </BannerTopCont>
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with
                        <br /> UPI
                      </BannerText>
                      <BannerBtn>GET IT NOW</BannerBtn>
                    </BannerCont>
                  )}
                  <HomeVideosOuterCont>
                    <SearchInputCont lightTheme={lightTheme}>
                      <SearchBox
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        id="searchInput"
                        onChange={this.handleSearchInput}
                        lightTheme={lightTheme}
                      />
                      <SearchIconbtn
                        data-testid="searchButton"
                        lightTheme={lightTheme}
                        onClick={this.getVideos}
                        type="button"
                      >
                        <SearchIcon lightTheme={lightTheme} />
                      </SearchIconbtn>
                    </SearchInputCont>
                    <VideosCont>{this.switchRender()}</VideosCont>
                  </HomeVideosOuterCont>
                </HomeInnerCont>
              </HomeMenuCont>
            </HomeOuterCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomePage
