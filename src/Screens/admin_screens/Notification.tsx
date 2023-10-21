import Typography from '@mui/material/Typography';
import bg_img3 from '../../Assets/bg_img3.jpg'

export default function Notification() {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg_img3})`,
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
        <Typography variant='h1' sx={{ color: 'golden' }} > Notification Page</Typography>
        <h2 className='fs-1'>This is the Notification page content. Page</h2>

      </div>
    </>
  )
}