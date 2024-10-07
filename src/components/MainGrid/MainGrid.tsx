import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/Copyright';
import StatCard, { StatCardProps } from '../StatCard/StartCard';
import ProgressCard from '../ProgressBar/ProgressCard';
import DailyActivity from '../DailyActivity/DailyActivity';
import WeightCard from '../WeightCard/WeightCard';

const statsData: StatCardProps[] = [
  {
    title: 'Steps',
    value: '3500 - 5000',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      1011, 689, 908, 889, 1793, 1781,
      1517, 612, 1031, 1822, 1312, 1068,
      514, 1948, 3200, 947, 1584, 1841,
      1311, 539, 1030, 539, 531, 1063,
      1932, 1099, 1730, 244, 796, 1600
    ],
    gradient:'High'
  },
  {
    title: 'Heart Rate',
    value: '78-133 bpm',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      78, 97, 103, 125, 86, 129, 91, 118, 122, 105, 131, 128, 115, 93, 88, 110,
      101, 127, 117, 124, 109, 130, 114, 123, 107, 126, 116, 121, 104, 111
    ],
    gradient:'Neutral'
  },
  {
    title: 'Stress',
    value: 'Low',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      1, 8, 3, 2, 7, 9, 5, 10, 6, 4, 8, 2, 1, 7, 5, 3, 9, 10, 6, 4, 8, 2, 1, 7, 5, 3, 9, 10, 6, 4
    ],
    gradient:'Low'
  },
  {
    title: 'Blood Oxygen',
    value: '90 - 100 %',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      91, 97, 93, 95, 99, 98, 92, 94, 96, 90, 97, 95, 93, 99, 98, 92,
      94, 96, 90, 97, 95, 93, 99, 98, 92, 94, 96, 90, 97, 95
    ],
    gradient:'High'
  },
];

const pieData = [
  {
    title: 'Calories',
    subTitle: '106/1310',
    value: 40,
  },
  {
    title: 'Proteins',
    subTitle: '35/92',
    value: 50,
  },
  {
    title: 'Fats',
    subTitle: '35/78',
    value: 65,
  },
  {
    title: 'Carbs',
    subTitle: '35/323',
    value: 35,
  }
];

const dailyActivityData = [
  {
    label: 'Active Energy',
    value: '864 kcal',
    time: '07:00 PM',
  },
  {
    label: 'Walking Distance',
    value: '5221 steps',
    time: '12:00 PM',
  },
  {
    label: 'Water Intake',
    value: '1.32 gallons',
    time: '08:20 PM',
  },
  {
    label: 'Work-outs',
    value: '1 hr 25 mins',
    time: '9:30 PM',
  }
]

const weightData = {
  title: 'Weight',
  value: '149.9 - 167.5 lbs',
  interval: 'Last 12 Months',
  trend: 'down' as 'down',
  gradient:'Neutral',
  data: [ 9, 8, 3, 2, 7, 9, 5, 10, 6, 4, 8, 2, 1, 7, 5, 3, 9, 10, 9, 4, 8, 2, 1, 7, 5, 3, 9, 10, 6, 4].slice(-12), // Trim to last 12 items
}

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {statsData.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {pieData.map((card, index) => (
          <Grid
            key={index}
            size={{ xs: 6, sm: 6, lg: 2 }}
          >
            <ProgressCard
              {...card}
            />
          </Grid>
        ))}
        <Grid size={{ xs: 12, lg: 4 }}>
          <DailyActivity data={dailyActivityData} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, sm: 6, lg: 12 }}>
          <WeightCard {...weightData} />
        </Grid>
      </Grid>

      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
