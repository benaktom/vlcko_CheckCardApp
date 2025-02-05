import { IComponent } from '@/types/index.types'
import classNames from 'classnames'
import React, { FC } from 'react'

const H1: FC<IComponent<string>> = ({ children }) => {
  return (
    <h1 className={classNames('text-3xl', 'text-text')}>{children}</h1>
  )
}

export default H1