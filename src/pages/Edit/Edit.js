import style from "./Edit.module.css";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React, { useReducer, useState } from "react";
import Button from "../../components/button/Button";
export default function Edit() {
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
  };
  const [formVal, dispatch] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });
  const onValChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    dispatch({ ...formVal, [name]: value });
    console.log(formVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // console.log(imgholder);
    formData.append("image", imgholder.image);
    // console.log(formData.get('image'))
    formData.append("fullname", formVal.fullname);
    // console.log(formData.get('fullname'))
    formData.append("email", formVal.email);
    // console.log(formData)
    formData.append("phone", formVal.phone);
    formData.append("address", formVal.address);
  };
  const { fullname, email, phone, address } = formVal;
  const { file, image } = imgholder;
  return (
    <div className={style.editcontainer}>
        <form onSubmit={onSubmit} className={style.formContainer}>
          <div className={style.filezone} >
            <label className={style.customfileupload}>
               <div className={`${style.imgwrap} ${style.imgupload}`}>
                <img for="photo-upload" src={image} />
              </div>
              <input
                id="photo-upload"
                type="file"
                name="image"
                onChange={imgChange}
              />
            </label>
          </div>
          <div className={style.formgroup}>
            <label className={style.group}>
              <strong>Full Name</strong>
            </label>
            <input
              type="text"
              placeholder="Full Number"
              name="fullname"
              className={style.inputField}
              value={fullname}
              onChange={onValChange}
              spellCheck="false"
              autoComplete="true"
              required
            />
          </div>

          <div className={style.formgroup}>
            <label className={style.group}>
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              className={style.inputField}
              onChange={onValChange}
              spellCheck="false"
              autoComplete="true"
              required
            />
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
              className={style.inputField}
              spellCheck="false"
              autoComplete="true"
              required
            />
          </div>
          <Button type="submit" value="Update" />
        </form>
    </div>
  );
}
