import React from "react";
import ConsentCheckBox from "@/components/ConsentCheckBox";

interface ApplicationStepsProps {
  step?: number;
}

const Step1 = () => {
  return (
    <div className={"flex flex-col prose prose-neutral invert"}>
      <h2>Scholarship Rules and Requirements</h2>
      <hr />
      <h3>Eligibility Criteria</h3>
      <ul>
        <li>
          Academic Performance: Applicants must have a minimum GPA of 3.0 on a
          4.0 scale or equivalent.
        </li>
        <li>
          Enrollment Status: Must be enrolled or planning to enroll in a
          full-time undergraduate or graduate program at an accredited
          institution.
        </li>
        <li>
          Age Requirement: Applicants must be between 17 and 25 years old at the
          time of application.
        </li>
        <li>Residency: Open to residents and citizens of India only.</li>
        <li>
          Field of Study: Open to all fields of study, with preference given to
          STEM and social sciences majors.
        </li>
      </ul>
      <h3>Application Requirements</h3>
      <ul>
        <li>
          Application Form: Complete the online application form by the
          deadline.
        </li>
        <li>
          Essay Submission: Submit a 500-750 word essay on the topic "The Role
          of Education in Shaping the Future".
        </li>
        <li>
          Recommendation Letters: Provide two recommendation letters from
          professors, advisors, or professional supervisors.
        </li>
        <li>
          Transcripts: Upload official transcripts from your current or most
          recent educational institution.
        </li>
        <li>
          Proof of Enrollment: Submit a letter of enrollment or acceptance from
          your educational institution.
        </li>
      </ul>
      <h3>Selection Criteria</h3>
      <ul>
        <li>
          Academic Achievement: Evaluation of GPA and coursework difficulty
        </li>
        <li>
          Quality: Assessment of originality, clarity, and relevance to the
          topic.
        </li>
        <li>
          Extracurricular Activities: Involvement in community service,
          leadership
        </li>
        <li>
          roles, or relevant extracurricular activities. Recommendation Strength
        </li>
        <li>
          Quality and relevance of the recommendation letters. Financial Need:
        </li>
        <li>
          Consideration of the financial need of the applicant, if applicable.
        </li>
      </ul>

      <h3>Scholarship Terms and Conditions</h3>
      <ul>
        <li>Award Amount: Scholarship awards range from $1,000 to $5,000.</li>
        <li>
          Payment: Funds will be disbursed directly to the educational
          institution on behalf of the student.
        </li>
        <li>
          Renew ability: Scholarships are non-renewable and awarded for one
          academic year only.
        </li>
        <li>
          Compliance: Recipients must maintain a minimum GPA of 3.0 during the
          scholarship period.
        </li>
        <li>
          Reporting: Recipients are required to submit a progress report at the
          end of the academic year.
        </li>
      </ul>
    </div>
  );
};

const ApplicationSteps = ({ step }: ApplicationStepsProps) => {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <div>step 2</div>;
  }
};

export default ApplicationSteps;
