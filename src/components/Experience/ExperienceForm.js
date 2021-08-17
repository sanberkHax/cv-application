import SubmitButton from '../Buttons/SubmitButton';
import DeleteButton from '../Buttons/DeleteButton';
import ExperienceDetails from './ExperienceDetails';
import { useState } from 'react';
function ExperienceForm(props) {
  const [experienceData, setExperienceData] = useState({
    id: props.id,
    companyName: '',
    positionTitle: '',
    mainTasks: '',
    fromDate: '',
    toDate: '',
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setExperienceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEditMode((previousMode) => !previousMode);
    props.passData(experienceData);
  };
  const { companyName, positionTitle, mainTasks, fromDate, toDate } =
    experienceData;
  const [editMode, setEditMode] = useState(false);
  const { id, onDelete } = props;
  if (editMode) {
    return (
      <ExperienceDetails
        companyName={companyName}
        positionTitle={positionTitle}
        mainTasks={mainTasks}
        fromDate={fromDate}
        toDate={toDate}
        onEdit={() => setEditMode((previousMode) => !previousMode)}
        onDelete={() => onDelete('experience', id)}
      ></ExperienceDetails>
    );
  }
  return (
    <div className="experience-cont">
      <h1>Experience Form</h1>
      <form action="submit" className="experience-form">
        <label htmlFor="company-name" className="company-name">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter Company Name"
          className="company-name-input"
          value={experienceData.companyName}
          onChange={changeHandler}
        />
        <label htmlFor="position-title" className="position-title">
          Position Title
        </label>
        <input
          type="text"
          name="positionTitle"
          placeholder="Enter Position Title"
          className="position-title-input"
          value={experienceData.positionTitle}
          onChange={changeHandler}
        />
        <label htmlFor="main-tasks" className="main-tasks">
          Main Tasks of the Job
        </label>
        <textarea
          type="text"
          name="mainTasks"
          className="main-tasks-input"
          placeholder="Enter your main tasks of this job"
          value={experienceData.mainTasks}
          onChange={changeHandler}
        />
        <label htmlFor="from">From :</label>
        <label htmlFor="to">To :</label>
        <input
          type="date"
          name="fromDate"
          value={experienceData.fromDate}
          onChange={changeHandler}
        />
        <input
          type="date"
          name="toDate"
          value={experienceData.toDate}
          onChange={changeHandler}
        />
      </form>
      {[
        <SubmitButton submitForm={submitHandler}></SubmitButton>,
        <DeleteButton clicked={() => onDelete('experience', id)} />,
      ]}
    </div>
  );
}

export default ExperienceForm;
