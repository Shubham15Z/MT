import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
import { AddCircle as Add} from '@mui/icons-material';

const Container = styled(Box)`
    margin: 50px 100px;
`;

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit:'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0px 30px;
    font-size: 25px;
`;

const TextArea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 18px;
    border: none;
    &:focus-visible {
        outline: none;
    }
    
`
    
    
const CreatePost = () => {

    const url = "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <Container>
            <Image src={url} alt="banner"/>

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action"/>
                </label>
                <input type="file" id="fileInput" style={{display: 'none'}}></input>

                <InputTextField placeholder="Title"/>
                <Button variant="contained">Publish</Button>
            </StyledFormControl>

            <TextArea minRows={5} placeholder="Add your content...."/>
        </Container>
    )
}

export default CreatePost;