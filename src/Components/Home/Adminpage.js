import {useState,useEffect} from 'react';

import axios from 'axios'
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
    const [empName,setEmpname]=useState('');
    const [empEmail,setEmpemail]=useState('');
    const [empPassword,setEmppassword]=useState('');
    const [role,setRole]=useState('');
    const [locationId,setLocationid]=useState('');
    const [reportingHead,setReportinghead]=useState('');
    const [fetchData,setData]=useState([]);
    
    const data = async () => {
      try {
        const response = await fetch('http://localhost:8080/employees/all');
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    
    
     useEffect(() => {
     
  
      const data = async () => {
        try {
          const response = await fetch('http://localhost:8080/employees/all');
          const json = await response.json();
          console.log(json);
          setData(json);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      data();
  }, []);


    

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
   const adduser =async(event)=>
   {
    event.preventDefault();
    fetch('http://localhost:8080/employees/addEmployee', {
  method: 'POST',
  body: JSON.stringify({
    empName:empName,
    empEmail:empEmail,
    empPassword:empPassword,
    role:role,
    locationId:locationId,
    reportingHead:reportingHead
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  data();
   }

   const deleteUser= async(props,e)=>
   { const a=props;
     
     fetch(`http://localhost:8080/employees/deleteEmployee/${a}`, {
       method: 'DELETE',
     });
    console.log(props);
    
    data();
     
   }


   const handleOnChange = (e) => {
    setFile(e.target.files[0]);
};

const handleOnSubmit = async (e) => {
  e.preventDefault();
  console.log("Hello")
  const formData = new FormData();
  formData.append("file", file);
  console.log(formData);
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/sales-line-item/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if(response){
      alert(response.data);
    }
  } catch(error) {
    console.log(error)
  }
  document.getElementById("csvFileInput").value=null; 
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
          <div className='container1'>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Add user</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                <label>username</label>
                  <input type='text' value={empName} onChange={(e)=>{setEmpname(e.target.value)}}/>
                  <label>email</label>
                  <input type='text' value={empEmail} onChange={(e)=>{setEmpemail(e.target.value)}}/>
                  <label>password</label>
                  <input type='password' value={empPassword} onChange={(e)=>{setEmppassword(e.target.value)}}/>
                  <label>role</label>
                  <select type='text'onChange={(e)=>{setRole(e.target.value)}}>
                    <option>select role</option>
                    <option name='Admin'>admin</option>
                    <option name='sales person'>sales person</option>
                    </select>
                  <label>location</label>
                  <select type='text'  onChange={(e)=>{
                    if(e.target.value==='Chennai')
                    {
                      setLocationid('1')
                    }
                    else if(e.target.value==='Mumbai')
                    {
                      setLocationid('2')
                    }
                    else if(e.target.value==='Hyderabad')
                    {
                      setLocationid('3')
                    }
                    
                    }} >
                      <option>select location</option>
                    <option name='Chennai'>Chennai</option>
                    <option name='Mumbai'>Mumbai</option>
                    <option name='Hyderabad'>Hyderabad</option>
                    </select>
                  <label>reportinghead</label>
                  <input type='text' value={reportingHead} onChange={(e)=>{setReportinghead(e.target.value)}}/>
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
          <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>role</th>
                  <th>delete user</th>
                 </tr>
              </thead>
              <tbody>
             {fetchData.map((val,i) => {
             return(
            <tr key={i}>
              
              <td>{val.empId}</td>
              <td>{val.empName}</td>
              <td>{val.role}</td>
              <td><button onClick={(e) => deleteUser(val.empId, e)}>delete</button></td>
            </tr>) 
          
         })} 
              </tbody>
          </table>
          
        </>
        )}
        
        </div>
      </div>
       )
        
}

export default Adminpage;