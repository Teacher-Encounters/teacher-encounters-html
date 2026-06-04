import img_14 from "../../assets/gitbook/image (14).png";
import img_15 from "../../assets/gitbook/image (15).png";
import img_16 from "../../assets/gitbook/image (16).png";
import img_17 from "../../assets/gitbook/image (17).png";
import img_18 from "../../assets/gitbook/image (18).png";
import img_19 from "../../assets/gitbook/image (19).png";
import img_20 from "../../assets/gitbook/image (20).png";
import img_21 from "../../assets/gitbook/image (21).png";
import img_22 from "../../assets/gitbook/image (22).png";
import img_23 from "../../assets/gitbook/image (23).png";
import img_24 from "../../assets/gitbook/image (24).png";
import img_25 from "../../assets/gitbook/image (25).png";
function BuildingSimpleLAN() {
  return (
    <main>
      <h1>Building a Simple LAN</h1>
      <h2>Place a Switch on the Network</h2>
      <ul>
        <li>
          Click on <em>Network Device</em> category
        </li>
        <li>
          Click on <em>Switch</em> sub category
        </li>
        <li>
          Place a <em>2960</em> switch onto the network
        </li>
      </ul>
      <img src={img_14} alt="Placing a Switch" />

      <h2>Place Two PCs on the Network</h2>
      <ol>
        <li>
          Click on <em>End Device</em> category
        </li>
        <li>
          Click on <em>End Device</em> sub category
        </li>
        <li>Place two PCs onto the network</li>
      </ol>
      <img src={img_15} alt="Placing Two PCs" />

      <h2>Physically Connect PCs to the Switch</h2>
      <ol>
        <li>
          Select <em>Connections</em> category
        </li>
        <li>
          Select <em>Connections</em> sub category (likely selected by default)
        </li>
        <li>
          Select <em>Copper Straight Through</em> from devices
        </li>
        <li>Click on one of the PCs</li>
        <li>
          Select <em>Fast Ethernet 0</em>
        </li>
        <li>Click on the Switch</li>
        <li>
          Select one of the <em>Fast Ethernet (x) </em> ports
        </li>
      </ol>
      <img src={img_16} alt="Select Copper Straight Through" />
      <img src={img_17} alt="Connect to PC" />
      <img src={img_18} alt="Connect to Switch" />
      <img src={img_19} alt="Physical Connections Made" />
      <h2>Setup Static IP addresses on PCs</h2>
      <ol>
        <li>
          Click on the PC to bring up its <em>Physical</em> configuration page
        </li>
        <li>
          Click on <em>Config</em> tab
        </li>
        <li>
          Select the <em>Fast Ethernet 0</em> interface
        </li>
        <li>
          Enter an IP address <strong>192.168.0.2</strong> for the first PC
        </li>
        <li>
          Click into the <em>subnet mask</em> and it should auto populate
        </li>
        <li>Close the config sub window</li>
        <li>
          Hover mouse over that PC and check the config tooltip. It should show
          the IP address
        </li>
        <li>
          Repeat for the other PC, but set the IP to{" "}
          <strong>192.168.0.3</strong>
        </li>
      </ol>
      <img src={img_20} alt="PC Physical Config" />
      <img src={img_21} alt="Setup Static IP address" />
      <img src={img_22} alt="Check IP address in PC tooltip" />
      <img src={img_23} alt="Select Add Simple PDU" />
      <img src={img_24} alt="Select Source for PDU" />
      <img src={img_25} alt="Check PDU success" />

      <h2>Test the Network Connection using Send PDU</h2>
      <p>
        We will now check network connectivity between our two PCs by sending a
        PDU (Protocol Data Unit). This will send a ping from one machine to
        another and back.
      </p>
      <ol>
        <li>
          Select <em>Add Simple PDU</em> from the top toolbar
        </li>
        <li>Click on one of the PCs, it should leave an envelope on it</li>
        <li>Click on the other PC, and it should attempt the ping</li>
        <li>Check the PDU success in the bottom right panel</li>
      </ol>
      <img src={img_23} alt="Select Add Simple PDU" />
      <img src={img_24} alt="Select Source for PDU" />
      <img src={img_25} alt="Check PDU success" />
    </main>
  );
}

export default BuildingSimpleLAN;
