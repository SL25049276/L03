import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './Components/Movie';

class AllMovies extends React.Component {
  render() {
    return (
        <ScrollView>
            <View>
                <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"red"} poster={require('./img/doctor-sleep.jpg')} />
                <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"red"} poster={require('./img/midway.jpg')} />
                <Movie title={"Spiderman No way home"} year={2021} icon_name={"spider"} icon_color={"red"} poster={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQydr1AC1-SjCOBs-RKsINtHVRn-2BFyDx2jbvtsY7j77CJKtu0"} />
            </View>
        </ScrollView>
    );
  }
}


export default AllMovies;
