import { Grid, InputLabel, TextField, FormControl ,Select, MenuItem, ButtonBase, Button } from "@mui/material";
import { useState } from "react";
import { FbAdd } from "../config/Firebase/firebasemethods";



export default function Form (){
const [donorData, setDonorData] = useState<any>()

const fillModel = (key: string, val: any) => {
    donorData[key] = val
    setDonorData({ ...donorData })
  }

const SubmitData = ()=>{
  FbAdd("DonorData",donorData).then((res)=>{
console.log(res)
  }).catch((err)=>{

    console.log(err)
  })
}  

    return (

        <>
        
        <form>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={donorData.name}
                onChange={(e) => fillModel("userName", e.target.value)}
              />
            </Grid>
            
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={donorData.email}
                onChange={(e:any) => fillModel("email", e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phNo"
                value={donorData.phonenumber}
                onChange={(e:any) => fillModel("phonenumber", e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={donorData.address}
                onChange={(e:any) =>fillModel("address", e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="have you any disease , mention if any "
                name="disease"
                value={donorData.disease}
                onChange={(e:any) =>fillModel("disease", e.target.value)}
              />
            </Grid>
            
            <Grid item xs={4}>
            <FormControl fullWidth>
                <InputLabel htmlFor="Blood Groups">Blood Groups</InputLabel>
                <Select
                  name="BloodGroup"
                  value={donorData.bloodgroup} 
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
            </Grid>
           
            
            
            
          </Grid>
          <div className="p-2">
            <Button
              type="button"
              onClick={SubmitData}
              variant="outlined"
            >
              Submit
            </Button>
          </div>
        </form>
        </>
    )
}