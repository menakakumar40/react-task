import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  listItemContainer: {
    //flex: 1,
    marginTop:10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  headerContainer: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center"
    //paddingRight: 5
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  callerDetailsContainerWrap: {
    justifyContent:"space-around",
    flex: 4,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  callIconContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  initStyle: {
    borderRadius: 10,
    width: 100,
    height: 100,
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent:"space-around"
  }
}));
