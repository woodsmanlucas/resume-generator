import MyDocument from './components/mydoc';
import { PDFViewer } from '@react-pdf/renderer'

const styles = {
  width: "100vw",
  height: "100vh"
}

function App() {
  return (
    <PDFViewer style={styles}>
      <MyDocument/>
    </PDFViewer>
  );
}

export default App;
