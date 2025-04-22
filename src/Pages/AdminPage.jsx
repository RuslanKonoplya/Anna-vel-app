import AdminHouses from './AdminHouses'
import AdminFeedback from './AdminFeedback';
import AdminWorkers from './AdminWorkers';
import './AdminPage.scss'
import { useState } from 'react';

function AdminPage() {

  const [activeTab, setActiveTab] = useState('houses')

  return (
    <div className="admin-page">
      
      {/* Top Bar */}
      <div
  className="topbar"
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    padding: '12px 20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}
>
  <button
    onClick={() => setActiveTab('houses')}
    style={{
      padding: '8px 16px',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    }}
  >
    🏠 Об'єкти
  </button>

  <button
    onClick={() => setActiveTab('workers')}
    style={{
      padding: '8px 16px',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    }}
  >
    👷‍♂️ Працівники
  </button>

  <button
    onClick={() => setActiveTab('feedback')}
    style={{
      padding: '8px 16px',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    }}
  >
    📬 Зворотній зв'язок
  </button>
</div>


      {/* Content */}
      <div className="admin-content">
        {activeTab === 'houses' && <AdminHouses />}
       {activeTab === 'workers' && <AdminWorkers />}
       {activeTab === 'feedback' && <AdminFeedback />}

      </div>
    </div>
  )
  

  
  
  
}

export default AdminPage;



