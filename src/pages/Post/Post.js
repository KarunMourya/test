import style from "./Post.module.css";
import React, { useState } from "react";
import Button from "../../components/button/Button";
export default function Post() {
  const initForm = {
    quantity: "",
    phone: "",
    address: "",
    description: "",
    type: "",
  };
  const [imgholder, setImageHolder] = useState({
    file: "",
    image:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
  });
  const imgChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImageHolder({
        file: file,
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);
    console.log(file);
  };
  const options = [
    { label: "Kg", value: "kg" },
    { label: "litre", value: "l" },
    { label: "Meat", value: "meat" },
  ];
  const [formVal, dispatch] = useState(initForm);
  const [files, setFiles] = useState([]);
  const { file, image } = imgholder;
  const onInputChange = (e) => {
    setFiles(e.target.files);
  };
  const onValChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    dispatch({ ...formVal, [name]: value });
    console.log(formVal);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formVal);
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }
  };
  const { quantity, phone, address, description, type } = formVal;
  return (
    <div className={style.productpost}>

      <form onSubmit={onSubmit} className={style.formContainer}>
        <div className={style.formnewgroup}>
        <div className={style.Box}>
          <div className={style.lineContain}>
          <div>
          <label className={style.group}>
            <strong>Quantity</strong>
          </label>
          </div>
          <div>
          <input
            type="number"
            placeholder="3"
            name="quantity"
            className={style.bar}
            value={quantity}
            spellCheck="false"
              autoComplete="true"
              required
            onChange={onValChange}
          />
          </div>
        
          </div>
          <div className={style.lineContain}>
          <div>
          <label className={style.group}>
            <strong>Unit</strong>
          </label>
          </div>
          <div>
          <select
            value={type}
            name="type"
            className={style.bar}
            onChange={onValChange}
          >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          </div>
        </div>
        </div>
        </div>
        <div className={style.formgroup}>
          <label className={style.group}>
            <strong>Phone</strong>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={onValChange}
            className={style.inputField}
            spellCheck="false"
              autoComplete="true"
              required
          />
        </div>
        <div className={style.formgroup}>
          <label className={style.group}>
            <strong>Address</strong>
          </label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={onValChange}
            spellCheck="false"
              autoComplete="true"
              required
            className={style.inputField}
          />
        </div>
        <div className={style.formgroup}>
          <label className={style.group}>
            <strong>Description</strong>
          </label>
          <textarea
            placeholder="Enter Description"
            value={description}
            className={style.desc}
            name="description"
            onChange={onValChange}
            spellCheck="false"
              autoComplete="true"
              required
          />
        </div>
        <div className={style.formimggroup}>
          <label className={style.customfileupload}>
            <div className={`${style.imgwrap} ${style.imgupload}`}>
              <img for="photo-upload" src={image} />
            </div>
            <input
              id="photo-upload"
              type="file"
              name="image"
              onChange={imgChange}
              multiple
            />
          </label>
        </div>

        <div className={style.btn}>
          <Button type="submit" value="Post" />
        </div>
      </form>
    </div>
  );
}
