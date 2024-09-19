import React from "react";
import { CheckCircleIcon, Circle, CircleDot } from "lucide-react";

const Application = () => {
  return (
    <main className={"flex flex-col space-y-2.5"}>
      <h1 className={"text-4xl"}>Your Application</h1>
      <br />
      <div className={"border p-5 rounded-md flex flex-col space-y-7"}>
        <div
          className={
            "text-xl flex flex-col md:flex-row space-y-7 md:space-y-0 md:justify-between"
          }
        >
          <div className={"flex flex-col items-start md:w-1/3"}>
            <span className={"text-foreground/70 text-base"}>Scheme name</span>
            <span className={"text-2xl"}>Organization name</span>
          </div>
          <div className={"flex flex-col items-start md:w-1/3"}>
            <span className={"text-foreground/70 text-base"}>Submitted on</span>
            <span className={"text-2xl"}>{new Date().toDateString()}</span>
          </div>
        </div>
        <div className={"space-y-2"}>
          <span className={"text-2xl text-foreground/80"}>Status</span>
          <div className={"flex flex-col"}>
            <ul className={"space-y-1"}>
              <li className={"flex items-center space-x-2"}>
                <CheckCircleIcon className={"w-4 h-4"} color="green" />
                <span>Application Initiated</span>
              </li>
              <li className={"flex items-center space-x-2"}>
                <CheckCircleIcon className={"w-4 h-4"} color="green" />
                <span>Personal Details submitted</span>
              </li>
              <li className={"flex items-center space-x-2"}>
                <CheckCircleIcon className={"w-4 h-4"} color="green" />
                <span>Documents submitted</span>
              </li>
              <li className={"flex items-center space-x-2"}>
                <CircleDot className={"w-4 h-4"} color={"yellow"} />
                <span>Document verification</span>
              </li>
              <li className={"flex items-center space-x-2"}>
                <Circle className={"w-4 h-4"} color={"gray"} />
                <span>Documents Forwarded</span>
              </li>
              <li className={"flex items-center space-x-2"}>
                <Circle className={"w-4 h-4"} color={"gray"} />
                <span>Scholarship Initiated</span>
              </li>
              <li className={"flex items-center space-x-2"}>
                <Circle className={"w-4 h-4"} color={"gray"} />
                <span>Scholarship Received</span>
              </li>
            </ul>
          </div>
        </div>
        {/*<Button className={"w-1/2"}>See More</Button>*/}
      </div>
    </main>
  );
};

export default Application;
