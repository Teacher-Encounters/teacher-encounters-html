import img_26 from "../../assets/gitbook/image (26).png";
import img_28 from "../../assets/gitbook/image (28).png";
import img_29 from "../../assets/gitbook/image (29).png";
import img_30 from "../../assets/gitbook/image (30).png";
import img_32 from "../../assets/gitbook/image (32).png";
import img_33 from "../../assets/gitbook/image (33).png";
import img_34 from "../../assets/gitbook/image (34).png";
import img_35 from "../../assets/gitbook/image (35).png";
import img_36 from "../../assets/gitbook/image (36).png";
import img_37 from "../../assets/gitbook/image (37).png";
import img_39 from "../../assets/gitbook/image (39).png";
import img_40 from "../../assets/gitbook/image (40).png";
function RoutingTwoLans() {
  return (
    <main>
      <h1>Using Routing to Connect Two LANs</h1>

      <h2>Add a Router to our LAN</h2>
      <ol>
        <li>
          Click on <em>Network Devices</em> category
        </li>
        <li>
          Click on <em>Routers</em> sub category
        </li>
        <li>
          Click on <em>4331</em> router and add to our LAN
        </li>
        <li>
          Select <em>Copper Straight Through</em> from connections
        </li>
        <li>
          Connect <em>Gigabit Ethernet 0/1</em> on the Switch to{" "}
          <em>Gigabit Ethernet 0/0/0</em> on the router
        </li>
      </ol>
      <img src={img_26} alt="Finding a Router" />
      <img src={img_28} alt="Physically Connect Router" />
      <h2>Assign Router IP addresses for our LAN</h2>
      <ol>
        <li>
          Click on the <em>Router</em> to bring up its <em>Physical Config</em>
        </li>
        <li>
          Click on the <em>Config</em> tab
        </li>
        <li>
          Select the <em>Gigabit Ethernet 0/0/0</em> interface from the set of
          modules
        </li>
        <li>
          You will need to <strong>turn the port on</strong>, there is a check
          box
        </li>
        <li>
          Give this interface an <em>IP address</em> of{" "}
          <strong>192.168.0.1</strong>, subnet mask should auto populate
        </li>
        <li>Close the config screen</li>
        <li>
          Once the network interface is showing green icons, use{" "}
          <strong>Add Simple PDU</strong> to test connectivity between either PC
          and the Router
        </li>
      </ol>
      <img src={img_29} alt="Physical Router Config" />
      <img src={img_30} alt="Configure Gigabit Ethernet 0/0/0 on Router" />
      <img src={img_32} alt="LAN with Router" />
      <img src={img_33} alt="Test Router to PC" />

      <h2>Build a Second LAN</h2>
      <p>
        Now you need to build an entire second LAN. Fortunately, you can
        copy-paste the first LAN using the following steps.
      </p>
      <ol>
        <li>Click on the Selection tool in the toolbar</li>
        <li>Select the whole first LAN</li>
        <li>
          Use Ctrl C (or CMD C on Mac) and Ctrl V (CMD V) to copy and paste
        </li>
      </ol>
      <img src={img_34} alt="Selection Tool" />
      <img src={img_35} alt="Select LAN" />
      <img src={img_36} alt="Pasted Second LAN" />

      <h2>Setup second LAN IP Addresses</h2>
      <p>
        We wish to be able to route packets from a PC in one LAN to a PC on the
        other LAN. For this, they will have to have distinct sets of IP
        addresses.
      </p>
      <ol>
        <li>
          Change the IP addresses of the PCs and Router in LAN 2 to{" "}
          <strong>192.168.1.xxx</strong>
        </li>
        <li>
          Make sure you are selecting the correct interface when you configure
          each device
        </li>
      </ol>

      <h2>Setup Connection between Two Routers</h2>
      <ol>
        <li>
          Use <em>Copper Straight Through</em> to connect the following two
          interfaces
          <ul>
            <li>Router 1 Gigabit Ethernet 0/0/1</li>
            <li>Router 2 Gigabit Ethernet 0/0/1</li>
          </ul>
        </li>
        <li>
          Use the config screen to set the IP addresses as shown in the table
          (some of them should already be done)
        </li>
        <li>
          Make sure you <strong>turn each interface</strong> on using the
          checkbox
        </li>
        <li>
          Use <strong>Add Simple PDU</strong> to test connectivity from one
          router to another
        </li>
      </ol>
      <table>
        <thead>
          <tr>
            <th>Device</th>
            <th>Interface</th>
            <th>IP Address</th>
            <th>Subnet Mask</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Router LAN 1</td>
            <td>Gigabit Ethernet 0/0/0</td>
            <td>192.168.0.1</td>
            <td>255.255.255.0</td>
          </tr>
          <tr>
            <td>Router LAN 1</td>
            <td>Gigabit Ethernet 0/0/1</td>
            <td>10.0.0.1</td>
            <td>255.0.0.0</td>
          </tr>
          <tr>
            <td>Router LAN 2</td>
            <td>Gigabit Ethernet 0/0/0</td>
            <td>192.168.1.1</td>
            <td>255.255.255.0</td>
          </tr>
          <tr>
            <td>Router LAN 2</td>
            <td>Gigabit Ethernet 0/0/1</td>
            <td>10.0.0.2</td>
            <td>255.0.0.0</td>
          </tr>
        </tbody>
      </table>
      <img src={img_37} alt="Routers connected to each other" />

      <h2>Setup Static Routing on Routers</h2>
      <ol>
        <li>Click on the Router for LAN 1</li>
        <li>
          Click on <em>Config</em> tab
        </li>
        <li>
          Click on <em>Routing - Static</em> sub module
        </li>
        <li>
          Enter details of LAN 2
          <ul>
            <li>Network 192.168.1.0</li>
            <li>Subnet Mask 255.255.255.0</li>
            <li>Next Hop 10.0.0.2</li>
          </ul>
        </li>
        <li>Click on Add to add it to the routing table</li>
        <li>Close the Config screen</li>
        <li>
          Repeat for the other router, but now setting up the details to go the
          other way
          <ul>
            <li>Network 192.168.0.0</li>
            <li>Subnet Mask 255.255.255.0</li>
            <li>Next Hop 10.0.0.1</li>
          </ul>
        </li>
      </ol>
      <img src={img_39} alt="Setup Static Routing" />

      <h2>Setup Default Gateway on PCs</h2>
      <p>
        If a PC wishes to send a message to an IP on a different LAN, it needs
        to be told where to send those messages. This is the{" "}
        <em>Default Gateway</em> for that PC.
      </p>
      <ol>
        <li>Click on a PC in LAN 1</li>
        <li>
          Click on the <em>Config</em> tab
        </li>
        <li>
          Click on the <em>Global - Settings</em> module
        </li>
        <li>
          Enter the IP address of the Router <strong>192.168.0.1</strong> into
          the <em>Default Gateway</em>
        </li>
        <li>Repeat for the other PC</li>
        <li>
          Repeat for each PC in the other LAN, but the Router IP will now be{" "}
          <strong>192.168.1.1</strong>
        </li>
        <li>
          Give the network time to settle, then try{" "}
          <strong>Add Simple PDU</strong> from a PC on one network to another
        </li>
        <li>
          Sometimes you need to test Simple PDUs from each PC to their own
          router, then to the other router, then finally a PC on the other LAN
        </li>
      </ol>
      <img src={img_40} alt="Test Router to PC" />
    </main>
  );
}

export default RoutingTwoLans;
