import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Stopwatch } from '../components/stopwatch';
import { Container } from "react-bootstrap";

export default function TabOneScreen() {
  return (
    <Container className="p-3">
      <Stopwatch/>
    </Container>
  );
}

