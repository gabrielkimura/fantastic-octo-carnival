import * as React from 'react';
import { Button, View } from 'react-native';

function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Credits')}
                title="Go to Credits"
            />
        </View>
    );
}

export default HomeScreen;