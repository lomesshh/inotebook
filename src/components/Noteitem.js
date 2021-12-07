import React,{useContext} from "react";
import noteContext from "./../context/notes/noteContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Noteitem = ({ note, updateNote }) => {

  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <div className="col-md-3" style={{ borderRadius: "9px" }}>
      <div className="card my-3" style={{ width: "18rem",  borderRadius: "9px", border: "2px solid royalblue" }}>
        <div className="card-body" style={{backgroundColor : "#b3d3ff", borderRadius: "9px"}}>
          <p style={{color : "royalblue"}}>Title</p>
          <h4 className="card-title">{note.title}</h4>
          <p style={{color : "royalblue"}}>Description</p>
          <h5 className="card-text">{note.description}</h5>
          <p style={{color : "royalblue"}}>Tag</p>
          <h6 className="card-text">{note.tag}</h6>
          <br/>
          <div className="container">
            <div className="row">
              <div className="col">
                <button onClick={() => {
                  deleteNote(note._id)
                  toast.error('Note Deleted Successfully !', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
                }
                }>
                  <i className="far fa-trash-alt mx-3"></i>
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
              <div className="col">
                <button onClick={() => updateNote(note)}>
                  <i className="far fa-edit mx-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
