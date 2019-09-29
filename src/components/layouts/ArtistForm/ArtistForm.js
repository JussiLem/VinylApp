import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
//https://api.discogs.com/database/search?token=${apiKey}=${artist}&pages=1&page=1
const apiKey = 'ZzXnkNAWQPjaeUvSuIBKxhSqkYbmYawcqFHPnzoA&q'
//    artist: 'Cat in the Hat',
//     genre: '',
//     year: 'Controlled',
//     style: 'EUR',
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '0 30px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },


}));

// search for Artist and it's releases from discogs
export default function ArtistForm () {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    artist: 'Cat in the Hat'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Artist name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          required
        />
      </form>
  )
}
