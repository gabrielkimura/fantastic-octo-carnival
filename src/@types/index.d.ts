type RootDrawerParamList = {
    Home: undefined;
    Credits: undefined;
    Tutorials: undefined;
    FirstAidKit: undefined;
};

type HomeScreenRouteProp = RouteProp<RootDrawerParamList, 'Home'>;
type HomeScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;

type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
};


type FirstAidKitScreenRouteProp = RouteProp<RootDrawerParamList, 'FirstAidKit'>;
type FirstAidKitScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'FirstAidKit'>;

type FirstAidKitScreenProps = {
    navigation: FirstAidKitScreenNavigationProp;
    route: FirstAidKitScreenRouteProp;
};

type CreditsScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Credits'>;
type CreditsScreenProp = RouteProp<RootDrawerParamList, 'Credits'>;

type CreditsScreenProps = {
    navigation: CreditsScreenNavigationProp;
    route: CreditsScreenProp;
};

type TutorialsScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Tutorials'>;
type TutorialsScreenProp = RouteProp<RootDrawerParamList, 'Tutorials'>;

type TutorialsScreenProps = {
    navigation: TutorialsScreenNavigationProp;
    route: TutorialsScreenProp;
};

