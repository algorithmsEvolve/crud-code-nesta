import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "white",
  },
  container_Blogs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "white",
  },
  textInput_title: {
    marginTop: 20,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  textInput_content: {
    marginTop: 20,
    height: 90,
    borderColor: "gray",
    borderWidth: 1,
  },
  listOfBlogs: {
    width: "100%",
  },
  listView: {
    elevation: 8,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: "green",
    padding: 20,
  },
  titleFont: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  contentFont: {
    fontSize: 15,
    lineHeight: 30,
    color: "white",
  },
  buttonContainer_Blogs: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 25,
  },
  buttonView_Blogs: {
    marginRight: 15,
    marginLeft: 15,
  },
});
