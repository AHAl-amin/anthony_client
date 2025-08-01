// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { CiFilter } from 'react-icons/ci';

// function PaymentManagement() {
//     const [subscriptions, setSubscriptions] = useState([
//         { id: 1, user: 'Sarah Johnson', email: 'sarah@example.com', plan: 'Enterprise', status: 'Active', amount: '$49.00', nextRenewal: '12/15/2023', startDate: '9/15/2023' },
//         { id: 2, user: 'Michael Chen', email: 'michael@example.com', plan: 'Pro', status: 'Past Due', amount: '$40.00', nextRenewal: '11/30/2023', startDate: '9/5/2023' },
//         { id: 3, user: 'Emma Wilson', email: 'emma@example.com', plan: 'Basic', status: 'Canceled', amount: '$19.00', nextRenewal: '11/9/2023', startDate: '1/10/2023' },
//         { id: 4, user: 'James Rodriguez', email: 'james@example.com', plan: 'Pro', status: 'Active', amount: '$40.00', nextRenewal: '12/10/2023', startDate: '11/20/2022' },
//         { id: 5, user: 'Olivia Smith', email: 'olivia@example.com', plan: 'Enterprise', status: 'Trial', amount: '$0.00', nextRenewal: '11/30/2023', startDate: '11/1/2023' },
//     ]);

//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedSubscription, setSelectedSubscription] = useState(null);
//     const [modalOpen, setModalOpen] = useState(false);

//     const handlePause = (id) => {
//         const updatedSubscriptions = subscriptions.map(sub =>
//             sub.id === id ? { ...sub, status: 'Paused' } : sub
//         );
//         setSubscriptions(updatedSubscriptions);
//     };

//     const handleCancel = (id) => {
//         const updatedSubscriptions = subscriptions.map(sub =>
//             sub.id === id ? { ...sub, status: 'Canceled' } : sub
//         );
//         setSubscriptions(updatedSubscriptions);
//     };

//     const handleDelete = (id) => {
//         const updatedSubscriptions = subscriptions.filter(sub => sub.id !== id);
//         setSubscriptions(updatedSubscriptions);
//     };

//     const handleEdit = (id) => {
//         const subscription = subscriptions.find(sub => sub.id === id);
//         setSelectedSubscription(subscription);
//         setModalOpen(true);
//     };

//     const handleSave = (updatedSub) => {
//         const updatedSubscriptions = subscriptions.map(sub =>
//             sub.id === updatedSub.id ? updatedSub : sub
//         );
//         setSubscriptions(updatedSubscriptions);
//         setModalOpen(false);
//         setSelectedSubscription(null);
//     };

//     const handleModalClose = () => {
//         setModalOpen(false);
//         setSelectedSubscription(null);
//     };

//     const filteredSubscriptions = subscriptions.filter(sub =>
//         sub.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         sub.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="py-10">
//             <div className='space-y-2'>
//                 <h2 className="text-2xl font-bold text-gray-700">Payment & Billing Management</h2>
//                 <p className="text-gray-600">Manage user subscriptions, payments, and billing information</p>
//                 <div className="flex gap-4 mb-6 justify-between">
//                     <input
//                         type="text"
//                         placeholder="Search by user or email..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="p-2 border rounded w-full max-w-xs border-gray-200 appearance-none"
//                     />

