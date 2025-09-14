import { useForm } from "react-hook-form";

export default function FormComp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("about")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstname">First Name*</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Enter your First name"
        {...register("firstname", { required: true, maxLength: 20 })}
      />
      <label htmlFor="lastname">Last Name*</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Enter your Last name"
        {...register("lastname", { required: true, maxLength: 20 })}
      />
      <label htmlFor="email">Email*</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        {...register("email", { required: true })}
      />
      <label htmlFor="tel">Contact*</label>
      <input
        type="tel"
        name="contact"
        id="contact"
        placeholder="Enter your contact number*"
        {...register("contact", { required: true })}
      />
      <label htmlFor="gender">Gender*</label>
      <input
        type="radio"
        name="gender"
        value="male"
        id="gender"
        placeholder="Enter your contact number*"
        {...register("gender", { required: true })}
      />
      Male
      <input
        type="radio"
        name="gender"
        value="female"
        id="gender"
        placeholder="Enter your contact number*"
        {...register("gender", { required: true })}
      />
      Female
      <input
        type="radio"
        name="gender"
        value="other"
        id="gender"
        placeholder="Enter your contact number*"
        {...register("gender", { required: true })}
      />
      Other
      <label htmlFor="lang">Your Best Subject</label>
      <input
        type="checkbox"
        name="lang"
        value="english"
        id="english"
        {...register("lang", { required: true })}
      />
      English
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
      <label for="file">Upload Resume*</label>
      <input
        type="file"
        name="file"
        id="file"
        placeholder="Enter Upload File"
        {...register("file", { required: true })}
      />
      <label for="url">Enter URL*</label>
      <input
        type="url"
        name="url"
        id="url"
        {...register("url", { required: true })}
        placeholder="Enter url"
      />
      <label>Select your choice</label>
      <select
        name="select"
        id="select"
        {...register("select", { required: true })}
      >
        <option value="" disabled selected={register.select === ""}>
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
      <label for="about">About</label>
      <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        placeholder="About your self"
        {...register("about", { required: true })}
      ></textarea>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
