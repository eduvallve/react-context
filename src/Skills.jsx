import React from 'react';

export default (props) =>{
    return (
        <div>
            <label>
                <input type="checkbox" name="likes[]" />Ruby
            </label>
            <label>
                <input type="checkbox" name="likes[]" />Javascript
            </label>
        </div>
    );
}