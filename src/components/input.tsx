// Input component renders a text input field using the Material-UI TextField. You can use this component to create input fields

import { TextField } from '@mui/material'
import { forwardRef } from 'react'

// props to customize its behavior and appearance:
interface InputType {
    name: string,
    placeholder: string
}
// https://legacy.reactjs.org/docs/refs-and-the-dom.html
// tracking what the user is typing and submitting, AND PASSING it up to the input, TO the CONTACT FORM
// that contact form data will be sent to wherever we need it
// https://react.dev/reference/react/forwardRef

const Input = forwardRef(( props: InputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        // inputRef={ref} we want to use the data as we're typing somewhere else
        fullWidth
        type='text'
        {...props} // spread operator 
    >
    </TextField>
  )
})

export default Input
