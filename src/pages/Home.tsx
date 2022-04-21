import { Container, Grid, Typography } from "@mui/material"
import SearchAppBar from "../components/AppBar"
import TourCard from "../components/TourCard"
import cities from "../data.json"

const Home = () => {
    return (
        <>
         <SearchAppBar />
            <Container>
                {cities.map((city) => (
                    <>
                        <Typography
                            variant="h4"
                            component="h2"
                            marginBottom={3}
                            marginTop={5}
                        >
                            Top {city.name} Tours
                        </Typography>
                        <Grid container spacing={5}>
                            {city.tours.map((tour) => (<TourCard tour={tour} />))}
                        </Grid>
                    </>
                ))}
            </Container>
        </>
    )
}

export default Home