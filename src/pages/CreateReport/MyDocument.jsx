import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import img from '@/assets/demo.jpg';
import Emea from '@/assets/Emea.jpeg';
import Nss from '@/assets/Nss.jpeg';
import BG from '@/assets/background.jpeg';

Font.register({
    family: 'Poppins',
    fonts: [
        {
            src: '/fonts/Poppins-Black.ttf',
            fontWeight: 900,
        },
        {
            src: '/fonts/Poppins-Bold.ttf',
            fontWeight: 700,
        },
        {
            src: '/fonts/Poppins-SemiBold.ttf',
            fontWeight: 600,
        },
        {
            src: '/fonts/Poppins-Medium.ttf',
            fontWeight: 500,
        },
        {
            src: '/fonts/Poppins-Light.ttf',
            fontWeight: 300,
        },
        {
            src: '/fonts/Poppins-Regular.ttf',
            fontWeight: 400,
        }
    ]
})

const styles = StyleSheet.create({
    page: {
        position: 'relative',
        fontSize: 16,
        lineHeight: 1.3,
        // paddingBottom: 60,
        paddingHorizontal: 40,
        // backgroundColor: '#F9C8BD',
        fontFamily: 'Poppins',
    },
    heading: {
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 40,
        fontWeight: 'bold',
    },
    heading2: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    subHeading: {
        fontSize: 18,
        marginBottom: 10,
    },
    bodyText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'semibold',
    },
    bulletText: {
        fontSize: 30,
        fontWeight: 'light',
        marginBottom: 40,
    },
    Logoimage: {
        width: '40%',  // Reduce image size to fit side by side
        height: '75%',
        marginBottom: 10,
    },
    image: {
        width: '90%',  // Reduce image size to fit side by side
        height: 200,
        marginBottom: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginBottom: 20,
    },
    imageContainer2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginVertical: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 10,
        color: 'gray',
    },
    background: {
        position: 'absolute',
        top: 0,           // Ensure it starts from the top
        left: 0,          // Ensure it starts from the left
        width: '100%',
        height: '100%',
        zIndex: -1,       // Ensure background is behind content
        // opacity: 0.1,     // Optional: Adjust opacity if needed
    },
    homelayout: {
        display: 'flex', // Enable flexbox layout
        justifyContent: 'space-between', // Distribute space evenly between items
        alignItems: 'center', // Center items vertically
        width: '100%',
        height: '100%',
    },
    centerItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    TextLeft: {
        textAlign: 'left',
    },
    paragraph: {
        textIndent: 30,
        fontSize: 22,
        lineHeight: 1.5,
        letterSpacing: 1,
    },
    marginY: {
        marginBottom: 50,
        marginTop: 60,
    },
    bulletContainer: {
        paddingLeft: 20, // Indent for bullets
        maxHeight: 600,
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 55,
        fontSize: 24,
    },
    posterContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
    },
    poster: {
        width: '100%',
        height: '100%',
    },
    TextGap: {
        lineHeight: 1.1,
        letterSpacing: 0.6,
    }
});


