import { useEffect, useState } from "react";

interface FormData {
  userName: string;
  textArea: string;
  checkboxes: {};
  dropDown: string;
}

const Form: React.FC = () => {
  const [options, setOptions] = useState<{ [key: string]: boolean }>({});

  const initialState = {
    userName: "",
    textArea: "",
    checkboxes: {},
    dropDown: "",
  };

  const [formData, setFormData] = useState<FormData>(initialState);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        // const response=await fetch('fakeapi');
        // const data=response.json()
        // setOptions(data)
        const options = {
          option1: false,
          optio2: false,
          option3: false,
          optio4: false,
        };
        setOptions(options);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOptions();
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, dropDown: e.target.value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      checkboxes: { ...prev.checkboxes, [option]: e.target.value },
    }));
  };

  //   const handleSumbit = (e: React.FormEvent<HTMLInputElement>) => {
  //     e.preventDefault();
  //     // validate();
  //     console.log(e);
  //   };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Student Form</h1>
      <div>Normal input</div>
      <label htmlFor="username"></label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        value={formData.userName}
      ></input>

      <div>Text Area</div>
      <label htmlFor="steak">
        <textarea
          id="steak"
          name="textArea"
          onChange={handleChange}
          value={formData.textArea}
        >
          Steak
        </textarea>
      </label>

      <div>Check Boxes</div>
      <label htmlFor="veggie">
        <input id="veggie" type="checkbox">
          Veggie
        </input>
      </label>

      <div>Drop Down </div>
      <label>
        <select aria-placeholder="Choose one">
          {Object.entries(options).map(([key, value]) => (
            <option key={key} value={value ? key : ""}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <button type="submit"></button>
    </form>
  );
};

export default Form;
