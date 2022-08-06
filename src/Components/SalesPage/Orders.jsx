import React from 'react'
import axios from "axios"
import { useEffect,useState } from "react";
import styled from 'styled-components'

//function Orders() {
const Orders = ()=>{
    const [product,setProduct] = useState([])
    const [notes,getNotes] = useState([])
  
    const getProduct = async () => {
        try {
        axios.get("http://localhost:8080/sales-line-item").then((response)=>{
            const alldata = response.data._embedded.salesLineItem;
            getNotes(alldata);
            console.log(alldata)
       setProduct(alldata)
        }) 
    }
        catch (e) {
            console.log(e)
        }
    }
    const getEmployee = async () => {
        try {
        axios.get("http://localhost:8080/employees").then((response)=>{
            const alldata = response.data._embedded.employees;
       getNotes(alldata)
        }) 
    }
        catch (e) {
            console.log(e)
        }
    }
useEffect(()=>{
    getProduct()
    getEmployee()
},[])
    return (
        <Section>
        <div className="orders__details">
          <div>
                <h4>Recent Order</h4> 
          </div>
          <div> 
            <button> SEE ALL</button>
            
            <div className="orders__table">
            <table>
            <tr>
              <th>Employee Name</th>
              <th>Employee Email</th>
              <th>Sold Date</th>
              <th>Sold Cost</th>
            </tr>
            <tr>
                <td>{notes.map(item=>(
                <li key={item.id}>{item.empName}</li>
                 ))}</td>
                <td>{notes.map(item=>(
                <li key={item.id}>{item.empEmail}</li>
                 ))}</td>
                <td>{product.map(item=>(
                <li key={item.id}>{item.soldDate}</li>
                 ))}</td>
                 <td>{product.map(item=>(
                <li key={item.id}>{item.soldCost}</li>
                 ))}</td>
            </tr>
            
            </table>

        
        </div></div>
        </div>
        </Section>
    )
};

export default Orders;
const Section = styled.section`
.orders {
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 ;
        div {
            display: flex;
            gap: 1rem;
            button {
                padding: 0.4rem 1rem;
                border: none;
                cursor: pointer;
                background-color: white;
                color: #668DFF;
                font-weight: bold;
            }
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        table {
            border-collapse: collapse;
            width: 100%;
            th, td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
                button {
border-radius: 0.3rem;
padding: 0.4rem 1rem;
border: none;
cursor: pointer;
background-color: #EEF4FF;
color: blue;
font-weight: bold;
                }
                img {
                    height: 2rem;
                    width: 2rem;
                }
                span {
                    margin-top: 0.2 rem;
                }
            }
            .img {
                display: flex;
                justify-content: center;
            }
        }
    }
}
`;
