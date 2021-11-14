import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
//import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Slider from '@material-ui/core/Slider';

const pricing = [
  {
    title: 'Basic',
    price: {
      monthly: 22,
      annual: 210,
    },
    features: [
      {
        title: '1 User',
        isIncluded: true,
      },
      {
        title: '1 App',
        isIncluded: true,
      },
      {
        title: 'Integrations',
        isIncluded: true,
      },
      {
        title: 'Google Ads',
        isIncluded: false,
      },
      {
        title: 'SSO via Google',
        isIncluded: false,
      },
      {
        title: 'API access',
        isIncluded: false,
      },
      {
        title: 'Facebook Ads',
        isIncluded: false,
      },
    ],
    isHighlighted: false,
    btnText: 'Stake',
  }
];

function valuetext(value) {
  return `${value}weeks`;
}


const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 52,
    label: '52',
  },
];

const PricingCards = () => {
  const theme = useTheme();
  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Gametaverse
        </Box>
      </Box>
      <Box>
        <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
          <ToggleButtonGroup
            value={pricingOption}
            exclusive
            onChange={handleClick}
          >
            <ToggleButton
              value="monthly"
              size={'small'}
              sx={{
                backgroundColor:
                  pricingOption === 'monthly'
                    ? `${theme.palette.primary.light} !important`
                    : 'transparent',
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'medium',
                  color:
                    pricingOption !== 'annual'
                      ? theme.palette.common.white
                      : 'primary',
                }}
              >
                Flexible
              </Typography>
            </ToggleButton>
            <ToggleButton
              value="annual"
              size={'small'}
              sx={{
                backgroundColor:
                  pricingOption === 'annual'
                    ? `${theme.palette.primary.light} !important`
                    : 'transparent',
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'medium',
                  color:
                    pricingOption === 'annual'
                      ? theme.palette.common.white
                      : 'primary',
                }}
              >
                Locked
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Grid alignItems="center"
          justifyContent="center" container spacing={4}>
          {pricing.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                component={Card}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
                boxShadow={item.isHighlighted ? 4 : 0}
                borderRadius={4}
                padding={2}
                paddingTop={3}
              >
                {
                  pricingOption === 'annual' && 
                  <div>
                    <Typography
                      marginBottom={1}
                      marginLeft='auto'
                      variant="subtitle2"
                      sx={{
                        fontWeight: 'medium',
                        color: 'primary',
                      }}
                    >
                      Lock for (weeks): 
                    </Typography>
                    <Slider
                      defaultValue={10}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider-custom"
                      step={5}
                      min={1}
                      max={52}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </div>
                }
                <Typography
                  marginBottom={1}
                  marginLeft='auto'
                  variant="subtitle2"
                  sx={{
                    fontWeight: 'medium',
                    color: 'primary',
                  }}
                >
                  balance: 0 GTA
                </Typography>

                <TextField id="outlined-basic" label="amount" variant="outlined" />

                <Box flexGrow={1} />
                <Box
                  component={CardActions}
                  justifyContent={'center'}
                  padding={4}
                >
                  <Button
                    size={'large'}
                    variant={item.isHighlighted ? 'contained' : 'outlined'}
                  >
                    {pricingOption === 'annual' ? 'Lock': 'Stake'}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingCards;
