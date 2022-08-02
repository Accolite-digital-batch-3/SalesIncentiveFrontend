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
    const [importcsv,setImportcsv]=useState(false);
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    

    const fileReader = new FileReader();

  const toggleShow = () => { setBasicModal(!basicModal);
                               {deleteuser && setDeleteuser(!deleteuser);}
                              {importcsv && setImportcsv(!importcsv)}
  }
  const toggleShowdelete = () =>{ setDeleteuser(!deleteuser);
   {basicModal && setBasicModal(!basicModal);  }
    {importcsv && setImportcsv(!importcsv) }       
  }

  const toggleshowimportcsv=()=>
  {
    setImportcsv(!importcsv);
    {basicModal && setBasicModal(!basicModal);  }
    {deleteuser && setDeleteuser(!deleteuser);}

  }
   const adduser =()=>
   {
    alert('added')
   }

   const deleteUser=()=>
   {
    alert('deleted')
   }


   const handleOnChange = (e) => {
    setFile(e.target.files[0]);
};

const handleOnSubmit = (e) => {
  e.preventDefault();

  if (file) {
    fileReader.onload = function (event) {
      const text = event.target.result;
      csvFileToArray(text);
    };

    fileReader.readAsText(file);
  }
};
const csvFileToArray = string => {
  const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
  const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

  const array = csvRows.map(i => {
    const values = i.split(",");
    const obj = csvHeader.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return obj;
  });

  setArray(array);
};
const headerKeys = Object.keys(Object.assign({}, ...array));
    return (
      <div>
      <div className="navbar">
         <a onClick={toggleshowimportcsv}>Home</a>
         <a onClick={toggleShow}>Add User</a>
         <a onClick={toggleShowdelete}>Delete User</a>
         <div  className='logout'>
         <a> Logout</a>
         </div>
         </div>
         <div className='dialog-body'>
          {
            importcsv && (
              <>
              <div style={{ textAlign: "center" }}>
              <form>
                <input
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={handleOnChange}
                />

                <button
                    onClick={(e) => {
                        handleOnSubmit(e);
                    }}
                >
                    IMPORT CSV
                </button>
                <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
            </form>
        </div>
              </>
            )
          }
         
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