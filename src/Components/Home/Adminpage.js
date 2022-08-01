import react,{useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css';
import '../Home/adminpage.css';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const Adminpage =()=>
{
    const [isOpen,setState]=useState(false);
    const [basicModal, setBasicModal] = useState(false);
    const [deleteuser, setDeleteuser]=useState(false);

  const toggleShow = () => { setBasicModal(!basicModal);
                               {deleteuser && setDeleteuser(!deleteuser);}
  }
  const toggleShowdelete = () =>{ setDeleteuser(!deleteuser);
   {basicModal && setBasicModal(!basicModal);   }       
  }
   const adduser =()=>
   {
    alert('added')
   }

   const deleteUser=()=>
   {
    alert('deleted')
   }
    return (
      <div>
      <div class="navbar">
         <a class="active" >Home</a>
         <a onClick={toggleShow}>Add User</a>
         <a onClick={toggleShowdelete}>Delete User</a>
         <a href="#about">About</a>
         </div>
         <div className='dialog-body'>
         
         {basicModal && (
          <>
          <div className='container'>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Add user</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                  <label>username</label>
                  <input type='text'/>
                  <label>email</label>
                  <input type='text'/>
                </MDBModalBody>
    
                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleShow}>
                    Close
                  </MDBBtn>
                  <MDBBtn onClick={adduser}>Add User</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
          </div>
        </>
        )}
        {deleteuser && (
          <>
          <div className='container'>
          <MDBModal show={deleteuser} setShow={setDeleteuser} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Delete user</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                  <label>username</label>
                  <input type='text'/>
                  <label>email</label>
                  <input type='text'/>
                </MDBModalBody>
    
                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleShowdelete}>
                    Close
                  </MDBBtn>
                  <MDBBtn onClick={deleteUser}>Delete User</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
          </div>
        </>
        )}
        
        </div>
      </div>
       )
        
}

export default Adminpage;