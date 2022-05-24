import React from 'react'
import { Link } from 'react-router-dom';

const Student = () => {
  return (
    <div>
        <div className='sub_head'><h2>Students Details</h2>
    <button className='btn'>Add New Student</button></div>
    <div className='table_data'>
    <table class="table" >
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>26</td>
      <td>MERN</td>
      <td>November</td>
      <td>Edit</td>
    </tr>
    <tr>
    <td>john</td>
      <td>24</td>
      <td>MERN</td>
      <td>Octomber</td>
      <td>Edit</td>
    </tr>
    <tr>
    <td>Doe</td>
      <td>23</td>
      <td>MERN</td>
      <td>September</td>
      <td>Edit</td>
    </tr>
    <tr>
    <td>Biden</td>
      <td>25</td>
      <td>MERN</td>
      <td>December</td>
      <td>Edit</td> 
    </tr>
  </tbody>
</table>
</div>
    
    
    </div>
  )
}

export default Student;