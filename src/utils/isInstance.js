export default function(item) {
  return (
    item &&
    item.componentOptions &&
    item.componentOptions.propsData &&
    item.componentOptions.propsData.name
  );
}
