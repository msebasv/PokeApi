import styled from 'styled-components'

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #041e45;
`

export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    align-items: center;
  }
`

export const IconLogo = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
`

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #041e45;
    padding-left: 0px;
  }
`

export const MenuItem = styled.ul`
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  &:hover {
    background-color: #030d33;
    border-bottom: 0.3rem solid #ebc08b;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 960px) {
    padding: 0;
    width: 100%;
    height: 70px;
  }
`

export const MenuItemLink = {
  textDecoration: 'none',
  color: '#FFFFFF',
}

export const IconLogoMobile = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    color: white;
    font-size: 2rem;
    padding-right: 1rem;
  }
`
