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
top: 50%
`

const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
`

export const PFOverlayHeading: React.FC<Props> = ({
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
