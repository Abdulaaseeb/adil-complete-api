import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function AddComments() {
    const [addComments, setAddComments] = useState<any>({})
    const baseApiId = 'https://jsonplaceholder.typicode.com/comments'
    const params = useParams()
    const postComment = () => {
        addComments.PostId = 101
        axios.post(baseApiId, addComments)
            .then((res) => {
                console.log(res.data)
                setAddComments({ ...addComments })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    const getCommentById = () => {
        axios.get(`${baseApiId}/${params.id}`)
        .then((res) => {
            console.log(res.data)
            setAddComments({...res.data})
            console.log(addComments)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    const updateComment = () => {
        axios.put(`${baseApiId}/${params.id}` , addComments)                                         
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    useEffect(() => {
        if(params.id){
          getCommentById()
        }
    } , [])
    return (
        <>

            <Box sx={{height:'100vh' , backgroundColor:'lightgray'}} className="d-flex justify-content-center align-items-center">
                <Paper className="p-5">
                    <Box>
                        {params.id ? (<Typography variant="h5" color={'blue'}>EDIT COMMENT</Typography>) : (<Typography variant="h5" color={'blue'}>ADD COMMENT</Typography>)}
                        
                    </Box>
                    <Box className = 'mt-3'>
                        <TextField  variant="standard" value={addComments.name} onChange={(e) => {setAddComments({...addComments , name:e.target.value})}} placeholder="Name" type="name"></TextField>
                    </Box>
                    <Box className = 'mt-3'>
                        <TextField variant="standard" value={addComments.email} onChange={(e) => {setAddComments({...addComments , email:e.target.value})}} placeholder="Email" type="email"></TextField>
                    </Box>
                    <Box className = 'mt-3'>
                        <TextField variant="filled" defaultValue={addComments.body} onChange={(e) => {setAddComments({...addComments , body:e.target.value})}} rows={4} multiline  placeholder="body" ></TextField>
                    </Box>
                    <Box className = 'mt-3 '>
                        {params.id ? ( <Button variant="contained" onClick={updateComment} className="w-100" >Update</Button>):( <Button variant="contained" className="w-100" onClick={postComment}>Submit</Button>)}
                      
                        
                    </Box>
                </Paper>
            </Box>
        </>
    )
}