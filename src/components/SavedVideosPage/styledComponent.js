import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {CgPlayListAdd} from 'react-icons/cg'

export const SavedVideosOuterCont = styled.div`
height:100vh;
width:100%;

`

export const SavedVideosMenuCont = styled.div`
height:90vh;
width:100%;
display:flex;
background-color:${props => (props.lightTheme ? '#ffffff' : '#000000')};;

`

export const SavedVideosInnerCont = styled.div`
  height: 90vh;
  width: 83%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};
  overflow-y: auto;
  flex-grow: 1; 
`

export const SavedVideosBarCont = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  background-color: ${props => (props.lightTheme ? '#f1f5f9' : '#181818')};
  align-items: center;
  flex-shrink: 0; 
  padding: 20px 0; 
  box-sizing: border-box;

& h1{
  font-size:20px;
color:${props => (props.lightTheme ? '#606060' : '#cccccc')};
 margin: 0px 0px 0px 20px;
}


`

export const SavedVideosIconCont = styled.div`
  height: 45px;
  width: 45px;
  margin: 0px 0px 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#d7dfe9' : '#000000')};
  border-radius: 30px;
  flex-shrink: 0; 
  padding-top:2px;
`

export const SavedVideosText = styled.h1`
font-size:20px;
color:${props => (props.lightTheme ? '#606060' : '#cccccc')};
 margin: 0px 0px 0px 20px;
`

export const SavedVideosIcon = styled(CgPlayListAdd)`
  font-size: 25px;
  color: ${props => (props.lightTheme ? '#606060' : '#ff0000')};
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const VideosCont = styled.ul`
 
  width: calc(100% - 40px); 
  margin:15px 0px 0px 40px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  
  color: ${props => (props.lightTheme ? '#424242' : 'transparent')};
  box-sizing: border-box;
  overflow-x: hidden; 
`

export const NoSavedVideosImgCont = styled.div`
 
  height: 100%;
  width: 90%; 
  display: flex;
    flex-direction: column;

   justify-content: center;
  align-items: center;

`

export const NoSavedVideosImg = styled.img`
 margin:50px 0px 10px 0px;
  height: 150px;

`
export const NoSavedVideosText = styled.h1`
font-size:16px;
margin:5px 0px 8px 0px;
 color: ${props => (props.lightTheme ? ' #1e293b' : '#d7dfe9')};
  
`

export const NoSavedVideosTextPara = styled.p`
font-size:14px;
 color: ${props => (props.lightTheme ? ' #606060' : '#d7dfe9')};
   font-weight: 500;
margin:5px 0px 8px 0px;

  
`
