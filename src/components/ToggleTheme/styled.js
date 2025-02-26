import styled from 'styled-components'

import * as V from 'styles/variables'

export const ToggleTheme = styled.button.attrs(({ active }) => ({
  'title': active ? 'Mudar para tema escuro' : 'Mudar para tema claro',
  'role': 'button',
  'aria-pressed': !active
}))`
  align-items: center;
  background-color: ${V.Color.gray};
  border-radius: ${V.Space.default};
  cursor: pointer;
  display: inline-flex;
  height: ${V.Space.default};
  justify-content: space-between;
  padding-left: 2px;
  padding-right: 3px;
  position: relative;
  width: ${V.Space.lg};

  &:focus {
    outline: 0;
  }

  &:before,
  &:after {
    font-size: 18px;
    margin-top: .5px;
    transition: opacity ${V.Transition.default};
  }

  &:before {
    content: '🌜';

    .theme-light & {
      opacity: 0;
    }
  }

  &:after {
    content: '🌞';

    .theme-dark & {
      opacity: 0;
    }
  }
`

export const ToggleThemeTrack = styled.div`
  --toggleTrack-size: 22px;
  background-color: ${V.Color.grayWhite};
  border: ${V.Color.blue} solid 2px;
  border-radius: 50%;
  height: var(--toggleTrack-size);
  position: absolute;
  top: 1px;
  transition: transform ${V.Transition.default};
  width: var(--toggleTrack-size);
  z-index: ${V.ZIndex.header};

  .theme-light & {
    transform: translateX(-2px);
  }

  .theme-dark & {
    transform: translateX(calc(${V.Space.lg} - 2px - 100%));
  }
`
