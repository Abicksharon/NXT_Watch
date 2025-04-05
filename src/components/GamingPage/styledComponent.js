import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingOuterCont = styled.div`
height:100vh;
width:100%;

`

export const GamingMenuCont = styled.div`
height:90vh;
width:100%;
display:flex;
background-color:${props => (props.lightTheme ? '#ffffff' : '#000000')};;

`

export const GamingInnerCont = styled.div`
  height: 90vh;
  width: 83%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};
  overflow-y: auto;
  flex-grow: 1; 
 
`

export const GamingBarCont = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  background-color: ${props => (props.lightTheme ? '#f1f5f9' : '#181818')};
  align-items: center;
  flex-shrink: 0; 
  padding: 20px 0; 
  box-sizing: border-box;
`

export const GamingIconCont = styled.div`
  height: 45px;
  width: 45px;
  margin: 0px 0px 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#d7dfe9' : '#000000')};
  border-radius: 30px;
  flex-shrink: 0; 
`

export const GamingText = styled.h1`
font-size:20px;
color:${props => (props.lightTheme ? '#606060' : '#cccccc')};
 margin: 0px 0px 0px 20px;
`

export const GamingIcon = styled(SiYoutubegaming)`
font-size:25px;
   

color: ${props => (props.lightTheme ? '#606060' : '#ff0000')};
  `
export const VideosCont = styled.ul`
height:fit-content;
 width: calc(100% - 60px);
 margin:25px 20px 0px 40px ;
padding:0px 0px 0px 0px ;
  display: flex;
    color:${props => (props.lightTheme ? '#424242' : 'transparent')};
  flex-wrap: wrap;
   overflow-x: hidden; 
`

export const LoaderContainer = styled.div`
height:60vh;
 width: 80%; 
 margin:25px 20px 0px 40px ;
  display: flex;
     justify-content: center;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};


`
