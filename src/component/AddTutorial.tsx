import { Input } from "postcss";
import { title } from "process";
import React, { ChangeEvent, useState } from "react";
import { staticList } from "../global/tutorialList";
import TutorialData from "../types/tutorial";
const AddTutorial: React.FC = () => {
  const [Tutorial, setTutorail] = useState<TutorialData | null>(null);
  const [addTutorialSubmit, setAddTutorialSubmit] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTutorail({ ...Tutorial, [name]: value });
  };
  // add tutorial submitted part
  const saveTutorial = () => {
    //@ send the database part
    // staticList.push(Tutorial!);
    return new Promise((resolve, reject) => {
      if (Tutorial?.title === 'reject') {
        reject('error - title name can\'t be reject');
      } else {
        resolve(Tutorial);
      }
    })
    
    // if success
    // setAddTutorialSubmit(true);
  };

  const handleSaveTutorial = () => {
    saveTutorial().then((tutorial: any) => {
      staticList.push(tutorial);
      console.log(staticList.length);
      setAddTutorialSubmit(true);
    }).catch((err) => {
      console.log(err);
    })
  }
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <button
            className="btn-success bg-[#18672a] mt-[8px] p-[8px] rounded-lg"
            onClick={handleSaveTutorial}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddTutorial;
