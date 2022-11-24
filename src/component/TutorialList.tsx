import React, { useState } from "react";
import TutorialData from "../types/tutorial";
const TutorialList: React.FC = () => {
  const staticList: Array<TutorialData> = [
    {
      title: "React",
      description: "Front",
    },
    {
      title: "Angular",
      description:
        "The front language which is better than the other language to build enomous website",
    },
    {
      title: "Vue",
      description: "Include all features of react and angular",
    },
  ];

  const [m_currentTutorial, setCurrentTutorial] = useState<TutorialData | null>(
    null
  );
  const [m_currentIndex, setCurrentIndex] = useState<number>(-1);

  const setActiveTutorial = (mTutorial: TutorialData, index: number) => {
    setCurrentIndex(index);
    setCurrentTutorial(mTutorial);
  };
  return (
    <div>
      <div className="input-group flex grid grid-cols-12 m-0 max-w-[750px]">
        <div className="col-span-8 pl-[15px] pr-[15px] flex mb-[6px]">
          {" "}
          <input
            type="text"
            className="form-control flex-auto pl-[12px] pt-[6px] pb-[6px] text-[16px] rounded-[4px] border-2 border-white"
            placeholder="Search by titie"
          />
          <button className="border-2 border-white p-[15px] rounded-r-lg">
            Search
          </button>
        </div>
        <div className="col-span-6 px-[15px]">
          <h4 className="text-[24px]">Tutorials List</h4>
          <ul>
            {staticList &&
              staticList.map((tutorial, index) => (
                <li
                  className={
                    "p-[12px] border-[1px] hover:text-sky-400" +
                    (index === m_currentIndex ? " bg-sky-400" : "")
                  }
                  key={index}
                  onClick={() => setActiveTutorial(tutorial, index)}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>
          <button className="bg-[red] text-[white] rounded-[4px] p-[3px] mt-[8px]">
            Remove All
          </button>
        </div>
        <div className="col-span-6 px-[15px] mt-[8px]">
          {m_currentTutorial ? (
            <div>
              <h4 className="text-[24px]">Tutorial</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>
                {m_currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>
                {m_currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>
                {m_currentTutorial.published ? "Published" : "Pending"}
              </div>
              <button className="bg-yellow-700 text-[16px] hover:bg-yellow-400 rounded-md p-[3px]">Edit</button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialList;
