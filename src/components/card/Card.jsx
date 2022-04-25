import React from 'react'

import {
  CardContainer,
  Cards,
  BackgroundCard,
  Circle,
  CharacterImg,
  Title,
  CardFooter,
  TextTitleContainer,
  TextContainer,
  Text,
} from './Card.elements'

const Card = (props) => {
  return (
    <CardContainer>
      <Cards>
        <BackgroundCard />
        <Circle>
          <CharacterImg src={props.img} />
        </Circle>
        <TextTitleContainer>
          <Title>{props.name}</Title>
        </TextTitleContainer>
        <CardFooter>
          <TextContainer>
            <Text>
              <h3>{props.weight}</h3>
              <p>Weight</p>
            </Text>
            <Text>
              <h3>{props.height}</h3>
              <p>Height</p>
            </Text>
            <Text>
              <h3>{props.type}</h3>
              <p>Type</p>
            </Text>
          </TextContainer>
        </CardFooter>
      </Cards>
    </CardContainer>
  )
}

export default Card
