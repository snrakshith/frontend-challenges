import "./layout.css";

const AppLayout = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-icon active"></div>
        <div className="sidebar-icon"></div>
        <div className="sidebar-icon"></div>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile-section">
            <div className="icon notification-icon"></div>
            <div className="icon profile-picture"></div>
          </div>
        </header>
        <div className="cards-container">
          <div className="row">
            <div className="card small-card">Total Orders</div>
            <div className="card small-card">Total Delivered</div>
            <div className="card small-card">Total Cancelled</div>
            <div className="card small-card">Total Revenue</div>
            <div className="card large-card">Net Profit</div>
          </div>
          <div className="row">
            <div className="card full-width">Activity</div>
            <div className="card half-width">Links</div>
          </div>
          <div className="row">
            <div className="card full-width">Recent Orders</div>
            <div className="card half-width">Customer's Feedback</div>
          </div>
          <div className="row">
            <div className="card half-width">Recent Orders</div>
            <div className="card half-width">Customer's Feedback</div>
            <div className="card half-width">Customer's Feedback</div>
          </div>
        </div>
        <div className="cards-container">
          <div className="row">
            <div className="card small-card">Total Orders</div>
            <div className="card small-card">Total Delivered</div>
            <div className="card small-card">Total Cancelled</div>
            <div className="card small-card">Total Revenue</div>
            <div className="card large-card">Net Profit</div>
          </div>
          <div className="row">
            <div className="card full-width">Activity</div>
            <div className="card half-width">Links</div>
          </div>
          <div className="row">
            <div className="card full-width">Recent Orders</div>
            <div className="card half-width">Customer's Feedback</div>
          </div>
          <div className="row">
            <div className="card half-width">Recent Orders</div>
            <div className="card half-width">Customer's Feedback</div>
            <div className="card half-width">Customer's Feedback</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
