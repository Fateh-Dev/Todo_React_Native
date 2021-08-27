import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  Button,
  Switch,
  TextInput,
  Paragraph,
  Appbar,
  Title,
} from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { Avatar, Card } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function App() {
  return (
    <PaperProvider>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log("Pressed archive")}
        />
        <Appbar.Action
          icon="mail"
          onPress={() => console.log("Pressed mail")}
        />
        <Appbar.Action
          icon="label"
          onPress={() => console.log("Pressed label")}
        />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log("Pressed delete")}
        />
      </Appbar>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
