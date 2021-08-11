import React from "react";
import { useLocation } from "react-router-dom";

const Result = _ => {
    const { state } = useLocation();

    return (
        <div className="tc bg-light-green dib br3 pa6  ma2 grow bw2 shadow-5">

            <div >
                <h2>{state.persons.name}</h2>
                <p>{state.persons.mail}</p>
                <p>{state.persons.country}</p>
                <p>{state.persons.city}</p>
                <p>{state.persons.date}</p>
            </div>
        </div>
    )
}
export default Result;
