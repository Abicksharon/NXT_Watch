import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListCont = styled.li`
height:240px;
width:180px;
margin:0px 12px 10px 0px;
cursor:pointer;
    `

export const VideoCardCont = styled(Link)`
height:100%;
width:100%;
text-decoration: none;
`

export const VideoThumbNail = styled.img`
height:100px;
width:100%;
`
export const VideoProfile = styled.img`
height:25px;
margin:5px 10px 0px 0px;
`
export const CardDetailsOuterCont = styled.div`
height:100%;

  display: flex;
`

export const CardDetailsInnerCont = styled.div`
height:100%;
width:100%
  display: flex;
  flex-direction: column;
`
export const CardTitle = styled.p`
 font-size: 9px;
  font-weight: 450;
font-family: 'Roboto';
  line-height: 1.5;
  margin:5px 0px 0px 0px;
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
`

export const CardName = styled(CardTitle)`

  margin:6px 0px 0px 0px;

`
export const CardPublishedCont = styled.div`
  margin:6px 0px 0px 0px;
  display: flex;
  width:100%;
    align-items: center;

`

export const CardPublished = styled(CardTitle)`
 
  margin:0px 6px 0px 0px;

`

export const Dot = styled.span`
font-size: 18px;  
height:10px;
color: #64748b;
  font-weight: 800;
  margin:0px 6px 0px 0px;
   padding:0px 0px 10px 0px;
 display: flex;
    align-items: center;
`
