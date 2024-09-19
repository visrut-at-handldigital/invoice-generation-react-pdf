import React from "react";
import ReactPDF, {
  Page,
  Font,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

Font.register({
  family: "Poppins",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2",
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLFj_Z1JlFc-K.woff2",
      fontWeight: 200,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2",
      fontWeight: 300,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2",
      fontWeight: 800,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLBT5Z1JlFc-K.woff2",
      fontWeight: 900,
    },
  ],
});

const headingStyles = StyleSheet.create({
  page: {
    padding: 0,
    fontSize: 12,
  },
  section: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#005f33",
  },
  heading: {
    color: "#fff",
    fontWeight: "extrabold",
    textAlign: "center",
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={headingStyles.page}>
      <View style={headingStyles.section}>
        <Text style={headingStyles.heading}>INVOICE</Text>
        <View></View>
      </View>
    </Page>
  </Document>
);

// ReactPDF.render(<MyDocument />);

// 100: https://fonts.gstatic.com/s/poppins/v21/pxiGyp8kv8JHgFVrLPTufntAKPY.woff2
// 200: https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLFj_Z1JlFc-K.woff2
// 300: https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2
// 400: https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2
// 500: https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2
// 600: https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2
// 700: https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2
// 800: https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2
// 900: https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLBT5Z1JlFc-K.woff2

export default async () => {
  return await ReactPDF.renderToStream(<MyDocument />);
};
