import CustomSkeletonContent from "./lib";

const Usage = () => {
  return (
    // two layer layout...
    <CustomSkeletonContent
      isLoading={true}
      containerStyle={{ flex: 1 }}
      layout={[
        {
          key: "layout-one",
          width: 150,
          height: 100,
          marginBottom: 5,
          borderRadius: 20,
        },
        {
          key: "layout-two",
          width: 150,
          height: 40,
          marginBottom: 4,
          borderRadius: 5,
        },
        // Add more layout with available props (Add more props to the lib for usage)
      ]}
    />
  );
};
