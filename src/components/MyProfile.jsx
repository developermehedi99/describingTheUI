import React from 'react';

const MyProfile = (props) => {
    const {salary, job} = props;
    return (
        <div>
            <h3>job:{job}</h3>
            <h4>salary :{salary}k</h4>
        </div>
    );
};

export default MyProfile;