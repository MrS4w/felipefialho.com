import React from 'react'
import Helmet from 'react-helmet'

import GlobalStyles from '../../styles/global'
import Header from '../Header';

import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.Host>
      <Helmet>
        <body className="theme--light" />
      </Helmet>
      <GlobalStyles />
      <Header />
    </S.Host>
  )
}

export default Layout