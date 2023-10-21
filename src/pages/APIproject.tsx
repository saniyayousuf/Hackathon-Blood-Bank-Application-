import { useEffect, useState } from "react"
import { Delete, Get } from "../config/API-Methods/APIMethods"
import { useNavigate } from "react-router-dom";

export default function APIProject() {



const [listData, setListData] = useState<any>([]);

    const navigate = useNavigate();

    const deletePost = (id: any) => {
        Delete(`posts/${id}`)
            .then(() => {
                console.log("Post Deleted Successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let getData = () => {
        Get("posts")
            .then((res) => {
                setListData([...res.data]);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return <>
        <div className="bg-yellow-100">
            <div className=" text-center py-3">
                <h1 className="font-serif">Share Your Thoughts</h1>

                <button
                    onClick={() => {
                        navigate("/add");
                    }}
                    
                    className="font-serif  text-dark font-bold  rounded "
                >
                    Comment Now
                </button>
            </div>

            {listData &&
                Array.isArray(listData) &&
                listData.length > 0 && (
                    <div className=" ">
                        {listData.map((x:any, i:any) => (
                            <div
                                key={i}
                                className="max-w-md rounded overflow-hidden shadow-md rounded-br-lg  border-x-4 border-indigo-400 ...   bg-gradient-to-r from-green-200 to-blue-300 hover:from-pink-200 hover:to-yellow-300 p-2 my-2  bg-blend-lighten "
                            >
                                <div className="md:flex">

                                    <div className="md:w-6/7 p-4">

                                        <div>
                                            <h2 className="text-gray-900 text-xl mt-2 font-semibold border-double border-4 border-indigo-300  inline-flex  m-2 ms-5 p-1 px-3">
                                                UserID :  {x.id}
                                            </h2>
                                        </div>
                                        <div className="font-bold text-xl mb-2"><b>Title : </b>  {x.title}</div>
                                        <p className="text-gray-800 text-base">
                                            <b> Description :</b>  "{x.body}"
                                        </p>

                                        <div className="mt-4 ">
                                            <button
                                                onClick={() => deletePost(x.id)}
                                                className="bg-danger p-2  font-bold me-5 rounded ">
                                                DELETE
                                            </button>
                                            <button
                                                onClick={() => { navigate(`/add/${x.id}`) }}
                                                className="bg-info p-2  font-bold  rounded">
                                                EDIT

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>


    </>
}