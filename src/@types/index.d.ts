type RootDrawerParamList = {
    Home: undefined;
    Credits: undefined;
};

type HomeScreenRouteProp = RouteProp<RootDrawerParamList, 'Home'>;
type HomeScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;

type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
};

type CreditsScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Credits'>;
type CreditsScreenProp = RouteProp<RootDrawerParamList, 'Credits'>;

type CreditsScreenProps = {
    navigation: CreditsScreenNavigationProp;
    route: CreditsScreenProp;
};
