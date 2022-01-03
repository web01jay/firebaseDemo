import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const index = () => {
    return (
        <>
            <Router>
                <main className="main" id="main">
                    <Suspense fallback={<div>Component Loading</div>}>
                        <Switch>
                            
                        </Switch>
                    </Suspense>
                </main>
            </Router>
        </>
    )
}

export default index
