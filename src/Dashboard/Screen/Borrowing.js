import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Modal from "react-modal";
import Header2 from '../Components/Header2';
import axios from 'axios';

const Borrowing = () => {
    const [borrowings, setBorrowings] = useState([]);
    
    const [formData, setFormData] = useState({
        user: '',
        book: '',
        borrowDate: '',
        returnDate: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedBorrowing, setSelectedBorrowing] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/borrowings')
            .then(response => setBorrowings(response.data))
            .catch(error => console.error('Error fetching borrowings:', error));

        //     axios.get('http://localhost:3003/users')
        //     .then(response => {
        //         setUsers(response.data);
        //         console.log('Users:', response.data);
        //     })
        //     .catch(error => console.error('Error fetching users:', error));
    
        // axios.get('http://localhost:3003/books')
        //     .then(response => {
        //         setBooks(response.data);
        //         console.log('Books:', response.data);
        //     })
        //     .catch(error => console.error('Error fetching books:', error));
    
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleModal1 = (borrowing) => {
        setSelectedBorrowing(borrowing);
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
    
        axios.post('http://localhost:3003/borrowings', formData)
            .then(response => {
                setBorrowings([...borrowings, response.data]);
                setFormData({
                    user: '',
                    book: '',
                    borrowDate: '',
                    returnDate: ''
                });
                toggleModal();
            })
            .catch(error => console.error('Error adding borrowing:', error));
    };
    // const toggleModal1 = (borrowing) => {
    //     console.log('Borrowing:', borrowing);
    //     console.log('Users:', users);
    //     console.log('Books:', books);
        
    //     const selectedUser = users.find(user => user.id === borrowing.user);
    //     const selectedBook = books.find(book => book.id === borrowing.book);
    
    //     console.log('Selected User:', selectedUser);
    //     console.log('Selected Book:', selectedBook);
    
    //     // Construct the borrowing object with user and book details
    //     const borrowingData = {
    //         ...borrowing,
    //         user: selectedUser ? selectedUser.name : '', // Set user name if found, otherwise empty string
    //         book: selectedBook ? selectedBook.title : '' // Set book title if found, otherwise empty string
    //     };
    
    //     console.log('Borrowing Data:', borrowingData);
    
    //     setSelectedBorrowing(borrowingData);
    //     setIsModalOpen1(!isModalOpen1);
    // };
    
    
    
    // const toggleModal1 = (borrowing) => {
    //     setSelectedBorrowing(borrowing);
    //     // Find the selected user and book objects based on their IDs
    //     const selectedUser = users.find(user => user.id === borrowing.user);
    //     const selectedBook = books.find(book => book.id === borrowing.book);
    
    //     // Construct the borrowing object with user and book details
    //     const borrowingData = {
    //         ...borrowing,
    //         user: selectedUser ? selectedUser.name : '', // Set user name if found, otherwise empty string
    //         book: selectedBook ? selectedBook.title : '' // Set book title if found, otherwise empty string
    //     };
    
    //     setSelectedBorrowing(borrowingData);
    //     setIsModalOpen1(!isModalOpen1);
    // };
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3003/borrowings', formData)
    //         .then(response => {
    //             setBorrowings([...borrowings, response.data]);
    //             setFormData({
    //                 user: '',
    //                 book: '',
    //                 borrowDate: '',
    //                 returnDate: ''
    //             });
    //             toggleModal();
    //         })
    //         .catch(error => console.error('Error adding borrowing:', error));
    // };

    return (
        <div className='dashb'>
            <section className='dashboard'>
                <Sidebar />
                <main>
                    <Header2 />
                    <div className='add'>
                        <h2>Borrowings</h2>
                        <button onClick={toggleModal}>Add borrowing</button>
                    </div>

                    <table>
                        <tr className='heading'>
                            <th>User</th>
                            <th>Book</th>
                            <th>Borrowing Date</th>
                            <th>Return Date</th>
                            <th className='dt'></th>
                        </tr>
                        {borrowings.map((item, index) => (
                            <tr key={index}>
                                <td>{item.user}</td>
                                <td>{item.book}</td>
                                <td>{item.borrowDate}</td>
                                <td>{item.returnDate}</td>
                                <td className='dt'><button onClick={() => toggleModal1(item)}>See Details</button></td>
                            </tr>
                        ))}
                    </table>
                </main>
            </section>

            {/* First Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Add Borrowing Modal"
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
                            <button onClick={toggleModal} style={{ cursor: 'pointer' }}>X</button>
                        </div>
                        <form className='product-form' onSubmit={handleSubmit}>
                            {/* <div>
                                <p>User</p>
                                
<select name="user" value={formData.user} onChange={handleChange}>
    <option value="">Select User</option>
    {users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))}
</select>

                            </div> */}
                            <div>
                                <p>User</p>
                                <input
                                    type="text"
                                    name="user"
                                    value={formData.user}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Book</p>
                                <input
                                    type="text"
                                    name="book"
                                    value={formData.book}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <div>
                                <p>Book</p>
                                <select name="book" value={formData.book} onChange={handleChange}>
    <option value="">Select Book</option>
    {books.map(book => (
        <option key={book.id} value={book.id}>{book.title}</option>
    ))}
                                </select>

                            </div> */}
                            <div>
                                <p>Borrowing Date</p>
                                <input type="text" name="borrowDate" value={formData.borrowDate} onChange={handleChange} />
                            </div>
                            <div>
                                <p>Return Date</p>
                                <input type="text" name="returnDate" value={formData.returnDate} onChange={handleChange} />
                            </div>
                            <div>
                                <button type="submit">Add Borrowing</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            {/* Second Modal */}
            <Modal
                isOpen={isModalOpen1}
                onRequestClose={() => setIsModalOpen1(false)}
                contentLabel="Borrowing Details Modal"
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
                        {selectedBorrowing && (
                            <section className='project-info'>
                                <div className='others'>
                                    <p>User: <span>{selectedBorrowing.user}</span></p>
                                    <p>Book: <span>{selectedBorrowing.book}</span></p>
                                    <p>Borrowing Date: <span>{selectedBorrowing.borrowDate}</span></p>
                                    <p>Return Date: <span>{selectedBorrowing.returnDate}</span></p>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Borrowing;
















// import React, { useState,useEffect } from 'react';
// import Sidebar from '../Components/Sidebar';
// import Modal from "react-modal";
// import Header2 from '../Components/Header2';
// import axios from 'axios';

// const Borrowing = () => {
//     const [borrowing, setBorrowings] = useState([]);
//     const [formData, setFormData] = useState({
//         user: '',
//         book: '',
//         borrowDate: '',
//         returnDate: ''
//     });
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isModalOpen1, setIsModalOpen1] = useState(false);
//     const [selectedBorrowing, setSelectedBorrowing] = useState(null);

//     useEffect(() => {
//         axios.get('http://localhost:3003/borrowings')
//             .then(response => setBorrowings(response.data))
//             .catch(error => console.error('Error fetching borrowing:', error));
//     }, []);

//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     const toggleModal1 = (project) => {
//         setSelectedBorrowing(project);
//         setIsModalOpen1(!isModalOpen1);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3003/borrowing', formData)
//             .then(response => {
//                 setBorrowings([...borrowing, response.data]);
//                 setFormData({
//                     name: '',
//                     description: '',
//                 });
//                 toggleModal();
//             })
//             .catch(error => console.error('Error adding project:', error));
//     };

//     return (
//         <div className='dashb'>
//             <section className='dashboard'>
//                 <Sidebar />
//                 <main>
//                     <Header2 />
//                     <div className='add'>
//                         <h2>borrowing</h2>
//                         <button onClick={toggleModal}>Add borrowing</button>
//                     </div>

//                     <table>
//                         {/* <thead className='heading'> */}
//                             <tr className='heading'>
//                                 <th>User</th>
//                                 <th>Book</th>
//                                 <th>BorrowingDate</th>
//                                 <th>ReturnDate</th>
//                                 <th className='dt'></th>
//                             </tr>
//                         {/* </thead> */}
//                         {/* <tbody> */}
//                             {borrowing.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>{item.user}</td>
//                                     <td>{item.book}</td>
//                                     <td>{item.borringDate}</td>
//                                     <td>{item.returnDate}</td>

//                                     <td className='dt'><button onClick={() => toggleModal1(item)}>See Details</button></td>
//                                 </tr>
//                             ))}
//                         {/* </tbody> */}
//                     </table>
//                 </main>
//             </section>

//           {/* FIRST MODAL */}
//             <Modal
//                 isOpen={isModalOpen}
//                 onRequestClose={toggleModal}
//                 contentLabel="Example Modal"
//                 className={`bg-transparnt`}
//                 style={{
//                     overlay: {
//                         position: "fixed",
//                         top: "0",
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         backgroundColor: "hsla(0, 0%, 0%, .8)",
//                         zIndex: 100000,
//                     },
//                 }}
//             >
//                 <div className='modal1'>
//                     <div className='modal1-content'>
//                         <div className='close'>
//                             <button onClick={() => setIsModalOpen(false)} style={{ cursor: 'pointer' }}>X</button>
//                         </div>
//                         <form className='product-form' onSubmit={handleSubmit}>
//                             <div>
//                                 <p>Name</p>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                             </div>
                           
//                             <div>
//                                 <p>Description</p>
//                                 <input
//                                        type="text"
//                                        name="description"
//                                        value={formData.description}
//                                        onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <button type="submit">SEND</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </Modal>

//             {/* SECOND MODAL */}
//             <Modal
//                 isOpen={isModalOpen1}
//                 onRequestClose={() => setIsModalOpen1(false)}
//                 contentLabel="Example Modal"
//                 className={`bg-transparnt`}
//                 style={{
//                     overlay: {
//                         position: "fixed",
//                         top: "0",
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         backgroundColor: "hsla(0, 0%, 0%, .8)",
//                         zIndex: 100000,
//                     },
//                 }}
//             >
//                 <div className='modal1'>
//                     <div className='modal1-content'>
//                         <div className='close'>
//                             <button onClick={() => setIsModalOpen1(false)} style={{ cursor: 'pointer' }}>X</button>
//                         </div>
//                         {selectedBorrowing && (
//                             <section className='roject-info'>
                            
//                                 <div className='others'>
//                                     <p>Name: <span>{selectedBorrowing.name}</span></p>
//                                     <p>Description: <span>{selectedBorrowing.description}</span></p>
//                                     {/* Render other product details here */}
//                                 </div>
//                             </section>
//                         )}
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default Borrowing;
