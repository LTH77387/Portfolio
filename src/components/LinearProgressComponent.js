import { Button, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, LinearProgress, Card, CardContent, CardMedia } from '@mui/material';
const LinearProgressComponent = ({leftContent,progress,color}) => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "65%" }}>
                    <Typography>{leftContent}</Typography>
                    <Typography>{progress}%</Typography>
                </div>
                <LinearProgress variant="determinate" value={progress} sx={{ height: 10, width: "65%", borderRadius: 10, backgroundColor: "#D9D9D9", "& .MuiLinearProgress-bar": { backgroundColor: color } }} />
            </div>
        </>
    )
}
export default LinearProgressComponent;