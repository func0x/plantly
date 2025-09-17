import { File, Paths } from "expo-file-system";

export default function saveImage(imageUri: string | undefined) {
  if (!imageUri) return null;

  const fileName = `${Date.now()}-${imageUri.split("/").pop()}`;

  try {
    const sourceFile = new File(imageUri);
    const destinationFile = new File(Paths.document, fileName);
    sourceFile.copy(destinationFile);

    return destinationFile.uri;
  } catch (error) {
    console.error("Copy file error:", error);
    return null;
  }
}
