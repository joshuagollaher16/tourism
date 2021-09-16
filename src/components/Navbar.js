import {React, Component, useState} from "react";

import {ToggleButtonGroup, ToggleButton} from "@mui/material";

export default function Navbar() {

    const [alignment, setAlignment] = useState('rating');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton className="full-height" value="rating">Rating</ToggleButton>
            <ToggleButton className="full-height" value="nearme">Near Me</ToggleButton>
            <ToggleButton className="full-height" value="price">Price</ToggleButton>
            <ToggleButton className="full-height" value="seasonal">Seasonal</ToggleButton>
            <ToggleButton className="full-height" value="type">Type</ToggleButton>
        </ToggleButtonGroup>
    );
}
