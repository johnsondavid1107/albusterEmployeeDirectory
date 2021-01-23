import React from "react"


function Jumbotron() {
    const styles = {
        header: {
            fontSize: "40px",
            color: "white"

        }, display: {
            background: "#00004d",
            boarderBottom: "40px"
        }
    }

    return (
        <div className="jumbotron jumbotron-fluid" style={styles.display}>
            <div className="container">
                <h1 className="display-4 text-center" style={styles.header}>Employee Directory</h1>

            </div>
        </div>
    )

}

export default Jumbotron