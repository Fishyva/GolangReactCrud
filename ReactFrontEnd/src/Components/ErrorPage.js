import { useRouteError } from "react-router-dom";




function ErrorPage() {
    const error = useRouteError
    return ( 
        <>
            <div className="Container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mt-3">Opps!</h1>
                        <p> Sorry an unexpected error has occured!</p>
                        <p>
                            <em>
                                {error.statusText || error.message}
                            </em>
                        </p>
                    </div>
                </div>
            </div>
        </>
      );
}

export default ErrorPage;