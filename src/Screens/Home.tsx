import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Login from "./Login";
import BasicButton from "../components/Button";
import IconButtons from "../components/IconButton";
import Table from "../components/DynamicTable";
import APIProject from "../pages/APIproject";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import { FbAdd, FbGet, FbLogout } from "../config/Firebase/firebasemethods";

export default function Home() {

  const [model, setModel] = useState<any>({})
  const [taskList, settaskList] = useState<any>([])
  const navigate = useNavigate()

const logout= ()=>{
  FbLogout().then((res)=>{
navigate("/login")
  }).catch((err)=>{
console.log(err)
  })
}

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model })
  }
  const addTask = () => {
    // console.log(model)
    FbAdd("Tasks", model).then((res) => {
      // console.log(res)
      getTask()
      setModel({})
    }).catch((err) => {
      console.log(err)
    })
  }

  const getTask = () => {
    // console.log(model)
    FbGet("Tasks").then((res: any) => {
      console.log(res)
      settaskList([...res])
    }).catch((err) => {
      console.log(err)

    })

  }
  useEffect(() => {
    getTask()
  }, [])


  const openPage = () => {
    navigate('/Dashboard');
  };
  return (
    <>


      <div className="p-2 h-screen flex justify-center items-center">
        <div className="bg-info text-center display-flex justify-content-center py-3">
          <div className="row">
            <div className="col-md-12 ">
              <div className=" text-center display-flex justify-content-center">

              <BasicButton
               label={"LOGOUT"} variant={"contained"} onClick={logout}/>
               </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="p-2">
                    <button className="btn-btn-info shadow rounded-pill p-2  fs-5" onClick={openPage}>Click to open Dashboard</button>

                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-2">
                    <button className="btn-btn-info shadow rounded-pill p-2  fs-5" onClick={() => navigate('/signup')}>Click to open Signup</button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-2">
                    <button className="btn-btn-info shadow rounded-pill p-2  fs-5" onClick={() => navigate('/login')}>Click to open Login</button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-2">
                    <button className="btn-btn-info shadow rounded-pill p-2  fs-5" onClick={() => navigate('/project')}>Click to open post</button>
                  </div>
                </div>
              </div>
              <div className="p-5 my-3 bg-dark">
                <div>
                  <h1 className="text fs-3 text-white">Task</h1>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <div className="p-5">
                    <div>
                      <div className="py-2">
                        <Input
                          label={"Task"}
                          variant={"contained"}
                          value={model.task}
                          onChange={(e: any) => fillModel("Task", e.target.value)}
                          required={false}
                        />
                      </div>
                      <div className="py-2">
                        <Input
                          label={"Assignee"}
                          variant={"contained"}
                          value={model.assignee}
                          onChange={(e: any) => fillModel("Assignee", e.target.value)}
                          required={false}
                        />
                      </div>
                      <div className="py-2">
                        <BasicButton
                          label={"Assigned"}
                          variant={"contained"}
                          onClick={addTask} />
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className=" col-md-8" >
                    {taskList && taskList.length > 0 ? taskList.map((x: any, i: any) => (
                      <div key={x.id} className="rounded bg-white shadow p-3 m-3">
                        <h1 className="fs-3 text-dark">{x.Task}</h1>
                        <p className="fs-3 text-dark ">{x.Assignee}</p>
                      </div>
                    )) : null}
                    
                </div>

              </div>


            </div>
          </div>


        </div>
      </div>

    </>
  );
}
