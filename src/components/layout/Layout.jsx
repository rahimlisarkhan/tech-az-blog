import { Fragment } from "react"
import { ToastContainer } from "react-toastify"
import Header from "./Header"


const Layout = (props) => {

    return(
        <Fragment>
        <Header/>
        <main className='container-content'>
            <div className="content">
                    {props.children}
            </div>
        </main>
            <ToastContainer
                  position="top-right"
                  autoClose={8000}
                  className='f-size'
                />
        </Fragment>

    )
} 


export default Layout