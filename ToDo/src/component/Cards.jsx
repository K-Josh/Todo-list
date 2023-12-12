import { Box, RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Flex, } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
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
            bg: 'white',
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
            bg: <Box bg={'white'} shadow={'sm'}/>,
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
const [activeIndex, setActiveIndex] = useState(null);
useEffect(()=>{
    const interval = setInterval(()=> {
        setActiveIndex(prevIndex => (prevIndex + 1) % cards.length)
    }, 4000)

    return () => clearInterval(interval)
}, [cards.length])
  return (
        <Box W={{base:'100vw',md:'70vw'}} className=''>
          <Flex className={`shadow-md ${activeIndex ? '' : 'opacity-100'}`} gap={2} direction={{base:'column', md:'row'}}>
          {cards.map((card, index) => (
            activeIndex === index && (
            <Box  className={` ${activeIndex === index ? ' transition-all duration-700 ease-in-out' : 'opacity-50' }`} key={index} bg={`${card.bg}`} rounded={'md'} p={{base:'1.5rem',lg:'1rem'}} minW={{lg:'32rem'}} h={{base:"",md:'15rem'}}>
          <Box gap={3} color={`${card.color}`} className={`space-y-3 flex flex-col `}>
          <span className='lg:text-[2rem]'>{card.number}</span>
          <span>{card.steps}</span>
          <div className='lg:pt-10 lg:space-y-3'>
          <span>{card.range}</span>
          <span>{card.progress}</span>
          </div>
          </Box>
        </Box>
            )
      ))}
      </Flex>
        </Box>

  )
}

