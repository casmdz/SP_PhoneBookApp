// rafce
//import { useSubmit } from "react-router-dom"
import Button from "./Button";
import Input from "./input";

import { useForm } from "react-hook-form";
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseFirstName, chooseLast, chooseEmail, chooseUsername, choosePhone } from "../redux/slices/RootSlice"
 //         chooseFirst                                     
//                                              chooseAddress

interface ContactFormProps {
    // id?: string,
    // data?: {}
    id?: string[]    //  NOTION CODE
    onClose: () => void;
  }

const ContactForm = ( props:ContactFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data:any, event: any) => {
        // console.log(`ID: ${props.id}`);
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id);
        console.log(data);
        
        // in python, an empty list is falsy
        // in javascript an empty list is truthy

        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.first_name } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 5000);
            event.target.reset()
            props.onClose();

        } else {
            // use dispatch to update the state in our store
            // the data is coming from the ...register functions

            dispatch(chooseFirstName(data.first_name));
            // dispatch(chooseFirst(data.first));
            dispatch(chooseLast(data.last));
            dispatch(chooseEmail(data.email));
            dispatch(choosePhone(data.phone_number));
            // dispatch(chooseAddress(data.address));
            dispatch(chooseUsername(data.username));
            
            server_calls.create(store.getState())
            
            // setTimeout( () => {window.location.reload()}, 6000);
        }
    }


  return (
    // ADD HANDLE FUCNTION with state management 
    <div>
        {/* {() => console.log("submitted")} */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="first_name">First Name</label>
          <Input {...register('first_name')} name="first_name" placeholder="First Name" />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <Input {...register('last_name')} name='last' placeholder="Last" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder="Email" />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <Input {...register('username')} name='username' placeholder="Username" />
        </div>
        {/* <div>
          <label htmlFor="address">Address</label>
          <Input {...register('address')} name='address' placeholder="Address" />
        </div> */}

        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </Button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
