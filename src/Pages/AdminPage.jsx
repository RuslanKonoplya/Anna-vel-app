import AdminHouses from './AdminHouses'
import AdminFeedback from './AdminFeedback';
import './AdminPage.scss'
import { useState } from 'react';

function AdminPage() {

  const [activeTab, setActiveTab] = useState('houses')

  return (
    <div className="admin-page">
      
      {/* Top Bar */}
      <div className="topbar">
        <button onClick={() => setActiveTab('houses')}>🏠 Объекты</button>
        <button onClick={() => setActiveTab('workers')}>👷‍♂️ Працівники</button>
        <button onClick={() => setActiveTab('feedback')}>📬 Зворотній зв'язок</button>
      </div>

      {/* Content */}
      <div className="admin-content">
        {activeTab === 'houses' && <AdminHouses />}
       {/* {activeTab === 'workers' && <AdminWorkers />} */}
       {activeTab === 'feedback' && <AdminFeedback />}

      </div>
    </div>
  )
  

  
  
  
}

export default AdminPage;



