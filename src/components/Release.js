import React from 'react'
import Table from '@material-ui/core/Table'
import { Paper, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'

function Release (props) {
  return (
    <Paper>
      <Typography variant='subtitle1'>How the added releases would look like</Typography>
      <Table>
        <TableHead>
        <TableRow>
          <TableCell>Release Id</TableCell>
          <TableCell>Currency (Optional)</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {props.release.map(release => {
            return (
              <TableRow key={release.releaseId}>
                <TableCell>{release.releaseId}</TableCell>
                <TableCell>{release.currency}</TableCell>
              </TableRow>
            )
          }
        )}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default Release