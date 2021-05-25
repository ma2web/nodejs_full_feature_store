import React from 'react'
import rtl from 'jss-rtl'
import { StylesProvider, jssPreset } from '@material-ui/core'
import { create } from 'jss'

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
})

const RtlSupportProvider = (props) => <StylesProvider jss={jss}>{props.children}</StylesProvider>

export default RtlSupportProvider
