import React, { useContext } from "react";
import { Text, ScrollView } from "react-native";
import { Tile, ListItem, Icon } from "react-native-elements";
import { StoreContext } from "../stores/AlbumStore";

// Make a component
const MeScreen = ({ navigation }) => {
  const {meState} = useContext(StoreContext);
  const [me, setMe] = meState;
  return (
      <ScrollView>
        <Tile
          imageSrc={require("../../assets/ntue.jpg")}
          featured
          title={`${me.name.first.toUpperCase()} ${me.name.last.toUpperCase()}`}
          caption={me.email}
        />

        <ListItem
          title="Email"
          rightElement={() => <Text>{me.email}</Text>}
          hideChevron
        />
        <ListItem
          title="Phone"
          rightElement={() => <Text>{me.phone}</Text>}
          hideChevron
        />

        <ListItem
          title="Username"
          rightElement={() => <Text>{me.login.username}</Text>}
          hideChevron
        />

        <ListItem
          title="Birthday"
          rightElement={() => <Text>{me.dob}</Text>}
          hideChevron
        />
        <ListItem
          title="City"
          rightElement={() => <Text>{me.location.city}</Text>}
          hideChevron
        />
      </ScrollView>
  );
};

export default MeScreen;
