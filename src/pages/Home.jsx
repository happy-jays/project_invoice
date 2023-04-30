import React, { useState } from "react";
import "./invoice.css";
import Table from "./Table";
import Deletedtable from "./Deletedtable";
function Home() {
  const [activeTab, setActiveTab] = useState("Active Clients");

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="row">
      <div className="col col1">
        <img id="col1-img1" src="/final-file-cashwise-copy-1.svg" alt="" />
        <div className="col1-lgpn">
          <div className="col1-lgpn-col1">G</div>
          <div className="col1-lgpn-col2">
            <div className="entity-name">Entity Name</div>
            <div className="add-website">Add website</div>
          </div>
          <img
            className="group-child col1-lgpn-col3"
            alt=""
            src="/group-1047.svg"
          />
        </div>
        <div className="col1-col3">
          <img
            className="create-new-folder-icon"
            alt=""
            src="/note-add-white-24dp-1.svg"
          />
          <p className="col1-col3-txt">Document Generation</p>
        </div>
        <div className="col1-col4">
          <img
            className="create-new-folder-icon"
            alt=""
            src="/cloud-done-white-24dp-1.svg"
          />
          <p className="col1-col4-txt">Document Storage</p>
          <img
            className="expand-more-white-24dp-1-icon-ds"
            alt=""
            src="/expand-more-white-24dp-1.svg"
          />
        </div>
        <div className="col1-col5">
          <div className="col1-col5-rw1">
            <img
              className="create-new-folder-icon"
              alt=""
              src="/receipt-long-fill0-wght400-grad0-opsz48-1.svg"
            />
            <p className="col1-col5-txt">Invoice Management</p>
            <div className="dropdown-container">
              <div className="dropdown" onClick={handleDropdownClick}>
                <img
                  className="expand-more-white-24dp-1-icon"
                  alt=""
                  src="/expand-more-white-24dp-1.svg"
                />
              </div>
            </div>
          </div>
          {showDropdown && (
            <div className="dropdown-options">
              <div className="option opt1">New Invoice</div>
              <div className="option">Invoice Summary</div>
            </div>
          )}
        </div>
        <div className="col1-col6">
          <p className="col1-col6-txt">Client Lists</p>
        </div>
      </div>
      <div className="col col2">
        <div className="col2-title">
          <h3>Invoice Summary</h3>
          <div className="a">A</div>
        </div>
        <div className="col2-content">
          <div className="col2-content-tab">
            <div className="col2-content-tab1"
              style={{
                color:
                  activeTab === "Active Clients" ? "blue" : "black",
              }}
              onClick={() => setActiveTab("Active Clients")}
            >
              Active Clients
            </div>

            <div className="col2-content-tab2"
              style={{
                color:
                  activeTab === "Deleted Clients" ? "blue" : "black",
              }}
              onClick={() => setActiveTab("Deleted Clients")}
            >
              Deleted Clients
            </div>
          </div>
          {activeTab === "Active Clients" ? <Table /> : <Deletedtable />}
        </div>
        <div className="col2-btns">
          <button className="col2-btns-btn1">Upload Clients</button>
          <button className="col2-btns-btn2">Add Clients</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