const MyDocument = () => (
    <Document>
        {/* Page 1 - Cover Page */}
        <Page size="A4" style={styles.page}>
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>
            <View style={styles.homelayout} >
                <View style={[styles.centerItem, styles.marginY]}>
                    <Text style={styles.heading}>NATIONAL SERVICE SCHEME</Text>
                    <Text style={styles.bodyText}>EMEA COLLEGE OF ARTS & SCIENCE , KONDOTTY</Text>
                    <Text style={styles.bodyText}>UNIT 102 & 115</Text>
                </View>
                {/* Image row */}
                <View style={styles.imageContainer}>
                    <Image style={styles.Logoimage} src={Emea} />
                    <Image style={styles.Logoimage} src={Nss} />
                </View>
                <View style={[styles.centerItem, styles.marginY]}>
                    <Text style={styles.bodyText}>CHILDREN'S DAY</Text>
                    <Text style={styles.bodyText}>Date: {new Date().toLocaleDateString()}</Text>
                </View>
            </View>
        </Page>

        {/* Page 2 - Text Content */}
        <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>

            {/* Content */}
            <View style={[styles.centerItem, styles.marginY]}>
                <Text style={styles.heading}>INDEX</Text>
            </View>

            {/* Bullet Points */}
            <View style={styles.bulletContainer}>
                <Text style={styles.bulletPoint}>
                    • <Text style={styles.bulletText}>PROGRAMME BROCHURE</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={styles.bulletText}>BACKGROUND & RELEVANCE</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={styles.bulletText}>OBJECTIVES</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={styles.bulletText}>PROGRAMME OUTCOME</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={styles.bulletText}>PHOTOS</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={styles.bulletText}>ATTENDANCE</Text>
                </Text>
            </View>
        </Page>


        {/* Page 3 - Images */}
        <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>

            {/* Image row */}
            <View style={styles.posterContainer}>
                <Image style={styles.poster} src={img} />
            </View>
        </Page>


        {/* Page 4 - Text Content */}
        <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>

            {/* Content */}
            <View style={[styles.centerItem, styles.marginY]}>
                <Text style={styles.heading}>BACKGROUND & RELEVANCE</Text>
            </View>

            {/* Bullet Points */}
            <View style={styles.TextLeft}>
                <Text style={styles.paragraph}>
                    EMEA College of Arts and Science, Kondotty,
                    marked Children's Day with a vibrant celebration
                    organised by NSS Units 102 and 115. The event, held
                    on November 14, 2024, at an Anganwadi, featured a
                    delightful array of fun-filled activities that brought joy
                    and excitement to young hearts.
                </Text>
            </View>
        </Page>

        {/* Page 3 - Text Content */}
        <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>

            {/* Content */}
            <View style={[styles.centerItem, styles.marginY]}>
                <Text style={styles.heading}>OBJECTIVES</Text>
            </View>

            {/* Bullet Points */}
            <View style={styles.bulletContainer}>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>1 To promote awareness of children’s rights and
                        welfare.</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>2 To foster creativity and talent through interactive
                        activities.</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>3 To encourage social responsibility among NSS
                        volunteers.</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>4 To strengthen the bond between children and the
                        community.</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>5 To provide a platform for children to express their
                        ideas and aspirations.</Text>
                </Text>

            </View>
        </Page>

        {/* Page 3 - Text Content */}
        <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>

            {/* Content */}
            <View style={[styles.centerItem, styles.marginY]}>
                <Text style={styles.heading}>REPORT</Text>
            </View>
            {/* para Points */}
            <View style={[styles.TextLeft]}>
                <Text style={styles.paragraph}>
                    EMEA College of Arts and Science, Kondotty,
                    marked Children's Day with a vibrant celebration
                    organised by NSS Units 102 and 115. The event, held
                    on November 14, 2024, at an Anganwadi, featured a
                    delightful array of fun-filled activities that brought joy
                    and excitement to young hearts.
                </Text>
            </View>

            <View style={[styles.TextLeft, styles.marginY]}>
                <Text style={styles.paragraph}>
                    EMEA College of Arts and Science, Kondotty,
                    marked Children's Day with a vibrant celebration
                    organised by NSS Units 102 and 115. The event, held
                    on November 14, 2024, at an Anganwadi, featured a
                    delightful array of fun-filled activities that brought joy
                    and excitement to young hearts.
                </Text>
            </View>

        </Page>
          {/* Page 3 - Text Content */}
          <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>

            {/* Content */}
            <View style={[styles.centerItem, styles.marginY]}>
                <Text style={styles.heading}>PROGRAMME OUTCOME</Text>
            </View>

            {/* Bullet Points */}
            <View style={styles.bulletContainer}>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>1 To promote awareness of children’s rights and
                        welfare.</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>2 To foster creativity and talent through interactive
                        activities.</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>3 To encourage social responsibility among NSS
                        volunteers.</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>4 To strengthen the bond between children and the
                        community.</Text>
                </Text>
                <Text style={styles.bulletPoint}>
                    • <Text style={[styles.bulletText,styles.TextGap]}>5 To provide a platform for children to express their
                        ideas and aspirations.</Text>
                </Text>

            </View>
        </Page>


        <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>
            <View style={[styles.centerItem, styles.marginY]}>
                <Text style={styles.heading}>PhOTOS</Text>
            </View>
            {/* Image row */}
            <View style={styles.posterContainer}>
                <Image style={styles.poster} src={img} />
            </View>
        </Page>
          {/* Page 3 - Images */}
          <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>

            {/* Image row */}
            <View style={styles.imageContainer2}>
                <Image style={styles.image} src={img} />
                <Image style={styles.image} src={img} />
                <Image style={styles.image} src={img} />
            </View>
        </Page>

          {/* Page 3 - Images */}
          <Page size="A4" style={styles.page}>
            {/* Background Image */}
            <View style={styles.background}>
                <Image src={BG} style={styles.background} />
            </View>
            <View style={[styles.centerItem, styles.marginY]}>
                <Text style={styles.heading}>ATTENDANCE</Text>
            </View>
            {/* Image row */}
            <View style={styles.posterContainer}>
                <Image style={styles.poster} src={img} />
            </View>
        </Page>
    </Document>
);

export default MyDocument;
