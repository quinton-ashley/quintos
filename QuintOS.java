
package games_java;

public class QuintOS {
	// stub all QuintOS methods for now

	public static class Button {

		String txt;
		int row;
		int col;
		Runnable onClick;

		public Button() {

		}

		public Button(String txt) {

		}

		public Button(String txt, int row) {

		}

		public Button(String txt, int row, int col) {

		}

		public Button(String txt, int row, int col, Runnable onClick) {
			this.txt = txt;
			this.row = row;
			this.col = col;
			this.onClick = onClick;
		}

		public void erase() {

		}
	}

	public static class Input {

		String txt;
		int row;
		int col;
		Runnable onChange;
		Runnable onSubmit;

		public Input() {

		}

		public Input(String txt) {

		}

		public Input(String txt, int row) {

		}

		public Input(String txt, int row, int col) {

		}

		public Input(String txt, int row, int col, Runnable onChange) {

		}

		public Input(String txt, int row, int col, Runnable onChange, Runnable onSubmit) {

		}
	}

	public QuintOS() {

	}

	public static void alert() {

	}

	public static void alert(String txt) {

	}

	public static void alert(String txt, int row) {

	}

	public static void alert(String txt, int row, int col) {

	}

	public static void alert(String txt, int row, int col, int w) {

	}

	public static void alert(String txt, int row, int col, int w, int h) {

	}

	public static void log(char x) {

	}

	public static void log(double x) {

	}

	public static void log(float x) {

	}

	public static void log(int x) {

	}

	public static void log(String x) {

	}

	public static void log(char[] x) {

	}

	public static void log(double[] x) {

	}

	public static void log(float[] x) {

	}

	public static void log(int[] x) {

	}

	public static void log(String[] x) {

	}

	public static void log(char[][] x) {

	}

	public static void log(double[][] x) {

	}

	public static void log(float[][] x) {

	}

	public static void log(int[][] x) {

	}

	public static void log(String[][] x) {

	}

	public static void log(Object x) {

	}

	public static void text() {

	}

	public static void text(String txt) {

	}

	public static void text(String txt, int row) {

	}

	public static void text(String txt, int row, int col) {

	}

	public static void text(String txt, int row, int col, int w) {

	}

	public static void text(String txt, int row, int col, int w, int h) {

	}

	public static void text(double num) {

	}

	public static void text(double num, int row) {

	}

	public static void text(double num, int row, int col) {

	}

	public static void text(double num, int row, int col, int w) {

	}

	public static void text(double num, int row, int col, int w, int h) {

	}

	public static void text(int num) {

	}

	public static void text(int num, int row) {

	}

	public static void text(int num, int row, int col) {

	}

	public static void text(int num, int row, int col, int w) {

	}

	public static void text(int num, int row, int col, int w, int h) {

	}

	public static void textRect(int row, int col, int w, int h) {

	}

	public static void delay(int timeInMS) {

	}

	public static Button button() {
		return new Button();
	}

	public static Button button(String txt) {
		return new Button(txt);
	}

	public static Button button(String txt, int row) {
		return new Button(txt, row);
	}

	public static Button button(String txt, int row, int col) {
		return new Button(txt, row, col);
	}

	public static Button button(String txt, int row, int col, Runnable onClick) {
		return new Button(txt, row, col, onClick);
	}

	public static Input input() {
		return new Input();
	}

	public static Input input(String txt) {
		return new Input(txt);
	}

	public static Input input(String txt, int row) {
		return new Input(txt, row);
	}

	public static Input input(String txt, int row, int col) {
		return new Input(txt, row, col);
	}

	public static Input input(String txt, int row, int col, Runnable onChange) {
		return new Input(txt, row, col, onChange);
	}

	public static Input input(String txt, int row, int col, Runnable onChange, Runnable onSubmit) {
		return new Input(txt, row, col, onChange, onSubmit);
	}

	public static void eraseRect() {

	}

	public static void eraseRect(int row) {

	}

	public static void eraseRect(int row, int col) {

	}

	public static void eraseRect(int row, int col, int w) {

	}

	public static void eraseRect(int row, int col, int w, int h) {

	}

	public static void erase() {

	}

	public static void exit() {

	}
}
