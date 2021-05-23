
import { withRouter } from "react-router"
import AboutUs from "../../components/about/AboutUs"
import Layout from "../../components/layout/Layout"



const AboutPageContainer = (props) => {


    return (
        <Layout>
            <div className="news-content">
                <AboutUs/>
           </div>
        </Layout>
    )
}


export default withRouter(AboutPageContainer)
