import { Box, RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Grid, } from '@chakra-ui/react'
export const Cards = () => {

const cards = [
        {
            number: 480,
            steps: 'Go on',
            range: '100%',
            bg: 'blue.500',
            color: 'white',
            progress : (<RangeSlider
            aria-label={['min', 'max']}
            colorScheme='green'
            defaultValue={[0, 100]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={1} />
          </RangeSlider>)
        },
        {
            number: 180,
            steps: 'intention',
            range: '60%',
            bg: 'whiteSmoke',
            progress : (<RangeSlider
            aria-label={['min', 'max']}
            colorScheme='green'
            defaultValue={[0, 60]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={1} />
          </RangeSlider>)
        },
        {
            number: 72,
            steps: 'Deal',
            range: '48%',
            bg: 'whiteSmoke',
            progress : (<RangeSlider
            aria-label={['min', 'max']}
            colorScheme='blue'
            defaultValue={[0, 48]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={1} />
          </RangeSlider>)
        },
        {
            number: 72,
            steps: 'No itention',
            bg: 'red.300',
            color: 'white'
        }
    ]


  return (
        <Box minH={'100vh'} mt={{lg:'-26px'}}>
          <Grid maxW={'lg'} templateColumns={{base:'repeat(2, 1fr)',lg:'repeat(2, 1fr)'}} className={`shadow-lg`} gap={3} >
          {cards.map((card, index) => (
            (
            <Box className={`cursor-pointer hover:scale-110 transition-all duration-700 ease-in-out space-y-3 flex flex-col `} key={index} bg={`${card.bg}`} rounded={'md'} p={{base:'1rem',lg:'1rem'}} minW={{base:'12rem',lg:'17rem'}} h={{base:"",md:'15rem'}} gap={3} color={`${card.color}`}> 
          <span className='lg:text-[2rem]'>{card.number}</span>
          <span>{card.steps}</span>
          <div className='lg:pt-10 lg:space-y-3'>
          <span>{card.range}</span>
          <span>{card.progress}</span>
          </div>
        </Box>
            )
      ))}
      </Grid>
        </Box>

  )
}

