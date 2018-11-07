const getFileExt = file => {
  const name = typeof file == "string" ? file : file.name;
  const ext = name.substring(name.lastIndexOf(".") + 1, name.length);
  return ext.toLowerCase();
};
export default getFileExt;
