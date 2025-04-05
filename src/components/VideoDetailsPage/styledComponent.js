import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {IoIosSearch} from 'react-icons/io'
import {HiFire, HiOutlineThumbUp, HiOutlineThumbDown} from 'react-icons/hi'
import {RiPlayListAddLine} from 'react-icons/ri'
import {FiThumbsDown} from 'react-icons/fi'

export const VideoDetailSOuterCont = styled.div`
height:100vh;
width:100%;
`

export const VideoDetailSMenuCont = styled.div`
height:90vh;
width:100%;
display:flex;
background-color:${props => (props.lightTheme ? '#ffffff' : '#000000')};;
`

export const VideoDetailSInnerCont = styled.div`
  height: calc(90vh-20px);
  margin:20px 25px 0px 25px;
   width: calc(83%-40px);
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};
  overflow-y: auto;
  flex-grow: 1; 
`
export const VideoDetailsCont = styled.div`
 
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};

`

export const VideoTitle = styled.p`
font-size:14px;
color:${props => (props.lightTheme ? '#606060' : '#cccccc')};
 margin: 10px 0px 0px 0px;
`

export const CardPublishedCont = styled.div`
  margin:6px 0px 0px 0px;
  display: flex;
  width:100%;
    align-items: center;

`

export const CardPublished = styled.p`
  font-size: 9px;
  font-weight: 450;
font-family: 'Roboto';
  line-height: 1.5;
  margin:5px 0px 0px 0px;
  color: ${props => (props.lightTheme ? '#475569' : '#616e7c')};
  margin:0px 7px 0px 0px;

`

export const Dot = styled.span`
font-size: 16px;  
height:10px;
color: #64748b;
  font-weight: 800;
  margin:0px 7px 0px 0px;
   padding:0px 0px 10px 0px;
 display: flex;
    align-items: center;
`

export const VideoViewsLikeCont = styled.div`
width:100%;
 display: flex;
      justify-content: space-between;
    align-items: center;

      height:65px;

`

export const VideoLikeCont = styled.div`
width:400px;
 display: flex;
            justify-content: flex-end;
  margin:0px 7px 0px 0px;


`
export const LikeCont = styled.div`
  margin:0px 20px 0px 0px;

  display: flex;
  align-items: center;
cursor:pointer;
 
`
export const DisLikeCont = styled(LikeCont)``

export const SaveCont = styled(LikeCont)``

export const LikeIcon = styled(HiOutlineThumbUp)`
  color: ${props => {
    if (props.isLiked) return '#3b82f6'
    return props.lightTheme ? '#475569' : '#909090'
  }};
      font-size: 15px;

`
export const DisLikeIcon = styled(HiOutlineThumbDown)`
  color: ${props => (props.lightTheme ? '#475569' : '#909090')};
  font-size: 15px;
margin:3px 0px 0px 0px;
  color: ${props => {
    if (props.isDisliked) return '#3b82f6'
    return props.lightTheme ? '#475569' : '#909090'
  }};
`

export const SaveIcon = styled(RiPlayListAddLine)`
  color: ${props => {
    if (props.isSaved) return '#3b82f6'
    return props.lightTheme ? '#475569' : '#909090'
  }}; 
   font-size: 15px;

`
export const LikeText = styled.button`
font-size:11px;
 color: ${props => {
   if (props.isLiked) return '#2563eb'
   return props.lightTheme ? '#64748b' : '#909090'
 }};
    margin:0px 0px 0px 5px;
  font-weight: 500;
  background-color:transparent;
  border:none;
  cursor:pointer;

`
export const DisLikeText = styled(LikeText)`
 color: ${props => {
   if (props.isDisliked) return '#2563eb'
   return props.lightTheme ? '#64748b' : '#909090'
 }};`

export const SaveText = styled(DisLikeText)`
  color: ${props => {
    if (props.isSaved) return '#2563eb'
    return props.lightTheme ? '#475569' : '#909090'
  }}; `

export const HorrizontalLine = styled.hr`
  width: 100%;
 
`

export const VideoProfile = styled.img`
height:35px;
margin:5px 10px 0px 0px;
`

export const CardDetailsOuterCont = styled.div`
height:100%;
margin:10px 0px 0px 0px;

  display: flex;
`

export const CardDetailsInnerCont = styled.div`
height:100%;
width:100%
  display: flex;
  flex-direction: column;
`

export const CardName = styled.p`
 font-size: 12px;
  font-weight: 450;
font-family: 'Roboto';
  line-height: 1.5;
  margin:0px 0px 0px 0px;
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
  margin:6px 0px 0px 0px;

`

export const CardSubscriberCount = styled(CardName)`
 font-size: 10px;

  margin:0px 0px 0px 0px;
  color: ${props => (props.lightTheme ? '#475569' : '#616e7c')};

`

export const CardDescription = styled(CardName)`
  font-weight: 400;
  margin:8px 0px 0px 0px;

`

export const LoaderContainer = styled.div`
 height: 90vh;
   width: 70%;
  display: flex;
     justify-content: center;
  align-items: center;
  
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};
   


`

export const NotFoundCont = styled.div`
 height: 80vh;
   width: 70%;
  display: flex;
  flex-direction: column;
   justify-content: center;
  align-items: center;

  background-color: transparent;

`

export const NotFoundtImg = styled.img`
 height: 180px;
    margin:0px 30px 20px 0px ;

`

export const NotFoundHead = styled.h1`
font-size:16px;
 color: ${props => (props.lightTheme ? ' #1e293b' : '#d7dfe9')};
      margin:8px 0px 20px 0px ;

`

export const RetryButton = styled.button`
 font-size: 11px;
  background-color:  #4f46e5;
  width: 80px;
  height: 29px;
  font-weight: 400;
  border-radius: 4px;
  cursor: pointer;
  color:#ffffff;
  border:none;
`
