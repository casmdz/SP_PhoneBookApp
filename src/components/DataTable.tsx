import { useState } from "react"
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from "../custom-hooks/FetchData";


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, flex: 2 },
    { field: 'first_name', headerName: "Contact First Name", flex: 1 },
    { field: 'last', headerName: "Contact Last Name", flex: 1 },
    { field: 'email', headerName: "Email", flex: 2 },
    { field: 'phone_number', headerName: "Phone Number", flex: 1 },
    // { field: 'address', headerName: "Address", flex: 2}
    { field: 'username', headerName: "Username", flex: 1 }
]



function DataTable() {

    let [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData(); // custom hook ... TODO: write useGetData hook and selection model state change content
    //get the ID when u click the checkbox
    const [selectionModel, setSelectionModel] = useState<string[]>([])
                                             //  useState<any>([])   

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    // const getData = async () => {
    //     console.log(server_calls.get());

    //     // const result = await server_calls.get();
    //     // console.log(result)
    // }

    const deleteData = () => {
        // server_calls.delete(selectionModel)   // bug
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        // setTimeout( () => {window.location.reload()}, 500)
    }



    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className='flex flex-row'>
                <div>
                    <button
                        className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                        onClick={() => handleOpen()} 
                        >Create New Contact
                    </button>

                </div>
                {/* <button onClick={() => handleClose()}>close</button> */}
                
                <Button onClick={handleOpen} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-600 hover:text-white'>
                    {/* you could write onClick here, but it would run when the page runs (error), 
                        even if you write a function to wait to click, setOpen still should get a handler 
                        https://react.dev/learn/responding-to-events*/}
                    Update</Button>

                <Button onClick={deleteData} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-600 hover:text-white'>
                    Delete</Button>

            </div>
            {/* Data table section */}
            
            <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%' }}
            >
                {/* https://mui.com/x/react-data-grid/row-selection/ */}
                <h2 className="p-3 bg-slate-300 my-2 rounded">My Contacts</h2>
                <DataGrid 
                rows={contactData} 
                columns={columns} 
                // https://mui.com/x/migration/migration-data-grid-v5/#pagination
                // rowsPerPageOptions={[5]}                
                // rowsPerPageOptions={[10]}
                checkboxSelection={true}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 4,
                      },
                    },
                  }}
                  pageSizeOptions={[4]}
                //   disableRowSelectionOnClick

                //onSelectionModelChange={(item: any) => { 
                onRowSelectionModelChange={(item: any) => {
                    setSelectionModel(item)
                    }}
                    // slotProps = {{
                    //     pagination: {
                    //         rowsPerPageOptions : [5]
                    //     }
                    // }}
                />
            </div>
        </>
    )
}

export default DataTable
