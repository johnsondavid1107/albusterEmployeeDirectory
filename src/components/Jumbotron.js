import React from "react"


function Jumbotron() {
    const styles = {
        header: {
            fontSize: "40px",
            color: "white"

        }, display: {
            background: "#00004d",
            borderBottom: "5px solid red",
            marginBottom:"0px"
        }, ptag: {
            color: "white"
        }
    }

    return (
        <div className="jumbotron jumbotron-fluid" style={styles.display}>
            <div className="container">
                <h1 className="display-4 text-center" style={styles.header}>Employee Directory</h1>
                <p className="text-center" style={styles.ptag}>Click on the carrots to filter by heading or use the search box to narrow your results.</p>

            </div>
        </div>
    )

}

export default Jumbotron