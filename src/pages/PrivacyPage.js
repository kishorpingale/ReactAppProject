class PrivacyPage extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Register"
          onPress={() => navigate('Signup')}
        />
      );
    }
  }