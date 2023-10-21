import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Get, Post, Put } from "../config/API-Methods/APIMethods"
import { TextField } from "@mui/joy"
import Input from "../components/Input"
import { Button } from "@chakra-ui/react"




export default function AddProject() {

    const [addData, setAddData] = useState<any>({})
    const navigate = useNavigate()
    const params = useParams()




    const GetByID = () => {
        Get(`posts/${params.id}`)
            .then((res) => {
                setAddData({ ...res.data })
            }).catch((err) => {
                console.log(err)

            })

    }



    const putData = () => {
        Put(`posts/${params.id}`, addData)
            .then((res) => {
                console.log("post update successfully")
                navigate("/project")
            }).catch((err) => {
                console.log(err)
            })
    }

    const SubmitData = () => {
        addData.userId = 11;
        Post("posts", addData).then((res) => {
            console.log("post added successfully")
            navigate("/project")
        }).catch((err) => {
            console.log(err)

        })
    }
    useEffect(() => {
        if (params.id) {
            GetByID();
        }
    }, []);

    return (
        <>
            <div className="container">
                <form>
                    <div className="p-2">
                        
                    </div>
                    <div className="p-2">
                        <Input
                            label={"UserID"}
                            variant={"outlined"}
                            onChange={(e:any)=> setAddData({...addData ,UserID:  e.target.value})}
                            required={true}
                            type={"number"}
                            value={addData.id} />
                    </div>
                    <div className="p-2">
                        <Input
                            label={"Title"}
                            variant={"outlined"}
                            onChange={(e:any)=> setAddData({...addData ,Title:  e.target.value})}
                            required={true}
                            type={"string"}
                            value={addData.title} />
                    </div>
                     <div className="p-2">
                        <Input
                            label={"Description"}
                            variant={"outlined"}
                            onChange={(e:any)=> setAddData({...addData ,Body:  e.target.value})}
                            required={true}
                            type={"string"}
                            value={addData.body}
                            
                            />
                    </div>

<div>
    
<div>
              {params.id ? (
                <>
                  <div
                   
                  >
                    <Button sx={{ marginRight: 'auto', backgroundColor: '#0ea5e9' }} 
                    className='mt-3 py-2 px-5 rounded-full text-slate-50	font-semibold'
                     variant="outlined"
                      onClick={putData}>Update</Button>
                      <Button sx={{ putDatamarginLeft: 'auto', backgroundColor: '#0ea5e9' }}
                       className='mt-3 py-2 px-5 rounded-full text-slate-50	font-semibold'
                        variant="outlined" onClick={() => {
                      navigate("/project");
                    }}>Go Back </Button>
                  </div>
                </>
              ) : (
                <>
                  <div
                   
                  >
                    <Button 
                    sx={{ marginRight: 'auto' , backgroundColor: '#0ea5e9',}} 
                    className='mt-3 py-2 px-5 rounded-full text-slate-50	font-semibold'
                     variant="outlined"
                      onClick={SubmitData}>Submit</Button>
                      <Button sx={{ marginLeft: 'auto', backgroundColor: '#0ea5e9' }}
                       className='font-semibold text-slate-50	 mt-3 py-2 px-5 rounded-full ' 
                       variant="outlined"
                        onClick={() => {
                      navigate("/project");
                    }}>Go Back </Button>
                  </div>
                </>
              )}
            </div>
</div>
                </form>
            </div>
        </>
    )
}