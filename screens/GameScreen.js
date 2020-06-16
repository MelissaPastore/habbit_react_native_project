import React, {Component} from 'react';
import AppleHealthKit from 'rn-apple-healthkit';



import Database from '../Database.js';

const db = new Database();

class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasPet: false,
            isLoading: true,
            user: {},
            notFound: 'Pet not found',
         }
         this.checkUserExists = this.checkUserExists.bind(this)
         this.ifHasPet = this.ifHasPet.bind(this)
         this.getHealthKitSteps = this.getHealthKitSteps.bind(this)
    }

    componentDidMount() {
        console.log('mount');
        // db.deleteAllUsers()
        this.getUser()
        this.getHealthKitSteps()
    }

    getUser() {
        console.log('hello from getUser');
        db.userById('1')
        .then((data) => {
            console.log('DATADATA', data)
            this.setState({
                user: data,
                isLoading: false,
            }, this.checkUserExists)
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        }, this.checkUserExists)
        console.log('user', this.state.user)
    }

    checkUserExists() {
        if(Object.keys(this.state.user).length === 0) return;
            this.setState({
                hasPet: true
            })
        console.log('USERUSER', this.state.user)
    }

    getHealthKitSteps() {
       
        const PERMS = AppleHealthKit.Constants.Permissions;

        const healthKitOptions = {
    permissions: {
        read:  [
            PERMS.StepCount,
            PERMS.Steps,
        ],
        write: [
            PERMS.StepCount
        ],
    }
};

        AppleHealthKit.initHealthKit(healthKitOptions, (err, results) => {
        if (err) {
            console.log("error initializing Healthkit: ", err);
            return;
        }

        // AppleHealthKit.getStepCount(null, (err, results) => {
        //     if (err) {
        //         return;
        //     }
        //     console.log("RESULTSRESULTSRESULTS", results)
        // });

        let options = {
            startDate: (new Date(2020,5,10)).toISOString(),
            endDate:   (new Date()).toISOString(),
            includeManuallyAdded: true,
        };

        console.log('STARTDATESTARTDATE', options)

        AppleHealthKit.getDailyStepCountSamples(options, (err, results) => {
            if (err) {
                return;
            }
            console.log('RESULTSRESULTSRESULTSRESULTSRESULTSRESULTS', results)
            const stepsSinceLastLogin = results.reduce((prev, cur) => {
                return prev + cur.value;
              }, 0);
            console.log('stepsSinceLastLoginstepsSinceLastLoginstepsSinceLastLoginstepsSinceLastLoginstepsSinceLastLoginstepsSinceLastLogin', stepsSinceLastLogin);
            
            
            
        });
     
    });
    }   

    ifHasPet() {
        if(this.state.hasPet) {
            return (
                <ButtonContainer onPress={() => this.props.navigation.navigate('Pet')}>
                    <ButtonText>Continue</ButtonText>
                </ButtonContainer>
            )
            
        } else {
            return (
                <ButtonContainer 
                    onPress={() => this.props.navigation.navigate('About')}>
                    <ButtonText>Create New Pet</ButtonText>
                </ButtonContainer>
            )
        }
    }

    render() { 
        return ( 
            <Container>
                <Header>HABBIT.</Header>
                {this.ifHasPet()}
            </Container>
         );
    }
}

export default GameScreen;