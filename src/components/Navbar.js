import {React, Component, useState} from "react";

import {ToggleButtonGroup, ToggleButton, Container, Rating, Grid} from "@mui/material";

export default function Navbar() {

    const [alignment, setAlignment] = useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (

        <Grid container direction="row" alignItems="center" spacing={2} className="navbar">
            <Grid item>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}>
                    <ToggleButton className="full-height" value="rating">Rating</ToggleButton>
                    <ToggleButton className="full-height" value="nearme">Near Me</ToggleButton>
                    <ToggleButton className="full-height" value="price">Price</ToggleButton>
                    <ToggleButton className="full-height" value="seasonal">Seasonal</ToggleButton>
                    <ToggleButton className="full-height" value="type">Type</ToggleButton>
                </ToggleButtonGroup>
            </Grid>


            <Grid item>
                {alignment === "rating" &&
                <Rating size="large">

                </Rating>
                }

                {alignment === "nearme" &&
                <Rating size="large">

                </Rating>
                }

                {alignment === "price" &&
                <Rating size="large">

                </Rating>
                }

                {alignment === "seasonal" &&
                <Rating size="large">

                </Rating>
                }

                {alignment === "type" &&
                <Rating size="large">

                </Rating>
                }

            </Grid>

        </Grid>
    );
}
