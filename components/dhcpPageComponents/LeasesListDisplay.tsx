import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

interface LeasesListDisplayProps {
    leases: string[],
}

const LeasesListDisplay: React.FunctionComponent<LeasesListDisplayProps> = ({ leases }) => {
    return (
        <View style={stylesheet.LeasesListDisplay}>
            <Text style={stylesheet.text}>List of leases</Text>
            {leases.map((lease, index) => {
                const [ipAddress, macAddress] = lease.split(' ');
                return (
                    <ListItem key={index} bottomDivider containerStyle={stylesheet.leaseItem}>
                        <ListItem.Content style={stylesheet.leaseContent}>
                            <View style={stylesheet.leaseDetail}>
                                <Text style={stylesheet.label}>IP:</Text>
                                <Text style={stylesheet.leaseValue}>{ipAddress}</Text>
                            </View>
                            <View style={stylesheet.leaseDetail}>
                                <Text style={stylesheet.label}>MAC:</Text>
                                <Text style={stylesheet.leaseValue}>{macAddress}</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                );
            })}
        </View>
    );
};

const stylesheet = StyleSheet.create({
    LeasesListDisplay: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2E46',
        width: '80%',
        paddingVertical: 10,
        borderRadius: 40,
        marginTop: 10,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        height: 32,
        fontSize: 24
    },
    leaseItem: {
        backgroundColor: '#2B2E46',
        borderRadius: 40,
        marginTop: 10,
        width: '100%',
        alignSelf: 'center',
    },
    leaseContent: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
    },
    leaseDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    label: {
        fontWeight: 'normal',
        color: 'white',
        paddingRight: 10,
        fontSize: 22,
    },
    leaseValue: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
});

export default LeasesListDisplay;
