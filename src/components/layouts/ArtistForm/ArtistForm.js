import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

/*function apiUrl() {
  const apiKey = 'ZzXnkNAWQPjaeUvSuIBKxhSqkYbmYawcqFHPnzoA&q'
  return "https://api.discogs.com/database/search?token=${apiKey}=${artist}&pages=1&page=1"
}*/
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
  input: {
    color: 'white'
  }

}))

// keys: [ 'basic_information.title', 'basic_information.artists.name' ],
function AsyncFetchArtist () {
  const classes = useStyles()
  const [artist, setArtist] = useState({
    title: '',
    genre: ''
  })
  const [value, setValue] = useState({
    artist: ''
  })
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

      const fetchData = async (value) => {
        setIsLoading(true);
        try {
          const apiKey = 'ZzXnkNAWQPjaeUvSuIBKxhSqkYbmYawcqFHPnzoA&q'
          let res = await fetch("https://api.discogs.com/database/search?token="+apiKey+"="+value+"&pages=1&page=1");
          res = await res.json();
          console.log(res)
          setArtist({
            title: res.title[1].name,
            genre: res.genre[1].name
          });
          setIsLoading(false)
        } catch (error) {
          setError(error);
        }
    return { artist, error, isLoading };
  }



  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   setValue({...value, [e.target.name]: e.target.value})
  //   console.log(value)
  // }

  function fetchArtist (e) {
    e.preventDefault()
    const {artist, error, loading} = fetchData(value)

    if (artist != null) {
      console.log(artist.toString())
    }

  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="artist"
        label="Artist name"
        className={classes.textField}
        value={ value.value }
        name="artist"
        // onChange={ (e) => handleChange(e)}
        margin="normal"
        required
        InputProps={{
          className: classes.input
        }}
        onBlur={ (e) => setValue(e.target.value) }
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={(e) => fetchArtist(e)}>
        Search
      </Button>
    </form>
  )

}
// search for Artist and it's releases from discogs
export default AsyncFetchArtist;