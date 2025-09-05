import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  PanResponder,
  StatusBar,
} from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";

const { width, height } = Dimensions.get("window");

export default function MyPager() {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState<number>(0);
  const [welcome, setWelcome] = useState(false);
  const swipeX = useRef(new Animated.Value(0)).current;
  const welcomeOpacity = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        if (gesture.dx >= 0 && gesture.dx <= width * 0.65) {
          swipeX.setValue(gesture.dx);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > width * 0.4) {
          Animated.timing(swipeX, {
            toValue: width * 0.65,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            setWelcome(true);
            Animated.timing(welcomeOpacity, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start();

            setTimeout(() => {
              Animated.timing(welcomeOpacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
              }).start(() => setWelcome(false));

              Animated.spring(swipeX, {
                toValue: 0,
                useNativeDriver: false,
              }).start();
            }, 1500);
          });
        } else {
          Animated.spring(swipeX, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

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

          <View style={styles.swipeWrapper}>
            <View style={styles.swipeContainer}>
              <Animated.View
                style={[
                  styles.swipeThumb,
                  { transform: [{ translateX: swipeX }] },
                ]}
                {...panResponder.panHandlers}
              >
                <Text style={styles.swipeThumbText}>{">>"}</Text>
              </Animated.View>
              <Text style={styles.swipeText}>Swipe to get started</Text>
            </View>
          </View>

          {welcome && (
            <Animated.View style={[styles.welcomeBox, { opacity: welcomeOpacity }]}>
              <Text style={styles.welcomeTitle}>Welcome to Kease 🎉</Text>
              <Text style={styles.welcomeDesc}>
                Your booking journey starts here. Explore units and book easily!
              </Text>
            </Animated.View>
          )}
        </View>
      </PagerView>
    </View>
  );
}

const PaginationDots = ({ page }: { page: number }) => {
  return (
    <View style={styles.dotsContainer}>
      <Text style={styles.arrow}>{"<"}</Text>
      {[0, 1, 2, 3].map((i) => (
        <View key={i} style={[styles.dot, page === i && styles.activeDot]} />
      ))}
      <Text style={styles.arrow}>{">"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
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
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
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
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: { backgroundColor: "#000" },
  arrow: { fontSize: 16, color: "#000", marginHorizontal: 6 },

  startNowBtn: { position: "absolute", bottom: 40 },
  startNowText: { fontSize: 16, fontWeight: "600", color: "#000" },

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
    backgroundColor: "#f0625d",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  swipeText: {
    position: "absolute",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  swipeThumb: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
  },
  swipeThumbText: { color: "#f0625d", fontSize: 20, fontWeight: "700" },

  welcomeBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
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
    color: "#444",
  },
});
