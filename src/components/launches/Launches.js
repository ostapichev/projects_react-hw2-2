import React, {useEffect, useState} from 'react';
import Launch from "../launch/launch";
import {getLaunches} from "../../services/launchService";

const Launches = () => {
    let [launches, setLaunches] = useState([]);
    useEffect(() => {
        getLaunches().then(allLaunch => {
                setLaunches([...allLaunch]);
            })
    }, []);

    return (
        <div className={'launches'}>
            {
                launches.map(value => <Launch value={value} key={value.mission_id}/>)
            }
        </div>
    );
};

export default Launches;