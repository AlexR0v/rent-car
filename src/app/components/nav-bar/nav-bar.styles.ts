import styled, { css } from 'styled-components/macro'
import tw from 'twin.macro'

export const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
  `}
`

export const ListContainer = styled.ul<{ menu: boolean }>`
  ${tw`
    flex
    list-none
  `};
  ${({ menu }) =>
          menu &&
          css`
      ${tw`
      flex-col
    `};
    `};
`

export const NavItem = styled.li<{ menu: boolean }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
  ${({ menu }) =>
          menu &&
          css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`
