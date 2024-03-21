import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel'; 

const ProfileScreen = () => {
  const [currentSemester, setCurrentSemester] = React.useState(1); 

  const semesterGrades = [
    { semester: 1, grade: 'A' },
    { semester: 2, grade: 'C' },
    { semester: 3, grade: 'B' },
  ]; 

  const handleNextSemester = () => {
    setCurrentSemester(prevSemester => (prevSemester === semesterGrades.length ? prevSemester : prevSemester + 1));
  };

  const handlePreviousSemester = () => {
    setCurrentSemester(prevSemester => (prevSemester === 1 ? prevSemester : prevSemester - 1));
  };

  const renderItem = ({ item }) => (
    <View style={styles.gradeContainer}>
      <Text style={styles.gradeText}>Semester {item.semester}: <Text style={styles.grade}>{item.grade}</Text></Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('./background-logo.png')} style={styles.backgroundImage}>
        <View style={styles.profileContainer}>
          <Image
            source={require('./profile-pic.png')}
            style={styles.profilePic}
          />
          <Text style={styles.heading}>Student Name: <Text style={styles.boldText}>Boithatelo Motelle</Text></Text>
          <Text style={styles.text}>Student Number: <Text style={styles.boldText}>901016422</Text></Text>
          <Text style={styles.text}>Current Semester: <Text style={styles.boldText}>{currentSemester}</Text></Text>
          <Text style={styles.heading}>Semester Grades:</Text>
          <View style={styles.buttonContainer}>
            <Button title="<" onPress={handlePreviousSemester} disabled={currentSemester === 1} />
            <Carousel
              data={semesterGrades}
              renderItem={renderItem}
              sliderWidth={300} 
              itemWidth={300} 
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              activeSlideAlignment={'center'}
            />
            <Button title=">" onPress={handleNextSemester} disabled={currentSemester === semesterGrades.length} />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
    width: '100%', 
    height: '100%', 
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20,
  },
  profilePic: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', 
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000', // Black color
  },
  gradeContainer: {
    marginTop: 10,
  },
  gradeText: {
    fontSize: 16,
    color: '#777', // Gray color
  },
  grade: {
    fontWeight: 'bold',
    color: '#33ff55', // Black color
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ProfileScreen;
