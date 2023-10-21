import Typography from '@mui/material/Typography';
import bgimg from '../../Assets/bgimg.avif'
export default function Message() {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
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
        <Typography variant='h1' sx={{ color: 'yellow' }} > Message Page</Typography>
        <h2 className='fs-1'>This is the Message page content. Page</h2>

      </div>
    </>
  )
}