import { Grid, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

type Props = {
  children: string
}

const CodeWrapper = styled('div')(({ theme }) => ({
  display: 'inline',
  '&.purpule': {
    color: '#9F74FA',
  },
  '&.red': {
    color: '#FF5169',
  },
  '&.white': {
    color: '#fff',
  },
  '&.blue': {
    color: '#5790F9',
  },
  '&.gold': {
    color: '#F1C86B',
  },
}))

export const CodeItem: FC<Props> = ({ children }) => {
  const purpluleWords = ['import', 'from', 'type', 'export', 'const', 'return']
  const redWords = ['Root', 'Grid', 'Typography', 'br', 'styled', '</Typography>']
  const blueWords = ['PreloaderWrapper', 'Props', 'data', 'setData']
  const goldWords = ['container', 'item', 'className', 'variant', 'xs', 'mr', 'theme']
  const [className, setClassName] = useState('white')

  const text = children
    .replace(/[|&;$%@"<>()+,='{}/]/g, ' ')
    .replace(/[0-9]/g, ' ')
    .toString()
    .trim()

  useEffect(() => {
    if (purpluleWords.includes(text)) {
      setClassName('purpule')
    } else if (redWords.includes(text)) {
      setClassName('red')
    } else if (blueWords.includes(text)) {
      setClassName('blue')
    } else if (goldWords.includes(text)) {
      setClassName('gold')
    } else {
      setClassName('white')
    }
  }, [])

  return <CodeWrapper className={className}> {children}</CodeWrapper>
}
