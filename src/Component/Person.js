import React from 'react';

function Person(props) {
    const { name } = props;
    const why = props;

    return (
        <div>
            <h4>I am {name} and that is because {props.why}</h4>
        </div>
    )
}

export default Person