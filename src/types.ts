import { ViewStyle } from "react-native";

interface SkeletonItem {
  key: string;
  width: number;
  height: number;
  marginBottom: number;
  borderRadius?: number;
}

export interface CustomSkeletonContentProps {
  isLoading?: boolean;
  containerStyle?: ViewStyle;
  layout: SkeletonItem[];
  duration?: number;
}
