import styled from 'styled-components'
import backgroundImg from '../../assets/images/cardImage.jpg'

export const CardContainer = styled.div`
  /* display: flexbox; */
`
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  height: 300px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.38);

  &:hover {
    margin-top: -5px;
    border-bottom: 0.3rem solid rgba(0, 0, 0, 0.38);
    transition: 0.3s all ease-in-out;
  }
`
export const BackgroundCard = styled.img`
  background-image: url(${backgroundImg});
  width: 100%;
  height: 120px;
`

export const Circle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  width: 120px;
  height: 120px;
  border: 5px solid #ffffff;
  border-radius: 50%;
  margin-top: calc(-60px - 5px);
  overflow: hidden;
`

export const CharacterImg = styled.img`
  width: 100px;
  height: 100px;
  /* border: 4px solid #ffffff;
  border-radius: 50%;
  margin-top: calc(-50px - 4px); */
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-right: 10px;
  ::first-letter {
    text-transform: uppercase;
  }
`

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-top: 1px solid rgba(79, 79, 79, 0.28);
  margin-top: 10px;
`

export const TextTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`

export const TextContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const Text = styled.div`
  ::first-letter {
    text-transform: uppercase;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
  }
`
