import React from 'react';
import AlertButton from "./AlertButton.jsx";

function ToolBar(props) {
    return (
        <div>
            <AlertButton message="Playing!">
                Play Movie!
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
        </div>
    );
}

export default ToolBar;