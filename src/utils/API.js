/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const URL = "https://randomuser.me/api/?results=10"

export default {
    searchEmployee: function () {
        return axios.get(URL)
    }
}

// https://randomuser.me/api/?inc=gender,name,nat