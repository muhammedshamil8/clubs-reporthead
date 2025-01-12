import React, { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// PDF Document template
const MyDocument = ({ name, description, image }) => (
  <Document>
    <Page size="A4">
      <Text style={{ fontSize: 30, textAlign: 'center' }}>Generated Report</Text>
      <Text>Name: {name}</Text>
      <Text>Description: {description}</Text>
      {/* If image exists, render the image */}
      {image && (
        <Image
          src={image}
          style={{
            width: 200,
            height: 200,
            marginTop: 20,
            marginBottom: 20,
            alignSelf: 'center',
          }}
        />
      )}
    </Page>
  </Document>
);

function ReportCreateForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert the uploaded image to a base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Save the base64 image data to state
      };
      reader.readAsDataURL(file); // Read the file as base64
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-xl font-semibold">Generate PDF Report</h1>
      
      {/* Form Fields */}
      <Input
        placeholder="Enter Report Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full"
      />
      <Textarea
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full"
      />
      
      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-full p-2 border rounded-md"
      />
      {image && <p>Image uploaded successfully!</p>}

      {/* PDF Generation Section */}
      <div className="flex flex-col items-center space-y-4">
        <PDFDownloadLink
          document={<MyDocument name={name} description={description} image={image} />}
          fileName="report.pdf"
        >
          {({ loading }) =>
            loading ? 'Loading document...' : (
              <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                Download PDF
              </Button>
            )
          }
        </PDFDownloadLink>

        {/* To View PDF directly */}
        <PDFViewer width="100%" height="600">
          <MyDocument name={name} description={description} image={image} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default ReportCreateForm;
