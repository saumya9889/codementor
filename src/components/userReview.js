import { Typography,Box} from '@mui/material'
import React from 'react'

const UserReview = (props) => {
  return (
    <Box className="user-review">
      <Typography variant='h2'>
       {props.userDetail}
      </Typography>
      <span class="review-star">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#999" fill-rule="nonzero" d="M13.2 2.7l2.3 5 5.4.8c1 .2 1.5 1.4.7 2.2l-3.9 4.1.9 5.7c.2 1.1-1 1.9-1.9 1.3L12 19.2l-4.7 2.6c-.9.5-2.1-.3-1.9-1.3l.9-5.7-3.9-4.1c-.7-.8-.3-2 .7-2.2l5.4-.8 2.3-5c.5-.9 1.9-.9 2.4 0z"></path></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#999" fill-rule="nonzero" d="M13.2 2.7l2.3 5 5.4.8c1 .2 1.5 1.4.7 2.2l-3.9 4.1.9 5.7c.2 1.1-1 1.9-1.9 1.3L12 19.2l-4.7 2.6c-.9.5-2.1-.3-1.9-1.3l.9-5.7-3.9-4.1c-.7-.8-.3-2 .7-2.2l5.4-.8 2.3-5c.5-.9 1.9-.9 2.4 0z"></path></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#999" fill-rule="nonzero" d="M13.2 2.7l2.3 5 5.4.8c1 .2 1.5 1.4.7 2.2l-3.9 4.1.9 5.7c.2 1.1-1 1.9-1.9 1.3L12 19.2l-4.7 2.6c-.9.5-2.1-.3-1.9-1.3l.9-5.7-3.9-4.1c-.7-.8-.3-2 .7-2.2l5.4-.8 2.3-5c.5-.9 1.9-.9 2.4 0z"></path></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#999" fill-rule="nonzero" d="M13.2 2.7l2.3 5 5.4.8c1 .2 1.5 1.4.7 2.2l-3.9 4.1.9 5.7c.2 1.1-1 1.9-1.9 1.3L12 19.2l-4.7 2.6c-.9.5-2.1-.3-1.9-1.3l.9-5.7-3.9-4.1c-.7-.8-.3-2 .7-2.2l5.4-.8 2.3-5c.5-.9 1.9-.9 2.4 0z"></path></g></svg>
      </span>
       <p className="reviewedby">Reviewed by <b>{props.userName}</b></p>
    </Box>
  )
}
export default UserReview