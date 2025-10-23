"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Step1AddFiles from "./Step1AddFiles";
import Step2EditMetadata from "./Step2EditMetadata";
import Step3Confirmation from "./Step3Confirmation";

export default function UploadPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ProgressBar step={step} />

      <div className="flex-grow p-6">
        {step === 1 && <Step1AddFiles onNext={nextStep} />}
        {step === 2 && <Step2EditMetadata onNext={nextStep}  />}
        {step === 3 && <Step3Confirmation />}
      </div>
    </div>
  );
}
