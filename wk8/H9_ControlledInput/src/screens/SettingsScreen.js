import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import { Input } from "react-native-elements";
import { StoreContext } from "../stores/AlbumStore";

// Make a component
const SettingsScreen = ({ navigation }) => {
  const { meState } = useContext(StoreContext);
  const [me, setMe] = meState;
  return (
    <ScrollView style={{ paddingTop: 44 }}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        User Info Setting
      </Text>
      <Input
        labelStyle={{ marginTop: 20 }}
        label="Email"
        placeholder="ntue@dtd.com"
        value={me.email}
        onChangeText={(email) => setMe({ ...me, email })}
      />
      <Input
        labelStyle={{ marginTop: 20 }}
        label="Phone"
        placeholder="1234-567890"
        value={me.phone}
        onChangeText={(phone) => setMe({ ...me, phone })}
      />
      <Input
        labelStyle={{ marginTop: 20 }}
        label="Username"
        placeholder="John Doe"
        value={me.login.username}
        onChangeText={(username) =>
          setMe({ ...me, login: { ...me.login, username } })
        }
      />
      <Input
        labelStyle={{ marginTop: 20 }}
        label="Firstname"
        placeholder="John"
        value={me.name.first}
        onChangeText={(first) => setMe({ ...me, name: { ...me.name, first } })}
      />
      <Input
        labelStyle={{ marginTop: 20 }}
        label="Lastname"
        placeholder="Doe"
        value={me.name.last}
        onChangeText={(last) => setMe({ ...me, name: { ...me.name, last } })}
      />
      <Input
        labelStyle={{ marginTop: 20 }}
        label="Birthday"
        placeholder="1900-01-01"
        value={me.dob}
        onChangeText={(dob) => setMe({ ...me, dob })}
      />
      <Input
        labelStyle={{ marginTop: 20 }}
        label="City"
        placeholder="Taipei"
        value={me.location.city}
        onChangeText={(city) =>
          setMe({ ...me, location: { ...me.location, city } })
        }
      />
    </ScrollView>
  );
};

export default SettingsScreen;