//                     <select className="p-2  border rounded  border-gray-200 cursor-pointer appearance-none ">
//                         <option value="">Filter </option>
//                         <option value="active">Active</option>
//                         <option value="pastdue">Past Due</option>
//                         <option value="canceled">Canceled</option>
//                         <option value="trial">Trial</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="shadow rounded">
//                 <div className='bg-white rounded-t p-4'>
//                     <h3 className="text-xl font-semibold">Active Subscriptions</h3>
//                     <p className="text-gray-600">Manage user subscription plans and billing cycles</p>
//                 </div>
//                 <table className=" bg-white border md:w-full border-gray-300  rounded-lg  overflow-hidden">
//                     <thead>
//                         <tr className="bg-gray-100 text-gray-500">
//                             <th className="py-2 px-4 border-b border-gray-200">User</th>
//                             <th className="py-2 px-4 border-b border-gray-200">Plan</th>
//                             <th className="py-2 px-4 border-b border-gray-200">Status</th>
//                             <th className="py-2 px-4 border-b border-gray-200">Amount</th>
//                             <th className="py-2 px-4 border-b border-gray-200">Next Renewal</th>
//                             <th className="py-2 px-4 border-b border-gray-200">Start Date</th>
//                             <th className="py-2 px-4 border-b border-gray-200">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredSubscriptions.map((sub) => (
//                             <tr key={sub.id} className="hover:bg-gray-50  ">
//                                 <td className="py-2 px-4 border-b border-gray-200 pl-10">{sub.user} <br /> <span className="text-gray-500">{sub.email}</span></td>
//                                 <td className="py-2 px-4 border-b border-gray-200 text-center">{sub.plan}</td>
//                                 <td className="py-2 px-4 border-b border-gray-200 text-center">
//                                     <span className={`inline-block px-2 py-1 rounded-full text-gray-700 ${sub.status.toLowerCase().replace(' ', '-') === 'active' ? 'bg-[#DCFCE7] ' : sub.status.toLowerCase().replace(' ', '-') === 'past due' ? 'bg-yellow-500' : sub.status.toLowerCase().replace(' ', '-') === 'canceled' ? 'bg-red-200' : 'bg-blue-200gi'}`}>
//                                         {sub.status}
//                                     </span>
//                                 </td>
//                                 <td className="py-2 px-4 border-b border-gray-200 text-center">{sub.amount}</td>
//                                 <td className="py-2 px-4 border-b border-gray-200 text-center">{sub.nextRenewal}</td>
//                                 <td className="py-2 px-4 border-b border-gray-200 text-center">{sub.startDate}</td>
//                                 <td className="py-2 border-b border-gray-200 text-center">
//                                     <button onClick={() => handlePause(sub.id)} className="bg-[#FEFCE8] text-black px-2 py-1 rounded mr-2 hover:bg-yellow-200">Pause</button>
//                                     <button onClick={() => handleCancel(sub.id)} className="bg-[#FEF2F2] text-black px-2 py-1 rounded mr-2 hover:bg-red-200">Cancel</button>
//                                     <button onClick={() => handleEdit(sub.id)} className="bg-[#DCFCE7] text-black px-2 py-1 rounded mr-2 hover:bg-green-200">Edit</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {modalOpen && selectedSubscription && (
//                 <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//                         <h3 className="text-xl font-semibold mb-4">Edit Subscription</h3>
//                         <input
//                             type="text"
//                             value={selectedSubscription.user}
//                             onChange={(e) => setSelectedSubscription({ ...selectedSubscription, user: e.target.value })}
//                             className="w-full p-2 mb-2 border rounded"
//                         />
//                         <input
//                             type="text"
//                             value={selectedSubscription.email}
//                             onChange={(e) => setSelectedSubscription({ ...selectedSubscription, email: e.target.value })}
//                             className="w-full p-2 mb-2 border rounded"
//                         />
//                         <input
//                             type="text"
//                             value={selectedSubscription.plan}
//                             onChange={(e) => setSelectedSubscription({ ...selectedSubscription, plan: e.target.value })}
//                             className="w-full p-2 mb-2 border rounded"
//                         />
//                         <input
//                             type="text"
//                             value={selectedSubscription.status}
//                             onChange={(e) => setSelectedSubscription({ ...selectedSubscription, status: e.target.value })}
//                             className="w-full p-2 mb-2 border rounded"
//                         />
//                         <input
//                             type="text"
//                             value={selectedSubscription.amount}
//                             onChange={(e) => setSelectedSubscription({ ...selectedSubscription, amount: e.target.value })}
//                             className="w-full p-2 mb-2 border rounded"
//                         />
//                         <input
//                             type="text"
//                             value={selectedSubscription.nextRenewal}
//                             onChange={(e) => setSelectedSubscription({ ...selectedSubscription, nextRenewal: e.target.value })}
//                             className="w-full p-2 mb-2 border rounded"
//                         />
//                         <input
//                             type="text"
//                             value={selectedSubscription.startDate}
//                             onChange={(e) => setSelectedSubscription({ ...selectedSubscription, startDate: e.target.value })}
//                             className="w-full p-2 mb-4 border rounded"
//                         />
//                         <div className="flex justify-end">
//                             <button onClick={() => handleSave(selectedSubscription)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
//                             <button onClick={handleModalClose} className="bg-gray-500 text-white px-4 py-2 rounded">Close</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default PaymentManagement;


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CiFilter } from 'react-icons/ci';

