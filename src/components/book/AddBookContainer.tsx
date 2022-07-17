import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCloudPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from '../../config/api';


export const AddBookContainer = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    categoty: '',
    author: '',
    description: '',
    imageURL: '',
    newPrice: 0,
    oldPrice: 0,
    count: 0,
    active: true,
  })

  const { title, categoty: category, author, description, imageURL, newPrice, oldPrice, count, active } = formData;

  const change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // const changeTextArea= (e:)=>{

  // }

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json();

      if (data._id) {
        toast.info(`Book ${title} added to base`)
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setFormData({
        title: '',
        categoty: '',
        author: '',
        description: '',
        imageURL: '',
        newPrice: 0,
        oldPrice: 0,
        count: 0,
        active: true,
      })
    }

  }

  // @TODO useEffect fech to DB and get all categories


  return (
    <>
      <div className="login-form-container">

        <div><a href="/#home" className="close-login-btn">< AiOutlineClose /></a></div>

        <form onSubmit={formSubmit}>


          <h3><BsCloudPlus /> Add Book to DB</h3>
          <span>Choice category</span>
          <select className="box" name="category" onChange={change}>
            <option value="" selected>--Choice category--</option>
            <option value="horror">horror</option>
            <option value="criminals">criminals</option>
            <option value="fantasy">fantasy</option>
            <option value="children">children</option>
            <option value="travel">travel</option>
            <option value="cooking">cooking</option>
            <option value="poetry">poetry</option>
            <option value="school">school</option>
          </select>

          <span>Title</span>
          <input
            className="box"
            type='text'
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={change}
            maxLength={50}
            required />
          <span>Author</span>
          <input
            className="box"
            type='text'
            name="author"
            placeholder="Enter author"
            value={author}
            onChange={change}
            maxLength={50}
            required
          />

          <span>Description</span>
          <textarea
            className="box"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={change}
            maxLength={1000}
          />
          <span>The newest price</span>
          <input
            className="box"
            type='number'
            name="newPrice"
            placeholder="Enter the newest price"
            value={newPrice}
            onChange={change}
            min='0'
            max={99999}
            required
          />
          <span>Old price</span>
          <input
            className="box"
            type='number'
            name="oldPrice"
            placeholder="Enter old price"
            value={oldPrice}
            onChange={change}
            min='0'
            max={99999}
          />
          <span>Count</span>
          <input
            className="box"
            type='number'
            name="count"
            placeholder="Enter count"
            value={count}
            onChange={change}
            min='0'
            max={99999}
          />
          <span>Image link</span>
          <input
            className="box"
            type="url"
            name="imageURL"
            placeholder="image url link"
            value={imageURL}
            onChange={change}
          />

          <span>Active</span>
          <select className="box" name="active" onChange={change}>
            <option value="" selected>--Is book active to buy--</option>
            <option value="true">true</option>
            <option value="false">false</option>

          </select>


          <button type="submit" className="btn btn-block" >Add book</button>

        </form>

      </div>
    </>
  )
}