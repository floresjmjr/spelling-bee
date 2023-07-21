import { useState } from 'react';
import { Text, View } from 'react-native';
const Board = () => {

    const [wordList, setWordList] = useState([])

    let displayedList = (<Text>You have 0 words.</Text>);
    if (wordList.length) {
        displayedList = wordList.map((word) => <Text>word</Text>)
    }
    return (<>
        <View>
            <Text>Beginner</Text>
        </View>
        <View>
            {displayedList}
        </View>
        <Text>Bottom</Text>
    </>
    )
}

export default Board;