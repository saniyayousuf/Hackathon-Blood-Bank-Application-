import Typography from '@mui/material/Typography';
import bgimg4 from '../../Assets/bgimg4.avif'
export default function Inbox() {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg4})`,
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
        <Typography variant='h1' sx={{}} > Inbox Page</Typography>
        <h2 className='fs-1'>This is the Inbox page content. Page</h2>

      </div>
    </>
  )
}