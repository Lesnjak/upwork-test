import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { ImagePreview } from './image-preview'

const MyUploader: FC = () => {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )
  return (
    <DropzoneWrapper>
      <Dropzone isDragActive={isDragActive} {...getRootProps()}>
        <input {...getInputProps()} />
        <ImagePreview file={files[0]} />
        <DropzoneStatus>Uploading</DropzoneStatus>
        <DropzoneOr>- or -</DropzoneOr>
        <DropzoneButton>Select file to upload</DropzoneButton>
      </Dropzone>
    </DropzoneWrapper>
  )
}

const DropzoneWrapper = styled.div`
  padding: 20px;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const DropzoneStatus = styled.div`
  color: ${({ theme }) => theme.textBlackUpload};
  font-size: 12px;
  margin-bottom: 8px;
`
const DropzoneOr = styled.div`
  color: ${({ theme }) => theme.textBlueHeader};
  font-size: 12px;
  margin-bottom: 8px;
`
const DropzoneButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.textBlueBody};
  font-size: 12px;
  cursor: pointer;
`
const Dropzone = styled.div`
  ${({ theme, isDragActive }) =>
    isDragActive && 'border: 1px dashed' + theme.dushedBorderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme, isDragActive }) =>
    isDragActive ? theme.dropBackground : 'inherit'};
`

export { MyUploader }
