import { Redirect } from "expo-router";
import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="(home)">
        <Label>Home</Label>
        <Icon
          selectedColor={theme.colorGreen}
          sf={{ default: "house", selected: "house.fill" }}
          drawable="ic_menu_mylocation"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon
          selectedColor={theme.colorGreen}
          sf={{ default: "person", selected: "person.fill" }}
          drawable="ic_menu_preferences"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
