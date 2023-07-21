import { View, Button } from 'react-native';

const TextInputButtons = (props) => {

    const validateWordHandler = ()=> {
        // Dictionary Api
        // Global Context
      }

    return (
        <View>
            <Button title="Delete" onPress={props.delete}>Delete</Button>
            <Button title="Symbol">Symbol</Button>
            <Button title="Enter" onPress={validateWordHandler}>Enter</Button>
        </View>
    )
}

export default TextInputButtons;