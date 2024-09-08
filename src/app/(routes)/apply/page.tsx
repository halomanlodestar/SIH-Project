import React from "react";
import StepControls from "@/components/StepControls";
import ApplicationSteps from "@/components/ApplicationSteps";

interface Props {
  searchParams: {
    step: string;
  };
}

const Apply = ({ searchParams }: Props) => {
  const step = Number(searchParams.step);

  return (
    <div className={"flex flex-col space-y-4"}>
      <section>
        <ApplicationSteps step={step} />
      </section>
      <StepControls />
    </div>
  );
};

export default Apply;
