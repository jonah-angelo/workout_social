import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {

    return (
        <Box sx={{ marginTop: { lg: '200', xs: '20px' } }} p='20px'>
            <Typography variant='h4' mb='33px'>
                Watch
                <span style={{ color: '#ff2625', textTransform: 'capitalize' }}> {name} </span>
                Exercise Videos
            </Typography>
            <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '110px', xs: '0px' }
                }}
            >
                {exerciseVideos?.slice(0, 3)?.map((item, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos