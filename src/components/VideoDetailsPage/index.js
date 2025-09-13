import {Component} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player/youtube'
import {Link} from 'react-router-dom'
import Header from '../Header'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoDetailSOuterCont,
  VideoDetailSInnerCont,
  VideoDetailSMenuCont,
  VideoDetailsCont,
  VideoTitle,
  CardPublished,
  CardPublishedCont,
  Dot,
  VideoViewsLikeCont,
  VideoLikeCont,
  LikeCont,
  LikeIcon,
  LikeText,
  DisLikeCont,
  DisLikeIcon,
  DisLikeText,
  SaveCont,
  SaveIcon,
  SaveText,
  HorrizontalLine,
  CardDetailsOuterCont,
  CardDetailsInnerCont,
  CardSubscriberCount,
  CardName,
  CardDescription,
  VideoProfile,
  LoaderContainer,
  NotFoundCont,
  NotFoundHead,
  NotFoundtImg,
  RetryButton,
} from './styledComponent'

const viewStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetailsPage extends Component {
  state = {
    videoDetails: {},
    fetchStatus: viewStatus.initial,
    isLiked: false,
    isDisliked: false,
    saved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({fetchStatus: viewStatus.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const videoData = await response.json()
        const changedVideoData = {
          channel: {
            name: videoData.video_details.channel.name,
            profileImageUrl: videoData.video_details.channel.profile_image_url,
            subscriberCount: videoData.video_details.channel.subscriber_count,
          },
          description: videoData.video_details.description,
          id: videoData.video_details.id,
          publishedAt: videoData.video_details.published_at,
          thumbnailUrl: videoData.video_details.thumbnail_url,
          title: videoData.video_details.title,
          viewCount: videoData.video_details.view_count,
          videoUrl: videoData.video_details.video_url,
        }
        this.setState({
          videoDetails: changedVideoData,
          fetchStatus: viewStatus.success,
        })
      } else {
        this.setState({fetchStatus: viewStatus.failure})
      }
    } catch (error) {
      this.setState({fetchStatus: viewStatus.failure})
    }
  }

  onClickLike = () => {
    this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))
  }

  onClickDislike = () => {
    this.setState(prev => ({isDisliked: !prev.isDisliked, isLiked: false}))
  }

  onClickSave = (saveVideos, savedItems) => {
    const {videoDetails} = this.state
    const isCurrentlySaved = savedItems.some(
      video => video.id === videoDetails.id,
    )

    saveVideos(videoDetails)

    this.setState({saved: !isCurrentlySaved})
  }

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {({lightTheme}) => (
        <LoaderContainer lightTheme={lightTheme} data-testid="loader">
          <Loader type="ThreeDots" color="#3b82f6" height="50" width="60" />
        </LoaderContainer>
      )}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {isLiked, isDisliked, videoDetails, saved} = this.state
    const {channel, title, publishedAt, viewCount, description} = videoDetails
    const totalDays = formatDistanceToNowStrict(new Date(publishedAt))

    return (
      <ThemeContext.Consumer>
        {({lightTheme, saveVideos, savedItems}) => {
          const isSaved = savedItems.some(video => video.id === videoDetails.id)

          return (
            <VideoDetailSInnerCont lightTheme={lightTheme}>
              <ReactPlayer
                url={videoDetails.videoUrl}
                width="100%"
                height="60%"
                controls
              />
              <VideoDetailsCont lightTheme={lightTheme}>
                <VideoTitle lightTheme={lightTheme}>{title}</VideoTitle>

                <VideoViewsLikeCont>
                  <CardPublishedCont>
                    <CardPublished lightTheme={lightTheme}>
                      {viewCount} views
                    </CardPublished>
                    <Dot>.</Dot>
                    <CardPublished lightTheme={lightTheme}>
                      {totalDays}
                    </CardPublished>
                  </CardPublishedCont>

                  <VideoLikeCont>
                    <LikeCont onClick={this.onClickLike}>
                      <LikeIcon lightTheme={lightTheme} isLiked={isLiked} />
                      <LikeText lightTheme={lightTheme} isLiked={isLiked}>
                        Like
                      </LikeText>
                    </LikeCont>

                    <DisLikeCont onClick={this.onClickDislike}>
                      <DisLikeIcon
                        lightTheme={lightTheme}
                        isDisliked={isDisliked}
                      />
                      <DisLikeText
                        lightTheme={lightTheme}
                        isDisliked={isDisliked}
                      >
                        Dislike
                      </DisLikeText>
                    </DisLikeCont>

                    <SaveCont
                      onClick={() => this.onClickSave(saveVideos, savedItems)}
                    >
                      <SaveIcon
                        lightTheme={lightTheme}
                        isSaved={saved || isSaved}
                      />
                      <SaveText
                        lightTheme={lightTheme}
                        isSaved={saved || isSaved}
                      >
                        {saved || isSaved ? 'Saved' : 'Save'}
                      </SaveText>
                    </SaveCont>
                  </VideoLikeCont>
                </VideoViewsLikeCont>

                <HorrizontalLine />

                <CardDetailsOuterCont>
                  <VideoProfile
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <CardDetailsInnerCont>
                    <CardName lightTheme={lightTheme}>{channel.name}</CardName>
                    <CardSubscriberCount lightTheme={lightTheme}>
                      {channel.subscriberCount} Subscribers
                    </CardSubscriberCount>
                    <CardDescription lightTheme={lightTheme}>
                      {description}
                    </CardDescription>
                  </CardDetailsInnerCont>
                </CardDetailsOuterCont>
              </VideoDetailsCont>
            </VideoDetailSInnerCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {({lightTheme}) => (
        <NotFoundCont lightTheme={lightTheme}>
          <NotFoundtImg
            src={
              lightTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            }
            alt="no videos"
          />
          <NotFoundHead lightTheme={lightTheme}>
            Oops! Something Went Wrong
          </NotFoundHead>
          <RetryButton type="button" onClick={this.getVideoDetails}>
            Retry
          </RetryButton>
        </NotFoundCont>
      )}
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
    return (
      <ThemeContext.Consumer>
        {({lightTheme}) => (
          <VideoDetailSOuterCont>
            <Header />
            <VideoDetailSMenuCont lightTheme={lightTheme}>
              <NavBar />
              {this.switchRender()}
            </VideoDetailSMenuCont>
          </VideoDetailSOuterCont>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetailsPage
