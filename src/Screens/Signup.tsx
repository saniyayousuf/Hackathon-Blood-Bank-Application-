import React, { useState } from 'react';
import { Box, Button, Container, FormControl, Input, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { ChakraProvider, CSSReset, Flex, Heading, Input as ChakraInput, Button as ChakraButton } from '@chakra-ui/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useToast } from '@chakra-ui/react'
import { fbSignup } from '../config/Firebase/firebasemethods';
import Switches from '../components/Switch';


interface LoginProps {
  useMUI: boolean;
}

const Signup: React.FC<LoginProps> = ({ useMUI }) => {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate()
  
  const toast = useToast()
  const fillModel = (key: string, val: any) => {
    model[key] = val
    setModel({ ...model })
  }
  
  const signupUser = () => {
    console.log(model)
    fbSignup(model)
    .then((res) => {
      toast({
        title: 'Signup Successful',
        description: 'You have successfully signed up!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/profile')
    }).catch((err) => {
      console.log(err)
      toast({
        title: 'Signup Failed',
        description: 'An error occurred during signup.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

    })
  }


  return (
    <Container
      sx={{ bgcolor: '#cfe8fc', height: '750px', marginTop: '30px', borderRadius: '20px', paddingTop: '50px' }} maxWidth="sm">
      <CssBaseline />
      <Container maxWidth="sm">
        {useMUI ? (
          <Stack spacing={3}>
            <Typography sx={{ fontWeight: 'bold', fontFamily: 'sans-serif ' }} variant="h4">Signup </Typography>
            
            <FormControl fullWidth>
              <InputLabel htmlFor="username">Username </InputLabel>
              <Input value={model.userName} onChange={(e) => fillModel("userName", e.target.value)} id="username " type="text" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input value={model.email} onChange={(e) => fillModel("email", e.target.value)} id="Email" type="email" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input value={model.password} onChange={(e) => fillModel("password", e.target.value)} id="password" type="password" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="address">Address</InputLabel>
              <Input value={model.address} onChange={(e) => fillModel("address", e.target.value)} id="password" type="text" />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel htmlFor="Blood Groups">Blood Groups</InputLabel>
                <Select
                  name="instituteType"
                  value={model.bloodgroup} 
                  onChange={(e:any) => fillModel("bloodgroup",e.target.value)}
                >
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="Blood Groups">Gender</InputLabel>
                <Select
                  name="gender"
                  value={model.gender} 
                  onChange={(e:any) => fillModel("gender",e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  
                </Select>
              </FormControl>
              <FormControl fullWidth>
              <InputLabel htmlFor="disease">Mention your disease , if any  </InputLabel>
              <Input value={model.disease} onChange={(e) => fillModel("disease", e.target.value)} id="Disease " type="text" />
            </FormControl>

            <Button
              onClick={signupUser}
              sx={{ fontSize: '1em', borderRadius: '10px', letterSpacing: '2px' }}
              variant="contained"
              color="primary">
              Signup
            </Button>
            <div className="text-center ">
              <p className='fw-bold '>Have an Account <Link className='btn rounded-pill ' to='/login'>Login</Link></p>
            </div>
          </Stack>
        ) : (
          <ChakraProvider>
            <CSSReset />
            <Flex direction="column" alignItems="center" justifyContent="center" height="100vh">
              <Heading as="h4" size="lg" mb={4}>
                Signup (Chakra UI)
              </Heading>
              <ChakraInput placeholder="Username" mb={4} />
              <ChakraInput type="password" placeholder="Password" mb={4} />
              <ChakraButton colorScheme="blue">Signup</ChakraButton>

            </Flex>
          </ChakraProvider>
        )}
      </Container>
    </Container>
  );
};

export default Signup;
