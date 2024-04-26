import React, { useState,useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Modal from "react-modal";
import Header2 from '../Components/Header2';
import axios from 'axios';

const Books = ({ category }) => {
    const [books, setBooks] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null); // State to hold the selected book


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const toggleModal1 = (book) => {
        setSelectedBook(book); // Set the selected book
        setIsModalOpen1(!isModalOpen1);
    };
    useEffect(() => {
        axios.get('http://localhost:3003/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching publishers:', error));
    }, []);



    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            image: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
    
            // If all fields are filled, proceed with the POST request
    axios.post('http://localhost:3003/books', formData)
    .then(response => {
        setBooks([...books, response.data]);
        setFormData({
            name: '',
            price: '',
            category: '', // Add category here if needed
        });
        toggleModal();
    })
    .catch(error => console.error('Error adding project:', error));

    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    //     localStorage.setItem('formData', JSON.stringify([...existingData, formData]));
    //     setFormData({
    //         name: '',
    //         price: '',
    //         category: '',
    //         image: null
    //     });
    // };

    return (
        <div className='dashb'>
            <section className='dashboard'>
                <Sidebar />
                <main>
                    <Header2 />
                    <div className='add'>
                        <h2>Books</h2>
                        <button onClick={toggleModal}>Add Book</button>
                    </div>

                    <table>
                        <tr className='heading'>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th className='dt'></th>
                        </tr>

                        {books.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                            </tr>
                        ))}
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
                                <p>Book Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Price</p>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder='$32' />
                            </div>
                            <div>
                                <p>Images</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div>
                                <p>Category</p>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Category</option>
                                    <option value="men">Fiction</option>
                                    <option value="women">Fantasy</option>
                                    <option value="teens">Science</option>
                                    <option value="kids">Literature</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
            {/* SECOND MODAL */}
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
                        {selectedBook && (
                            <section className='project-info'>
                                <div className='book-images'>
                                    {/* Render book images here */}
                                </div>
                                <div className='others'>
                                    <p>Book Name: <span>{selectedBook.name}</span></p>
                                    <p>Book Price: <span>${selectedBook.price}</span></p>
                                    {/* Render other book details here */}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default Books;

