import {formatDistanceToNowStrict} from 'date-fns'

import {
  ListCont,
  VideoCardCont,
  VideoProfile,
  VideoThumbNail,
  CardDetailsOuterCont,
  CardDetailsInnerCont,
  CardTitle,
  CardName,
  CardPublished,
  CardPublishedCont,
  Dot,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {id, title, channel, publishedAt, thumbnailUrl, viewCount} =
    videoDetails

  const totalDays = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <ListCont>
            <VideoCardCont to={`videos/${id}`}>
              <VideoThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <CardDetailsOuterCont>
                <VideoProfile
                  alt="channel logo"
                  src={channel.profileImageUrl}
                />
                <CardDetailsInnerCont>
                  <CardTitle lightTheme={lightTheme}>{title}</CardTitle>
                  <CardName lightTheme={lightTheme}>{channel.name}</CardName>
                  <CardPublishedCont>
                    <CardPublished lightTheme={lightTheme}>
                      {viewCount} views
                    </CardPublished>
                    <Dot>.</Dot>
                    <CardPublished lightTheme={lightTheme}>
                      {totalDays} ago
                    </CardPublished>
                  </CardPublishedCont>
                </CardDetailsInnerCont>
              </CardDetailsOuterCont>
            </VideoCardCont>
          </ListCont>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoCard
