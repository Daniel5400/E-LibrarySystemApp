import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Modal from "react-modal";
import Header2 from '../Components/Header2';
import axios from 'axios';

const Publishers = () => {
    const [publishers, setPublishers] = useState([]);
    const [formData, setFormData] = useState({
        publisherName: '',
        books: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedPublisher, setSelectedPublisher] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/publishers')
            .then(response => setPublishers(response.data))
            .catch(error => console.error('Error fetching publishers:', error));
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleModal1 = (project) => {
        setSelectedPublisher(project);
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
    
        // Check if any form field is empty
        if (
            formData.publisherName.trim() === '' ||
            formData.book.trim() === ''
        ) {
            // If any field is empty, display an error message and return early
            console.error('Please fill in all fields');
            return;
        }
    
        // If all fields are filled, proceed with the POST request
        axios.post('http://localhost:3003/publishers', formData)
            .then(response => {
                setPublishers([...publishers, response.data]);
                setFormData({
                    publisherName: '',
        books: '' 

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
                        <h2>Publishers</h2>
                        <button onClick={toggleModal}>Add Publisher</button>
                    </div>

                    <table>
                        {/* <thead className='heading'> */}
                            <tr className='heading'>
                                <th>PublisherName</th>
                                <th>Book</th>
                                <th className='dt'></th>
                            </tr>
                        {/* </thead> */}
                        {/* <tbody> */}
                            {publishers.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.publisherName}</td>
                                    <td>{item.book}</td>
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
                                <p>Publisher Name</p>
                                <input
                                    type="text"
                                    name="publisherName"
                                    value={formData.publisherName}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div>
                                <p>Book</p>
                                <select
                                    name="book"
                                    value={formData.book}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Book</option>
                                    <option value="men">IT supoort</option>
                                    <option value="women">Engineering</option>
                                    <option value="teens">Accounting</option>
                                    <option value="kids">Management</option>
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
                        {selectedPublisher && (
                            <section className='project-info'>
                            
                                <div className='others'>
                                    <p>Publisher Name: <span>{selectedPublisher.publisherName}</span></p>
                                    <p>Book: <span>{selectedPublisher.book}</span></p>
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

export default Publishers;












// import React, {useState} from 'react';
// import Sidebar from '../Components/Sidebar';
// import Modal from "react-modal";
// import Header2 from '../Components/Header2';

// const Projects = ({ category }) => {
//     const data = JSON.parse(localStorage.getItem('formData')) || [];
//     const filteredData = data.filter(item => item.category === category);

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     const [isModalOpen1, setIsModalOpen1] = useState(false);
//     const [project, setProject] = useState(null); // State to hold the selected product
//     const toggleModal1 = (product) => {
//         setProject(product); // Set the selected product
//         setIsModalOpen1(!isModalOpen1);
//     };


//     const [formData, setFormData] = useState({
//         projectName: '',
//         deadline: '',
//         description: '',
//         duration: '',
//         department: ''
//         });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setFormData(prevState => ({
//             ...prevState,
//             image: file
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const existingData = JSON.parse(localStorage.getItem('formData')) || [];
//         localStorage.setItem('formData', JSON.stringify([...existingData, formData]));
//         console.log('Form data saved to local storage:', formData);
//         setFormData({
//             projectName: '',
//             deadline: '',
//             description: '',
//             duration: '',
//             department: ''
//         });
//     };

//     return (
//         <div className='dashb'>
//             <section className='dashboard'>
//                 <Sidebar />
//                 <main>
//                     <Header2 />
//                     <div className='add'>
//                         <h2>Projects</h2>
//                         <button onClick={toggleModal}>Add Project</button>
//                     </div>

//                     <table>
//                         <tr className='heading'>
//                             <th>ProjectName</th>
//                             <th>Description</th>
//                             <th>Duration</th>
//                             <th>Department</th>
//                             <th className='dt'></th>
//                         </tr>

//                         {filteredData.map((item, index) => (
//                             <tr key={index}>
//                                 <td>{item.projectName}</td>
//                                 <td>{item.description}</td>
//                                 <td>{item.duration}</td>
//                                 <td>{item.department}</td>
//                                 <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
//                             </tr>
//                         ))}
//                     </table>
//                 </main>
//             </section>

//             {/* FIRST MODAL */}
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
//                                 <p>Project Name</p>
//                                 <input
//                                     type="text"
//                                     name="projectName"
//                                     value={formData.projectName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <p>Deadline</p>
//                                 <input
//                                     type="text"
//                                     name="deadline"
//                                     value={formData.deadline.toString()}
//                                     onChange={handleChange}
//                                     placeholder='YYYY-MM-DD' />
//                             </div>
//                             <div>
//                                 <p>Duration</p>
//                                 <input
//                                        type="text"
//                                        name="duration"
//                                        value={formData.duration}
//                                        onChange={handleChange}
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
//                                 <p>Department</p>
//                                 <select
//                                     name="department"
//                                     value={formData.department}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="">Select Department</option>
//                                     <option value="men">IT supoort</option>
//                                     <option value="women">Engineering</option>
//                                     <option value="teens">Accounting</option>
//                                     <option value="kids">Management</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <button type="submit">SEND</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </Modal>
//             {/* SECOND MODAL */}
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
//                         {project && (
//                             <section className='project-info'>
                            
//                                 <div className='others'>
//                                     <p>Project Name: <span>{project.projectName}</span></p>
//                                     <p>Deadline: <span>{project.deadline}</span></p>
//                                     <p>Description: <span>{project.description}</span></p>
//                                     <p>Duration: <span>{project.duration}</span></p>
//                                     <p>Department: <span>{project.department}</span></p>
//                                     {/* Render other product details here */}
//                                 </div>
//                             </section>
//                         )}
//                     </div>
//                 </div>
//             </Modal>

//         </div>
//     )
// }

// export default Projects;
