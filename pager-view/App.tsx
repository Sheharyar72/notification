import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  PanResponder,
  StatusBar,
} from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

const { width, height } = Dimensions.get("window");

export default function MyPager() {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState<number>(0);
  const [welcome, setWelcome] = useState(false);

  const swipeX = useSharedValue(0);
  const shadow = useSharedValue(2);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        if (gesture.dx >= 0 && gesture.dx <= width * 0.85 - 70) {
          swipeX.value = gesture.dx;
          shadow.value = withSpring(10);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > width * 0.5) {
          swipeX.value = withTiming(width * 0.85 - 70, { duration: 200 }, () => {
            runOnJS(setWelcome)(true);
            runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);

            // ✅ msg show hoga aur button reset hoga — koi timer nahi
            swipeX.value = withSpring(0, {
              damping: 15,
              stiffness: 120,
              mass: 0.5,
            });
            shadow.value = withSpring(2);
          });
        } else {
          swipeX.value = withSpring(0, {
            damping: 15,
            stiffness: 120,
            mass: 0.5,
          });
          shadow.value = withSpring(2);
        }
      },
    })
  ).current;

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: swipeX.value }],
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: shadow.value,
    elevation: shadow.value,
  }));

  const bgStyle = useAnimatedStyle(() => {
    const progress = swipeX.value / (width * 0.85 - 70);
    return {
      backgroundColor: `rgba(240, 98, 93, ${0.3 + progress * 0.7})`,
      borderColor: "#f0625d",
      borderWidth: 2,
    };
  });

  const handleStartNow = () => {
    if (pagerRef.current) {
      pagerRef.current.setPage(3);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor="black" />

      <PagerView
        style={styles.container}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e: PagerViewOnPageSelectedEvent) =>
          setPage(e.nativeEvent.position)
        }
      >
        <View style={styles.page} key="1">
          <Image source={require("./assets/pg1.jpg")} style={styles.image} />
          <PaginationDots page={page} />
          <Text style={styles.title}>Are you planning to visit Riyadh?</Text>
          <Text style={styles.subtitle}>
            Looking for a unit suitable for you or your family?
          </Text>
          <TouchableOpacity style={styles.startNowBtn} onPress={handleStartNow}>
            <Text style={styles.startNowText}>Start Now   &gt;</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.page} key="2">
          <Image source={require("./assets/pg2.jpg")} style={styles.image} />
          <PaginationDots page={page} />
          <Text style={styles.title}>
            Do you want to find your place to stay easily?
          </Text>
          <Text style={styles.subtitle}>
            Kease offers many options with various features to suit your needs.
          </Text>
          <TouchableOpacity style={styles.startNowBtn} onPress={handleStartNow}>
            <Text style={styles.startNowText}>Start Now   &gt;</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.page} key="3">
          <Image source={require("./assets/pg3.jpg")} style={styles.image} />
          <PaginationDots page={page} />
          <Text style={styles.title}>All you need to know about Kease units</Text>
          <Text style={styles.subtitle}>
            All details with photos, including specifications, amenities,
            number of occupants, and location.
          </Text>
          <TouchableOpacity style={styles.startNowBtn} onPress={handleStartNow}>
            <Text style={styles.startNowText}>Start Now   &gt;</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.page} key="4">
          <Image source={require("./assets/pg4.jpg")} style={styles.image} />
          <PaginationDots page={page} />
          <Text style={styles.title}>Book your unit in just a few steps</Text>
          <Text style={styles.subtitle}>
            You can easily and securely book your unit and complete the payment
            process.
          </Text>

          {/* ✅ Swipe Button */}
          <View style={styles.swipeWrapper}>
            <Animated.View style={[styles.swipeContainer, bgStyle]}>
              <Animated.View
                style={[styles.swipeThumb, thumbStyle]}
                {...panResponder.panHandlers}
              >
                <Text style={styles.swipeThumbText}>{">>"}</Text>
              </Animated.View>
              <Text style={styles.swipeText}>Swipe to get started</Text>
            </Animated.View>
          </View>

          {/* ✅ Welcome Box */}
          {welcome && (
            <View style={styles.welcomeBox}>
              <Text style={styles.welcomeTitle}>Welcome to Kease 🎉</Text>
              <Text style={styles.welcomeDesc}>
                Your booking journey starts here. Explore units and book easily!
              </Text>
            </View>
          )}
        </View>
      </PagerView>
    </View>
  );
}

const PaginationDots = ({ page }: { page: number }) => (
  <View style={styles.dotsContainer}>
    <Text style={styles.arrow}>{"<"}</Text>
    {[0, 1, 2, 3].map((i) => (
      <View key={i} style={[styles.dot, page === i && styles.activeDot]} />
    ))}
    <Text style={styles.arrow}>{">"}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
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
  activeDot: { backgroundColor: "#000000" },
  arrow: { fontSize: 16, color: "#000000", marginHorizontal: 6 },

  startNowBtn: { position: "absolute", bottom: 40 },
  startNowText: { fontSize: 16, fontWeight: "600", color: "#000000" },

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
  },
  swipeThumbText: { color: "#f0625d", fontSize: 20, fontWeight: "700" },

  welcomeBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#dddddd",
    width: width * 0.85,
    alignItems: "center",
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f0625d",
    marginBottom: 5,
  },
  welcomeDesc: {
    fontSize: 14,
    textAlign: "center",
    color: "#444444",
  },
});
