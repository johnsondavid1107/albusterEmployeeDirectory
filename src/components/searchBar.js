import React from "react"
// import API from "../utils/API"
import axios from "axios"
import Table from "./Table"
// import employee from "../employee.json"

class SearchBar extends React.Component {
    state = {
        find: "",
        employees: [],
        filteredEmployees: []
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=10").then(res =>
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            }))


    }


    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            find: value
        }, () => this.findEmployee())
        if (value.length <= 0) {
            this.setState({ employees: this.state.employees })
        }



    }

    findEmployee = () => {

        const filterEmployees = this.state.employees.filter(person =>
            (person.name.first.toLowerCase().includes(this.state.find)))


        this.setState({
            filteredEmployees: filterEmployees
        })

        console.log(this.state.employees)
        console.log(this.state.find)
        console.log(filterEmployees)
    }
    handleSort = () => {
        let array = this.state.employees

        array.sort(function (a, b) {

            // this.setState({ employees: array })
            return a.name.last - b.name.last

        })
        console.log(array)

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
                </div>


            </div>
            <Table employee={this.state.filteredEmployees} key={this.state.key} sort={this.handleSort} />
        </div>

        )

    }
}


export default SearchBar;