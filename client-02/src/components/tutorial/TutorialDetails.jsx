import {
    Typography,
    Box,
    Container,
    List,
    Paper,
    TextField,
    TextareaAutosize,
    Divider,
    Button,
} from '@mui/material'
import CommentComponent from '../comment/Comment'
const comments = [
    {
        id: 1,
        body: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
        username: 'dbroscombe0',
        replies: [
            {
                body: 'First reply',
                username: 'user1',
                id: 1,
            },
            {
                body: 'Second reply',
                username: 'user2',
                id: 2,
            },
        ],
    },
    {
        id: 1,
        body: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
        username: 'dbroscombe0',
        replies: [
            {
                body: 'First reply',
                username: 'user1',
                id: 1,
            },
            {
                body: 'Second reply',
                username: 'user2',
                id: 2,
            },
        ],
    },
    // {
    //     id: 2,
    //     body: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //     username: 'mvynall1',
    // },
    // {
    //     id: 3,
    //     body: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //     username: 'eeveque2',
    // },
    // {
    //     id: 4,
    //     body: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //     username: 'cmitchard3',
    // },
    // {
    //     id: 5,
    //     body: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //     username: 'btonnesen4',
    // },
    // {
    //     id: 6,
    //     body: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //     username: 'accomini5',
    // },
    // {
    //     id: 7,
    //     body: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //     username: 'ebignell6',
    // },
    // {
    //     id: 8,
    //     body: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //     username: 'rmingasson7',
    // },
    // {
    //     id: 9,
    //     body: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //     username: 'mpenton8',
    // },
    // {
    //     id: 10,
    //     body: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //     username: 'bdavio9',
    // },
]
const TutorialDetails = ({ title, description, image }) => {
    return (
        <Container>
            <Box mt={15}>
                <Box>
                    <Typography variant="h3" textAlign="center" mb={7}>
                        {title}
                    </Typography>
                    <Box maxWidth="960px" mx="auto" my={5}>
                        <img src="/images/ar.png" width="100%" alt="Titus" />
                    </Box>
                    <Typography fontSize="1.4rem" component="p">
                        {description}
                    </Typography>
                </Box>
                <Box py={3} my={10}>
                    <Typography variant="h4" textAlign="center" mb={7}>
                        Comments
                    </Typography>

                    <Divider pb={5} />

                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 900,
                            mx: 'auto',
                            pt: 10,
                        }}
                    >
                        {comments.map((comment, i) => (
                            <CommentComponent key={i} {...comment} />
                        ))}
                    </List>

                    <Box
                        component="form"
                        width="100%"
                        maxWidth={900}
                        mt={10}
                        mx="auto"
                    >
                        <TextField
                            label="Comment"
                            fullWidth
                            multiline
                            rows={7}
                            placeholder="Write your comment here"
                        />
                        <Button variant="contained" size="large" sx={{ mt: 2 }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default TutorialDetails
