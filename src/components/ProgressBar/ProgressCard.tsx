import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgressWithLabel from './CircularProgressWithLabel';


export type ProgressCardProps = {
    title: string;
    subTitle: string;
    value: any;
};

export default function ProgressCard({
    title,
    subTitle,
    value,
}: ProgressCardProps) {

    return (
        <Card variant="outlined" sx={{ flexGrow: 1 }}>
            <CardContent>
                <Stack
                    direction="column"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexGrow: '1',
                        gap: 1,
                        mb: 2
                    }}
                >
                    <Stack sx={{ justifyContent: 'space-between' }}>
                        <Stack
                            direction="row"
                            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                component="h2" variant="subtitle2"
                            >
                                {title}
                            </Typography>
                        </Stack>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {subTitle}
                        </Typography>
                    </Stack>
                    <Box sx={{
                        width: '100%',
                        // height: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // top:'50%'
                    }}>
                        <CircularProgressWithLabel value={value} />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}
