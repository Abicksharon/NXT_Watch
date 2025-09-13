import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListCont = styled.li`
  height: 280px;
  width: 135px;
  margin: 0px 15px 10px 0px;
  cursor: pointer;
`

export const VideoCardCont = styled(Link)`
  height: 100%;
  width: 100%;
  text-decoration: none;
`

export const VideoThumbNail = styled.img`
  height: 200px;
  width: 100%;
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
  margin: 10px 0px 0px 0px;
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
`

export const CardViewCount = styled(CardTitle)`
  color: ${props => (props.lightTheme ? '#475569' : '#606060')};
  margin: 0px 6px 0px 0px;
`
