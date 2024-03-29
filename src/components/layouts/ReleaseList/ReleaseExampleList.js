import React from 'react'
import ReleaseList from './ReleaseList'
import { Card } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const releases = [
  {
    releaseId: 1530,
    currency: 'EUR'
  },
  {
    releaseId: 5996,
    currency: 'EUR'
  },
  {
    releaseId: 10803,
    currency: 'JPY'
  },
  {
    releaseId: 500,
    currency: ''
  },
]

export const ReleaseExampleList = () => {
  return <Card>
    <Typography variant='h6'>Example Release Data: </Typography>
    <ReleaseList release={releases}/>
  </Card>
}