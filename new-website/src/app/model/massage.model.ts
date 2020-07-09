export class ImageItem {
  /**
   * The img path.
   */
  img: string;
  /**
   * The title to display.
   */
  title: string;

  /**
   * The type to emit
   */
  type: number;
  /**
   * True, display the title in dark. Use if the image is too dark;
   */
  dark?: boolean;
}
