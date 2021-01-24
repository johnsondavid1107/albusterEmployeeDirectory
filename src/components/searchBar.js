import React from "react"
// import API from "../utils/API"
import axios from "axios"
import Table from "./Table"
// import employee from "../employee.json"

class SearchBar extends React.Component {
    state = {
        find: "",
        employees: []
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=10").then(res =>
            this.setState({ employees: res.data.results }));

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
                <div className="col-md-5">
                    {/* <button onClick={this.handleSearch}>click me</button> */}
                    {/* Getting stuck on callin axios.  Need to call on load and have json stacked */}
                </div>


            </div>
            <Table employee={this.state.employees} />




        </div>

        )

    }
}


export default SearchBar;