import React from "react";
import {View, Text, StyleSheet} from 'react-native';

type ListItemProps = {
    children: React.ReactNode;
};

const ListItem:React.FC<ListItemProps>  = ({ children }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>{'\u2022'}</Text>
            <Text style={styles.listItemText}>{children}</Text>
        </View>
    );
};

const ViewsSection = () => {
    return (
        <>
            <Text style={styles.textHeader}>Views</Text>
            <Text style={styles.text}>
                Application is split into 3 views:
            </Text>
            <ListItem>Home</ListItem>
            <ListItem>DHCP</ListItem>
            <ListItem>PTP</ListItem>
            <Text style={styles.text}>
                These views are accessible using the navigation bar located at the bottom of the screen.
            </Text>
        </>
    );
}

const HomeSection = () => {
    return (
        <>
            <Text style={styles.textHeader}>Home</Text>
            <Text style={styles.text}>
                Application starting point. This view displays the application logo, project acronym, an overview, and a tutorial.
            </Text>
        </>
    );
}

const HowToUse = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.header}>
                How to use
            </Text>
            <View style={styles.content}>
                <ViewsSection/>
                <HomeSection />
                <Text style={styles.textHeader}>PTP</Text>
                <Text style={styles.textHeader}>DHCP</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        height: 'auto',
        width: 360,
        alignContent: 'center',
        marginVertical: 15
    },
    header: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        marginBottom: 2
    },
    content: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#2B2E46',
        borderWidth: 3,
        borderRadius: 30,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    textHeader: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginVertical: 5
    },
    text: {
        fontSize: 16,
        color: 'white',
        paddingLeft: 15
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: 20,
        marginVertical: 5
    },
    bulletPoint: {
        fontSize: 16,
        color: 'white',
        marginRight: 5,
    },
    listItemText: {
        fontSize: 16,
        color: 'white',
    },
})

export default HowToUse;