import "./layout.css";

function AppLayout() {
  return (
    <>
      <div className="container">
        <div className="row-1">
          <div className="quick-stats">c</div>
          <div className="quick-stats">hh</div>
          <div className="quick-stats"></div>
          <div className="quick-stats"></div>
          <div className="gauge"></div>
        </div>
        <div className="row-2">
          <div className="chart"></div>
          <div className="links"></div>
        </div>
        <div className="row-3">
          <div className="table"></div>
          <div className="feedback"></div>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
