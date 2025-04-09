import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {IoIosSearch} from 'react-icons/io'

export const HomeOuterCont = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : ' #181818')};
`

export const HomeMenuCont = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`
export const HomeInnerCont = styled.div`
  height: 90vh;
  width: 83%;
  display: flex;
  flex-direction: column;

  padding: 0px 0px 0px 0px;
`

export const BannerCont = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: 10px 20px;
`

export const BannerNxtlogo = styled.img`
  height: 25px;
  margin-top: 10px;
`

export const BannerTopCont = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const CloseButton = styled.button`
  height: 26px;
  width: 26px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const BannerSectionClose = styled(MdClose)`
  height: 27px;
`
export const BannerText = styled.p`
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  color: #1e293b;
`
export const BannerBtn = styled.button`
  font-size: 10px;
  font-family: Roboto;
  color: #1e293b;
  height: 26px;
  width: 85px;
  border: solid #383838 1px;
  border-radius: 3px;
  background-color: transparent;
  margin-top: 0px;
  cursor: pointer;
`
export const HomeVideosOuterCont = styled.div`
  width: 100%;
  padding: 0px 0px 0px 30px;
  overflow-y: auto;
`

export const SearchInputCont = styled.div`
  height: 24px;
  width: 300px;
  display: flex;
  flex-direction: row;
  border: solid #909090 1px;
  border-radius: 2px;
  margin: 20px 0px 0px 0px;
`

export const SearchBox = styled.input`
  height: 100%;
  width: 83%;
  border: none;
  outline: none;
  font-size: 10px;
  color: #909090;
  padding-left: 10px;
  background-color: transparent;
`
export const SearchIconbtn = styled.button`
  height: 100%;
  width: 17%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#ebebeb' : '#231f20')};
  font-size: 12px;
  border: solid #909090;
  border-width: 0px 0px 0px 1px;
  cursor: pointer;
`

export const SearchIcon = styled(IoIosSearch)`
  height: 20px;
  color: ${props => (props.lightTheme ? '#424242' : '#909090')};
`

export const VideosCont = styled.ul`
  height: fit-content;
  width: 100%;
  margin: 25px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: flex;
  color: ${props => (props.lightTheme ? '#424242' : 'transparent')};
  flex-wrap: wrap;
`

export const LoaderContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const NoSearchResultCont = styled(VideosCont)`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const NoSearchImg = styled.img`
  height: 150px;
`

export const NoSearchResultHead = styled.h1`
  font-size: 16px;
  color: ${props => (props.lightTheme ? ' #1e293b' : '#d7dfe9')};
`

export const NoSearchResultPara = styled.p`
  font-size: 12px;
  margin: 0px 0px 10px 0px;
  color: ${props => (props.lightTheme ? '#606060' : '#cccccc')};
  font-weight: 500;
`

export const RetryButton = styled.button`
  font-size: 11px;
  background-color: #4f46e5;
  width: 80px;
  height: 29px;
  font-weight: 400;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  border: none;
`
