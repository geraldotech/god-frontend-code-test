import { StyleProvider, ThemePicker } from 'vcc-ui'
import { HelloWorld } from '../src/components/HelloWorld'
import '../public/css/styles.css'
import React from 'react'

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant='ligth'>
          <HelloWorld />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  )
}

export default HomePage
