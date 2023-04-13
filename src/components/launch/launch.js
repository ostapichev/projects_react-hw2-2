import React from 'react';

const Launch = ({value}) => {
    const isYearLaunch = value.launch_year < 2020;
    return (
        <div className={'launch'}>
            {isYearLaunch &&
                <div className={'launchInfo'}>
                    <h4>Mission name - {value.mission_name}</h4>
                    <p>Launce year - {value.launch_year}</p>
                    <img src={value.links['mission_patch_small']} alt={value.mission_name}/>
                </div>
            }
        </div>
    );
};

export default Launch;