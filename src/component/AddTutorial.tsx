import { Input } from "postcss";
import React from "react";

const AddTutorial : React.FC = () =>{
    return (
        <div className="max-w-[300px] mx-auto">
            <div className="form-group">
                <label htmlFor="title" className="block mb-[8px] mt-[8px]">Title</label>
                <input type="text" className="w-[100%] rounded-lg text-[24px]"/>
            </div>
            <div className="form-group mb-[8px]">
                <label htmlFor="description" className="block mb-[8px] mt-[8px]">Description</label>
                <input type="text" className="w-[100%] rounded-lg text-[24px]"/>
            </div>
            <button className="btn-success bg-[#18672a] mt-[8px] p-[8px] rounded-lg">Submit</button>
        </div>
    );
}
export default AddTutorial;