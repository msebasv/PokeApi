import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const ContainerPokemon = styled(Container)`
  width: 90vw;
  display: flex;
  margin: 10px 0px;
  justify-content: center;
  flex-direction: column;
`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #969696;
  outline: none;
  padding-left: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.38);
  border-radius: 5px;
  margin-bottom: 10px;
`
