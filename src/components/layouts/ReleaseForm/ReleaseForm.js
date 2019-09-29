import React from 'react'
import ReleaseFormActions from '../../ReleaseFormActions'
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import makeStyles from '@material-ui/core/styles/makeStyles'

/*
const initialState = {
  performingAction: false,

  firstName: '',
  lastName: '',
  username: '',
  emailAddress: '',
  emailAddressConfirmation: '',
  password: '',
  passwordConfirmation: '',

  errors: null
};

 */

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #590222 30%, #F2059F 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const ReleaseForm = () => {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const {release, handleChange, handleSubmit} = ReleaseFormActions(submit)

  // Logs the content of the form to the console
  function submit () {
    console.log(release)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.root}>
        Open dialog
      </Button>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Look For Release
        </DialogTitle>

        <DialogContent>
          <Grid container direction="row">

            <Grid item xs={1}>
              <Divider orientation="vertical"/>
            </Grid>

            <Grid item xs={8}>

              <TextField name="releaseId"
                         type="number"
                         required
                         label="Release Id"
                         fullWidth
                         autoComplete="given-id"
                         onChange={handleChange}>
              </TextField>

            </Grid>

            <Grid item xs>
              <TextField
                name="currency"
                type="text"
                fullWidth
                label="Currency"
                onChange={handleChange}>
              </TextField>

            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={handleClose}>Cancel</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ReleaseForm