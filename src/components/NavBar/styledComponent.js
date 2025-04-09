import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

export const NavContainer = styled.div`
  height: 100%;
  width: 17%;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavItemsContainer = styled.ul`
  margin: 20px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const NavListItems = styled.li``

export const HomeLink = styled(Link)`
  height: 32px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${props => {
    const lightThemeBackground =
      props.lightTheme && props.isActive ? '#f1f5f9' : 'transparent'
    const darkThemeBackground =
      !props.lightTheme && props.isActive ? '#313131' : 'transparent'
    return props.lightTheme ? lightThemeBackground : darkThemeBackground
  }};
  text-decoration: none;
`
export const TrendingLink = styled(HomeLink)`
  text-decoration: none;
`
export const GamingLink = styled(HomeLink)`
  text-decoration: none;
`
export const SavedVideosLink = styled(HomeLink)`
  text-decoration: none;
`

export const HomeIcon = styled(TiHome)`
  font-size: 14px;
  margin: 0px 20px 0px 25px;
  color: ${props => (props.isActive ? '#ff0000' : '#606060')};
`

export const TrendingIcon = styled(HiFire)`
  font-size: 14px;
  color: ${props => (props.isActive ? '#ff0000' : '#606060')};
  margin: 0px 20px 0px 25px;
`

export const GamingIcon = styled(SiYoutubegaming)`
  font-size: 14px;
  color: ${props => (props.isActive ? '#ff0000' : '#606060')};
  margin: 0px 20px 0px 25px;
`
export const SavedVideosIcon = styled(CgPlayListAdd)`
  font-size: 14px;
  color: ${props => (props.isActive ? '#ff0000' : '#606060')};
  margin: 0px 20px 0px 25px;
`

export const NavHome = styled.h1`
  font-size: 12px;
  color: ${props => (props.lightTheme ? '#606060' : '#cccccc')};
  font-family: Roboto;
  font-weight: ${props => (props.isActive ? '600' : '400')};
`

export const NavGaming = styled(NavHome)`
  font-weight: ${props => (props.isActive ? '600' : '400')};
`

export const NavTrending = styled(NavHome)`
  font-weight: ${props => (props.isActive ? '600' : '400')};
`
export const NavSavedvideos = styled(NavHome)`
  font-weight: ${props => (props.isActive ? '600' : '400')};
`

export const ContactContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Contact = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  margin: 0px 0px 10px 20px;
`

export const ContactIconsCont = styled.div`
  height: 30px;
  width: 100%;

  display: flex;
  align-items: center;
  margin: 0px 0px 10px 0px;
`

export const FaceBookIcon = styled.img`
  height: 20px;
  width: 20px;
  color: #00306e;
  margin-left: 20px;
`

export const TwitterIcon = styled.img`
  height: 18px;
  width: 18px;
  color: #606060;
  margin-left: 10px;
`
export const LinkDinIcon = styled.img`
  height: 18px;
  width: 18px;
  color: #606060;
  margin-left: 10px;
`

export const ContactNotes = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  margin: 0px 40px 10px 20px;
`
