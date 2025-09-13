import {formatDistanceToNowStrict} from 'date-fns'

import {
  VideoCardCont,
  VideoThumbNail,
  CardDetailsInnerCont,
  CardTitle,
  CardName,
  CardPublished,
  CardPublishedCont,
  Dot,
  ListCont,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoDetails

  const totalDays = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <ListCont>
            <VideoCardCont to={`videos/${id}`}>
              <VideoThumbNail src={thumbnailUrl} alt="video thumbnail" />

              <CardDetailsInnerCont>
                <CardTitle lightTheme={lightTheme}>{title}</CardTitle>
                <CardName lightTheme={lightTheme}>{channel.name}</CardName>
                <CardPublishedCont>
                  <CardPublished lightTheme={lightTheme}>
                    {viewCount} views
                  </CardPublished>
                  <Dot>.</Dot>
                  <CardPublished lightTheme={lightTheme}>
                    {totalDays}
                  </CardPublished>
                </CardPublishedCont>
              </CardDetailsInnerCont>
            </VideoCardCont>
          </ListCont>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
