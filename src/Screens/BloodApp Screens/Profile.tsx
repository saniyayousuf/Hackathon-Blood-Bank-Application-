import React, { useEffect, useState } from "react";
import "../../App.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import { FbGet } from "../../config/Firebase/firebasemethods";
import SMSelect from "../../components/Select";
import InputSelect from "../../components/Select";


export default function Profile() {
    

    const bloodgroups = [
        'A+',
        'B+',
        'B-'
        , 'AB+',
        'AB-',
        'O-',
        'O+'
    ]


    const [Donor, setDonor] = useState<any>([])
    const [selectval, setSelectval] = useState(bloodgroups[0]);


    const SelectChange = (newValue: any) => {
        setSelectval(newValue);
        console.log(newValue)
    };


    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const DonorData = await FbGet('users');
                setDonor(DonorData);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        }
        fetchStudentData();

    }, [])





    return (

        <>

            <div className="container">
                
                    <div className=" flex justify-center align-items-center">


                        <h1 className="">Blood Group detailes</h1>

                        <InputSelect
                            label="Select a blood group"
                            value={selectval}
                            options={bloodgroups}
                            onChange={(selectval) => { SelectChange(selectval) }}
                            className=" mt-5"
                        />


                        {
                            Donor
                            && Donor.filter((donor: any) =>{
                            const DonorBloodGroup = donor.bloodgroup;
                        return (
                          (selectval === "O+" &&
                            (DonorBloodGroup === "O+" ||
                              DonorBloodGroup === "O-")) ||
                          (selectval === "O-" &&
                            DonorBloodGroup === "O-") ||
                          (selectval === "A+" &&
                            (DonorBloodGroup === "A+" ||
                              DonorBloodGroup === "A-" ||
                              DonorBloodGroup === "O+" ||
                              DonorBloodGroup === "O-")) ||
                          (selectval === "A-" &&
                            (DonorBloodGroup === "O-" ||
                              DonorBloodGroup === "A-")) ||
                          (selectval === "B+" &&
                            (DonorBloodGroup === "B+" ||
                              DonorBloodGroup === "B-" ||
                              DonorBloodGroup === "O+" ||
                              DonorBloodGroup === "O-")) ||
                          (selectval === "B-" &&
                            (DonorBloodGroup === "B-" ||
                              DonorBloodGroup === "O-")) ||
                          (selectval === "AB+" &&
                            (DonorBloodGroup === "A+" ||
                              DonorBloodGroup === "B+" ||
                              DonorBloodGroup === "AB+" ||
                              DonorBloodGroup === "O+" ||
                              DonorBloodGroup === "A-" ||
                              DonorBloodGroup === "B-" ||
                              DonorBloodGroup === "AB-" ||
                              DonorBloodGroup === "O-")) ||
                          (selectval === "AB-" &&
                            (DonorBloodGroup === "AB-" ||
                              DonorBloodGroup === "B-" ||
                              DonorBloodGroup === "O-" ||
                              DonorBloodGroup === "A-" )
                              )
                              )
                            }).map((Donor: any, index: any) => (
                                    <Card key={index} className="m-3 shadow" sx={{ maxWidth: 600, textAlign: "justify", borderRadius: 12, paddingLeft:15,boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                                    
                                    <CardContent>
                                      <Typography variant="h2" sx={{ fontSize: 20, mb: 2, color: "#333" }} gutterBottom>
                                        Name: {Donor.userName}
                                      </Typography>
                                      <Typography sx={{ fontSize: 16, mb: 2, color: "#555" }} variant="body2" component="div">
                                        Email: {Donor.email}
                                      </Typography>
                                      <Typography sx={{ fontSize: 16, mb: 2, color: "#555" }}>
                                        Blood group: {Donor.bloodgroup}
                                      </Typography>
                                      <Typography sx={{ fontSize: 16, mb: 2, color: "#555" }}>
                                        Gender: {Donor.gender}
                                      </Typography>
                                      <Typography variant="body2" sx={{ fontSize: 16, mb: 2, color: "#555" }}>
                                        Address: {Donor.address}
                                        <br />
                                      </Typography>
                                    </CardContent>
                                    <CardActions>
                                     
                                    </CardActions>
                                  </Card>
                                  
                                ))}

                    </div>
                    
                </div>

            




        </>
    )
}