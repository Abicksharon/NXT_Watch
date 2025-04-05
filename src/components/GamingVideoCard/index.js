import {formatDistanceToNowStrict} from 'date-fns'

import {
  VideoCardCont,
  VideoThumbNail,
  CardViewCount,
  CardDetailsInnerCont,
  CardTitle,
  ListCont,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, publishedAt, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <ListCont>
            <VideoCardCont to={`videos/${id}`}>
              <VideoThumbNail src={thumbnailUrl} alt="video thumbnail"/>

              <CardDetailsInnerCont>
                <CardTitle lightTheme={lightTheme}>{title}</CardTitle>

                <CardViewCount lightTheme={lightTheme}>
                  {viewCount} Watching WorldWide
                </CardViewCount>
              </CardDetailsInnerCont>
            </VideoCardCont>
          </ListCont>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
