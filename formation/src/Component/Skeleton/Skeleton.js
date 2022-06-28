import './Skeleton.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Skeleton = () => {
    return (
        <div className = "Skeleton">
            <h1>Skeleton</h1>
            <Stack spacing={2} direction="row">
                <Button size="large" variant="text">Text</Button>
                <Button color="error" size="large" variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>


        </div>
        
    );
};

export default Skeleton;