import ContactForm from "./ContactForm";

// interface Props 
type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if (!props.open) return (<></>)
    return (
        // x button start
        <div onClick={props.onClose}
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-gray-500 bg-opacity-25'>

            <div className='max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}
                >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-slate-300 p-2 
                            rounded hover:bg-red-800 text-white"
                            onClick={props.onClose}>
                                X</p>
                    </div>
            {/* x button end */}
                    <div className="flex flex-col items-center text-center mt-3 p-2"> 
                        <ContactForm id={ props.id }  onClose={props.onClose}/> 
                    </div>

                </div>
                
            </div>
        </div>
    )
}
export default Modal


// if we're updating things like a contact in our phonebook, we need to get our contact's ID
// the contact form needs an ID, using props, from the modal and the dattable 