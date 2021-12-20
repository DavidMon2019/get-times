import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Stopwatch } from '../components/stopwatch';
import { Card, Container } from "react-bootstrap";
import { StopWatch } from "../components/stopwatch2";

export default function TabOneScreen() {
  return (
    <Container>
      <Stopwatch />
    </Container>
  );
}

