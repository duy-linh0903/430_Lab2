import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 700
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    color: "gray",
    padding: 5,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 10,
    width: 200
  },
  res: {
    fontSize: 16,
    marginTop: 10
  }
})

export default styles;