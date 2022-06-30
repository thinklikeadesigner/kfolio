import * as React from 'react'
import styled from '@emotion/styled'

type Props = {
  /**
   * Description for the image when the overlay effect
   * is active
   */
  image?: any;
  text?: any;
  heading?: any;
} & React.ImgHTMLAttributes<HTMLImageElement>

const ContentContainer = styled.div`
  position: relative;
  &:hover #overlay-content {
    opacity: 1;
  }
`

const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 9.74%, #000000 100%);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`

export const PFOverlay: React.FC<Props> = ({
  image,
  text,
  heading,
  className,
}) => {
  return (
    <ContentContainer>
      <OverlayContainer id='overlay-content'>{heading}{text}</OverlayContainer>
      {image}
    </ContentContainer>
  )
}
