import Header from '../Header'
import NavBar from '../NavBar'

import TrendingVideoCard from '../TrendingVideoCard'

import {
  SavedVideosOuterCont,
  SavedVideosMenuCont,
  SavedVideosBarCont,
  SavedVideosIcon,
  SavedVideosIconCont,
  SavedVideosInnerCont,
  SavedVideosText,
  VideosCont,
  NoSavedVideosImgCont,
  NoSavedVideosImg,
  NoSavedVideosText,
  NoSavedVideosTextPara,
} from './styledComponent'

import {TrendingText} from '../TrendingPage/styledComponent'

import ThemeContext from '../../context/ThemeContext'

const SavedVideosPage = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme, savedItems} = value
        return (
          <SavedVideosOuterCont data-testid="savedVideos">
            <Header />
            <SavedVideosMenuCont lightTheme={lightTheme}>
              <NavBar />
              <SavedVideosInnerCont lightTheme={lightTheme}>
                {savedItems.length !== 0 ? (
                  <>
                    <SavedVideosBarCont lightTheme={lightTheme}>
                      <SavedVideosIconCont lightTheme={lightTheme}>
                        <SavedVideosIcon lightTheme={lightTheme} />
                      </SavedVideosIconCont>
                      <TrendingText lightTheme={lightTheme}>
                        Saved Videos
                      </TrendingText>
                    </SavedVideosBarCont>

                    {savedItems.map(each => (
                      <VideosCont>
                        <TrendingVideoCard key={each.id} videoDetails={each} />
                      </VideosCont>
                    ))}
                  </>
                ) : (
                  <NoSavedVideosImgCont>
                    <NoSavedVideosImg
                      alt="no saved videos"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    />
                    <NoSavedVideosText lightTheme={lightTheme}>
                      No saved videos found
                    </NoSavedVideosText>
                    <NoSavedVideosTextPara lightTheme={lightTheme}>
                      Save your videos by clicking a button
                    </NoSavedVideosTextPara>
                    <NoSavedVideosTextPara>
                      You can save your videos while watching them
                    </NoSavedVideosTextPara>
                  </NoSavedVideosImgCont>
                )}
              </SavedVideosInnerCont>
            </SavedVideosMenuCont>
          </SavedVideosOuterCont>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default SavedVideosPage
