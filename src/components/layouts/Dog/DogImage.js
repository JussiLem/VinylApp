import React from 'react'
import { UseAsyncFetch } from '../../hooks'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const Dog = () => {
  // const res = useAsyncFetch("https://dog.ceo/api/breeds/image/random", {});
  /*if (!res.response) {
    return <div>Loading...</div>
  }
  const dogName = res.response.status
  const imageUrl = res.response.message*/
  return (
    <div className="App">
      <div>
       {/* <Typography variant={"h3"} >{dogName}</Typography>
        <div>
          <img src={imageUrl} alt="avatar" />
        </div>*/}
      </div>
    </div>
  );
}