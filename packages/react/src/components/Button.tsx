import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$purple900',
        background: '$green400',

        '&:not(:disabled):hover': {
          background: '$green500',
        },

        '&:disabled': {
          backgroundColor: '$green200',
        },
      },

      secondary: {
        color: '$purple900',
        border: '2px solid $green400',

        '&:not(:disabled):hover': {
          background: '$green100',
          color: '$purple900',
        },

        '&:disabled': {
          color: '$green200',
          borderColor: '$green200',
        },
      },

      tertiary: {
        color: '$purple900',

        '&:not(:disabled):hover': {
          color: '$purple900',
        },

        '&:disabled': {
          color: '$purple900',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
