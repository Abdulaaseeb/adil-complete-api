import {useNavigate, useParams} from 'react-router-dom'
import { Button, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';

export default function CommentsApi() {
    const [comments, setComments] = useState<any>([])
    const params = useParams()
    const baseapi = 'https://jsonplaceholder.typicode.com/comments'
    const getData = () => {
        axios.get(baseapi)
            .then((res) => {
                console.log(res.data)
                setComments([...res.data])
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const deleteComment = () => {
        axios.delete(`${baseapi}/${params.id}`)
        .then((res) => {
            console.log('delete Data Successfully' , res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    const navigate = useNavigate()
    const addCom = () => {
        navigate('/addcomments')
    } 
    const navigComment = (id:any) => {
        navigate(`/addcomments/${id}`)
    }
    return (
        <>
            <div className="d-flex justify-content-between mt-5">
                <Typography color={'blue'} variant="h3">Comments</Typography>
                <Button onClick={addCom} variant="contained">ADD COMMENTS</Button>
            </div>
            {comments.map((x: any, i: any) => {
                return (
                    <>

                        <div style={{backgroundColor:'lightcyan'}} className=" border rounded my-5 mx-3 py-3 px-3 shadow-lg">
                            <h4>{x.name}</h4>
                            <h5>{x.email}</h5>
                            <p>{x.body}</p>
                            <Button className='mx-2' variant='contained' onClick={deleteComment} color='error' endIcon={<DeleteSharpIcon/>}>Delete</Button>
                            <Button variant='contained' onClick={() => navigComment(x.id)} color='primary' endIcon={<EditSharpIcon/>}>Edit</Button>

                        </div>
                    </>

                )
            })}
        </>
    )
}