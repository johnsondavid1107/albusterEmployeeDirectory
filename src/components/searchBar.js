import React from "react"
import API from "../utils/API"
import Table from "../components/Table"
// import employee from "../employee.json"

class SearchBar extends React.Component {
    state = {
        find: "",
        employees: {}
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value
        })
    }

    handleSearch = () => {
        API.searchEmployee().then(function (res) {
            this.setState({ employees: res.results })
            console.log(this.state.employees)
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
            <Table handleSearch={this.handleSearch} />
        </div>

        )

    }
}


export default SearchBar;