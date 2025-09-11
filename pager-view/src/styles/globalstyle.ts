import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#ffffff" 
  },
  page: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: width,
    height: height * 0.45,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#000000",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555555",
    marginBottom: 30,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 7,
    backgroundColor: "#d3d3d3",
    marginHorizontal: 4,
  },
  activeDot: { 
    backgroundColor: "#000000" 
  },
  arrow: { 
    fontSize: 16, 
    color: "#000000", 
    marginHorizontal: 6 
  },
  startNowBtn: { 
    position: "absolute", 
    bottom: 40 
  },
  startNowText: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#000000" 
  },
  swipeWrapper: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
    width: "100%",
  },
  swipeContainer: {
    width: width * 0.85,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#f8b3b0",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  swipeText: {
    position: "absolute",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  swipeThumb: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    borderWidth: 2,
    borderColor: "#f0625d",
    zIndex:1,
  },
  swipeThumbText: {
    color: "#f0625d",
    fontSize: 20,
    fontWeight: "700",
  },
  // Home Screen Styles
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  homeIcon: {
    fontSize: 80,
    color: "#f0625d",
    marginBottom: 20,
  },
  homeText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
  },
});