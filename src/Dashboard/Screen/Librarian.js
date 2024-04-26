import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Modal from "react-modal";
import Header2 from '../Components/Header2';
import axios from 'axios';

const Librarians = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        password: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedEmployees, setSelectedEmployees] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/librarians')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees:', error));
            //fetchDepartments();

    }, []);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleModal1 = (project) => {
        setSelectedEmployees(project);
        setIsModalOpen1(!isModalOpen1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3003/librarians', formData)
            .then(response => {
                setEmployees([...employees, response.data]);
                setFormData({
                    name: '',
                    email: '',
                    address: '',
                    password: '',
                });
                toggleModal();
            })
            .catch(error => console.error('Error adding project:', error));
    };

    return (
        <div className='dashb'>
            <section className='dashboard'>
                <Sidebar />
                <main>
                    <Header2 />
                    <div className='add'>
                        <h2>employees</h2>
                        <button onClick={toggleModal}>Add Employee</button>
                    </div>

                    <table>
                        {/* <thead className='heading'> */}
                            <tr className='heading'>
                                <th>Name</th>
                                <th>Email</th>
                                <th className='dt'></th>
                            </tr>
                        {/* </thead> */}
                        {/* <tbody> */}
                            {employees.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td className='dt'><button onClick={() => toggleModal1(item)}>See Details</button></td>
                                </tr>
                            ))}
                        {/* </tbody> */}
                    </table>
                </main>
            </section>

          {/* FIRST MODAL */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{
                    overlay: {
                        position: "fixed",
                        top: "0",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "hsla(0, 0%, 0%, .8)",
                        zIndex: 100000,
                    },
                }}
            >
                <div className='modal1'>
                    <div className='modal1-content'>
                        <div className='close'>
                            <button onClick={() => setIsModalOpen(false)} style={{ cursor: 'pointer' }}>X</button>
                        </div>
                        <form className='product-form' onSubmit={handleSubmit}>
                            <div>
                                <p>fullName</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Email</p>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                            </div>
                            <div>
                                <p>Addresss</p>
                                <input
                                       type="text"
                                       name="address"
                                       value={formData.address}
                                       onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Password</p>
                                <input
                                       type="text"
                                       name="password"
                                       value={formData.password}
                                       onChange={handleChange}
                                />
                            </div>


                            <div>
                                <button type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            {/* SECOND MODAL */}
            <Modal
                isOpen={isModalOpen1}
                onRequestClose={() => setIsModalOpen1(false)}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{
                    overlay: {
                        position: "fixed",
                        top: "0",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "hsla(0, 0%, 0%, .8)",
                        zIndex: 100000,
                    },
                }}
            >
                <div className='modal1'>
                    <div className='modal1-content'>
                        <div className='close'>
                            <button onClick={() => setIsModalOpen1(false)} style={{ cursor: 'pointer' }}>X</button>
                        </div>
                        {selectedEmployees && (
                            <section className='roject-info'>
                            
                                <div className='others'>
                                    <p>Full Name: <span>{selectedEmployees.name}</span></p>
                                    <p>Email: <span>{selectedEmployees.email}</span></p>
                                    <p>Address: <span>{selectedEmployees.address}</span></p>
                                    <p>Password: <span>{selectedEmployees.password}</span></p>
                                    {/* Render other product details here */}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Librarians;
