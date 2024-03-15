import { Button, IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import React, { useState } from 'react'

export default function Counter() {

    let [like , setLike] = useState(0);
    let [dislike , setDislike] = useState(0);

    const IncrementLike = () => setLike(like+1);
    const IncrementDislike = () => setDislike(dislike+1);
  return (
    <div>

      <IconButton aria-lable="Like" color="primary" onClick={IncrementLike}>
      <Badge badgeContent={like} color="primary">👍🏻</Badge>
      </IconButton> 

      <IconButton aria-lable="Dislike" color="error" onClick={IncrementDislike}>
      <Badge badgeContent={dislike} color="error">👎🏻</Badge>
      </IconButton>
      
        {/* <Button className='btn' onClick={IncrementLike}>👍🏻{like} </Button>
        <Button className='btn' onClick={IncrementDislike}>👎🏻{dislike} </Button> */}
      
    </div>
  )
}
