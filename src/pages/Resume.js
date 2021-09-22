import MyDocument from '../components/Mydoc';
import { PDFViewer } from '@react-pdf/renderer'

const styles = {
  width: "100vw",
  height: "100vh"
}

function Resume() {
  return (
    <PDFViewer style={styles}>
      <MyDocument/>
    </PDFViewer>
  );
}

export default Resume;
