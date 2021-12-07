import React, { useContext, useState } from "react";
import noteContext from "./../context/notes/noteContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})

  // const notify = () => toast("Wow so easy!");

  const handleClick = (e)=>{
      e.preventDefault()
      addNote(note.title, note.description, note.tag)
      setNote({title: "", description: "", tag: ""})
      toast.success('Note Created Successfully !', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }  

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h2>Add New Note</h2>
      <form>
        <div className="mb-3">
          <h6 htmlFor="description" className="form-label">
            Title
          </h6>
          <input
            onChange={onChange}
            value={note.title}
            type="text"
            className="form-control"
            id="title"
            name="title"
          />
        </div>
        <div className="mb-3">
          <h6 htmlFor="description" className="form-label">
            Description
          </h6>
          <textarea
            rows="4"
            onChange={onChange}
            value={note.description}
            // type="textarea"
            className="form-control"
            id="description"
            name="description"
          />
        </div>
        <div className="mb-3">
          <h6 htmlFor="tag" className="form-label">
            Tag
          </h6>
          <input
            onChange={onChange}
            value={note.tag}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
          />
        </div>
        <div className="btn text-center">
        <button onClick={handleClick} >
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Create</span>
        </button>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        </div>
      </form>
      <div className="container my-3">
        <h2>Your Notes</h2>
      </div>
    </div>
  );
};

export default Addnote;
