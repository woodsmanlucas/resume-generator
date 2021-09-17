import React from 'react';
import { Page, Text, Link, View, Document, StyleSheet } from '@react-pdf/renderer';
import SonarMusic from './sonarMusic';

const profileStatement = "Well Hello There"
// Create styles
const styles = StyleSheet.create({
  green:{
      color: "#556B2F",
      fontSize: 32,
  },
  grey: {
    color: "#A9A9A9",
    fontSize: 32,
  },
  center: {
    textAlign: "center"

  },
  profile: {
    margin: 12,
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  text: {
    fontSize: 12,
    fontStyle: "italic",
    fontFamily: 'Times-Roman',
  },
  textCentered: {
    textAlign: "center",
    fontSize: 11,
    fontFamily: 'Times-Roman',
    width: "50vw"
  },
  sectionRight: {    
    borderTop: "4px solid #556B2F",
    padding: 5,
    width: "50vw",
    borderLeft: "4px solid #556B2F"
  },  
  sectionLeft: {    
    borderTop: "4px solid #556B2F",
    padding: 5,
    width: "50vw"
  },
  sectionCenter: {
    borderTop: "4px solid #556B2F",
    padding: 5,
  },
  view: {
    margin: 10,
    padding: 10
  },
  split: {
      display: "flex",
      flexDirection: "row",
    },
    splitContacts: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    contact: {
        fontSize: 14
    }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4">
      <View style={styles.view}>
            <Text style={styles.center}><span style={styles.green}>Lucas</span> <span style={styles.grey}>Johnson</span></Text>
            <Text style={styles.center}>Software Developer</Text>
            <View style={styles.splitContacts}>
                <Text style={styles.contact}>425 495-9366</Text>
                <Text style={styles.contact} href="mailto:woodsman.lucas@gmail.com">woodsman.lucas@gmail.com</Text>
                <Link style={styles.contact} href="https://woodsmanlucas.github.io">https://woodsmanlucas.github.io</Link>
            </View>    
            <Text style={styles.profile}>{profileStatement}</Text>
            <View style={styles.split}>
                <View>
                    <Text style={styles.sectionLeft}>Education</Text>
                    <Text style={styles.text}>Aug 2012 – April 2016</Text>
                    <Text style={styles.textCentered}>B.Sc. Physics • UBC • Kelowna, BC</Text>
                    
                    <Text style={styles.text}>Aug 2019– May 2020</Text>
                    <Text style={styles.textCentered}>Software System Developer Certificate (with distinction)</Text>
                    <Text style={styles.textCentered}>BCIT • Vancouver, BC</Text>

                    <Text style={styles.text}>Jan 2021–May 2021</Text>
                    <Text style={styles.textCentered}>Candidate for Masters in Data Science •  OU • Online</Text>
                </View>
                <Text style={styles.sectionRight}>Skills</Text>
            </View>
            <Text style={styles.sectionCenter}>Experience</Text>
            <SonarMusic/>
      </View>
    </Page>
  </Document>
);

export default MyDocument;