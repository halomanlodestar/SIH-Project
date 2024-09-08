import React from "react";
import { sampleApplication } from "@/lib/placeholder/application";

interface Props {
  params: {
    id: string;
  };
}

const Application = ({ params: { id } }: Props) => {
  const application = sampleApplication;

  console.log(id);

  return <div>hello, {id}</div>;
};

export default Application;
