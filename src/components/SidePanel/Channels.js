import React from "react";
import { Menu, Icon } from "semantic-ui-react";

class Channels extends React.Component {
  state = {
    Channels: []
  };
  render() {
    return (
      <Menu.Menu style={{ paddingBottom: "2em" }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{" "}
          ({Channels.length}) <Icon name="add" />
        </Menu.Item>
      </Menu.Menu>
    );
  }
}

export default Channels;
