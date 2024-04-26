import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Modal from "react-modal";
import Header2 from '../Components/Header2';
import axios from 'axios';

const Categories = () => {
     const [category, setCategory] = useState([]);
    const [formData, setFormData] = useState({
        categoryId: '',
        categoryName: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedCaregory, setSelectedCategory] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/categories')
            .then(response => setCategory(response.data))
            .catch(error => console.error('Error fetching category:', error));
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleModal1 = (project) => {
        setSelectedCategory(project);
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
        axios.post('http://localhost:3003/categories', formData)
            .then(response => {
                setCategory([...category, response.data]);
                setFormData({
                    categoryId: '',
                    categoryName: '',
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
                        <h2>category</h2>
                        <button onClick={toggleModal}>Add Department</button>
                    </div>

                    <table>
                        {/* <thead className='heading'> */}
                            <tr className='heading'>
                                <th>DepartmentId</th>
                                <th>categoryName</th>
                                <th className='dt'></th>
                            </tr>
                        {/* </thead> */}
                        {/* <tbody> */}
                            {category.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.categoryId}</td>
                                    <td>{item.categoryName}</td>
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
                                <p>Category Id</p>
                                <input
                                    type="text"
                                    name="categoryId"
                                    value={formData.categoryId}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Category Name</p>
                                <input
                                    type="text"
                                    name="categoryName"
                                    value={formData.categoryName}
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
                        {selectedCaregory && (
                            <section className='roject-info'>
                            
                                <div className='others'>
                                    <p>Category ID: <span>{selectedCaregory.categoryId}</span></p>
                                    <p>Category Name: <span>{selectedCaregory.categoryName}</span></p>
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


export default Categories;