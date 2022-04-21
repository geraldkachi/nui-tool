import { BottomNavigation, Container, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import QuiltedImageList from "../components/ImageCollege"
import ControlledAccordions from '../components/ControlledAccordions'
import BasicModal from "../components/BasicModal";
import SearchAppBar from "../components/AppBar";

const Tour = () => {
    const [value, setValue] = useState(0);
    return (
        <>
         <SearchAppBar />
        <Container sx={{ width: '900' }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the world in Lagos
            </Typography>
            <Box marginTop={3} sx={{ display: 'flex' }}>
                <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="sourcePage" height={325} />
                <QuiltedImageList />
            </Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Box sx={{ display: "flex" }}>
                <Typography variant="inherit" component="p" marginY={3}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                    voluptates rem quos delectus debitis earum modi, ipsum veritatis.
                    Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
                    omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
                    quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Exercitationem officiis commodi beatae
                    animi incidunt necessitatibus aut provident ad ex. Saepe!
                </Typography>
            </Box>
            <Typography variant="h6" component="h4" marginBottom={3}>
                Frequently Asked Questions
            </Typography>
            <ControlledAccordions />
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    hello
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
        </>
    )
}

export default Tour