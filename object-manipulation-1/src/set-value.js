/* exported setValue */
/* Make storage in a free space container {does not need to be in order}
-set use the property name of the object to get its value
-store the ouput in the storage
-return the output */

function setValue(object, key, value) {
  object[key] = value;
}
