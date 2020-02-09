import React from 'react'
import styled from 'styled-components'
import { MyUploader } from '../components/shared/my-uploader'
import { Header } from '../components/shared/header'

const UploadPage: FC = () => {
  return (
    <UploadPageWrapper>
      <Header />
      <MyUploader />
    </UploadPageWrapper>
  )
}

const UploadPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  margin: auto;
  justify-content: center;
  height: 100%;
  max-height: 590px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`

export { UploadPage }
