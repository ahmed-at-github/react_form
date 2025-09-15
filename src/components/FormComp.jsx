import { useForm } from "react-hook-form";
import { jsPDF } from "jspdf";

export default function FormComp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const doc = new jsPDF();

    // Add Title
    doc.setFontSize(18);
    doc.text("Form Submission", 20, 20);

    // Add Form Data
    doc.setFontSize(12);
    let y = 40; // vertical spacing

    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value = value.join(", ");
      }
      doc.text(`${key}: ${value}`, 20, y);
      y += 10;
    });

    // Save PDF
    doc.save("form-data.pdf");
    reset()
  };

  // console.log(watch("lang")); // watch input value by passing the name of it

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex justify-start gap-4">
          <label htmlFor="firstname">First Name*</label>
          <input
            className="border italic px-1"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your First name"
            {...register("firstname", { required: true, maxLength: 20 })}
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            className="border italic px-1"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter your Last name"
            {...register("lastname", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="flex justify-start gap-4">
          <label htmlFor="email">Email*</label>
          <input
            className="border italic px-1"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          <label htmlFor="tel">Contact*</label>
          <input
            className="border italic px-1"
            type="tel"
            name="contact"
            id="contact"
            placeholder="Enter your contact number*"
            {...register("contact", { required: true })}
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="gender">Gender*</label>
          <div className="flex gap-1">
            <input
              type="radio"
              name="gender"
              value="male"
              id="gender"
              placeholder="Enter your contact number*"
              {...register("gender", { required: true })}
            />
            <p>Male</p>
          </div>
          <div className="flex gap-1">
            {" "}
            <input
              type="radio"
              name="gender"
              value="female"
              id="gender"
              placeholder="Enter your contact number*"
              {...register("gender", { required: true })}
            />
            <p>Female</p>{" "}
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              name="gender"
              value="other"
              id="gender"
              placeholder="Enter your contact number*"
              {...register("gender", { required: true })}
            />
            <p>Other</p>{" "}
          </div>
        </div>
        <div className="flex gap-4">
          <label htmlFor="lang">Your Best Subject</label>
          <div className="flex gap-1">
            <input
              type="checkbox"
              name="lang"
              value="english"
              id="english"
              {...register("lang", { required: true })}
            />
            <p>English</p>
          </div>
          <input
            type="checkbox"
            name="lang"
            value="physics"
            id="physics"
            placeholder="Enter your contact number*"
            {...register("lang", { required: true })}
          />
          Physics
          <input
            type="checkbox"
            name="maths"
            value="maths"
            id="mahs"
            {...register("lang", { required: true })}
          />
          Math
        </div>
        {/* <label for="file">Upload Resume*</label>
        <input
          type="file"
          name="file"
          id="file"
          placeholder="Enter Upload File"
          {...register("file", { required: true })}
        /> */}
        <div>
          <label htmlFor="url">Enter URL*</label>
          <input
            className="border italic px-1 mx-3"
            type="url"
            name="url"
            id="url"
            {...register("url", { required: true })}
            placeholder="Enter url"
          />
        </div>

        <div>
          <label>Select your choice</label>
          <select
            className="mx-2 border px-1 "
            name="select"
            id="select"
            {...register("select", { required: true })}
          >
            <option value="" disabled defaultValue={register.select === ""}>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>
        </div>

        <div className="flex gap-3">
          <label htmlFor="about">About</label>
          <textarea
            className="border italic px-2 mx-3"
            name="about"
            id="about"
            cols="30"
            rows="5"
            placeholder="About your self"
            {...register("about", { required: true })}
          ></textarea>
        </div>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="flex justify-center">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[180px]"
            type="submit"
          >
            Generate PDF
          </button>
        </div>
      </form>
    </div>
  );
}
