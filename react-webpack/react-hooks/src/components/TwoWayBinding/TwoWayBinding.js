import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS"
  },
  {
    id: 2,
    name: "Javascript"
  },
  {
    id: 3,
    name: "React"
  }
];

function TwoWayBinding() {
  // 1. gọi hàm thay đổi two-way binding
  const [name, setName] = useState("");
  // console.log(name);

  // 2. gọi hàm thay đổi submit form
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");

  const handleSubmit = () => {
    console.log({
      name1,
      email1
    });
  };

  // 3. Checkbox, Radio
  const handleRadioSubmit = () => {
    console.log({ id: checkedRadio });
  };

  const [checkedRadio, setRadioChecked] = useState(2);
  console.log(checkedRadio);

  // 4. Check with Radio

  const [checked, setChecked] = useState([]);

  console.log(checked);
  const handleCheck = (id) => {
    // setChecked(prev => [...prev, id])
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        // Uncheck
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleCheckboxSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div style={{ padding: 32 }}>
      <h3>1. Thay đổi two-way binding </h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("Nguyen Van BBB")}> Change</button>

      <h3>2. Thay đổi submit form </h3>
      <input value={name1} onChange={(e) => setName1(e.target.value)} />
      <input value={email1} onChange={(e) => setEmail1(e.target.value)} />
      <button onClick={handleSubmit}> Register</button>

      <h3>3. Form with radio</h3>
      <p> Unlockcode</p>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            //name="course"
            type="radio"
            checked={checkedRadio === course.id}
            onChange={() => setRadioChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleRadioSubmit}>Check Radio</button>

      <h3>4. Form with Checkbox </h3>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            //name="course"
            type="checkbox"
            checked={checked.includes(course.id)} // neu includes co id thi checked thay vi cho checked === id
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleCheckboxSubmit}>Checkbox</button>
    </div>
  );
}

export default TwoWayBinding;