function PaymentManagement() {
    const [subscriptions, setSubscriptions] = useState([
        { id: 1, user: 'Sarah Johnson', email: 'sarah@example.com', plan: 'Enterprise', status: 'Active', amount: '$49.00', nextRenewal: '12/15/2023', startDate: '9/15/2023' },
        { id: 2, user: 'Michael Chen', email: 'michael@example.com', plan: 'Pro', status: 'Past Due', amount: '$40.00', nextRenewal: '11/30/2023', startDate: '9/5/2023' },
        { id: 3, user: 'Emma Wilson', email: 'emma@example.com', plan: 'Basic', status: 'Canceled', amount: '$19.00', nextRenewal: '11/9/2023', startDate: '1/10/2023' },
        { id: 4, user: 'James Rodriguez', email: 'james@example.com', plan: 'Pro', status: 'Active', amount: '$40.00', nextRenewal: '12/10/2023', startDate: '11/20/2022' },
        { id: 5, user: 'Olivia Smith', email: 'olivia@example.com', plan: 'Enterprise', status: 'Trial', amount: '$0.00', nextRenewal: '11/30/2023', startDate: '11/1/2023' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubscription, setSelectedSubscription] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handlePause = (id) => {
        const updatedSubscriptions = subscriptions.map(sub =>
            sub.id === id ? { ...sub, status: 'Paused' } : sub
        );
        setSubscriptions(updatedSubscriptions);
    };

    const handleCancel = (id) => {
        const updatedSubscriptions = subscriptions.map(sub =>
            sub.id === id ? { ...sub, status: 'Canceled' } : sub
        );
        setSubscriptions(updatedSubscriptions);
    };

    const handleEdit = (id) => {
        const subscription = subscriptions.find(sub => sub.id === id);
        setSelectedSubscription(subscription);
        setModalOpen(true);
    };

    const handleSave = (updatedSub) => {
        const updatedSubscriptions = subscriptions.map(sub =>
            sub.id === updatedSub.id ? updatedSub : sub
        );
        setSubscriptions(updatedSubscriptions);
        setModalOpen(false);
        setSelectedSubscription(null);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedSubscription(null);
    };

    const filteredSubscriptions = subscriptions.filter(sub =>
        sub.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="py-10 overflow-hidden">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-700">Payment & Billing Management</h2>
                <p className="text-gray-600">Manage user subscriptions, payments, and billing information</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
                    <input
                        type="text"
                        placeholder="Search by user or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border rounded w-full sm:max-w-xs border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="p-2 border rounded border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Filter</option>
                        <option value="active">Active</option>
                        <option value="pastdue">Past Due</option>
                        <option value="canceled">Canceled</option>
                        <option value="trial">Trial</option>
                    </select>
                </div>
            </div>
            <div className="shadow rounded">
                <div className="bg-white rounded-t p-4">
                    <h3 className="text-xl font-semibold">Active Subscriptions</h3>
                    <p className="text-gray-600">Manage user subscription plans and billing cycles</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-100 text-gray-500 text-sm">
                                <th className="py-3 px-4 border-b  border-gray-200  text-left">User</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-center">Plan</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-center">Status</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-center">Amount</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-center">Next Renewal</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-center">Start Date</th>
                                <th className="py-3 px-4 border-b border-gray-200 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSubscriptions.map((sub) => (
                                <tr key={sub.id} className="hover:bg-gray-50 text-sm">
                                    <td className="py-3 px-4 border-b border-gray-200 pl-6">
                                        {sub.user} <br /> <span className="text-gray-500">{sub.email}</span>
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200 text-center">{sub.plan}</td>
                                    <td className="py-3 px-4 border-b border-gray-200 text-center">
                                        <span
                                            className={`inline-block px-2 py-1 rounded-full text-gray-700 ${
                                                sub.status.toLowerCase().replace(' ', '-') === 'active'
                                                    ? 'bg-[#DCFCE7]'
                                                    : sub.status.toLowerCase().replace(' ', '-') === 'past-due'
                                                    ? 'bg-yellow-200'
                                                    : sub.status.toLowerCase().replace(' ', '-') === 'canceled'
                                                    ? 'bg-red-200'
                                                    : 'bg-blue-200'
                                            }`}
                                        >
                                            {sub.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200 text-center">{sub.amount}</td>
                                    <td className="py-3 px-4 border-b border-gray-200 text-center">{sub.nextRenewal}</td>
                                    <td className="py-3 px-4 border-b border-gray-200 text-center">{sub.startDate}</td>
                                    <td className="py-3 px-4 border-b border-gray-200 space-y-2 md:space-y-0 text-center space-x-2">
                                        <button
                                            onClick={() => handlePause(sub.id)}
                                            className="bg-[#FEFCE8] text-black px-2 py-1 rounded hover:bg-yellow-200 text-xs"
                                        >
                                            Pause
                                        </button>
                                        <button
                                            onClick={() => handleCancel(sub.id)}
                                            className="bg-[#FEF2F2] text-black px-2 py-1 rounded hover:bg-red-200 text-xs"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => handleEdit(sub.id)}
                                            className="bg-[#DCFCE7] text-black px-2 py-1 rounded hover:bg-green-200 text-xs"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {modalOpen && selectedSubscription && (
                <div className="fixed inset-0 backdrop-blur m-3 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-4">Edit Subscription</h3>
                        <input
                            type="text"
                            value={selectedSubscription.user}
                            onChange={(e) => setSelectedSubscription({ ...selectedSubscription, user: e.target.value })}
                            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={selectedSubscription.email}
                            onChange={(e) => setSelectedSubscription({ ...selectedSubscription, email: e.target.value })}
                            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={selectedSubscription.plan}
                            onChange={(e) => setSelectedSubscription({ ...selectedSubscription, plan: e.target.value })}
                            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={selectedSubscription.status}
                            onChange={(e) => setSelectedSubscription({ ...selectedSubscription, status: e.target.value })}
                            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={selectedSubscription.amount}
                            onChange={(e) => setSelectedSubscription({ ...selectedSubscription, amount: e.target.value })}
                            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={selectedSubscription.nextRenewal}
                            onChange={(e) => setSelectedSubscription({ ...selectedSubscription, nextRenewal: e.target.value })}
                            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={selectedSubscription.startDate}
                            onChange={(e) => setSelectedSubscription({ ...selectedSubscription, startDate: e.target.value })}
                            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => handleSave(selectedSubscription)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleModalClose}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PaymentManagement;