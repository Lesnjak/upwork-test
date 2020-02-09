import React from 'react'
import styled from 'styled-components'
declare module '*.svg' {
  const content: string
  export default content
}
import * as icon from '../../styles/images/icon.svg'

const ImagePreview: FC = ({ file }) => {
  return (
    <ImagePreviewWrapper>
      {file ? (
        <ImagePreviewImage src={file.preview} />
      ) : (
        <ImagePreviewImageDefault src={icon} />
      )}
    </ImagePreviewWrapper>
  )
}

const ImagePreviewWrapper = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.circleBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 9px;
`
const ImagePreviewImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
const ImagePreviewImageDefault = styled.img`
  width: 29px;
  height: 45px;
`

export { ImagePreview }
