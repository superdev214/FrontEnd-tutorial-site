
import React, { ChangeEvent, useState } from "react";
import { staticList } from "../global/tutorialList";
import Service from "../service/service";
import {typeTutorial, typeUser} from "../types/typeData";
const AddTutorial: React.FC = () => {
  const [Tutorial, setTutorail] = useState<typeTutorial | null>(null);
  const [addTutorialSubmit, setAddTutorialSubmit] = useState<boolean>(false);
  //If you input the new title and description content, there are go to Tutorial automatic
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTutorail({ ...Tutorial, [name]: value });
  };
  // add tutorial submitted part
  const saveTutorial = () => {
    //@ send the database part
    // staticList.push(Tutorial!);
    var data = {
      title : Tutorial?.title,
      description : Tutorial?.description,
    };
    Service.addTutorial(data).then((res : any) => {
      console.log(res);
      if(res.data.msg === "success")
       {
        
         setAddTutorialSubmit(true);
        }
    }).catch((e : Error) => {
      console.log( e );
    })
        // if success
    // setAddTutorialSubmit(true);
  };

 
  //end add tutorial part

  return (
    <div className="max-w-[300px] mx-auto">
      {addTutorialSubmit ? ( //If you success the add tutorial
        <div>
          <h4 className="text-[24px] mb-5">You add tutorial successfully</h4>
          <button className="text-[16px] bg-green-300 hover:bg-green-800" onClick={() => {setAddTutorialSubmit(false)}} >
            Add
          </button>
        </div>
      ) : (
        // you don't success the add tutorial
        <div>
          <div className="form-group">
            <label htmlFor="title" className="block mb-[8px] mt-[8px]">
              Title
            </label>
            <input
              type="text"
              className="w-[100%] rounded-lg text-[24px] bg-sky-400"
              name="title"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-[8px]">
            <label htmlFor="description" className="block mb-[8px] mt-[8px]">
              Description
            </label>
            <input
              type="text"
              className="w-[100%] rounded-lg text-[24px] bg-sky-400"
              name="description"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="btn-success bg-[#18672a] mt-[8px] p-[8px] rounded-lg"
            onClick={saveTutorial}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddTutorial;
