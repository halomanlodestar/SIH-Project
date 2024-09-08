"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, ArrowRightCircle, Book } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const StepControls = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [consent, setConsent] = useState(false);

  const stepParam = searchParams.get("step");

  if (!stepParam) {
    router.replace("/apply?step=1");
  }

  const step = Number(stepParam);

  if (isNaN(step)) {
    router.replace("/apply?step=1");
  }

  const Next = () => {
    return router.replace(`/apply?step=${step + 1}`);
  };

  const Previous = () => {
    return router.replace(`/apply?step=${step - 1}`);
  };

  return (
    <section className={"flex flex-col space-y-4"}>
      {step === 1 && (
        <div className={"flex space-x-2"}>
          <input
            id={"consent"}
            type={"checkbox"}
            onChange={(e) => {
              setConsent(e.target.checked);
            }}
          />
          <label htmlFor={"consent"}>
            I've read all the instructions and requirements and I wish to
            proceed
          </label>
        </div>
      )}
      <div
        className={
          "border-t border-neutral-600 justify-between items-center h-20 flex"
        }
      >
        <div className={`flex space-x-2 items-center h-full`}>
          <Button
            onClick={Previous}
            variant={"outline"}
            className={`space-x-2  ${step === 1 && "hidden"}`}
          >
            <ArrowLeftCircle /> <span>Prev</span>
          </Button>
        </div>
        <div className={"flex space-x-2 items-center h-full"}>
          <Button
            disabled={!consent}
            onClick={Next}
            variant={"outline"}
            className={"space-x-2"}
          >
            <span>Next</span>
            <ArrowRightCircle />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepControls;
