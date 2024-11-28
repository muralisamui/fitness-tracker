import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface ActivityDataProps {
    data: DailyActivityValueProps[];
}


const DailyActivity: React.FC<ActivityDataProps> = ({ data }) => {
    console.log(data)
    return (
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardContent>
                <Typography
                    component="h2" variant="subtitle2"
                >
                    Daily Activity
                </Typography>

                {
                    data.map((activity) => (

                        <DailyActivityValues
                            label={activity.label}
                            value={activity.value}
                            time={activity.time}
                        />
                    ))
                }
            </CardContent>
        </Card>
    )
}

export default DailyActivity


interface DailyActivityValueProps {
    label: string;
    value: string;
    time: string;
}

const DailyActivityValues: React.FC<DailyActivityValueProps> = ({ label, value, time }) => {
    return (
        <Stack
            direction="column"
            sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1, mt: 2 }}
        >
            <Stack sx={{ justifyContent: 'space-between' }}>
                <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography
                        variant="caption"
                        component='h3'
                        fontSize={12}
                        sx={{ color: '#3E72E2', fontWeight: '500' }}
                    >
                        {label}
                    </Typography>
                    <Typography
                        variant="caption"
                        component='h5'
                        sx={{ color: 'text.secondary' }}
                    >
                        {time}
                    </Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: '#EF6D33' }}>
                    {value}
                </Typography>
            </Stack>
        </Stack>
    )
}