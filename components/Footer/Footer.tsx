import Link from 'next/link'
import * as React from 'react'

import { FooterLogo } from './FooterLogo'

export type FooterProps = {
  copyright: string
}

export type Props = FooterProps

export const Footer = ({ copyright }: Props) => {
  return (
    <footer className="bg-primary text-secondary relative flex justify-center items-center">
      <p>&copy;{copyright}</p>
    </footer>
  )
}
