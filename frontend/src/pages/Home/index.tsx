import Footer from "components/Footer"
import NavBar from "components/NavBar"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analyze your sales performance from different perspectives</p>
                    <hr />
                    <p>This application consists of displaying a dashboard from data provided by a back end built with Spring Boot.</p>
                </div>
                <Link className="btn btn-primary btn-lg" to="/dashboard">
                    Access Dashboard
                </Link>
            </div>
            <Footer />
        </>
    )
}