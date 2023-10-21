import Typography from '@mui/material/Typography';
import bgimg5 from '../../Assets/bgimg5.avif'

export default function Comments() {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg5})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: '0.8',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Typography variant='h1' sx={{ color: '#ffffff' }} > Comments Page</Typography>
        <h2 className='fs-1'>This is the Comments page content. Page</h2>

      </div>
    </>
  )
}