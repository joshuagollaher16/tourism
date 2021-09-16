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
            <ToggleButton value="rating">Rating</ToggleButton>
            <ToggleButton value="nearme">Near Me</ToggleButton>
            <ToggleButton value="price">Price</ToggleButton>
            <ToggleButton value="seasonal">Seasonal</ToggleButton>
            <ToggleButton value="type">Type</ToggleButton>
        </ToggleButtonGroup>
    );
}
