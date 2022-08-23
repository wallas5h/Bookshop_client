import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addressDetailsInterface,
  setAddressCompleted,
  setAddressDetails,
} from "../../features/payment/paymentSlice";
import { RootState } from "../../features/store";
import { AreaCodeSelect } from "./AreaCode";
import { CountrySelect } from "./CountrySelect";

export const AddressForm = () => {
  const dispatch = useDispatch();
  const { addressDetails } = useSelector((store: RootState) => store.payment);

  const [formData, setFormData] = useState<addressDetailsInterface>({
    name: "",
    street: "",
    city: "",
    postcode: "",
    country: "PL",
    areaCode: "48",
    phone: "",
  });

  const { name, street, city, postcode, country, areaCode, phone } = formData;

  const change = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setAddressCompleted(true));
    dispatch(setAddressDetails(formData));
  };

  return (
    <div className="address-form">
      <form onSubmit={formSubmit}>
        <p>Please fill form bellow</p>
        <span>Full name:</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={change}
          required
        />
        <span>Street:</span>
        <input
          type="text"
          name="street"
          id="street"
          value={street}
          onChange={change}
          required
        />

        <div className="box-group">
          <span>City:</span>
          <input
            type="text"
            name="city"
            value={city}
            onChange={change}
            required
          />

          <span className="m-l">ZIP/ postcode:</span>
          <input
            type="text"
            name="postcode"
            value={postcode}
            onChange={change}
            required
          />
        </div>
        <div className="box-group">
          <span>Country:</span>
          <CountrySelect value={country} change={change} />
        </div>

        <div className="box-group">
          <span>Area code:</span>
          <AreaCodeSelect value={areaCode} change={change} />

          <span className="m-l">Phone:</span>
          <input
            type="string"
            name="phone"
            value={phone}
            onChange={change}
            required
          />
        </div>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};
