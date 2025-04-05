import {
  NavContainer,
  NavItemsContainer,
  NavListItems,
  HomeLink,
  TrendingLink,
  GamingLink,
  SavedVideosLink,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
  NavGaming,
  NavHome,
  NavSavedvideos,
  NavTrending,
  ContactContainer,
  Contact,
  ContactIconsCont,
  FaceBookIcon,
  TwitterIcon,
  LinkDinIcon,
  ContactNotes,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

const NavItemsList = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, activeMenu, setActiveMenu} = value

      return (
        <NavContainer lightTheme={lightTheme}>
          <NavItemsContainer>
            <NavListItems>
              <HomeLink
                isActive={activeMenu === NavItemsList.home}
                lightTheme={lightTheme}
                onClick={() => setActiveMenu(NavItemsList.home)}
                to="/"
              >
                <HomeIcon isActive={activeMenu === NavItemsList.home} />
                <NavHome
                  lightTheme={lightTheme}
                  isActive={activeMenu === NavItemsList.home}
                >
                  Home
                </NavHome>
              </HomeLink>
            </NavListItems>
            <NavListItems>
              {' '}
              <TrendingLink
                isActive={activeMenu === NavItemsList.trending}
                lightTheme={lightTheme}
                onClick={() => setActiveMenu(NavItemsList.trending)}
                to="/trending"
              >
                <TrendingIcon isActive={activeMenu === NavItemsList.trending} />
                <NavTrending
                  isActive={activeMenu === NavItemsList.trending}
                  lightTheme={lightTheme}
                >
                  Trending
                </NavTrending>
              </TrendingLink>
            </NavListItems>

            <NavListItems>
              {' '}
              <GamingLink
                isActive={activeMenu === NavItemsList.gaming}
                lightTheme={lightTheme}
                onClick={() => setActiveMenu(NavItemsList.gaming)}
                to="/gaming"
              >
                <GamingIcon isActive={activeMenu === NavItemsList.gaming} />
                <NavGaming
                  isActive={activeMenu === NavItemsList.gaming}
                  lightTheme={lightTheme}
                >
                  Gaming
                </NavGaming>
              </GamingLink>
            </NavListItems>
            <NavListItems>
              <SavedVideosLink
                isActive={activeMenu === NavItemsList.savedVideos}
                lightTheme={lightTheme}
                onClick={() => setActiveMenu(NavItemsList.savedVideos)}
                to="/saved-videos"
              >
                <SavedVideosIcon
                  isActive={activeMenu === NavItemsList.savedVideos}
                />
                <NavSavedvideos
                  isActive={activeMenu === NavItemsList.savedVideos}
                  lightTheme={lightTheme}
                >
                  Saved videos
                </NavSavedvideos>
              </SavedVideosLink>
            </NavListItems>
          </NavItemsContainer>
          <ContactContainer>
            <Contact lightTheme={lightTheme}>CONTACT US</Contact>
            <ContactIconsCont>
              <FaceBookIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <TwitterIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LinkDinIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactIconsCont>
            <ContactNotes lightTheme={lightTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactNotes>
          </ContactContainer>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
