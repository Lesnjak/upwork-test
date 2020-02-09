import React from 'react'
import styled from 'styled-components'

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Company Logo</HeaderTitle>
      <HeaderNotice>
        Logo should be square, 100px size and in png, jpeg file format.
      </HeaderNotice>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 29px 21px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`
const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.textBlack}
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  
`
const HeaderNotice = styled.div`
  color: ${({ theme }) => theme.textBlueHeader}
  font-size: 12px;
  line-height: 20px;
`

export { Header }
