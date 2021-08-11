import React, { useState } from 'react';

import Scroll from './Scroll';
import SearchList from './SearchList';
import mockData from '../data/mockData';
import logo from '../tesodev.png';



const details = mockData



function Search({ }) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    const filteredPersons = details.filter(
        person => {
            return (
                person
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase())

            );
        }
    );



    const handleChange = e => {
        setSearchField(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    };

    function searchList() {
        console.log(searchShow)
        if (searchShow) {
            return (
                <Scroll>
                    <SearchList filteredPersons={filteredPersons} />
                </Scroll>
            );
        }
    }

    return (
        <section className="garamond">
            <div className="navy georgia ma0 grow">
                <img src={logo} className="App-logo" alt="logo" width="150" height="70" />
                <h2 className="f2">Search Web App</h2>

            </div>
            <div className="pa2">
                <input
                    className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                    type="search"
                    placeholder="Search"
                    onChange={handleChange}
                />

            </div>

            {searchList()}



        </section>
    );
}

export default Search;