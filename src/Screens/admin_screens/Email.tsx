import Typography from '@mui/material/Typography';
import bgimg6 from '../../Assets/bgimg6.avif'

export default function Email() {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg6})`,
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
        <Typography variant='h1' sx={{ color: '#ffffff' }} > Email Page</Typography>
        <h2 className='fs-1'>This is the Email page content. Page</h2>

      </div>
    </>
  )
}