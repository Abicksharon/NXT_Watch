import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListCont = styled.li`
  height: 100px;
  width: 90%;
  margin: 0px 12px 15px 0px;
  cursor: pointer;
`

export const VideoCardCont = styled(Link)`
  display: flex;
  height: 100%;
  width: 100%;
  text-decoration: none;
`

export const VideoThumbNail = styled.img`
  height: 100%;
  width: 200px;
`

export const CardDetailsInnerCont = styled.div`

width:100%
  display: flex;
  flex-direction: column;
   margin:5px 0px 0px 20px;
`
export const CardTitle = styled.p`
  font-size: 15px;
  font-weight: 450;
  font-family: 'Roboto';
  margin: 5px 0px 0px 0px;
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
`

export const CardName = styled.p`
  font-size: 10px;
  margin: 5px 0px 0px 0px;
  font-family: 'Roboto';

  margin: 10px 0px 0px 0px;
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
`
export const CardPublishedCont = styled.div`
  margin: 5px 0px 0px 0px;
  display: flex;
  width: 100%;
  align-items: center;
`

export const CardPublished = styled(CardName)`
  margin: 0px 6px 0px 0px;
`

export const Dot = styled.span`
  font-size: 18px;
  height: 10px;
  color: #64748b;
  font-weight: 800;
  margin: 0px 6px 0px 0px;
  padding: 0px 0px 10px 0px;
  display: flex;
  align-items: center;
`
