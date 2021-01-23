import React from "react"

class SearchBar extends React.Component {
    state = {
        find: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value
        })
    }



    render() {
        const styles = {
            rowColor: {
                background: "#F5F5F5"
            },
            inputF: {
                margin: "10px"
            }
        }
        return (<div className="container-fluid" style={styles.rowColor} >
            <div className="row">
                <div className="col-md-5"></div>
                <div className="text-center">
                    <input type="text"
                        name="find"
                        value={this.state.find}
                        className="form-control"
                        onChange={this.handleChange}
                        placeholder="Search" style={styles.inputF}></input>
                </div>
                <div className="col-md-5"></div>

            </div>
        </div>
        )
    }
}


export default SearchBar;