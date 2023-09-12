import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import CommentsApi from "../../pages/comments";
import AddComments from "../../pages/addcomments";
export default function AppRouter(){
   return(
    <>
    <Router>
        <Routes>
            <Route path="/" element={<CommentsApi/>}/>
            <Route path="addcomments" element={<AddComments/>}/>
            <Route path="addcomments/:id" element={<AddComments/>}/>
        </Routes>
    </Router>
    </>
   )
}