import React from "react"
// import API from "../utils/API"
import axios from "axios"
import Table from "./Table"
// import employee from "../employee.json"

class SearchBar extends React.Component {
    state = {
        find: "",
        employees: [],
        filteredEmployees: [],
        sortClicked: null
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=50&nat=us&inc=gender,dob,email,id,name,nat,cell,picture").then(res =>
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
            (person.name.first.toLowerCase().includes(this.state.find.toLowerCase()))
            ||
            (person.name.last.toLowerCase().includes(this.state.find.toLowerCase()))
            ||
            (person.cell.includes(this.state.find))
            ||
            (person.email.includes(this.state.find))
        )


        this.setState({
            filteredEmployees: filterEmployees
        })

        // console.log(this.state.employees)
        // console.log(this.state.find)
        // console.log(filterEmployees)


    }
    handleSort = () => {
        this.setState({ sortClicked: true })
        //learned this sort function from Stacked Overflow
        let array = this.state.filteredEmployees
        array.sort(function (a, b) {
            let nameA = a.name.first.toLowerCase()
            let nameB = b.name.first.toLowerCase()

            if (nameA < nameB) {
                return -1
            }

        })

        this.setState({ filteredEmployees: array })

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
            <Table employee={this.state.filteredEmployees} sort={this.handleSort} />
        </div>

        )

    }
}


export default SearchBar;