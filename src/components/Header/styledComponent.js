import styled from 'styled-components'
import {IoMoonSharp, IoSunnyOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import Popout from 'reactjs-popup'

export const HeaderCont = styled.div`  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};

`

export const HeaderCont2 = styled.div`  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  width: 230px;
  margin-right: 30px;
    background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};


`

export const HomeLink = styled(Link)` height: 26px;
  margin-left: 30px;
text-decoration:none;
`

export const HeaderNxtlogo = styled.img` height: 26px;

`

export const HeaderProfile = styled.img`  height: 25px;
  cursor: pointer;`

export const ThemeButton = styled.button`
  height:30px;
  width:30px;
  display:flex;
    justify-content: center;
  align-items: center;
padding:0px;
  background-color:transparent;
  cursor:pointer;
border:none;
  `

export const MoonLogo = styled(IoMoonSharp)`  font-size: 22px;
  cursor: pointer;
`
export const SunLogo = styled(IoSunnyOutline)`  font-size: 22px;
  cursor: pointer;
  color: white;`

export const LogoutBtn = styled.button` 
 border: solid ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')} 1px;
  color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
  font-size: 12px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  width: 80px;
  height: 27px;
  font-weight: 400;
  border-radius: 4px;
  cursor: pointer;
`

export const StyledPopout = styled(Popout)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`
