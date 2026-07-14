import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40
  },
  btn: {
    width: '20%',
    aspectRatio: 1,
    borderRadius: '50%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  btn_operator: {
    backgroundColor: '#F0F0F0'
  },
  btn_equal: {
    backgroundColor: '#FF8A00'
  },
  btn_text: {
    fontSize: 25,
    fontWeight: 500
  },
  btn_cal: {
    color: '#FF8A00',
    fontSize: 25,
    fontWeight: 500
  },
  text_equal: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 25
  },
  display: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10
  },
  result: {
    fontSize: 26
  },
  specialBtn: {
    height: 65,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  full: {
    width: '100%'
  },
  two: {
    width: '48%'
  }
});

export default style;