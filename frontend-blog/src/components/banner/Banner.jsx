import  {Box, Typography, styled} from '@mui/material';

const Image = styled(Box)`
    background: url(https://images.pexels.com/photos/13260079/pexels-photo-13260079.jpeg?auto=compress&cs=tinysrgb&w=600) center/50% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #ffffff;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #ffffff;
`

const Banner = () => {
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>This is Blog Home</SubHeading>
        </Image>
    )
}

export default Banner;